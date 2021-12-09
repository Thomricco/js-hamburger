const boxElement = document.getElementsByClassName(`hamburger-menu`)
const button = document.getElementsByClassName(`close`)

button.addEventListener('click', function () {
    clickCounter++; // alias di clickCounter += 1;

    // se clickCounter è dispari, mostro il box
    if (clickCounter % 2 !== 0) {
        boxElement.classList.remove('hamburger-menu');
        boxElement.classList.add('hamburger-menu.active');
    } else {
        // se clickCounter è pari, nascono il box
        boxElement.classList.remove('hamburger-menu');
        boxElement.classList.add('hamburger-menu.active');
    }
})