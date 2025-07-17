import { getMemberData } from "./index.js";
import { displaySingleMember } from "./index.js";

const showcaseContainer = document.querySelector('.showcase');

function displayMemberShowcase(members) {
    //display three gold or silver members
    //randomly load 'spotlights' each time the page is rendered
    //display their company name, logo, phone, address, website, 
    //and membership level 
    showcaseContainer.innerHTML = "";
    const pristineMembers = members.filter(member => member.membership >= 2);
    let usedIndecies = [];
    for (let i = 0; i < 3; i++) {
        let randIndex = findRandomNumberExclusive(pristineMembers.length);
        while (usedIndecies.includes(randIndex)) {
            randIndex = findRandomNumberExclusive(pristineMembers.length);
        }
        usedIndecies.push(randIndex);
        let currentMember = pristineMembers[randIndex];
        displaySingleMember(currentMember, showcaseContainer);
    }
}

function findRandomNumberExclusive(max) {
    return Math.floor(Math.random() * max);
}

const members = await getMemberData();
displayMemberShowcase(members);