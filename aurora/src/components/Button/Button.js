import { cn } from '../../utils/cn';

export function Button({ variant = 'primary', children, className = '', ...props }) {
  const variants = {
    primary: 'bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-lg shadow-neon-blue/30 hover:shadow-neon-blue/60',
    outline: 'border border-neon-blue text-neon-blue hover:bg-neon-blue/10',
    ghost: 'text-gray-300 hover:text-neon-blue',
  };
  const classes = cn('px-6 py-3 rounded-full font-semibold transition-all duration-300', variants[variant], className);
  const attrs = Object.entries(props).map(([k, v]) => `${k}="${v}"`).join(' ');
  return `<button class="${classes}" ${attrs}>${children}</button>`;
}