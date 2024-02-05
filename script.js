function toggleMenu() {
    var navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });


  function updateYear() {

    const currentYear = new Date().getFullYear();

    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = `© Suriya Patel ${currentYear}`;
    }
}

updateYear();

