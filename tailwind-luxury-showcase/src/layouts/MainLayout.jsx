import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export function MainLayout(children) {
  return `
    ${Navbar()}
    <main class="flex-grow">${children}</main>
    ${Footer()}
  `;
}