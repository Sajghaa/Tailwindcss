import { h } from 'preact';
export function Footer() {
  return (
    <footer className="mt-16 pt-16 pb-10 border-t border-white/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-gold-500 rounded-full"></div>
              <span className="font-serif text-3xl text-gold-gradient">ELYSIAN</span>
            </div>
            <p className="text-gray-400 max-w-xs text-sm">The atelier of impossible beauty. Global high jewelry since 1892.</p>
            <div className="flex gap-5 mt-4">
              <span className="text-gold-400/60 text-xl">✧</span>
              <span className="text-gold-400/60 text-xl">✦</span>
              <span className="text-gold-400/60 text-xl">✧</span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 text-sm">
            <div>
              <h5 className="text-white font-semibold mb-3">MAISON</h5>
              <ul className="space-y-2 text-gray-400">
                <li>History</li><li>Heritage</li><li>L’Atelier</li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-3">CONCIERGE</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Private Viewing</li><li>Bespoke Order</li><li>High Jewelry Events</li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-3">LEGAL</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Ethics</li><li>Certificate</li><li>Privacy</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 text-xs mt-14 pt-6 border-t border-white/5">
          © ELYSIAN GEMS — RADIANCE BEYOND IMAGINATION
        </div>
      </div>
    </footer>
  );
}