import { getMemberData } from "./index.js";
import { displaySingleMember } from "./index.js";

const cards = document.querySelector("#cards");
const gridButton = document.getElementById("grid-button");
const listButton = document.getElementById("list-button");

const displayMembersGrid = (members) => {
    members.forEach(member => {
        displaySingleMember(member, cards);
    });
}

const displayMembersList = (members) => {
    members.forEach(member => {
        let row = document.createElement("div");
        let name = document.createElement("p");
        let phone = document.createElement("p");
        let url = document.createElement("a");

        row.setAttribute("class", "row");
        name.innerHTML = `<strong>${member.name}</strong>`;
        phone.textContent = member.phone;
        url.textContent = "Details"
        url.setAttribute("href", member.url);
        url.setAttribute("target", "_blank");

        row.appendChild(name);
        row.appendChild(phone);
        row.appendChild(url);

        cards.appendChild(row);
    });
}

// get data and run grid
const members = await getMemberData();
displayMembersGrid(members);

gridButton.addEventListener("click", () => {
    if (gridButton.classList.contains('open')) {
        console.log("Members already displayed in grid format.")
    } else {
        gridButton.classList.add('open');
        cards.classList.add('grid');
        listButton.classList.remove('open');
        cards.innerHTML = '';
        displayMembersGrid(members);
    }
});
listButton.addEventListener("click", () => {
    if (listButton.classList.contains('open')) {
        console.log("Members already displayed in list format.")
    } else {
        gridButton.classList.remove('open');
        cards.classList.remove('grid');
        listButton.classList.add('open');
        cards.innerHTML = '';
        displayMembersList(members);
    }
});
