const navButton = document.querySelector('.hamburger-button');
const navBar = document.querySelector('.nav-bar');

navButton.addEventListener('click', () => {
    navBar.classList.toggle('open');
    navButton.classList.toggle('open');
    if (navButton.classList.contains('open')) {
        navButton.textContent = "✖";
    }
    else {
        navButton.textContent = "☰";
    }
});