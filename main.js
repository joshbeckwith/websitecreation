const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const fadeElements = document.querySelectorAll('.fade');
fadeElements.forEach((el) => observer.observe(el));

const fadeElements1 = document.querySelectorAll('.fade1');
fadeElements1.forEach((el) => observer.observe(el));

const fadeElements3 = document.querySelectorAll('.fade3');
fadeElements3.forEach((el) => observer.observe(el));




const backgrounds = document.querySelectorAll(".background");
const totalBackgrounds = backgrounds.length;





document.addEventListener("scroll", function() {
  const scrollPosition = window.pageYOffset;
  const windowHeight = window.innerHeight;
  const totalHeight = document.body.clientHeight;
  const scrollPercentage = scrollPosition / (totalHeight - windowHeight);

  for (let i = 1; i < totalBackgrounds; i++) {
    const start = i / totalBackgrounds - 0.02;
    const end = i / totalBackgrounds + 0.02;
    const opacity = (scrollPercentage - start) / (end - start);
    backgrounds[i].style.opacity = clamp(opacity, 0, 1);
  }
});

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}




window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);








// Get all the image links
const imageLinks = document.querySelectorAll('.image-link');

// Get the pop-up element
const popup = document.getElementById('myPopup');

// Attach a click event listener to each image link
imageLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the link from following its default behavior
    
    // Get the image source and alt text
    const imageSrc = link.querySelector('img').getAttribute('src');
    const imageAlt = link.querySelector('img').getAttribute('alt');
    
    // Insert the image and alt text into the pop-up
    popup.querySelector('img').setAttribute('src', imageSrc);
    popup.querySelector('img').setAttribute('alt', imageAlt);
    
    // Open the pop-up
    popup.classList.add('open');
  });
});

// Close the pop-up when the user clicks outside of it
popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.classList.remove('open');
  }
});





const imageLink = document.querySelectorAll('.image-link');
const popupImg = document.querySelector('#popup-img');

imageLinks.forEach(function(imageLink) {
  const imageId = imageLink.querySelector('img').getAttribute('id');
  const popupImgSrc = imageLink.getAttribute('data-popup-image');

  imageLink.addEventListener('click', function(e) {
    e.preventDefault();
    popupImg.src = popupImgSrc;
    // Open popup here
  });
});







