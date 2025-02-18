document.querySelectorAll('.nav-links a').forEach(link =>{
  link.addEventListener('mouseover',() =>{
    link.style.color='green';
  })
  link.addEventListener('mouseout', () => {
  link.style.color = '';
});
});
document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.querySelector('#contact form');
  if (contactForm) {
      contactForm.addEventListener('submit', function (event) {
          event.preventDefault();
          const name = contactForm.querySelector('input[name="name"]').value.trim();
          const email = contactForm.querySelector('input[name="email"]').value.trim();
          const message = contactForm.querySelector('textarea[name="message"]').value.trim();
          if (!name || !email || !message) {
              alert('Please fill out all fields.');
              return;
          }
          if (!validateEmail(email)) {
              alert('Please enter a valid email address.');
              return;
          }
          alert('Form submitted successfully!');
          contactForm.reset();
      });
  }
  function validateEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
  }
});
// Hamburger Menu Toggle
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const navbar = document.getElementById('navbar');

  hamburger.addEventListener('click', function () {
      navbar.classList.toggle('active');
  });
});