import React from 'react';

export default function MyProfilePage() {
  return (
    <div className="overflow-x-hidden">
      {/* TopAppBar */}
      <header className="bg-surface dark:bg-on-background w-full sticky top-0 z-50 border-b border-outline-variant/30 dark:border-outline/20">
        <div className="flex justify-between items-center px-margin-desktop py-4 w-full">
          <div className="flex items-center gap-8">
            <span className="font-headline-sm text-headline-sm font-bold text-primary dark:text-primary-fixed-dim">BOOT Civic OS</span>
            <nav className="hidden md:flex gap-6">
              <a className="text-on-surface-variant dark:text-surface-variant font-label-lg text-label-lg hover:bg-surface-container-low transition-colors px-3 py-1 rounded" href="/citizen/dashboard">Dashboard</a>
              <a className="text-on-surface-variant dark:text-surface-variant font-label-lg text-label-lg hover:bg-surface-container-low transition-colors px-3 py-1 rounded" href="/my-communities">Communities</a>
              <a className="text-primary dark:text-primary-fixed-dim font-bold border-b-2 border-primary font-label-lg text-label-lg px-3 py-1" href="/my-profile">Profile</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden lg:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
              <input className="pl-10 pr-4 py-2 bg-surface-container-low border border-outline/20 rounded-full focus:outline-none focus:border-primary w-64 text-body-sm font-body-sm" placeholder="Search resources..." type="text" />
            </div>
            <button className="material-symbols-outlined p-2 text-on-surface-variant cursor-pointer hover:bg-surface-container-low rounded-full transition-all">notifications</button>
            <div className="w-10 h-10 rounded-full overflow-hidden border border-primary/30 cursor-pointer active:opacity-80 transition-all duration-200">
              <img alt="User profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBETW26wOs44fVh1plCLro4lQ9EKTQnPQhaBxyN64GELGs2Gpd5HRJWfvyKmuB3rbXfyq9UGHIw-oVjfh7AoOkL7xqEW9PhNeXHhZt1Djw2HxhA7cN0DI0mKQc19b8hfiI_tbFWRPUu1LxWOwuN_SOSF47qOZJLWZQkovTPOa7XFYkqRRGAcSfCQRkKqclAn34o8noLlT9G-Jot1NdMmn4S17uTnbG3DdUu24bB7qnAGRI8tQKSdZGl7jlBR4WeuEFpAmrOl1gHOfmg" />
            </div>
          </div>
        </div>
      </header>
      <div className="flex max-w-container-max mx-auto">
        {/* SideNavBar */}
        <aside className="fixed left-0 top-0 h-screen w-64 bg-surface-container-low dark:bg-on-background border-r border-outline-variant/30 dark:border-outline/20 flex flex-col h-full py-8 px-4 z-40">
          <div className="mb-12 px-2">
            <div className="flex items-center gap-3 mb-2">
              <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance</span>
              <span className="font-headline-sm text-headline-sm text-primary dark:text-primary-fixed-dim">BOOT OS</span>
            </div>
            <p className="text-on-surface-variant font-label-md text-label-md">Civic Dashboard</p>
          </div>
          <nav className="flex-grow space-y-1">
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-surface-variant font-label-lg text-label-lg hover:bg-surface-container dark:hover:bg-primary-container/10 transition-all hover:translate-x-1 duration-300 ease-in-out" href="/citizen/dashboard">
               <span className="material-symbols-outlined">dashboard</span>
               Dashboard
             </a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-surface-variant font-label-lg text-label-lg hover:bg-surface-container dark:hover:bg-primary-container/10 transition-all hover:translate-x-1 duration-300 ease-in-out" href="/my-communities">
               <span className="material-symbols-outlined">groups</span>
               Communities
             </a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-surface-variant font-label-lg text-label-lg hover:bg-surface-container dark:hover:bg-primary-container/10 transition-all hover:translate-x-1 duration-300 ease-in-out" href="/events">
               <span className="material-symbols-outlined">event</span>
               Events
             </a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-surface-variant font-label-lg text-label-lg hover:bg-surface-container dark:hover:bg-primary-container/10 transition-all hover:translate-x-1 duration-300 ease-in-out" href="/projects">
               <span className="material-symbols-outlined">assignment</span>
               Projects
             </a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-surface-variant font-label-lg text-label-lg hover:bg-surface-container dark:hover:bg-primary-container/10 transition-all hover:translate-x-1 duration-300 ease-in-out" href="/my-impact">
               <span className="material-symbols-outlined">monitoring</span>
               Analytics
             </a>
<a className="flex items-center gap-3 px-4 py-3 text-primary dark:text-primary-fixed-dim font-bold bg-primary-fixed/20 dark:bg-primary-container/30 rounded-lg font-label-lg text-label-lg transition-all" href="/citizen/settings">
               <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>settings</span>
               Settings
             </a>
          </nav>
          <div className="mt-auto space-y-1 pt-8 border-t border-outline-variant/20">
            <button className="w-full bg-secondary text-on-secondary px-4 py-3 rounded-lg font-label-lg text-label-lg mb-4 hover:opacity-90 transition-opacity">Donate Now</button>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-surface-variant font-label-lg text-label-lg hover:bg-surface-container transition-all" href="/contact">
               <span className="material-symbols-outlined">help</span>
               Support
             </a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-surface-variant font-label-lg text-label-lg hover:bg-surface-container transition-all" href="/auth/login">
               <span className="material-symbols-outlined">logout</span>
               Logout
             </a>
          </div>
        </aside>
        <main className="ml-64 flex-grow px-margin-desktop py-12 min-h-screen">
          {/* Profile Header */}
          <section className="mb-12">
            <div className="flex justify-between items-end">
              <div>
                <h1 className="font-headline-lg text-headline-lg text-primary mb-2">My Profile</h1>
                <p className="text-body-lg font-body-lg text-on-surface-variant">Manage your digital identity, verified skills, and civic credentials.</p>
              </div>
              <div className="flex gap-4">
                <button className="px-6 py-2 border border-primary/30 text-primary font-label-lg text-label-lg hover:bg-surface-container transition-all">Export Ledger</button>
                <button className="px-6 py-2 bg-primary text-white font-label-lg text-label-lg hover:opacity-90 transition-all">Edit Details</button>
              </div>
            </div>
          </section>
          {/* Bento Grid Content */}
          <div className="grid grid-cols-12 gap-gutter">
            {/* Identity Card */}
            <div className="col-span-12 lg:col-span-4 bg-white border border-primary/30 p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -mr-16 -mt-16 rounded-full"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-20 h-20 rounded-full overflow-hidden border border-primary/30">
                    <img alt="User Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZ1owa9Db3hg7GV85S6GKv0y4zFo54yaQeIJ8UojItKGC-0UDb6FZiyyhHZ0KJa5wlxT7Dnyo3SrzLcshUlosct9ig-JuL0FYtBVP-Rgd94aKeUL5q6h_rNxUgEe5SW4n2vqQQ0nQRmoWH3BRgtQu1uN4ut2e4_Vdv1aNVzaXq7sDtLvDFbk74x0hFzWp62OI8WTTy7i_M9UkqUTTkeTr2nXwZohkx2jG6SegcX__rMsSDtz9IjN1-LmA3FljQepSBRbbrz6qMIaQr" />
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-primary">Dr. Julian Vance</h3>
                    <div className="flex items-center gap-1 text-primary-container">
                      <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                      <span className="font-label-md text-label-md uppercase tracking-wider">Level 3 Verified</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="pb-4 border-b border-outline-variant/20">
                    <p className="font-label-md text-label-md text-outline uppercase mb-1">Identity Status</p>
                    <div className="flex justify-between items-center">
                      <span className="font-body-md text-body-md">Biometric ID Hash</span>
                      <span className="text-primary font-bold">0x882A...771B</span>
                    </div>
                  </div>
                  <div className="pb-4 border-b border-outline-variant/20">
                    <p className="font-label-md text-label-md text-outline uppercase mb-1">Residency</p>
                    <div className="flex justify-between items-center">
                      <span className="font-body-md text-body-md">District 4, New Aethel</span>
                      <span className="material-symbols-outlined text-primary">location_on</span>
                    </div>
                  </div>
                  <div>
                    <button className="w-full py-3 bg-surface-container-low border border-primary/30 text-primary font-label-lg text-label-lg hover:bg-surface-container transition-all flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined">fingerprint</span>
                      Refresh Verification
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Skill Registry */}
            <div className="col-span-12 lg:col-span-8 bg-white border border-primary/30 p-8">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Skill Registry</h3>
                  <p className="text-body-md font-body-md text-on-surface-variant">Validated professional expertise in the civic ledger.</p>
                </div>
                <button className="p-2 hover:bg-surface-container-low rounded-full transition-all">
                  <span className="material-symbols-outlined text-outline">add_circle</span>
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 bg-surface-container-low border-l-4 border-primary">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-label-lg text-label-lg text-primary">Urban Governance</span>
                    <span className="text-primary-container font-bold">Expert</span>
                  </div>
                  <div className="h-2 bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-secondary w-[92%]"></div>
                  </div>
                  <p className="mt-3 text-body-sm font-body-sm text-on-surface-variant">Verified by the Metropolitan Planning Council (2023).</p>
                </div>
                <div className="p-5 bg-surface-container-low border-l-4 border-primary">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-label-lg text-label-lg text-primary">Public Diplomacy</span>
                    <span className="text-primary-container font-bold">Senior</span>
                  </div>
                  <div className="h-2 bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-secondary w-[78%]"></div>
                  </div>
                  <p className="mt-3 text-body-sm font-body-sm text-on-surface-variant">12,000 community consensus hours recorded.</p>
                </div>
                <div className="p-5 bg-surface-container-low border-l-4 border-outline">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-label-lg text-label-lg text-primary">Blockchain Policy</span>
                    <span className="text-primary-container font-bold">Associate</span>
                  </div>
                  <div className="h-2 bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-secondary w-[45%]"></div>
                  </div>
                  <p className="mt-3 text-body-sm font-body-sm text-on-surface-variant">Certification in Progress: Module 4/6 complete.</p>
                </div>
                <div className="flex flex-col justify-center items-center p-5 border-2 border-dashed border-outline-variant/40 hover:bg-surface-container-low transition-all cursor-pointer">
                  <span className="material-symbols-outlined text-4xl text-outline-variant mb-2">workspace_premium</span>
                  <span className="font-label-lg text-label-lg text-outline">Import Professional Certification</span>
                </div>
              </div>
            </div>
            {/* Community Badges */}
            <div className="col-span-12 lg:col-span-7 bg-surface-container-low/50 backdrop-blur-md border border-primary/30 p-8">
              <h3 className="font-headline-sm text-headline-sm text-primary mb-6">Community Badges</h3>
              <div className="flex flex-wrap gap-8">
                <div className="flex flex-col items-center gap-3 w-32 group">
                  <div className="w-20 h-20 rounded-full bg-white border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-sm">
                    <span className="material-symbols-outlined text-3xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>military_tech</span>
                  </div>
                  <span className="font-label-md text-label-md text-center text-on-surface">Founding Citizen</span>
                </div>
                <div className="flex flex-col items-center gap-3 w-32 group">
                  <div className="w-20 h-20 rounded-full bg-white border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-sm">
                    <span className="material-symbols-outlined text-3xl text-[#C5A059]" style={{ fontVariationSettings: "'FILL' 1" }}>diamond</span>
                  </div>
                  <span className="font-label-md text-label-md text-center text-on-surface">Top Voter</span>
                </div>
                <div className="flex flex-col items-center gap-3 w-32 group">
                  <div className="w-20 h-20 rounded-full bg-white border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-sm">
                    <span className="material-symbols-outlined text-3xl text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>volunteer_activism</span>
                  </div>
                  <span className="font-label-md text-label-md text-center text-on-surface">Philanthropist</span>
                </div>
                <div className="flex flex-col items-center gap-3 w-32 group opacity-40 grayscale">
                  <div className="w-20 h-20 rounded-full bg-white border border-primary/30 flex items-center justify-center border-dashed">
                    <span className="material-symbols-outlined text-3xl text-outline">lock</span>
                  </div>
                  <span className="font-label-md text-label-md text-center text-on-surface">Civic Leader</span>
                </div>
              </div>
            </div>
            {/* Participation Score */}
            <div className="col-span-12 lg:col-span-5 bg-primary-container text-white p-8 overflow-hidden relative">
              <div className="relative z-10">
                <h3 className="font-headline-sm text-headline-sm mb-6">Participation Score</h3>
                <div className="text-[64px] font-bold leading-tight mb-2">942</div>
                <p className="font-label-lg text-label-lg text-on-primary-container uppercase tracking-widest mb-8">Global Percentile: Top 2%</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="w-3 h-3 rounded-full bg-secondary"></span>
                    <span className="font-body-md text-body-md">24 Proposal Submissions</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-3 h-3 rounded-full bg-tertiary-fixed-dim"></span>
                    <span className="font-body-md text-body-md">118 Community Referendums</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-3 h-3 rounded-full bg-white/40"></span>
                    <span className="font-body-md text-body-md">12 Local Project Leads</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      {/* Footer */}
      <footer className="bg-surface-container-highest dark:bg-on-background w-full py-16 border-t border-outline-variant/30 dark:border-outline/20">
        <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter">
          <div className="col-span-1 md:col-span-1">
            <span className="font-headline-sm text-headline-sm text-primary dark:text-primary-fixed-dim mb-4 block">BOOT OS</span>
            <p className="text-on-surface-variant font-body-sm text-body-sm leading-relaxed">The future of civic engagement, built on transparency and visionary tradition. Join the movement toward a better governance model.</p>
          </div>
          <div>
            <h4 className="font-label-lg text-label-lg text-primary mb-4">Governance</h4>
            <ul className="space-y-2">
              <li><a className="text-on-surface-variant font-body-sm text-body-sm hover:text-primary transition-all" href="/manifesto">Transparency Report</a></li>
              <li><a className="text-on-surface-variant font-body-sm text-body-sm hover:text-primary transition-all" href="/about">Civic Constitution</a></li>
              <li><a className="text-on-surface-variant font-body-sm text-body-sm hover:text-primary transition-all" href="/about">Ledger Security</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-label-lg text-label-lg text-primary mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a className="text-on-surface-variant font-body-sm text-body-sm hover:text-primary transition-all" href="/about">Privacy Policy</a></li>
              <li><a className="text-on-surface-variant font-body-sm text-body-sm hover:text-primary transition-all" href="/about">Terms of Service</a></li>
              <li><a className="text-on-surface-variant font-body-sm text-body-sm hover:text-primary transition-all" href="/contact">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-label-lg text-label-lg text-primary mb-4">Newsletter</h4>
            <p className="text-on-surface-variant font-body-sm text-body-sm mb-4">Stay updated on civic initiatives.</p>
            <div className="flex">
              <input className="bg-white border border-outline-variant px-3 py-2 w-full focus:outline-primary font-body-sm text-body-sm" placeholder="Email Address" type="email" />
              <button className="bg-primary text-white px-4 py-2 hover:opacity-90 transition-opacity">
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-container-max mx-auto px-margin-desktop mt-12 pt-8 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-on-surface-variant font-label-md text-label-md">© 2024 BOOT Civic Operating System. All Rights Reserved.</p>
          <div className="flex gap-6">
            <span className="material-symbols-outlined text-outline cursor-pointer hover:text-primary transition-colors">public</span>
            <span className="material-symbols-outlined text-outline cursor-pointer hover:text-primary transition-colors">hub</span>
            <span className="material-symbols-outlined text-outline cursor-pointer hover:text-primary transition-colors">forum</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
