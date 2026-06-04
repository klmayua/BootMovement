import React from 'react';
import Link from 'next/link';

export default function CitizenDashboard() {
  return (
    <div className="font-body-md text-on-background flex h-screen overflow-hidden">
      {/* SIDE NAVIGATION DRAWER */}
      <aside className="hidden md:flex h-full w-80 bg-surface-container-low flex-col p-4 shadow-sm shrink-0">
        <div className="mb-8 px-4 py-2">
          <h1 className="font-headline-sm text-headline-sm text-primary">BOOT Civic Movement</h1>
        </div>
        <nav className="flex flex-col gap-2 flex-grow overflow-y-auto">
          <Link className="active-tab flex items-center gap-3 p-4 transition-all duration-300" href="/citizen/dashboard">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
            <span className="font-label-lg text-label-lg">Home</span>
          </Link>
          <Link className="text-on-surface-variant hover:bg-surface-variant flex items-center gap-3 p-4 transition-all duration-300" href="/about">
            <span className="material-symbols-outlined">info</span>
            <span className="font-label-lg text-label-lg">About</span>
          </Link>
          <Link className="text-on-surface-variant hover:bg-surface-variant flex items-center gap-3 p-4 transition-all duration-300" href="/thesis">
            <span className="material-symbols-outlined">menu_book</span>
            <span className="font-label-lg text-label-lg">Thesis</span>
          </Link>
          <Link className="text-on-surface-variant hover:bg-surface-variant flex items-center gap-3 p-4 transition-all duration-300" href="/communities">
            <span className="material-symbols-outlined">groups</span>
            <span className="font-label-lg text-label-lg">Communities</span>
          </Link>
          <Link className="text-on-surface-variant hover:bg-surface-variant flex items-center gap-3 p-4 transition-all duration-300" href="/events">
            <span className="material-symbols-outlined">event</span>
            <span className="font-label-lg text-label-lg">Events</span>
          </Link>
          <Link className="text-on-surface-variant hover:bg-surface-variant flex items-center gap-3 p-4 transition-all duration-300" href="/candidates">
            <span className="material-symbols-outlined">person_search</span>
            <span className="font-label-lg text-label-lg">Candidates</span>
          </Link>
          <Link className="text-on-surface-variant hover:bg-surface-variant flex items-center gap-3 p-4 transition-all duration-300" href="/impact">
            <span className="material-symbols-outlined">analytics</span>
            <span className="font-label-lg text-label-lg">Impact Hub</span>
          </Link>
        </nav>
        <div className="mt-auto pt-6 border-t border-outline-variant/30 px-4">
          <div className="flex items-center gap-3">
            <img 
              alt="User Profile" 
              className="w-10 h-10 rounded-full border border-primary/20" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHwDjfhdBoq7UPphJb5NIujU3CbeLGtOkKm1SQoYdDpEoBcvwlMFIhPMWUcFGVu-mWR63g7Md_rVrSjmClCPZEsaO8BO7r8KUsG2Wwr3z_cQocigJ-rEiRiHLYKjT4Dbwigf1UZxePezzCNqmuSTS5hPw0p5v_i7kTDrO6HC-QOsPMkI63tr9Bkgf5yeqXkDXR_K8a5ddSYjmr-_Wb0ixzihDJmilRwkJLtqxdii9BJl7LAr_fWIefRz4-m2aGp1G3kUn0xQc2pH9n"
            />
            <div>
              <p className="font-label-lg text-label-lg text-primary">Dr. Chinedu Okafor</p>
              <p className="font-label-md text-label-md text-on-surface-variant">Lagos Central Chapter</p>
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-grow overflow-y-auto bg-surface-bright relative">
        {/* TopAppBar */}
        <header className="w-full top-0 sticky bg-surface border-b border-outline-variant/30 z-20">
          <div className="flex justify-between items-center max-w-container-max mx-auto px-margin-desktop py-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-2xl">account_balance</span>
              <span className="font-headline-md text-headline-md text-primary">BOOT Dashboard</span>
            </div>
            <div className="flex items-center gap-6">
              <div className="hidden lg:flex items-center gap-6">
                 <Link className="text-secondary border-b-2 border-secondary font-label-lg text-label-lg transition-colors duration-200" href="/citizen/dashboard">Activity</Link>
                 <Link className="text-on-surface-variant hover:text-secondary font-label-lg text-label-lg transition-colors duration-200" href="/learning">Resources</Link>
                 <Link className="text-on-surface-variant hover:text-secondary font-label-lg text-label-lg transition-colors duration-200" href="/contact">Support</Link>
              </div>
              <button className="bg-secondary text-white px-6 py-2 rounded shadow-sm hover:opacity-90 transition-all font-label-lg">Join Now</button>
            </div>
          </div>
        </header>

        <div className="max-w-container-max mx-auto px-margin-desktop py-12">
          {/* Hero Grid */}
          <div className="grid grid-cols-12 gap-gutter">
            {/* PROGRESS SECTION: Gamified Progress Ring */}
            <div className="col-span-12 lg:col-span-4 bento-card p-8 rounded-xl flex flex-col items-center justify-center text-center">
              <h3 className="font-headline-sm text-headline-sm text-primary mb-6">'True Nigerian' Score</h3>
              <div className="relative flex items-center justify-center">
                <svg className="w-48 h-48">
                  <circle className="text-surface-variant" cx="96" cy="96" fill="transparent" r="80" stroke="currentColor" strokeWidth="12"></circle>
                  <circle 
                    className="text-secondary progress-ring-circle" 
                    cx="96" cy="96" fill="transparent" r="80" 
                    stroke="currentColor" 
                    strokeDasharray="502.65" 
                    strokeDashoffset="125.66" 
                    strokeLinecap="round" 
                    strokeWidth="12"
                  ></circle>
                </svg>
                <div className="absolute flex flex-col">
                  <span className="font-display-lg text-display-lg text-primary">75%</span>
                  <span className="font-label-md text-label-md text-on-tertiary-container uppercase tracking-widest">Patriot Tier</span>
                </div>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-6 px-4">
                You've contributed 12 volunteer hours this month. 3 more hours to reach <span className="text-secondary font-bold">Statesman</span> rank.
              </p>
            </div>

            {/* CONTRIBUTION CHART */}
            <div className="col-span-12 lg:col-span-8 bento-card p-8 rounded-xl">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-primary">Impact Trajectory</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Cumulative monthly contribution points</p>
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-primary-container text-on-primary-container font-label-md text-label-md rounded">Points: 2,450</span>
                </div>
              </div>
              {/* Mock Chart Visualization */}
              <div className="h-48 w-full flex items-end gap-2 px-2">
                <div className="flex-1 bg-surface-container hover:bg-primary-container transition-colors h-[20%] rounded-t-sm" title="Jan"></div>
                <div className="flex-1 bg-surface-container hover:bg-primary-container transition-colors h-[35%] rounded-t-sm" title="Feb"></div>
                <div className="flex-1 bg-surface-container hover:bg-primary-container transition-colors h-[45%] rounded-t-sm" title="Mar"></div>
                <div className="flex-1 bg-surface-container hover:bg-primary-container transition-colors h-[30%] rounded-t-sm" title="Apr"></div>
                <div className="flex-1 bg-surface-container hover:bg-primary-container transition-colors h-[65%] rounded-t-sm" title="May"></div>
                <div className="flex-1 bg-surface-container hover:bg-primary-container transition-colors h-[85%] rounded-t-sm" title="Jun"></div>
                <div className="flex-1 bg-secondary h-[95%] rounded-t-sm animate-pulse" title="Current"></div>
              </div>
              <div className="flex justify-between mt-4 font-label-md text-label-md text-on-surface-variant border-t border-outline-variant/30 pt-4">
                <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span>
              </div>
            </div>

            {/* ACTIVE COMMUNITIES GRID */}
            <div className="col-span-12 lg:col-span-8">
              <h3 className="font-headline-sm text-headline-sm text-primary mb-6">Your Communities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                {/* Community Card 1 */}
                <div className="bento-card rounded-xl overflow-hidden group">
                  <div className="h-32 w-full relative overflow-hidden bg-primary-container">
                    <img 
                      className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" 
                      alt="Modern Nigerian tech hub"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKKh2eiIhYVgxRCussLnOO8whgHQysYoLej-HkluVHqbW45k_XTvvlgGWxVnez172jv33i7eI4Skehct70ZwuZ-Jq9OVNbXaqZjCyK1lzI4fcHnlCKMHJIi2xSQ_4L-QhRt10cmhY64JcwPrLhDslw32t9ru3UrrQ7Z8aD7D5XjxAOyDvyDYU4uY62m8TKvGktVGRwMygluMW1lxbq3P3g94ruPD3_pg1pq1CVnkXQK9zWglh68hMpDlaCE7il434gumosmcxq3SzH"
                    />
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-primary font-label-md text-label-md">Public Policy</div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-headline-sm text-headline-sm text-primary mb-2">Policy Reformers</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">Drafting new educational guidelines for 2025.</p>
                    <div className="flex justify-between items-center">
                      <span className="font-label-md text-label-md text-on-surface-variant">42 Active members</span>
                      <button className="text-primary hover:underline font-label-md text-label-md flex items-center gap-1">Open <span className="material-symbols-outlined text-sm">arrow_forward</span></button>
                    </div>
                  </div>
                </div>
                {/* Community Card 2 */}
                <div className="bento-card rounded-xl overflow-hidden group">
                  <div className="h-32 w-full relative overflow-hidden bg-tertiary-container">
                    <img 
                      className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" 
                      alt="Community town hall meeting"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_ka75Qa_ts_QPrf-qQVdnASk2EqNlye-TipBg7B4C4n9Wsayq2vIAb7zN9p_1kfPIGDVzLn0l7jHtyXuXpnrdrW-rY8XEzTV8kRpIZmUEMcWz7KpGI1155W6LxbjZ2md_9tMifQ0pfcZJcgeUAd__Rd5TcpkxxpIj_REcmjoJjVGFp_fIbHx0unCV8KyWgGynhYNH_601uyqZtHtMTZcuIP0FxbRzLj9PhAO1KpJfN692CznugESRFAhI7qVCJJqJWKtrxEVyLjPj"
                    />
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-primary font-label-md text-label-md">Lagos Central</div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-headline-sm text-headline-sm text-primary mb-2">Chapter Mobilizers</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">Coordinating grassroots outreach for the upcoming summit.</p>
                    <div className="flex justify-between items-center">
                      <span className="font-label-md text-label-md text-on-surface-variant">128 Active members</span>
                      <button className="text-primary hover:underline font-label-md text-label-md flex items-center gap-1">Open <span className="material-symbols-outlined text-sm">arrow_forward</span></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RECOMMENDED ACTIONS FEED */}
            <div className="col-span-12 lg:col-span-4 flex flex-col gap-gutter">
              <h3 className="font-headline-sm text-headline-sm text-primary">Recommended Actions</h3>
              <div className="bento-card p-6 rounded-xl flex flex-col gap-4">
                <div className="flex gap-4 items-start p-4 bg-surface-container-low rounded border-l-4 border-secondary hover:bg-surface-container transition-colors cursor-pointer">
                  <div className="bg-secondary/10 p-2 rounded">
                    <span className="material-symbols-outlined text-secondary">verified</span>
                  </div>
                  <div>
                    <h5 className="font-label-lg text-label-lg text-primary">Validate Chapter Records</h5>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Help verify 5 new member registrations in your district.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start p-4 bg-surface-container-low rounded border-l-4 border-primary hover:bg-surface-container transition-colors cursor-pointer">
                  <div className="bg-primary/10 p-2 rounded">
                    <span className="material-symbols-outlined text-primary">edit_note</span>
                  </div>
                  <div>
                    <h5 className="font-label-lg text-label-lg text-primary">Comment on Education Bill</h5>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Your expertise is needed in the 'Vision 2030' forum.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start p-4 bg-surface-container-low rounded border-l-4 border-on-tertiary-container hover:bg-surface-container transition-colors cursor-pointer">
                  <div className="bg-on-tertiary-container/10 p-2 rounded">
                    <span className="material-symbols-outlined text-on-tertiary-container">volunteer_activism</span>
                  </div>
                  <div>
                    <h5 className="font-label-lg text-label-lg text-primary">Donate to Mobilization Fund</h5>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Help us reach the N5,000,000 goal for regional offices.</p>
                  </div>
                </div>
                <button className="mt-4 text-center py-3 border border-outline-variant hover:bg-surface-variant transition-all font-label-lg text-label-lg rounded">View All Actions</button>
              </div>
            </div>

            {/* CALENDAR SECTION */}
            <div className="col-span-12 bento-card p-8 rounded-xl mt-4">
              <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                <h3 className="font-headline-sm text-headline-sm text-primary">Upcoming Movement Events</h3>
                <div className="flex items-center gap-4 bg-surface-container-low p-2 rounded-lg">
                  <button className="p-1 hover:bg-surface-variant rounded"><span className="material-symbols-outlined">chevron_left</span></button>
                  <span className="font-label-lg text-label-lg text-primary px-4">August 2024</span>
                  <button className="p-1 hover:bg-surface-variant rounded"><span className="material-symbols-outlined">chevron_right</span></button>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
                <div className="flex gap-4 items-center p-4 border border-outline-variant/30 rounded-lg hover:border-secondary transition-colors group">
                  <div className="flex flex-col items-center justify-center bg-primary text-white w-16 h-16 rounded shrink-0">
                    <span className="font-label-md text-label-md uppercase">Aug</span>
                    <span className="font-headline-sm text-headline-sm leading-none">12</span>
                  </div>
                  <div>
                    <h5 className="font-label-lg text-label-lg text-primary group-hover:text-secondary transition-colors">National Strategy Summit</h5>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Abuja, FCT • 09:00 AM</p>
                  </div>
                </div>
                <div className="flex gap-4 items-center p-4 border border-outline-variant/30 rounded-lg hover:border-secondary transition-colors group">
                  <div className="flex flex-col items-center justify-center bg-primary text-white w-16 h-16 rounded shrink-0">
                    <span className="font-label-md text-label-md uppercase">Aug</span>
                    <span className="font-headline-sm text-headline-sm leading-none">15</span>
                  </div>
                  <div>
                    <h5 className="font-label-lg text-label-lg text-primary group-hover:text-secondary transition-colors">Grassroots Training</h5>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Virtual Workshop • 06:00 PM</p>
                  </div>
                </div>
                <div className="flex gap-4 items-center p-4 border border-outline-variant/30 rounded-lg hover:border-secondary transition-colors group">
                  <div className="flex flex-col items-center justify-center bg-primary text-white w-16 h-16 rounded shrink-0">
                    <span className="font-label-md text-label-md uppercase">Aug</span>
                    <span className="font-headline-sm text-headline-sm leading-none">22</span>
                  </div>
                  <div>
                    <h5 className="font-label-lg text-label-lg text-primary group-hover:text-secondary transition-colors">Economic Thesis Launch</h5>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Lagos Island • 10:00 AM</p>
                  </div>
                </div>
                <div className="flex gap-4 items-center p-4 border border-outline-variant/30 rounded-lg hover:border-secondary transition-colors group">
                  <div className="flex flex-col items-center justify-center bg-primary text-white w-16 h-16 rounded shrink-0">
                    <span className="font-label-md text-label-md uppercase">Sep</span>
                    <span className="font-headline-sm text-headline-sm leading-none">05</span>
                  </div>
                  <div>
                    <h5 className="font-label-lg text-label-lg text-primary group-hover:text-secondary transition-colors">Regional Town Hall</h5>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Enugu Chapter • 02:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="w-full mt-auto bg-primary text-on-primary">
          <div className="flex flex-col md:flex-row justify-between items-center px-margin-desktop py-12 gap-gutter max-w-container-max mx-auto">
            <div className="flex flex-col gap-2">
              <span className="font-headline-sm text-headline-sm text-on-primary">BOOT Civic Movement</span>
              <p className="font-body-sm text-body-sm opacity-80 max-w-sm">© 2024 BOOT Civic Movement. All Rights Reserved. Built for Accountability.</p>
            </div>
            <div className="flex flex-wrap gap-8">
               <Link className="text-primary-fixed-dim hover:text-white underline font-body-sm text-body-sm transition-colors" href="/about">Privacy Policy</Link>
               <Link className="text-primary-fixed-dim hover:text-white underline font-body-sm text-body-sm transition-colors" href="/about">Terms of Service</Link>
               <Link className="text-primary-fixed-dim hover:text-white underline font-body-sm text-body-sm transition-colors" href="/volunteer/dashboard">Volunteer Portal</Link>
               <Link className="text-primary-fixed-dim hover:text-white underline font-body-sm text-body-sm transition-colors" href="/donate">Donate</Link>
            </div>
          </div>
        </footer>
      </main>

      {/* MOBILE FAB */}
      <button className="fixed bottom-10 right-10 bg-secondary-container text-on-secondary-fixed w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform md:hidden">
        <span className="material-symbols-outlined">add</span>
      </button>
    </div>
  );
}
