import { MainLayout } from '../layouts/MainLayout';
import { Card } from '../components/Card/Card';
import { Button } from '../components/Button/Button';

const services = [
  { title: 'Brand Identity', description: 'Craft memorable brands that resonate.', icon: '🎨' },
  { title: 'Web Design', description: 'Immersive, high‑performance digital experiences.', icon: '💻' },
  { title: 'Motion Graphics', description: 'Captivate with animated storytelling.', icon: '🎬' },
];

const portfolioItems = [
  { title: 'Nebula', desc: 'Branding for a space‑tech startup', img: '🌌' },
  { title: 'Eclipse', desc: 'Interactive campaign for a luxury watch', img: '🌑' },
  { title: 'Aurora', desc: 'Visual identity for a music festival', img: '✨' },
];

export function Home() {
  const content = `
    <section id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20">
      <div class="absolute inset-0 bg-gradient-to-br from-neon-blue/5 via-transparent to-neon-pink/5 pointer-events-none"></div>
      <div class="text-center max-w-4xl mx-auto relative z-10">
        <span class="inline-block px-4 py-1.5 rounded-full glass text-neon-blue text-sm font-medium animate-glow">✦ Creative Agency</span>
        <h1 class="mt-6 text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-tight">
          We craft <span class="text-gradient-neon">digital</span> <br /> experiences that <span class="text-gradient-neon">shine</span>
        </h1>
        <p class="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">We blend strategy, design, and technology to build brands that stand out in a noisy world.</p>
        <div class="mt-10 flex flex-wrap justify-center gap-4">
          ${Button({ variant: 'primary', children: 'View Our Work', className: 'px-8 py-3.5 text-lg' })}
          ${Button({ variant: 'outline', children: 'Let\'s Talk', className: 'px-8 py-3.5 text-lg' })}
        </div>
      </div>
      <!-- floating shapes -->
      <div class="absolute top-1/4 left-10 w-32 h-32 bg-neon-blue/20 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-1/4 right-10 w-48 h-48 bg-neon-pink/20 rounded-full blur-3xl animate-float" style="animation-delay: -3s;"></div>
    </section>

    <section id="services" class="py-20 px-4">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <span class="text-neon-blue text-sm font-semibold uppercase tracking-widest">What we do</span>
          <h2 class="text-3xl sm:text-4xl font-display font-bold mt-2">Our <span class="text-gradient-neon">Services</span></h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          ${services.map(s => Card(s)).join('')}
        </div>
      </div>
    </section>

    <section id="work" class="py-20 px-4 bg-dark-card/30">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <span class="text-neon-blue text-sm font-semibold uppercase tracking-widest">Selected work</span>
          <h2 class="text-3xl sm:text-4xl font-display font-bold mt-2">Recent <span class="text-gradient-neon">Projects</span></h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          ${portfolioItems.map(item => `
            <div class="glass p-6 rounded-2xl text-center hover:scale-105 transition duration-300">
              <div class="text-6xl mb-4">${item.img}</div>
              <h3 class="text-xl font-display font-bold text-white">${item.title}</h3>
              <p class="text-sm text-gray-400 mt-1">${item.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <section id="contact" class="py-20 px-4">
      <div class="max-w-3xl mx-auto text-center">
        <span class="text-neon-blue text-sm font-semibold uppercase tracking-widest">Contact</span>
        <h2 class="text-3xl sm:text-4xl font-display font-bold mt-2">Let's <span class="text-gradient-neon">collaborate</span></h2>
        <form class="mt-8 glass p-8 rounded-2xl text-left">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" placeholder="Name" class="bg-dark-bg/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-blue" />
            <input type="email" placeholder="Email" class="bg-dark-bg/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-blue" />
          </div>
          <textarea rows="4" placeholder="Tell us about your project" class="w-full mt-4 bg-dark-bg/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-blue"></textarea>
          ${Button({ variant: 'primary', children: 'Send Message', className: 'w-full mt-4' })}
        </form>
      </div>
    </section>
  `;
  return MainLayout(content);
}