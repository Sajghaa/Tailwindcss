import './styles/base.css';
import './styles/utilities.css';
import { render } from 'preact';
import { Home } from './pages/Home.jsx';
import { Collection } from './pages/Collection.jsx';
import { Contact } from './pages/Contact.jsx';

const routes = {
  '#home': Home,
  '#collection': Collection,
  '#contact': Contact,
  '': Home,
};

function renderRoute() {
  const hash = window.location.hash.slice(1) || 'home';
  const Component = routes[`#${hash}`] || Home;
  render(<Component />, document.getElementById('app'));
}

window.addEventListener('hashchange', renderRoute);
renderRoute();