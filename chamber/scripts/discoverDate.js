// Set today and lastVisit
const now = Date.now();
const lastVisit = localStorage.getItem('ls_lastVisit');

function calculateMessage() {
    let message = "";

    if (!lastVisit) {
        message = "Welcome! Let us know if you have any questions.";
    } else {
        const sinceLastVisit = now - parseInt(lastVisit, 10);
        const daysSinceLastVisit = Math.floor(sinceLastVisit / (86400000));

        if (daysSinceLastVisit < 1) {
            message = "Back so soon! Awesome!";
        } else if (daysSinceLastVisit = 1) {
            message = `You last visited ${daysSinceLastVisit} day ago.`;
        }
        else {
            message = `You last visited ${daysSinceLastVisit} days ago.`
        }
    }

    return message;
}

// Add message to container
const heading = document.getElementById('message');
heading.textContent = calculateMessage(); //set text

// Add to ls
localStorage.setItem("ls_lastVisit", now);