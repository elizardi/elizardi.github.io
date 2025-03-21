// List of images (Add more images here)
const images1 = ["images/image1.jpg", "images/image3.jpg", "images/image5.jpg"];
const images2 = ["images/image2.jpg", "images/image4.jpg", "images/image6.jpg"];

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
