// Your code goes here

//  Event Listener 1 - mouseover
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(navLink => {
    navLink.addEventListener('mouseover', (event) => {
        event.target.style.color = "blue";
    });
});

//  Event Listener 2 - click
navLinks.forEach(navLink => {
    navLink.addEventListener('click', (event) => {
        event.target.style.transform = "scale(1.5)";
    });
});

//  Event Listener 3 - mouseout
navLinks.forEach(navLink => {
    navLink.addEventListener('mouseout', (event) => {
        event.target.style.color = '#212529';
        event.target.style.transform = "scale(1.0)";
    });
});

//  Event Listener 4 - drag
const images = document.querySelectorAll('img');
    images.forEach(image => {
        image.addEventListener('drag', (event) => {
            event.target.style.transform = "scale(2.0)";
        });
    });
console.log(images);

//  Event Listener 5 - dragend
images.forEach(image => {
    image.addEventListener('dragend', (event) => {
        event.target.style.transform = "scale(1.0)";
    });
});

//  Event Listener 6 - dblclick and click
const paragraphText = document.querySelectorAll('p');
paragraphText.forEach(text => {
    text.addEventListener('dblclick', (event) => {
        event.target.style.color = "orange";
    });
    text.addEventListener('click', (event) => {
        event.target.style.color = "#212529";
    })
});

