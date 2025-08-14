const weatherButton = document.getElementById('weatherButton');
const infoButton = document.getElementById('infoButton');
const modal = document.querySelector('.dialogForm');
const closeButton = document.querySelector('.closeButton');
const form = document.querySelector('.airportForm');

weatherButton.addEventListener('click', () => {
    modal.showModal();
    form.setAttribute('action', 'weather.html');
});

infoButton.addEventListener('click', () => {
    modal.showModal();
    form.setAttribute('action', 'info.html');
});

closeButton.addEventListener('click', () => {
    modal.close();
});