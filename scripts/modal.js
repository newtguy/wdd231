function displayModal(course) {
    const modal = document.getElementById('course-details');
    modal.innerHTML = '';

    const closeButton = document.createElement('button');
    const header = document.createElement('h2');
    const className = document.createElement('h3');
    const credits = document.createElement('p');
    const certificate = document.createElement('p');
    const summary = document.createElement('p');
    const technology = document.createElement('p');

    closeButton.classList.add('close-button');
    closeButton.textContent = '✖';
    header.textContent = `${course.subject} ${course.number}`;
    className.textContent = course.title;
    credits.textContent = `${course.credits} Credits`;
    certificate.textContent = `Certificate: ${course.certificate}`;
    summary.textContent = course.description;
    technology.textContent = `Technology: ${course.technology}`;

    modal.appendChild(closeButton);
    modal.appendChild(header);
    modal.appendChild(className);
    modal.appendChild(credits);
    modal.appendChild(certificate);
    modal.appendChild(summary);
    modal.appendChild(technology);

    modal.showModal();

    closeButton.addEventListener('click', () => {
        modal.close();
    });
}

export { displayModal };