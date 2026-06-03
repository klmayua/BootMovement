import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className="bg-primary text-surface-container py-12 px-4 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="flex items-center gap-2 mb-6">
            <Image 
              src="/boot_logo_2022.png" 
              alt="BOOT Logo" 
              width={50} 
              height={50} 
              className="brightness-200 grayscale invert"
            />
            <span className="font-serif font-bold text-2xl">BOOT MOVEMENT</span>
          </Link>
          <p className="text-surface-container/70 max-w-md leading-relaxed">
            Empowering every Nigerian to take ownership of their future. 
            Building a sustainable, transparent, and inclusive governance system for all.
          </p>
        </div>
        
        <div>
          <h4 className="font-serif font-semibold text-lg mb-6 text-white">Quick Links</h4>
          <ul className="space-y-3">
            <li><Link href="/about" className="text-surface-container/60 hover:text-white transition-colors">About BOOT</Link></li>
            <li><Link href="/thesis" className="text-surface-container/60 hover:text-white transition-colors">The Thesis</Link></li>
            <li><Link href="/movement" className="text-surface-container/60 hover:text-white transition-colors">Movement</Link></li>
            <li><Link href="/candidates" className="text-surface-container/60 hover:text-white transition-colors">Candidates</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif font-semibold text-lg mb-6 text-white">Connect</h4>
          <ul className="space-y-3">
            <li><Link href="/contact" className="text-surface-container/60 hover:text-white transition-colors">Contact Us</Link></li>
            <li><Link href="/volunteer" className="text-surface-container/60 hover:text-white transition-colors">Volunteer</Link></li>
            <li><Link href="/donate" className="text-surface-container/60 hover:text-white transition-colors">Donate</Link></li>
            <li><Link href="/join" className="text-surface-container/60 hover:text-white transition-colors">Join the Movement</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-surface-container/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-surface-container/50">
        <p>© 2026 BOOT Movement. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};
