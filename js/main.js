const boxElement = document.querySelector(`.hamburger-menu`)
const button = document.querySelector(`.header-right`)
const button2 = document.querySelector(`.close`)

button.addEventListener('click', function () {
    boxElement.classList.add('active');
})

button2.addEventListener('click', function () {
    boxElement.classList.remove('active');
})