import { Navbar } from '../Navbar';
import { Footer } from '../Footer';

export function MainLayout(children) {
  return `
    ${Navbar()}
    <main class="pt-16 min-h-screen">${children}</main>
    ${Footer()}
  `;
}