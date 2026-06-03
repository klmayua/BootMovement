import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import Link from 'next/link';

export const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      
      {/* Bottom Navigation Bar (Mobile) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-surface border-t border-outline-variant/20 z-50 px-4 pb-safe">
        <div className="flex justify-around items-center h-16">
          <Link href="/" className="flex flex-col items-center gap-0.5 text-secondary">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
            <span className="font-sans text-xs font-medium">Home</span>
          </Link>
          <Link href="/communities" className="flex flex-col items-center gap-0.5 text-on-surface-variant">
            <span className="material-symbols-outlined">groups</span>
            <span className="font-sans text-xs font-medium">Communities</span>
          </Link>
          <Link href="/events" className="flex flex-col items-center gap-0.5 text-on-surface-variant">
            <span className="material-symbols-outlined">event</span>
            <span className="font-sans text-xs font-medium">Events</span>
          </Link>
          <Link href="/impact" className="flex flex-col items-center gap-0.5 text-on-surface-variant">
            <span className="material-symbols-outlined">analytics</span>
            <span className="font-sans text-xs font-medium">Impact</span>
          </Link>
        </div>
      </nav>

      {/* Floating Action Button */}
      <Link href="/join" className="fixed bottom-24 right-margin-mobile bg-secondary text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center z-40 active:scale-90 transition-transform">
        <span className="material-symbols-outlined text-3xl">volunteer_activism</span>
      </Link>
    </div>
  );
};
