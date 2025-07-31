const nonProfitButton = document.getElementById('non-profit-button');
const bronzeButton = document.getElementById('bronze-button');
const silverButton = document.getElementById('silver-button');
const goldButton = document.getElementById('gold-button');

const nonProfitInfo = ['Non-Profit', 0, 'Access to monthly newsletter', 'Eligible to submit events to homepage'];
const bronzeInfo = ['Bronze', 100, 'All non-profit benefits', 'Business placed in website directory'];
const silverInfo = ['Silver', 200, 'All Bronze benefits', 'Eligible for business spotlight on homepage'];
const goldInfo = ['Gold', 300, 'All Silver Benefits', 'Prioritized first for newsletter article submissions'];

function CreateModal(tier) {
    const membershipModal = document.getElementById('membership-modal');
    const modalHolder = document.getElementById('modal-content-holder');
    const closeButton = document.querySelector('.close-button');

    let section = document.createElement('section');
    let heading = document.createElement('h2');
    let cost = document.createElement('p');
    let benefits = document.createElement('p');
    let additionalBenefits = document.createElement('p');

    modalHolder.innerHTML = '';
    heading.textContent = tier[0];
    cost.textContent = `Price: $${tier[1]} per month`;
    benefits.textContent = `Benefits: ${tier[2]}`;
    additionalBenefits.innerHTML = tier[3];

    section.append(heading, cost, benefits, additionalBenefits);
    modalHolder.appendChild(section);

    membershipModal.showModal();
    closeButton.addEventListener('click', () => {
        membershipModal.close();
    });
}

nonProfitButton.addEventListener('click', () => {
    CreateModal(nonProfitInfo);
});

bronzeButton.addEventListener('click', () => {
    CreateModal(bronzeInfo);
});

silverButton.addEventListener('click', () => {
    CreateModal(silverInfo);
});

goldButton.addEventListener('click', () => {
    CreateModal(goldInfo);
});