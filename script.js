const white = document.getElementById("white");
const grey = document.getElementById("grey")
const btnGrey = document.getElementById("btnGrey")

// Verifie la taille de l'écran et permet le changement de class si true
let mql = window.matchMedia("(width <= 748px)");
document.addEventListener('click', () => {
    if(mql.matches)
    white.classList.toggle('hidden')
    grey.classList.toggle('hidden')
})