// Get a reference to the header element
const header = document.querySelector('.header');

// Define the scroll threshold after which the opacity changes
const scrollThreshold = 10; // Adjust this value as needed

// Add a scroll event listener
window.addEventListener('scroll', () => {
  // Get the current scroll position
  const scrollPosition = window.scrollY || window.pageYOffset;

  // Update the header's opacity based on the scroll position
  if (scrollPosition > scrollThreshold) {
    header.style.opacity = '1';
  } else {
    header.style.opacity = '0.5';
  }
});