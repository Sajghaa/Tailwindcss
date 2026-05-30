import './styles/base.css';
import './styles/utilities.css';
import { Home } from './pages/Home';
import { Collection } from './pages/Collection';
import { Contact } from './pages/Contact';

const routes = {
  '#home': Home,
  '#collection': Collection,
  '#contact': Contact,
  '': Home,
};

function renderRoute() {
  const hash = window.location.hash.slice(1) || 'home';
  const Component = routes[`#${hash}`] || Home;
  const app = document.getElementById('app');
  app.innerHTML = Component();
}

window.addEventListener('hashchange', renderRoute);
renderRoute();