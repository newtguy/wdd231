// used for directory.js and showcase.js

function displaySingleMember(member, cards) {
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
}

export { displaySingleMember };