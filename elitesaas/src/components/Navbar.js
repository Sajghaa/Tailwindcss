import { Button } from './Button/Button';
import { DarkModeToggle } from './DarkModeToggle';

export function Navbar() {
  return `
    <nav class="fixed top-0 left-0 w-full glass z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center gap-2">
            <img src="/logo.svg" alt="Logo" class="h-8 w-8" />
            <span class="text-xl font-bold text-gradient">EliteSaaS</span>
          </div>
          <div class="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#home" class="hover:text-primary-500 transition">Home</a>
            <a href="#features" class="hover:text-primary-500 transition">Features</a>
            <a href="#pricing" class="hover:text-primary-500 transition">Pricing</a>
            <a href="#contact" class="hover:text-primary-500 transition">Contact</a>
          </div>
          <div class="flex items-center gap-3">
            ${DarkModeToggle()}
            ${Button({ variant: 'primary', children: 'Get Started' })}
          </div>
        </div>
      </div>
    </nav>
  `;
}