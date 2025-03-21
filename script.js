// Array of image pairs (left image and right image)
const images1 = ["Image1.jpg", "Image3.JPG", "image5.jpg"];
const images2 = ["image2.jpg", "Image4.jpg", "image6.jpg"];

let index = 0; // Track current image index

// Function to change images
function updateImages() {
    document.getElementById("image1").src = images1[index];
    document.getElementById("image2").src = images2[index];
}

// Show the next images
function nextImage() {
    index = (index + 1) % images1.length; // Loop through images
    updateImages();
}

// Show the previous images
function prevImage() {
    index = (index - 1 + images1.length) % images1.length; // Loop backward
    updateImages();
}

// Load first set of images on page load
window.onload = updateImages;
