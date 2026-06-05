import React from 'react';
import Link from 'next/link';

export const PartyNavbar = () => {
  return (
    <header className="w-full sticky top-0 z-50 bg-surface border-b border-outline-variant/30 px-margin-desktop py-4 flex justify-between items-center transition-all duration-300">
      <div className="flex items-center gap-8">
        <img 
          alt="BOOT Party Official Logo" 
          className="h-12 w-auto" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzphfpJ0ilRJ4OKndPGRQoy2L3bEoSDLwjRjVjLEVHTF3U6i4tngba5qDB29rf_5jWSDfNv8IKj12oBWjzAW5Xj_oSzJG4hQ0zU24ry4nvRh7MSG52KrZ_uJ5gbIFF05KZ5xxQj4_bRHa-jVdrMCMrsUKbri10D55qp_ND8NWDWAS5MAIcWH98IwhXdPJ9DDiyK9xAoihWafz8bL4zzJVYRGei40wZAlldVNV_5O0q3T2oU-NdU3GSDpJcJbz7zHc_jX_SxNOAXY3j" 
        />
        <nav className="hidden md:flex gap-6">
          <Link className="text-primary font-bold border-b-2 border-primary font-label-lg text-label-lg px-1 py-1" href="/party">Dashboard</Link>
          <Link className="text-on-surface-variant hover:bg-surface-container-low transition-colors font-label-lg text-label-lg px-1 py-1" href="/communities">Communities</Link>
          <Link className="text-on-surface-variant hover:bg-surface-container-low transition-colors font-label-lg text-label-lg px-1 py-1" href="/events">Events</Link>
          <Link className="text-on-surface-variant hover:bg-surface-container-low transition-colors font-label-lg text-label-lg px-1 py-1" href="/projects">Projects</Link>
        </nav>
      </div>
      <div className="flex items-center gap-6">
        <div className="hidden lg:flex items-center bg-surface-container px-4 py-2 rounded-full">
          <span className="material-symbols-outlined text-on-surface-variant mr-2">search</span>
          <input className="bg-transparent border-none focus:ring-0 text-body-sm w-48" placeholder="Search Policies..." type="text"/>
        </div>
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-primary cursor-pointer" data-icon="notifications">notifications</span>
          <span className="material-symbols-outlined text-primary cursor-pointer" data-icon="account_circle">account_circle</span>
          <button className="bg-secondary text-on-secondary px-6 py-2 font-label-lg text-label-lg hover:opacity-90 transition-opacity">Donate Now</button>
        </div>
      </div>
    </header>
  );
};
