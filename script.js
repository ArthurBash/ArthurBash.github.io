// Toggle mobile menu
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.nav-menu');

toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Close menu on link click
document.querySelectorAll('.nav-link').forEach(link =>
  link.addEventListener('click', () => menu.classList.remove('active'))
);

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Appear-on-scroll (simple)
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.2 });

document.querySelectorAll('.timeline-item, .skill-card').forEach(el => {
  el.classList.add('hidden');
  observer.observe(el);
});