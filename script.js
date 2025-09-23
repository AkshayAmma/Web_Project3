// Typing animation for hero text
const typedTextElement = document.getElementById('typed-text');
const phrases = [
  'Java Developer',
  'Web Enthusiast',
  'Problem Solver',
  'Tech Learner',
];
let phraseIndex = 0;
let letterIndex = 0;
let currentText = '';
let isDeleting = false;
const typingSpeed = 120;
const deletingSpeed = 50;
const delayBetweenPhrases = 1500;

function type() {
  const currentPhrase = phrases[phraseIndex];

  if (!isDeleting) {
    currentText = currentPhrase.substring(0, letterIndex + 1);
    letterIndex++;
    typedTextElement.textContent = currentText;

    if (letterIndex === currentPhrase.length) {
      isDeleting = true;
      setTimeout(type, delayBetweenPhrases);
      return;
    }
  } else {
    currentText = currentPhrase.substring(0, letterIndex - 1);
    letterIndex--;
    typedTextElement.textContent = currentText;

    if (letterIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }

  setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
}

// Scroll fade-in animation
const sections = document.querySelectorAll('.section');

function checkSectionVisibility() {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add('visible');
    }
  });
}

// Navbar hamburger toggle for mobile
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const darkModeToggle = document.getElementById('darkModeToggle');

hamburger.addEventListener('click', () => {
  const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
  hamburger.setAttribute('aria-expanded', !expanded);
  navLinks.classList.toggle('show');
});

// Dark mode toggle
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  }
});

// Initialize functions on page load and on scroll
window.addEventListener('load', () => {
  type();
  checkSectionVisibility();
});

window.addEventListener('scroll', checkSectionVisibility);
