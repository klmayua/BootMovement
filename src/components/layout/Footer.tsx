import React from 'react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-primary-container text-on-primary px-margin-mobile py-12 flex flex-col gap-8">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <img 
            alt="BOOT Logo" 
            className="h-8 w-auto brightness-200" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCQTmS9_xN8aTPsOwdk77Dsrz8C8KbckVG4qQvtSgP4F1N96A_GogSFIL07PBDsoRbQTsJP7nv8JssLhY9ZKPkkYRvG9jq2rYIOAVGkji5TIykKcIKEmoZozLdk_oGtmF9BHiLXa0Gugs3hmlclnaRvIg1_quhiji8C3xTkq7SwVAbKn1bT8BAq-5CAUUCLOGU7gZBgbKWFAeKpuIK3AljzA2c3P7yn8fIsNG1U-veKIGakjB5OrLbwzEkjKe6MIASV-Z7oHQ32NLR"
          />
          <span className="font-headline-sm text-headline-sm">BOOT Civic Movement</span>
        </div>
        <p className="font-body-sm text-body-sm text-primary-fixed-dim leading-relaxed">
          Building a nation based on merit, accountability, and the shared promise of a prosperous tomorrow for all Nigerians.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-y-6">
        <Link href="#" className="font-label-lg text-label-lg text-primary-fixed-dim hover:text-white transition-colors">Privacy Policy</Link>
        <Link href="#" className="font-label-lg text-label-lg text-primary-fixed-dim hover:text-white transition-colors">Terms of Service</Link>
        <Link href="#" className="font-label-lg text-label-lg text-primary-fixed-dim hover:text-white transition-colors">Volunteer Portal</Link>
        <Link href="#" className="font-label-lg text-label-lg text-primary-fixed-dim hover:text-white transition-colors">Donate</Link>
      </div>
      <div className="pt-8 border-t border-white/10 flex flex-col items-center gap-4">
        <div className="flex gap-6">
          <span className="material-symbols-outlined cursor-pointer hover:text-secondary-fixed-dim">social_leaderboard</span>
          <span className="material-symbols-outlined cursor-pointer hover:text-secondary-fixed-dim">campaign</span>
          <span className="material-symbols-outlined cursor-pointer hover:text-secondary-fixed-dim">mail</span>
        </div>
        <p className="font-body-sm text-body-sm text-primary-fixed-dim/60 text-center">
          © 2024 BOOT Civic Movement. All Rights Reserved. Built for Accountability.
        </p>
      </div>
    </footer>
  );
};
