const toggle = document.getElementById('theme-toggle');
const dot = document.getElementById('toggle-dot');
const track = toggle.querySelector('div'); // samotná cesta
const root = document.documentElement;

const storedTheme = localStorage.getItem('theme');
if(storedTheme === 'light') setLight();

toggle.addEventListener('click', () => {
  const isLight = root.classList.contains('light');
  isLight ? setDark() : setLight();
});

function setLight() {
  root.classList.add('light');
  document.body.classList.remove('bg-neutral-950','text-neutral-100');
  document.body.classList.add('bg-neutral-50','text-neutral-900'); // světlé pozadí, tmavý text
  dot.style.transform = 'translateX(20px)';
  track.classList.remove('bg-neutral-600');
  track.classList.add('bg-blue-400'); // modrá cesta
  localStorage.setItem('theme','light');
}

function setDark() {
  root.classList.remove('light');
  document.body.classList.remove('bg-neutral-50','text-neutral-900');
  document.body.classList.add('bg-neutral-950','text-neutral-100'); // tmavé pozadí, světlý text
  dot.style.transform = 'translateX(0)';
  track.classList.remove('bg-blue-400');
  track.classList.add('bg-neutral-600'); // tmavá cesta
  localStorage.setItem('theme','dark');
}
