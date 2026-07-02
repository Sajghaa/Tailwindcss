import { MainLayout } from '../components/layouts/MainLayout';
import { Card } from '../components/Card/Card';
import { Button } from '../components/Button/Button';

const features = [
  { title: 'Real‑time Analytics', description: 'Monitor your metrics live with interactive dashboards.', icon: '📊' },
  { title: 'AI‑Powered Insights', description: 'Get actionable recommendations from your data.', icon: '🤖' },
  { title: 'Team Collaboration', description: 'Work together seamlessly with built‑in tools.', icon: '👥' },
  { title: 'Enterprise Security', description: 'Bank‑grade encryption and compliance standards.', icon: '🔒' },
];

export function Home() {
  const content = `
    <section class="relative overflow-hidden pt-20 pb-32 px-4">
      <div class="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-accent/10 pointer-events-none"></div>
      <div class="max-w-4xl mx-auto text-center relative z-10">
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in">
          Build the Future with <span class="text-gradient">EliteSaaS</span>
        </h1>
        <p class="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-slide-up">
          The all‑in‑one platform for modern teams – from startups to enterprises.
        </p>
        <div class="mt-10 flex flex-wrap justify-center gap-4">
          ${Button({ variant: 'primary', children: 'Start Free Trial', className: 'px-8 py-3 text-lg' })}
          ${Button({ variant: 'outline', children: 'Watch Demo', className: 'px-8 py-3 text-lg' })}
        </div>
      </div>
    </section>

    <section id="features" class="py-20 px-4">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-14">
          <h2 class="text-3xl sm:text-4xl font-bold">Everything you need to <span class="text-gradient">scale</span></h2>
          <p class="mt-3 text-gray-600 dark:text-gray-300">Powerful features designed to accelerate your growth.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          ${features.map(f => Card(f)).join('')}
        </div>
      </div>
    </section>

    <section id="pricing" class="py-20 px-4 bg-gray-50 dark:bg-gray-900/30">
      <div class="max-w-5xl mx-auto text-center">
        <h2 class="text-3xl sm:text-4xl font-bold">Simple, <span class="text-gradient">transparent</span> pricing</h2>
        <div class="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          ${['Starter', 'Pro', 'Enterprise'].map((plan, i) => `
            <div class="glass p-6 rounded-2xl ${i === 1 ? 'border-2 border-primary-500' : ''}">
              <h3 class="text-xl font-bold">${plan}</h3>
              <p class="mt-2 text-3xl font-bold">${i === 0 ? '$9' : i === 1 ? '$29' : '$99'}<span class="text-base font-normal text-gray-500">/mo</span></p>
              <ul class="mt-4 space-y-2 text-sm text-left text-gray-600 dark:text-gray-300">
                <li>✓ ${i === 0 ? '5 projects' : i === 1 ? 'Unlimited projects' : 'Custom solutions'}</li>
                <li>✓ ${i === 0 ? 'Basic analytics' : 'Advanced analytics'}</li>
                <li>✓ ${i === 2 ? 'Dedicated support' : 'Email support'}</li>
              </ul>
              ${Button({ variant: i === 1 ? 'primary' : 'outline', children: 'Get Started', className: 'mt-6 w-full' })}
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <section id="contact" class="py-20 px-4">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-3xl sm:text-4xl font-bold">Get in <span class="text-gradient">touch</span></h2>
        <p class="mt-3 text-gray-600 dark:text-gray-300">We'd love to hear from you.</p>
        <form class="mt-8 glass p-8 rounded-2xl text-left">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" placeholder="Name" class="bg-transparent border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500" />
            <input type="email" placeholder="Email" class="bg-transparent border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500" />
          </div>
          <textarea rows="4" placeholder="Message" class="w-full mt-4 bg-transparent border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"></textarea>
          ${Button({ variant: 'primary', children: 'Send Message', className: 'mt-4 w-full' })}
        </form>
      </div>
    </section>
  `;
  return MainLayout(content);
}