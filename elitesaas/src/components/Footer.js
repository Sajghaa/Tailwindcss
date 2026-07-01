export function Footer() {
  return `
    <footer class="bg-gray-50 dark:bg-gray-900/50 border-t border-gray-200 dark:border-gray-800 py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <div class="flex items-center gap-2">
            <img src="/logo.svg" alt="Logo" class="h-6 w-6" />
            <span class="text-sm font-semibold text-gradient">EliteSaaS</span>
          </div>
          <div class="flex gap-6 text-sm text-gray-600 dark:text-gray-400">
            <a href="#" class="hover:text-primary-500">Privacy</a>
            <a href="#" class="hover:text-primary-500">Terms</a>
            <a href="#" class="hover:text-primary-500">Support</a>
          </div>
          <p class="text-xs text-gray-500 dark:text-gray-500">© 2025 EliteSaaS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `;
}