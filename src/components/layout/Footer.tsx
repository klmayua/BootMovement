import React from 'react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="w-full py-16 bg-surface-container-highest border-t border-outline-variant/30">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter">
        <div className="md:col-span-1">
          <img 
            alt="BOOT Logo" 
            className="h-10 mb-6 grayscale hover:grayscale-0 transition-all cursor-pointer" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzphfpJ0ilRJ4OKndPGRQoy2L3bEoSDLwjRjVjLEVHTF3U6i4tngba5qDB29rf_5jWSDfNv8IKj12oBWjzAW5Xj_oSzJG4hQ0zU24ry4nvRh7MSG52KrZ_uJ5gbIFF05KZ5xxQj4_bRHa-jVdrMCMrsUKbri10D55qp_ND8NWDWAS5MAIcWH98IwhXdPJ9DDiyK9xAoihWafz8bL4zzJVYRGei40wZAlldVNV_5O0q3T2oU-NdU3GSDpJcJbz7zHc_jX_SxNOAXY3j"
          />
          <p className="font-body-sm text-body-sm text-on-surface-variant">The BOOT Civic Operating System is a platform for the next generation of principled governance.</p>
        </div>
        <div>
          <h5 className="font-label-lg text-label-lg text-primary mb-6">Governance</h5>
          <ul className="space-y-4">
            <li><Link className="text-on-surface-variant hover:text-primary underline transition-all font-body-sm text-body-sm" href="#">Transparency Report</Link></li>
            <li><Link className="text-on-surface-variant hover:text-primary underline transition-all font-body-sm text-body-sm" href="#">Policy Thesis</Link></li>
            <li><Link className="text-on-surface-variant hover:text-primary underline transition-all font-body-sm text-body-sm" href="#">Legal Framework</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-label-lg text-label-lg text-primary mb-6">Support</h5>
          <ul className="space-y-4">
            <li><Link className="text-on-surface-variant hover:text-primary underline transition-all font-body-sm text-body-sm" href="#">Privacy Policy</Link></li>
            <li><Link className="text-on-surface-variant hover:text-primary underline transition-all font-body-sm text-body-sm" href="#">Terms of Service</Link></li>
            <li><Link className="text-on-surface-variant hover:text-primary underline transition-all font-body-sm text-body-sm" href="#">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-label-lg text-label-lg text-primary mb-6">Connect</h5>
          <div className="flex gap-4">
            <Link className="text-on-surface-variant hover:text-secondary" href="#"><span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>public</span></Link>
            <Link className="text-on-surface-variant hover:text-secondary" href="#"><span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>forum</span></Link>
            <Link className="text-on-surface-variant hover:text-secondary" href="#"><span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span></Link>
          </div>
        </div>
      </div>
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mt-16 pt-8 border-t border-outline-variant/30 text-center">
        <p className="font-label-md text-label-md text-on-surface-variant">© 2024 BOOT Civic Operating System. All Rights Reserved. Authorized by the National Civic Committee.</p>
      </div>
    </footer>
  );
};