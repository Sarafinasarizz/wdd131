const menuIcon = document.querySelector('.menu-icon')

const mobileNav = document.querySelector('.mobile-nav')


menuIcon.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
});

document.getElementById("currentyear").textContent = new Date().getFullYear();


document.getElementById("lastmodified").textContent = "Last modified: " + document.lastModified;