import React from 'react';
import Link from 'next/link';

export default function CampaignCommandCenter() {
  return (
    <div className="bg-background text-on-background font-body-md selection:bg-secondary-container selection:text-on-secondary-container">
      {/* Side Navigation Shell */}
      <aside className="fixed left-0 top-0 h-screen flex flex-col py-8 bg-primary dark:bg-primary-container text-on-primary dark:text-on-primary-container w-64 z-50">
        <div className="px-6 mb-10">
          <h1 className="font-headline-md text-headline-md font-bold text-on-primary tracking-tight">CivicOS</h1>
          <p className="font-label-lg text-label-lg text-on-primary/60">Executive Portal</p>
        </div>
        <nav className="flex-1 space-y-1">
          <Link className="flex items-center px-6 py-3 text-on-primary bg-primary-container/20 border-l-4 border-secondary-container transition-colors duration-200" href="/admin/dashboard">
            <span className="material-symbols-outlined mr-3">dashboard</span>
            <span className="font-label-lg text-label-lg">Command Center</span>
          </Link>
          <Link className="flex items-center px-6 py-3 text-on-primary/70 hover:text-on-primary hover:bg-primary-container/10 transition-colors duration-200" href="#">
            <span className="material-symbols-outlined mr-3">groups</span>
            <span className="font-label-lg text-label-lg">Citizens</span>
          </Link>
          <Link className="flex items-center px-6 py-3 text-on-primary/70 hover:text-on-primary hover:bg-primary-container/10 transition-colors duration-200" href="/narrative">
            <span className="material-symbols-outlined mr-3">psychology</span>
            <span className="font-label-lg text-label-lg">Narrative</span>
          </Link>
          <Link className="flex items-center px-6 py-3 text-on-primary/70 hover:text-on-primary hover:bg-primary-container/10 transition-colors duration-200" href="#">
            <span className="material-symbols-outlined mr-3">how_to_vote</span>
            <span className="font-label-lg text-label-lg">Election Ops</span>
          </Link>
          <Link className="flex items-center px-6 py-3 text-on-primary/70 hover:text-on-primary hover:bg-primary-container/10 transition-colors duration-200" href="#">
            <span className="material-symbols-outlined mr-3">inventory_2</span>
            <span className="font-label-lg text-label-lg">Resources</span>
          </Link>
          <Link className="flex items-center px-6 py-3 text-on-primary/70 hover:text-on-primary hover:bg-primary-container/10 transition-colors duration-200" href="#">
            <span className="material-symbols-outlined mr-3">settings</span>
            <span className="font-label-lg text-label-lg">Settings</span>
          </Link>
        </nav>
        <div className="px-6 mt-auto pt-8 border-t border-on-primary/10">
          <button className="w-full py-3 mb-6 bg-secondary-container text-on-secondary-container font-label-lg rounded-lg hover:opacity-90 transition-all scale-95 active:duration-100">
            New Initiative
          </button>
          <div className="space-y-1">
            <Link className="flex items-center py-2 text-on-primary/70 hover:text-on-primary" href="#">
              <span className="material-symbols-outlined mr-3">help</span>
              <span className="font-label-lg text-label-lg">Support</span>
            </Link>
            <Link className="flex items-center py-2 text-on-primary/70 hover:text-on-primary" href="#">
              <span className="material-symbols-outlined mr-3">logout</span>
              <span className="font-label-lg text-label-lg">Log Out</span>
            </Link>
        </div>
      </main>
      {/* Footer Shell */}
      <footer className="ml-64 w-[calc(100%-16rem)] flex flex-col md:flex-row justify-between items-center py-8 px-margin-desktop bg-surface-container-low border-t border-outline-variant/20 mt-12">
        <div className="mb-4 md:mb-0">
          <h4 className="font-label-lg text-label-lg font-bold text-primary mb-1">CivicOS</h4>
          <p className="font-body-sm text-body-sm text-on-surface-variant opacity-70">© 2024 Visionary Tradition Movement. All Rights Reserved. Institutional Oversight Protocol v4.2</p>
        </div>
        <div className="flex space-x-8">
          <Link className="text-on-surface-variant hover:text-primary transition-colors font-label-md underline-offset-4 hover:underline" href="#">Ethics Policy</Link>
          <Link className="text-on-surface-variant hover:text-primary transition-colors font-label-md underline-offset-4 hover:underline" href="#">Privacy</Link>
          <Link className="text-on-surface-variant hover:text-primary transition-colors font-label-md underline-offset-4 hover:underline" href="#">Legal</Link>
          <Link className="text-on-surface-variant hover:text-primary transition-colors font-label-md underline-offset-4 hover:underline" href="#">Contact Bureau</Link>
        </div>
      </footer>
    </div>
  );
}
