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




// Select all the testimonials boxes
const testimonialsBoxes = document.querySelectorAll('.testimonials .testimonials-box');

// Observer options
const options = {
  root: null,
  threshold: 0.5, // Trigger when 50% of the box is visible
  rootMargin: '0px',
};

// Intersection Observer callback function
const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1'; // Fade in the box
      observer.unobserve(entry.target); // Stop observing once box is visible
    }
  });
};

// Create Intersection Observer
const observer = new IntersectionObserver(callback, options);

// Observe each testimonials box
testimonialsBoxes.forEach((box) => {
  observer.observe(box);
});

// image scroll

document.addEventListener("DOMContentLoaded", function () {
  const scrollLeft = document.querySelector(".scroll-left");
  const scrollRight = document.querySelector(".scroll-right");
  const benefitsContainer = document.querySelector(".about2-box .benefits");

  scrollLeft.addEventListener("click", function () {
      benefitsContainer.scrollBy({
          left: -316,
          behavior: "smooth",
      });
  });

  scrollRight.addEventListener("click", function () {
      benefitsContainer.scrollBy({
          left: 316,
          behavior: "smooth",
      });
  });

  const isMobile = window.matchMedia("only screen and (max-width: 768px)");

  if (isMobile.matches) {
      const benefitBoxes = document.querySelectorAll(".about2-box .benefits .benefit-box");

      benefitBoxes.forEach((box) => {
          box.style.scrollSnapAlign = "center";
      });
  }
});

document.querySelectorAll('.about-btns button').forEach(button => {
    button.addEventListener('click', function() {
        document.getElementById('select').removeAttribute('id');
        this.id = 'select';
    });
});


document.querySelectorAll('.about-btns button').forEach(button => {
    button.addEventListener('click', function() {
        // Clear existing content
        document.querySelector('.about-text').innerHTML = '';
        if (this.textContent === 'For Advertisers') {
            // Add content for advertisers
            document.querySelector('.about-text').innerHTML = `
                <div class="box1">
                    <img src="./images/engage.png" alt="">
                    <h6>Get Engagement</h6>
                    <p>Grow your social media accounts organically by getting real users to follow and engage with your content.</p>
                </div>
                <div class="box1">
                    <img src="./images/resell.png" alt="">
                    <h6>Quick results</h6>
                    <p>Achieve your social media goals quickly and efficiently by purchasing real and authentic followers and engagement!</p>
                </div>
            `;
        } else {
            // Add content for earners
            document.querySelector('.about-text').innerHTML = `
                <div class="box1">
                    <img src="./images/mobile.png" alt="">
                    <h6>Repost adverts</h6>
                    <p>With just a few clicks you can help individuals and brands reach a wider audience and earn by simply reposting their ads.</p>
                </div>
                <div class="box1">
                    <img src="./images/engage.png" alt="">
                    <h6>Engage</h6>
                    <p>Interact actively! Boost account growth by following, liking, commenting, resharing their posts, subscribing to their channels, and engaging in numerous other supportive activities!</p>
                </div>
                <div class="box1">
                    <img src="./images/resell.png" alt="">
                    <h6>Resell</h6>
                    <p>Unlock earning potential by aiding businesses in reselling their products. Every successful sale you generate adds to your income. Embrace the mantra: Sell more, earn more! Start your journey to lucrative reselling today!</p>
                </div>
            `;
        }
    });
});


// // scroll reveal
// const sr =ScrollReveal({
//     origin:'top',
//     distance:'80px',
//     duration:2500,
//     delay:300,
//     //reset:true,//Animations repeat
// })
// sr.reveal(`.home-img`)
