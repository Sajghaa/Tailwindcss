import { MainLayout } from '../layouts/MainLayout';

export function Collection() {
  const content = `
    <div class="max-w-7xl mx-auto px-6 py-20 text-center">
      <h1 class="font-serif text-5xl text-gold-gradient">Full Collection</h1>
      <p class="mt-4 text-gray-300">Explore all our high jewellery masterpieces.</p>
    </div>
  `;
  return MainLayout(content);
}