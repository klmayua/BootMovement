import React from 'react';
import Link from 'next/link';

export default function ExecutiveDashboard() {
  return (
    <div className="text-on-surface font-body-md">
      {/* TopAppBar */}
      <header className="w-full top-0 sticky z-50 bg-surface dark:bg-surface-dim border-b border-outline-variant/30">
        <div className="flex justify-between items-center px-margin-desktop py-unit max-w-container-max mx-auto h-20">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-primary text-3xl">account_balance</span>
            <h1 className="font-headline-lg text-headline-lg font-bold text-primary dark:text-primary-fixed">CivicOS</h1>
          </div>
          <nav className="hidden md:flex gap-8 items-center">
            <Link className="text-primary dark:text-primary-fixed font-bold border-b-2 border-secondary font-label-lg text-label-lg py-2" href="/admin/dashboard">Leadership Portal</Link>
            <Link className="text-on-surface-variant dark:text-on-surface-variant hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200 font-label-lg text-label-lg py-2" href="#">Election Ops</Link>
            <Link className="text-on-surface-variant dark:text-on-surface-variant hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200 font-label-lg text-label-lg py-2" href="/diaspora">Diaspora Hub</Link>
            <Link className="text-on-surface-variant dark:text-on-surface-variant hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200 font-label-lg text-label-lg py-2" href="#">Admin Intel</Link>
          </nav>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-white overflow-hidden border-2 border-outline-variant">
              <img 
                alt="Executive User" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJlnOruBHt7IVR0At2r--MbaH8KPIYOASxd_ccCPSaL9QkWmDG2IIVyBGsN5mHnMryzT-w9KRMhpMv6aG-Hf_O8cIy6Osa1SpahRFQ2NA7KHS8OhNy6vXC53M_lrBNPAVriCBS3Z0f1YfHCDqoyM6sNE4Fc3tbu0fJwdxgRl8RTCvaH6U91ZDnA0Uqjn2pYm75c1SsCh2w9sSp8ALoSfvnymL_3xRL0PV2FgdYouKetWfOs82ddZPiOtWNWp0xmug8uTu3r2mLXhoO"
              />
            </div>
            <span className="material-symbols-outlined text-on-surface-variant cursor-pointer">settings</span>
          </div>
        </div>
      </header>

      <div className="flex min-h-screen">
        {/* NavigationDrawer (Desktop Only) */}
        <aside className="hidden lg:flex flex-col h-full w-80 fixed left-0 top-20 bg-surface-container-low dark:bg-inverse-surface border-r border-outline-variant/30 py-6">
          <div className="px-6 mb-8">
            <h2 className="font-headline-sm text-headline-sm text-primary">Command Centers</h2>
          </div>
          <nav className="flex flex-col gap-2">
            <Link className="bg-primary-container text-on-primary-container rounded-full mx-2 px-4 py-3 flex items-center gap-4 cursor-pointer" href="/admin/dashboard">
              <span className="material-symbols-outlined">dashboard</span>
              <span className="font-label-lg text-label-lg">Leadership Portal</span>
            </Link>
            <div className="text-on-surface-variant hover:bg-surface-variant/50 rounded-full mx-2 px-4 py-3 flex items-center gap-4 cursor-pointer transition-all">
              <span className="material-symbols-outlined">how_to_vote</span>
              <span className="font-label-lg text-label-lg">Election Ops</span>
            </div>
            <Link className="text-on-surface-variant hover:bg-surface-variant/50 rounded-full mx-2 px-4 py-3 flex items-center gap-4 cursor-pointer transition-all" href="/diaspora">
              <span className="material-symbols-outlined">public</span>
              <span className="font-label-lg text-label-lg">Diaspora Hub</span>
            </Link>
            <div className="text-on-surface-variant hover:bg-surface-variant/50 rounded-full mx-2 px-4 py-3 flex items-center gap-4 cursor-pointer transition-all">
              <span className="material-symbols-outlined">analytics</span>
              <span className="font-label-lg text-label-lg">Admin Intel</span>
            </div>
          </nav>
        </aside>

        {/* Main Content Canvas */}
        <main className="flex-1 lg:ml-80 p-8 md:p-12 mb-20 lg:mb-0">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="mb-12">
              <p className="text-secondary font-semibold uppercase tracking-widest text-xs mb-2">Live Operations</p>
              <h2 className="font-display-lg text-display-lg text-primary mb-4">Strategic Command</h2>
              <div className="h-1 w-24 bg-secondary"></div>
            </div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-12 gap-gutter">
              {/* KPI Tile: Membership */}
              <div className="col-span-12 md:col-span-4 bg-white border border-outline-variant/30 p-6 flex flex-col justify-between transition-transform hover:-translate-y-1 duration-200">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="material-symbols-outlined text-primary p-2 bg-surface-container rounded-lg">groups</span>
                    <span className="text-green-600 font-bold text-sm">+12.4%</span>
                  </div>
                  <h3 className="font-label-lg text-label-lg text-on-surface-variant">Active Membership</h3>
                  <p className="font-headline-lg text-headline-lg text-primary">2,841,902</p>
                </div>
                <div className="mt-4 pt-4 border-t border-outline-variant/20">
                  <div className="flex justify-between text-xs text-on-surface-variant">
                    <span>Verified Voters</span>
                    <span className="font-bold">88%</span>
                  </div>
                  <div className="w-full h-1.5 bg-surface-container rounded-full mt-2 overflow-hidden">
                    <div className="bg-primary h-full w-[88%]"></div>
                  </div>
                </div>
              </div>

              {/* KPI Tile: Funding */}
              <div className="col-span-12 md:col-span-4 bg-white border border-outline-variant/30 p-6 flex flex-col justify-between transition-transform hover:-translate-y-1 duration-200">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="material-symbols-outlined text-secondary p-2 bg-secondary-container/10 rounded-lg">payments</span>
                    <span className="text-green-600 font-bold text-sm">On Track</span>
                  </div>
                  <h3 className="font-label-lg text-label-lg text-on-surface-variant">Movement Funding</h3>
                  <p className="font-headline-lg text-headline-lg text-primary">$42.8M</p>
                </div>
                <div className="mt-4 pt-4 border-t border-outline-variant/20">
                  <div className="flex justify-between text-xs text-on-surface-variant">
                    <span>Q3 Target: $50M</span>
                    <span className="font-bold">85%</span>
                  </div>
                  <div className="w-full h-1.5 bg-secondary-container/20 rounded-full mt-2 overflow-hidden">
                    <div className="bg-secondary h-full w-[85%]"></div>
                  </div>
                </div>
              </div>

              {/* KPI Tile: Engagement */}
              <div className="col-span-12 md:col-span-4 bg-white border border-outline-variant/30 p-6 flex flex-col justify-between transition-transform hover:-translate-y-1 duration-200">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="material-symbols-outlined text-tertiary p-2 bg-tertiary-fixed/30 rounded-lg">bolt</span>
                    <span className="text-secondary font-bold text-sm">Critical</span>
                  </div>
                  <h3 className="font-label-lg text-label-lg text-on-surface-variant">Action Response Rate</h3>
                  <p className="font-headline-lg text-headline-lg text-primary">64.2%</p>
                </div>
                <div className="mt-4 pt-4 border-t border-outline-variant/20">
                  <div className="flex justify-between text-xs text-on-surface-variant">
                    <span>Avg Time: 14m</span>
                    <span className="font-bold">Lower than goal</span>
                  </div>
                  <div className="w-full h-1.5 bg-surface-container rounded-full mt-2 overflow-hidden">
                    <div className="bg-tertiary h-full w-[64%]"></div>
                  </div>
                </div>
              </div>

              {/* National Resource Map */}
              <div className="col-span-12 lg:col-span-8 bg-primary-container rounded-xl overflow-hidden relative min-h-[500px] flex flex-col">
                <div className="p-8 z-10">
                  <h3 className="font-headline-sm text-headline-sm text-white">Geospatial Resource Distribution</h3>
                  <p className="text-on-primary-container text-body-sm">Real-time deployment of regional organizers and local offices.</p>
                </div>
                <div className="flex-1 flex items-center justify-center p-8 opacity-40">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-[300px] text-white/10">public</span>
                    <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-secondary rounded-full animate-pulse shadow-[0_0_15px_#af2d2f]"></div>
                    <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-secondary rounded-full animate-pulse shadow-[0_0_15px_#af2d2f]"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-secondary rounded-full animate-pulse shadow-[0_0_15px_#af2d2f]"></div>
                    <div className="absolute top-1/3 right-1/2 w-2 h-2 bg-secondary rounded-full animate-pulse shadow-[0_0_15px_#af2d2f]"></div>
                  </div>
                </div>
                <div className="absolute bottom-6 right-6 p-4 bg-primary/80 backdrop-blur-md rounded-lg border border-white/10">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-secondary"></div>
                      <span className="text-xs text-white">High Activation Zone</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-primary-fixed"></div>
                      <span className="text-xs text-white">Establishment Hub</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Legislative Wins Timeline */}
              <div className="col-span-12 lg:col-span-4 bg-white border border-outline-variant/30 p-8 flex flex-col">
                <div className="flex items-center gap-3 mb-8">
                  <span className="material-symbols-outlined text-primary">history_edu</span>
                  <h3 className="font-headline-sm text-headline-sm text-primary">Policy Milestones</h3>
                </div>
                <div className="space-y-8 flex-1 border-l-2 border-surface-container ml-2">
                  <div className="relative pl-8">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-white"></div>
                    <p className="text-xs text-on-surface-variant mb-1">SEP 2024</p>
                    <h4 className="font-label-lg text-label-lg text-primary mb-1">Energy Independence Charter</h4>
                    <p className="text-body-sm text-on-surface-variant">Passed senate with 62% majority vote across party lines.</p>
                  </div>
                  <div className="relative pl-8">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-secondary border-4 border-white"></div>
                    <p className="text-xs text-on-surface-variant mb-1">AUG 2024</p>
                    <h4 className="font-label-lg text-label-lg text-primary mb-1">Civic Data Privacy Act</h4>
                    <p className="text-body-sm text-on-surface-variant">Implemented across 14 sovereign administrative districts.</p>
                  </div>
                  <div className="relative pl-8 opacity-50">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-outline border-4 border-white"></div>
                    <p className="text-xs text-on-surface-variant mb-1">JUL 2024</p>
                    <h4 className="font-label-lg text-label-lg text-primary mb-1">Maritime Trade Protocol</h4>
                    <p className="text-body-sm text-on-surface-variant">Preliminary agreement reached with neighboring blocs.</p>
                  </div>
                </div>
              </div>

              {/* Initiative Tracker Table */}
              <div className="col-span-12 bg-white border border-outline-variant/30 overflow-hidden">
                <div className="p-8 border-b border-outline-variant/20 flex justify-between items-center">
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-primary">Initiative Progress Tracker</h3>
                    <p className="text-body-sm text-on-surface-variant">Monitoring key project execution across the nation.</p>
                  </div>
                  <button className="bg-primary text-white px-6 py-2 rounded-full font-label-lg text-label-lg flex items-center gap-2 hover:bg-primary/90 transition-all">
                    <span className="material-symbols-outlined text-sm">add</span>
                    New Initiative
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-surface-container-low">
                      <tr>
                        <th className="px-8 py-4 font-label-lg text-label-lg text-on-surface-variant">Initiative Name</th>
                        <th className="px-8 py-4 font-label-lg text-label-lg text-on-surface-variant">Priority</th>
                        <th className="px-8 py-4 font-label-lg text-label-lg text-on-surface-variant">Lead Office</th>
                        <th className="px-8 py-4 font-label-lg text-label-lg text-on-surface-variant">Status</th>
                        <th className="px-8 py-4 font-label-lg text-label-lg text-on-surface-variant">Completion</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-outline-variant/20">
                      <tr className="hover:bg-surface-container/30 transition-colors">
                        <td className="px-8 py-5 font-label-lg text-primary">Urban Rejuvenation Project</td>
                        <td className="px-8 py-5">
                          <span className="px-3 py-1 bg-secondary-container/10 text-secondary text-xs font-bold rounded-full">CRITICAL</span>
                        </td>
                        <td className="px-8 py-5 text-body-sm">Metro Central Ops</td>
                        <td className="px-8 py-5">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                            <span className="text-body-sm">In Review</span>
                          </div>
                        </td>
                        <td className="px-8 py-5">
                          <div className="flex items-center gap-3">
                            <div className="w-24 h-2 bg-surface-container rounded-full overflow-hidden">
                              <div className="bg-primary h-full w-[45%]"></div>
                            </div>
                            <span className="text-xs font-bold">45%</span>
                          </div>
                        </td>
                      </tr>
                      <tr className="hover:bg-surface-container/30 transition-colors">
                        <td className="px-8 py-5 font-label-lg text-primary">Rural Connectivity Expansion</td>
                        <td className="px-8 py-5">
                          <span className="px-3 py-1 bg-primary-container/10 text-primary text-xs font-bold rounded-full">HIGH</span>
                        </td>
                        <td className="px-8 py-5 text-body-sm">Frontier Logistics</td>
                        <td className="px-8 py-5">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            <span className="text-body-sm">On Schedule</span>
                          </div>
                        </td>
                        <td className="px-8 py-5">
                          <div className="flex items-center gap-3">
                            <div className="w-24 h-2 bg-surface-container rounded-full overflow-hidden">
                              <div className="bg-primary h-full w-[82%]"></div>
                            </div>
                            <span className="text-xs font-bold">82%</span>
                          </div>
                        </td>
                      </tr>
                      <tr className="hover:bg-surface-container/30 transition-colors">
                        <td className="px-8 py-5 font-label-lg text-primary">Clean Water Initiative II</td>
                        <td className="px-8 py-5">
                          <span className="px-3 py-1 bg-surface-variant text-on-surface-variant text-xs font-bold rounded-full">MEDIUM</span>
                        </td>
                        <td className="px-8 py-5 text-body-sm">Eco-Defense Command</td>
                        <td className="px-8 py-5">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                            <span className="text-body-sm">Completed</span>
                          </div>
                        </td>
                        <td className="px-8 py-5">
                          <div className="flex items-center gap-3">
                            <div className="w-24 h-2 bg-surface-container rounded-full overflow-hidden">
                              <div className="bg-primary h-full w-[100%]"></div>
                            </div>
                            <span className="text-xs font-bold">100%</span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* BottomNavBar (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 w-full z-50 rounded-t-xl bg-surface dark:bg-surface-bright border-t border-outline-variant/20 shadow-lg flex justify-around items-center h-20 px-4 pb-4">
        <div className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-full px-6 py-1 active:scale-95 transition-transform">
          <span className="material-symbols-outlined">grid_view</span>
          <span className="font-label-md text-label-md">Command</span>
        </div>
        <div className="flex flex-col items-center justify-center text-on-surface-variant opacity-70 hover:opacity-100 active:scale-95 transition-transform">
          <span className="material-symbols-outlined">description</span>
          <span className="font-label-md text-label-md">Policies</span>
        </div>
        <div className="flex flex-col items-center justify-center text-on-surface-variant opacity-70 hover:opacity-100 active:scale-95 transition-transform">
          <span className="material-symbols-outlined">groups</span>
          <span className="font-label-md text-label-md">Voters</span>
        </div>
        <div className="flex flex-col items-center justify-center text-on-surface-variant opacity-70 hover:opacity-100 active:scale-95 transition-transform">
          <span className="material-symbols-outlined">payments</span>
          <span className="font-label-md text-label-md">Grants</span>
        </div>
      </nav>

      {/* Footer */}
      <footer className="w-full mt-auto bg-surface-container-highest dark:bg-surface-container border-t border-outline-variant/50">
        <div className="flex flex-col md:flex-row justify-between items-center py-12 px-margin-desktop max-w-container-max mx-auto">
          <div className="mb-8 md:mb-0">
            <span className="font-label-lg text-label-lg font-bold text-primary">CivicOS</span>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">© 2024 Civic Operating System. Visionary Tradition Infrastructure.</p>
          </div>
          <div className="flex gap-8">
            <Link className="text-on-surface-variant hover:text-primary underline transition-all font-body-sm text-body-sm" href="#">Legal Charter</Link>
            <Link className="text-on-surface-variant hover:text-primary underline transition-all font-body-sm text-body-sm" href="#">Protocol Documentation</Link>
            <Link className="text-on-surface-variant hover:text-primary underline transition-all font-body-sm text-body-sm" href="#">Support Access</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
