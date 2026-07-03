import { MainLayout } from '../layouts/MainLayout';
import { Button } from '../components/Button/Button';

export function Contact() {
  const content = `
    <div class="max-w-4xl mx-auto px-4 py-20">
      <div class="text-center mb-12">
        <span class="text-neon-blue text-sm font-semibold uppercase tracking-widest">Get in touch</span>
        <h1 class="text-4xl sm:text-5xl font-display font-bold mt-2">Let's <span class="text-gradient-neon">collaborate</span></h1>
        <p class="mt-4 text-gray-400 max-w-xl mx-auto">Have a project in mind? We'd love to hear about it.</p>
      </div>
      <div class="glass p-8 rounded-2xl max-w-2xl mx-auto">
        <form>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" placeholder="Your name" class="bg-dark-bg/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-blue" />
            <input type="email" placeholder="Email address" class="bg-dark-bg/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-blue" />
          </div>
          <input type="text" placeholder="Subject" class="w-full mt-4 bg-dark-bg/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-blue" />
          <textarea rows="5" placeholder="Tell us about your project..." class="w-full mt-4 bg-dark-bg/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-blue"></textarea>
          ${Button({ variant: 'primary', children: 'Send Message', className: 'w-full mt-6' })}
        </form>
        <div class="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-400">
          <div><span class="text-neon-blue">📧</span> hello@aurora.agency</div>
          <div><span class="text-neon-blue">📞</span> +1 (555) 000-9999</div>
          <div><span class="text-neon-blue">📍</span> San Francisco, CA</div>
        </div>
      </div>
    </div>
  `;
  return MainLayout(content);
}