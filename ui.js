
//--------------------
//-USER-UPDATE-INTERFACE
//--------------------

isSimulationRunning=false;
isCompetitionModeOn=false;

function AIListActivateAll(call) {
    if (isNaN(call)) { 
      isSimulationRunning=!isSimulationRunning;
      call=isSimulationRunning;
    }
    if (call) {
        gameTick();
        isGameRunning=true;
        $('#simulationRunBtn').innerHTML="Stop simulaton ■";
    }
    else {
        isGameRunning=false;
        $('#simulationRunBtn').innerHTML="Start simulaton ►";

    }
    for (i=0;i<$$('container select').length-1;i++)
    {
        if (call) $$('container select')[i].disabled=true;
        else $$('container select')[i].disabled=false;
    }
}

  

function addUIElement() {
    $('#UIElementHolder').innerHTML+= $('#UIContainerBase container').outerHTML.replace(/%userID%/g,UserList.length);
    console.log(AILcfg[UserList.length]);
    setTimeout(function(){
        AIDisplayUpdate();
        $$('container select')[UserList.length-1].selectedIndex =  AILcfg[UserList.length-1]  ;
    },300); 
    
}

// staticsis pane 
function readStat(id) {
    
    let currStat = GameStat[id];
    let info='';
    if (currStat.length<200) info=' <br><b>Not enugh games played for accurate statistics.</b>'
    $('#statHolder').innerHTML=$$('.statWin')[id].innerHTML.replace(/class/g,"destructedClass")+info;
    currMax=Math.max(...currStat);
    temp='';
    
    for (i=0;i<currStat.length;i++) {
        temp+="<span style='width:"+100/currStat.length+"%;height:"+(currStat[i]/currMax*100)+"%'></span>";
    }
    $('#statIdName').innerHTML="Statistics for ID No "+id;
    $('#proghold').innerHTML=temp;
    $('#statSpread').innerHTML=Math.floor(Math.spread(currStat)*10);
    $('#winRateStat').innerHTML=Math.floor((currStat.length/gamesPlayed)*UserList.length*100) + " / [100]";
    statLastOpened=id;

}

//resetting users

function resetGameSetup() {
    AIListActivateAll(false);
    $('#reset').innerHTML="Resetting... &#10687";
    setTimeout( function(){ $('#reset').innerHTML="Reset Games &#8855;"},1200);
    initGameField();
    for (let ii=0;ii<UserList.length;ii++) {
        console.log(ii);
        UserList[ii].gameWon();
        UserList[ii].resetUser();
        UserList[ii].updateUI(ii);
    }
    
}