'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const PartyLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Manifesto', href: '/party/manifesto' },
    { name: 'The Thesis', href: '/party/thesis' },
    { name: 'Leadership', href: '/party/leadership' },
    { name: 'Newsroom', href: '/party/newsroom' },
  ];

  return (
    <div className="font-body-md text-on-surface min-h-screen flex flex-col">
      <header className="w-full sticky top-0 z-50 bg-surface border-b border-outline-variant/30 px-margin-desktop py-4 flex justify-between items-center transition-all duration-300">
        <div className="flex items-center gap-8">
          <Link href="/party" className="flex items-center gap-3 active:scale-95 transition-transform">
            <img alt="BOOT Party Official Logo" className="h-12 w-auto" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzphfpJ0ilRJ4OKndPGRQoy2L3bEoSDLwjRjVjLEVHTF3U6i4tngba5qDB29rf_5jWSDfNv8IKj12oBWjzAW5Xj_oSzJG4hQ0zU24ry4nvRh7MSG52KrZ_uJ5gbIFF05KZ5xxQj4_bRHa-jVdrMCMrsUKbri10D55qp_ND8NWDWAS5MAIcWH98IwhXdPJ9DDiyK9xAoihWafz8bL4zzJVYRGei40wZAlldVNV_5O0q3T2oU-NdU3GSDpJcJbz7zHc_jX_SxNOAXY3j" />
          </Link>
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
            <Link className="text-primary font-bold border-b-2 border-primary font-label-lg text-label-lg px-1 py-1 active:scale-95" href="/">Movement Portal</Link>
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center bg-surface-container px-4 py-2 rounded-full">
            <span className="material-symbols-outlined text-on-surface-variant mr-2">search</span>
            <input className="bg-transparent border-none focus:ring-0 text-body-sm w-48 outline-none" placeholder="Search Policies..." type="text" />
          </div>
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-primary cursor-pointer hover:bg-surface-container-low p-1 rounded-full transition-all active:scale-90" data-icon="notifications">notifications</span>
            <span className="material-symbols-outlined text-primary cursor-pointer hover:bg-surface-container-low p-1 rounded-full transition-all active:scale-90" data-icon="account_circle">account_circle</span>
            <Link href="/donate" className="bg-secondary text-on-secondary px-6 py-2 font-label-lg text-label-lg hover:opacity-90 active:scale-95 transition-all">Donate Now</Link>
          </div>
        </div>
      </header>
      <main className="flex-grow">
        {children}
      </main>
      <footer className="w-full py-16 bg-surface-container-highest border-t border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter">
          <div className="md:col-span-1">
            <img alt="BOOT Logo" className="h-10 mb-6 grayscale hover:grayscale-0 transition-all cursor-pointer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzphfpJ0ilRJ4OKndPGRQoy2L3bEoSDLwjRjVjLEVHTF3U6i4tngba5qDB29rf_5jWSDfNv8IKj12oBWjzAW5Xj_oSzJG4hQ0zU24ry4nvRh7MSG52KrZ_uJ5gbIFF05KZ5xxQj4_bRHa-jVdrMCMrsUKbri10D55qp_ND8NWDWAS5MAIcWH98IwhXdPJ9DDiyK9xAoihWafz8bL4zzJVYRGei40wZAlldVNV_5O0q3T2oU-NdU3GSDpJcJbz7zHc_jX_SxNOAXY3j" />
            <p className="font-body-sm text-body-sm text-on-surface-variant">The BOOT Civic Operating System is a platform for the next generation of principled governance.</p>
          </div>
          <div>
            <h5 className="font-label-lg text-label-lg text-primary mb-6">Governance</h5>
            <ul className="space-y-4">
              <li><Link className="text-on-surface-variant hover:text-primary underline transition-all font-body-sm text-body-sm" href="/party/newsroom">Transparency Report</Link></li>
              <li><Link className="text-on-surface-variant hover:text-primary underline transition-all font-body-sm text-body-sm" href="/party/thesis">Policy Thesis</Link></li>
              <li><Link className="text-on-surface-variant hover:text-primary underline transition-all font-body-sm text-body-sm" href="/party/about">Legal Framework</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-label-lg text-label-lg text-primary mb-6">Support</h5>
            <ul className="space-y-4">
              <li><Link className="text-on-surface-variant hover:text-primary underline transition-all font-body-sm text-body-sm" href="/party/about">Privacy Policy</Link></li>
              <li><Link className="text-on-surface-variant hover:text-primary underline transition-all font-body-sm text-body-sm" href="/party/about">Terms of Service</Link></li>
              <li><Link className="text-on-surface-variant hover:text-primary underline transition-all font-body-sm text-body-sm" href="/party/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-label-lg text-label-lg text-primary mb-6">Connect</h5>
            <div className="flex gap-4">
              <Link className="text-on-surface-variant hover:text-secondary" href="/contact"><span className="material-symbols-outlined">public</span></Link>
              <Link className="text-on-surface-variant hover:text-secondary" href="/contact"><span className="material-symbols-outlined">forum</span></Link>
              <Link className="text-on-surface-variant hover:text-secondary" href="/contact"><span className="material-symbols-outlined">mail</span></Link>
            </div>
          </div>
        </div>
        <div className="max-w-container-max mx-auto px-margin-desktop mt-16 pt-8 border-t border-outline-variant/30 text-center">
          <p className="font-label-md text-label-md text-on-surface-variant">© 2024 BOOT Civic Operating System. All Rights Reserved. Authorized by the National Civic Committee.</p>
        </div>
      </footer>
    </div>
  );
};
