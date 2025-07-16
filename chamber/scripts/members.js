const url = "data/members.json";
const cards = document.querySelector("#cards");
const gridButton = document.getElementById("grid-button");
const listButton = document.getElementById("list-button");

const getMemberData = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        // console.table(data);

        displayMembersGrid(data.members);
        gridButton.addEventListener("click", () => {
            if (gridButton.classList.contains('open')) {
                console.log("Members already displayed in grid format.")
            } else {
                gridButton.classList.add('open');
                cards.classList.add('grid');
                listButton.classList.remove('open');
                cards.innerHTML = '';
                displayMembersGrid(data.members);
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
                displayMembersList(data.members);
            }
        });
    }
    catch (error) {
        console.error("Error fetching data:", error);
    }
}

const displayMembersGrid = (members) => {
    members.forEach(member => {
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let icon = document.createElement("img");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let url = document.createElement("a");
        let membership = document.createElement("p");

        name.textContent = member.name;

        icon.setAttribute("src", `images/${member.image}`);
        icon.setAttribute("alt", `Icon of ${member.name}`);
        icon.setAttribute("loading", "lazy");
        icon.setAttribute("width", "200");
        icon.setAttribute("height", "200");

        address.textContent = member.address;
        address.setAttribute("class", "location");
        phone.textContent = member.phone;
        url.textContent = "Website";
        url.setAttribute("href", member.url);
        url.setAttribute("target", "_blank");

        if (member.membership == 1) {
            membership.textContent = "Member";
        }
        else if (member.membership == 2) {
            membership.textContent = "Silver";
        }
        else {
            membership.textContent = "Gold";
        }

        card.appendChild(name);
        card.appendChild(icon);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(url);
        card.appendChild(membership);

        cards.appendChild(card);
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

getMemberData();