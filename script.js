 // Smooth scrolling for older browsers that don't support CSS scroll-behavior
    document.querySelectorAll('nav a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetID = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetID);
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 60, // offset for sticky nav
            behavior: 'smooth'
          });
        }
      });
    });