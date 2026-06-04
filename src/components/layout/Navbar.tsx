'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Dashboard', href: '/' },
    { name: 'Communities', href: '/communities' },
    { name: 'Events', href: '/events' },
    { name: 'Projects', href: '/projects' },
    { name: 'Party Website', href: '/party' },
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-surface border-b border-outline-variant/30 px-margin-mobile md:px-margin-desktop py-4 flex justify-between items-center transition-all duration-300">
      {/* Mobile: Logo + Menu Button */}
      <div className="flex items-center gap-3 md:gap-8">
        <Link href="/" className="flex items-center gap-3 active:scale-95 transition-transform">
          <img 
            alt="BOOT Party Official Logo" 
            className="h-10 md:h-12 w-auto" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzphfpJ0ilRJ4OKndPGRQoy2L3bEoSDLwjRjVjLEVHTF3U6i4tngba5qDB29rf_5jWSDfNv8IKj12oBWjzAW5Xj_oSzJG4hQ0zU24ry4nvRh7MSG52KrZ_uJ5gbIFF05KZ5xxQj4_bRHa-jVdrMCMrsUKbri10D55qp_ND8NWDWAS5MAIcWH98IwhXdPJ9DDiyK9xAoihWafz8bL4zzJVYRGei40wZAlldVNV_5O0q3T2oU-NdU3GSDpJcJbz7zHc_jX_SxNOAXY3j"
          />
          <span className="font-headline-sm text-headline-sm font-bold text-primary">BOOT Movement</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className={`font-label-lg text-label-lg px-1 py-1 transition-all duration-200 active:scale-95 ${
                pathname === link.href 
                  ? 'text-primary font-bold border-b-2 border-primary' 
                  : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-low rounded-md'
              }`}
            >
              {link.name}
            </Link>
          ))}
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
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden material-symbols-outlined text-primary p-2 hover:bg-surface-container-low active:scale-90 transition-all duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? 'close' : 'menu'}
          </button>
          
          <button className="hidden md:block material-symbols-outlined text-primary p-2 hover:bg-surface-container-low active:scale-90 transition-all duration-200">notifications</button>
          <div className="w-8 h-8 rounded-full bg-primary-container overflow-hidden border border-outline-variant">
            <img 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrmfhr2latfGJ09GYDLnkpw9klilP8wgc2US8z5Ttasfx2NxMsikTUh3bg8lI-WDF7MlpGUOoFOu0NNHN9rhcJxRs7-xsJUyEFjI23LVdLDiwG3MX2rz-0f6WZ2bUQlvYAbTlB8g81A6Zid-a-5c5wtGM2iJy_mDOx64yrBwRz_mkSBpbh9_xH6s80WEelyAwkrVJgfAuBsVGIQGITXrUnMAkqZzxC71IDhAYjbOOn4XG7R2d9paGHAFynztX9QI8CAdCnpgKlg6ZI"
              alt="User Profile"
            />
          </div>
          <Link href="/donate" className="hidden md:block bg-secondary text-on-secondary px-6 py-2 font-label-lg text-label-lg hover:opacity-90 active:scale-95 transition-all duration-200 rounded-sm">
            Donate Now
          </Link>
        </div>
      </div>
    
      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-surface border-b border-outline-variant/30 md:hidden shadow-lg">
          <nav className="flex flex-col p-4 gap-2">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className={`font-label-lg text-label-lg px-1 py-3 transition-all duration-200 active:scale-95 ${
                  pathname === link.href 
                    ? 'text-primary font-bold border-b-2 border-primary' 
                    : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-low rounded-md'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/donate" className="bg-secondary text-on-secondary px-6 py-3 font-label-lg text-label-lg hover:opacity-90 active:scale-95 transition-all duration-200 text-center mt-2">
              Donate Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
