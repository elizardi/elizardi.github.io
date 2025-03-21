const track = document.querySelector('.carousel-track');
const images = Array.from(track.children);
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

function updateCarousel() {
    const imageWidth = images[0].getBoundingClientRect().width;
    const amountToMove = imageWidth * currentIndex * -1;
    track.style.transform = `translateX(${amountToMove}px)`;
}

// Arrange images side by side (in case CSS doesn't do it)
images.forEach((img, index) => {
    img.style.minWidth = '100%';
});

nextButton.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // loop to start
    }
    updateCarousel();
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = images.length - 1; // loop to end
    }
    updateCarousel();
});

// Initialize position
updateCarousel();
