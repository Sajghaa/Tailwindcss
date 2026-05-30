import { MainLayout } from '../layouts/MainLayout';
import { Card } from '../components/Card/Card';
import { Button } from '../components/Button/Button';

const collectionData = [
  { title: 'Midnight Sapphire', price: '$84,000', rarity: 'RARITY I', icon: '💎', description: 'Kashmir origin · Velvet blue with asterism. Untamed depth.' },
  { title: 'Imperial Topaz', price: '$42,500', rarity: 'EXCEPTIONAL', icon: '✨', description: 'Sun-kissed champagne, flawless brilliance with fire flashes.' },
  { title: 'Regal Amethyst', price: '$61,200', rarity: 'COVETED', icon: '🔮', description: 'Deep violet Siberian, rare clarity and mystical luminosity.' },
  { title: 'Muzo Emerald', price: '$127,000', rarity: 'HERITAGE', icon: '🍃', description: 'Colombian vivid green, velvet luster with garden inclusions.' },
];

export function Home() {
  const cardsHtml = collectionData.map(item => Card(item)).join('');
  const content = `
    <section class="relative pt-28 pb-32 px-6 overflow-hidden">
      <div class="max-w-6xl mx-auto text-center relative z-10">
        <div class="inline-block mb-4 px-5 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-gold-300 text-sm font-medium tracking-wider animate-glow-pulse">
          ✦ MAISON D'EXCEPTION ✦
        </div>
        <h1 class="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mt-6">
          <span class="text-gold-gradient">Radiance</span><br>
          <span class="text-white drop-shadow-2xl">Unveiled</span>
        </h1>
        <p class="text-gray-300 max-w-2xl mx-auto mt-6 text-lg md:text-xl font-light">
          Where heritage meets avant-garde opulence. Discover masterpieces forged by time,
          illuminated by <span class="text-gold-300 font-medium">eternal brilliance</span>.
        </p>
        <div class="flex flex-wrap gap-6 justify-center mt-10">
          ${Button({ variant: 'primary', children: '✦ EXPLORE THE VAULT', className: 'px-8 py-3 text-lg' })}
          ${Button({ variant: 'outline', children: 'WATCH FILM →', className: 'px-8 py-3 text-lg group' })}
        </div>
      </div>
      <div class="absolute top-1/4 left-10 w-64 h-64 bg-gold-500/20 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-10 right-0 w-80 h-80 bg-purple-700/20 rounded-full blur-3xl animate-float" style="animation-delay: -2s;"></div>
    </section>

    <section class="py-24 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <span class="text-gold-400 uppercase tracking-[0.25em] text-sm font-semibold">Haute Joaillerie</span>
          <h2 class="font-serif text-4xl md:text-5xl mt-3 font-bold text-white">The Celestial <span class="text-gold-gradient">Collection</span></h2>
          <div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-5"></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          ${cardsHtml}
        </div>
      </div>
    </section>

    <section class="py-24 relative">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex flex-col lg:flex-row gap-16 items-center">
          <div class="flex-1 space-y-6">
            <div class="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-gold-400/30 text-gold-400 text-sm">✦ Atelier Secrets ✦</div>
            <h2 class="font-serif text-4xl md:text-5xl font-bold leading-tight text-white">Sculpted by <span class="text-gold-gradient">Divine Hands</span></h2>
            <p class="text-gray-300 text-lg leading-relaxed">Each gem passes 120+ hours of meticulous hand-finishing, pavilion precision, and ethical sourcing. Our maison merges 19th-century savoir-faire with contemporary couture.</p>
            <div class="flex flex-wrap gap-6 pt-4">
              <div class="flex items-center gap-3"><div class="w-10 h-10 rounded-full bg-gold-400/10 flex items-center justify-center text-gold-400 text-xl">🪙</div><span>Certified Gemological</span></div>
              <div class="flex items-center gap-3"><div class="w-10 h-10 rounded-full bg-gold-400/10 flex items-center justify-center text-gold-400 text-xl">✧</div><span>Bespoke High Jewelry</span></div>
              <div class="flex items-center gap-3"><div class="w-10 h-10 rounded-full bg-gold-400/10 flex items-center justify-center text-gold-400 text-xl">🔒</div><span>Conflict-Free Pledge</span></div>
            </div>
            ${Button({ variant: 'ghost', children: 'VIEW THE CRAFTSMANSHIP →', className: 'mt-4 text-lg' })}
          </div>
          <div class="flex-1 relative flex justify-center">
            <div class="relative w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-gold-500/20 to-purple-600/20 blur-2xl absolute -z-10 animate-spin-slow"></div>
            <div class="grid grid-cols-2 gap-4 relative z-10">
              ${[
                { num: '1892', label: 'Heritage' },
                { num: '37+', label: 'Design Awards' },
                { num: '14K', label: 'Rare Pieces' },
                { num: '5★', label: 'Concierge' }
              ].map(stat => `
                <div class="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 text-center">
                  <div class="text-3xl font-serif font-bold text-gold-300">${stat.num}</div>
                  <div class="text-xs uppercase tracking-wider mt-1 text-gray-400">${stat.label}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
  return MainLayout(content);
}