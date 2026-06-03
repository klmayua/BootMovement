import React from 'react';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';

export default function VolunteerPage() {
  return (
    <PublicLayout>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow xl:ml-64 px-margin-desktop py-12 bg-[#FDFBF7]">
          {/* Hero Header */}
          <section className="mb-16">
            <div className="max-w-4xl">
              <span className="text-secondary font-label-lg tracking-widest uppercase mb-4 block">Civic Engagement</span>
              <h1 className="font-display-lg text-display-lg text-primary mb-6">Shape the Future of Your Community</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                Join a network of over 10,000 citizens dedicating their skills to high-impact projects. From legislative research to local environmental restoration, find a role that matches your expertise and vision.
              </p>
            </div>
          </section>

          {/* Search & Advanced Filtering Canvas */}
          <section className="mb-12">
            <div className="bg-surface p-8 rounded-xl border border-outline-variant/30 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
                <div className="md:col-span-1">
                  <label className="block font-label-lg text-primary mb-2">Keyword</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
                    <input className="w-full pl-10 pr-4 py-3 bg-white border border-outline-variant/50 rounded focus:border-primary focus:ring-1 focus:ring-primary outline-none text-body-md" placeholder="e.g. Legal, Coding" type="text"/>
                  </div>
                </div>
                <div>
                  <label className="block font-label-lg text-primary mb-2">Impact Area</label>
                  <select className="w-full px-4 py-3 bg-white border border-outline-variant/50 rounded focus:border-primary focus:ring-1 focus:ring-primary outline-none text-body-md appearance-none">
                    <option>All Areas</option>
                    <option>Climate Justice</option>
                    <option>Urban Planning</option>
                    <option>Public Education</option>
                    <option>Digital Privacy</option>
                  </select>
                </div>
                <div>
                  <label className="block font-label-lg text-primary mb-2">Skills Required</label>
                  <select className="w-full px-4 py-3 bg-white border border-outline-variant/50 rounded focus:border-primary focus:ring-1 focus:ring-primary outline-none text-body-md appearance-none">
                    <option>Any Skill</option>
                    <option>Data Analysis</option>
                    <option>Graphic Design</option>
                    <option>Legal Research</option>
                    <option>Social Media</option>
                  </select>
                </div>
                <div className="flex gap-2">
                  <button className="flex-grow bg-primary-container text-white py-3 px-6 rounded font-label-lg hover:opacity-90 transition-all flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-body-md">filter_list</span> Apply Filters
                  </button>
                  <button className="aspect-square bg-surface-container-high text-primary flex items-center justify-center rounded px-4 hover:bg-surface-container-highest transition-all">
                    <span className="material-symbols-outlined">restart_alt</span>
                  </button>
                </div>
              </div>
              {/* Skill Chips */}
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary-fixed/30 text-primary rounded-full text-label-md flex items-center gap-2">
                  Remote <button className="material-symbols-outlined text-xs">close</button>
                </span>
                <span className="px-3 py-1 bg-primary-fixed/30 text-primary rounded-full text-label-md flex items-center gap-2">
                  Strategic Planning <button className="material-symbols-outlined text-xs">close</button>
                </span>
                <span className="px-3 py-1 bg-primary-fixed/30 text-primary rounded-full text-label-md flex items-center gap-2">
                  Policy Analysis <button className="material-symbols-outlined text-xs">close</button>
                </span>
                <button className="text-secondary text-label-md font-bold hover:underline ml-2">Clear all filters</button>
              </div>
            </div>
          </section>

          {/* Opportunities Bento Grid */}
          <div className="grid grid-cols-12 gap-6">
            {/* Highlighted Opportunity (Large) */}
            <div className="col-span-12 lg:col-span-8 bg-white border border-[#C5A059]/30 p-8 flex flex-col md:flex-row gap-8 relative overflow-hidden">
              <div className="absolute top-0 right-0">
                <div className="bg-secondary text-white px-6 py-2 rotate-45 translate-x-12 translate-y-4 font-label-lg">URGENT</div>
              </div>
              <div className="md:w-1/2">
                <img className="w-full h-full object-cover rounded-lg aspect-video md:aspect-square" alt="Professional collaborative workspace" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBar1mqIg6NhX21Af64fKiBzeDrgeFGBxJvkAgMzqiVMIguGA0TVnIUQPDrzrNc3WokZYviwv43Fnz4P79ThvEdixSRkCd9wLgfXwNNc80uaoW-_BaMhxRTG6psPyGHFRMB17BMBhAnFIa3RS2rnV77jPH3p9pMLcV7VF20YGzQ_1spQAjbPChbJuublhM2HfpxVRPJ-RsrTLAAROw4zqVXN7QG5WM42EyZwnF5f9E8vkeOZdcASZOTGwNeOu-LUCwKK4Tp3OkEq9Ln"/>
              </div>
              <div className="md:w-1/2 flex flex-col justify-center">
                <div className="flex gap-3 mb-4">
                  <span className="text-xs font-bold px-2 py-1 bg-surface-container-highest text-primary rounded">URBAN PLANNING</span>
                  <span className="text-xs font-bold px-2 py-1 bg-surface-container-highest text-primary rounded">EST. 10 HRS/WK</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-4">Lead Urban Sustainability Researcher</h3>
                <p className="text-body-md text-on-surface-variant mb-6 leading-relaxed">
                  Lead a dedicated team in analyzing pedestrian traffic flows and green space accessibility. Your work will directly influence the 2025 Civic Green Initiative budget.
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex -space-x-3">
                    <img className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="Volunteer 1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8YoyN62H37EyW8ptW2vuKqVXYK00SmcDtkoj0NVla6iMNQQCNzWskUgMzMvoY54VfOT5b-KkqzO2sVFiVDXz9kofDlTyRxHBsJ4tTeWHRNTwX_HzhHDEcVKWZ7nahD-qiuYLKwNUBY06YxE5JtoVBpHb_7j94UiYOp_LRF00gD511OZcpTW7ZCD819S4QqpSrPqL1I9uGq7sYj5oHXNqv7J2k9e3eycgPxpbuKzJGDGBPJ1lxuFMl8v-SPdgczkGjHiJlHF5_MPQe"/>
                    <img className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="Volunteer 2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnKcBRrlvab0Rxpn4aM1iHgez4Q0StQrGZEnxoHbGX1JHqv2Bj_7m6hQho1Xx0Hs0YH1NDGDkD-NBSmyTBNZSLD3dw-cZfBw_aS7Yg1xqkpzGd1Awfq9IGU2idSy-8gC7fTYIdbd5DaqdhTjxjKUf17E9MgUxzqt1gRk2gddCUYTO5M8ajneqG1NKgbwuzlU8P8cZEDy7hmsBKYV1TvtXQJf7V8px0Ul0yfj-XNEyeGoS7Gvf9M15yezbI82-friucszpIWz6uDirp"/>
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-primary-fixed flex items-center justify-center text-xs font-bold text-primary">+8</div>
                  </div>
                  <button className="bg-primary text-white px-8 py-3 rounded font-label-lg hover:opacity-90 transition-all">View Role</button>
                </div>
              </div>
            </div>
            {/* Featured Secondary (Side) */}
            <div className="col-span-12 lg:col-span-4 bg-primary-container text-white p-8 flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-4xl text-tertiary-fixed-dim mb-6">workspace_premium</span>
                <h3 className="font-headline-sm text-headline-sm mb-4">Foundation Grant Writers</h3>
                <p className="text-body-sm opacity-80 leading-relaxed mb-6">
                  Join our advocacy wing. We need skilled writers to secure funding for the "Civic Tech for All" program reaching rural districts.
                </p>
              </div>
              <div>
                <div className="w-full bg-white/20 h-1 rounded-full mb-3">
                  <div className="bg-secondary w-3/4 h-full rounded-full"></div>
                </div>
                <p className="text-xs font-label-md mb-6 uppercase tracking-widest">3 of 4 positions filled</p>
                <button className="w-full border border-tertiary-fixed-dim text-tertiary-fixed-dim py-3 rounded font-label-lg hover:bg-tertiary-fixed-dim hover:text-primary transition-all">Apply Now</button>
              </div>
            </div>
            {/* Regular Opportunities */}
            <div className="col-span-12 md:col-span-4 bg-white border border-outline-variant/30 p-6 group hover:border-secondary transition-colors">
              <div className="h-40 bg-surface mb-6 rounded overflow-hidden">
                <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="Team collaboration" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDubj8pPViWYidBJRdi6CIAzYdIKgP16_sv9rOIQvQK3WxnRkmhd-LN60Fhu7p6g8p_j-K1wqXgjVhJVwwKGACW0grFMJa5wR0fnOstfVd85tr3-bd7T6nVAIYjtyfChFhUxoH9anQo0nK5uBqJKQVY1wz6j5GbXt9UUqBXrVHEtgp-ReiUBDOp_plBqg-OtxrjIcLN2pY05QgoveaDqcCdhmVi5yEQ9eHnVALJzuqM_QR2RpHthgYSgS1xDdd9mHVx7yxfh9QiawWL"/>
              </div>
              <span className="text-xs font-bold text-secondary uppercase tracking-widest mb-2 block">Climate Justice</span>
              <h4 className="font-headline-sm text-[20px] text-primary mb-3">Air Quality Data Analyst</h4>
              <p className="text-body-sm text-on-surface-variant mb-6">Monitor local sensor arrays and prepare monthly impact reports for the city council.</p>
              <div className="flex items-center gap-2 text-label-md text-outline">
                <span className="material-symbols-outlined text-sm">location_on</span> Remote / Decentralized
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 bg-white border border-outline-variant/30 p-6 group hover:border-secondary transition-colors">
              <div className="h-40 bg-surface mb-6 rounded overflow-hidden">
                <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="Government building" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNQSrdcixXEjkAYflvPeiP2-xe1f5-9lDZEhGu62_BlV-sJGg5d SUVs_C9L_V-sJGg5d4GeVW0wNUXg4Q2BeG2BcstlrHEUHdy5b7J-0ZuO_8cIPEjL7ovPyamP6XBkTRNK9m1BT50h1N9toHmv6m8sGGmbrGr7z3dmMbwRgjQ2rpaQjxcZpU_A8P5z-LWjwd5_c6jHy2rwv1wbifW7yRoveYOQxH3tYCRe4zxN-A-37yvBEOkARVIKUhWwhkfub8qxqr3fCD4PPipz004i0bsYNBs11BeS"/>
              </div>
              <span className="text-xs font-bold text-secondary uppercase tracking-widest mb-2 block">Digital Privacy</span>
              <h4 className="font-headline-sm text-[20px] text-primary mb-3">Policy Documentation Lead</h4>
              <p className="text-body-sm text-on-surface-variant mb-6">Help translate complex legal jargon into accessible citizen rights handbooks.</p>
              <div className="flex items-center gap-2 text-label-md text-outline">
                <span className="material-symbols-outlined text-sm">location_on</span> Civic Center, HQ
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 bg-white border border-outline-variant/30 p-6 group hover:border-secondary transition-colors">
              <div className="h-40 bg-surface mb-6 rounded overflow-hidden">
                <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="Writing document" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmyBjM8ZYmOMXIUWHbZE4ahdeO6CXSm6T0SjmxwZwKRK0t3YTMMI-2Vn8IGmV5qwp88eqdEpDIqyWGN9vV9t28e-92nPS2GrMjZrIsq-XkqbmCB6cV0pia0ZfsbLEZii7ilP7Y2UH laCjr-SXPjR9VNIupbD/RzMSpLJhS-QHmWpLRTaqFAtK1sH_0jLCOW7PNucPCQDpgVfhpBUMD_xK8iwT6NMVqdPruxLhC+AtYIkSwS7I6pYp_ZzS laCjr-SXPjR9VNIupbD/RzMSpLJhS-QHmWpLRTaqFAtK1sH_0jLCOW7PNucPCQDpgVfhpBUMD_xK8iwT6NMVqdPruxLhC+AtYIkSwS7I6pYp_ZzS lCjr-SXPjR9VNIupbD/RzMSpLJhS-QHmWpLRTaqFAtK1sH_0jLCOW7PNucPCQDpgVfhpBUMD_xK8iwT6NMVqdPruxLhC+AtYIkSwS7I6pYp_ZzS laCjr-SXPjR9VNIupbD/RzMSpLJhS-QHmWpLRTaqFAtK1sH_0jLCOW7PNucPCQDpgVfhpBUMD_xK8iwT6NMVqdPruxLhC+AtYIkSwS7I6pYp_ZzS"/>
              </div>
              <span className="text-xs font-bold text-secondary uppercase tracking-widest mb-2 block">Education</span>
              <h4 className="font-headline-sm text-[20px] text-primary mb-3">Literacy Program Mentor</h4>
              <p className="text-body-sm text-on-surface-variant mb-6">Weekend workshops for secondary students exploring civic participation and debate.</p>
              <div className="flex items-center gap-2 text-label-md text-outline">
                <span className="material-symbols-outlined text-sm">location_on</span> Hybrid / Multiple Sites
              </div>
            </div>
          </div>

          {/* Load More */}
          <div className="mt-16 flex justify-center">
            <button className="group flex flex-col items-center gap-2">
              <span className="text-label-lg text-primary group-hover:text-secondary transition-colors">Explore more opportunities</span>
              <span className="material-symbols-outlined text-secondary animate-bounce">keyboard_double_arrow_down</span>
            </button>
          </div>
        </main>
      </div>
    </PublicLayout>
  );
}
