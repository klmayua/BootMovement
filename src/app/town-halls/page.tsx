"use client";

import React from 'react';

export default function TownHallsPage() {
  return (
    <div className="antialiased text-on-surface">
      {/* TopAppBar */}
      <header className="w-full sticky top-0 z-50 bg-surface border-b border-outline-variant/30 flex justify-between items-center px-margin-desktop py-4">
        <div className="flex items-center gap-8">
          <span className="font-headline-sm text-headline-sm font-bold text-primary">BOOT Civic OS</span>
          <nav className="hidden md:flex items-center gap-6">
            <a className="text-on-surface-variant hover:bg-surface-container-low transition-colors px-3 py-1 rounded" href="/citizen/dashboard">Dashboard</a>
            <a className="text-primary font-bold border-b-2 border-primary px-3 py-1" href="/town-halls">Events</a>
            <a className="text-on-surface-variant hover:bg-surface-container-low transition-colors px-3 py-1 rounded" href="/projects">Projects</a>
            <a className="text-on-surface-variant hover:bg-surface-container-low transition-colors px-3 py-1 rounded" href="/my-communities">Communities</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
            <input className="pl-10 pr-4 py-2 bg-surface-container-low border-none rounded-full text-body-sm focus:ring-2 focus:ring-primary w-64" placeholder="Search town halls..." type="text" />
          </div>
          <button className="material-symbols-outlined p-2 text-on-surface-variant hover:bg-surface-container-low rounded-full transition-all">notifications</button>
          <button className="material-symbols-outlined p-2 text-on-surface-variant hover:bg-surface-container-low rounded-full transition-all">account_circle</button>
        </div>
      </header>

      {/* SideNavBar */}
      <aside className="fixed left-0 top-0 h-screen w-64 bg-surface-container-low border-r border-outline-variant/30 py-8 px-4 flex-col hidden xl:flex mt-[72px]">
        <div className="flex flex-col gap-2 flex-grow">
<div className="flex items-center gap-3 px-4 py-3 text-primary font-bold bg-primary-fixed/20 rounded-lg transition-all duration-300 cursor-pointer hover:translate-x-1" onClick={() => window.location.href='/citizen/dashboard'}>
             <span className="material-symbols-outlined">dashboard</span>
             <span className="font-label-lg text-label-lg">Dashboard</span>
           </div>
<div className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container transition-all hover:translate-x-1 cursor-pointer" onClick={() => window.location.href='/my-communities'}>
             <span className="material-symbols-outlined">groups</span>
             <span className="font-label-lg text-label-lg">Communities</span>
           </div>
<div className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container transition-all hover:translate-x-1 cursor-pointer" onClick={() => window.location.href='/town-halls'}>
             <span className="material-symbols-outlined">event</span>
             <span className="font-label-lg text-label-lg">Events</span>
           </div>
<div className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container transition-all hover:translate-x-1 cursor-pointer" onClick={() => window.location.href='/projects'}>
             <span className="material-symbols-outlined">assignment</span>
             <span className="font-label-lg text-label-lg">Projects</span>
           </div>
        </div>
         <div className="mt-auto border-t border-outline-variant/30 pt-4 flex flex-col gap-2">
           <button className="w-full bg-secondary text-on-secondary font-label-lg text-label-lg py-3 rounded-lg hover:opacity-90 transition-opacity">Donate Now</button>
           <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container transition-all rounded-lg" href="/contact">
             <span className="material-symbols-outlined">help</span>
             <span className="font-label-lg text-label-lg">Support</span>
           </a>
         </div>
      </aside>

      <main className="xl:ml-64 px-margin-desktop py-12 max-w-container-max mx-auto">
        {/* Hero: Live Stream Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-label-md font-label-md mb-4 animate-pulse">
                <span className="w-2 h-2 bg-secondary rounded-full"></span> LIVE NOW
              </span>
              <h1 className="font-headline-lg text-headline-lg text-primary">Urban Development &amp; Green Spaces</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-2 max-w-2xl">Joining Commissioner Sarah Jenkins and the Planning Board to discuss the 2025 Metro Park Expansion Project.</p>
            </div>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-6 py-3 border border-outline text-primary font-label-lg text-label-lg hover:bg-surface-container transition-all">
                <span className="material-symbols-outlined">share</span> Share
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-primary text-on-primary font-label-lg text-label-lg hover:opacity-90 transition-all">
                <span className="material-symbols-outlined">add_alert</span> Set Reminder
              </button>
            </div>
          </div>
          <div className="bento-grid">
            {/* Video Player */}
            <div className="col-span-8 bg-black aspect-video relative group overflow-hidden rounded-lg shadow-xl">
              <img alt="Live Stream" className="w-full h-full object-cover opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVoLFMv2uniA2Bd96zPl3gQL1eW9Qsh2c_28fAG3t2G4XsMJjUo_JZDQSkjYR8qYLLr0CS9BqiMGLfT8Rty83V7czM7KZ3v3CX4U1-m2yUpkLzQoPMFF2MK6lJdwzz_9gc3D_QNiKcJgcP01RT5q81nEzVJjlsaMCvdHJol-BJbbqKa-GiIYE0nOM6TPOSCkuLIHXyGV3-2aJy5RFKusvKSsG1qXemHY6JKkz4EBH81YEJjRDvtA5rJibjhkjm8Z9DguFTCEYUfySL" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all cursor-pointer">
                <span className="material-symbols-outlined text-white text-8xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_circle</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex items-center gap-4 text-white">
                  <span className="material-symbols-outlined">person</span>
                  <span className="font-label-md text-label-md">1,248 watching now</span>
                </div>
              </div>
            </div>
            {/* Q&A Side Panel */}
            <div className="col-span-4 glass-card p-6 flex flex-col h-full max-h-[506px]">
              <div className="flex items-center justify-between mb-6 border-b border-outline-variant/30 pb-4">
                <h3 className="font-headline-sm text-headline-sm text-primary">Live Q&amp;A</h3>
                <span className="text-label-md text-label-md text-on-surface-variant">42 Active Questions</span>
              </div>
              <div className="flex-grow overflow-y-auto space-y-4 mb-6 pr-2">
                <div className="p-4 bg-surface-container-low border-l-4 border-secondary transition-all hover:translate-x-1">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-label-md text-label-md text-primary font-bold">Marcus T.</span>
                    <span className="text-[10px] text-on-surface-variant uppercase">2m ago</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface">Will the new park include designated zones for community gardening or is it strictly recreational?</p>
                  <div className="flex gap-4 mt-3">
                    <button className="flex items-center gap-1 text-on-surface-variant hover:text-primary">
                      <span className="material-symbols-outlined text-sm">thumb_up</span>
                      <span className="text-xs">12</span>
                    </button>
                    <button className="text-xs font-label-md text-secondary uppercase tracking-wider">Top Priority</button>
                  </div>
                </div>
                <div className="p-4 bg-surface-container-low border-l-4 border-outline-variant transition-all hover:translate-x-1">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-label-md text-label-md text-primary font-bold">Elena Rodriguez</span>
                    <span className="text-[10px] text-on-surface-variant uppercase">5m ago</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface">How are the noise pollution concerns from the nearby highway being addressed in the expansion plan?</p>
                  <div className="flex gap-4 mt-3">
                    <button className="flex items-center gap-1 text-on-surface-variant hover:text-primary">
                      <span className="material-symbols-outlined text-sm">thumb_up</span>
                      <span className="text-xs">8</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative">
                <textarea className="w-full p-4 pr-12 bg-surface-container border border-outline-variant/50 focus:ring-2 focus:ring-primary focus:border-transparent resize-none h-24 font-body-sm" placeholder="Ask a question..."></textarea>
                <button className="absolute bottom-3 right-3 p-2 bg-primary text-on-primary rounded-lg hover:opacity-90">
                  <span className="material-symbols-outlined">send</span>
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Upcoming Schedule Section */}
        <section className="mb-20">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="font-headline-md text-headline-md text-primary">Town Hall Schedule</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">Stay informed about upcoming sessions and public hearings.</p>
            </div>
            <button className="text-primary font-label-lg text-label-lg border-b-2 border-primary-fixed-dim hover:border-primary transition-all">View Full Calendar</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface-container-low p-8 border border-outline-variant/30 flex flex-col items-start hover:bg-surface-container-high transition-colors">
              <div className="mb-6 flex flex-col">
                <span className="font-display-lg text-display-lg text-secondary leading-none">24</span>
                <span className="font-label-lg text-label-lg uppercase tracking-widest text-on-surface-variant">October</span>
              </div>
              <div className="mb-auto">
                <h4 className="font-headline-sm text-headline-sm text-primary mb-2">Education Budget 2025</h4>
                <div className="flex items-center gap-2 text-on-surface-variant mb-4">
                  <span className="material-symbols-outlined text-sm">schedule</span>
                  <span className="font-body-sm text-body-sm">6:30 PM • 2 Hours</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Public hearing regarding allocation for primary school technology upgrades and teacher retention programs.</p>
              </div>
              <button className="mt-8 flex items-center gap-2 font-label-md text-label-md text-primary group">
                REGISTER TO SPEAK <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
            <div className="bg-surface-container-low p-8 border border-outline-variant/30 flex flex-col items-start hover:bg-surface-container-high transition-colors">
              <div className="mb-6 flex flex-col">
                <span className="font-display-lg text-display-lg text-secondary leading-none">02</span>
                <span className="font-label-lg text-label-lg uppercase tracking-widest text-on-surface-variant">November</span>
              </div>
              <div className="mb-auto">
                <h4 className="font-headline-sm text-headline-sm text-primary mb-2">Public Safety Workshop</h4>
                <div className="flex items-center gap-2 text-on-surface-variant mb-4">
                  <span className="material-symbols-outlined text-sm">schedule</span>
                  <span className="font-body-sm text-body-sm">5:00 PM • 90 Mins</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Interactive session focused on community policing initiatives and neighborhood watch integration.</p>
              </div>
              <button className="mt-8 flex items-center gap-2 font-label-md text-label-md text-primary group">
                ADD TO CALENDAR <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">event</span>
              </button>
            </div>
            <div className="bg-surface-container-low p-8 border border-outline-variant/30 flex flex-col items-start hover:bg-surface-container-high transition-colors">
              <div className="mb-6 flex flex-col">
                <span className="font-display-lg text-display-lg text-secondary leading-none">15</span>
                <span className="font-label-lg text-label-lg uppercase tracking-widest text-on-surface-variant">November</span>
              </div>
              <div className="mb-auto">
                <h4 className="font-headline-sm text-headline-sm text-primary mb-2">Small Business Grants</h4>
                <div className="flex items-center gap-2 text-on-surface-variant mb-4">
                  <span className="material-symbols-outlined text-sm">schedule</span>
                  <span className="font-body-sm text-body-sm">11:00 AM • 1 Hour</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Q&amp;A session for local entrepreneurs regarding the newly announced 'Civic Bloom' startup fund.</p>
              </div>
              <button className="mt-8 flex items-center gap-2 font-label-md text-label-md text-primary group">
                RSVP NOW <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">check_circle</span>
              </button>
            </div>
          </div>
        </section>
        {/* Archive Section */}
        <section className="py-16 border-t border-outline-variant/30">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-headline-md text-headline-md text-primary">Archived Sessions</h2>
            <div className="flex gap-2">
              <span className="px-4 py-2 bg-primary-container text-on-primary-container rounded-full text-label-md font-label-md cursor-pointer">All Categories</span>
              <span className="px-4 py-2 bg-surface-container text-on-surface-variant rounded-full text-label-md font-label-md hover:bg-outline-variant/20 transition-all cursor-pointer">Housing</span>
              <span className="px-4 py-2 bg-surface-container text-on-surface-variant rounded-full text-label-md font-label-md hover:bg-outline-variant/20 transition-all cursor-pointer">Transport</span>
              <span className="px-4 py-2 bg-surface-container text-on-surface-variant rounded-full text-label-md font-label-md hover:bg-outline-variant/20 transition-all cursor-pointer">Healthcare</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group cursor-pointer">
              <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
                <img alt="Archive Session" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuATMtswogjc8HUgQ2MllqO6alqY6cNUs3h2B45Tl6-bZ_lCN8n7sAE4G_ZZce2DUWL41kbERH5JK3zQp4lO117QIp2ZM7mpr3Jh8gfW0iqqFWqZi3sWEbnr1ToStlut9_H6Pa1sRT6K_PPhWqnKOf8Zw6yyS-l3HRxXoINFM7JonlQ-8f3p11-aHnl7NJtsYDBKJDZUkjyLZsp0GA9nsk4Jn7vyjW5ow8iNS3uLHYep6_Qy4e8Jo0bAWcusSHexGtJQkVAT5Afbwwvc" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined text-white text-4xl">play_circle</span>
                </div>
                <span className="absolute bottom-2 right-2 px-2 py-1 bg-black/60 text-white text-[10px] font-label-md rounded">45:12</span>
              </div>
              <span className="text-label-md text-label-md text-secondary font-bold uppercase tracking-wider mb-1 block">Infrastructure</span>
              <h5 className="font-headline-sm text-[18px] leading-tight text-primary group-hover:text-secondary transition-colors mb-2">Transit Line C Expansion Review</h5>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Streamed Sept 14, 2024</p>
            </div>
            <div className="group cursor-pointer">
              <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
                <img alt="Archive Session" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFyAKuF9uIVKTXmPvRiPbLJDMphPtiD-G9yOpxWvhfCOP-1zx-jX6-HuBH8gL0Ehmiq3nLdg7BMYPkpxXVlXu_hRt2YgFZYDNONzEP54mEKLLxJEcoRDjwKkYBcdxBMincb84puRaks9J_pYL7IHtcRyuqlUxwkNwCwUPkwMqMN3VxxPhrKvfl8iBjvH3aBRttCCs7I0wYNOaN17Zzr2uZ8jQyTN19mxtZiA1Q1InkBhqfepYMDUsmaf6LljDkPDbaHstpdw4PuBSv" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined text-white text-4xl">play_circle</span>
                </div>
                <span className="absolute bottom-2 right-2 px-2 py-1 bg-black/60 text-white text-[10px] font-label-md rounded">1:02:45</span>
              </div>
              <span className="text-label-md text-label-md text-secondary font-bold uppercase tracking-wider mb-1 block">Housing</span>
              <h5 className="font-headline-sm text-[18px] leading-tight text-primary group-hover:text-secondary transition-colors mb-2">Affordable Living Initiatives</h5>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Streamed Aug 28, 2024</p>
            </div>
            <div className="group cursor-pointer">
              <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
                <img alt="Archive Session" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRoO8vmarpAb5lrPn5ig-7iUul8d1hPdxnbdb4tWz1zxRoZHDYXy_8kfRn4-Refp7CJIKzrX1hB7BLaollxH3E_6vFNKWLI-YEduRN7weRWFiqZYF-v_ZRVRU62MHfw6LcS50MSJdPQU5XPUbXxgebjv8AVCo3O3ChYq-jnb2pXt5Zv8cXQmdVU2uDkNE3XEIj-RLORE5wX-XPz-JtNSzQNfexIKCBkVBIFYBcQNItT2LLWGjWwW-RjZnN6CD_SAyVJpBue2wMnNrF" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined text-white text-4xl">play_circle</span>
                </div>
                <span className="absolute bottom-2 right-2 px-2 py-1 bg-black/60 text-white text-[10px] font-label-md rounded">58:20</span>
              </div>
              <span className="text-label-md text-label-md text-secondary font-bold uppercase tracking-wider mb-1 block">Economy</span>
              <h5 className="font-headline-sm text-[18px] leading-tight text-primary group-hover:text-secondary transition-colors mb-2">Digital Economy Framework</h5>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Streamed Aug 12, 2024</p>
            </div>
            <div className="group cursor-pointer">
              <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
                <img alt="Archive Session" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-8S157l4Cl2FtXMo9JdxxC5dCc-KwuHTAiGBdElVay0QptWcg04kAHERYERnApvrNT4msOwRkqUQ3jAIYWsRrKXY_eYToM2TVjhVbsbo_PY2O9WSuVgw1P2va5xmWbfrswlF3z-s1UrIo9uZGV31DymQK-Yjd21zdXbhe9Zn42D9lmb9etPzFVp99xDn_5h0kv-bqYYZaTKQzwXjt5C10Ke2aiCqTJ075y0Bn9BjU7YhlkQzc9EeQnxOJocuZ0rW3Y-3xzcaXuuG6" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined text-white text-4xl">play_circle</span>
                </div>
                <span className="absolute bottom-2 right-2 px-2 py-1 bg-black/60 text-white text-[10px] font-label-md rounded">1:24:10</span>
              </div>
              <span className="text-label-md text-label-md text-secondary font-bold uppercase tracking-wider mb-1 block">Healthcare</span>
              <h5 className="font-headline-sm text-[18px] leading-tight text-primary group-hover:text-secondary transition-colors mb-2">Community Wellness Expansion</h5>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Streamed July 30, 2024</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-16 bg-surface-container-highest border-t border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter">
          <div className="col-span-1">
            <span className="font-headline-sm text-headline-sm text-primary mb-6 block">BOOT OS</span>
            <p className="font-body-sm text-body-sm text-on-surface-variant pr-8">Empowering citizens through transparent governance and direct digital participation in democratic processes.</p>
          </div>
          <div>
            <h4 className="font-label-lg text-label-lg text-on-surface uppercase tracking-widest mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all" href="/town-halls">Town Halls</a></li>
              <li><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all" href="/projects">Project Radar</a></li>
              <li><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all" href="/my-impact">Budget Tracker</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-label-lg text-label-lg text-on-surface uppercase tracking-widest mb-6">Organization</h4>
            <ul className="space-y-4">
              <li><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all" href="/about">About Us</a></li>
              <li><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all" href="/manifesto">Transparency Report</a></li>
              <li><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all" href="/about">Press Kit</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-label-lg text-label-lg text-on-surface uppercase tracking-widest mb-6">Stay Connected</h4>
            <div className="flex flex-col gap-4">
              <p className="font-body-sm text-body-sm text-on-surface-variant">Join 20k+ citizens receiving weekly updates.</p>
              <div className="flex h-12">
                <input className="flex-grow bg-surface border border-outline-variant/50 px-4 focus:ring-1 focus:ring-primary outline-none text-body-sm" placeholder="Your email" type="email" />
                <button className="bg-primary text-on-primary px-6 font-label-md text-label-md">JOIN</button>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-container-max mx-auto px-margin-desktop mt-16 pt-8 border-t border-outline-variant/20 flex justify-between items-center">
          <p className="font-body-sm text-body-sm text-on-surface-variant">© 2024 BOOT Civic Operating System. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary underline" href="/about">Privacy Policy</a>
            <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary underline" href="/about">Terms of Service</a>
            <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary underline" href="/contact">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
