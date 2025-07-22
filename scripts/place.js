const currentYear = document.getElementById('currentyear');
const lastModified = new Date()

document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastmodified").textContent = "Last modified: " + document.lastModified;