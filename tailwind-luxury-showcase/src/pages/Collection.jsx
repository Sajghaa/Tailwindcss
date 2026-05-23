import { h } from 'preact';
import { MainLayout } from '../layouts/MainLayout';

export function Collection() {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="font-serif text-5xl text-gold-gradient">Full Collection</h1>
        <p className="mt-4 text-gray-300">Explore all our high jewellery masterpieces.</p>
        {/* Add a dynamic grid here if needed */}
      </div>
    </MainLayout>
  );
}