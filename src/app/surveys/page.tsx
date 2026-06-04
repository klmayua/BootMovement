import React from 'react';

export default function SurveysPage() {
  return (
    <div className="font-body-md text-body-md">
      {/* Sidebar Navigation Shell */}
      <aside className="fixed left-0 top-0 h-screen w-64 bg-surface-container-low border-r border-outline-variant/30 flex flex-col py-8 px-4 z-40">
        <div className="mb-12 px-2">
          <h1 className="font-headline-sm text-headline-sm text-primary font-bold">BOOT OS</h1>
          <p className="font-label-md text-label-md text-on-surface-variant opacity-70">Civic Dashboard</p>
        </div>
        <nav className="flex-grow space-y-2">
           <a className="flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:bg-surface-container transition-all hover:translate-x-1 duration-300 rounded-lg group" href="/citizen/dashboard">
             <span className="material-symbols-outlined">dashboard</span>
             <span className="font-label-lg text-label-lg">Dashboard</span>
           </a>
           <a className="flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:bg-surface-container transition-all hover:translate-x-1 duration-300 rounded-lg group" href="/communities">
             <span className="material-symbols-outlined">groups</span>
             <span className="font-label-lg text-label-lg">Communities</span>
           </a>
           <a className="flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:bg-surface-container transition-all hover:translate-x-1 duration-300 rounded-lg group" href="/events">
             <span className="material-symbols-outlined">event</span>
             <span className="font-label-lg text-label-lg">Events</span>
           </a>
           <a className="flex items-center gap-4 px-4 py-3 text-primary font-bold bg-primary-fixed/20 rounded-lg transition-all hover:translate-x-1 duration-300 group" href="/projects">
             <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>assignment</span>
             <span className="font-label-lg text-label-lg">Projects</span>
           </a>
           <a className="flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:bg-surface-container transition-all hover:translate-x-1 duration-300 rounded-lg group" href="/narrative">
             <span className="material-symbols-outlined">monitoring</span>
             <span className="font-label-lg text-label-lg">Analytics</span>
           </a>
           <a className="flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:bg-surface-container transition-all hover:translate-x-1 duration-300 rounded-lg group" href="/citizen/settings">
             <span className="material-symbols-outlined">settings</span>
             <span className="font-label-lg text-label-lg">Settings</span>
           </a>
        </nav>
        <div className="mt-auto border-t border-outline-variant/30 pt-6 space-y-2">
          <button className="w-full bg-secondary text-on-secondary py-3 rounded-lg font-label-lg text-label-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity mb-4">
            <span className="material-symbols-outlined text-[20px]">volunteer_activism</span>
            Donate Now
          </button>
          <a className="flex items-center gap-4 px-4 py-2 text-on-surface-variant hover:text-primary transition-colors" href="/contact">
            <span className="material-symbols-outlined">help</span>
            <span className="font-label-md text-label-md">Support</span>
          </a>
          <a className="flex items-center gap-4 px-4 py-2 text-on-surface-variant hover:text-error transition-colors" href="/auth/login">
            <span className="material-symbols-outlined">logout</span>
            <span className="font-label-md text-label-md">Logout</span>
          </a>
        </div>
      </aside>

      {/* Main Content Canvas */}
      <main className="ml-64 min-h-screen">
        {/* Top App Bar Shell */}
        <header className="sticky top-0 z-30 bg-surface w-full border-b border-outline-variant/30 px-margin-desktop py-4 flex justify-between items-center backdrop-blur-md bg-opacity-90">
          <div className="flex items-center gap-8">
            <h2 className="font-headline-sm text-headline-sm font-bold text-primary">Public Opinion Portal</h2>
            <div className="hidden md:flex gap-6">
              <a className="font-label-lg text-label-lg text-primary font-bold border-b-2 border-primary pb-1" href="/surveys">Surveys</a>
              <a className="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors" href="/policy-discussions">Policy Drafts</a>
              <a className="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors" href="/town-halls">Town Halls</a>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative group">
              <input className="bg-surface-container-low border border-outline-variant rounded-full px-6 py-2 text-body-sm focus:outline-none focus:ring-2 focus:ring-primary-container w-64 transition-all" placeholder="Search polls..." type="text" />
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
            </div>
            <div className="flex items-center gap-4">
              <button className="material-symbols-outlined text-on-surface-variant hover:bg-surface-container-low p-2 rounded-full transition-colors">notifications</button>
              <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-fixed font-bold border-2 border-primary-fixed">
                <span className="material-symbols-outlined">account_circle</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="px-margin-desktop py-12 max-w-container-max mx-auto">
          {/* Hero Stats Row */}
          <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-primary-container text-on-primary p-8 rounded-lg border border-primary-container/20">
              <p className="font-label-md text-label-md text-on-primary-container uppercase tracking-widest mb-2">Total Participation</p>
              <h3 className="font-headline-lg text-headline-lg">142.8k</h3>
              <p className="text-body-sm text-on-primary-container mt-2 flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">trending_up</span> +12% this month
              </p>
            </div>
            <div className="bg-surface border border-outline-variant/30 p-8 rounded-lg">
              <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest mb-2">Active Polls</p>
              <h3 className="font-headline-lg text-headline-lg text-primary">24</h3>
              <div className="w-full bg-surface-container-highest h-1 rounded-full mt-4">
                <div className="bg-secondary h-1 rounded-full" style={{ width: '65%' }}></div>
              </div>
            </div>
            <div className="bg-surface border border-outline-variant/30 p-8 rounded-lg">
              <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest mb-2">Policy Impacts</p>
              <h3 className="font-headline-lg text-headline-lg text-primary">09</h3>
              <p className="text-body-sm text-on-surface-variant mt-2 italic">Resulting in direct amendments</p>
            </div>
            <div className="bg-surface border border-outline-variant/30 p-8 rounded-lg flex flex-col justify-center items-center text-center">
              <span className="material-symbols-outlined text-4xl text-secondary mb-2">verified_user</span>
              <p className="font-label-lg text-label-lg text-primary">Verified Citizen Status</p>
              <p className="text-body-sm text-on-surface-variant">Validated via CivicID</p>
            </div>
          </section>

          {/* Featured Poll & Bento Content */}
          <section className="bento-grid">
            {/* Large Featured Card */}
            <div className="col-span-12 md:col-span-8 relative overflow-hidden rounded-xl h-[500px] border border-outline-variant/30 group">
              <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent z-10 opacity-80"></div>
              <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC10h77ZdN31alaSVOIUj2CvdcUqLw7T-lTyLPfgaCDIM4gMOQRv7H5cCb39DrXPF6II2h1JGfpL2vVkAJRvsnJDDMPDlzSUEwK_uA7Ks0iZ0nNJp14E_wJElyP9r9f0vpcNreZsCrzx9rTC7F7R-3ak6K7dSgaIeHMArqayQ8NEfrHcUxhuscaZN3sJfhcz24JH_-D6IcvKrtBF8ju6FphS9iNyWokmH67chzEjdQpH0lUHtGzsc6JR3dzbUUqowqHonIjzk3BZrxG" alt="Government building" />
              <div className="absolute bottom-0 left-0 p-12 z-20 w-full md:w-3/4">
                <span className="bg-secondary text-on-secondary px-3 py-1 rounded font-label-md text-label-md mb-4 inline-block uppercase tracking-wider">Urgent Action</span>
                <h2 className="font-display-lg text-display-lg text-white mb-4">Metropolitan Transit Expansion 2025</h2>
                <p className="font-body-lg text-body-lg text-white/80 mb-8 leading-relaxed">Phase 3 of the infrastructure redevelopment plan is now open for public commentary. Your feedback directly determines the allocation of $450M in heritage preservation funds.</p>
                <div className="flex gap-4">
                  <button className="bg-secondary text-white px-8 py-3 rounded-lg font-label-lg text-label-lg hover:opacity-90 transition-opacity flex items-center gap-2">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>how_to_reg</span>
                    Cast Your Vote
                  </button>
                  <button className="border border-white/40 text-white px-8 py-3 rounded-lg font-label-lg text-label-lg hover:bg-white/10 transition-colors">
                    Review Proposals
                  </button>
                </div>
              </div>
            </div>
            {/* Secondary Feedback Tracking */}
            <div className="col-span-12 md:col-span-4 glass-card p-8 rounded-xl flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-headline-sm text-headline-sm text-primary">Live Sentiment</h3>
                <span className="material-symbols-outlined text-secondary">analytics</span>
              </div>
              <div className="space-y-6 flex-grow">
                <div className="space-y-2">
                  <div className="flex justify-between font-label-md text-label-md">
                    <span className="text-on-surface-variant">Public Transit Support</span>
                    <span className="text-primary font-bold">78%</span>
                  </div>
                  <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                    <div className="bg-primary-container h-full" style={{ width: '78%' }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between font-label-md text-label-md">
                    <span className="text-on-surface-variant">Green Space Allocation</span>
                    <span className="text-primary font-bold">42%</span>
                  </div>
                  <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                    <div className="bg-secondary h-full" style={{ width: '42%' }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between font-label-md text-label-md">
                    <span className="text-on-surface-variant">Digital Service Ease</span>
                    <span className="text-primary font-bold">91%</span>
                  </div>
                  <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                    <div className="bg-primary-container h-full" style={{ width: '91%' }}></div>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-outline-variant/30">
                <p className="text-body-sm text-on-surface-variant italic leading-snug">"Community data is aggregated anonymously to preserve privacy while ensuring authentic democratic representation."</p>
              </div>
            </div>
            {/* Active Polls List */}
            <div className="col-span-12 md:col-span-7 bg-surface border border-outline-variant/30 p-8 rounded-xl">
              <div className="flex justify-between items-center mb-8">
                <h3 className="font-headline-sm text-headline-sm text-primary">Ongoing Surveys</h3>
                <button className="text-primary font-label-lg text-label-lg flex items-center gap-1 hover:underline">
                  View All <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-6 p-4 hover:bg-surface-container-low transition-all border-b border-outline-variant/10 group cursor-pointer">
                  <div className="w-16 h-16 rounded bg-surface-container-highest flex items-center justify-center text-primary-container overflow-hidden shrink-0">
                    <span className="material-symbols-outlined text-3xl">park</span>
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-label-lg text-label-lg text-primary group-hover:text-secondary transition-colors">Riverside Park Revitalization</h4>
                    <p className="text-body-sm text-on-surface-variant">Closes in 3 days • 4.2k Responses</p>
                  </div>
                  <span className="bg-surface-container px-3 py-1 rounded-full text-primary font-label-md text-label-md">Open</span>
                </div>
                <div className="flex items-center gap-6 p-4 hover:bg-surface-container-low transition-all border-b border-outline-variant/10 group cursor-pointer">
                  <div className="w-16 h-16 rounded bg-surface-container-highest flex items-center justify-center text-primary-container overflow-hidden shrink-0">
                    <span className="material-symbols-outlined text-3xl">school</span>
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-label-lg text-label-lg text-primary group-hover:text-secondary transition-colors">School Lunch Program Feedback</h4>
                    <p className="text-body-sm text-on-surface-variant">Closes in 12 days • 1.1k Responses</p>
                  </div>
                  <span className="bg-surface-container px-3 py-1 rounded-full text-primary font-label-md text-label-md">Open</span>
                </div>
                <div className="flex items-center gap-6 p-4 hover:bg-surface-container-low transition-all border-b border-outline-variant/10 group cursor-pointer">
                  <div className="w-16 h-16 rounded bg-surface-container-highest flex items-center justify-center text-primary-container overflow-hidden shrink-0">
                    <span className="material-symbols-outlined text-3xl">payments</span>
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-label-lg text-label-lg text-primary group-hover:text-secondary transition-colors">Local Tax Allocation Review</h4>
                    <p className="text-body-sm text-on-surface-variant">Closes in 5 days • 8.9k Responses</p>
                  </div>
                  <span className="bg-secondary/10 px-3 py-1 rounded-full text-secondary font-label-md text-label-md">Trending</span>
                </div>
              </div>
            </div>
            {/* Personal Activity / Progress */}
            <div className="col-span-12 md:col-span-5 bg-surface-container-low p-8 rounded-xl border border-primary/5">
              <h3 className="font-headline-sm text-headline-sm text-primary mb-6">Your Contribution</h3>
              <div className="flex items-center justify-center py-8">
                <div className="relative w-48 h-48">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle className="text-outline-variant/20" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" strokeWidth="8"></circle>
                    <circle className="text-secondary" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" strokeDasharray="552.92" strokeDashoffset="138.23" strokeWidth="12"></circle>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="font-display-lg text-headline-lg text-primary">75%</span>
                    <span className="font-label-md text-label-md text-on-surface-variant">Civic Score</span>
                  </div>
                </div>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span className="text-body-sm">Voted on Education Bill 2024</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span className="text-body-sm">Submitted Zoning Feedback</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-outline-variant text-xl">pending</span>
                  <span className="text-body-sm text-on-surface-variant">Health Infrastructure Poll Pending</span>
                </li>
              </ul>
              <button className="w-full mt-8 border border-primary text-primary font-label-lg text-label-lg py-3 rounded-lg hover:bg-primary hover:text-white transition-all">
                Download Participation Certificate
              </button>
            </div>
          </section>
        </div>
        {/* Footer Shell */}
        <footer className="w-full py-16 bg-surface-container-highest border-t border-outline-variant/30 mt-12">
          <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter">
            <div className="col-span-1">
              <h4 className="font-headline-sm text-headline-sm text-primary mb-4">BOOT Civic OS</h4>
              <p className="text-body-sm text-on-surface-variant mb-6">Empowering digital democracy through transparent leadership and verified public participation.</p>
            </div>
            <div>
              <h5 className="font-label-lg text-label-lg text-primary uppercase mb-6">Platforms</h5>
              <ul className="space-y-3 font-body-sm text-body-sm text-on-surface-variant">
                <li><a className="hover:text-primary transition-colors" href="/my-profile">CivicID Portal</a></li>
                <li><a className="hover:text-primary transition-colors" href="/petitions">Legislative Tracker</a></li>
                <li><a className="hover:text-primary transition-colors" href="/my-communities">Community Hubs</a></li>
                <li><a className="hover:text-primary transition-colors" href="/my-impact">Financial Transparency</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-label-lg text-label-lg text-primary uppercase mb-6">Resources</h5>
              <ul className="space-y-3 font-body-sm text-body-sm text-on-surface-variant">
                <li><a className="hover:text-primary transition-colors" href="/about">Privacy Policy</a></li>
                <li><a className="hover:text-primary transition-colors" href="/about">Terms of Service</a></li>
                <li><a className="hover:text-primary transition-colors" href="/manifesto">Transparency Report</a></li>
                <li><a className="hover:text-primary transition-colors" href="/contact">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-label-lg text-label-lg text-primary uppercase mb-6">Official Channels</h5>
              <div className="flex gap-4 mb-6">
                <a className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="/about">
                  <span className="material-symbols-outlined text-[20px]">public</span>
                </a>
                <a className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="/about">
                  <span className="material-symbols-outlined text-[20px]">chat_bubble</span>
                </a>
                <a className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="/about">
                  <span className="material-symbols-outlined text-[20px]">share</span>
                </a>
              </div>
              <p className="text-body-sm text-on-surface-variant">© 2024 BOOT Civic Operating System. All Rights Reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
