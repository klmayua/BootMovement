"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Navbar } from '@/components/layout/Navbar';

export default function CandidatesPage() {
  return (
    <PublicLayout>
      <Navbar />
      <div className="flex min-h-screen">
        {/* Side Navigation Bar */}
        <aside className="fixed left-0 top-0 h-screen w-64 bg-surface-container-low border-r border-outline-variant/30 flex flex-col h-full py-8 px-4 hidden lg:flex mt-[73px]">
          <div className="mb-10 px-2">
            <h2 className="font-headline-sm text-headline-sm text-primary">BOOT OS</h2>
            <p className="text-label-md text-on-surface-variant opacity-70">Civic Dashboard</p>
          </div>
          <nav className="flex-grow space-y-1">
            <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container hover:translate-x-1 duration-300 transition-all rounded-lg group" href="/citizen/dashboard">
              <span className="material-symbols-outlined">dashboard</span>
              <span className="font-label-lg">Dashboard</span>
            </Link>
            <Link className="flex items-center gap-3 px-4 py-3 text-primary font-bold bg-primary-fixed/20 rounded-lg group" href="/communities">
              <span className="material-symbols-outlined">groups</span>
              <span className="font-label-lg">Communities</span>
            </Link>
            <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container hover:translate-x-1 duration-300 transition-all rounded-lg" href="/events">
              <span className="material-symbols-outlined">event</span>
              <span className="font-label-lg">Events</span>
            </Link>
            <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container hover:translate-x-1 duration-300 transition-all rounded-lg" href="/projects">
              <span className="material-symbols-outlined">assignment</span>
              <span className="font-label-lg">Projects</span>
            </Link>
             <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container hover:translate-x-1 duration-300 transition-all rounded-lg" href="/narrative">
               <span className="material-symbols-outlined">monitoring</span>
               <span className="font-label-lg">Analytics</span>
             </Link>
             <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container hover:translate-x-1 duration-300 transition-all rounded-lg" href="/citizen/settings">
               <span className="material-symbols-outlined">settings</span>
               <span className="font-label-lg">Settings</span>
             </Link>
          </nav>
          <div className="mt-auto pt-8 border-t border-outline-variant/30 px-2">
            <button className="w-full bg-secondary text-on-secondary font-label-lg py-3 rounded-lg hover:opacity-90 transition-opacity mb-4">Donate Now</button>
            <div className="space-y-1">
               <Link className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:bg-surface-container transition-all" href="/contact">
                 <span className="material-symbols-outlined text-sm">help</span>
                 <span className="text-label-md">Support</span>
               </Link>
               <Link className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:bg-surface-container transition-all" href="/auth/login">
                 <span className="material-symbols-outlined text-sm">logout</span>
                 <span className="text-label-md">Logout</span>
               </Link>
            </div>
          </div>
        </aside>

         {/* Main Content Area */}
         <main className="flex-grow lg:ml-64 p-margin-mobile md:p-margin-desktop bg-surface pb-bottom-nav">
           <div className="max-w-container-max mx-auto">
             <div className="mb-12">
               <h2 className="font-headline-lg text-primary mb-2">Candidate Directory</h2>
               <p className="font-body-lg text-on-surface-variant max-w-2xl">Discover the visionaries leading our movement across the nation. Informed, vetted, and backed by the BOOT Civic OS community.</p>
             </div>
            
             {/* Filter Controls (Bento Style) */}
             <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
               <div className="col-span-1 md:col-span-2 p-6 bg-surface-container-low border border-outline-variant/30 rounded-xl flex flex-col justify-between">
                 <label className="font-label-lg text-primary mb-3 flex items-center gap-2">
                   <span className="material-symbols-outlined text-sm">location_on</span>
                   Region
                 </label>
                 <div className="flex flex-wrap gap-2">
                   <button className="px-4 py-2 rounded-full bg-primary text-on-primary text-label-md font-semibold touch-manipulation">All Regions</button>
                   <button className="px-4 py-2 rounded-full border border-outline-variant hover:bg-surface-container transition-all text-label-md touch-manipulation">Northeast</button>
                   <button className="px-4 py-2 rounded-full border border-outline-variant hover:bg-surface-container transition-all text-label-md touch-manipulation">Southwest</button>
                   <button className="px-4 py-2 rounded-full border border-outline-variant hover:bg-surface-container transition-all text-label-md touch-manipulation">Midwest</button>
                   <button className="px-4 py-2 rounded-full border border-outline-variant hover:bg-surface-container transition-all text-label-md touch-manipulation">West Coast</button>
                 </div>
               </div>
               <div className="col-span-1 p-6 bg-surface-container-low border border-outline-variant/30 rounded-xl">
                 <label className="font-label-lg text-primary mb-3 flex items-center gap-2">
                   <span className="material-symbols-outlined text-sm">account_balance</span>
                   Office Level
                 </label>
                 <select className="w-full bg-transparent border-none focus:ring-0 font-body-md text-on-surface cursor-pointer p-0 outline-none touch-manipulation">
                   <option>All Levels</option>
                   <option>Federal</option>
                   <option>State Senate</option>
                   <option>State Assembly</option>
                   <option>Municipal</option>
                 </select>
               </div>
               <div className="col-span-1 p-6 bg-primary-container text-on-primary-container rounded-xl flex flex-col justify-between touch-manipulation">
                 <div>
                   <p className="font-headline-sm">124</p>
                   <p className="font-label-md opacity-80 uppercase tracking-wider">Candidates Active</p>
                 </div>
                 <button className="flex items-center gap-2 font-label-lg hover:underline transition-all">
                   View New Endorsements
                   <span className="material-symbols-outlined">arrow_forward</span>
                 </button>
               </div>
             </div>

            {/* Directory Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Candidate Card 1 */}
              <div className="bg-surface border border-outline-variant/20 rounded-lg overflow-hidden group hover:border-tertiary-container/50 transition-all duration-500">
                <div className="h-80 overflow-hidden relative">
                  <img alt="Candidate 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUO8rfAqTMZAJMEBYgrBUxYuqTJkjTy7hw9walJmpHpFghkpX2bdLRiVZfOMGuKzqLKzPgkFQbub86Oi6k1LTaysByGPNOvYTzUn3rpSF55mfHwUvmr8_NohBB8xRWSYVO8qgRRi9NVBO4W8CCh7cEZId3ywFG8_FhcVYW5kZ3fPt7wQ4dIVjBRWJjGoFPnA0L2MpMasPjoJzeQ2GTHEn1RqySr2nJv9JosC6hcVpKupsvpvdHAY_GkrD36oXTI8SwzvkLBF2JYBm" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary/90 text-on-primary px-3 py-1 rounded text-label-md font-bold backdrop-blur-md">FEDERAL OFFICE</span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">Dr. Sarah Vance</h3>
                      <p className="text-on-surface-variant font-label-lg uppercase tracking-widest text-xs">Midwest Region • Dist. 4</p>
                    </div>
                    <span className="material-symbols-outlined text-tertiary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  </div>
                  <p className="font-body-md text-on-surface-variant mb-6 line-clamp-2">Advocating for digital sovereignty and transparent civic infrastructure for all citizens in the heartland.</p>
                  <div className="flex items-center gap-4 pt-6 border-t border-outline-variant/10">
                    <div className="flex-grow">
                      <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                        <div className="bg-secondary h-full" style={{ width: '72%' }}></div>
                      </div>
                      <p className="text-label-md mt-2 text-on-surface-variant">72% Goal Funded</p>
                    </div>
                    <button className="material-symbols-outlined p-3 border border-outline-variant/30 rounded-full hover:bg-surface-container transition-all touch-manipulation">favorite</button>
                  </div>
                </div>
              </div>
              {/* Candidate Card 2 */}
              <div className="bg-surface border border-outline-variant/20 rounded-lg overflow-hidden group hover:border-tertiary-container/50 transition-all duration-500">
                <div className="h-80 overflow-hidden relative">
                  <img alt="Candidate 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMCHGIt-Me6552uQkJLdW3NWpSLc0yN00BKcbYnaKIFFVmXstpprEJamsfpGJSn4jlx1O5HbUE1akVF-2aQsnympggRqNOvC3ZcpJVM1jL9YDxR7fHgTLBARVmng-kwF_pTWVSbIhCc_z1ocV6NpKpkqnZhkPMzr3cvpmv11zev-sW1iVlLtYLB_O0xQJLQBPhYnHUhbO72lotcvq3eCvEiiITFrrcb2h7OMFq4xCxYlspjCI3khnFzKYtDAVlTDFvo7l4oMiioFHy" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary/90 text-on-primary px-3 py-1 rounded text-label-md font-bold backdrop-blur-md">STATE SENATE</span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">Marcus Thorne</h3>
                      <p className="text-on-surface-variant font-label-lg uppercase tracking-widest text-xs">West Coast • Dist. 12</p>
                    </div>
                    <span className="material-symbols-outlined text-tertiary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  </div>
                  <p className="font-body-md text-on-surface-variant mb-6 line-clamp-2">Building sustainable economic corridors and securing universal fiber access across the coastline.</p>
                  <div className="flex items-center gap-4 pt-6 border-t border-outline-variant/10">
                    <div className="flex-grow">
                      <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                        <div className="bg-secondary h-full" style={{ width: '45%' }}></div>
                      </div>
                      <p className="text-label-md mt-2 text-on-surface-variant">45% Goal Funded</p>
                    </div>
                    <button className="material-symbols-outlined p-3 border border-outline-variant/30 rounded-full hover:bg-surface-container transition-all touch-manipulation">favorite</button>
                  </div>
                </div>
              </div>
              {/* Candidate Card 3 */}
              <div className="bg-surface border border-outline-variant/20 rounded-lg overflow-hidden group hover:border-tertiary-container/50 transition-all duration-500">
                <div className="h-80 overflow-hidden relative">
                  <img alt="Candidate 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOOoUbEoSOAnuPVQtDioFLhNyx3ZR8QG58hFCS2IMPIaApB6u5ME6ACB8evT07dvrOsXqDU2xAZ4RisI2towBCNQayg3gpMC5y9buwsHbZDAF0u_u4x1rUVH6woGpIXIapH4o5IiTJF72ebP8Tiw-kWjITOSeW0AO3NHuNz8OiDGd4q5sJX_nkZ0oNj-NX-LUb0RuAmADQNd1SSzXlWStb2G2J5HmtZFkP_hQZAuAZg4mwkL9mdwXuv7B3nreOZZXlFl_jpKqhWuxf" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary/90 text-on-primary px-3 py-1 rounded text-label-md font-bold backdrop-blur-md">MUNICIPAL</span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">Elena Rodriguez</h3>
                      <p className="text-on-surface-variant font-label-lg uppercase tracking-widest text-xs">Southwest • City Council</p>
                    </div>
                    <span className="material-symbols-outlined text-tertiary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  </div>
                  <p className="font-body-md text-on-surface-variant mb-6 line-clamp-2">Championing local data privacy and neighborhood-driven urban planning through community-led nodes.</p>
                  <div className="flex items-center gap-4 pt-6 border-t border-outline-variant/10">
                    <div className="flex-grow">
                      <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                        <div className="bg-secondary h-full" style={{ width: '88%' }}></div>
                      </div>
                      <p className="text-label-md mt-2 text-on-surface-variant">88% Goal Funded</p>
                    </div>
                    <button className="material-symbols-outlined p-3 border border-outline-variant/30 rounded-full hover:bg-surface-container transition-all touch-manipulation">favorite</button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Load More / Pagination */}
            <div className="mt-16 flex flex-col items-center gap-6">
              <button className="px-8 py-4 bg-surface border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-on-primary transition-all flex items-center gap-2 touch-manipulation">
                Load More Profiles
                <span className="material-symbols-outlined">expand_more</span>
              </button>
              <p className="text-label-md text-on-surface-variant">Showing 3 of 124 movement-backed candidates</p>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="w-full py-16 bg-surface-container-highest border-t border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter">
          <div className="col-span-1 md:col-span-1">
            <h2 className="font-headline-sm text-headline-sm text-primary mb-4">BOOT Civic OS</h2>
            <p className="text-body-sm text-on-surface-variant mb-6">Securing the future of civic participation through technology and community-driven leadership.</p>
            <div className="flex gap-4">
              <span className="material-symbols-outlined cursor-pointer hover:text-primary">public</span>
              <span className="material-symbols-outlined cursor-pointer hover:text-primary">campaign</span>
              <span className="material-symbols-outlined cursor-pointer hover:text-primary">forum</span>
            </div>
          </div>
          <div>
            <h4 className="font-label-lg text-primary mb-6 uppercase tracking-wider">Resources</h4>
            <ul className="space-y-4">
               <li><Link className="text-body-sm text-on-surface-variant hover:text-primary hover:underline transition-all" href="/about">Transparency Report</Link></li>
               <li><Link className="text-body-sm text-on-surface-variant hover:text-primary hover:underline transition-all" href="/about">Policy Framework</Link></li>
               <li><Link className="text-body-sm text-on-surface-variant hover:text-primary hover:underline transition-all" href="/contact">Contact Us</Link></li>
               <li><Link className="text-body-sm text-on-surface-variant hover:text-primary hover:underline transition-all" href="/about">Privacy Policy</Link></li>
               <li><Link className="text-body-sm text-on-surface-variant hover:text-primary hover:underline transition-all" href="/about">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-label-lg text-primary mb-6 uppercase tracking-wider">Stay Informed</h4>
            <form className="space-y-3">
              <input className="w-full bg-surface p-3 rounded border border-outline-variant focus:ring-2 focus:ring-primary focus:outline-none text-body-sm" placeholder="Email address" type="email" />
              <button className="w-full bg-primary text-on-primary py-3 rounded font-label-lg hover:opacity-90 transition-opacity">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="max-w-container-max mx-auto px-margin-desktop mt-16 pt-8 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between gap-4">
          <p className="font-label-md text-label-md text-on-surface-variant">© 2024 BOOT Civic Operating System. All Rights Reserved.</p>
          <div className="flex gap-6">
            <span className="material-symbols-outlined text-primary cursor-pointer hover:opacity-70 transition-opacity">share</span>
            <span className="material-symbols-outlined text-primary cursor-pointer hover:opacity-70 transition-opacity">public</span>
            <span className="material-symbols-outlined text-primary cursor-pointer hover:opacity-70 transition-opacity">forum</span>
          </div>
      </div>
      <footer className="bg-surface border-t border-outline-variant/30 px-margin-mobile md:px-margin-desktop py-12">
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-label-lg text-primary mb-6 uppercase tracking-wider">Platform</h4>
            <ul className="space-y-3">
              <li><Link className="text-body-sm text-on-surface-variant hover:text-primary hover:underline transition-all" href="/about">About</Link></li>
              <li><Link className="text-body-sm text-on-surface-variant hover:text-primary hover:underline transition-all" href="/manifesto">Manifesto</Link></li>
              <li><Link className="text-body-sm text-on-surface-variant hover:text-primary hover:underline transition-all" href="/communities">Communities</Link></li>
              <li><Link className="text-body-sm text-on-surface-variant hover:text-primary hover:underline transition-all" href="/events">Events</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-label-lg text-primary mb-6 uppercase tracking-wider">Resources</h4>
            <ul className="space-y-3">
              <li><Link className="text-body-sm text-on-surface-variant hover:text-primary hover:underline transition-all" href="/citizen/dashboard">Dashboard</Link></li>
              <li><Link className="text-body-sm text-on-surface-variant hover:text-primary hover:underline transition-all" href="/candidates">Candidates</Link></li>
              <li><Link className="text-body-sm text-on-surface-variant hover:text-primary hover:underline transition-all" href="/projects">Projects</Link></li>
              <li><Link className="text-body-sm text-on-surface-variant hover:text-primary hover:underline transition-all" href="/learning">Learning</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-label-lg text-primary mb-6 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-3">
              <li><Link className="text-body-sm text-on-surface-variant hover:text-primary hover:underline transition-all" href="/about">Privacy Policy</Link></li>
              <li><Link className="text-body-sm text-on-surface-variant hover:text-primary hover:underline transition-all" href="/about">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-label-lg text-primary mb-6 uppercase tracking-wider">Stay Informed</h4>
            <form className="space-y-3">
              <input className="w-full bg-surface p-3 rounded border border-outline-variant focus:ring-2 focus:ring-primary focus:outline-none text-body-sm" placeholder="Email address" type="email" />
              <button className="w-full bg-primary text-on-primary py-3 rounded font-label-lg hover:opacity-90 transition-opacity">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="max-w-container-max mx-auto px-margin-desktop mt-16 pt-8 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between gap-4">
          <p className="font-label-md text-label-md text-on-surface-variant">© 2024 BOOT Civic Operating System. All Rights Reserved.</p>
          <div className="flex gap-6">
            <span className="material-symbols-outlined text-primary cursor-pointer hover:opacity-70 transition-opacity">share</span>
            <span className="material-symbols-outlined text-primary cursor-pointer hover:opacity-70 transition-opacity">public</span>
            <span className="material-symbols-outlined text-primary cursor-pointer hover:opacity-70 transition-opacity">forum</span>
          </div>
        </div>
      </footer>
    </PublicLayout>
  );
}
