const white = document.getElementById("white");
const grey = document.getElementById("grey")

document.addEventListener('click', () => {
    white.classList.toggle('hidden')
    grey.classList.toggle('hidden')
})