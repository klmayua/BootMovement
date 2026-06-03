import React from 'react';

export default function CommunityDetailPage() {
  return (
    <div className="bg-background text-on-surface font-body-md selection:bg-primary-fixed selection:text-primary">
      {/* SideNavBar Shell */}
      <nav className="fixed left-0 top-0 h-screen w-64 bg-surface-container-low border-r border-outline-variant/30 flex flex-col py-8 px-4 z-50">
        <div className="mb-10 px-2">
          <h1 className="font-headline-sm text-headline-sm text-primary font-bold">BOOT OS</h1>
          <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Civic Dashboard</p>
        </div>
        <div className="flex-1 space-y-2">
          <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container transition-all group duration-300 ease-in-out hover:translate-x-1" href="#">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="font-label-lg text-label-lg">Dashboard</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-primary font-bold bg-primary-fixed/20 rounded-lg transition-all group duration-300 ease-in-out hover:translate-x-1" href="#">
            <span className="material-symbols-outlined">groups</span>
            <span className="font-label-lg text-label-lg">Communities</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container transition-all group duration-300 ease-in-out hover:translate-x-1" href="#">
            <span className="material-symbols-outlined">event</span>
            <span className="font-label-lg text-label-lg">Events</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container transition-all group duration-300 ease-in-out hover:translate-x-1" href="#">
            <span className="material-symbols-outlined">assignment</span>
            <span className="font-label-lg text-label-lg">Projects</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container transition-all group duration-300 ease-in-out hover:translate-x-1" href="#">
            <span className="material-symbols-outlined">monitoring</span>
            <span className="font-label-lg text-label-lg">Analytics</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container transition-all group duration-300 ease-in-out hover:translate-x-1" href="#">
            <span className="material-symbols-outlined">settings</span>
            <span className="font-label-lg text-label-lg">Settings</span>
          </a>
        </div>
        <button className="mt-4 mb-8 mx-2 py-3 bg-secondary text-on-secondary rounded-lg font-label-lg text-label-lg hover:opacity-90 transition-opacity">
          Donate Now
        </button>
        <div className="pt-6 border-t border-outline-variant/30 space-y-2">
          <a className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:text-primary transition-colors" href="#">
            <span className="material-symbols-outlined">help</span>
            <span className="font-label-lg text-label-lg">Support</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:text-error transition-colors" href="#">
            <span className="material-symbols-outlined">logout</span>
            <span className="font-label-lg text-label-lg">Logout</span>
          </a>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="ml-64 min-h-screen">
        {/* TopAppBar */}
        <header className="w-full sticky top-0 z-40 bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 flex justify-between items-center px-margin-desktop py-4">
          <div className="flex items-center gap-4">
            <nav className="flex gap-8">
              <a className="text-primary font-bold border-b-2 border-primary py-1" href="#">Chapter Overview</a>
              <a className="text-on-surface-variant hover:bg-surface-container-low transition-colors px-2 py-1" href="#">Directory</a>
              <a className="text-on-surface-variant hover:bg-surface-container-low transition-colors px-2 py-1" href="#">Activity</a>
            </nav>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative group">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
              <input className="pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant/50 rounded-full focus:outline-none focus:border-primary transition-all w-64 font-body-sm text-body-sm" placeholder="Search resources..." type="text" />
            </div>
            <div className="flex gap-4 items-center">
              <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">notifications</button>
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/20">
                <img alt="User profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdfHkf-xTDYT3uWXQL6hD8xqkuCEEhfKpKxEUOUZ1D068wIcOvvmfGaV-SNQyvb5Bjkp_hJ_CxJS0rbmO9cuH6eBTWxcdoNWn4pXIkbJHFCvRaHlHhQ20VclTjfD0DJ0n29Y8J52BZ92IMmapP7e-wh9iHKBk9zKCeLNMbq7kuMPjfTehET9l_rsAnWEOkgbWC2Xf1hXCYAGELXao60kYmY-P6pKX120TdgXjwZT_sWURubc1Fe3kEzACdOBd4mdle1kbbclt6_JPV" />
              </div>
            </div>
          </div>
        </header>

        {/* Community Hero Section */}
        <section className="relative h-[400px] flex items-end overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEn8qAA400mF3HRE0RjMcR_8iPTpt3AYRp2krtneW6ziflYfl_skBW08DJ_kfb-IQAm2CizFGJGJUQnsI2aN0Z2SGnqdpAlRsRwwq9FYOrH4zkRIyvY5SGOdjDsp25GFfKZ31kGb-LQEd-vqjUoPIEmy3xQs2bEOBLT84d8acqG_Z8qZe7MqAp4Lth_vb3VsSJSP7PDXXUjjdcKOgeY9ufykXd5e62jLZiDdZ3nNujGnZ55zhjqaQkudtg9IDZvsc55bRaVBELQkNz" alt="Community Center" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent"></div>
          </div>
          <div className="relative z-10 px-margin-desktop pb-12 w-full flex justify-between items-end">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-secondary px-3 py-1 text-on-secondary font-label-md text-label-md rounded-full uppercase tracking-widest">Premium Chapter</span>
                <span className="text-on-primary-fixed flex items-center gap-1 font-label-md text-label-md">
                  <span className="material-symbols-outlined text-[16px]">location_on</span> Seattle Metropolitan
                </span>
              </div>
              <h2 className="font-display-lg text-display-lg text-white mb-2">Northwest Civic Coalition</h2>
              <p className="text-primary-fixed-dim font-body-lg text-body-lg max-w-2xl">Pioneering sustainable urban development and transparent governance through community-led initiatives in the Pacific Northwest.</p>
            </div>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-surface-bright transition-colors shadow-lg">Join Discussion</button>
              <button className="px-8 py-4 border-2 border-white/50 text-white font-bold rounded-lg hover:bg-white/10 transition-colors">Follow Updates</button>
            </div>
          </div>
        </section>

        {/* Bento Grid Content */}
        <section className="px-margin-desktop py-16">
          <div className="grid grid-cols-12 gap-gutter">
            {/* Active Projects */}
            <div className="col-span-8 space-y-gutter">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-headline-md text-headline-md text-primary">Active Initiatives</h3>
                <a className="text-secondary font-label-lg text-label-lg flex items-center gap-1 hover:underline" href="#">View All Projects <span className="material-symbols-outlined text-[18px]">arrow_forward</span></a>
              </div>
              <div className="grid grid-cols-2 gap-gutter">
                <div className="bg-white border border-outline-variant/30 rounded-xl overflow-hidden transition-all hover:-translate-y-1 hover:shadow-md group">
                  <div className="h-48 overflow-hidden relative">
                    <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0jeOyzeOUCAKdvWQAh13JuTXnnVfGE6DmAQxi6Ed1Gl7Ug1rdy_63HwE8GiZP7xNmFX6S0PhRle4DxK5v20nORZjceSi6zvi6pLcM1OTsKiWp3bjaJa8Mi3bUIvufTlRC1bqyxcPkPBKS193gTn_uTw2pmErh5DZ9dre9zVeJH484Qn3I00kExQxEtM-_u2n_HVp3wGUpMno8wMgDF6GoNJEMDiV58UVDp6YtuRFkV8IutxR4jMyEhxc0bpOwlQpZYVf_Ah_MoT_7" alt="Green Canopy" />
                    <div className="absolute top-4 right-4 bg-primary/80 backdrop-blur-md px-3 py-1 rounded-full text-white font-label-md text-label-md">75% Funded</div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-headline-sm text-headline-sm text-primary mb-2">Green Canopy Expansion</h4>
                    <p className="text-on-surface-variant font-body-sm text-body-sm mb-6">Restoring urban tree cover across the metropolitan area to combat heat islands.</p>
                    <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                      <div className="h-full bg-secondary w-3/4"></div>
                    </div>
                    <div className="flex justify-between mt-2 font-label-md text-label-md text-on-surface-variant">
                      <span>$45,000 raised</span>
                      <span>Goal: $60,000</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-outline-variant/30 rounded-xl overflow-hidden transition-all hover:-translate-y-1 hover:shadow-md group">
                  <div className="h-48 overflow-hidden relative">
                    <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBL8N5ItX2kydBwfcm152tzAoAhk532eR8klHtKk_BBTXLEgBCjx00qtKz2FY7q4O0BwU5ctHcJkYdWqR7BGPtGQ4nd6R3EeO8bw26MwugMH8LyA7fqvG5-UE5Ea16DSckYXuRQ5DQInsDskIoSYXsxHybOZzQb_xjLjdTMQMeAC2xIDBHtVMta2iZHFcpZ6kewN-gKyShSu3emiAAD6hC13c4R1Q-YUEKc7SRFGNP6PFXWL" alt="Civic Ledger" />
                    <div className="absolute top-4 right-4 bg-tertiary-container/80 backdrop-blur-md px-3 py-1 rounded-full text-on-tertiary-container font-label-md text-label-md">In Progress</div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-headline-sm text-headline-sm text-primary mb-2">Civic Ledger Transparency</h4>
                    <p className="text-on-surface-variant font-body-sm text-body-sm mb-6">Implementing blockchain-backed reporting for all local treasury expenditures.</p>
                    <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                      <div className="h-full bg-secondary w-1/3"></div>
                    </div>
                    <div className="flex justify-between mt-2 font-label-md text-label-md text-on-surface-variant">
                      <span>$12,000 raised</span>
                      <span>Goal: $35,000</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-8">
                <h3 className="font-headline-md text-headline-md text-primary mb-6">Recent Discussions</h3>
                <div className="space-y-4">
                  <div className="bg-surface-container-low/70 backdrop-blur-md p-6 rounded-xl border border-outline-variant/20 flex gap-6 hover:border-primary/40 transition-all cursor-pointer group">
                    <div className="flex flex-col items-center justify-center bg-surface-container-low w-16 h-16 rounded-lg border border-outline-variant/30">
                      <span className="material-symbols-outlined text-primary">forum</span>
                      <span className="font-label-md text-label-md">24</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <h5 className="font-headline-sm text-[18px] text-primary">Proposal: Mandatory Rainwater Harvesting in New Zoning</h5>
                        <span className="font-label-md text-label-md text-on-surface-variant">2h ago</span>
                      </div>
                      <p className="text-on-surface-variant font-body-sm text-body-sm">A discussion on integrating sustainable water practices into the upcoming 2025 city planning mandate.</p>
                      <div className="flex gap-4 mt-4">
                        <span className="text-secondary font-label-md text-label-md flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">thumb_up</span> 142</span>
                        <span className="text-on-surface-variant font-label-md text-label-md flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">account_circle</span> Started by Marcus Thorne</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-surface-container-low/70 backdrop-blur-md p-6 rounded-xl border border-outline-variant/20 flex gap-6 hover:border-primary/40 transition-all cursor-pointer group">
                    <div className="flex flex-col items-center justify-center bg-surface-container-low w-16 h-16 rounded-lg border border-outline-variant/30">
                      <span className="material-symbols-outlined text-primary">lightbulb</span>
                      <span className="font-label-md text-label-md">8</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <h5 className="font-headline-sm text-[18px] text-primary">Ideas for the Annual Heritage Gala</h5>
                        <span className="font-label-md text-label-md text-on-surface-variant">Yesterday</span>
                      </div>
                      <p className="text-on-surface-variant font-body-sm text-body-sm">Brainstorming session for venue selection and sponsorship outreach for our flagship event.</p>
                      <div className="flex gap-4 mt-4">
                        <span className="text-secondary font-label-md text-label-md flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">thumb_up</span> 89</span>
                        <span className="text-on-surface-variant font-label-md text-label-md flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">account_circle</span> Started by Elena Vance</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <aside className="col-span-4 space-y-10">
              <div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined">shield_person</span> Chapter Leadership
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 rounded-xl border border-outline-variant/20 hover:bg-surface-container-low transition-colors">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-primary-fixed">
                      <img alt="Sarah Jenkins" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMvTqFfusip_TiqJFDLdm4VGtRpTTD93nRyNUHIYzCwyigmMB7cac7PrJ0e4qv38IfTaedwCAmkxSLyaiY5M560SlUFjgllWlwsSxjdUcRsNIE17bUUl1c9oKvrDX2zyRiEzZFEHuxMutyaKhr7d6lfMuFTrsQbX5mb97bGHQdNJHPFiQhzRyHRF9zqqWRGwrtWWlCAet9asT0j2Cj3jj0WfvhBInKVq95t1SwGM6Lqhnb5HACJ0VnHtKV2jkchJDggOQSV2ppwo3" />
                    </div>
                    <div>
                      <p className="font-label-lg text-label-lg text-primary">Sarah Jenkins</p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Regional Director</p>
                    </div>
                    <button className="ml-auto material-symbols-outlined text-on-surface-variant hover:text-primary">mail</button>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl border border-outline-variant/20 hover:bg-surface-container-low transition-colors">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-primary-fixed">
                      <img alt="David Chen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8Z7vK-RtRpUw2lN9Yu5HHIzi7Fn4C-l5pdMPgU46rqwGdy55FG98o-SD_58PM2Orp8FaxUi-gdowlKUK6IGUHuao4D3CmiDIB2n3OtBiizvJHoXf_5J_4CC6VBWhTq4wD5wIZQ6cC5PW5SjvJ94DYhInxJbex51nNDiuklFY1ixh-KagEzty2rqGszbQlYkP0Fx4J7dZ-6jT9Lmw90TZsZdzh36Cbxt0WIDj4UZATYRpNOtSXkAkYUmzBo5rsCU4CS4uKktJTXF_6" />
                    </div>
                    <div>
                      <p className="font-label-lg text-label-lg text-primary">David Chen</p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Lead Project Coordinator</p>
                    </div>
                    <button className="ml-auto material-symbols-outlined text-on-surface-variant hover:text-primary">mail</button>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container p-8 rounded-2xl border border-outline-variant/30">
                <h3 className="font-headline-sm text-headline-sm text-primary mb-6">Resource Library</h3>
                <div className="space-y-6">
                  <div className="flex gap-4 group cursor-pointer">
                    <div className="w-10 h-10 flex items-center justify-center bg-white rounded shadow-sm text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                      <span className="material-symbols-outlined">description</span>
                    </div>
                    <div>
                      <p className="font-label-lg text-label-lg text-primary group-hover:underline">Bylaws &amp; Charter v2.4</p>
                      <p className="font-label-md text-label-md text-on-surface-variant">PDF • 2.4 MB</p>
                    </div>
                  </div>
                  <div className="flex gap-4 group cursor-pointer">
                    <div className="w-10 h-10 flex items-center justify-center bg-white rounded shadow-sm text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                      <span className="material-symbols-outlined">analytics</span>
                    </div>
                    <div>
                      <p className="font-label-lg text-label-lg text-primary group-hover:underline">Quarterly Impact Report</p>
                      <p className="font-label-md text-label-md text-on-surface-variant">Excel • 1.1 MB</p>
                    </div>
                  </div>
                  <div className="flex gap-4 group cursor-pointer">
                    <div className="w-10 h-10 flex items-center justify-center bg-white rounded shadow-sm text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                      <span className="material-symbols-outlined">video_library</span>
                    </div>
                    <div>
                      <p className="font-label-lg text-label-lg text-primary group-hover:underline">Town Hall Archives</p>
                      <p className="font-label-md text-label-md text-on-surface-variant">Video Link</p>
                    </div>
                  </div>
                </div>
                <button className="w-full mt-8 py-3 border border-primary text-primary font-label-lg text-label-lg rounded-lg hover:bg-primary hover:text-white transition-all">
                  Access Full Archive
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl border border-outline-variant/30 text-center">
                  <p className="font-display-lg text-[24px] text-secondary font-bold">1.2k</p>
                  <p className="font-label-md text-label-md text-on-surface-variant uppercase">Members</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-outline-variant/30 text-center">
                  <p className="font-display-lg text-[24px] text-primary font-bold">14</p>
                  <p className="font-label-md text-label-md text-on-surface-variant uppercase">Projects</p>
                </div>
              </div>
            </aside>
          </div>
        </section>
        <footer className="w-full py-16 bg-surface-container-highest border-t border-outline-variant/30">
          <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter">
            <div className="col-span-1 md:col-span-1">
              <h4 className="font-headline-sm text-headline-sm text-primary mb-6">BOOT Civic OS</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Building the foundations of future-facing governance, one community at a time.
              </p>
            </div>
            <div>
              <h5 className="font-label-lg text-label-lg text-on-surface uppercase tracking-widest mb-6">Navigation</h5>
              <ul className="space-y-4">
                <li><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all underline" href="#">Dashboard</a></li>
                <li><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all underline" href="#">Communities</a></li>
                <li><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all underline" href="#">Events</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-label-lg text-label-lg text-on-surface uppercase tracking-widest mb-6">Legal</h5>
              <ul className="space-y-4">
                <li><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all underline" href="#">Privacy Policy</a></li>
                <li><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all underline" href="#">Terms of Service</a></li>
                <li><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all underline" href="#">Transparency Report</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-label-lg text-label-lg text-on-surface uppercase tracking-widest mb-6">Connect</h5>
              <ul className="space-y-4">
                <li><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all underline" href="#">Contact Us</a></li>
                <li><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all underline" href="#">Support Center</a></li>
              </ul>
            </div>
          </div>
          <div className="max-w-container-max mx-auto px-margin-desktop mt-16 pt-8 border-t border-outline-variant/30 flex justify-between items-center">
            <p className="font-body-sm text-body-sm text-on-surface-variant opacity-70">
              © 2024 BOOT Civic Operating System. All Rights Reserved.
            </p>
            <div className="flex gap-6">
              <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary">public</span>
              <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary">share</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
