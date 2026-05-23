import { h } from 'preact';
import { cn } from '../../utils/cn';
import './Button.css'; // optional component‑specific styles

export function Button({ variant = 'primary', children, className, ...props }) {
  const variants = {
    primary: 'btn-gold',
    outline: 'border border-gold-500 text-gold-500 hover:bg-gold-500/10',
    ghost: 'text-gray-300 hover:text-gold-400',
    dark: 'bg-black/40 backdrop-blur border border-white/20 text-white hover:bg-black/60',
  };

  return (
    <button
      className={cn(
        'px-5 py-2 rounded-full transition-all duration-300 font-medium',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}