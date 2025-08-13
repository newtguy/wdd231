import { getScenicData } from './index.js';

const scenicDisplay = document.getElementById('scenic-display');

// Make cards for each scene
function displayScenes(scenes) {
    console.log(scenes);
    scenes.forEach(scene => {
        makeSceneCard(scene);
    });
}

function makeSceneCard(scene) {
    const myCard = document.createElement('div');
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    const heading = document.createElement('h2');
    const address = document.createElement('address');
    const description = document.createElement('p');

    img.src = `images/${scene.img}`;
    img.alt = scene.title;

    figure.appendChild(img);

    heading.textContent = scene.title;
    address.textContent = scene.address;
    description.textContent = scene.description;

    myCard.appendChild(figure);
    myCard.appendChild(heading);
    myCard.appendChild(address);
    myCard.appendChild(description);

    scenicDisplay.appendChild(myCard);
}

const scenes = await getScenicData();
displayScenes(scenes);