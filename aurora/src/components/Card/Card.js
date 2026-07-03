import { cn } from '../../utils/cn';

export function Card({ title, description, icon, className = '' }) {
  return `
    <div class="${cn('glass p-6 rounded-2xl transition hover:-translate-y-2 hover:shadow-neon-blue/20 hover:shadow-xl', className)}">
      <div class="text-4xl mb-4">${icon}</div>
      <h3 class="text-xl font-display font-bold text-white">${title}</h3>
      <p class="mt-2 text-gray-400 text-sm leading-relaxed">${description}</p>
    </div>
  `;
}