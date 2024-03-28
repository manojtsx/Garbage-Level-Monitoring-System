// About Carousel
const images = [
    {
      label: 'San Francisco – Oakland Bay Bridge, United States',
      imgPath: './public/images/esp32.jpeg',
    },
    {
      label: 'Bird',
      imgPath: 'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
      label: 'Bali, Indonesia',
      imgPath: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
    },
    {
      label: 'Goč, Serbia',
      imgPath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    },
  ];
  
  let activeStep = 0;
  const maxSteps = images.length;
  
  const imageLabel = document.getElementById('imageLabel');
  const imageView = document.getElementById('imageView');
  const backButton = document.getElementById('backButton');
  const nextButton = document.getElementById('nextButton');
  
  function updateUI() {
    imageLabel.innerText = images[activeStep].label;
    imageView.innerHTML = `<img src="${images[activeStep].imgPath}" alt="${images[activeStep].label}">`;
  
    backButton.disabled = activeStep === 0;
    nextButton.disabled = activeStep === maxSteps    - 1;
  }
  
  function handleNext() {
    if (activeStep < maxSteps - 1) {
      activeStep++;
      updateUI();
    }
  }
  
  function handleBack() {
    if (activeStep > 0) {
      activeStep--;
      updateUI();
    }
  }
  
  nextButton.addEventListener('click', handleNext);
  backButton.addEventListener('click', handleBack);
  
  updateUI(); // Initial UI update
  