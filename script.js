// List of images (Add more images here)
const images1 = ["Image1.jpg", "Image3.JPG", "Image5.jpg"];
const images2 = ["Image2.jpg", "Image4.jpg", "Image6.jpg"];

let index = 0; // Track current image index

// Function to change images
function updateImages() {
    document.getElementById("Image1").src = images1[index];
    document.getElementById("Image2").src = images2[index];
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
