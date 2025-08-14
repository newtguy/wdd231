function displayICAO() {
    const displayContainer = document.getElementById('displayICAO');

    const params = new URLSearchParams(window.location.search);
    const airportCode = params.get('airportCode');
    if (airportCode == null) {
        displayContainer.innerHTML = 'Please return to the home page to select an airport.';
    } else {
        displayContainer.innerHTML =
            `<strong>Airport</strong>: ${airportCode}`;
    }
}

displayICAO();