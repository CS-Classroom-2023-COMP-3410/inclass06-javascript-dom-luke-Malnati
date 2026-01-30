//luke malnati

let active=0;
let faceUp=[];
let glrba=400;
let origCardList = ["&#127153;", "&#127154;", "&#127155;", "&#127156;", "&#127157;", "&#127158;", "&#127159;", "&#127160;", "&#127161;", "&#127162;", "&#127163;", "&#127165;", "&#127166;"];
let moves=0;
let pairs = 0;
let startTime;
let currentTime;

let grid2=[];




function shuffle(){
    let nums=[];
    let cardList=origCardList;
    //console.log(cardList);
    for (let i=0;i<8;i++){
        let rCard = Math.floor((Math.random()*cardList.length));
        nums.push(cardList[rCard]);
        nums.push(cardList[rCard]);
        cardList.splice(rCard,1);
    }

    //nums is going to be card faces
    //grid2=[];
    //let nums = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
    for (let i=0;i<16;i++){
        let num = Math.floor((Math.random()*nums.length));
        grid2.push(nums[num]);
        nums.splice(num,1);
        console.log("nums: " + nums);
        console.log("grid2: " + grid2);
    }
    startTime=Date.now();
}

function myClick(theId){
    //console.log("id: " , theId);

    if(faceUp.length == 2){
        //console.log("faceUp: " , faceUp);
        if(grid2[faceUp[0]] == grid2[faceUp[1]]){
            document.getElementById(faceUp[0]).id = "grba";
            glrba++;
            document.getElementById(faceUp[1]).id = "glrba";
            pairs++;
            }
    }
    
    if (active == 2){
        //set all the cards to the card back
        faceUp.pop();
        faceUp.pop();
        for (let i=0;i<16;i++){
            if(document.getElementById(i) != null){
                document.getElementById(i).innerHTML = "&#127136;";
            }
        }
        active *= 0;        
    }
    document.getElementById(theId).innerHTML = grid2[theId];
    faceUp.push(theId);
    active++;
    moves++;
    document.getElementById("moveCounter").innerHTML = `cards flipped: ${moves}`;
    document.getElementById("pairCounter").innerHTML = `pairs found: ${pairs}`;
    if (pairs < 8){
        currentTime=(Date.now()-startTime)/1000;
        document.getElementById("timer").innerHTML = `time elapsed: ${currentTime}`;
    }
    
    
}
