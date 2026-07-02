import { MainLayout } from '../components/layouts/MainLayout';

export function Features() {
  const content = `
    <div class="max-w-4xl mx-auto px-4 py-20">
      <h1 class="text-4xl font-bold text-gradient">Features</h1>
      <p class="mt-4 text-gray-600 dark:text-gray-300">Explore our full feature set.</p>
    </div>
  `;
  return MainLayout(content);
}