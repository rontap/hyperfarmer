/*
** Superfarmer engine. Defines variables, and uses pre-NXT code
*/

//--------------------
//-CONSTS------------
//--------------------

const gameFieldMax = [50,24,20,12,3,4,2];   //maximum amount of each animal
const values = [1,6,12,36,72,6,36];         //how much an animal is worth, measured in rabbits
const upgradeCost = [6,2,3,2];   //individual upgrade cost
         

//--------------------
//-GAME-VARS----------
//--------------------

UserList= [];       //stores USER types 
function initGameField() {
gameFieldHas = [50,24,20,12,3,4,2];

gameFieldHasNames = ["rabbit","sheep","pig","cow","horse"];
gameFieldHasDogs  = ["big","small"];
currentUserGameField = [0,0,0,0,0,0,0];

wonUnder=[];
waitBetweenTicks=tickSpeed.value;
editUserAI="";
performanceMode = false;
gamesPlayed=0;
gameTickVar=0; //currently active user
isGameWon=false;
isGameRunning=false;

GameStat = [[],[],[],[],[],[],[]];    //stores array-s 
gameMaxRounds=Infinity;     //used by competition mode

GameStatWhenSOWins = [[],[],[],[],[],[],[]];    //stores array-s 
statLastOpened=0;


}

say = { //alert helping for (?)
    perf:'Performance Mode\nDisables UI updates during a game. It will update only when a game is won, making the UI and the simulation faster',
    sim:'Plays games automatically, with all the players, using the defined AI code.\nEach round will last [tickspeed] ms long.',
    comp:'Simulates all AI, much like simulation mode. It disables all UI interaction; and has more information when simulation is over\nAccuracy increased with more rounds played.',
    newroll:'Rolls the dice, and does not trade. If you want to trade, press the +/- buttons below. This will automatically trigger a new roll.',
    aiselect:'Select which AI should be run in this player. Only valid in Simulation and Competition.',
    it: function (call) { alert(say[call]) }
    
}
initGameField(); //for reinit and init;

//--------------------
//-BASIC-FUNCTIONS----
//--------------------

$    = (call)    =>  document.querySelector(call)      
$$   = (call)    =>  document.querySelectorAll(call)  

$DOMInteraction = function (call) {
    if (call) {
        $    = (call)    =>  document.querySelector(call) 
        $$   = (call)    =>  document.querySelectorAll(call) 
    }
    else {
        $ = function() { 
            return { 'classList' : { 
                'add' : function(){return false},
                'remove' : function(){return false},
                'toggle' : function(){return false}
                        } ,
                'innerHTML' : {
                'replace' : function(){return false},       
                    },
                'outerHTML' : {
                'replace' : function(){return false},       
                    }
            }   
            }

        $$ = function() { return Array.apply(null, Array(99)).map(Function.prototype.valueOf, $() );  }
    }
}

Math.spread = function(call /*array*/)
{
   let avg = Math.avg(call);
   let temp = []
   for (i=0;i<call.length;i++) {
       temp[i]=Math.pow(call[i]-avg,2);
   }
   return Math.sqrt(Math.sum(temp)/(temp.length));
}

Math.sum = function(call /*array*/) {
    temp=0;
    for (i=0; i<call.length;i++) {
        temp+=call[i];   
    }
    return temp;
}
Math.avg = function(call /*array*/) {
    let a=0;
    for (let i=0; i<call.length;i++) {
        a+=call[i];
    }
    return Math.round(a/call.length);
}
function pad(call)   {
    if (String(call).length!=2)  
        return "0"+String(call)
    else
        return call
}

function createNewUser() {
    addUIElement();
    UserList[UserList.length] = new user(UserList.length);
    
    //maximum amount of users is 6, in order to prevent lag and errors.
    if (UserList.length>6) {
        $('#newplayer').innerHTML="Max Player count reached!"; 
        $('#newplayer').disabled=true;
    }  
    $("#simulationRunBtn").disabled=false ;
    
    
    
}


function openCodeEditor() {
    a = window.open('code.html', '_blank', 'toolbar=0,location=0,menubar=0,width=600,height=600');
}


