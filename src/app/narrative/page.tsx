import React from 'react';
import Link from 'next/link';

export default function NarrativeIntelligence() {
  return (
    <div className="bg-background text-on-background font-body-md min-h-screen">
      {/* SideNavBar */}
      <nav className="fixed left-0 top-0 h-screen flex flex-col py-8 bg-primary dark:bg-primary-container text-on-primary dark:text-on-primary-container w-64 z-50">
        <div className="px-6 mb-10">
          <h1 className="font-headline-md text-headline-md font-bold text-on-primary tracking-tight">CivicOS</h1>
          <p className="font-body-sm text-body-sm opacity-70">Executive Portal</p>
        </div>
        <div className="flex-1 space-y-2 px-4">
          <Link className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-primary hover:bg-primary-container/10 transition-colors duration-200" href="/campaign">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="font-label-lg text-label-lg">Command Center</span>
          </Link>
          <Link className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-primary/70 hover:text-on-primary hover:bg-primary-container/10 transition-colors duration-200" href="#">
            <span className="material-symbols-outlined">groups</span>
            <span className="font-label-lg text-label-lg">Citizens</span>
          </Link>
          <Link className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-primary bg-primary-container/20 border-l-4 border-secondary-container transition-colors duration-200" href="/narrative">
            <span className="material-symbols-outlined">psychology</span>
            <span className="font-label-lg text-label-lg">Narrative</span>
          </Link>
          <Link className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-primary/70 hover:text-on-primary hover:bg-primary-container/10 transition-colors duration-200" href="#">
            <span className="material-symbols-outlined">how_to_vote</span>
            <span className="font-label-lg text-label-lg">Election Ops</span>
          </Link>
          <Link className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-primary/70 hover:text-on-primary hover:bg-primary-container/10 transition-colors duration-200" href="#">
            <span className="material-symbols-outlined">inventory_2</span>
            <span className="font-label-lg text-label-lg">Resources</span>
          </Link>
          <Link className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-primary/70 hover:text-on-primary hover:bg-primary-container/10 transition-colors duration-200" href="#">
            <span className="material-symbols-outlined">settings</span>
            <span className="font-label-lg text-label-lg">Settings</span>
          </Link>
        </div>
        <div className="mt-auto px-4 space-y-2">
          <button className="w-full py-3 bg-secondary-container text-on-secondary-fixed rounded-lg font-label-lg text-label-lg flex items-center justify-center gap-2 mb-4">
            <span className="material-symbols-outlined">add</span>
            New Initiative
          </button>
          <Link className="flex items-center gap-3 px-4 py-2 text-on-primary/70 hover:text-on-primary font-label-md text-label-md transition-colors" href="#">
            <span className="material-symbols-outlined">help</span> Support
          </Link>
          <Link className="flex items-center gap-3 px-4 py-2 text-on-primary/70 hover:text-on-primary font-label-md text-label-md transition-colors" href="#">
            <span className="material-symbols-outlined">logout</span> Log Out
          </Link>
        </div>
      </nav>

      {/* Main Content Shell */}
      <div className="ml-64 min-h-screen flex flex-col">
        {/* TopNavBar */}
        <header className="flex justify-between items-center w-full h-16 px-margin-desktop bg-surface dark:bg-surface-dim border-b border-outline-variant/30 sticky top-0 z-40">
          <div className="flex items-center flex-1">
            <div className="relative w-96">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
              <input className="w-full pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant/30 rounded-lg text-body-sm focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Search narrative data..." type="text"/>
            </div>
            <div className="ml-8 flex gap-6">
              <Link className="text-primary border-b-2 border-secondary font-bold pb-1 font-label-md text-label-md" href="#">Analytics</Link>
              <Link className="text-on-surface-variant font-label-md text-label-md hover:text-secondary transition-all" href="#">Deployment</Link>
              <Link className="text-on-surface-variant font-label-md text-label-md hover:text-secondary transition-all" href="#">Strategy</Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-secondary px-4 py-2 rounded text-on-secondary font-label-md text-label-md flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>error</span>
              Action Alert
            </button>
            <div className="flex gap-2">
              <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
                <span className="material-symbols-outlined">history</span>
              </button>
              <img alt="Administrator" className="w-8 h-8 rounded-full border border-outline-variant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXe7GK924XUTsK11ep73MoevXczuLmkxXiLmXJ6o6IYaqRmSihirmivfSLdbHsU3XSOKTpAR-pPaUr1jBqKr8ZU4USW-xTbHftahAUbhC6zlETFnb4qw8_feD_Pfak4kuSaS_uTNpE66_iRMdb-MhScUIk8l04K9R9EsJhPL_q1W9D0IQGwgPCXFBFKxNfXHJMm52X_SjPt9OORCB3zatr3OE8plHi0HH_shaaCUPkVSvKcrrQRwZbQBv2zepcAdZeS_bDmhjMajOC"/>
            </div>
          </div>
        </header>

        {/* Main Workspace */}
        <main className="flex-1 p-margin-desktop max-w-[1400px] mx-auto w-full">
          {/* Hero Stats / Alerts */}
          <div className="mb-12">
            <div className="flex justify-between items-end mb-6">
              <div>
                <h2 className="font-headline-lg text-headline-lg text-primary">National Sentiment Monitor</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">Real-time aggregate of multi-platform citizen discourse.</p>
              </div>
              <div className="text-right">
                <span className="text-label-md font-label-md uppercase tracking-widest text-outline">Last Updated</span>
                <p className="font-headline-sm text-headline-sm text-primary">09:42:01 AM EST</p>
              </div>
            </div>
            {/* Misinformation Alert Banner */}
            <div className="bg-error-container/40 border-l-4 border-error p-6 rounded-lg flex items-start gap-4 mb-10">
              <span className="material-symbols-outlined text-error" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
              <div className="flex-1">
                <h3 className="font-label-lg text-label-lg text-on-error-container">CRITICAL MISINFORMATION ALERT: Regional Energy Grid Rumors</h3>
                <p className="font-body-sm text-body-sm text-on-error-container mt-1">Coordinated bot activity detected in Northeast sectors spreading falsified blackout projections. Narrative resonance has increased by 140% in the last 2 hours.</p>
              </div>
              <button className="text-label-lg font-label-lg text-error hover:underline">Deploy Response</button>
            </div>
          </div>

          {/* Bento Grid Dashboard */}
          <div className="grid grid-cols-12 gap-gutter">
            {/* Sentiment Analysis Card */}
            <div className="col-span-12 lg:col-span-8 bg-surface-container-low p-8 rounded-xl border border-outline-variant/20">
              <div className="flex justify-between items-center mb-8">
                <h3 className="font-headline-sm text-headline-sm text-primary flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">analytics</span>
                  Sentiment Distribution
                </h3>
                <div className="flex gap-2">
                  <button className="px-3 py-1 bg-primary text-on-primary rounded text-label-md font-label-md">24H</button>
                  <button className="px-3 py-1 hover:bg-surface-container-high rounded text-label-md font-label-md transition-colors">7D</button>
                  <button className="px-3 py-1 hover:bg-surface-container-high rounded text-label-md font-label-md transition-colors">30D</button>
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-label-lg text-label-lg">Positive Alignment</span>
                    <span className="font-label-lg text-label-lg text-primary">42%</span>
                  </div>
                  <div className="h-3 w-full bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-primary transition-all duration-1000" style={{ width: '42%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-label-lg text-label-lg">Neutral / Observation</span>
                    <span className="font-label-lg text-label-lg text-on-surface-variant">31%</span>
                  </div>
                  <div className="h-3 w-full bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-tertiary-fixed-dim transition-all duration-1000" style={{ width: '31%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-label-lg text-label-lg">Critical / Resistance</span>
                    <span className="font-label-lg text-label-lg text-secondary">27%</span>
                  </div>
                  <div className="h-3 w-full bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-secondary transition-all duration-1000" style={{ width: '27%' }}></div>
                  </div>
                </div>
              </div>
              <div className="mt-10 pt-8 border-t border-outline-variant/20 grid grid-cols-3 gap-8">
                <div>
                  <p className="text-label-md font-label-md text-outline uppercase tracking-wider">Velocity</p>
                  <p className="text-headline-sm font-headline-sm text-primary">+2.4% <span className="text-body-sm font-body-sm font-normal text-on-surface-variant">/ hr</span></p>
                </div>
                <div>
                  <p className="text-label-md font-label-md text-outline uppercase tracking-wider">Top Driver</p>
                  <p className="text-headline-sm font-headline-sm text-primary">New Policy</p>
                </div>
                <div>
                  <p className="text-label-md font-label-md text-outline uppercase tracking-wider">Confidence</p>
                  <p className="text-headline-sm font-headline-sm text-primary">94.8%</p>
                </div>
              </div>
            </div>

            {/* Narrative Word Cloud Area */}
            <div className="col-span-12 lg:col-span-4 bg-primary text-on-primary p-8 rounded-xl overflow-hidden relative min-h-[400px]">
              <div className="relative z-10">
                <h3 className="font-headline-sm text-headline-sm mb-6">Resonance Map</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="px-5 py-2 bg-primary-container text-on-primary-container rounded-full font-label-lg text-lg border border-primary-fixed/20 transition-all cursor-pointer hover:-translate-y-0.5 hover:shadow-lg">Security</span>
                  <span className="px-4 py-2 bg-on-primary-container/10 text-on-primary rounded-full font-label-md text-sm transition-all cursor-pointer hover:-translate-y-0.5 hover:shadow-lg">Innovation</span>
                  <span className="px-6 py-3 bg-secondary-container text-on-secondary-fixed rounded-full font-headline-sm text-xl transition-all cursor-pointer hover:-translate-y-0.5 hover:shadow-lg">Heritage</span>
                  <span className="px-4 py-2 bg-on-primary-container/10 text-on-primary rounded-full font-label-md text-sm transition-all cursor-pointer hover:-translate-y-0.5 hover:shadow-lg">Trust</span>
                  <span className="px-5 py-2 bg-primary-container text-on-primary-container rounded-full font-label-lg text-md transition-all cursor-pointer hover:-translate-y-0.5 hover:shadow-lg">Efficiency</span>
                  <span className="px-4 py-2 bg-on-primary-container/10 text-on-primary rounded-full font-label-md text-sm transition-all cursor-pointer hover:-translate-y-0.5 hover:shadow-lg">Tradition</span>
                  <span className="px-6 py-3 bg-on-primary-container/20 text-on-primary rounded-full font-label-lg text-lg transition-all cursor-pointer hover:-translate-y-0.5 hover:shadow-lg">Future</span>
                  <span className="px-4 py-2 bg-on-primary-container/10 text-on-primary rounded-full font-label-md text-sm transition-all cursor-pointer hover:-translate-y-0.5 hover:shadow-lg">Clarity</span>
                  <span className="px-5 py-2 bg-primary-container text-on-primary-container rounded-full font-label-lg text-md transition-all cursor-pointer hover:-translate-y-0.5 hover:shadow-lg">Balance</span>
                </div>
                <div className="mt-12">
                  <p className="font-body-sm text-body-sm opacity-70">Keywords sized by algorithmic resonance frequency across primary digital channels.</p>
                </div>
              </div>
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-secondary-container/20 rounded-full blur-[80px]"></div>
            </div>

            {/* Media Tracking Table */}
            <div className="col-span-12 bg-white rounded-xl border border-outline-variant/30 overflow-hidden">
              <div className="p-8 border-b border-outline-variant/30 flex justify-between items-center bg-surface-container-low">
                <h3 className="font-headline-sm text-headline-sm text-primary">Media Response Tracking</h3>
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-label-md font-label-md text-on-surface-variant hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-[18px]">filter_list</span> Filter
                  </button>
                  <button className="flex items-center gap-2 text-label-md font-label-md text-on-surface-variant hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-[18px]">download</span> Export Report
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-surface-container text-on-surface-variant font-label-md text-label-md border-b border-outline-variant/30">
                      <th className="px-8 py-4">Source</th>
                      <th className="px-8 py-4">Headline / Lead</th>
                      <th className="px-8 py-4">Tone Index</th>
                      <th className="px-8 py-4">Reach</th>
                      <th className="px-8 py-4">Action Status</th>
                    </tr>
                  </thead>
                  <tbody className="text-body-sm text-on-surface">
                    <tr className="border-b border-outline-variant/10 hover:bg-surface transition-colors">
                      <td className="px-8 py-6 flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        National Times
                      </td>
                      <td className="px-8 py-6 font-medium">New Administrative Protocol Shows Early Promise in Efficiency Gains</td>
                      <td className="px-8 py-6">
                        <span className="px-2 py-1 bg-surface-container-high text-primary rounded font-label-md text-[10px] uppercase">Stable</span>
                      </td>
                      <td className="px-8 py-6">1.2M</td>
                      <td className="px-8 py-6">
                        <button className="text-primary font-label-md hover:underline">Monitor</button>
                      </td>
                    </tr>
                    <tr className="border-b border-outline-variant/10 hover:bg-surface transition-colors">
                      <td className="px-8 py-6 flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-secondary"></div>
                        Regional Independent
                      </td>
                      <td className="px-8 py-6 font-medium text-secondary">Citizens Express Concern Over New Data Disclosure Mandates</td>
                      <td className="px-8 py-6">
                        <span className="px-2 py-1 bg-error-container text-error rounded font-label-md text-[10px] uppercase">Critical</span>
                      </td>
                      <td className="px-8 py-6">450K</td>
                      <td className="px-8 py-6">
                        <button className="text-secondary font-label-lg bg-secondary/10 px-3 py-1 rounded hover:bg-secondary/20">Intervene</button>
                      </td>
                    </tr>
                    <tr className="border-b border-outline-variant/10 hover:bg-surface transition-colors">
                      <td className="px-8 py-6 flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-tertiary-fixed-dim"></div>
                        The Ledger Post
                      </td>
                      <td className="px-8 py-6 font-medium">Infrastructure Spending Bill: What it means for the Average Citizen</td>
                      <td className="px-8 py-6">
                        <span className="px-2 py-1 bg-surface-container-high text-on-surface-variant rounded font-label-md text-[10px] uppercase">Neutral</span>
                      </td>
                      <td className="px-8 py-6">890K</td>
                      <td className="px-8 py-6">
                        <button className="text-primary font-label-md hover:underline">Acknowledge</button>
                      </td>
                    </tr>
                    <tr className="hover:bg-surface transition-colors">
                      <td className="px-8 py-6 flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        Visionary Herald
                      </td>
                      <td className="px-8 py-6 font-medium">Why the CivicOS Portal is a Game-Changer for Modern Governance</td>
                      <td className="px-8 py-6">
                        <span className="px-2 py-1 bg-primary/10 text-primary rounded font-label-md text-[10px] uppercase">Positive</span>
                      </td>
                      <td className="px-8 py-6">3.1M</td>
                      <td className="px-8 py-6">
                        <button className="text-primary font-label-md hover:underline">Amplify</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="flex flex-col md:flex-row justify-between items-center py-8 px-margin-desktop bg-surface-container-low border-t border-outline-variant/20 w-full">
          <div className="mb-4 md:mb-0">
            <span className="font-label-lg text-label-lg font-bold text-primary">CivicOS</span>
            <span className="mx-2 text-outline-variant">|</span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">© 2024 Visionary Tradition Movement. All Rights Reserved. Institutional Oversight Protocol v4.2</span>
          </div>
          <div className="flex gap-8">
            <Link className="text-on-surface-variant font-label-md text-label-md hover:text-primary transition-colors" href="#">Ethics Policy</Link>
            <Link className="text-on-surface-variant font-label-md text-label-md hover:text-primary transition-colors" href="#">Privacy</Link>
            <Link className="text-on-surface-variant font-label-md text-label-md hover:text-primary transition-colors" href="#">Legal</Link>
            <Link className="text-on-surface-variant font-label-md text-label-md hover:text-primary transition-colors" href="#">Contact Bureau</Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
