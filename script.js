// Select the toggle button and menu
const menuToggle = document.querySelector('.menu-toggle');
const rightSideIcons = document.querySelector('.right-side-icons');

// Add event listener to toggle the visibility of the menu
menuToggle.addEventListener('click', () => {
    rightSideIcons.classList.toggle('active');
});


// for members count
let count = 1;
const targetCount = 20;
const countElement = document.getElementById('rider-count');
let increaseCount;

document.querySelector('.members-count').addEventListener('mouseover', function () {
    // Start counting only if the count hasn't reached the target yet
    if (count === 1) {
        increaseCount = setInterval(() => {
            if (count <= targetCount) {
                countElement.textContent = `Our Biker Brotherhood is ${count}+ Riders Strong`;
                count++;
            } else {
                clearInterval(increaseCount); // Stop the interval when targetCount is reached
            }
        }, 100); // Adjust the speed as needed
    }
});


// sliders js
let currentSlide = 0;
const slides = document.querySelector('.slides');
const totalSlides = slides.children.length;

// Function to go to the next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlide();
}

// Function to go to the previous slide
function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlide();
}

// Function to update the slide position
function updateSlide() {
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Auto-slide every 5 seconds
let autoSlide = setInterval(nextSlide, 3000);

// Pause auto-slide when hovering over the slider
const slider = document.querySelector('.slider');
slider.addEventListener('mouseover', () => {
    clearInterval(autoSlide);
});

// Resume auto-slide when not hovering
slider.addEventListener('mouseout', () => {
    autoSlide = setInterval(nextSlide, 5000);
});




