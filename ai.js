/*
** module AI handler. introduced in v2
*/
waitBetweenTicks=0;
var curr;

AILcfg = [0,1,0,0,0,0,0]; // configuring which AI to use
AINames = ["rontap AI V4", "rontap AI V4b","rontap AI V4 Random"];
//which AI is connected to which user

promiser = function (nth) {
    try {
         new Promise((resolve) => {
         if (waitBetweenTicks==0) 
            {
                AIL[AILcfg[nth]](UserList[nth]);
            }
         else 
            setTimeout( () => {
                AIL[AILcfg[nth]](UserList[nth]);
            }, waitBetweenTicks);
     }).then(gameTick());
    }
    catch(e) {
        errorText('JavaScript Error due AI ' + gameTickVar +' : \n ' + e, 'fatal');
        UserList[0].resetUser();
        setTimeout( () => gameTickAS(),60);
    }
};

   
AIL = [ function(curr/*``*/){
    //RTAI V4
      for (i=curr.has.length;i>=0;i--) {
            if (curr.has[i]==0) isGameWon=false;
            if (i==0) {
                 curr.doRound(0,true,true); i=-Infinity; 
            }
            if ((curr.has[1]>2)&&(curr.has[0]>6)&&(curr.has[5]==0)) {
                curr.doRound(2,true,true); i=0;
            }
            else if ((curr.has[3]>1)&&(curr.has[0]>1)&&(curr.has[6]==0)) {
                curr.doRound(2,false,true);  i=0;
            }
            else if (curr.has[i]+2>upgradeCost[i]) {
                curr.doRound(1,i,true);
                i=0; 
            }
           
        }
       
},
  function(curr/*``*/){
    //RTAI V4b
      for (i=curr.has.length;i>=0;i--) {
            if (curr.has[i]==0) isGameWon=false;
            if (i==0) {
                 curr.doRound(0,true,true);
                  i=-Infinity; 
            }
            if ((curr.has[1]>3)&&(curr.has[0]>12)&&(curr.has[5]<2)) {
                curr.doRound(2,true,true); i=-Infinity;
            }
            else if ((curr.has[3]>1)&&(curr.has[0]>1)&&(curr.has[6]==0)) {
                curr.doRound(2,false,true);  i=-Infinity;
            }
            else if (curr.has[i]+1>upgradeCost[i]) {
                curr.doRound(1,i,true);
                i=-Infinity; 
            }
           
        }
       
},
function(curr/*``*/){
    //RTAI V4 using random
    
      for (i=curr.has.length;i>0;i--) {
            if (curr.has[i]==0) isGameWon=false;
            if (i==1) {
                 curr.doRound(0,true,true);  i=-Infinity; 
            }
            if ((curr.has[1]>3)&&(curr.has[0]>6)&&(curr.has[5]<2)) {
                curr.doRound(2,true,true);   i=-Infinity; 
            }
            else if ((curr.has[3]>2)&&(curr.has[0]>5)&&(curr.has[6]==0)) {
                curr.doRound(2,false,true);    i=-Infinity; 
            }
            else if ((curr.has[i]>upgradeCost[i])&&(Math.random()>0.3)) {
                curr.doRound(1,i,true);
                 i=-Infinity; 
            }

        }
}
];


function AILstore(fn,nth,name) {
    AIL[nth] =  Function("curr",fn)  ;
    AINames[nth] = name;
    //updating all AI dropdown lists
    AIDisplayUpdate();
}
function AIDisplayUpdate() {
       for (i=0; i<UserList.length;i++) {
        $$('.aiselect')[i].innerHTML="";
        for (j=0;j<AINames.length;j++) {
            $$('.aiselect')[i].innerHTML+="<option>" + AINames[j] + "</option>";
        }
    } 
}
function AILcfgChange(nth,e) {
    AILcfg[nth] = $$('container select')[nth].selectedIndex;
}