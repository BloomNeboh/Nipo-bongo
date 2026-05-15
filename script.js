const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const navItems = document.querySelectorAll('.nav-links a');
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');
const faqQuestions = document.querySelectorAll('.faq-question');
const revealItems = document.querySelectorAll('.reveal');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}

navItems.forEach(item => {
  item.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    formMessage.textContent = "Thank you! Your inquiry has been received. We will contact you soon.";
    contactForm.reset();
  });
}

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const parent = question.parentElement;
    parent.classList.toggle('active');
  });
});

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.88;

  revealItems.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;

    if (itemTop < triggerBottom) {
      item.classList.add('active');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
