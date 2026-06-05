import React from 'react';
import Link from 'next/link';

export const MovementNavbar = () => {
  return (
    <header className="w-full top-0 sticky bg-surface border-b border-outline-variant/30 z-50">
      <nav className="flex justify-between items-center max-w-container-max mx-auto px-margin-desktop py-4">
        <div className="flex items-center gap-3 cursor-pointer active:opacity-80">
          <span className="material-symbols-outlined text-primary text-3xl">account_balance</span>
          <span className="font-headline-md text-headline-md text-primary">BOOT Civic Movement</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <Link className="font-label-lg text-label-lg text-on-surface-variant hover:text-secondary transition-colors duration-200" href="/">Home</Link>
          <Link className="font-label-lg text-label-lg text-on-surface-variant hover:text-secondary transition-colors duration-200" href="/about">About</Link>
          <Link className="font-label-lg text-label-lg text-on-surface-variant hover:text-secondary transition-colors duration-200" href="/thesis">Thesis</Link>
          <Link className="font-label-lg text-label-lg text-on-surface-variant hover:text-secondary transition-colors duration-200" href="/communities">Communities</Link>
          <Link className="font-label-lg text-label-lg text-secondary border-b-2 border-secondary" href="/movement">Impact Hub</Link>
        </div>
        <button className="bg-secondary text-on-secondary px-6 py-2 font-label-lg text-label-lg rounded-DEFAULT hover:opacity-90 transition-all shadow-sm">
          Join Now
        </button>
      </nav>
    </header>
  );
};
