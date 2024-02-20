// hamburger menu

document.addEventListener("DOMContentLoaded", function() {
    var hamburgerMenu = document.querySelector('.hamburger');
    var navBar = document.querySelector('.nav-bar');

    hamburgerMenu.addEventListener('click', function() {
        navBar.classList.toggle('active');
    });
});


// image changer
// Get the image elements
const firstImage = document.querySelector('.image-container img:first-child');
const secondImage = document.getElementById('hover-image');

// Get the box elements
const firstBox = document.getElementById('box1');
const secondBox = document.getElementById('box2');

// Function to show the first image
function showFirstImage() {
    firstImage.style.opacity = '1';
    secondImage.style.opacity = '0';
}

// Function to show the second image
function showSecondImage() {
    firstImage.style.opacity = '0';
    secondImage.style.opacity = '1';
}

// Add event listeners to the first box for hover and click
firstBox.addEventListener('mouseenter', showFirstImage);
firstBox.addEventListener('click', showFirstImage);

// Add event listeners to the second box for hover and click
secondBox.addEventListener('mouseenter', showSecondImage);
secondBox.addEventListener('click', showSecondImage);

// FADE IN SOCIAL IMAGES
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle the scroll event
function handleScroll() {
    var images = document.querySelectorAll('.socials img');
    images.forEach(function(image, index) {
        if (isInViewport(image)) {
            setTimeout(function() {
                image.classList.add('show');
            }, index * 200); // Add a delay based on the index of the image
        }
    });
}

// Add scroll event listener to trigger handleScroll function
window.addEventListener('scroll', handleScroll);

// Initial check when the page loads
handleScroll();


// // scroll reveal
// const sr =ScrollReveal({
//     origin:'top',
//     distance:'80px',
//     duration:2500,
//     delay:300,
//     //reset:true,//Animations repeat
// })
// sr.reveal(`.home-img`)
