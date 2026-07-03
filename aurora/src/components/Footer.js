export function Footer() {
  return `
    <footer class="border-t border-white/5 py-12 mt-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <div class="flex items-center gap-2">
            <img src="/logo.svg" alt="Logo" class="h-6 w-6" />
            <span class="font-display text-lg text-gradient-neon">Aurora</span>
          </div>
          <div class="flex gap-6 text-sm text-gray-400">
            <a href="#" class="hover:text-neon-blue">Behance</a>
            <a href="#" class="hover:text-neon-blue">Dribbble</a>
            <a href="#" class="hover:text-neon-blue">Instagram</a>
          </div>
          <p class="text-xs text-gray-500">© 2025 Aurora Creative.</p>
        </div>
      </div>
    </footer>
  `;
}