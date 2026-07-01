import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export function MainLayout(children) {
  return `
    ${Navbar()}
    <main class="pt-16 min-h-screen">${children}</main>
    ${Footer()}
  `;
}