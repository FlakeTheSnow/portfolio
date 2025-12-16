const canvas = document.getElementById('donut-canvas');

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 4;

const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  alpha: true
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Objekt – drátěný torus (profesionálnější než kostka)
const geometry = new THREE.TorusGeometry(1, 0.35, 24, 64);
const material = new THREE.MeshStandardMaterial({
  color: 0x38bdf8,
  metalness: 0.4,
  roughness: 0.4,
  wireframe: true
});

const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

// Světla
scene.add(new THREE.AmbientLight(0xffffff, 0.4));

const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

// Animace
function animate() {
  requestAnimationFrame(animate);

  torus.rotation.x += 0.002;
  torus.rotation.y += 0.003;

  renderer.render(scene, camera);
}

animate();

// Responzivita
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});