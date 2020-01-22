// Your code goes here

//  Event Listener 1
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(navLink => {
    navLink.addEventListener('mouseover', (event) => {
        event.target.style.color = "blue";
    });
});

//  Event Listener 2
navLinks.forEach(navLink => {
    navLink.addEventListener('mouseout', (event) => {
        event.target.style.color = '#212529';
    });
});