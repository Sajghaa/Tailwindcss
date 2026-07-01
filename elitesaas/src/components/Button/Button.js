import { cn } from '../../utils/cn';

export function Button({ variant = 'primary', children, className = '', ...props }) {
  const variants = {
    primary: 'bg-primary-500 hover:bg-primary-600 text-white shadow-lg shadow-primary-500/30',
    outline: 'border border-primary-500 text-primary-500 hover:bg-primary-500/10',
    ghost: 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800',
  };
  const classes = cn(
    'px-5 py-2.5 rounded-lg font-medium transition-all duration-200',
    variants[variant],
    className
  );
  const attrs = Object.entries(props).map(([k, v]) => `${k}="${v}"`).join(' ');
  return `<button class="${classes}" ${attrs}>${children}</button>`;
}