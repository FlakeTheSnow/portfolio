const isLight = document.documentElement.classList.contains('light');

const particleColor = isLight ? '#2563eb' : '#38bdf8';


particlesJS('particles-js', {
  particles: {
    number: {
      value: 60,
      density: { enable: true, value_area: 400 }
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
      onclick: { enable: true, mode: 'push', distance: 80 },
      onhover: { enable: true, mode: 'repulse', distance: 80 },
      resize: true,
      
    },
    "modes":{
      "repulse":{
                "distance":87.90646751856022,
      }
    }
  },
  retina_detect: true
});
