
    // Add a class to trigger the transition effect
    document.addEventListener('DOMContentLoaded', function () {
      document.querySelector('.services-text').classList.add('show-text');
    });


    // Generate random business-related images for the slider
    document.addEventListener('DOMContentLoaded', function () {
      const slider = document.getElementById('image-slider');
      const carouselInner = slider.querySelector('.carousel-inner');

      // Replace with your business-related image URLs
      const imageUrls = [
        'https://placekitten.com/1200/400',
        'https://placekitten.com/1200/401',
        'https://placekitten.com/1200/402'
      ];

      // Shuffle the array to get random images
      imageUrls.sort(() => Math.random() - 0.5);

      // Add carousel items for each image
      imageUrls.forEach((imageUrl, index) => {
        const item = document.createElement('div');
        item.classList.add('carousel-item');
        if (index === 0) {
          item.classList.add('active');
        }
        const img = document.createElement('img');
        img.src = imageUrl;
        img.classList.add('d-block', 'w-100');
        img.alt = 'Business Image ' + (index + 1);
        item.appendChild(img);
        carouselInner.appendChild(item);
      });

      // Initialize the carousel
      new bootstrap.Carousel(slider);
    });

  document.addEventListener('DOMContentLoaded', function () {
    // Get the "About" link
    const aboutLink = document.querySelector('.nav-link[href="#about"]');

    // Get the target section (About Us section)
    const aboutSection = document.querySelector('.about-section');

    // Add a click event listener to the "About" link
    aboutLink.addEventListener('click', function (event) {
      // Prevent the default link behavior
      event.preventDefault();

      // Scroll to the About Us section smoothly
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Add a class to trigger the transition effect
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.services-text').classList.add('show-text');
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetSectionId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetSectionId);

      window.scrollTo({
        top: targetSection.offsetTop - 70, // Adjust the offset as needed
        behavior: 'smooth'
      });
    });
  });


  // Function to scroll to the top of the page
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  // Show/hide the scroll-to-top button based on the scroll position
  document.addEventListener('scroll', function () {
    const scrollButton = document.querySelector('.scroll-to-top-btn');

    if (window.scrollY > 300) {
      scrollButton.style.display = 'block';
    } else {
      scrollButton.style.display = 'none';
    }
  });

  // JavaScript function to scroll to the top
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  // Show/hide the scroll-to-top button based on scroll position
  document.addEventListener('scroll', function () {
    var scrollButton = document.querySelector('.scroll-to-top-btn');
    if (window.scrollY > 300) {
      scrollButton.style.display = 'block';
    } else {
      scrollButton.style.display = 'none';
    }
  });



  function setActiveLink(link) {
      // Remove 'active' class from all links
      document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
      // Add 'active' class to the clicked link
      link.classList.add('active');
  }
