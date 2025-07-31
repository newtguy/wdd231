function displayFormData() {
    const displayContainer = document.getElementById('form-data-display');
    const params = new URLSearchParams(window.location.search);

    let firstName = params.get('first');
    let lastName = params.get('last');
    let email = params.get('email');
    let tel = params.get('tel');
    let organization = params.get('organization');
    let timestamp = new Date(params.get('timestamp')).toLocaleString();

    displayContainer.textContent =
        `First Name: ${firstName}\nLast Name: ${lastName}\n` +
        `Email: ${email}\nPhone: ${tel}\nOrganization: ${organization}\n` +
        `Submitted: ${timestamp}`;
}

displayFormData();