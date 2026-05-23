import { cn } from '../../utils/cn';
import { h } from 'preact';
export function Card({ title, price, rarity, icon, description, className, ...props }) {
  return (
    <div className={cn('glass-card p-6 flex flex-col items-start sparkle-effect', className)} {...props}>
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-700/40 to-gold-900/40 flex items-center justify-center text-3xl shadow-xl mb-5">
        {icon || '💎'}
      </div>
      <h3 className="text-2xl font-serif font-bold tracking-wide text-white">{title}</h3>
      <p className="text-gray-300 text-sm mt-2 leading-relaxed">{description}</p>
      <div className="mt-4 flex items-center justify-between w-full">
        <span className="text-gold-500 font-semibold text-lg">{price}</span>
        <span className="text-xs text-gold-400/70 border border-gold-400/30 px-3 py-1 rounded-full">{rarity}</span>
      </div>
      <button className="mt-5 w-full py-2.5 rounded-full bg-white/5 border border-white/15 text-amber-200 text-sm hover:bg-gold-500/20 transition font-medium">
        Discover the Aura →
      </button>
    </div>
  );
}