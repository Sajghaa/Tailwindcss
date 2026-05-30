export function Footer() {
  return `
    <footer class="mt-16 pt-16 pb-10 border-t border-white/10 backdrop-blur-sm">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex flex-col md:flex-row justify-between gap-10">
          <div class="space-y-3">
            <div class="flex items-center gap-2">
              <div class="w-7 h-7 bg-gold-500 rounded-full"></div>
              <span class="font-serif text-3xl text-gold-gradient">ELYSIAN</span>
            </div>
            <p class="text-gray-400 max-w-xs text-sm">The atelier of impossible beauty. Global high jewelry since 1892.</p>
            <div class="flex gap-5 mt-4">
              <span class="text-gold-400/60 text-xl">✧</span>
              <span class="text-gold-400/60 text-xl">✦</span>
              <span class="text-gold-400/60 text-xl">✧</span>
            </div>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-10 text-sm">
            <div><h5 class="text-white font-semibold mb-3">MAISON</h5><ul class="space-y-2 text-gray-400"><li>History</li><li>Heritage</li><li>L’Atelier</li></ul></div>
            <div><h5 class="text-white font-semibold mb-3">CONCIERGE</h5><ul class="space-y-2 text-gray-400"><li>Private Viewing</li><li>Bespoke Order</li><li>High Jewelry Events</li></ul></div>
            <div><h5 class="text-white font-semibold mb-3">LEGAL</h5><ul class="space-y-2 text-gray-400"><li>Ethics</li><li>Certificate</li><li>Privacy</li></ul></div>
          </div>
        </div>
        <div class="text-center text-gray-500 text-xs mt-14 pt-6 border-t border-white/5">© ELYSIAN GEMS — RADIANCE BEYOND IMAGINATION</div>
      </div>
    </footer>
  `;
}