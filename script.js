const buttonEl = document.querySelector("button");
buttonEl.setAttribute("class","btn btn-secondary btn-lg");

function takesReallyLongTime(cb){
    /* 
    takes really long time to do thing. create timeout here for a really long time so that the cb is delayed for 10000
    */
   setTimeout(function(){
    buttonEl.setAttribute("class","btn btn-success btn-lg")
    // "done" is async
    console.log("done!")

    cb ("the info that you wanted")
}, 10000);
   // "done" is synchronous
console.log("done?")
    

}


function initGame () {
    const buttonEl = document.querySelector("button");
    buttonEl.setAttribute("class","btn btn-secondary btn-lg");  

    function startGame () { 
        buttonEl.setAttribute("class","btn btn-success btn-lg");
 }
 buttonEl.addEventListener("click",startGame)
}
initGame();


//executes function takesReallLongTime
takesReallyLongTime (function(){
    console.log()
    buttonEl.setAttribute("class","btn btn-danger btn-lg");
});
// in seconds
setTimeout(function(){
    buttonEl.setAttribute("class","btn btn-success btn-lg")
}, 5000);



const numbersEl= document.getElementById("num"); 
const lowercaseEl= document.getElementById("lower"); 
const uppercaseEl= document.getElementById("upper"); 
const symbolsEl= document.getElementById("sym"); 
const resultEl=  document.getElementById("result");
const lengthEl= document.getElementById("input"); 
console.log();

const passlength = +lengthEl.value;
const yesLower= lowercaseEl.checked;
const yesUpper= uppercaseEl.checked;
const yesSymbols= symbolsEl.checked;