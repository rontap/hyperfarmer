/*
** main game tick. Introduced in v1, split from engine.js in v5
*/
function errorText(call, type) {
    $('#UIErrorHolder').style.display="block";
    $('#UIErrorHolder').innerHTML+="<container "+type+">"+ call + "<br>In round " +gamesPlayed+ "</container>";
}  

function gameTick() { //main game tick. try to run AS
    if (gameMaxRounds-3>gamesPlayed) {  //only important in competition mode
        if (isSimulationRunning) {
            if (isGameWon) { //wait to clear Stack
                isGameWon=false;
                QSProgress.style.width=gamesPlayed/gameMaxRounds*100+"%";
                setTimeout( () => gameTickAS(),60);
            }
            else {  
               try { gameTickAS(); }
               catch (e) {
                   errorText('JavaScript Error due gameTick ' + gameTickVar +' : \n ' + e, 'fatal');
                   UserList[0].resetUser();
                   setTimeout( () => gameTickAS(),60);
               }
            }
        }
    }
    else {//if reaching the end of competition mode
       if (gameMaxRounds>gamesPlayed)  { $DOMInteraction(true); gameTickAS(); }
       else printCompetitionResult();
    }
}   

function gameTickAS() {
    if (waitBetweenTicks==0) {
        new Promise((resolve) => {
            keepGameTickVarInPlace()
        }).then( promiser(gameTickVar) )
    }
    else {
        new Promise((resolve) => {
            keepGameTickVarInPlace()
        }).then( 
        setTimeout( () => {
                promiser(gameTickVar);
            }, waitBetweenTicks)
        );
    }
    
    //select currently active user
    if (!performanceMode) {
        for (i=0;i<UserList.length;i++) {
            $$('.isactive')[i].innerHTML='Inactive' ;
        }
        $$('.isactive')[gameTickVar].innerHTML='<b>Active</b>'
    };
    
}

//this is needed because of promise-es 
function keepGameTickVarInPlace() {
    gameTickVar++
    if (gameTickVar>=UserList.length) gameTickVar=0;
}
