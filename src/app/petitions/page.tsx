import React from 'react';

export default function PetitionsPage() {
  return (
    <div className="bg-background text-on-surface font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed">
      {/* Side Navigation Shell */}
      <nav className="fixed left-0 top-0 h-screen w-64 bg-surface-container-low border-r border-outline-variant/30 flex flex-col py-8 px-4 z-50">
        <div className="mb-12 px-2">
          <h1 className="font-headline-sm text-headline-sm text-primary font-bold">BOOT OS</h1>
          <p className="font-label-md text-label-md text-on-surface-variant">Civic Dashboard</p>
        </div>
        <div className="flex-grow space-y-2">
<a className="flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:bg-surface-container hover:translate-x-1 transition-all duration-300 rounded-lg group" href="/citizen/dashboard">
             <span className="material-symbols-outlined group-hover:text-primary">dashboard</span>
             <span className="font-label-lg text-label-lg">Dashboard</span>
           </a>
<a className="flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:bg-surface-container hover:translate-x-1 transition-all duration-300 rounded-lg group" href="/my-communities">
             <span className="material-symbols-outlined group-hover:text-primary">groups</span>
             <span className="font-label-lg text-label-lg">Communities</span>
           </a>
          <a className="flex items-center gap-4 px-4 py-3 text-primary font-bold bg-primary-fixed/20 rounded-lg group" href="/projects">
            <span className="material-symbols-outlined">assignment</span>
            <span className="font-label-lg text-label-lg">Projects</span>
          </a>
<a className="flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:bg-surface-container hover:translate-x-1 transition-all duration-300 rounded-lg group" href="/events">
             <span className="material-symbols-outlined group-hover:text-primary">event</span>
             <span className="font-label-lg text-label-lg">Events</span>
           </a>
<a className="flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:bg-surface-container hover:translate-x-1 transition-all duration-300 rounded-lg group" href="/my-impact">
             <span className="material-symbols-outlined group-hover:text-primary">monitoring</span>
             <span className="font-label-lg text-label-lg">Analytics</span>
           </a>
<a className="flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:bg-surface-container hover:translate-x-1 transition-all duration-300 rounded-lg group" href="/citizen/settings">
             <span className="material-symbols-outlined group-hover:text-primary">settings</span>
             <span className="font-label-lg text-label-lg">Settings</span>
           </a>
        </div>
        <button className="mt-auto bg-secondary text-on-secondary py-4 px-6 rounded-lg font-label-lg text-label-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 mb-8">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>volunteer_activism</span>
          Donate Now
        </button>
        <div className="border-t border-outline-variant/30 pt-6 space-y-2">
          <a className="flex items-center gap-4 px-4 py-2 text-on-surface-variant hover:text-primary transition-colors" href="/contact">
            <span className="material-symbols-outlined">help</span>
            <span className="font-label-md text-label-md">Support</span>
          </a>
          <a className="flex items-center gap-4 px-4 py-2 text-on-surface-variant hover:text-error transition-colors" href="/auth/login">
            <span className="material-symbols-outlined">logout</span>
            <span className="font-label-md text-label-md">Logout</span>
          </a>
        </div>
      </nav>
      {/* Main Content Canvas */}
      <main className="ml-64 min-h-screen">
        {/* Top App Bar */}
        <header className="w-full sticky top-0 z-40 bg-surface border-b border-outline-variant/30 flex justify-between items-center px-margin-desktop py-4">
          <div className="flex items-center gap-4">
            <h2 className="font-headline-sm text-headline-sm font-bold text-primary">Petitions</h2>
            <div className="h-6 w-px bg-outline-variant/50"></div>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-primary-fixed/30 text-primary rounded-full font-label-md text-label-md">Active: 1,248</span>
              <span className="px-3 py-1 bg-tertiary-fixed/30 text-tertiary rounded-full font-label-md text-label-md">Success: 84</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative group">
              <input className="pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant/30 rounded-full text-body-sm w-64 focus:outline-none focus:border-primary transition-all" placeholder="Search initiatives..." type="text" />
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
            </div>
            <div className="flex items-center gap-4 text-on-surface-variant">
              <button className="hover:bg-surface-container-low p-2 rounded-full transition-colors relative">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-2 right-2 w-2 h-2 bg-secondary rounded-full"></span>
              </button>
              <button className="hover:bg-surface-container-low p-2 rounded-full transition-colors">
                <span className="material-symbols-outlined">account_circle</span>
              </button>
            </div>
          </div>
        </header>
        {/* Hero Section / Featured Petition */}
        <section className="px-margin-desktop pt-12 pb-16">
          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden flex shadow-sm">
            <div className="w-1/2 relative group">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBS02lRQa6YgjRwo48c__GbEgWQlA8eoWtILRLBb4uM29KM-Y7OdGLRP1hD2xk0Zjte4h7DKu1k3nnPMN9HJ2hlZQQ8CVWv8z8mvM1AwvIV6AEypXLQVLuJVOrLFqigzvBFxgcGVgyPZ7EVHHKcswnItRKbqEFqohcrYpUh0MPoLL1qpp9rWf4KF6LiTyRWV2_sxqQDK33bulkELYGEX0oWEgBu1ixTyFsX0_1mLBfXdYPJOdDCESqpKRbJqDGzQiK9TFl_kKC2ehO-" alt="Government building" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface-container-lowest/80"></div>
            </div>
            <div className="w-1/2 p-12 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-secondary text-on-secondary px-3 py-1 rounded font-label-lg text-label-lg">TRENDING NOW</span>
                <span className="text-on-surface-variant font-label-lg text-label-lg">National Policy</span>
              </div>
              <h3 className="font-headline-lg text-headline-lg mb-4 text-primary leading-tight">The Green Urbanism Act of 2024</h3>
              <p className="text-body-lg text-on-surface-variant mb-8 max-w-lg">Mandating 30% canopy coverage in metropolitan industrial zones to combat urban heat islands and restore local biodiversity by 2030.</p>
              <div className="mb-8">
                <div className="flex justify-between items-end mb-2">
                  <span className="font-headline-sm text-headline-sm text-secondary">428,192 <span className="text-body-sm font-normal text-on-surface-variant">signatures</span></span>
                  <span className="font-label-lg text-label-lg text-on-surface-variant">Target: 500,000</span>
                </div>
                <div className="w-full h-3 bg-tertiary-fixed rounded-full overflow-hidden">
                  <div className="h-full bg-secondary transition-all duration-1000 ease-out" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="flex gap-4">
                <button className="bg-primary text-on-primary px-8 py-4 rounded font-label-lg text-label-lg hover:opacity-90 transition-all flex items-center gap-2">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>edit_note</span>
                  Sign This Petition
                </button>
                <button className="border border-primary text-primary px-8 py-4 rounded font-label-lg text-label-lg hover:bg-primary/5 transition-all">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Main Petition Grid */}
        <section className="px-margin-desktop pb-24 grid grid-cols-12 gap-gutter">
          {/* Filters Sidebar */}
          <aside className="col-span-3 space-y-8">
            <div>
              <h4 className="font-label-lg text-label-lg text-primary mb-4 border-b border-outline-variant/30 pb-2">CATEGORIES</h4>
              <ul className="space-y-3">
                <li><label className="flex items-center gap-3 cursor-pointer group"><input className="rounded border-outline-variant text-primary focus:ring-primary h-5 w-5" type="checkbox" /><span className="text-body-md group-hover:text-primary transition-colors">Environment</span></label></li>
                <li><label className="flex items-center gap-3 cursor-pointer group"><input checked readOnly className="rounded border-outline-variant text-primary focus:ring-primary h-5 w-5" type="checkbox" /><span className="text-body-md group-hover:text-primary transition-colors">Civil Rights</span></label></li>
                <li><label className="flex items-center gap-3 cursor-pointer group"><input className="rounded border-outline-variant text-primary focus:ring-primary h-5 w-5" type="checkbox" /><span className="text-body-md group-hover:text-primary transition-colors">Economy</span></label></li>
                <li><label className="flex items-center gap-3 cursor-pointer group"><input className="rounded border-outline-variant text-primary focus:ring-primary h-5 w-5" type="checkbox" /><span className="text-body-md group-hover:text-primary transition-colors">Education</span></label></li>
                <li><label className="flex items-center gap-3 cursor-pointer group"><input className="rounded border-outline-variant text-primary focus:ring-primary h-5 w-5" type="checkbox" /><span className="text-body-md group-hover:text-primary transition-colors">Healthcare</span></label></li>
              </ul>
            </div>
            <div className="bg-primary-container p-6 rounded-xl text-on-primary">
              <h4 className="font-headline-sm text-headline-sm mb-2">Start a Movement</h4>
              <p className="text-body-sm mb-6 opacity-80">Got a policy change in mind? Draft your petition and reach thousands of verified citizens today.</p>
              <button className="w-full bg-primary-fixed text-on-primary-fixed py-3 rounded font-label-lg text-label-lg hover:bg-white transition-colors">Create Petition</button>
            </div>
            <div className="p-6 border border-outline-variant/30 rounded-xl bg-surface-container-low">
              <h4 className="font-label-lg text-label-lg text-primary mb-4 uppercase tracking-widest">Recent Successes</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-on-secondary-fixed-variant" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <div>
                    <p className="text-body-sm font-bold">Local School Funding Reform</p>
                    <p className="text-label-md text-on-surface-variant">Passed in District 4</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-on-secondary-fixed-variant" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <div>
                    <p className="text-body-sm font-bold">Plastic Bag Ban</p>
                    <p className="text-label-md text-on-surface-variant">Implemented City-wide</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
          {/* Main Listing */}
          <div className="col-span-9 space-y-gutter">
            <div className="flex justify-between items-center mb-6">
              <div className="flex gap-4">
                <button className="px-4 py-2 bg-primary text-on-primary rounded font-label-md text-label-md">Trending</button>
                <button className="px-4 py-2 text-on-surface-variant hover:bg-surface-container-low rounded font-label-md text-label-md transition-colors">Most Recent</button>
                <button className="px-4 py-2 text-on-surface-variant hover:bg-surface-container-low rounded font-label-md text-label-md transition-colors">Near Me</button>
              </div>
              <p className="text-label-md text-on-surface-variant">Showing 1,248 active initiatives</p>
            </div>
            <div className="grid grid-cols-2 gap-gutter">
              {/* Card 1 */}
              <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
                <div className="flex justify-between items-start mb-4">
                  <span className="px-2 py-1 bg-surface-container-high rounded text-label-md font-label-md text-on-surface-variant">CIVIL RIGHTS</span>
                  <button className="text-on-surface-variant hover:text-secondary transition-colors"><span className="material-symbols-outlined">bookmark</span></button>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-primary mb-3 group-hover:text-secondary transition-colors">Digital Privacy Protection Act</h4>
                <p className="text-body-md text-on-surface-variant mb-6 line-clamp-2">Ensuring citizens have the absolute right to data portability and deletion across all government-affiliated platforms.</p>
                <div className="space-y-3">
                  <div className="flex justify-between text-label-md">
                    <span className="font-bold text-secondary">89,203 signed</span>
                    <span className="text-on-surface-variant">Goal: 100k</span>
                  </div>
                  <div className="w-full h-1.5 bg-outline-variant/20 rounded-full overflow-hidden">
                    <div className="h-full bg-secondary w-[89%]"></div>
                  </div>
                </div>
              </div>
              {/* Card 2 */}
              <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
                <div className="flex justify-between items-start mb-4">
                  <span className="px-2 py-1 bg-surface-container-high rounded text-label-md font-label-md text-on-surface-variant">ECONOMY</span>
                  <button className="text-on-surface-variant hover:text-secondary transition-colors"><span className="material-symbols-outlined">bookmark</span></button>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-primary mb-3 group-hover:text-secondary transition-colors">Small Business Subsidy Program</h4>
                <p className="text-body-md text-on-surface-variant mb-6 line-clamp-2">Providing direct financial grants for local hardware stores and artisan markets affected by recent supply chain disruptions.</p>
                <div className="space-y-3">
                  <div className="flex justify-between text-label-md">
                    <span className="font-bold text-secondary">12,450 signed</span>
                    <span className="text-on-surface-variant">Goal: 20k</span>
                  </div>
                  <div className="w-full h-1.5 bg-outline-variant/20 rounded-full overflow-hidden">
                    <div className="h-full bg-secondary w-[62%]"></div>
                  </div>
                </div>
              </div>
              {/* Card 3 (Large) */}
              <div className="col-span-2 bg-surface-container-low border border-outline-variant/30 rounded-xl p-8 flex items-center gap-8 group">
                <div className="w-1/3 aspect-video rounded-lg overflow-hidden relative">
                  <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCL749nZVRys7Txl4kolL8C_4avtwHpa5suro_eHyz7SOzyLptnExDY0YhXbrFkKihBThOMScyhSphkUcF4luBah8_9IaqCL4UMKU2W7abHwzj9JpBcmFUC4fy0N_EQi6_RmNFEwiyhA5jVO5zkCPNrbtA01z9YHpZ0WEnpCWWxj-Nmshuy75pIkf0Iw6goPKeCn0O6eZdX-vamIFZhAuZvz3X5iIN2XH2ijWVuxXXkicyTnpDlJrXc5ciQ1XsOH6pjCfKemkQOz2Yv" alt="Collaborative action" />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-secondary text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>trending_up</span>
                    <span className="text-label-md font-label-md text-secondary">GROWING FAST</span>
                  </div>
                  <h4 className="font-headline-md text-headline-md text-primary mb-2">Neighborhood Safety Initiative</h4>
                  <p className="text-body-md text-on-surface-variant mb-6">A community-led project to install solar-powered street lighting and pedestrian-safe crosswalks in every major school zone.</p>
                  <div className="flex items-center gap-6">
                    <div className="flex -space-x-3">
                      <div className="w-8 h-8 rounded-full border-2 border-surface bg-gray-200"></div>
                      <div className="w-8 h-8 rounded-full border-2 border-surface bg-gray-300"></div>
                      <div className="w-8 h-8 rounded-full border-2 border-surface bg-gray-400"></div>
                      <div className="w-8 h-8 rounded-full border-2 border-surface bg-primary flex items-center justify-center text-[10px] text-white font-bold">+4k</div>
                    </div>
                    <span className="text-label-md text-on-surface-variant">Joined this week</span>
                    <button className="ml-auto bg-primary text-on-primary px-6 py-2 rounded font-label-md text-label-md hover:bg-primary/90 transition-all">Sign Initiative</button>
                  </div>
                </div>
              </div>
              {/* Card 4 */}
              <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
                <div className="flex justify-between items-start mb-4">
                  <span className="px-2 py-1 bg-surface-container-high rounded text-label-md font-label-md text-on-surface-variant">EDUCATION</span>
                  <button className="text-on-surface-variant hover:text-secondary transition-colors"><span className="material-symbols-outlined">bookmark</span></button>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-primary mb-3 group-hover:text-secondary transition-colors">Universal Broadband for Students</h4>
                <p className="text-body-md text-on-surface-variant mb-6 line-clamp-2">Ensuring every K-12 household has reliable high-speed internet to bridge the digital learning divide.</p>
                <div className="space-y-3">
                  <div className="flex justify-between text-label-md">
                    <span className="font-bold text-secondary">45,102 signed</span>
                    <span className="text-on-surface-variant">Goal: 50k</span>
                  </div>
                  <div className="w-full h-1.5 bg-outline-variant/20 rounded-full overflow-hidden">
                    <div className="h-full bg-secondary w-[90%]"></div>
                  </div>
                </div>
              </div>
              {/* Card 5 */}
              <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
                <div className="flex justify-between items-start mb-4">
                  <span className="px-2 py-1 bg-surface-container-high rounded text-label-md font-label-md text-on-surface-variant">HEALTHCARE</span>
                  <button className="text-on-surface-variant hover:text-secondary transition-colors"><span className="material-symbols-outlined">bookmark</span></button>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-primary mb-3 group-hover:text-secondary transition-colors">Mental Health Crisis Response</h4>
                <p className="text-body-md text-on-surface-variant mb-6 line-clamp-2">Establishing a non-police emergency responder unit for mental health-related 911 calls across the state.</p>
                <div className="space-y-3">
                  <div className="flex justify-between text-label-md">
                    <span className="font-bold text-secondary">32,776 signed</span>
                    <span className="text-on-surface-variant">Goal: 40k</span>
                  </div>
                  <div className="w-full h-1.5 bg-outline-variant/20 rounded-full overflow-hidden">
                    <div className="h-full bg-secondary w-[82%]"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 pt-12">
              <button className="w-10 h-10 flex items-center justify-center rounded border border-outline-variant/30 hover:bg-surface-container transition-colors"><span className="material-symbols-outlined">chevron_left</span></button>
              <button className="w-10 h-10 flex items-center justify-center rounded bg-primary text-on-primary font-bold">1</button>
              <button className="w-10 h-10 flex items-center justify-center rounded border border-outline-variant/30 hover:bg-surface-container transition-colors">2</button>
              <button className="w-10 h-10 flex items-center justify-center rounded border border-outline-variant/30 hover:bg-surface-container transition-colors">3</button>
              <span className="px-2">...</span>
              <button className="w-10 h-10 flex items-center justify-center rounded border border-outline-variant/30 hover:bg-surface-container transition-colors">42</button>
              <button className="w-10 h-10 flex items-center justify-center rounded border border-outline-variant/30 hover:bg-surface-container transition-colors"><span className="material-symbols-outlined">chevron_right</span></button>
            </div>
          </div>
        </section>
        {/* Footer Shell */}
        <footer className="w-full py-16 bg-surface-container-highest border-t border-outline-variant/30">
          <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter">
            <div className="space-y-6">
              <h5 className="font-headline-sm text-headline-sm text-primary font-bold">BOOT Civic OS</h5>
              <p className="font-body-sm text-body-sm text-on-surface-variant">A decentralized platform empowering citizens to lead, collaborate, and enact meaningful policy change through verified collective action.</p>
            </div>
            <div className="space-y-4">
              <h6 className="font-label-lg text-label-lg text-on-surface font-bold uppercase tracking-widest">Navigation</h6>
              <ul className="space-y-2">
                <li><a className="text-body-sm text-on-surface-variant hover:text-primary hover:underline transition-all" href="/citizen/dashboard">Dashboards</a></li>
                <li><a className="text-body-sm text-on-surface-variant hover:text-primary hover:underline transition-all" href="/petitions">Public Initiatives</a></li>
                <li><a className="text-body-sm text-on-surface-variant hover:text-primary hover:underline transition-all" href="/my-communities">Local Councils</a></li>
                <li><a className="text-body-sm text-on-surface-variant hover:text-primary hover:underline transition-all" href="/my-impact">Impact Reports</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h6 className="font-label-lg text-label-lg text-on-surface font-bold uppercase tracking-widest">Resources</h6>
              <ul className="space-y-2">
                <li><a className="text-body-sm text-on-surface-variant hover:text-primary hover:underline transition-all" href="/about">Privacy Policy</a></li>
                <li><a className="text-body-sm text-on-surface-variant hover:text-primary hover:underline transition-all" href="/about">Terms of Service</a></li>
                <li><a className="text-body-sm text-on-surface-variant hover:text-primary hover:underline transition-all" href="/manifesto">Transparency Report</a></li>
                <li><a className="text-body-sm text-on-surface-variant hover:text-primary hover:underline transition-all" href="/contact">Contact Us</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h6 className="font-label-lg text-label-lg text-on-surface font-bold uppercase tracking-widest">Stay Updated</h6>
              <div className="flex flex-col gap-3">
                <input className="bg-surface-container-low border border-outline-variant/30 px-4 py-3 rounded text-body-sm focus:outline-none focus:border-primary" placeholder="Email address" type="email" />
                <button className="bg-primary text-on-primary py-3 rounded font-label-md text-label-md">Subscribe to Alerts</button>
              </div>
            </div>
          </div>
          <div className="max-w-container-max mx-auto px-margin-desktop mt-16 pt-8 border-t border-outline-variant/20 text-center">
            <p className="font-label-md text-label-md text-on-surface-variant opacity-70">© 2024 BOOT Civic Operating System. All Rights Reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
