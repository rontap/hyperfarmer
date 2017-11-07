/*
** module: competition introduced in v5
*/

function startCompetition() {
    $DOMInteraction(false);
    gameMaxRounds=200;
    isSimulationRunning=true;
    gameTick();
    isGameRunning=true;
    gameTickVar=0;
    UICompetition.style.display="block";
    UIElementHolder.style.display="none";
    
}

//fires upon completion
function printCompetitionResult() {
    isSimulationRunning=false;
    gamesPlayed=0;
    temp="<th><td>ID</td><td>#games</td><td>#won</td><td>win %</td></th>";
    UICompetition.style.display="block";
    UIElementHolder.style.display="block";
    for (i=0;i<UserList.length;i++) {
        temp+="<tr><td>";
        temp+="Id no:" + i + "</td><td>";
        temp+=GameStat[i].length + "</td>";
        temp+=UserList[i].round + "</td></tr>";
    }
    $('#UICompetition table').innerHTML+=temp;
}