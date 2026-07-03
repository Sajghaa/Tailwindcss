import { MainLayout } from '../layouts/MainLayout';
import { Card } from '../components/Card/Card';
import { Button } from '../components/Button/Button';

const services = [
  { title: 'Brand Identity', description: 'Craft memorable brands that resonate with your audience.', icon: '🎨' },
  { title: 'Web Design', description: 'Immersive, high‑performance digital experiences.', icon: '💻' },
  { title: 'Motion Graphics', description: 'Captivate with animated storytelling and visual effects.', icon: '🎬' },
  { title: 'UI/UX Design', description: 'User‑centered interfaces that delight and convert.', icon: '✨' },
  { title: 'Photography', description: 'High‑end product and lifestyle photography.', icon: '📸' },
  { title: 'Strategy Consulting', description: 'Data‑driven insights to guide your brand growth.', icon: '📈' },
];

export function Services() {
  const content = `
    <div class="max-w-6xl mx-auto px-4 py-20">
      <div class="text-center mb-12">
        <span class="text-neon-blue text-sm font-semibold uppercase tracking-widest">What we do</span>
        <h1 class="text-4xl sm:text-5xl font-display font-bold mt-2">Our <span class="text-gradient-neon">Services</span></h1>
        <p class="mt-4 text-gray-400 max-w-2xl mx-auto">We offer a full spectrum of creative solutions to bring your brand to life.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${services.map(s => Card(s)).join('')}
      </div>
      <div class="mt-16 text-center">
        ${Button({ variant: 'primary', children: 'Let’s Work Together', className: 'px-8 py-3.5 text-lg' })}
      </div>
    </div>
  `;
  return MainLayout(content);
}