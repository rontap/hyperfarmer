//--------------------
//-CONSTS------------
//--------------------

const gameFieldMax = [50,24,20,12,3,4,2];   //maximum amount of each animal
const values = [1,6,12,36,72,6,36];         //how much an animal is worth, measured in rabbit   s
const upgradeCost = [6,2,3,2];              //individual upgrade cost
gameFieldHas = [50,24,20,12,3,4,2];         //amount of animal left

//--------------------
//-GAME-VARS----------
//--------------------

wonUnder=[];
waitBetweenTicks=tickSpeed.value
editUserAI=""
performanceMode = false;
gamesPlayed=0;

UserList= [];       //stores USER types 
GameStat = [[]];    //stores array-s 

//--------------------
//-BASIC-FUNCTIONS----
//--------------------

$    = (call)    =>  document.querySelector(call)      
$$   = (call)    =>  document.querySelectorAll(call)  

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
}

isGameRunning=false;
