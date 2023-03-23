
var buzina= new Audio('url', "som/buzino.mp3");
const score = document.querySelector('#score');


function moveLeft(){
    let left =
    parseInt(window.getComputedStyle(caracter)
    .getPropertyValue("left"));
    left -= 100;
    if(left>=0){
        caracter.style.left = left +"px";
    }
}
function moveRight(){
    let left =
    parseInt(window.getComputedStyle(caracter)
    .getPropertyValue("left"));
    left += 100;
    if(left<300){
        caracter.style.left = left +"px";
    }
}

document.addEventListener("keydown", event =>{
    if(event.key==="ArrowLeft"){moveLeft();}
    if(event.key==="ArrowRight"){moveRight();}
});

var block = document.getElementById("block");
var counter =0;
block.addEventListener('animationiteration', () => {
    var random = Math.floor(Math.random() * 3);
    left = random * 100;
    block.style.left = left + "px";
    counter++;
});

setInterval (function(){
    var caracterLeft =
    parseInt(window.getComputedStyle(caracter).getPropertyValue("left"));
    var blockLeft =
    parseInt(window.getComputedStyle(block).getPropertyValue("left"));    
    var blockTop =
    parseInt(window.getComputedStyle(block).getPropertyValue("top"));
    if(caracterLeft == blockLeft && blockTop<500 && blockTop>300){
        alert('Game Over! Pontuação: '+counter);
        block.style.animation = 'none';

    }   
    score.innerHTML = `Pontuação: ${counter}`;
}, 1);

document.getElementById("left").addEventListener("touchstar", moveLeft);
document.getElementById("right").addEventListener("touchstar", moveRight);
