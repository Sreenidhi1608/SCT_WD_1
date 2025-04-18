// Scroll Effect for Navbar
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
// Navbar scroll effect
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });
  
  // Typewriter effect in About section
  const text = "We are passionate developers creating modern web experiences.";
  let i = 0;
  function typeWriter() {
    if (i < text.length) {
      document.getElementById("typewriter").innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 50);
    }
  }
  window.addEventListener('DOMContentLoaded', typeWriter);
  
  // Form Submission
  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('formMessage').innerText = "Thank you! We'll get back to you soon.";
    this.reset();
  });