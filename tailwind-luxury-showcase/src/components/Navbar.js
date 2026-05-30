import { h } from 'preact';
import { Button } from './Button/Button.js';

export function Navbar() {
  return (
    <nav className="sticky top-4 mx-4 md:mx-8 mt-4 rounded-full bg-black/30 backdrop-blur-2xl border border-gold-500/30 shadow-2xl z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gold-500 rounded-full shadow-lg animate-pulse" />
          <span className="font-serif text-2xl font-semibold tracking-wide text-gold-gradient">ELYSIAN</span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-white/80">
          <a href="#" className="hover:text-gold-400 transition-colors">ATELIER</a>
          <a href="#" className="hover:text-gold-400 transition-colors">COLLECTION</a>
          <a href="#" className="hover:text-gold-400 transition-colors">HAUTE JOAILLERIE</a>
        </div>
        <Button variant="outline">BOOK A VISITE</Button>
      </div>
    </nav>
  );
}
import { Button } from './Button/Button.js';

export function Navbar() {
  return (
    <nav className="sticky top-4 mx-4 md:mx-8 mt-4 rounded-full bg-black/30 backdrop-blur-2xl border border-gold-500/30 shadow-2xl z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gold-500 rounded-full shadow-lg animate-pulse"></div>
          <span className="font-serif text-2xl font-semibold tracking-wide text-gold-gradient">ELYSIAN</span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-white/80">
          <a href="#" className="hover:text-gold-400 transition-colors">ATELIER</a>
          <a href="#" className="hover:text-gold-400 transition-colors">COLLECTION</a>
          <a href="#" className="hover:text-gold-400 transition-colors">HAUTE JOAILLERIE</a>
        </div>
        <Button variant="outline">BOOK A VISITE</Button>
      </div>
    </nav>
  );
}