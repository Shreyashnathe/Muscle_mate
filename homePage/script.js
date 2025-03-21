function toggleDropdown(event) {
    event.preventDefault(); // Prevent the default link behavior
    const dropdownMenu = event.target.closest('.dropdown').querySelector('.dropdown-menu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
  }
  
  function showLogin() {
    alert("Redirecting to the login page...");
  }

  let currentIndex = 0;

function moveSlide(direction) {
  const slides = document.querySelector(".carousel-container");
  const totalSlides = document.querySelectorAll(".carousel-slide").length;

  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Array of background images for the carousel with optimized sizes
const backgroundImages = [
    'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'
];

let currentImageIndex = 0;
const heroSection = document.querySelector('.hero');

// Preload images
function preloadImages() {
    backgroundImages.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Function to change the background image with optimized loading
function changeBackgroundImage() {
    const img = new Image();
    img.onload = () => {
        heroSection.style.backgroundImage = `url('${backgroundImages[currentImageIndex]}')`;
    };
    img.src = backgroundImages[currentImageIndex];
    currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
}

// Initialize
preloadImages();
changeBackgroundImage();

// Change image every 5 seconds
setInterval(changeBackgroundImage, 5000);

  
