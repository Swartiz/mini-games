// burger animation

let burger = document.querySelector('.burger');
let navlink = document.getElementById('navlink');

burger.addEventListener('click' , () => {
    navlink.classList.toggle('trx')
})

// typed animation

var typed = new Typed(".typing", {
    strings: ["Web Developer", "Student", "Web Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});