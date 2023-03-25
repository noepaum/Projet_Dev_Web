console.log('Jeu démarré') //echo en php//

let box = document.querySelector('.box');
let click=0;
let scoreElement=document.querySelector('#score');
let highElement=document.querySelector('#highscore');

let chrono =10;
let chronoElement=document.querySelector('#chrono');
chronoElement.innerHTML = chrono;


console.log(box);

highElement.innerHTML = localStorage.getItem('highScore');

box.addEventListener("click", () => {
    if(chrono!=0){
        console.log('click sur la box !');
        click += 1;
        scoreElement.innerHTML=click;


        let top = Math.floor(Math.random() * window.innerHeight);
        let left = Math.floor(Math.random() * window.innerWidth);

        //box.style.top = + "px";
        box.style.top = `${top}px`;
        //box.style.left = + "px";
        box.style.left = `${left}px`;

    }
    
    //box.style.top = "10px";
    // box.style.backgroundColor = "gray";
});
setInterval(()=> {
    console.log("timer");

    if(chrono!=0) {
        chrono--;
        chronoElement.innerHTML = chrono;
    }
},1000)

if(chrono==0){

// Get the previous high score from local storage
var previousHighScore = localStorage.getItem('highScore');
if(previousHighScore==null){
    previousHighScore = 0;
}

// Check if the user's score is higher than the previous high score
if (scoreElement.innerHTML > previousHighScore) {
  // Store the new high score in local storage
  localStorage.setItem('highScore', scoreElement.innerHTML);
  highElement.innerHTML = scoreElement.innerHTML;
}
}


