const player = document.querySelector('.player');
const wall = document.querySelector('.wall');
const goClick = document.querySelector('.stat')
goClick.addEventListener('click', startGame);


document.addEventListener('touchstart', jump);
document.addEventListener('keydown', jump);
document.addEventListener('click', jump);

function startGame() {
    wall.classList.toggle('speed');
    goClick.style.backgroundColor = "yellow";
    goClick.innerHTML = 'just do it'
    
}

function jump() {
    player.classList.add('jump');
    setTimeout(() => {
        player.classList.remove('jump')
    }, 500);
}

let isAlive = setInterval(() => {
    let playerBot = parseInt(window.getComputedStyle(player).getPropertyValue('bottom'));
    let wallLeft = parseInt(window.getComputedStyle(wall).getPropertyValue('left'));

    if(wallLeft < 140 && wallLeft > 100 && playerBot <= 40) {
        console.log(playerBot, wallLeft)
        goClick.style.backgroundColor = "red";
        wall.classList.remove('speed');
        goClick.innerHTML = 'TRY AGAN &#8634;'
    }
}, 10);