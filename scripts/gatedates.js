// Get the current year
const currentYear = new Date().getFullYear();

// Get the last modified date
const lastModified = document.lastModified;

// Output to the footer elements
document.getElementById("currentyear").textContent = `${currentYear}`;
document.getElementById("lastmodified").textContent = `Last Modification: ${lastModified}`;
