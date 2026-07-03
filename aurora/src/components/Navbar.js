import { Button } from './Button/Button';

export function Navbar() {
  return `
    <nav class="fixed top-0 left-0 w-full glass z-50 border-b border-white/5">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center gap-2">
            <img src="/logo.svg" alt="Logo" class="h-8 w-8" />
            <span class="text-xl font-display font-bold text-gradient-neon">Aurora</span>
          </div>
          <div class="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#home" class="hover:text-neon-blue transition">Home</a>
            <a href="#work" class="hover:text-neon-blue transition">Work</a>
            <a href="#services" class="hover:text-neon-blue transition">Services</a>
            <a href="#contact" class="hover:text-neon-blue transition">Contact</a>
          </div>
          <div class="flex items-center gap-3">
            ${Button({ variant: 'outline', children: 'Let\'s Talk', className: 'text-sm' })}
          </div>
        </div>
      </div>
    </nav>
  `;
}