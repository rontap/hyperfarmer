
//--------------------
//-USER-UPDATE-INTERFACE
//--------------------

function AIListActivateAll(call) {
    if (call) {
        for (i=0; i<UserList.length;i++) {
            AIList[i]();
        }
        isGameRunning=true;
        $('#simulationRunBtn').innerHTML="Stop simulaton ■";
        $('#simulationRunBtn').onclick=function(){AIListActivateAll(false)};
    }
    else {
        isGameRunning=false;
        $('#simulationRunBtn').innerHTML="Start simulaton ►";
        $('#simulationRunBtn').onclick=function(){AIListActivateAll(true)};

    }
    for (i=0;i<$$('.editAIBtn').length-1;i++)
    {
        if (call) $$('.editAIBtn')[i].disabled=true;
        else $$('.editAIBtn')[i].disabled=false;
    }
}
function readAI(user) {
    if (AIList[user] != undefined){
        AIcode.value = String(AIList[user]).slice(20,Infinity);
    }
    else {
        AIcode.value=""
    }
    $('#ultimateEditor').classList.add('on');
    $('#AIEditNo').innerHTML=user;
    editUserAI=user;
}
function writeAI(run) {
    AIList[editUserAI] = new Function(AIcode.value);
    if (run){
        AIList[editUserAI]()
    }
}
function closeAIWindow() {
    AIcode.value = ""
    $('#ultimateEditor').classList.remove('on');
}    

function addUIElement() {
    $('#UIElementHolder').innerHTML+= $('#UIContainerBase container').outerHTML.replace(/%userID%/g,UserList.length);
    
}