import React from 'react';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';

export default function HomePage() {
  return (
    <PublicLayout>
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[80vh] md:h-[85vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              className="w-full h-full object-cover md:brightness-50" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0dndBN91UiEj2HgrdJ3hFcXdbdXBSL9bAFJnGOQhuJCnYhBA-OARRQb6deSzroPC8rZPCONTWU3SmzpYhxCh_fmBh_iGEceyZCfpnp26SJgwjCFWris42Mmwen8JhKJvFcbt3zLjl8gCxSf2M6FQ5b49J1jakOLLXSe1wrT33jXsDPb8If01emqu-vmiMuibLKY4kwiaj-pfRLUOCl4GeEK7XNMdcJFQTFNyoUCHQlSzIxmaIBRmQ8OezA7-cRGSB1ICIh_n04AAS"
              alt="Hero Building"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"></div>
          </div>
          
          <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full">
            <div className="max-w-2xl text-on-primary">
              <span className="font-label-lg text-label-lg text-secondary uppercase tracking-[0.2em] mb-4 block font-semibold">
                <span className="md:hidden">Nigeria's Future, Built Today</span>
                <span className="hidden md:block">Our Vision</span>
              </span>
              <h1 className="font-display-lg text-[42px] md:text-display-lg leading-tight mb-6 italic">
                Because Of Our Tomorrow.
              </h1>
              <p className="font-body-lg text-body-lg mb-10 max-w-md text-surface-variant md:border-l-4 md:border-secondary md:pl-6">
                Building a legacy of stability and forward-looking growth for every citizen. Join the movement for a principled future.
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <Link href="/join" className="bg-secondary text-white font-label-lg text-label-lg py-4 px-8 rounded-lg shadow-lg active:scale-95 transition-transform text-center uppercase tracking-wider md:hover:translate-y-[-2px] md:duration-300">
                  Join the Movement
                </Link>
                <Link href="/thesis" className="bg-transparent border-2 border-surface-variant text-surface-variant font-label-lg text-label-lg py-4 px-8 rounded-lg active:scale-95 transition-transform text-center uppercase tracking-wider md:hover:bg-white/10 md:transition-colors">
                  Read Our Thesis
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Foundation of Progress / Pillars */}
        <section className="px-margin-mobile py-16 bg-surface-container-low md:bg-surface">
          <div className="max-w-container-max mx-auto px-0 md:px-margin-desktop">
            <div className="flex flex-col md:flex-row gap-12 items-end mb-16">
              <div className="md:w-2/3">
                <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Foundation of Progress</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  Our philosophy bridges the wisdom of our heritage with the innovations of tomorrow. We believe in building on solid ground.
                </p>
              </div>
              <div className="md:w-1/3 flex justify-end">
                <div className="w-24 h-1 bg-secondary"></div>
              </div>
            </div>
            
            {/* Mobile: 1 col | Desktop: 2 col Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              {/* Pillar 1 */}
              <div className="group relative bg-surface p-8 md:p-12 border border-outline-variant/30 hover:border-secondary/50 transition-all duration-500 overflow-hidden rounded-xl">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="material-symbols-outlined text-[120px]" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-6">Traditional Values</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8">
                  Upholding the institutional integrity that has sustained our society for generations. We protect the core principles of accountability and respect.
                </p>
                <Link href="#" className="inline-flex items-center text-secondary font-label-lg text-label-lg group-hover:gap-4 transition-all">
                  LEARN MORE <span className="material-symbols-outlined ml-2">arrow_forward</span>
                </Link>
              </div>
              {/* Pillar 2 */}
              <div className="group relative bg-primary-container p-8 md:p-12 text-on-primary transition-all duration-500 overflow-hidden rounded-xl">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="material-symbols-outlined text-[120px] text-on-primary-container">rocket_launch</span>
                </div>
                <h3 className="font-headline-md text-headline-md mb-6">Future Progress</h3>
                <p className="font-body-md text-body-md text-on-primary-container mb-8">
                  Investing in the technologies and policies that will define the next century. Our vision is forward-facing, bold, and meticulously planned.
                </p>
                <Link href="#" className="inline-flex items-center text-on-primary font-label-lg text-label-lg group-hover:gap-4 transition-all">
                  EXPLORE VISION <span className="material-symbols-outlined ml-2">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Action Grid (Mobile Only) */}
        <section className="px-margin-mobile py-8 bg-surface-container-low md:hidden">
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center gap-2">
              <Link href="/join" className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white shadow-md active:scale-90 transition-transform">
                <span className="material-symbols-outlined">person_add</span>
              </Link>
              <span className="font-label-md text-label-md font-semibold text-primary">Join Now</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Link href="/volunteer" className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-white shadow-md active:scale-90 transition-transform">
                <span className="material-symbols-outlined">volunteer_activism</span>
              </Link>
              <span className="font-label-md text-label-md font-semibold text-primary">Volunteer</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Link href="/donate" className="w-16 h-16 rounded-full bg-tertiary-container flex items-center justify-center text-tertiary-fixed shadow-md active:scale-90 transition-transform">
                <span className="material-symbols-outlined">payments</span>
              </Link>
              <span className="font-label-md text-label-md font-semibold text-primary">Donate</span>
            </div>
          </div>
        </section>

        {/* Latest Initiatives Feed */}
        <section className="px-margin-mobile py-16 bg-surface">
          <div className="max-w-container-max mx-auto px-0 md:px-margin-desktop">
            <div className="flex justify-between items-end mb-8 md:mb-12">
              <h2 className="font-headline-md text-headline-md text-primary">Latest Initiatives</h2>
              <Link href="/news" className="text-secondary font-label-lg text-label-lg border-b border-secondary">View All</Link>
            </div>
            <div className="flex flex-col gap-8">
              {/* Update 1 */}
              <div className="flex gap-4 items-start">
                <div className="w-24 h-24 shrink-0 rounded-lg overflow-hidden bg-surface-dim">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBr42F8s6DDqvAxnfZGbhfB2D28MAZasvjoSzg24LSp_RLT3HXQhqoV6iUGq3PPM65lZ07o6p_6tA0Iy7Qc4m-MOaYBIN4JgYeD1n9wQdG1uVV5UlpfQFCGugrIsDHWpEFnCqZ021pTtNS-D8Bz_L3aXe61Z7_TYF6J6gtn1_0KeBWwZU3h4K0HuDiTowAawy_mk4mKh_2rdt6bXh3Ra1Vf7bBghnxPrjhWeP386ClpduGe7zFPEyYAWjzj55mL4UStcnWu76-k8JVf" alt="Energy Sovereignty" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-label-md text-label-md text-outline font-medium">May 12, 2024</span>
                  <h4 className="font-body-lg text-body-lg font-bold text-primary leading-tight">Energy Sovereignty Act: A New Vision for 2030</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">The party leadership unveils the roadmap for national energy independence...</p>
                </div>
              </div>
              {/* Update 2 */}
              <div className="flex gap-4 items-start">
                <div className="w-24 h-24 shrink-0 rounded-lg overflow-hidden bg-surface-dim">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQAycaew-lg8TPqwIv6eKQ9XSZ27Z0_F59Vy56w2qCehUxWAxSGSW1pwZJOFlS_RmheQ-iYf0RSR2u9tppiHF_vLHg0fsJNlTsQCKUc0KYoyoMnLIOniPOIqoL650uv2Qi2dx_kgoeV4EVKJVc9Ttfo3R_yJW3eB6RvG2UYcrWOw73JYLnx4uyyu1w97zvBM7VWlEcTkfEhrMWNTEDpPBpoxZL-Xm4ld6NQYTAjcbl_GQS5CkNl8YSg9-j8Ciuh7YqUdtlkiAnJzGn" alt="National Townhall" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-label-md text-label-md text-outline font-medium">May 08, 2024</span>
                  <h4 className="font-body-lg text-body-lg font-bold text-primary leading-tight">National Townhall: Stability in Economic Transition</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">Over 5,000 citizens joined our latest virtual session on sustainable growth...</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="px-margin-mobile py-12 mx-margin-mobile rounded-2xl bg-primary text-white overflow-hidden relative">
          <div className="absolute -right-10 -top-10 w-40 h-40 border-8 border-white/5 rounded-full"></div>
          <div className="relative z-10 text-center max-w-xl mx-auto">
            <h3 className="font-headline-sm text-headline-sm mb-4">Stay Informed</h3>
            <p className="font-body-md text-body-md text-surface-variant mb-6">Receive strategic updates and official party manifestos directly to your inbox.</p>
            <div className="flex flex-col md:flex-row gap-3">
              <input className="flex-grow bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none" placeholder="Email Address" type="email" />
              <button className="bg-secondary text-white py-3 px-6 rounded-lg font-label-lg text-label-lg uppercase tracking-wide whitespace-nowrap">Subscribe</button>
            </div>
          </div>
        </section>
      </div>
    </PublicLayout>
  );
}
