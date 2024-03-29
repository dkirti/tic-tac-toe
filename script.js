let boxes=document.querySelectorAll(".box");
let btn=document.querySelector("#reset");
let msg=document.querySelector("#msg");
let msgCon=document.querySelector(".msg-container");
let reset=document.querySelector("#reset");
let start=document.querySelector("#new-btn");
let turnX=true;
 
let patterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

const resetGame=()=>{
    turnX=true;
    enableBox();
    msgCon.classList.add("hide");
}

reset.addEventListener("click",()=>{
    resetGame();
})

start.addEventListener("click",()=>{
    resetGame();
})

const disableBox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnX){
            box.innerText="X";
            turnX=false;
        }
        else{
            box.innerText="O";
            turnX=true;
        }
        box.disabled=true;
        winGame();
    })
})



const winGame=()=>{
    for(let pattern of patterns){
        let postVal1=boxes[pattern[0]].innerText;
        // console.log(postVal1);
        let postVal2=boxes[pattern[1]].innerText;
        // console.log(postVal2);
        let postVal3=boxes[pattern[2]].innerText;
        // console.log(postVal3);

        if(postVal1!="" &&postVal2!=""&& postVal3!="")
        {if(postVal1===postVal2 && postVal2===postVal3){
            console.log("winner",postVal1)
            winner(postVal1);
        }}
       
    }
}

const winner=(win)=>{
    msg.innerText=`Congratulations, Winner is ${win}`;
    msgCon.classList.remove("hide");
    disableBox();
}
