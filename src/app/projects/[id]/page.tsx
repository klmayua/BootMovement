import React from 'react';

export default function ProjectDetailPage() {
  return (
    <div className="bg-surface text-on-surface font-body-md selection:bg-primary-fixed selection:text-primary">
      {/* Top Navigation Bar */}
      <header className="bg-surface dark:bg-on-background w-full sticky top-0 z-50 border-b border-outline-variant/30 dark:border-outline/20">
        <div className="flex justify-between items-center px-margin-desktop py-4 w-full">
          <div className="flex items-center gap-8">
            <span className="font-headline-sm text-headline-sm font-bold text-primary dark:text-primary-fixed-dim cursor-pointer">BOOT Civic OS</span>
            <nav className="hidden md:flex gap-6">
              <a className="text-on-surface-variant dark:text-surface-variant font-body-md hover:bg-surface-container-low dark:hover:bg-surface-container-highest transition-colors px-3 py-1 rounded" href="#">Dashboard</a>
              <a className="text-on-surface-variant dark:text-surface-variant font-body-md hover:bg-surface-container-low dark:hover:bg-surface-container-highest transition-colors px-3 py-1 rounded" href="#">Communities</a>
              <a className="text-primary dark:text-primary-fixed-dim font-bold border-b-2 border-primary font-body-md px-1" href="#">Projects</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden lg:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
              <input className="pl-10 pr-4 py-2 bg-surface-container-low border-none rounded-full focus:ring-2 focus:ring-primary w-64 text-body-sm" placeholder="Search initiatives..." type="text" />
            </div>
            <button className="material-symbols-outlined text-primary p-2 hover:bg-surface-container-low rounded-full transition-all">notifications</button>
            <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center cursor-pointer">
              <span className="material-symbols-outlined text-white">account_circle</span>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar Navigation */}
      <aside className="fixed left-0 top-0 h-screen w-64 bg-surface-container-low dark:bg-on-background border-r border-outline-variant/30 dark:border-outline/20 flex flex-col h-full py-8 px-4 hidden xl:flex z-40 pt-24">
        <div className="space-y-2 flex-grow">
          <div className="flex items-center gap-3 px-4 py-3 text-primary dark:text-primary-fixed-dim font-bold bg-primary-fixed/20 dark:bg-primary-container/30 rounded-lg cursor-pointer transition-all hover:translate-x-1">
            <span className="material-symbols-outlined">assignment</span>
            <span className="font-label-lg text-label-lg">Projects</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-surface-variant font-label-lg text-label-lg hover:bg-surface-container dark:hover:bg-primary-container/10 rounded-lg cursor-pointer transition-all hover:translate-x-1">
            <span className="material-symbols-outlined">dashboard</span>
            <span>Dashboard</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-surface-variant font-label-lg text-label-lg hover:bg-surface-container dark:hover:bg-primary-container/10 rounded-lg cursor-pointer transition-all hover:translate-x-1">
            <span className="material-symbols-outlined">groups</span>
            <span>Communities</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-surface-variant font-label-lg text-label-lg hover:bg-surface-container dark:hover:bg-primary-container/10 rounded-lg cursor-pointer transition-all hover:translate-x-1">
            <span className="material-symbols-outlined">monitoring</span>
            <span>Analytics</span>
          </div>
        </div>
        <div className="mt-auto space-y-2 border-t border-outline-variant/30 pt-4">
          <button className="w-full bg-secondary text-white py-3 rounded-lg font-bold text-label-lg hover:opacity-90 transition-opacity">Donate Now</button>
          <div className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container rounded-lg cursor-pointer transition-all">
            <span className="material-symbols-outlined">help</span>
            <span className="font-label-lg">Support</span>
          </div>
        </div>
      </aside>

      <main className="xl:ml-64 min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[400px] w-full flex items-end">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDNKgqhhykNCtVUVVAGrPR1VKYTzoG7IdNxiAiUBwKZKz5rMwHKhjLgyfI9kWPMN7Vj8f6btKxigSktp_15qprmjqEhi5ssSZjdB3yAGNVaaNFP6IBUG2EgzV5BarE1ZyOUF4klNw2KI-Rnwhrc1E-PUmmTyxDmwKEcLtk1jV8-G0BfpczMs9UsOn-mqX0vROv33x9uTjtX1ofIXfhnpUJ8t1bmjYOVcP1TPyZlKniggRw9bNpyvHuPU5fSwEjJFillGsUFvc5Gx-NP')" }}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
          </div>
          <div className="relative w-full max-w-container-max mx-auto px-margin-desktop pb-12 text-white">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-primary px-3 py-1 rounded text-label-md uppercase tracking-wider">National Initiative</span>
              <span className="text-label-md flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">location_on</span> Infrastructure Division</span>
            </div>
            <h1 className="font-display-lg text-display-lg mb-2">Project North Star: Renewable Grid 2030</h1>
            <p className="font-body-lg text-body-lg max-w-2xl opacity-90">Revolutionizing the national energy backbone through localized community-led renewable hubs and smart-grid integration.</p>
          </div>
        </section>

        {/* Content Grid */}
        <div className="max-w-container-max mx-auto px-margin-desktop py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            {/* Main Content */}
            <div className="lg:col-span-8 space-y-12">
              {/* Funding & Progress Card */}
              <div className="bg-surface-bright border border-outline-variant/30 p-8 rounded-lg">
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-1">Funding Status</h3>
                    <p className="text-body-sm text-on-surface-variant">Public-private partnership milestone 3 of 5</p>
                  </div>
                  <div className="text-right">
                    <span className="font-headline-sm text-headline-sm text-secondary">$14.2M</span>
                    <span className="text-body-sm text-on-surface-variant"> / $20M target</span>
                  </div>
                </div>
                <div className="h-4 w-full bg-tertiary-fixed rounded-full overflow-hidden flex">
                  <div className="h-full bg-secondary" style={{ width: '71%' }}></div>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div className="p-4 bg-surface-container-low rounded">
                    <span className="block text-label-md text-on-surface-variant mb-1">Backers</span>
                    <span className="font-headline-sm text-headline-sm text-primary">4,821</span>
                  </div>
                  <div className="p-4 bg-surface-container-low rounded">
                    <span className="block text-label-md text-on-surface-variant mb-1">Time Left</span>
                    <span className="font-headline-sm text-headline-sm text-primary">124 Days</span>
                  </div>
                  <div className="p-4 bg-surface-container-low rounded">
                    <span className="block text-label-md text-on-surface-variant mb-1">Community Share</span>
                    <span className="font-headline-sm text-headline-sm text-primary">32%</span>
                  </div>
                </div>
              </div>

              {/* Roadmap */}
              <div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-8 border-b border-outline-variant/30 pb-4">Implementation Roadmap</h3>
                <div className="space-y-0 relative before:absolute before:left-8 before:top-0 before:bottom-0 before:w-px before:bg-outline-variant/50">
                  {/* Phase 1 */}
                  <div className="relative pl-24 pb-12 group">
                    <div className="absolute left-6 top-0 w-4 h-4 rounded-full bg-primary ring-8 ring-surface-bright group-hover:scale-125 transition-transform"></div>
                    <div className="bg-white p-6 border border-outline-variant/30 hover:border-primary/50 transition-colors">
                      <span className="text-label-md text-secondary uppercase font-bold mb-2 block">Phase 01: Planning &amp; Compliance</span>
                      <h4 className="font-headline-sm text-headline-sm mb-3">Environmental Impact &amp; Site Selection</h4>
                      <p className="text-body-md text-on-surface-variant mb-4">Completed mapping of top-tier solar and wind corridors across the northern territories. Regulatory approval secured for 85% of planned nodes.</p>
                      <div className="flex items-center gap-2 text-primary font-bold">
                        <span className="material-symbols-outlined text-[20px]">check_circle</span>
                        <span className="text-label-lg">Completed July 2024</span>
                      </div>
                    </div>
                  </div>
                  {/* Phase 2 */}
                  <div className="relative pl-24 pb-12 group">
                    <div className="absolute left-6 top-0 w-4 h-4 rounded-full bg-secondary ring-8 ring-surface-bright group-hover:scale-125 transition-transform animate-pulse"></div>
                    <div className="bg-white p-6 border border-secondary/30 ring-1 ring-secondary/10">
                      <span className="text-label-md text-secondary uppercase font-bold mb-2 block">Phase 02: Resource Mobilization</span>
                      <h4 className="font-headline-sm text-headline-sm mb-3">Local Workforce Recruitment</h4>
                      <p className="text-body-md text-on-surface-variant mb-4">Onboarding 2,000 specialized technicians and logistical support teams. Focus on local community training programs.</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-secondary font-bold">
                          <span className="material-symbols-outlined text-[20px] animate-spin">sync</span>
                          <span className="text-label-lg">In Progress</span>
                        </div>
                        <button className="text-primary font-bold text-label-lg flex items-center gap-1 hover:underline">Apply for Roster <span className="material-symbols-outlined">arrow_right_alt</span></button>
                      </div>
                    </div>
                  </div>
                  {/* Phase 3 */}
                  <div className="relative pl-24 group">
                    <div className="absolute left-6 top-0 w-4 h-4 rounded-full bg-outline-variant ring-8 ring-surface-bright group-hover:scale-125 transition-transform"></div>
                    <div className="bg-surface-container-low/50 p-6 border border-outline-variant/20">
                      <span className="text-label-md text-on-surface-variant uppercase font-bold mb-2 block">Phase 03: Deployment</span>
                      <h4 className="font-headline-sm text-headline-sm mb-3 text-on-surface-variant">Infrastructure Integration</h4>
                      <p className="text-body-md text-on-surface-variant/70">Installation of the primary high-voltage direct current (HVDC) backbone and community storage batteries.</p>
                      <span className="text-label-lg text-on-surface-variant/50">Estimated Q1 2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Content */}
            <div className="lg:col-span-4 space-y-gutter">
              <div className="bg-primary-container text-white p-8 rounded-lg shadow-xl shadow-primary/10">
                <h4 className="font-headline-sm text-headline-sm mb-4">Be the Catalyst</h4>
                <p className="text-body-md opacity-80 mb-6">Join thousands of citizens driving the transition to energy independence. Your participation secures our future.</p>
                <div className="space-y-3">
                  <button className="w-full bg-secondary hover:bg-on-secondary-fixed-variant transition-colors py-4 rounded font-bold text-headline-sm flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>volunteer_activism</span>
                    Join the Roster
                  </button>
                  <button className="w-full bg-transparent border border-white/30 hover:bg-white/10 transition-colors py-4 rounded font-bold text-label-lg">
                    View Technical Brief
                  </button>
                </div>
              </div>
              <div className="bg-white border border-outline-variant/30 p-6 rounded-lg">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="font-label-lg text-label-lg uppercase text-primary">Active Roster</h4>
                  <span className="text-label-md bg-surface-container px-2 py-1 rounded text-primary">84% Filled</span>
                </div>
                <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
                  <div className="flex items-center gap-4 p-3 hover:bg-surface-container-low transition-colors rounded cursor-pointer">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container-highest">
                      <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHm-3SWVkcIksKdjrxauT8hkHVXTJjLaQ0UnNPydSEy130KRx7eU_196xC_dqYc6I9o2jW7_IIyw56cEMwRKUKMAlOzSIilVIPfp6dNKUZFrwTJN3rqnaMJR5ElgzGocdPl61tk7mDNvRLtTts8czg8NnMAZNnmm1Ufjsj2TwU7Xy55IMACYTWXiQrqtZ5EJJRKuC0gva4g8Mo-DrDfWgtKCf9scrWfFoes_TFJT6InVWlh0ickfAU3w3Zsc1OLIctzAlEYP0rPKA2" alt="Marcus Thorne" />
                    </div>
                    <div className="flex-grow">
                      <p className="font-bold text-body-md leading-tight">Marcus Thorne</p>
                      <p className="text-label-md text-on-surface-variant">Lead Grid Architect</p>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-green-500 shadow-sm"></div>
                  </div>
                  <div className="flex items-center gap-4 p-3 hover:bg-surface-container-low transition-colors rounded cursor-pointer">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container-highest">
                      <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwYLBmtyJQJMEsknORrcCJhak6lroxkHRYfAw8FYnq-VtyMANjSYzZeHxBaWjT5WuFy0U57b2KdgcG3ZXC2xxxtf-nwrIEjHNjvZJ_ST6-kQD1OHuZZLYA-O-Y2IjXmYkxCyZvXrOUx4ET0xZSvW1ELgPMixllJgi-5XDrG-0IH6vNXhxnc2LZAhUDyRcCfPHEsvd60K8dWBpY671K_Pbbgb0TvUGd_2kz0d8Hpvh8lxYib8df0OasXiDsggEPNkeHlqhiYgBdEqfv" alt="Sarah Chen" />
                    </div>
                    <div className="flex-grow">
                      <p className="font-bold text-body-md leading-tight">Sarah Chen</p>
                      <p className="text-label-md text-on-surface-variant">Community Liaison</p>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-green-500 shadow-sm"></div>
                  </div>
                  <div className="flex items-center gap-4 p-3 hover:bg-surface-container-low transition-colors rounded cursor-pointer">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container-highest flex items-center justify-center text-primary-container font-bold text-label-md">
                      JD
                    </div>
                    <div className="flex-grow">
                      <p className="font-bold text-body-md leading-tight">Jameson D.</p>
                      <p className="text-label-md text-on-surface-variant">Logistics Manager</p>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500 shadow-sm"></div>
                  </div>
                </div>
                <button className="w-full mt-6 py-2 text-label-lg font-bold text-primary hover:bg-surface-container-low transition-colors rounded border border-primary/10">See Full Directory</button>
              </div>
              <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/20">
                <h4 className="font-label-lg text-label-lg uppercase text-primary mb-4">Primary Hub</h4>
                <div className="aspect-video w-full bg-surface-container-highest rounded overflow-hidden mb-4 grayscale">
                  <img className="w-full h-full object-cover opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGoAh3HuH6Yx07AcFd_cuX37P_mB8JMiHDODtp8v-L-l2ncgzZqM4sy74_ov1DOPVldEqQQYLzXm8sClUCQEKutUOZIrGQyM3E-YagZq-qrYo-Q91VWyhCWyhBoG0kh1PPnPdqNFb48NJIR7PQL6JqK3CGHNN90Khc0dMFb_K_kmKDlo7gHEIpuLHY7bHJS2Qp9MOxFZ4jX0iqftvTmDGkSl9Kh7HFxulODbW2W7gWPDzLbBIn-SKjTGq162LiHhhQDVcD_xJ_lvd-" alt="Aerial city grid" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-body-sm">
                    <span className="text-on-surface-variant">Region:</span>
                    <span className="font-bold">Western Corridor</span>
                  </div>
                  <div className="flex justify-between text-body-sm">
                    <span className="text-on-surface-variant">Impact:</span>
                    <span className="font-bold">2.4M Residents</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-surface-container-highest dark:bg-on-background border-t border-outline-variant/30 dark:border-outline/20 w-full py-16">
        <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter">
          <div className="md:col-span-1">
            <span className="font-headline-sm text-headline-sm text-primary dark:text-primary-fixed-dim block mb-6">BOOT Civic OS</span>
            <p className="text-body-sm text-on-surface-variant dark:text-surface-variant">Powering the next generation of institutional governance and community cooperation.</p>
          </div>
          <div>
            <h5 className="font-label-lg text-label-lg text-primary mb-6">Initiatives</h5>
            <ul className="space-y-4">
              <li><a className="text-body-sm text-on-surface-variant hover:text-primary transition-all" href="#">Energy Grid</a></li>
              <li><a className="text-body-sm text-on-surface-variant hover:text-primary transition-all" href="#">Education Labs</a></li>
              <li><a className="text-body-sm text-on-surface-variant hover:text-primary transition-all" href="#">Health Connect</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-label-lg text-label-lg text-primary mb-6">Transparency</h5>
            <ul className="space-y-4">
              <li><a className="text-body-sm text-on-surface-variant hover:text-primary transition-all" href="#">Transparency Report</a></li>
              <li><a className="text-body-sm text-on-surface-variant hover:text-primary transition-all" href="#">Audits</a></li>
              <li><a className="text-body-sm text-on-surface-variant hover:text-primary transition-all" href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-label-lg text-label-lg text-primary mb-6">Stay Informed</h5>
            <div className="flex gap-2">
              <input className="bg-white border-outline-variant/30 rounded px-4 py-2 text-body-sm focus:ring-primary grow" placeholder="Email address" type="email" />
              <button className="bg-primary text-white p-2 rounded material-symbols-outlined">arrow_forward</button>
            </div>
          </div>
        </div>
        <div className="max-w-container-max mx-auto px-margin-desktop mt-12 pt-8 border-t border-outline-variant/10 text-center">
          <p className="text-label-md text-on-surface-variant">© 2024 BOOT Civic Operating System. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
