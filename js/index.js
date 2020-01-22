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
    navLink.addEventListener('click', (event) => {
        event.target.style.transform = "scale(1.5)";
    });
});

//  Event Listener 3
navLinks.forEach(navLink => {
    navLink.addEventListener('mouseout', (event) => {
        event.target.style.color = '#212529';
        event.target.style.transform = "scale(1.0)";
    });
});
