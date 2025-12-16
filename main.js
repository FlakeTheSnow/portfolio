if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const canvas = document.getElementById('donut-canvas');
  if (canvas) canvas.style.display = 'none';
}

const circle = document.getElementById('photo-circle');
let rotation = 0;

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  rotation = scrollY * 0.1; // uprav hodnotu pro citlivost
  circle.style.transform = `rotate(${rotation}deg)`;
});
