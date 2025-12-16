if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const canvas = document.getElementById('donut-canvas');
  if (canvas) canvas.style.display = 'none';
}