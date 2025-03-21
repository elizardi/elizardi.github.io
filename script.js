<script>
  const images = [
    'Image1.jpg',
    'Image2.jpg',
    'Image3.jpg',
    'Image4.jpg',
    'Image5.jpg',
    'Image6.jpg',
  ];

  let currentIndex = 0;

  const track = document.querySelector('.carousel-track');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  function updateImages() {
    track.innerHTML = ''; // Clear existing images

    const firstImage = images[currentIndex];
    const secondImage = images[currentIndex + 1];

    const img1 = document.createElement('img');
    img1.src = firstImage;
    img1.className = 'carousel-image';

    track.appendChild(img1);

    if (secondImage) {
      const img2 = document.createElement('img');
      img2.src = secondImage;
      img2.className = 'carousel-image';
      track.appendChild(img2);
    }
  }

  prevBtn.addEventListener('click', () => {
    if (currentIndex - 2 >= 0) {
      currentIndex -= 2;
      updateImages();
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentIndex + 2 < images.length) {
      currentIndex += 2;
      updateImages();
    }
  });

  // Initial render
  updateImages();
</script>

