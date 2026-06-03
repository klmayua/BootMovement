import React from 'react';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <header className="w-full sticky top-0 z-50 bg-surface border-b border-outline-variant/30 px-margin-mobile md:px-margin-desktop py-4 flex justify-between items-center transition-all duration-300">
      <div className="flex items-center gap-8">
        <Link href="/" className="flex items-center gap-3">
          <img 
            alt="BOOT Party Official Logo" 
            className="h-10 md:h-12 w-auto" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzphfpJ0ilRJ4OKndPGRQoy2L3bEoSDLwjRjVjLEVHTF3U6i4tngba5qDB29rf_5jWSDfNv8IKj12oBWjzAW5Xj_oSzJG4hQ0zU24ry4nvRh7MSG52KrZ_uJ5gbIFF05KZ5xxQj4_bRHa-jVdrMCMrsUKbri10D55qp_ND8NWDWAS5MAIcWH98IwhXdPJ9DDiyK9xAoihWafz8bL4zzJVYRGei40wZAlldVNV_5O0q3T2oU-NdU3GSDpJcJbz7zHc_jX_SxNOAXY3j"
          />
          <span className="font-headline-sm text-headline-sm font-bold text-primary">BOOT Movement</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-primary font-bold border-b-2 border-primary font-label-lg text-label-lg px-1 py-1">Dashboard</Link>
          <Link href="/communities" className="text-on-surface-variant hover:bg-surface-container-low transition-colors font-label-lg text-label-lg px-1 py-1">Communities</Link>
          <Link href="/events" className="text-on-surface-variant hover:bg-surface-container-low transition-colors font-label-lg text-label-lg px-1 py-1">Events</Link>
          <Link href="/projects" className="text-on-surface-variant hover:bg-surface-container-low transition-colors font-label-lg text-label-lg px-1 py-1">Projects</Link>
        </nav>
      </div>
      
      <div className="flex items-center gap-4 md:gap-6">
        {/* Desktop Search Bar */}
        <div className="hidden lg:flex items-center bg-surface-container px-4 py-2 rounded-full">
          <span className="material-symbols-outlined text-on-surface-variant mr-2">search</span>
          <input 
            className="bg-transparent border-none focus:ring-0 text-body-sm w-48 outline-none" 
            placeholder="Search Policies..." 
            type="text"
          />
        </div>
        
        <div className="flex items-center gap-4">
          <button className="material-symbols-outlined text-primary p-2 hover:bg-surface-container-low transition-colors duration-200">notifications</button>
          <div className="w-8 h-8 rounded-full bg-primary-container overflow-hidden border border-outline-variant">
            <img 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrmfhr2latfGJ09GYDLnkpw9klilP8wgc2US8z5Ttasfx2NxMsikTUh3bg8lI-WDF7MlpGUOoFOu0NNHN9rhcJxRs7-xsJUyEFjI23LVdLDiwG3MX2rz-0f6WZ2bUQlvYAbTlB8g81A6Zid-a-5c5wtGM2iJy_mDOx64yrBwRz_mkSBpbh9_xH6s80WEelyAwkrVJgfAuBsVGIQGITXrUnMAkqZzxC71IDhAYjbOOn4XG7R2d9paGHAFynztX9QI8CAdCnpgKlg6ZI"
              alt="User Profile"
            />
          </div>
          <Link href="/donate" className="hidden md:block bg-secondary text-on-secondary px-6 py-2 font-label-lg text-label-lg hover:opacity-90 transition-opacity rounded-sm">
            Donate Now
          </Link>
        </div>
      </div>
    </header>
  );
};
