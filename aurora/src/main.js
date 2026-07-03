import './styles/base.css';
import './styles/utilities.css';
import { Home } from './pages/Home';
import { Work } from './pages/Work';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';

const routes = {
  '#home': Home,
  '#work': Work,
  '#services': Services,
  '#contact': Contact,
  '': Home,
};

function renderRoute() {
  const hash = window.location.hash.slice(1) || 'home';
  const Component = routes[`#${hash}`] || Home;
  document.getElementById('app').innerHTML = Component();
}

// Particle background setup
function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h;
  const particles = [];
  const count = 120;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  class Particle {
    constructor() {
      this.x = Math.random() * w;
      this.y = Math.random() * h;
      this.r = Math.random() * 2 + 1;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.alpha = Math.random() * 0.6 + 0.2;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > w) this.vx *= -1;
      if (this.y < 0 || this.y > h) this.vy *= -1;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 212, 255, ${this.alpha})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < count; i++) particles.push(new Particle());

  function animate() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach(p => { p.update(); p.draw(); });
    // draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < 150) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0, 212, 255, ${0.1 * (1 - dist/150)})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(animate);
  }
  animate();
}

window.addEventListener('hashchange', () => {
  renderRoute();
  setTimeout(initParticles, 50);
});

renderRoute();
setTimeout(initParticles, 100);