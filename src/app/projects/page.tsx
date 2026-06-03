import React from 'react';
import Link from 'next/link';

export default function ProjectsHub() {
  return (
    <div className="bg-surface font-body-md text-on-surface min-h-screen">
      {/* SideNavBar */}
      <aside className="fixed left-0 top-0 h-screen w-64 bg-surface-container-low dark:bg-on-background border-r border-outline-variant/30 dark:border-outline/20 flex flex-col h-full py-8 px-4 z-50">
        <div className="mb-10 px-2">
          <h1 className="font-headline-sm text-headline-sm text-primary dark:text-primary-fixed-dim">BOOT OS</h1>
          <p className="font-label-md text-on-surface-variant">Civic Dashboard</p>
        </div>
        <nav className="flex-grow space-y-2">
          <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-surface-variant hover:bg-surface-container transition-all hover:translate-x-1 duration-300 ease-in-out group" href="#">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="font-label-lg text-label-lg">Dashboard</span>
          </Link>
          <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-surface-variant hover:bg-surface-container transition-all hover:translate-x-1 duration-300 ease-in-out" href="#">
            <span className="material-symbols-outlined">groups</span>
            <span className="font-label-lg text-label-lg">Communities</span>
          </Link>
          <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-surface-variant hover:bg-surface-container transition-all hover:translate-x-1 duration-300 ease-in-out" href="#">
            <span className="material-symbols-outlined">event</span>
            <span className="font-label-lg text-label-lg">Events</span>
          </Link>
          <Link className="flex items-center gap-3 px-4 py-3 text-primary dark:text-primary-fixed-dim font-bold bg-primary-fixed/20 dark:bg-primary-container/30 rounded-lg hover:translate-x-1 duration-300 ease-in-out" href="/projects">
            <span className="material-symbols-outlined">assignment</span>
            <span className="font-label-lg text-label-lg">Projects</span>
          </Link>
          <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-surface-variant hover:bg-surface-container transition-all hover:translate-x-1 duration-300 ease-in-out" href="#">
            <span className="material-symbols-outlined">monitoring</span>
            <span className="font-label-lg text-label-lg">Analytics</span>
          </Link>
          <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-surface-variant hover:bg-surface-container transition-all hover:translate-x-1 duration-300 ease-in-out" href="#">
            <span className="material-symbols-outlined">settings</span>
            <span className="font-label-lg text-label-lg">Settings</span>
          </Link>
        </nav>
        <div className="mt-auto border-t border-outline-variant/30 pt-6 px-2">
          <button className="w-full bg-secondary text-on-secondary py-3 rounded-lg font-label-lg text-label-lg uppercase tracking-wider hover:opacity-90 transition-opacity">
            Donate Now
          </button>
          <div className="mt-6 space-y-2">
            <Link className="flex items-center gap-3 px-2 py-2 text-on-surface-variant hover:text-primary transition-colors" href="#">
              <span className="material-symbols-outlined">help</span>
              <span className="font-label-md text-label-md">Support</span>
            </Link>
            <Link className="flex items-center gap-3 px-2 py-2 text-on-surface-variant hover:text-error transition-colors" href="#">
              <span className="material-symbols-outlined">logout</span>
              <span className="font-label-md text-label-md">Logout</span>
            </Link>
          </div>
        </div>
      </aside>
      <main className="ml-64 min-h-screen flex flex-col">
        {/* TopAppBar */}
        <header className="bg-surface dark:bg-on-background w-full sticky top-0 z-40 border-b border-outline-variant/30 dark:border-outline/20 flex justify-between items-center px-margin-desktop py-4">
          <div className="flex items-center gap-4">
            <h2 className="font-headline-sm text-headline-sm font-bold text-primary dark:text-primary-fixed-dim">Projects Hub</h2>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative group">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
              <input className="bg-surface-container-low border-none rounded-full pl-10 pr-4 py-2 text-body-sm w-64 focus:ring-2 focus:ring-primary-container transition-all" placeholder="Search initiatives..." type="text"/>
            </div>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors">notifications</span>
              <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary font-bold overflow-hidden cursor-pointer active:opacity-80 transition-all duration-200">
                <img alt="User profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTU9XkIH7czrhauWBIwzvHawAQqJPu23u4_E_-M93-1uzBHvLTdbCflJzv9ZBIYyorhUYk9WrzIA3ZkXDdNN8FOaRjH9UxB60mHkSxDkS9_bCKvitcEVL2Y5FROo2tKChUFwqRX5qfOLqe3MveP8eAl1bqAey-gw9u7wM_94UzN_OdcPjrMl8rrkAFJRFFBzFgHzKRZUF3F5xp0eZko5XMl7NE4ZdYZzYuWCYl9PKw-O3mnVRSdnM-WeMyIxTd2DovzLCvigKOAMsC"/>
              </div>
            </div>
          </div>
        </header>
        {/* Canvas Content */}
        <div className="flex-grow p-margin-desktop space-y-12">
          {/* Hero Stats & Vision */}
          <section className="grid grid-cols-12 gap-6">
            <div className="col-span-8 relative rounded-xl overflow-hidden bg-primary-container p-12 text-on-primary h-[400px] flex flex-col justify-end group">
              <div className="absolute inset-0 z-0 opacity-40">
                <img className="w-full h-full object-cover" alt="Sustainable city infrastructure" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDkvT88jJT-Bc63YG2FY4yhfm7QodgCI4Jo80RH5TSmRTChQWPC8YtGnDymS8ef41GncorePTlbRZJbFuV6RWbWBJN8mMS845U9WrYpJUViwvfQvouTvwxCjG9ZE0FS3E21KbOaIROs6XOiExgvmh0xt61Q0jC0UM7VLgAeT6VgqwU-mjoG4Hx9muOEQF27Lc9lytv1eRJa1YICztIOfsOjjxDcSlndpMX9bXyNwaWoRDoL2h2o0sXpdDw8SmufA4jnZ54rfIErcKf"/>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-primary-container/60 to-transparent z-10"></div>
              <div className="relative z-20 max-w-2xl">
                <span className="bg-on-secondary-fixed-variant text-white px-3 py-1 text-label-md font-label-md rounded-sm mb-4 inline-block uppercase tracking-widest">Active Initiative</span>
                <h3 className="font-display-lg text-display-lg leading-tight mb-4">Rebuilding the National Grid for a Digital Future</h3>
                <p className="font-body-lg text-body-lg text-on-primary-container/90 mb-6">Our flagship infrastructure project is 68% complete, modernizing over 4,000 community hubs across the federation.</p>
                <button className="bg-white text-primary px-8 py-3 font-label-lg text-label-lg rounded-sm hover:bg-primary-fixed transition-colors">View Deployment Map</button>
              </div>
            </div>
            <div className="col-span-4 bg-white/70 backdrop-blur-md p-8 rounded-xl flex flex-col justify-between border border-outline-variant/30">
              <div>
                <h4 className="font-headline-sm text-headline-sm text-primary mb-2">Impact Summary</h4>
                <p className="text-on-surface-variant font-body-sm">Tracking 24 national and 142 local projects.</p>
              </div>
              <div className="space-y-6 py-6">
                <div className="space-y-2">
                  <div className="flex justify-between font-label-lg text-label-lg">
                    <span>Capital Allocation</span>
                    <span className="text-secondary">$4.2B / $6B</span>
                  </div>
                  <div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-secondary w-[70%]" style={{ boxShadow: '0 0 10px rgba(175, 45, 47, 0.3)' }}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-outline-variant/30 pt-4">
                  <div className="text-center">
                    <p className="font-headline-md text-headline-md text-primary">14k</p>
                    <p className="font-label-md text-label-md text-on-surface-variant">Jobs Created</p>
                  </div>
                  <div className="text-center border-l border-outline-variant/30 pl-8">
                    <p className="font-headline-md text-headline-md text-primary">89%</p>
                    <p className="font-label-md text-label-md text-on-surface-variant">On Schedule</p>
                  </div>
                </div>
              </div>
              <button className="w-full border border-tertiary-container text-tertiary-container py-3 font-label-lg text-label-lg hover:bg-tertiary-container hover:text-white transition-all">Download Quarterly Report</button>
            </div>
          </section>
          {/* Projects Categories */}
          <section className="space-y-8">
            <div className="flex items-end justify-between border-b border-outline-variant/30 pb-4">
              <div>
                <h3 className="font-headline-lg text-headline-lg text-primary">Project Portfolio</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Strategic developments across national, regional, and local tiers.</p>
              </div>
              <div className="flex gap-4">
                <button className="px-6 py-2 rounded-full bg-primary text-white font-label-md text-label-md">All Projects</button>
                <button className="px-6 py-2 rounded-full bg-surface-container-high text-on-surface-variant font-label-md text-label-md hover:bg-primary-container/10 transition-colors">Infrastructure</button>
                <button className="px-6 py-2 rounded-full bg-surface-container-high text-on-surface-variant font-label-md text-label-md hover:bg-primary-container/10 transition-colors">Education</button>
                <button className="px-6 py-2 rounded-full bg-surface-container-high text-on-surface-variant font-label-md text-label-md hover:bg-primary-container/10 transition-colors">Digital Civic</button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white border border-outline-variant/20 overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="h-48 relative">
                  <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Collaborating professionals" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhZpw7f1fTBl4RCrdH_0DmSZFgFt6sfaMyRih0bsZXpjYcJltb8mk5uIKqUmFzr9Oxxba44iPjerbWE1xRlvrVFfWh21Dw6q1cDh0esOxMcS_vZOqaXezT1EMDu6DLLD6-zNhGLXChBYJo2FdgsYSndS1S_uVnowG-9zPLK1baEYI2zowdsrm1GYBND1-GnJVKjCeZTWOO_Uk3wWXW6GqjL1myuj_ZwG8IVw02a_btzWw7pgvnIltk4gTaHscorgtR6WY8CopRQAb6"/>
                  <span className="absolute top-4 right-4 bg-tertiary-container text-on-tertiary-container px-3 py-1 text-[10px] font-bold uppercase tracking-widest">National</span>
                </div>
                <div className="p-6 space-y-4">
                  <h4 className="font-headline-sm text-headline-sm text-primary">Civic OS 2.0 Deployment</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">Scaling the digital backbone of our democracy. Ensuring every citizen has a secure, encrypted node for voting and service access.</p>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-primary-fixed/30 text-primary font-label-md text-label-md rounded-full">Digital</span>
                    <span className="px-3 py-1 bg-surface-container-high text-on-surface-variant font-label-md text-label-md rounded-full">In Progress</span>
                  </div>
                  <div className="pt-4 border-t border-outline-variant/30 flex justify-between items-center">
                    <span className="font-label-md text-label-md text-secondary">Est. Delivery: Q3 2025</span>
                    <span className="material-symbols-outlined text-primary cursor-pointer">arrow_forward</span>
                  </div>
                </div>
              </div>
              {/* Card 2 */}
              <div className="bg-white border border-outline-variant/20 overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="h-48 relative">
                  <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Solar powered infrastructure" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXJuQoepgEQstkruOYRfkQhqrfyMEQIfzKow4dxXm4w9k8PfF8lecnnK0Bj-AVMhlMGuSD0dLm5n5tvHZz-6Nzwt62bitit_oUlu352DfPHM-vOKMugaO8_OpiFbTO3UAC8QHLFIUbeXs8sq0P-lQnjjTd5jO594sfd-4yRNOWzuT0MljBKnxhO2tJhaEp0UOFwhQYffwiLZZ8g2lWOU7ea9AF3lJ-RZ26i4xBkLYbGZrJfi-cLfLlWNicD5OSgsNia7FV8NTsAMlj"/>
                  <span className="absolute top-4 right-4 bg-primary-container text-on-primary-container px-3 py-1 text-[10px] font-bold uppercase tracking-widest">Local</span>
                </div>
                <div className="p-6 space-y-4">
                  <h4 className="font-headline-sm text-headline-sm text-primary">The Heritage Greenway</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">Restoring 15km of historical canal paths into smart-monitored pedestrian zones powered by local solar arrays.</p>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-primary-fixed/30 text-primary font-label-md text-label-md rounded-full">Eco</span>
                    <span className="px-3 py-1 bg-surface-container-high text-on-surface-variant font-label-md text-label-md rounded-full">Planning</span>
                  </div>
                  <div className="pt-4 border-t border-outline-variant/30 flex justify-between items-center">
                    <span className="font-label-md text-label-md text-secondary">Est. Delivery: Q1 2026</span>
                    <span className="material-symbols-outlined text-primary cursor-pointer">arrow_forward</span>
                  </div>
                </div>
              </div>
              {/* Card 3 */}
              <div className="bg-white border border-outline-variant/20 overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="h-48 relative">
                  <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Community center" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg_vfq9dSWXdkJ2zvPS3GvPMiNLb5Elzq7gG2SggsBgFOUu4PhuedXd9gAR-kOTZW635Xhr6foiOKR7FZw0t5K94p4aLFc2gDrYeUvyIUONtxpAU65vWnyyONmUq2VhRwk8B2Qg6PerSTLtcOGEwDPH6a-DieRQPxuUSaLO9GKt_RvYJHtKDEKOmYrpM8lqho-IB3pQfnhz61eW7C4FLjp-uuMWoQriAYKRD7TtOhp4NBWTf3ChPJ5l60Dy6LXFGavcd4Xx2gLhvuc"/>
                  <span className="absolute top-4 right-4 bg-on-secondary-fixed-variant text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest">Community</span>
                </div>
                <div className="p-6 space-y-4">
                  <h4 className="font-headline-sm text-headline-sm text-primary">Civic Learning Labs</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">Building 12 state-of-the-art educational facilities focusing on emerging technology and classical rhetoric.</p>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-primary-fixed/30 text-primary font-label-md text-label-md rounded-full">Education</span>
                    <span className="px-3 py-1 bg-surface-container-high text-on-surface-variant font-label-md text-label-md rounded-full">Active</span>
                  </div>
                  <div className="pt-4 border-t border-outline-variant/30 flex justify-between items-center">
                    <span className="font-label-md text-label-md text-secondary">Est. Delivery: Q4 2024</span>
                    <span className="material-symbols-outlined text-primary cursor-pointer">arrow_forward</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Active Milestones Timeline */}
          <section className="bg-surface-container-low p-12 rounded-2xl">
            <div className="mb-10 text-center max-w-2xl mx-auto">
              <h3 className="font-headline-lg text-headline-lg text-primary">Strategic Milestones</h3>
              <p className="text-on-surface-variant font-body-md">The timeline of our movement's progress toward national maturity.</p>
            </div>
            <div className="relative">
              <div className="absolute top-1/2 left-0 w-full h-px bg-outline-variant/50 -translate-y-1/2"></div>
              <div className="grid grid-cols-4 gap-4 relative">
                <div className="text-center space-y-4">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto relative z-10 border-4 border-surface">
                    <span className="material-symbols-outlined">check</span>
                  </div>
                  <h5 className="font-label-lg text-label-lg text-primary">Phase 1: Seed</h5>
                  <p className="text-xs font-body-sm text-on-surface-variant">Framework established.<br/>March 2024</p>
                </div>
                <div className="text-center space-y-4">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto relative z-10 border-4 border-surface">
                    <span className="material-symbols-outlined">check</span>
                  </div>
                  <h5 className="font-label-lg text-label-lg text-primary">Phase 2: Alpha</h5>
                  <p className="text-xs font-body-sm text-on-surface-variant">Pilot deployment.<br/>June 2024</p>
                </div>
                <div className="text-center space-y-4">
                  <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center mx-auto relative z-10 border-4 border-surface ring-4 ring-secondary/20">
                    <span className="material-symbols-outlined">bolt</span>
                  </div>
                  <h5 className="font-label-lg text-label-lg text-secondary">Phase 3: Scale</h5>
                  <p className="text-xs font-body-sm text-on-surface-variant">National rollout.<br/>Currently Active</p>
                </div>
                <div className="text-center space-y-4 opacity-40">
                  <div className="w-12 h-12 bg-surface-container-highest text-on-surface-variant rounded-full flex items-center justify-center mx-auto relative z-10 border-4 border-surface">
                    <span className="material-symbols-outlined">lock</span>
                  </div>
                  <h5 className="font-label-lg text-label-lg text-on-surface-variant">Phase 4: Sovereign</h5>
                  <p className="text-xs font-body-sm text-on-surface-variant">System-wide autonomy.<br/>Expected 2026</p>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* Footer */}
        <footer className="bg-surface-container-highest dark:bg-on-background w-full py-16 border-t border-outline-variant/30 dark:border-outline/20">
          <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter">
            <div className="space-y-4">
              <h3 className="font-headline-sm text-headline-sm text-primary dark:text-primary-fixed-dim">BOOT OS</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">A visionary tradition building a more stable, digital federation.</p>
            </div>
            <div>
              <h4 className="font-label-lg text-label-lg mb-6 uppercase tracking-widest text-primary">Governance</h4>
              <ul className="space-y-3 font-body-sm text-body-sm text-on-surface-variant">
                <li><Link className="hover:text-primary transition-all underline" href="#">Transparency Report</Link></li>
                <li><Link className="hover:text-primary transition-all underline" href="#">Constitutional Code</Link></li>
                <li><Link className="hover:text-primary transition-all underline" href="#">Vote Audit</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-label-lg text-label-lg mb-6 uppercase tracking-widest text-primary">Legal</h4>
              <ul className="space-y-3 font-body-sm text-body-sm text-on-surface-variant">
                <li><Link className="hover:text-primary transition-all underline" href="#">Privacy Policy</Link></li>
                <li><Link className="hover:text-primary transition-all underline" href="#">Terms of Service</Link></li>
                <li><Link className="hover:text-primary transition-all underline" href="#">Ethics Charter</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-label-lg text-label-lg mb-6 uppercase tracking-widest text-primary">Contact</h4>
              <ul className="space-y-3 font-body-sm text-body-sm text-on-surface-variant">
                <li><Link className="hover:text-primary transition-all underline" href="#">Press Office</Link></li>
                <li><Link className="hover:text-primary transition-all underline" href="#">Ambassador Program</Link></li>
                <li><Link className="hover:text-primary transition-all underline" href="#">Contact Us</Link></li>
              </ul>
            </div>
          </div>
          <div className="max-w-container-max mx-auto px-margin-desktop mt-12 pt-8 border-t border-outline-variant/10 text-center">
            <p className="font-label-md text-label-md text-on-surface-variant">© 2024 BOOT Civic Operating System. All Rights Reserved.</p>
          </div>
        </footer>
      </main>
      {/* FAB */}
      <button className="fixed bottom-10 right-10 w-16 h-16 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50">
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>add</span>
      </button>
    </div>
  );
}
