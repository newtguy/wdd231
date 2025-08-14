function displayICAO(params) {
    const displayContainer = document.getElementById('displayICAO');

    let airportCode = params.get('airportCode');
    let timestamp = new Date(params.get('timestamp')).toLocaleString();

    displayContainer.textContent =
        `Airport: ${airportCode}\nSubmitted: ${timestamp}`;
}

displayICAO();