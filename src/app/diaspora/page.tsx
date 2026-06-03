import React from 'react';
import Link from 'next/link';

export default function DiasporaHub() {
  return (
    <div className="text-on-background font-body-md">
      {/* SideNavBar */}
      <aside className="fixed left-0 top-0 h-screen flex flex-col py-8 w-64 bg-primary dark:bg-primary-container text-on-primary z-50">
        <div className="px-6 mb-10">
          <h1 className="font-headline-md text-headline-md font-bold text-on-primary tracking-tight">CivicOS</h1>
          <p className="font-label-md text-label-md opacity-70">Executive Portal</p>
        </div>
        <nav className="flex-1 space-y-1">
          <Link className="flex items-center px-6 py-3 text-on-primary bg-primary-container/20 border-l-4 border-secondary-container transition-colors duration-200" href="/diaspora">
            <span className="material-symbols-outlined mr-4">dashboard</span>
            <span className="font-label-lg text-label-lg">Command Center</span>
          </Link>
          <Link className="flex items-center px-6 py-3 text-on-primary/70 hover:text-on-primary hover:bg-primary-container/10 transition-colors duration-200" href="#">
            <span className="material-symbols-outlined mr-4">groups</span>
            <span className="font-label-lg text-label-lg">Citizens</span>
          </Link>
          <Link className="flex items-center px-6 py-3 text-on-primary/70 hover:text-on-primary hover:bg-primary-container/10 transition-colors duration-200" href="#">
            <span className="material-symbols-outlined mr-4">psychology</span>
            <span className="font-label-lg text-label-lg">Narrative</span>
          </Link>
          <Link className="flex items-center px-6 py-3 text-on-primary/70 hover:text-on-primary hover:bg-primary-container/10 transition-colors duration-200" href="#">
            <span className="material-symbols-outlined mr-4">how_to_vote</span>
            <span className="font-label-lg text-label-lg">Election Ops</span>
          </Link>
          <Link className="flex items-center px-6 py-3 text-on-primary/70 hover:text-on-primary hover:bg-primary-container/10 transition-colors duration-200" href="#">
            <span className="material-symbols-outlined mr-4">inventory_2</span>
            <span className="font-label-lg text-label-lg">Resources</span>
          </Link>
          <Link className="flex items-center px-6 py-3 text-on-primary/70 hover:text-on-primary hover:bg-primary-container/10 transition-colors duration-200" href="#">
            <span className="material-symbols-outlined mr-4">settings</span>
            <span className="font-label-lg text-label-lg">Settings</span>
          </Link>
        </nav>
        <div className="mt-auto px-6 space-y-4">
          <button className="w-full bg-secondary-container text-on-secondary-container py-3 font-label-lg rounded transition-transform active:scale-95 duration-100">
            New Initiative
          </button>
          <div className="pt-4 border-t border-on-primary/10">
            <Link className="flex items-center py-2 text-on-primary/70 hover:text-on-primary font-label-md" href="#">
              <span className="material-symbols-outlined mr-3 text-[20px]">help</span> Support
            </Link>
            <Link className="flex items-center py-2 text-on-primary/70 hover:text-on-primary font-label-md" href="#">
              <span className="material-symbols-outlined mr-3 text-[20px]">logout</span> Log Out
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="ml-64 min-h-screen flex flex-col">
        {/* TopNavBar */}
        <header className="flex justify-between items-center w-full h-16 px-16 bg-surface border-b border-outline-variant/30 sticky top-0 z-40">
          <div className="flex items-center space-x-8">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-outline">
                <span className="material-symbols-outlined text-[20px]">search</span>
              </span>
              <input className="bg-surface-container-low border-none focus:ring-2 focus:ring-primary text-body-sm w-64 pl-10 py-1.5 rounded-full" placeholder="Global Diaspora Search..." type="text"/>
            </div>
            <nav className="hidden lg:flex space-x-6">
              <Link className="text-primary border-b-2 border-secondary font-bold pb-1 font-label-md" href="#">Analytics</Link>
              <Link className="text-on-surface-variant font-label-md hover:text-secondary transition-all" href="#">Deployment</Link>
              <Link className="text-on-surface-variant font-label-md hover:text-secondary transition-all" href="#">Strategy</Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-secondary text-white px-4 py-1.5 text-label-md font-bold rounded hover:opacity-90 transition-opacity">Action Alert</button>
            <div className="flex items-center space-x-2 text-on-surface-variant">
              <button className="p-2 hover:bg-surface-container rounded-full transition-colors">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <button className="p-2 hover:bg-surface-container rounded-full transition-colors">
                <span className="material-symbols-outlined">history</span>
              </button>
              <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center overflow-hidden border border-outline-variant">
                <img 
                  alt="Administrator Profile" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaMxIHjsd2oXnVLE9R5KU99XAQpL2pJqMLSqYf_JCPlaj6Ww9bgflZriBGsN5mHnMryzT-w9KRMhpMv6aG-Hf_O8cIy6Osa1SpahRFQ2NA7KHS8OhNy6vXC53M_lrBNPAVriCBS3Z0f1YfHCDqoyM6sNE4Fc3tbu0fJwdxgRl8RTCvaH6U91ZDnA0Uqjn2pYm75c1SsCh2w9sSp8ALoSfvnymL_3xRL0PV2FgdYouKetWfOs82ddZPiOtWNWp0xmug8uTu3r2mLXhoO"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Page Canvas */}
        <div className="p-12 max-w-[1400px] mx-auto w-full">
          {/* Dashboard Header */}
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-on-tertiary-fixed-variant font-label-lg mb-2 uppercase tracking-widest">Global Operations</p>
              <h2 className="font-headline-lg text-headline-lg text-primary">Diaspora Chapter Command</h2>
            </div>
            <div className="text-right">
              <p className="text-body-sm text-on-surface-variant">Last Synchronized</p>
              <p className="font-label-lg text-primary">Oct 24, 2024 — 14:32 GMT</p>
            </div>
          </div>

          {/* Top Row: Remittance & Talent Metrics */}
          <div className="grid grid-cols-12 gap-gutter mb-gutter">
            {/* Main Visualization Card */}
            <div className="col-span-8 bg-white border border-outline-variant/30 p-8 rounded-lg relative overflow-hidden group">
              <div className="flex justify-between mb-8">
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-primary">Remittance Flow</h3>
                  <p className="text-body-sm text-on-surface-variant">Monthly aggregate capital movement across all chapters.</p>
                </div>
                <div className="flex space-x-2">
                  <span className="bg-surface-container px-3 py-1 text-label-md rounded-full text-primary">Last 30 Days</span>
                  <span className="material-symbols-outlined text-outline">more_vert</span>
                </div>
              </div>
              <div className="h-64 w-full bg-surface-container-lowest rounded-lg relative mb-6 border border-outline-variant/10">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="text-center">
                    <p className="text-display-lg font-display-lg text-primary">$42.8M</p>
                    <p className="text-label-lg text-secondary">+12.4% vs prev month</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div className="border-l-2 border-primary pl-4">
                  <p className="text-label-md text-on-surface-variant">Direct Aid</p>
                  <p className="font-headline-sm text-primary">$18.2M</p>
                </div>
                <div className="border-l-2 border-outline-variant pl-4">
                  <p className="text-label-md text-on-surface-variant">Project Capital</p>
                  <p className="font-headline-sm text-primary">$15.4M</p>
                </div>
                <div className="border-l-2 border-outline-variant pl-4">
                  <p className="text-label-md text-on-surface-variant">Emergency Reserve</p>
                  <p className="font-headline-sm text-primary">$9.2M</p>
                </div>
              </div>
            </div>

            {/* Expert Hours / Talent Registry */}
            <div className="col-span-4 bg-primary text-white p-8 rounded-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-label-lg uppercase tracking-widest text-on-primary-container">Talent Registry</h3>
                  <span className="material-symbols-outlined text-secondary-container">psychology</span>
                </div>
                <p className="font-display-lg text-display-lg leading-none">12.5k</p>
                <p className="font-label-lg text-on-primary-container mt-2">Expert Hours Contributed</p>
              </div>
              <div className="space-y-4 mt-8">
                <div className="flex items-center justify-between text-body-sm">
                  <span className="opacity-70">Legal Advisory</span>
                  <span className="font-bold">4,200h</span>
                </div>
                <div className="w-full bg-primary-container h-1.5 rounded-full">
                  <div className="bg-secondary-container h-full w-[85%]"></div>
                </div>
                <div className="flex items-center justify-between text-body-sm">
                  <span className="opacity-70">Infrastructure Planning</span>
                  <span className="font-bold">3,850h</span>
                </div>
                <div className="w-full bg-primary-container h-1.5 rounded-full">
                  <div className="bg-tertiary-fixed-dim h-full w-[65%]"></div>
                </div>
              </div>
              <button className="mt-8 border border-on-primary/30 w-full py-3 font-label-lg hover:bg-white hover:text-primary transition-all">
                View Talent Database
              </button>
            </div>
          </div>

          {/* Middle Row: Chapter Leaderboard & Project Sponsorships */}
          <div className="grid grid-cols-12 gap-gutter mb-gutter">
            {/* Leaderboard */}
            <div className="col-span-5 bg-white border border-outline-variant/30 p-8 rounded-lg">
              <h3 className="font-headline-sm text-headline-sm text-primary mb-6">Chapter Leaderboard</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between group cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-surface-container-highest rounded-full flex items-center justify-center font-bold text-primary">01</div>
                    <div>
                      <p className="font-label-lg text-primary">London, UK</p>
                      <p className="text-body-sm text-on-surface-variant">Global Hub Chapter</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-label-lg text-primary">$12.2M</p>
                    <p className="text-label-md text-secondary">+5.2%</p>
                  </div>
                </div>
                <div className="flex items-center justify-between group cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-surface-container-highest rounded-full flex items-center justify-center font-bold text-primary">02</div>
                    <div>
                      <p className="font-label-lg text-primary">San Francisco, USA</p>
                      <p className="text-body-sm text-on-surface-variant">Tech &amp; Innovation Hub</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-label-lg text-primary">$10.5M</p>
                    <p className="text-label-md text-primary-fixed-dim">+2.1%</p>
                  </div>
                </div>
                <div className="flex items-center justify-between group cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-surface-container-highest rounded-full flex items-center justify-center font-bold text-primary">03</div>
                    <div>
                      <p className="font-label-lg text-primary">Toronto, CAN</p>
                      <p className="text-body-sm text-on-surface-variant">Strategic Resource Node</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-label-lg text-primary">$8.9M</p>
                    <p className="text-label-md text-secondary">+8.7%</p>
                  </div>
                </div>
                <div className="flex items-center justify-between group cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-surface-container-highest rounded-full flex items-center justify-center font-bold text-primary">04</div>
                    <div>
                      <p className="font-label-lg text-primary">Dubai, UAE</p>
                      <p className="text-body-sm text-on-surface-variant">Emerging Logistics Hub</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-label-lg text-primary">$6.4M</p>
                    <p className="text-label-md text-primary-fixed-dim">+1.4%</p>
                  </div>
                </div>
              </div>
              <button className="mt-8 text-primary font-label-lg flex items-center hover:translate-x-1 transition-transform">
                Full Ranking <span className="material-symbols-outlined ml-2 text-[18px]">arrow_forward</span>
              </button>
            </div>

            {/* Project Sponsorships */}
            <div className="col-span-7 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-headline-sm text-headline-sm text-primary">Priority Sponsorships</h3>
                <Link className="text-label-lg text-secondary underline" href="#">View All Projects</Link>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-surface-container border border-outline-variant/30 p-6 rounded-lg group">
                  <div className="h-32 w-full mb-4 overflow-hidden rounded">
                    <img 
                      alt="Corporate Office" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSceQ2YDeVrj3kX5sl76UrvQsfIdmkkdIOQ2PjxBaqXDNc_sOdXVvscILYc2KErBvxPgH-p_T4AVg2evLwpbhSSHbc4yiS_ptzfp9OJ5bBcEN9AOyTd-zdZvyFrho8Hxkr-w55KId48cVBM_pc22GCQPM8zKUzyKXmmJ-iPZUgR0npQd9ALTWoERMZZ4QmkHBjdaf_Go63wxXIwQ8tqcoAaRuaRemXtuJVKhv8KgM9Yw7YRfmid8nXv73oXwsBVd1Fb-GYb5Brqk2Q"
                    />
                  </div>
                  <h4 className="font-label-lg text-primary mb-2">Homeland Tech Corridor</h4>
                  <p className="text-body-sm text-on-surface-variant mb-4 line-clamp-2">Building sustainable digital infrastructure and data centers for the future digital economy.</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-label-md">
                      <span className="text-primary font-bold">78% Funded</span>
                      <span className="text-on-surface-variant">$2.4M / $3.1M</span>
                    </div>
                    <div className="w-full bg-white h-2 rounded-full overflow-hidden">
                      <div className="bg-secondary h-full" style={{ width: '78%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container border border-outline-variant/30 p-6 rounded-lg group">
                  <div className="h-32 w-full mb-4 overflow-hidden rounded">
                    <img 
                      alt="Construction Site" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCp2Y-1QPqAmJRgRb7_gSnaZsJfSIqNTIUzCy4UspeTpTTwwnBo7QbgLhS_SivXncSioT1XSnBmA-NvcA-1EwyYCGxhfRFqOjgs_p0vhrOhv611OOyG1DeD7Wq2PRduPACM74Bww4ioOK70Fz-CVZJaS"
                    />
                  </div>
                  <h4 className="font-label-lg text-primary mb-2">Agrarian Modernization</h4>
                  <p className="text-body-sm text-on-surface-variant mb-4 line-clamp-2">Implementing smart irrigation and global export supply chains for rural heritage districts.</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-label-md">
                      <span className="text-primary font-bold">42% Funded</span>
                      <span className="text-on-surface-variant">$1.2M / $2.8M</span>
                    </div>
                    <div className="w-full bg-white h-2 rounded-full overflow-hidden">
                      <div className="bg-secondary h-full" style={{ width: '42%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Section */}
          <footer className="mt-12 py-8 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center text-on-surface-variant">
            <div className="mb-4 md:mb-0">
              <p className="font-label-lg text-label-lg font-bold text-primary mb-1">CivicOS</p>
              <p className="font-body-sm text-body-sm">© 2024 Visionary Tradition Movement. All Rights Reserved.</p>
              <p className="font-body-sm text-body-sm opacity-60 italic">Institutional Oversight Protocol v4.2</p>
            </div>
            <div className="flex space-x-6">
              <Link className="font-label-md text-label-md hover:text-primary transition-colors hover:underline" href="#">Ethics Policy</Link>
              <Link className="font-label-md text-label-md hover:text-primary transition-colors hover:underline" href="#">Privacy</Link>
              <Link className="font-label-md text-label-md hover:text-primary transition-colors hover:underline" href="#">Legal</Link>
              <Link className="font-label-md text-label-md hover:text-primary transition-colors hover:underline" href="#">Contact Bureau</Link>
            </div>
          </footer>
        </div>
      </main>

      {/* FAB */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-secondary text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50 group">
        <span className="material-symbols-outlined">payments</span>
        <div className="absolute right-16 bg-primary text-white px-4 py-2 rounded text-label-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          Process Remittance
        </div>
      </button>
    </div>
  );
}
