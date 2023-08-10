// Get a reference to the clickable div
const clickableDiv = document.getElementById('grid-item');

// Add a click event listener
clickableDiv.addEventListener('click', function() {
  // Define the URL of the page you want to open
  const newPageUrl = './';

  // Open the URL in a new tab
  window.open(newPageUrl, '_blank');
});
