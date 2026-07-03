import { MainLayout } from '../layouts/MainLayout';

const projects = [
  { title: 'Nebula', desc: 'Branding for a space‑tech startup', emoji: '🌌' },
  { title: 'Eclipse', desc: 'Interactive campaign for a luxury watch', emoji: '🌑' },
  { title: 'Aurora', desc: 'Visual identity for a music festival', emoji: '✨' },
  { title: 'Apex', desc: 'Website redesign for a fintech company', emoji: '🚀' },
  { title: 'Odyssey', desc: 'Motion reel for a travel brand', emoji: '🌊' },
  { title: 'Vertex', desc: 'Product design for a SaaS platform', emoji: '⚡' },
];

export function Work() {
  const content = `
    <div class="max-w-6xl mx-auto px-4 py-20">
      <div class="text-center mb-12">
        <span class="text-neon-blue text-sm font-semibold uppercase tracking-widest">Selected projects</span>
        <h1 class="text-4xl sm:text-5xl font-display font-bold mt-2">Our <span class="text-gradient-neon">Work</span></h1>
        <p class="mt-4 text-gray-400 max-w-2xl mx-auto">A curated selection of our recent collaborations.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${projects.map(p => `
          <div class="glass p-6 rounded-2xl text-center hover:scale-105 transition duration-300 hover:shadow-neon-blue/20">
            <div class="text-5xl mb-4">${p.emoji}</div>
            <h3 class="text-xl font-display font-bold text-white">${p.title}</h3>
            <p class="text-sm text-gray-400 mt-1">${p.desc}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  return MainLayout(content);
}