import { h } from 'preact';
import { MainLayout } from '../layouts/MainLayout';
import { Button } from '../components/Button/Button';

export function Contact() {
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="font-serif text-5xl text-gold-gradient text-center">Concierge</h1>
        <p className="text-center text-gray-300 mt-3">Request a private viewing or bespoke appointment.</p>
        <form className="mt-12 space-y-6 bg-white/5 backdrop-blur p-8 rounded-2xl border border-white/10">
          <div className="grid md:grid-cols-2 gap-6">
            <input type="text" placeholder="Name" className="bg-black/30 border border-white/20 rounded-xl px-4 py-3 text-white" />
            <input type="email" placeholder="Email" className="bg-black/30 border border-white/20 rounded-xl px-4 py-3 text-white" />
          </div>
          <textarea rows="4" placeholder="Your inquiry" className="w-full bg-black/30 border border-white/20 rounded-xl px-4 py-3 text-white"></textarea>
          <Button variant="primary" className="w-full">SEND MESSAGE</Button>
        </form>
      </div>
    </MainLayout>
  );
}