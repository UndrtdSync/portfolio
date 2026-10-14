// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
reveals.forEach(el => io.observe(el));

// Nav shadow on scroll
const nav = document.querySelector('nav');
addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', scrollY > 10);
});

// Typing effect
const words = ['clean, fast websites.', 'modern portfolios.', 'ideas into reality.'];
const el = document.getElementById('typing');
let wi = 0, ci = 0, deleting = false;
(function type() {
  const word = words[wi];
  el.textContent = word.slice(0, ci);
  if (!deleting && ci < word.length) { ci++; }
  else if (!deleting && ci === word.length) { deleting = true; setTimeout(type, 1200); return; }
  else if (deleting && ci > 0) { ci--; }
  else { deleting = false; wi = (wi + 1) % words.length; }
  setTimeout(type, deleting ? 35 : 65);
})();
