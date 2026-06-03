import React from 'react';
import Link from 'next/link';

export default function CampaignCommandCenter() {
  return (
    <div className="bg-background text-on-background font-body-md selection:bg-secondary-container selection:text-on-secondary-container">
      {/* Side Navigation Shell */}
      <aside className="fixed left-0 top-0 h-screen flex flex-col py-8 bg-primary dark:bg-primary-container text-on-primary dark:text-on-primary-container w-64 z-50">
        <div className="px-6 mb-10">
          <h1 className="font-headline-md text-headline-md font-bold text-on-primary tracking-tight">CivicOS</h1>
          <p className="font-label-lg text-label-lg text-on-primary/60">Executive Portal</p>
        </div>
        <nav className="flex-1 space-y-1">
          <Link className="flex items-center px-6 py-3 text-on-primary bg-primary-container/20 border-l-4 border-secondary-container transition-colors duration-200" href="/admin/dashboard">
            <span className="material-symbols-outlined mr-3">dashboard</span>
            <span className="font-label-lg text-label-lg">Command Center</span>
          </Link>
          <Link className="flex items-center px-6 py-3 text-on-primary/70 hover:text-on-primary hover:bg-primary-container/10 transition-colors duration-200" href="#">
            <span className="material-symbols-outlined mr-3">groups</span>
            <span className="font-label-lg text-label-lg">Citizens</span>
          </Link>
          <Link className="flex items-center px-6 py-3 text-on-primary/70 hover:text-on-primary hover:bg-primary-container/10 transition-colors duration-200" href="/narrative">
            <span className="material-symbols-outlined mr-3">psychology</span>
            <span className="font-label-lg text-label-lg">Narrative</span>
          </Link>
          <Link className="flex items-center px-6 py-3 text-on-primary/70 hover:text-on-primary hover:bg-primary-container/10 transition-colors duration-200" href="#">
            <span className="material-symbols-outlined mr-3">how_to_vote</span>
            <span className="font-label-lg text-label-lg">Election Ops</span>
          </Link>
          <Link className="flex items-center px-6 py-3 text-on-primary/70 hover:text-on-primary hover:bg-primary-container/10 transition-colors duration-200" href="#">
            <span className="material-symbols-outlined mr-3">inventory_2</span>
            <span className="font-label-lg text-label-lg">Resources</span>
          </Link>
          <Link className="flex items-center px-6 py-3 text-on-primary/70 hover:text-on-primary hover:bg-primary-container/10 transition-colors duration-200" href="#">
            <span className="material-symbols-outlined mr-3">settings</span>
            <span className="font-label-lg text-label-lg">Settings</span>
          </Link>
        </nav>
        <div className="px-6 mt-auto pt-8 border-t border-on-primary/10">
          <button className="w-full py-3 mb-6 bg-secondary-container text-on-secondary-container font-label-lg rounded-lg hover:opacity-90 transition-all scale-95 active:duration-100">
            New Initiative
          </button>
          <div className="space-y-1">
            <Link className="flex items-center py-2 text-on-primary/70 hover:text-on-primary" href="#">
              <span className="material-symbols-outlined mr-3">help</span>
              <span className="font-label-lg text-label-lg">Support</span>
            </Link>
            <Link className="flex items-center py-2 text-on-primary/70 hover:text-on-primary" href="#">
              <span className="material-symbols-outlined mr-3">logout</span>
              <span className="font-label-lg text-label-lg">Log Out</span>
            </Link>
          </div>
        </div>
      </aside>

      {/* Top AppBar Shell */}
      <header className="fixed top-0 right-0 ml-64 w-[calc(100%-16rem)] h-16 bg-surface dark:bg-surface-dim border-b border-outline-variant/30 flex justify-between items-center px-margin-desktop z-40">
        <div className="flex items-center space-x-8">
          <div className="relative group">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
            <input className="pl-10 pr-4 py-2 bg-surface-container-low border-none focus:ring-2 focus:ring-primary rounded-lg text-body-sm w-80 transition-all" placeholder="Search districts, agents, or data sets..." type="text"/>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link className="text-primary border-b-2 border-secondary font-bold pb-1 font-label-md" href="#">Analytics</Link>
            <Link className="text-on-surface-variant font-label-md hover:text-secondary transition-all" href="#">Deployment</Link>
            <Link className="text-on-surface-variant font-label-md hover:text-secondary transition-all" href="#">Strategy</Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <button className="flex items-center px-4 py-2 border border-secondary text-secondary rounded-lg font-label-md hover:bg-secondary/5 transition-all">
            Emergency
          </button>
          <button className="bg-secondary text-on-secondary px-4 py-2 rounded-lg font-label-md hover:opacity-90 transition-all">
            Action Alert
          </button>
          <div className="flex items-center space-x-2 border-l border-outline-variant/30 pl-4">
            <button className="p-2 text-on-surface-variant hover:text-primary transition-colors"><span className="material-symbols-outlined">notifications</span></button>
            <button className="p-2 text-on-surface-variant hover:text-primary transition-colors"><span className="material-symbols-outlined">history</span></button>
            <div className="w-8 h-8 rounded-full bg-primary-container overflow-hidden border border-outline-variant/50">
              <img 
                alt="Administrator Profile" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqiw5D0eK6upv_vwfnoVfrQjEjAAWn46n_-TUaKpwhX8PE90RNBCTrCtyXL5cMUcwlzVATCjRn-n9LPpfBb6ydTTAA" 
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="ml-64 mt-16 p-margin-desktop min-h-screen bg-surface-container-lowest" style={{ backgroundImage: 'linear-gradient(#1a433110 1px, transparent 1px), linear-gradient(90deg, #1a433110 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
        {/* Hero Dashboard Header */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="inline-block px-3 py-1 bg-primary-container text-on-primary-container font-label-md rounded mb-4">REAL-TIME SURVEILLANCE ACTIVE</span>
              <h2 className="font-headline-lg text-headline-lg text-primary mb-2">Tactical Operations Dashboard</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Visualizing demographic shifts and field agent performance across priority districts. High-fidelity geographic intelligence for optimized resource allocation.</p>
            </div>
            <div className="flex gap-4">
              <div className="bg-surface-container p-4 rounded-lg border border-outline-variant/20 min-w-[160px]">
                <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-1">Total Reach</p>
                <p className="font-headline-sm text-headline-sm text-primary">4.2M <span className="text-label-md text-primary/60">+12%</span></p>
              </div>
              <div className="bg-surface-container p-4 rounded-lg border border-outline-variant/20 min-w-[160px]">
                <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-1">Active Agents</p>
                <p className="font-headline-sm text-headline-sm text-primary">1,248 <span className="text-label-md text-secondary">Live</span></p>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-12 gap-gutter">
          {/* Voter Heatmap (Primary Visual) */}
          <div className="col-span-12 lg:col-span-8 bg-white border border-outline-variant/30 rounded-lg overflow-hidden flex flex-col h-[600px] group shadow-sm">
            <div className="p-6 border-b border-outline-variant/20 flex justify-between items-center bg-surface-container-lowest">
              <div className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-primary">map</span>
                <h3 className="font-headline-sm text-headline-sm text-primary">Interactive Voter Heatmap</h3>
              </div>
              <div className="flex space-x-2">
                <button className="px-3 py-1 text-label-md bg-primary-container text-on-primary-container rounded">Demographics</button>
                <button className="px-3 py-1 text-label-md hover:bg-surface-container rounded transition-colors">Affiliation</button>
                <button className="px-3 py-1 text-label-md hover:bg-surface-container rounded transition-colors">Turnout Risk</button>
              </div>
            </div>
            <div className="flex-1 relative bg-surface-dim overflow-hidden">
              <img 
                className="w-full h-full object-cover grayscale-[0.3]" 
                alt="Interactive geographic heatmap" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2To3Okpy2YbtDAt6E1cNBbwhl0Ch68WAaRiYxm-7kP7R5yGDkg3BTpC0XdafUHdzRH4xRRuA-7KWPe2TYIYf88ws5fdsskU7s21GFmFTs_saFnejzGV61M6P" 
              />
              <div className="absolute inset-0 bg-primary/10 pointer-events-none"></div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur p-4 rounded border border-outline-variant/30 space-y-3 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-secondary"></div>
                  <span className="font-label-md text-label-md text-primary">Critical Swing (45-55%)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <span className="font-label-md text-label-md text-primary">Strong Hold (70%+)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-tertiary-container"></div>
                  <span className="font-label-md text-label-md text-primary">Developing Territory</span>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/3 group cursor-pointer">
                <div className="w-4 h-4 bg-secondary rounded-full animate-ping absolute"></div>
                <div className="w-4 h-4 bg-secondary rounded-full relative border-2 border-white"></div>
                <div className="hidden group-hover:block absolute top-6 left-1/2 -translate-x-1/2 bg-primary text-white p-3 rounded shadow-xl w-48 z-10">
                  <p className="font-label-lg">District 12B</p>
                  <div className="mt-1 h-1 w-full bg-on-primary/20 rounded">
                    <div className="h-full bg-secondary-container w-[72%]"></div>
                  </div>
                  <p className="text-[10px] mt-2 opacity-80">72% Registration Momentum</p>
                </div>
              </div>
            </div>
          </div>

          {/* Field Agent Status (Sidebar) */}
          <div className="col-span-12 lg:col-span-4 bg-white border border-outline-variant/30 rounded-lg flex flex-col h-[600px] shadow-sm">
            <div className="p-6 border-b border-outline-variant/20 flex justify-between items-center">
              <h3 className="font-headline-sm text-headline-sm text-primary">Field Agents</h3>
              <span className="px-2 py-0.5 bg-secondary/10 text-secondary font-label-md rounded">Active Now</span>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              <div className="flex items-center p-3 rounded-lg border border-outline-variant/10 hover:border-outline-variant/40 transition-all cursor-pointer">
                <div className="relative">
                  <img className="w-12 h-12 rounded-full object-cover border-2 border-surface-container" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAy6PYiNsYzPjdjBTrMKLhFpr_rH8To7rRYqscFjAZ9qheJFMOcwpjbvb6Os3qsSOmfGp5_phq5xIguVmH3ZTWQRKse2n5oZWndyVn_QQJapv_-vm30pCqvH5S_ZSduMbgaL7d0HHthVKKP9W86LSyUwmpaKdABIGA94jVyD8LbGFXPyNh9JuTihk9BMLAo0mGQuOzmkDpnNXyviXT0NMLePpxH50H0TzK4h5CrMGU6g89emFYviEk2VKIvpTPwOsU-bgDxUynlMv8u" alt="Marcus Thorne" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div className="ml-4 flex-1">
                  <p className="font-label-lg text-primary">Marcus Thorne</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">District 04 | Canvassing</p>
                </div>
                <div className="text-right">
                  <p className="font-label-md text-primary">82%</p>
                  <p className="text-[10px] text-on-surface-variant">Quota</p>
                </div>
              </div>
              <div className="flex items-center p-3 rounded-lg border border-outline-variant/10 hover:border-outline-variant/40 transition-all cursor-pointer">
                <div className="relative">
                  <img className="w-12 h-12 rounded-full object-cover border-2 border-surface-container" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAr3yn5GeqoNJAF7gmriJsSQ-uwcco1y80A0nHCSdX8C4NA8g_y3firuBbTNrf87V2i62jXsAf0Sx3oBKeH596sA-zV3BZUghINRO4lgy9SFCvdfSn1jfrJ1kUdMhZlfgryllnbfJ6LJoXTfKogcLf7cqJAZ65_2BwIe6504UYy2TfG--WoLpaCwbAB9f1qpfVwt5wlkY3Y1dspRD_VZ5dBH" alt="Elena Rodriguez" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div className="ml-4 flex-1">
                  <p className="font-label-lg text-primary">Elena Rodriguez</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">District 12 | Registration</p>
                </div>
                <div className="text-right">
                  <p className="font-label-md text-primary">105%</p>
                  <p className="text-[10px] text-secondary font-bold">EXCEEDING</p>
                </div>
              </div>
              <div className="flex items-center p-3 rounded-lg border border-outline-variant/10 hover:border-outline-variant/40 transition-all cursor-pointer">
                <div className="relative">
                  <img className="w-12 h-12 rounded-full object-cover border-2 border-surface-container" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwzgMSPDxcIjmmFFOPheIzRzLGf09ym7pnvXiehpnPSCxq4YPAy7KFseCQ43YQMnE-7qyRIlGhCX19w7U1AEJMbILoi2FpLz2HXLdsFSy3oXBEdZh03_lYpfwp4rPxtdVgRCr2AWsL7YQ16vt6LkPukzLRxeXW5vgXLpht0yk9dCbSjpU9mgwqjN3hVrvOI-0gRWWrepXJ06Ayoe55oT8osXWlPySGaIvXvnf3_1otLTtbn0o__40G-Q6Iru0giM2stNLvoBGE9NL4" alt="David Chen" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-yellow-500 rounded-full border-2 border-white"></div>
                </div>
                <div className="ml-4 flex-1">
                  <p className="font-label-lg text-primary">David Chen</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">District 08 | Logistics</p>
                </div>
                <div className="text-right">
                  <p className="font-label-md text-primary">42%</p>
                  <p className="text-[10px] text-on-surface-variant">Delay</p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-surface-container-low">
              <button className="w-full py-2 text-label-md text-primary border border-primary/20 rounded hover:bg-primary/5 transition-all">View All 1,248 Agents</button>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-7 bg-white border border-outline-variant/30 rounded-lg p-6 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="font-headline-sm text-headline-sm text-primary">Live Polling Sentiment</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Aggregate feed from top-tier polling datasets &amp; field reports</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              <span className="font-label-md text-label-md text-secondary">LIVE FEED</span>
            </div>
          </div>
          <div className="h-64 flex items-end justify-between space-x-2 mb-4">
            <div className="flex-1 bg-surface-container-low rounded-t-lg relative overflow-hidden h-full">
              <svg className="absolute inset-0 w-full h-full" preserveaspectratio="none" viewbox="0 0 400 100">
                <path d="M0,80 Q50,70 100,75 T200,40 T300,50 T400,20" fill="none" stroke="#1a4331" strokeWidth="3"></path>
              </svg>
              <div className="absolute top-4 left-4">
                <p className="font-label-md text-primary">Trust Metric</p>
                <p className="font-headline-sm text-headline-sm text-primary">68.4%</p>
              </div>
            </div>
            <div className="flex-1 bg-surface-container-low rounded-t-lg relative overflow-hidden h-full">
              <svg className="absolute inset-0 w-full h-full" preserveaspectratio="none" viewbox="0 0 400 100">
                <path d="M0,50 Q100,60 200,45 T400,30" fill="none" stroke="#af2d2f" strokeWidth="3"></path>
              </svg>
              <div className="absolute top-4 left-4">
                <p className="font-label-md text-secondary">Volatilty Index</p>
                <p className="font-headline-sm text-headline-sm text-secondary">12.2%</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 pt-6 border-t border-outline-variant/20">
            <div className="text-center">
              <p className="font-label-md text-on-surface-variant mb-1">Stability</p>
              <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[85%]"></div>
              </div>
            </div>
            <div className="text-center">
              <p className="font-label-md text-on-surface-variant mb-1">Reach</p>
              <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[62%]"></div>
              </div>
            </div>
            <div className="text-center">
              <p className="font-label-md text-on-surface-variant mb-1">Momentum</p>
              <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-secondary w-[77%]"></div>
              </div>
            </div>
            <div className="text-center">
              <p className="font-label-md text-on-surface-variant mb-1">Conversion</p>
              <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[44%]"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-5 bg-white border border-outline-variant/30 rounded-lg p-6 shadow-sm overflow-hidden flex flex-col">
          <h3 className="font-headline-sm text-headline-sm text-primary mb-6">Registration Tracker</h3>
          <div className="space-y-6 flex-1 overflow-y-auto pr-2">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-label-lg text-primary">District 01: North Metropolitan</span>
                <span className="font-label-md text-primary">94%</span>
              </div>
              <div className="h-3 w-full bg-tertiary-container/30 rounded-full overflow-hidden relative">
                <div className="h-full bg-secondary w-[94%] transition-all duration-1000"></div>
              </div>
              <div className="flex justify-between mt-2">
                <p className="text-[10px] text-on-surface-variant">Goal: 50,000 Voters</p>
                <p className="text-[10px] text-primary font-bold">47,200 REGISTERED</p>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-label-lg text-primary">District 05: Central Hub</span>
                <span className="font-label-md text-primary">76%</span>
              </div>
              <div className="h-3 w-full bg-tertiary-container/30 rounded-full overflow-hidden relative">
                <div className="h-full bg-secondary w-[76%] transition-all duration-1000"></div>
              </div>
              <div className="flex justify-between mt-2">
                <p className="text-[10px] text-on-surface-variant">Goal: 85,000 Voters</p>
                <p className="text-[10px] text-primary font-bold">64,600 REGISTERED</p>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-label-lg text-primary">District 12: South Plains</span>
                <span className="font-label-md text-secondary">42% (Critical)</span>
              </div>
              <div className="h-3 w-full bg-tertiary-container/30 rounded-full overflow-hidden relative">
                <div className="h-full bg-secondary w-[42%] transition-all duration-1000"></div>
              </div>
              <div className="flex justify-between mt-2">
                <p className="text-[10px] text-on-surface-variant">Goal: 32,000 Voters</p>
                <p className="text-[10px] text-primary font-bold">13,440 REGISTERED</p>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-label-lg text-primary">District 08: Tech Corridor</span>
                <span className="font-label-md text-primary">88%</span>
              </div>
              <div className="h-3 w-full bg-tertiary-container/30 rounded-full overflow-hidden relative">
                <div className="h-full bg-secondary w-[88%] transition-all duration-1000"></div>
              </div>
              <div className="flex justify-between mt-2">
                <p className="text-[10px] text-on-surface-variant">Goal: 120,000 Voters</p>
                <p className="text-[10px] text-primary font-bold">105,600 REGISTERED</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Shell */}
      <footer className="ml-64 w-[calc(100%-16rem)] flex flex-col md:flex-row justify-between items-center py-8 px-margin-desktop bg-surface-container-low border-t border-outline-variant/20 mt-12">
        <div className="mb-4 md:mb-0">
          <h4 className="font-label-lg text-label-lg font-bold text-primary mb-1">CivicOS</h4>
          <p className="font-body-sm text-body-sm text-on-surface-variant opacity-70">© 2024 Visionary Tradition Movement. All Rights Reserved. Institutional Oversight Protocol v4.2</p>
        </div>
        <div className="flex space-x-8">
          <Link className="text-on-surface-variant hover:text-primary transition-colors font-label-md underline-offset-4 hover:underline" href="#">Ethics Policy</Link>
          <Link className="text-on-surface-variant hover:text-primary transition-colors font-label-md underline-offset-4 hover:underline" href="#">Privacy</Link>
          <Link className="text-on-surface-variant hover:text-primary transition-colors font-label-md underline-offset-4 hover:underline" href="#">Legal</Link>
          <Link className="text-on-surface-variant hover:text-primary transition-colors font-label-md underline-offset-4 hover:underline" href="#">Contact Bureau</Link>
        </div>
      </footer>
    </div>
  );
}
