const today = new Date();
const currentYear = document.getElementById("current-year");
currentYear.textContent = today.getFullYear();

const lastModified = document.getElementById("last-modified");
lastModified.textContent = document.lastModified;