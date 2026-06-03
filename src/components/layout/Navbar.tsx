import React from 'react';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <header className="bg-surface sticky top-0 z-50 w-full border-b border-outline-variant/30 px-margin-mobile py-4">
      <div className="flex justify-between items-center max-w-container-max mx-auto">
        <Link href="/" className="flex items-center gap-2 cursor-pointer active:opacity-80">
          <img 
            alt="BOOT Movement Logo" 
            className="h-10 w-auto" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCQTmS9_xN8aTPsOwdk77Dsrz8C8KbckVG4qQvtSgP4F1N96A_GogSFIL07PBDsoRbQTsJP7nv8JssLhY9ZKPkkYRvG9jq2rYIOAVGkji5TIykKcIKEmoZozLdk_oGtmF9BHiLXa0Gugs3hmlclnaRvIg1_quhiji8C3xTkq7SwVAbKn1bT8BAq-5CAUUCLOGU7gZBgbKWFAeKpuIK3AljzA2c3P7yn8fIsNG1U-veKIGakjB5OrLbwzEkjKe6MIASV-Z7oHQ32NLR"
          />
          <span className="font-headline-sm text-headline-sm text-primary">BOOT Movement</span>
        </Link>
        <Link href="/join" className="bg-secondary text-on-secondary px-4 py-2 rounded-lg font-label-lg text-label-lg transition-all active:scale-95 shadow-sm">
          Join Now
        </Link>
      </div>
    </header>
  );
};
