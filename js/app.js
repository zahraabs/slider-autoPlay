let currentIndex = 0;
const images = [
    'img1.jpg',
    'img2.jpg',
    'img3.jpg'
  ];
  let intervalId;
  
  const sliderImagesContainer = document.querySelector('.slider-images');
  const prevButton = document.querySelector('.prev-btn');
  const nextButton = document.querySelector('.next-btn');

  for (let i = 0; i < images.length; i++) {
    const img = document.createElement('img');
    img.src = `./assets/images/${images[i]}`;
    sliderImagesContainer.appendChild(img);
  }
  
  const sliderImages = document.querySelectorAll('.slider-images img');

  sliderImages[currentIndex].classList.add('active');
  
  
  
  prevButton.addEventListener('click', () => {
    sliderImages[currentIndex].classList.remove('active');
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = sliderImages.length - 1;
    }
    sliderImages[currentIndex].classList.add('active');
  });
  
  nextButton.addEventListener('click', () => {
    sliderImages[currentIndex].classList.remove('active');
    currentIndex++;
    if (currentIndex === sliderImages.length) {
      currentIndex = 0;
    }
    sliderImages[currentIndex].classList.add('active');
  });
  
 
  const startAutoplay = () => {
    intervalId = setInterval(() => {
      sliderImages[currentIndex].classList.remove('active');
      currentIndex++;
      if (currentIndex === sliderImages.length) {
        currentIndex = 0;
      }
      sliderImages[currentIndex].classList.add('active');
    }, 2000);
  };
  
  const stopAutoplay = () => {
    clearInterval(intervalId);
  };
  
  startAutoplay();
  sliderImagesContainer.addEventListener('mouseenter', stopAutoplay);
  sliderImagesContainer.addEventListener('mouseleave', startAutoplay);
  
  