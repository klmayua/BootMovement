import React from 'react';

export default function PolicyDiscussionsPage() {
  return (
    <div className="bg-surface font-body-md text-on-surface">
      {/* Side Navigation Shell */}
      <aside className="fixed left-0 top-0 h-screen w-64 bg-surface-container-low dark:bg-on-background border-r border-outline-variant/30 flex flex-col py-8 px-4 z-50">
        <div className="mb-12 px-2">
          <h1 className="font-headline-sm text-headline-sm text-primary dark:text-primary-fixed-dim font-bold">BOOT OS</h1>
          <p className="font-label-md text-label-md text-on-surface-variant">Civic Dashboard</p>
        </div>
        <nav className="flex-grow space-y-1">
          <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container transition-all duration-300 hover:translate-x-1 rounded-lg" href="#">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="font-label-lg">Dashboard</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-primary dark:text-primary-fixed-dim font-bold bg-primary-fixed/20 dark:bg-primary-container/30 rounded-lg translate-x-1" href="#">
            <span className="material-symbols-outlined">groups</span>
            <span className="font-label-lg">Communities</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container transition-all duration-300 hover:translate-x-1 rounded-lg" href="#">
            <span className="material-symbols-outlined">event</span>
            <span className="font-label-lg">Events</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container transition-all duration-300 hover:translate-x-1 rounded-lg" href="#">
            <span className="material-symbols-outlined">assignment</span>
            <span className="font-label-lg">Projects</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container transition-all duration-300 hover:translate-x-1 rounded-lg" href="#">
            <span className="material-symbols-outlined">monitoring</span>
            <span className="font-label-lg">Analytics</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container transition-all duration-300 hover:translate-x-1 rounded-lg" href="#">
            <span className="material-symbols-outlined">settings</span>
            <span className="font-label-lg">Settings</span>
          </a>
        </nav>
        <div className="mt-auto pt-8 border-t border-outline-variant/30 space-y-1">
          <button className="w-full bg-secondary text-on-secondary py-3 rounded-lg font-label-lg mb-6 active:opacity-80 transition-all">
            Donate Now
          </button>
          <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container transition-all rounded-lg" href="#">
            <span className="material-symbols-outlined">help</span>
            <span className="font-label-lg">Support</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container transition-all rounded-lg" href="#">
            <span className="material-symbols-outlined">logout</span>
            <span className="font-label-lg">Logout</span>
          </a>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="ml-64 min-h-screen flex flex-col">
        {/* TopAppBar */}
        <header className="w-full sticky top-0 z-40 bg-surface border-b border-outline-variant/30 flex justify-between items-center px-margin-desktop py-4">
          <div className="flex items-center gap-4">
            <span className="font-headline-sm text-headline-sm font-bold text-primary">Policy Discussions</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative hidden lg:block">
              <input className="bg-surface-container-low border border-outline-variant/30 rounded-full px-6 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-primary/20 font-body-sm" placeholder="Search proposals..." type="text" />
              <span className="material-symbols-outlined absolute right-4 top-2 text-on-surface-variant">search</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-primary cursor-pointer hover:bg-surface-container-low p-2 rounded-full transition-colors">notifications</span>
              <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary font-bold overflow-hidden cursor-pointer active:opacity-80 transition-all">
                <img alt="User profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCK5GTkfyZK_ue4rvYFqxAuDX3IteFCG1KaxbD_X7wuJsTNz9Q_75sdReXlH4r3tn1QsSq-b_iDcNzzzRePneArhrrOIjxrDmc5qidAW4GdAr_lx-QE5wqxBHLbPXGjWrmTZZZ6GfE-eFwRWCv_DU0_NJSxfz6bOnlsjI0Q0oHcYqs4DdSkjyZ9A1rMhipBaQzyM3Xfj9eFmdQvtOb3iKDC74WsBTp6iWyanAkmXMG5XjECcuecakdvZUNWMA875Ykn1iyzqqcOYLR1" />
              </div>
            </div>
          </div>
        </header>

        {/* Content Canvas */}
        <div className="px-margin-desktop py-12 max-w-container-max w-full mx-auto">
          {/* Hero Banner / Breadcrumbs */}
          <section className="mb-12">
            <div className="flex items-center gap-2 text-label-md text-on-surface-variant mb-4">
              <span>Communities</span>
              <span className="material-symbols-outlined text-sm">chevron_right</span>
              <span className="text-primary font-semibold">Policy Discussions</span>
            </div>
            <h2 className="font-display-lg text-display-lg text-primary mb-4">Shaping Tomorrow's Governance</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              Join a community of dedicated citizens and experts to debate, refine, and vote on legislative proposals that define our future.
            </p>
          </section>

          {/* Categories Bento Grid */}
          <section className="grid grid-cols-12 gap-gutter mb-16">
            <div className="col-span-12 md:col-span-8 bg-primary-container text-on-primary p-12 rounded-xl relative overflow-hidden group cursor-pointer transition-all hover:shadow-xl">
              <div className="relative z-10">
                <span className="bg-on-primary-fixed-variant px-3 py-1 rounded text-label-md uppercase tracking-wider mb-6 inline-block">Active Debate</span>
                <h3 className="font-headline-lg text-headline-lg mb-4">Economic Revival Act 2025</h3>
                <p className="font-body-md opacity-90 mb-8 max-w-md">Proposing new frameworks for localized manufacturing tax credits and sustainable infrastructure funding across state lines.</p>
                <div className="flex gap-4">
                  <button className="bg-secondary text-on-secondary px-8 py-3 rounded-lg font-label-lg transition-transform active:scale-95">Read Proposal</button>
                  <button className="border border-white/30 hover:bg-white/10 px-8 py-3 rounded-lg font-label-lg transition-colors">Join Thread</button>
                </div>
              </div>
              <div className="absolute right-[-10%] top-[-10%] w-96 h-96 bg-primary-fixed-dim/10 rounded-full blur-3xl group-hover:bg-primary-fixed-dim/20 transition-all duration-700"></div>
              <div className="absolute bottom-12 right-12 opacity-30">
                <span className="material-symbols-outlined text-[120px]" style={{ fontVariationSettings: "'wght' 200" }}>payments</span>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 grid grid-rows-2 gap-gutter">
              <div className="bg-surface-container-low border border-outline-variant/30 p-8 rounded-xl hover:bg-surface-container-high transition-all cursor-pointer group">
                <div className="flex justify-between items-start mb-4">
                  <span className="material-symbols-outlined text-primary text-4xl group-hover:scale-110 transition-transform">security</span>
                  <span className="text-label-md text-on-surface-variant">24 Active Threads</span>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-primary mb-2">National Security</h4>
                <p className="font-body-sm text-on-surface-variant">Modernizing digital defense protocols and neighborhood safety initiatives.</p>
              </div>
              <div className="bg-surface-container-low border border-outline-variant/30 p-8 rounded-xl hover:bg-surface-container-high transition-all cursor-pointer group">
                <div className="flex justify-between items-start mb-4">
                  <span className="material-symbols-outlined text-primary text-4xl group-hover:scale-110 transition-transform">school</span>
                  <span className="text-label-md text-on-surface-variant">18 Active Threads</span>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-primary mb-2">Education Reform</h4>
                <p className="font-body-sm text-on-surface-variant">Reimagining vocational training and early childhood development accessibility.</p>
              </div>
            </div>
          </section>

          {/* Main Discussion Area */}
          <div className="flex flex-col lg:flex-row gap-gutter">
            <div className="flex-grow space-y-6">
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-headline-md text-headline-md text-primary">Recent Proposals</h3>
                <div className="flex items-center gap-2">
                  <span className="text-label-md text-on-surface-variant">Sort by:</span>
                  <select className="bg-transparent border-none font-label-md text-primary focus:ring-0 cursor-pointer">
                    <option>Most Active</option>
                    <option>Newest</option>
                    <option>Highest Impact</option>
                  </select>
                </div>
              </div>
              <article className="bg-white border border-outline-variant/20 p-8 rounded-xl hover:border-primary/30 transition-all duration-300">
                <div className="flex gap-6">
                  <div className="flex flex-col items-center gap-1 min-w-[48px]">
                    <button className="text-on-surface-variant hover:text-primary transition-colors">
                      <span className="material-symbols-outlined">expand_less</span>
                    </button>
                    <span className="font-label-lg text-primary">432</span>
                    <button className="text-on-surface-variant hover:text-error transition-colors">
                      <span className="material-symbols-outlined">expand_more</span>
                    </button>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-surface-container px-3 py-1 rounded-full text-label-md text-primary-container font-semibold">Healthcare</span>
                      <span className="text-label-md text-on-surface-variant">Posted by <strong className="text-on-surface">Dr. Elena Vance</strong> • 4h ago</span>
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-primary mb-3 hover:underline cursor-pointer">Expansion of Rural Telehealth Infrastructure</h4>
                    <p className="font-body-md text-on-surface-variant mb-6 line-clamp-2">
                      This proposal seeks to allocate emergency funding for satellite-based healthcare delivery in regions with zero high-speed fiber access...
                    </p>
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2 text-on-surface-variant hover:text-primary cursor-pointer transition-colors">
                        <span className="material-symbols-outlined text-sm">chat_bubble</span>
                        <span className="text-label-md">156 Comments</span>
                      </div>
                      <div className="flex items-center gap-2 text-on-surface-variant hover:text-primary cursor-pointer transition-colors">
                        <span className="material-symbols-outlined text-sm">share</span>
                        <span className="text-label-md">Share</span>
                      </div>
                      <div className="flex items-center gap-2 text-on-surface-variant hover:text-primary cursor-pointer transition-colors">
                        <span className="material-symbols-outlined text-sm">bookmark</span>
                        <span className="text-label-md">Save</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <article className="bg-white border border-outline-variant/20 p-8 rounded-xl hover:border-primary/30 transition-all duration-300">
                <div className="flex gap-6">
                  <div className="flex flex-col items-center gap-1 min-w-[48px]">
                    <button className="text-on-surface-variant hover:text-primary transition-colors">
                      <span className="material-symbols-outlined">expand_less</span>
                    </button>
                    <span className="font-label-lg text-primary">1.2k</span>
                    <button className="text-on-surface-variant hover:text-error transition-colors">
                      <span className="material-symbols-outlined">expand_more</span>
                    </button>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-surface-container px-3 py-1 rounded-full text-label-md text-primary-container font-semibold">Environment</span>
                      <span className="text-label-md text-on-surface-variant">Posted by <strong className="text-on-surface">Civic_Action_Network</strong> • 1d ago</span>
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-primary mb-3 hover:underline cursor-pointer">The Great Forest Initiative: Reforestation Mandates</h4>
                    <p className="font-body-md text-on-surface-variant mb-6 line-clamp-2">
                      Mandatory 15% green coverage for all new industrial zoning applications to combat urban heat islands and preserve biodiversity...
                    </p>
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2 text-on-surface-variant hover:text-primary cursor-pointer transition-colors">
                        <span className="material-symbols-outlined text-sm">chat_bubble</span>
                        <span className="text-label-md">2.4k Comments</span>
                      </div>
                      <div className="flex items-center gap-2 text-on-surface-variant hover:text-primary cursor-pointer transition-colors">
                        <span className="material-symbols-outlined text-sm">share</span>
                        <span className="text-label-md">Share</span>
                      </div>
                      <div className="flex items-center gap-2 text-on-surface-variant hover:text-primary cursor-pointer transition-colors">
                        <span className="material-symbols-outlined text-sm">bookmark</span>
                        <span className="text-label-md">Save</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <aside className="w-full lg:w-80 space-y-gutter">
              <button className="w-full bg-primary text-on-primary py-4 rounded-xl font-headline-sm text-headline-sm shadow-lg hover:shadow-xl transition-all active:scale-95 flex items-center justify-center gap-3">
                <span className="material-symbols-outlined">add_comment</span>
                Start Proposal
              </button>
              <div className="bg-surface-container-low rounded-xl border border-outline-variant/30 p-6">
                <h5 className="font-headline-sm text-headline-sm text-primary mb-6">Trending Policies</h5>
                <ul className="space-y-4">
                  <li className="flex items-center justify-between group cursor-pointer">
                    <div>
                      <p className="font-label-lg text-primary group-hover:underline">#CleanWaterAct</p>
                      <p className="font-label-md text-on-surface-variant">2.1k discussions</p>
                    </div>
                    <span className="material-symbols-outlined text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity">trending_up</span>
                  </li>
                  <li className="flex items-center justify-between group cursor-pointer">
                    <div>
                      <p className="font-label-lg text-primary group-hover:underline">#AI_Regulation</p>
                      <p className="font-label-md text-on-surface-variant">1.8k discussions</p>
                    </div>
                    <span className="material-symbols-outlined text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity">trending_up</span>
                  </li>
                </ul>
                <button className="w-full mt-8 text-primary font-label-lg hover:bg-primary/5 py-2 rounded transition-colors">View All Topics</button>
              </div>
              <div className="bg-white border border-outline-variant/30 rounded-xl p-6 relative overflow-hidden">
                <h5 className="font-label-lg text-primary mb-4">Quarterly Goal: Policy Adoption</h5>
                <div className="h-4 bg-tertiary-fixed rounded-full overflow-hidden mb-3">
                  <div className="h-full bg-secondary w-3/4 rounded-full"></div>
                </div>
                <div className="flex justify-between items-center text-label-md mb-6">
                  <span className="text-on-surface-variant">15/20 Policies Passed</span>
                  <span className="text-secondary font-bold">75%</span>
                </div>
                <p className="font-body-sm text-on-surface-variant italic">
                  "Every debate brings us one step closer to a more stable future."
                </p>
                <div className="absolute -right-4 -bottom-4 opacity-10">
                  <span className="material-symbols-outlined text-[100px] text-tertiary">diamond</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
        <footer className="mt-auto bg-surface-container-highest border-t border-outline-variant/30 py-16">
          <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter">
            <div className="col-span-1 md:col-span-1">
              <h4 className="font-headline-sm text-headline-sm text-primary font-bold mb-4">BOOT Civic OS</h4>
              <p className="font-body-sm text-on-surface-variant mb-6">Building a visionary tradition through digital collective action and institutional stability.</p>
            </div>
            <div>
              <h5 className="font-label-lg text-label-lg text-primary mb-6">Resources</h5>
              <ul className="space-y-4">
                <li><a className="font-body-sm text-on-surface-variant hover:text-primary underline transition-all" href="#">Transparency Report</a></li>
                <li><a className="font-body-sm text-on-surface-variant hover:text-primary underline transition-all" href="#">Contact Us</a></li>
                <li><a className="font-body-sm text-on-surface-variant hover:text-primary underline transition-all" href="#">Civic Handbook</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-label-lg text-label-lg text-primary mb-6">Legal</h5>
              <ul className="space-y-4">
                <li><a className="font-body-sm text-on-surface-variant hover:text-primary underline transition-all" href="#">Privacy Policy</a></li>
                <li><a className="font-body-sm text-on-surface-variant hover:text-primary underline transition-all" href="#">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-label-lg text-label-lg text-primary mb-6">Newsletter</h5>
              <div className="flex gap-2">
                <input className="bg-surface border border-outline-variant/30 rounded px-4 py-2 w-full focus:ring-1 focus:ring-primary outline-none text-body-sm" placeholder="Enter email" type="email" />
                <button className="bg-primary text-on-primary px-4 py-2 rounded font-label-md">Join</button>
              </div>
            </div>
          </div>
          <div className="max-w-container-max mx-auto px-margin-desktop mt-12 pt-8 border-t border-outline-variant/10 text-center">
            <p className="font-label-md text-label-md text-on-surface-variant">© 2024 BOOT Civic Operating System. All Rights Reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
