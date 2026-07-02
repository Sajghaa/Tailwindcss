import './styles/base.css';
import './styles/utilities.css';
import { Home } from './pages/Home';
import { Features } from './pages/Features';
import { Pricing } from './pages/Pricing';
import { Contact } from './pages/Contact';

const routes = {
  '#home': Home,
  '#features': Features,
  '#pricing': Pricing,
  '#contact': Contact,
  '': Home,
};

function renderRoute() {
  const hash = window.location.hash.slice(1) || 'home';
  const Component = routes[`#${hash}`] || Home;
  document.getElementById('app').innerHTML = Component();
}

function initDarkMode() {
  const html = document.documentElement;
  const toggle = document.getElementById('darkModeToggle');
  if (!toggle) return;
  const stored = localStorage.getItem('theme');
  if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    html.classList.add('dark');
  } else {
    html.classList.remove('dark');
  }
  toggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
  });
}

window.addEventListener('hashchange', () => {
  renderRoute();
  setTimeout(initDarkMode, 0);
});

renderRoute();
setTimeout(initDarkMode, 0);