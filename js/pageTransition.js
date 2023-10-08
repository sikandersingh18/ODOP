document.addEventListener('DOMContentLoaded', function () {
  // Find all links with the "page-transition-link" class
  const links = document.querySelectorAll('.page-transition-link');

  // Add a click event listener to each link
  links.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent the default link behavior (page reload)

      // Apply a zoom out effect to the link
      link.style.transform = 'scale(5)';

      // After a short delay, navigate to the linked page
      setTimeout(function () {
        window.location.href = link.href;
      }, 500); // Adjust the delay (in milliseconds) as needed
    });
  });
});
