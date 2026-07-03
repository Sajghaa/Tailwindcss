import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ParticleBackground } from '../components/ParticleBackground';

export function MainLayout(children) {
  return `
    ${ParticleBackground()}
    ${Navbar()}
    <main class="pt-16 min-h-screen">${children}</main>
    ${Footer()}
  `;
}