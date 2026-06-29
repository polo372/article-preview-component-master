const white = document.getElementById("white");
const grey = document.getElementById("grey");

// Verifie la taille de l'écran et permet le changement de class si true

document.addEventListener('click', () => {
    let mql = window.matchMedia("(width <= 767px)");
    if(mql.matches){
        white.classList.toggle('hidden')
        grey.classList.toggle('hidden')
    }
    else{
        white.classList.remove('hidden')
        grey.classList.toggle('hidden')
    }
}
)