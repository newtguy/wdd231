import { getMemberData } from "./index.js";

const showcaseContainer = document.querySelector('.showcase');

function displayMemberShowcase(members) {
    // showcaseMembers = data
    //display 2 or three gold or silver members
    //randomly load 'spotlights' each time the page is rendered

    //display their company name, logo, phone, address, website, 
    //and membership level 
}

function findRandomNumberExclusive(max) {
    return Math.floor(Math.random() * max);
}

const members = await getMemberData();
displayMemberShowcase(members);