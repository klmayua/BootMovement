import React from 'react';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';

export default function CandidatesPage() {
  return (
    <PublicLayout>
      <div className="flex flex-col min-h-screen">
        <main className="px-margin-mobile md:px-margin-desktop py-12 max-w-container-max mx-auto w-full">
          {/* Header Section */}
          <div className="mb-12">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-2">Candidate Directory</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Discover the visionaries leading our movement across the nation. Informed, vetted, and backed by the BOOT Civic OS community.</p>
          </div>

          {/* Filter Controls (Bento Style) */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="col-span-1 md:col-span-2 p-6 bg-surface-container-low border border-outline-variant/30 rounded-xl flex flex-col justify-between">
              <label className="font-label-lg text-primary mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">location_on</span>
                Region
              </label>
              <div className="flex flex-wrap gap-2">
                <button className="px-4 py-2 rounded-full bg-primary text-on-primary text-label-md font-semibold">All Regions</button>
                <button className="px-4 py-2 rounded-full border border-outline-variant hover:bg-surface-container transition-all text-label-md">Northeast</button>
                <button className="px-4 py-2 rounded-full border border-outline-variant hover:bg-surface-container transition-all text-label-md">Southwest</button>
                <button className="px-4 py-2 rounded-full border border-outline-variant hover:bg-surface-container transition-all text-label-md">Midwest</button>
                <button className="px-4 py-2 rounded-full border border-outline-variant hover:bg-surface-container transition-all text-label-md">West Coast</button>
              </div>
            </div>
            <div className="col-span-1 p-6 bg-surface-container-low border border-outline-variant/30 rounded-xl">
              <label className="font-label-lg text-primary mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">account_balance</span>
                Office Level
              </label>
              <select className="w-full bg-transparent border-none focus:ring-0 font-body-md text-on-surface cursor-pointer p-0 outline-none">
                <option>All Levels</option>
                <option>Federal</option>
                <option>State Senate</option>
                <option>State Assembly</option>
                <option>Municipal</option>
              </select>
            </div>
            <div className="col-span-1 p-6 bg-primary-container text-on-primary-container rounded-xl flex flex-col justify-between">
              <div>
                <p className="font-headline-sm text-headline-sm">124</p>
                <p className="font-label-md opacity-80 uppercase tracking-wider">Candidates Active</p>
              </div>
              <button className="flex items-center gap-2 font-label-lg hover:underline transition-all">
                View New Endorsements
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Directory Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Candidate Card 1 */}
            <div className="bg-surface border border-outline-variant/20 rounded-lg overflow-hidden group hover:border-tertiary-container/50 transition-all duration-500">
              <div className="h-80 overflow-hidden relative">
                <img 
                  alt="Candidate 1" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUO8rfAqTMZAJMEBYgrBUxYuqTJkjTy7hw9walJmpHpFghkpX2bdLRiVZfOMGuKzqLKzPgkFQbub86Oi6k1LTaysByGPNOvYTzUn3rpSF55mfHwUvmr8_NohBB8xRWSYVO8qgRRi9NVBO4W8CCh7cEZId3ywFG8_FhcVYW5kZ3fPt7wQ4dIVjBRWJjGoFPnA0L2MpMasPjoJzeQ2GTHEn1RqySr2nJv9JosC6hcVpKupsvpvdHAY_GkrD36oXTI8SwzvkLBF2JYBm"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary/90 text-on-primary px-3 py-1 rounded text-label-md font-bold backdrop-blur-md">FEDERAL OFFICE</span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">Dr. Sarah Vance</h3>
                    <p className="text-on-surface-variant font-label-lg uppercase tracking-widest text-xs">Midwest Region • Dist. 4</p>
                  </div>
                  <span className="material-symbols-outlined text-tertiary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                </div>
                <p className="font-body-md text-on-surface-variant mb-6 line-clamp-2">Advocating for digital sovereignty and transparent civic infrastructure for all citizens in the heartland.</p>
                <div className="flex items-center gap-4 pt-6 border-t border-outline-variant/10">
                  <div className="flex-grow">
                    <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                      <div className="bg-secondary h-full" style={{ width: '72%' }}></div>
                    </div>
                    <p className="text-label-md mt-2 text-on-surface-variant">72% Goal Funded</p>
                  </div>
                  <button className="material-symbols-outlined p-2 border border-outline-variant/30 rounded-full hover:bg-surface-container transition-all">favorite</button>
                </div>
              </div>
            </div>
            {/* Candidate Card 2 */}
            <div className="bg-surface border border-outline-variant/20 rounded-lg overflow-hidden group hover:border-tertiary-container/50 transition-all duration-500">
              <div className="h-80 overflow-hidden relative">
                <img 
                  alt="Candidate 2" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMCHGIt-Me6552uQkJLdW3NWpSLc0yN00BKcbYnaKIFFVmXstpprEJamsfpGJSn4jlx1O5HbUE1akVF-2aQsnympggRqNOvC3ZcpJVM1jL9YDxR7fHgTLBARVmng-kwF_pTWVSbIhCc_z1ocV6NpKpkqnZhkPMzr3cvpmv11zev-sW1iVlLtYLB_O0xQJLQBPhYnHUhbO72lotcvq3eCvEiiITFrrcb2h7OMFq4xCxYlspjCI3khnFzKYtDAVlTDFvo7l4oMiioFHy"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary/90 text-on-primary px-3 py-1 rounded text-label-md font-bold backdrop-blur-md">STATE SENATE</span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">Marcus Thorne</h3>
                    <p className="text-on-surface-variant font-label-lg uppercase tracking-widest text-xs">West Coast • Dist. 12</p>
                  </div>
                  <span className="material-symbols-outlined text-tertiary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                </div>
                <p className="font-body-md text-on-surface-variant mb-6 line-clamp-2">Building sustainable economic corridors and securing universal fiber access across the coastline.</p>
                <div className="flex items-center gap-4 pt-6 border-t border-outline-variant/10">
                  <div className="flex-grow">
                    <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                      <div className="bg-secondary h-full" style={{ width: '45%' }}></div>
                    </div>
                    <p className="text-label-md mt-2 text-on-surface-variant">45% Goal Funded</p>
                  </div>
                  <button className="material-symbols-outlined p-2 border border-outline-variant/30 rounded-full hover:bg-surface-container transition-all">favorite</button>
                </div>
              </div>
            </div>
            {/* Candidate Card 3 */}
            <div className="bg-surface border border-outline-variant/20 rounded-lg overflow-hidden group hover:border-tertiary-container/50 transition-all duration-500">
              <div className="h-80 overflow-hidden relative">
                <img 
                  alt="Candidate 3" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOOoUbEoSOAnuPVQtDioFLhNyx3ZR8QG58hFCS2IMPIaApB6u5ME6ACB8evT07dvrOsXqDU2xAZ4RisI2towBCNQayg3gpMC5y9buwsHbZDAF0u_u4x1rUVH6woGpIXIapH4o5IiTJF72ebP8Tiw-kWjITOSeW0AO3NHuNz8OiDGd4q5sJX_nkZ0oNj-NX-LUb0RuAmADQNd1SSzXlWStb2G2J5HmtZFkP_hQZAuAZg4mwkL9mdwXuv7B3nreOZZXlFl_jpKqhWuxf"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary/90 text-on-primary px-3 py-1 rounded text-label-md font-bold backdrop-blur-md">MUNICIPAL</span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">Elena Rodriguez</h3>
                    <p className="text-on-surface-variant font-label-lg uppercase tracking-widest text-xs">Southwest • City Council</p>
                  </div>
                  <span className="material-symbols-outlined text-tertiary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                </div>
                <p className="font-body-md text-on-surface-variant mb-6 line-clamp-2">Championing local data privacy and neighborhood-driven urban planning through community-led nodes.</p>
                <div className="flex items-center gap-4 pt-6 border-t border-outline-variant/10">
                  <div className="flex-grow">
                    <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                      <div className="bg-secondary h-full" style={{ width: '88%' }}></div>
                    </div>
                    <p className="text-label-md mt-2 text-on-surface-variant">88% Goal Funded</p>
                  </div>
                  <button className="material-symbols-outlined p-2 border border-outline-variant/30 rounded-full hover:bg-surface-container transition-all">favorite</button>
                </div>
              </div>
            </div>
          </div>

          {/* Load More / Pagination */}
          <div className="mt-16 flex flex-col items-center gap-6">
            <button className="px-8 py-3 bg-surface border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-on-primary transition-all flex items-center gap-2">
              Load More Profiles
              <span className="material-symbols-outlined">expand_more</span>
            </button>
            <p className="text-label-md text-on-surface-variant">Showing 3 of 124 movement-backed candidates</p>
          </div>
        </main>
      </div>
    </PublicLayout>
  );
}