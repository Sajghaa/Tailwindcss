import { MainLayout } from '../layouts/MainLayout';
import { Button } from '../components/Button/Button';

export function Contact() {
  const content = `
    <div class="max-w-4xl mx-auto px-6 py-20">
      <h1 class="font-serif text-5xl text-gold-gradient text-center">Concierge</h1>
      <p class="text-center text-gray-300 mt-3">Request a private viewing or bespoke appointment.</p>
      <form class="mt-12 space-y-6 bg-white/5 backdrop-blur p-8 rounded-2xl border border-white/10">
        <div class="grid md:grid-cols-2 gap-6">
          <input type="text" placeholder="Name" class="bg-black/30 border border-white/20 rounded-xl px-4 py-3 text-white">
          <input type="email" placeholder="Email" class="bg-black/30 border border-white/20 rounded-xl px-4 py-3 text-white">
        </div>
        <textarea rows="4" placeholder="Your inquiry" class="w-full bg-black/30 border border-white/20 rounded-xl px-4 py-3 text-white"></textarea>
        ${Button({ variant: 'primary', children: 'SEND MESSAGE', className: 'w-full' })}
      </form>
    </div>
  `;
  return MainLayout(content);
}