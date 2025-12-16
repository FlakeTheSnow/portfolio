const isLight = document.documentElement.classList.contains('light');

const particleColor = isLight ? '#2563eb' : '#38bdf8';


particlesJS('particles-js', {
  particles: {
    number: {
      value: 60,
      density: { enable: true, value_area: 800 }
    },
    color: { value: '#38bdf8' },
    shape: { type: 'circle' },
    opacity: { value: 0.3 },
    size: { value: 6, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#38bdf8',
      opacity: 0.2,
      width: 3
    },
    move: { enable: true, speed: 1.2 }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: 'repulse' },
      resize: true
    }
  },
  retina_detect: true
});
