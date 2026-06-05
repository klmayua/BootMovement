import React from 'react';
import Link from 'next/link';

export const MovementFooter = () => {
  return (
    <footer className="w-full mt-auto bg-primary text-on-primary py-12 px-margin-desktop border-t border-outline-variant/10">
      <div className="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-start gap-gutter">
        <div className="max-w-xs">
          <span className="font-headline-sm text-headline-sm text-on-primary block mb-4">BOOT Civic Movement</span>
          <p className="font-body-sm text-body-sm text-primary-fixed-dim opacity-80">Forging a visionary tradition through accountability, clarity, and collective civic action.</p>
        </div>
        <div className="flex flex-wrap gap-x-12 gap-y-6">
          <div className="flex flex-col gap-3">
            <h5 className="font-label-lg text-label-lg text-on-primary uppercase tracking-widest mb-2">Movement</h5>
            <Link className="font-body-sm text-body-sm text-primary-fixed-dim hover:text-white underline transition-opacity" href="#">Volunteer Portal</Link>
            <Link className="font-body-sm text-body-sm text-primary-fixed-dim hover:text-white underline transition-opacity" href="#">Donate</Link>
          </div>
          <div className="flex flex-col gap-3">
            <h5 className="font-label-lg text-label-lg text-on-primary uppercase tracking-widest mb-2">Legal</h5>
            <Link className="font-body-sm text-body-sm text-primary-fixed-dim hover:text-white underline transition-opacity" href="#">Privacy Policy</Link>
            <Link className="font-body-sm text-body-sm text-primary-fixed-dim hover:text-white underline transition-opacity" href="#">Terms of Service</Link>
          </div>
        </div>
        <div className="flex gap-4">
          <a className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition-all" href="#">
            <span className="material-symbols-outlined text-[20px]">share</span>
          </a>
          <a className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition-all" href="#">
            <span className="material-symbols-outlined text-[20px]">public</span>
          </a>
        </div>
      </div>
      <div className="max-w-container-max mx-auto mt-12 pt-8 border-t border-on-primary/10 text-center md:text-left">
        <p className="font-body-sm text-body-sm text-primary-fixed-dim opacity-70">© 2024 BOOT Civic Movement. All Rights Reserved. Built for Accountability.</p>
      </div>
    </footer>
  );
};
