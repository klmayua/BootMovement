import React from 'react';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';

export default function MovementHubPage() {
  return (
    <PublicLayout>
      <div className="flex flex-col min-h-screen">
        <main className="flex-1 px-margin-mobile md:px-margin-desktop py-12 max-w-[1000px] mx-auto w-full">
          {/* Hero Header */}
          <section className="mb-16">
            <span className="font-label-lg text-label-lg text-secondary-container bg-secondary-container/10 px-3 py-1 rounded-sm uppercase tracking-tighter mb-4 inline-block">Real-time Accountability</span>
            <h1 className="font-display-lg text-display-lg text-primary mb-6">Movement Performance Dashboard</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              A transparent window into the BOOT Civic Movement. We track every initiative, every local chapter, and every metric of success to ensure our visionary tradition remains grounded in results.
            </p>
          </section>

          {/* Impact Metrics Bento Grid */}
          <section className="grid grid-cols-12 gap-6 mb-20">
            {/* Large Metric Card */}
            <div className="col-span-12 md:col-span-8 bg-primary-container rounded-xl p-8 text-on-primary shadow-sm relative overflow-hidden group">
              <div className="relative z-10">
                <p className="font-label-lg text-label-lg text-primary-fixed-dim uppercase tracking-widest mb-2">Total Movement Impact</p>
                <h3 className="font-display-lg text-[64px] leading-none mb-4">2.4M</h3>
                <p className="font-body-md text-body-md text-on-primary-container max-w-md">Citizens empowered through our legislative transparency portals and community-led accountability sessions across 42 regions.</p>
              </div>
              <div className="absolute -right-12 -bottom-12 opacity-10 group-hover:scale-110 transition-transform duration-700">
                <span className="material-symbols-outlined text-[200px]">analytics</span>
              </div>
            </div>
            {/* Secondary Metric */}
            <div className="col-span-12 md:col-span-4 bg-surface-container-high border border-outline-variant/30 rounded-xl p-8 flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-secondary text-4xl mb-4">volunteer_activism</span>
                <p className="font-label-lg text-label-lg text-on-surface-variant uppercase tracking-widest mb-1">Active Chapters</p>
                <h3 className="font-headline-lg text-headline-lg text-primary">156</h3>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant border-t border-outline-variant/20 pt-4">+12% from last quarter</p>
            </div>
            {/* Small Metrics */}
            <div className="col-span-4 bg-white border border-outline-variant/20 rounded-xl p-6 shadow-sm hover:border-secondary/30 transition-colors">
              <p className="font-label-md text-label-md text-on-surface-variant mb-2">Policies Drafted</p>
              <h4 className="font-headline-md text-headline-md text-primary">84</h4>
            </div>
            <div className="col-span-4 bg-white border border-outline-variant/20 rounded-xl p-6 shadow-sm hover:border-secondary/30 transition-colors">
              <p className="font-label-md text-label-md text-on-surface-variant mb-2">Local Events</p>
              <h4 className="font-headline-md text-headline-md text-primary">1,240</h4>
            </div>
            <div className="col-span-4 bg-white border border-outline-variant/20 rounded-xl p-6 shadow-sm hover:border-secondary/30 transition-colors">
              <p className="font-label-md text-label-md text-on-surface-variant mb-2">Volunteers</p>
              <h4 className="font-headline-md text-headline-md text-primary">32k</h4>
            </div>
          </section>

          {/* The Pillars Section */}
          <section className="mb-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div>
                <h2 className="font-headline-lg text-headline-lg text-primary mb-2">Core Movement Pillars</h2>
                <p className="font-body-md text-body-md text-on-surface-variant">Our strategic focus areas for the 2024-2025 cycle.</p>
              </div>
              <button className="text-secondary font-label-lg text-label-lg flex items-center gap-2 hover:underline w-fit">
                View Strategic Plan <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {/* Pillar 1 */}
              <div className="group cursor-pointer">
                <div className="aspect-[4/5] relative overflow-hidden rounded-lg mb-4">
                  <img 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    alt="Institutional stability"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5PZ3cCcZpfVhkFfb19SiI-20nBkKKWCHVptWcne1bAuWUkiJleKBluFrsfTs65_NnFbMh_cmo3-quB8nXWCCW3koO-cMb0X6E-UUtR3xoYAJqTe1UOm0rrgtQS_V90AykVuUEBcMbxcSeMHB9AeaBZnLr7d1BeROmDdXthho_zhJqKNE8hdg3T_Nx6WHsf9tNdA-P5TovIlMbMmAwd85PgIUgsw7BXlCCs_eLf2YPHNiqAikQAH55hvWZ3LO9hcZkSzGk_L_dC3ss"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="material-symbols-outlined text-tertiary-fixed mb-2">account_balance</span>
                    <h4 className="text-white font-headline-sm text-headline-sm">Legislative Integrity</h4>
                  </div>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">Restoring faith in the democratic process through mandatory transparency and lobbyist oversight.</p>
              </div>
              {/* Pillar 2 */}
              <div className="group cursor-pointer">
                <div className="aspect-[4/5] relative overflow-hidden rounded-lg mb-4">
                  <img 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    alt="Civic Education"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDbv_OpsG9AICDF25xk6ATMFwpgQKv5qhFpG8lZCoqXXtZfyT-jumz-JO9SpRm57wcV-_qSgUvUPGLZW2mujX-wqthyGc_3SCpImirkLEHlDSf8-jB2nWhg8CAdCnpgKlg6ZI"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="material-symbols-outlined text-tertiary-fixed mb-2">diversity_3</span>
                    <h4 className="text-white font-headline-sm text-headline-sm">Civic Education</h4>
                  </div>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">Equipping the next generation of leaders with the tools for effective local governance.</p>
              </div>
              {/* Pillar 3 */}
              <div className="group cursor-pointer">
                <div className="aspect-[4/5] relative overflow-hidden rounded-lg mb-4">
                  <img 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    alt="Economic Stability"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwpRyUK9J_4HdLSUjOojMFi-JK0zcWFtrfj0nIAIdes0j5W3RANCtl0mc9LSCS5CkNl8YSg9-j8Ciuh7YqUdtlkiAnJzGn"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="material-symbols-outlined text-tertiary-fixed mb-2">monitoring</span>
                    <h4 className="text-white font-headline-sm text-headline-sm">Economic Stability</h4>
                  </div>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">Fostering sustainable local growth models that prioritize long-term fiscal health over short-term gains.</p>
              </div>
            </div>
          </section>

          {/* Active Chapters / Map Section */}
          <section className="mb-20 bg-surface-container-low rounded-2xl p-10 border border-outline-variant/30 flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-6">Chapter Network</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8">Our movement grows bottom-up. Explore our active local chapters and find your nearest movement hub to start contributing today.</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-tertiary mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
                  <div>
                    <h5 className="font-label-lg text-label-lg text-primary">Regional Headquarters</h5>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Strategic coordination in 12 major metropolitan areas.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-tertiary mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
                  <div>
                    <h5 className="font-label-lg text-label-lg text-primary">Grassroots Units</h5>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Local action groups focusing on municipal transparency.</p>
                  </div>
                </li>
              </ul>
              <div className="mt-10">
                <button className="bg-primary text-on-primary px-8 py-3 font-label-lg text-label-lg rounded-DEFAULT hover:bg-primary-container transition-colors">
                  Find a Chapter
                </button>
              </div>
            </div>
            <div className="flex-1 w-full max-w-md aspect-square rounded-xl overflow-hidden shadow-sm border border-outline-variant/20 relative">
              <img 
                className="w-full h-full object-cover grayscale opacity-80" 
                alt="Stylized map of a metropolitan area"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKmAiXm-RhkLC8o-rbuo0tDUcRvJBjykykzwqWCegU0zXugym1Hq-9j3QQVC9R6CSwMt4-unsbQLWKhOPgrjztSfrrVA719l5InwP5tffQUZTkEvmYB40Sb5_TUfQC7b7hlMu-KJO_Tr7_DB_wr7ph9PItkef971e36GS-LTHWmC8xJUW_LrVmK3SSRHzqMxek2OVElTHSS8Hxjw3EKQqf5pvWkA0COf6y-nfszRtD84Uz2k8Yh26i6LNzrNvVzmcIice7lPQ98mwJ"
              />
              <div className="absolute inset-0 bg-primary/5"></div>
              {/* Mock Map Markers */}
              <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-secondary rounded-full animate-pulse border-2 border-white"></div>
              <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-secondary rounded-full animate-pulse border-2 border-white"></div>
              <div className="absolute top-1/2 right-1/2 w-4 h-4 bg-secondary rounded-full animate-pulse border-2 border-white shadow-lg"></div>
            </div>
          </section>
        </main>
      </div>
    </PublicLayout>
  );
}