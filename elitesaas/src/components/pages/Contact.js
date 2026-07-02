import { MainLayout } from '../layouts/MainLayout';

export function Contact() {
  const content = `
    <div class="max-w-4xl mx-auto px-4 py-20">
      <h1 class="text-4xl font-bold text-gradient">Contact</h1>
      <p class="mt-4 text-gray-600 dark:text-gray-300">Get in touch with our team.</p>
    </div>
  `;
  return MainLayout(content);
}