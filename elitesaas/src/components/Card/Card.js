import { cn } from '../../utils/cn';

export function Card({ title, description, icon, className = '' }) {
  return `
    <div class="${cn('glass p-6 rounded-2xl transition hover:-translate-y-1 hover:shadow-2xl', className)}">
      <div class="text-3xl mb-4">${icon || '🚀'}</div>
      <h3 class="text-xl font-bold text-gray-900 dark:text-white">${title}</h3>
      <p class="mt-2 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">${description}</p>
    </div>
  `;
}