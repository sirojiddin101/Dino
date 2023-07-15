
const character = document.querySelector(".characters"),
    score = document.querySelector(".score span"),
    block = document.querySelector(".block"),
    body = document.body,
    game = document.querySelector(".game")

window.addEventListener("keydown", (e) => {
    if (e.key === " ") {
        playGame();
        jump()
        game.classList.remove('active')
    }

})

function playGame() {
    block.style.animationPlayState = "running";
    block.style.display = "block"
}

function jump() {
    character.classList.add("jump");
    block.style.animationPlayState = "running";
    // block.style.display = "block";
        setTimeout(() => {
            character.classList.remove("jump")
        }, 500);
    let time = setInterval(calculateScore, 100);
    setInterval(() => {
        checkDead(time)
    }, 100);
}

let number = 0;

function calculateScore() {
    number++;
    score.innerText = number;
}

function scorePaused() {
    number = 0;
    score.innerText = number;
}

function checkDead(time) {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if (blockLeft < 40 && blockLeft > 0 && characterTop >= 250) {
        block.style.animationPlayState = "paused";
        block.style.display = "none";
        scorePaused();
        clearInterval(time)
        block.style.animationPlayState = "paused"
        game.classList.add('active')
    }
    
}