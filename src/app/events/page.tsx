"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';

export default function EventsPage() {
  const [view, setView] = useState<'list' | 'map' | 'calendar'>('list');

  return (
    <PublicLayout>
      <div className="flex flex-col min-h-screen">
        <main className="px-margin-mobile md:px-margin-desktop py-12 max-w-container-max mx-auto w-full">
          {/* Hero Section / Featured Event */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter mb-16">
            <div className="lg:col-span-8 relative overflow-hidden rounded-xl h-[400px] group">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent z-10"></div>
              <img 
                alt="Featured Town Hall Event" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgPNTcqtettaeRQIv9BE-uHv1DTpzkgH1KHnqB0pMHVthGWdy1NETC33zgaxOCfa9G2_bSQMByBvzQv3wmjLdYhWrpUKj6vFwGeWyw7ZbxWCGLcJSNCXAgfSZaJKfC2IWTN2vc033L9UuehEC0DsyYOj5_h5SUMf86kqqNSucFOF15IiEoXrOuU9JH6tcqTlzWgiKtQAZ6YJiJvVYR-3RF0PLikRxQZ9B1fDI9klGq4UwFfG61mrdqs292JZBQoppwfmLTkCrCkNyt"
              />
              <div className="absolute bottom-0 left-0 p-10 z-20 max-w-2xl">
                <span className="inline-block px-3 py-1 bg-secondary text-on-secondary font-label-md rounded mb-4">NATIONAL RALLY</span>
                <h3 className="font-headline-lg text-headline-lg text-white mb-2">The Future of Civic Infrastructure: National Town Hall</h3>
                <p className="text-white/80 font-body-md mb-6">Join us for a definitive discussion on modernizing municipal governance and the rollout of the BOOT Civic OS across three major provinces.</p>
                <div className="flex flex-wrap items-center gap-6 text-white font-label-lg">
                  <span className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary">calendar_today</span> Oct 24, 2024</span>
                  <span className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary">location_on</span> Heritage Hall, Central District</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-gutter">
              <div className="bg-primary-container p-8 rounded-xl text-white flex-1 flex flex-col justify-center">
                <h4 className="font-headline-sm text-headline-sm mb-4">Campaign Momentum</h4>
                <p className="font-body-sm mb-6 opacity-80">We're nearing our quarterly engagement goal. Your presence at the upcoming workshops drives the vision forward.</p>
                <div className="w-full bg-surface/20 h-3 rounded-full overflow-hidden">
                  <div className="bg-on-tertiary-container h-full w-[78%]"></div>
                </div>
                <div className="flex justify-between mt-2 font-label-md">
                  <span>78% Towards Goal</span>
                  <span>12,400 Sign-ups</span>
                </div>
              </div>
              <div className="bg-surface-container-high p-8 rounded-xl border border-outline-variant/30 flex-1">
                <h4 className="font-label-lg text-primary uppercase tracking-widest mb-4">Upcoming Deadlines</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-sm mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>diamond</span>
                    <div>
                      <p className="font-body-md font-semibold text-on-surface">Volunteer Orientation</p>
                      <p className="font-body-sm text-on-surface-variant">Tomorrow, 10:00 AM</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-sm mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>diamond</span>
                    <div>
                      <p className="font-body-md font-semibold text-on-surface">Policy Feedback Window Closes</p>
                      <p className="font-body-sm text-on-surface-variant">In 3 days</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Interactive Directory */}
          <section className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-outline-variant pb-4 gap-4">
              <div className="flex gap-8 overflow-x-auto pb-2 md:pb-0">
                <button 
                  onClick={() => setView('list')}
                  className={`font-label-lg pb-4 border-b-2 transition-colors ${view === 'list' ? 'border-primary text-primary' : 'border-transparent text-on-surface-variant hover:text-primary'}`}
                >
                  LIST VIEW
                </button>
                <button 
                  onClick={() => setView('map')}
                  className={`font-label-lg pb-4 border-b-2 transition-colors ${view === 'map' ? 'border-primary text-primary' : 'border-transparent text-on-surface-variant hover:text-primary'}`}
                >
                  MAP EXPLORER
                </button>
                <button 
                  onClick={() => setView('calendar')}
                  className={`font-label-lg pb-4 border-b-2 transition-colors ${view === 'calendar' ? 'border-primary text-primary' : 'border-transparent text-on-surface-variant hover:text-primary'}`}
                >
                  CALENDAR
                </button>
              </div>
              <div className="flex flex-wrap gap-4">
                <select className="bg-surface border border-outline-variant/50 rounded px-4 py-2 font-label-md text-on-surface focus:ring-1 focus:ring-primary outline-none">
                  <option>All Event Types</option>
                  <option>Town Halls</option>
                  <option>Rallies</option>
                  <option>Policy Workshops</option>
                </select>
                <select className="bg-surface border border-outline-variant/50 rounded px-4 py-2 font-label-md text-on-surface focus:ring-1 focus:ring-primary outline-none">
                  <option>Region: All</option>
                  <option>North District</option>
                  <option>South Sector</option>
                  <option>Heritage Zone</option>
                </select>
              </div>
            </div>

            {/* List View Content */}
            {view === 'list' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                <div className="bg-surface-container-lowest border border-tertiary/10 rounded-lg p-6 hover:shadow-lg transition-all cursor-pointer group">
                  <div className="flex justify-between items-start mb-4">
                    <span className="bg-surface-container-high text-primary px-3 py-1 rounded-full font-label-md">Policy Workshop</span>
                    <span className="text-on-surface-variant font-label-md">2.4 mi away</span>
                  </div>
                  <h5 className="font-headline-sm text-headline-sm mb-2 group-hover:text-secondary transition-colors">Economic Sovereignty Forum</h5>
                  <p className="font-body-sm text-on-surface-variant mb-6 line-clamp-2">A deep dive into decentralised municipal budgeting and fiscal transparency tools.</p>
                  <div className="flex items-center gap-4 border-t border-outline-variant/30 pt-4">
                    <img alt="Speaker" className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCO8iFjjUVzFHWQCHejXtFN5iSF-K7KM8zpJZvn6zWf7KJhwrIcAwBa7yDEhN0wZYn26J4AGxogOKquPkC1GVzxH7sbttryOlSdbNSMb0iWw0Du-AV8KlcNJ8jAeHgLwWYMjzxOJKBgG3P8juFzsQp7Kil_k8WfuDjeKMRcCD_LPm3cNs75sEbP89cwxFkPAmlvdp2gEFz_Dvl7XzhxN4Ronz-8-dfXHeQ8boqGM7z5t6G3Ar46aXUJlYRENq4AqqAFzodk5g1bPgmI"/>
                    <div>
                      <p className="font-label-md text-on-surface">Dr. Elena Vance</p>
                      <p className="font-label-md text-on-surface-variant">Policy Director</p>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest border border-tertiary/10 rounded-lg p-6 hover:shadow-lg transition-all cursor-pointer group">
                  <div className="flex justify-between items-start mb-4">
                    <span className="bg-surface-container-high text-primary px-3 py-1 rounded-full font-label-md">Town Hall</span>
                    <span className="text-on-surface-variant font-label-md">0.8 mi away</span>
                  </div>
                  <h5 className="font-headline-sm text-headline-sm mb-2 group-hover:text-secondary transition-colors">Digital Identity &amp; Privacy</h5>
                  <p className="font-body-sm text-on-surface-variant mb-6 line-clamp-2">Understanding the BOOT Civic OS security layer and your data rights as a citizen.</p>
                  <div className="flex items-center gap-4 border-t border-outline-variant/30 pt-4">
                    <img alt="Speaker" className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwCHATqQyaLeAZcp2fSsKB9i9k37atqGbyXfqs262gKyy2AUjLZ29yUkCH2bd-6UdoF4pGUkjbMLiyxPEtV9L2h2EX3_WFNN1o1RnGQw_qGbe4f8m-xhWCAod1XQ9CiUoWBL3_AJyz6h-W1CI2i08nUnz_1i28X6Mc4-nLWoEj2R77h7N6_DvNnHwwVn7bKiDIxvC9d2Vyexss79-p_1Exb7jbPc0VOg722N7fJMsUj0BYzCLLG3yhxfxNg8TloDd6yaXXXU5tDlQ7"/>
                    <div>
                      <p className="font-label-md text-on-surface">Marcus Thorne</p>
                      <p className="font-label-md text-on-surface-variant">CTO, BOOT OS</p>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest border border-tertiary/10 rounded-lg p-6 hover:shadow-lg transition-all cursor-pointer group">
                  <div className="flex justify-between items-start mb-4">
                    <span className="bg-surface-container-high text-primary px-3 py-1 rounded-full font-label-md">Community Meetup</span>
                    <span className="text-on-surface-variant font-label-md">Online</span>
                  </div>
                  <h5 className="font-headline-sm text-headline-sm mb-2 group-hover:text-secondary transition-colors">Bootcamp: Civic Engagement</h5>
                  <p className="font-body-sm text-on-surface-variant mb-6 line-clamp-2">Interactive training for community leaders on how to organize local chapters effectively.</p>
                  <div className="flex items-center gap-4 border-t border-outline-variant/30 pt-4">
                    <img alt="Speaker" className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiJTgf6whD53o0lLRSewNawcnGjIFMGrdP9BbMlTXCql7IA51w-g267E7mSXAu-_nFVd1fQh8p-tsOA49KAGjhky6iQ9m_QyOsZ2r8JHq2oy3gvrWIphKUEy3M8lgNPUUAMH laCjr-SXPjR9VNIupbD/RzMSpLJhS-QHmWpLRTaqFAtK1sH_0jLCOW7PNucPCQDpgVfhpBUMD_xK8iwT6NMVqdPruxLhC+AtYIkSwS7I6pYp_ZzS laCjr-SXPjR9VNIupbD/RzMSpLJhS-QHmWpLRTaqFAtK1sH_0jLCOW7PNucPCQDpgVfhpBUMD_xK8iwT6NMVqdPruxLhC+AtYIkSwS7I6pYp_ZzS laCjr-SXPjR9VNIupbD/RzMSpLJhS-QHmWpLRTaqFAtK1sH_0jLCOW7PNucPCQDpgVfhpBUMD_xK8iwT6NMVqdPruxLhC+AtYIkSwS7I6pYp_ZzS" />
                    <div>
                      <p className="font-label-md text-on-surface">Sarah Jenkins</p>
                      <p className="font-label-md text-on-surface-variant">Outreach Lead</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Map View Content */}
            {view === 'map' && (
              <div className="h-[600px] rounded-xl overflow-hidden border border-outline-variant relative">
                <img 
                  alt="Map view" 
                  className="w-full h-full object-cover grayscale opacity-60" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsriU5r8qjAiZH3qS06P45UfMUodO5GCoOL-Qu4UO-YG95ssn_Kk41gL2MB85P6tPfh8oculQ9BQ3B0FnzHslsYgoZZjkNoENJdlvHZCV-rJYr_ljD3LKBxAQK9xZLUK4CnN1c_WI461wAxqFw4EOic8rSGBPu9T5d53N-H9Wf40zniqo5g7nBU22kis-vwb__oNCnTIKDAJ3oH-HzJkiV2IhKN7xSd5dF4mLe0bJqlG6RdASpihytLglQDh3PkJcaNwEwfxp9PEA6"
                />
                <div className="absolute top-10 right-10 w-80 bg-surface/95 backdrop-blur-md p-6 rounded-lg shadow-xl border border-outline-variant/30">
                  <h6 className="font-headline-sm text-headline-sm mb-4">Central District</h6>
                  <p className="font-body-sm text-on-surface-variant mb-4">There are 4 events in this area this week.</p>
                  <div className="space-y-3">
                    <div className="p-3 bg-surface-container rounded border border-outline-variant/20">
                      <p className="font-label-lg text-primary">Regional Rally</p>
                      <p className="font-body-sm text-on-surface-variant">St. George's Square • 2 PM</p>
                    </div>
                    <div className="p-3 bg-surface-container rounded border border-outline-variant/20">
                      <p className="font-label-lg text-primary">Youth Workshop</p>
                      <p className="font-body-sm text-on-surface-variant">Library Hall • 6 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Calendar View Content */}
            {view === 'calendar' && (
              <div className="grid grid-cols-7 gap-1 bg-outline-variant/20 border border-outline-variant/30 rounded-lg overflow-hidden">
                {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((day) => (
                  <div key={day} className="bg-primary-container text-white py-4 text-center font-label-lg">
                    {day}
                  </div>
                ))}
                <div className="bg-surface-container-low h-32 p-2 opacity-50"></div>
                <div className="bg-surface-container-low h-32 p-2 opacity-50"></div>
                <div className="bg-surface h-32 p-4 border border-outline-variant/10 relative">
                  <span className="font-label-md opacity-40">1</span>
                </div>
                <div className="bg-surface h-32 p-4 border border-outline-variant/10 relative">
                  <span className="font-label-md opacity-40">2</span>
                  <div className="mt-2 p-1 bg-secondary/10 border-l-2 border-secondary text-[10px] font-bold text-secondary">RALLY: CAPITAL</div>
                </div>
                <div className="bg-surface h-32 p-4 border border-outline-variant/10 relative">
                  <span className="font-label-md opacity-40">3</span>
                </div>
                <div className="bg-surface h-32 p-4 border border-outline-variant/10 relative">
                  <span className="font-label-md opacity-40">4</span>
                </div>
                <div className="bg-surface h-32 p-4 border border-outline-variant/10 relative">
                  <span className="font-label-md opacity-40">5</span>
                </div>
                <div className="bg-surface h-32 p-4 border border-outline-variant/10 relative">
                  <span className="font-label-md opacity-40">6</span>
                  <div className="mt-2 p-1 bg-primary/10 border-l-2 border-primary text-[10px] font-bold text-primary">TOWN HALL</div>
                </div>
                <div className="bg-surface h-32 p-4 border border-outline-variant/10 relative">
                  <span className="font-label-md opacity-40">7</span>
                </div>
              </div>
            )}
          </section>
        </main>
      </div>
    </PublicLayout>
  );
}