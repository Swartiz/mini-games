console.log('Je suppose que si tu viens ici c\'est pour r\'avoir ton puit en trafiquant dans le html ... petit malin');

// ========================= PIERRE FEUILLE CISEAUX ========================= //

let textUser = document.querySelector('.text-user');
let textWinLose = document.querySelector('.text-winlose');
let textRobot = document.querySelector('.text-robot');

let scoreUser = document.querySelector('.score-user');
let scoreRbt = document.querySelector('.score-robot');

let btnPierre = document.querySelector('.btn-pierre');
let btnFeuille = document.querySelector('.btn-feuille');
let btnCiseaux = document.querySelector('.btn-ciseaux');

var listPfc = ['👊' , '✋' , '✌️'];

var scoreMoi = 0;
var scoreRobot = 0;

function pierre() {
    var robotChoice = Math.floor(Math.random() * 3);
    textUser.textContent = "MOI : 👊";
    textRobot.textContent = "ROBOT :" + " " + listPfc[robotChoice];
    document.querySelector(".btn-all").className += " hide";
    document.querySelector(".text-main").classList.remove("hide");
    if(robotChoice==0) {
        textWinLose.textContent = "égalité"
        textWinLose.style.color = "#1E90FF";
    }
    if(robotChoice==1) {
        textWinLose.textContent = "perdu"
        textWinLose.style.color = "#B22222";
        scoreRobot += 1;
    }
    if(robotChoice==2) {
        textWinLose.textContent = "gagné"
        textWinLose.style.color = "#32CD32";
        scoreMoi += 1;
    }
    scoreUser.textContent = "MOI : " + scoreMoi;
    scoreRbt.textContent = "ROBOT : " + scoreRobot;
}

function feuille() {
    var robotChoice = Math.floor(Math.random() * 3);
    textUser.textContent = "MOI : ✋";
    textRobot.textContent = "ROBOT :" + " " + listPfc[robotChoice];
    document.querySelector(".btn-all").className += " hide";
    document.querySelector(".text-main").classList.remove("hide");
    if(robotChoice==0) {
        textWinLose.textContent = "gagné"
        textWinLose.style.color = "#32CD32";
        scoreMoi += 1;
    }
    if(robotChoice==1) {
        textWinLose.textContent = "égalité"
        textWinLose.style.color = "#1E90FF";
    }
    if(robotChoice==2) {
        textWinLose.textContent = "perdu"
        textWinLose.style.color = "#B22222";
        scoreRobot += 1;
    }
    scoreUser.textContent = "MOI : " + scoreMoi;
    scoreRbt.textContent = "ROBOT : " + scoreRobot;
}

function ciseaux() {
    var robotChoice = Math.floor(Math.random() * 3);
    textUser.textContent = "MOI : ✌️";
    textRobot.textContent = "ROBOT :" + " " + listPfc[robotChoice];
    document.querySelector(".btn-all").className += " hide";
    document.querySelector(".text-main").classList.remove("hide");
    if(robotChoice==0) {
        textWinLose.textContent = "perdu"
        textWinLose.style.color = "#B22222";
        scoreRobot += 1;
    }
    if(robotChoice==1) {
        textWinLose.textContent = "gagné"
        textWinLose.style.color = "#32CD32";
        scoreMoi += 1;
    }
    if(robotChoice==2) {
        textWinLose.textContent = "égalité"
        textWinLose.style.color = "#1E90FF";
    }
    scoreUser.textContent = "MOI : " + scoreMoi;
    scoreRbt.textContent = "ROBOT : " + scoreRobot;
}

// ========================= FIN DU PIERRE FEUILLE CISEAUX ========================= //

// ========================= PUIT ========================= //

function puit() {
    var robotChoice = Math.floor(Math.random() * 3);
    textUser.textContent = "MOI : 👌";
    textRobot.textContent = "ROBOT :" + " " + listPfc[robotChoice];
    document.querySelector(".btn-all").className += " hide";
    document.querySelector(".text-main").classList.remove("hide");
    if(robotChoice==0) {
        textWinLose.textContent = "gagné"
        textWinLose.style.color = "#32CD32";
        scoreMoi += 1;
    }
    if(robotChoice==1) {
        textWinLose.textContent = "perdu"
        textWinLose.style.color = "#B22222";
        scoreRobot += 1;
    }
    if(robotChoice==2) {
        textWinLose.textContent = "gagné"
        textWinLose.style.color = "#32CD32";
        scoreMoi += 1;
    }
    scoreUser.textContent = "MOI : " + scoreMoi;
    scoreRbt.textContent = "ROBOT : " + scoreRobot;
    document.querySelector(".puit").className += " hide";
}  

// ========================= FIN DU PUIT ========================= //

// ========================= 2ND MAIN ========================= //

function Reveal() {
    document.querySelector(".btn-all").classList.remove("hide");
    document.querySelector(".text-main").className += " hide"; 
}

// ========================= FIN DU 2ND MAIN ========================= //

// ========================= BOUTON TO THE TOP ========================= //

window.addEventListener('scroll', ()=> {
    if(window.scrollY < 200) {
        document.querySelector(".to-the-top").className += " hide-btn";
    }

    if(window.scrollY > 200) {
        document.querySelector(".to-the-top").classList.remove("hide-btn");
    }
})

document.querySelector('.to-the-top').addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })

})

// ========================= FIN DU BOUTON TO THE TOP ========================= //

// ========================= BOUTON TO THE TOP (PUIT) ========================= //

document.querySelector('.puit').addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })

})

// ========================= FIN DU BOUTON TO THE TOP (PUIT) ========================= //