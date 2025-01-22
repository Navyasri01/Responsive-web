document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById('menu-toggle');
    const leftMenu = document.getElementById('left-menu');
    
    // Toggle the left menu visibility on button click
    menuToggle.addEventListener('click', () => {
      leftMenu.classList.toggle('collapsed');
    });
  
    // Function to shrink the page based on screen width
    function adjustPageSize() {
      const width = window.innerWidth;
      
      if (width >= 992 && width <= 1600) {
        document.body.style.transform = "scale(0.9)";
        document.body.style.transformOrigin = "top left";
      } else if (width >= 700 && width <= 767) {
        document.body.style.transform = "scale(0.8)";
        document.body.style.transformOrigin = "top left";
      } else if (width >= 600 && width <= 700) {
        document.body.style.transform = "scale(0.75)";
        document.body.style.transformOrigin = "top left";
      } else if (width <= 600) {
        document.body.style.transform = "scale(0.5)";
        document.body.style.transformOrigin = "top left";
      } else {
        document.body.style.transform = "none"; // Reset to normal size
      }
    }
  
    // Adjust page size when the window is resized
    window.addEventListener('resize', adjustPageSize);
    
    // Call once when the page loads
    adjustPageSize();
  });
  