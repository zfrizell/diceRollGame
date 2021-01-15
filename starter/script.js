'use strict';



var button = document.querySelector(".btn--roll");
var hold = document.querySelector(".btn--hold");
var newGame = document.querySelector(".btn--new");
var dice = document.querySelector(".dice");
var player1 = document.querySelector(".player--1")
var player2 = document.querySelector(".player--2")

gamePlaying = true;
activePlayer = 0;
current = 0;
scores = [0, 0];

var switcher = function() {
    if (activePlayer === 0){
        activePlayer =1
        player1.classList.add("current")
        player2.classList.remove("current")
    } else {
        activePlayer =0
        player1.classList.remove("current")
        player2.classList.add("current")
    }
}



button.addEventListener("click", function(){
    if (gamePlaying){
    let diceScore = Math.floor((Math.random()*6) + 1) 

    if (diceScore ===1){
        current = 0;
        document.getElementById("current--"+activePlayer).textContent = 0;
        switcher()
    } else {
    current += diceScore;
    document.getElementById("current--"+activePlayer).textContent = current 
    }
    dice.src = `dice-${diceScore}.png`
    }})

hold.addEventListener("click", function(){
    
    

    scores[activePlayer] += current
 document.getElementById("score--"+activePlayer).textContent = scores[activePlayer]

 if (scores[activePlayer]>=50){
    document.getElementById("name--"+activePlayer).textContent = "WINNER!!";
    gamePlaying = false;
   
    } else {
         switcher()
         current = 0
    }

})



newGame.addEventListener("click", function(){
    gamePlaying = true;
    activePlayer = 0;
    current = 0;
    scores = [0, 0];
    document.getElementById("current--0").textContent = 0;
    document.getElementById("current--1").textContent = 0;
    document.getElementById("score--0").textContent = 0;
    document.getElementById("score--1").textContent = 0;
})


console.log();
