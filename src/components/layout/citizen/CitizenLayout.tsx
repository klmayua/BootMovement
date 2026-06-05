import React from 'react';
import Link from 'next/link';

export const CitizenNavbar = () => {
  return (
    <nav className="fixed left-0 top-0 h-screen w-64 bg-surface-container-low dark:bg-on-background border-r border-outline-variant/30 dark:border-outline/20 flex flex-col h-full py-8 px-4 z-50">
      <div className="mb-10 px-4">
        <h1 className="font-headline-sm text-headline-sm text-primary dark:text-primary-fixed-dim">BOOT OS</h1>
        <p className="font-label-md text-on-surface-variant uppercase tracking-widest mt-1">Civic Dashboard</p>
      </div>
      <div className="flex-1 space-y-2">
        <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-surface-variant hover:bg-surface-container transition-all hover:translate-x-1 duration-300 ease-in-out rounded-lg group" href="/citizen/dashboard">
          <span className="material-symbols-outlined group-hover:text-primary">dashboard</span>
          <span className="font-label-lg">Dashboard</span>
        </Link>
        <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-surface-variant hover:bg-surface-container transition-all hover:translate-x-1 duration-300 ease-in-out rounded-lg group" href="/communities">
          <span className="material-symbols-outlined group-hover:text-primary">groups</span>
          <span className="font-label-lg">Communities</span>
        </Link>
        <Link className="flex items-center gap-3 px-4 py-3 text-primary dark:text-primary-fixed-dim font-bold bg-primary-fixed/20 dark:bg-primary-container/30 rounded-lg translate-x-1" href="/events">
          <span className="material-symbols-outlined">event</span>
          <span className="font-label-lg">Events</span>
        </Link>
        <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-surface-variant hover:bg-surface-container transition-all hover:translate-x-1 duration-300 ease-in-out rounded-lg group" href="/projects">
          <span className="material-symbols-outlined group-hover:text-primary">assignment</span>
          <span className="font-label-lg">Projects</span>
        </Link>
        <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-surface-variant hover:bg-surface-container transition-all hover:translate-x-1 duration-300 ease-in-out rounded-lg group" href="/analytics">
          <span className="material-symbols-outlined group-hover:text-primary">monitoring</span>
          <span className="font-label-lg">Analytics</span>
        </Link>
        <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-surface-variant hover:bg-surface-container transition-all hover:translate-x-1 duration-300 ease-in-out rounded-lg group" href="/citizen/settings">
          <span className="material-symbols-outlined group-hover:text-primary">settings</span>
          <span className="font-label-lg">Settings</span>
        </Link>
      </div>
      <div className="mt-auto px-4 space-y-6">
        <button className="w-full bg-secondary text-on-secondary font-label-lg py-3 rounded-lg shadow-sm hover:opacity-90 transition-opacity">
          Donate Now
        </button>
        <div className="space-y-2">
          <Link className="flex items-center gap-3 py-2 text-on-surface-variant text-label-md hover:text-primary transition-colors" href="/contact">
            <span className="material-symbols-outlined text-sm">help</span>
            <span>Support</span>
          </Link>
          <Link className="flex items-center gap-3 py-2 text-on-surface-variant text-label-md hover:text-primary transition-colors" href="/auth/login">
            <span className="material-symbols-outlined text-sm">logout</span>
            <span>Logout</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export const CitizenFooter = () => {
  return (
    <footer className="w-full py-16 bg-surface-container-highest dark:bg-on-background border-t border-outline-variant/30 dark:border-outline/20">
      <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter">
        <div className="col-span-1">
          <h2 className="font-headline-sm text-headline-sm text-primary dark:text-primary-fixed-dim mb-4">BOOT Civic OS</h2>
          <p className="font-body-sm text-on-surface-variant">The Operating System for a Modern Society. Precision, Transparency, Tradition.</p>
        </div>
        <div className="col-span-1">
          <h3 className="font-label-lg text-primary mb-4 uppercase tracking-wider">Resources</h3>
          <ul className="space-y-2">
            <li><Link className="text-on-surface-variant font-label-md hover:text-primary underline transition-all" href="#">Transparency Report</Link></li>
            <li><Link className="text-on-surface-variant font-label-md hover:text-primary underline transition-all" href="#">Civic Handbook</Link></li>
            <li><Link className="text-on-surface-variant font-label-md hover:text-primary underline transition-all" href="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div className="col-span-1">
          <h3 className="font-label-lg text-primary mb-4 uppercase tracking-wider">Legal</h3>
          <ul className="space-y-2">
            <li><Link className="text-on-surface-variant font-label-md hover:text-primary underline transition-all" href="#">Privacy Policy</Link></li>
            <li><Link className="text-on-surface-variant font-label-md hover:text-primary underline transition-all" href="#">Terms of Service</Link></li>
          </ul>
        </div>
        <div className="col-span-1">
          <h3 className="font-label-lg text-primary mb-4 uppercase tracking-wider">Newsletter</h3>
          <div className="flex">
            <input className="bg-surface-container border border-outline-variant p-2 w-full font-body-sm focus:outline-none" placeholder="Email address" type="email"/>
            <button className="bg-primary text-white p-2 px-4 hover:bg-primary-container transition-colors">
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
        </div>
        <div className="col-span-4 mt-12 pt-8 border-t border-outline-variant/30 flex justify-between items-center">
          <p className="font-body-sm text-on-surface-variant">© 2024 BOOT Civic Operating System. All Rights Reserved.</p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary">public</span>
            <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary">share</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const CitizenLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex bg-surface text-on-surface font-body-md custom-scrollbar overflow-x-hidden">
      <CitizenNavbar />
      <div className="flex-1 ml-64 flex flex-col">
        {children}
      </div>
      <CitizenFooter />
    </div>
  );
};
