// Mobile menu
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form -> mailto
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const fd = new FormData(e.target);
  const subject = encodeURIComponent(`Portfolio contact from ${fd.get('name')}`);
  const body = encodeURIComponent(`${fd.get('message')}\n\nFrom: ${fd.get('email')}`);
  window.location.href = `mailto:prasanth9626794137@gmail.com?subject=${subject}&body=${body}`;
});

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.section .card, .section .project, .heading').forEach(el => {
  el.classList.add('reveal');
  io.observe(el);
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const linkMap = {};
document.querySelectorAll('.nav-links a').forEach(a => linkMap[a.getAttribute('href').slice(1)] = a);
const navObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      Object.values(linkMap).forEach(a => a.style.color = '');
      const link = linkMap[e.target.id];
      if (link) link.style.color = 'var(--fg)';
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });
sections.forEach(s => navObs.observe(s));
