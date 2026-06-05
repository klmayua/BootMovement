import React from 'react';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';

export default function AboutPage() {
  return (
    <PublicLayout>
      <div className="flex flex-col min-h-screen overflow-x-hidden">
        <main className="max-w-container-max mx-auto pb-bottom-nav">
          {/* Hero Section: Editorial Impact */}
           <section className="px-margin-desktop py-24 grid grid-cols-12 gap-gutter items-center">
             <div className="lg:col-span-7 text-center lg:text-left space-y-6 md:space-y-8">
               <p className="font-label-lg text-label-lg text-secondary mb-4 tracking-widest uppercase">Tradition x Technology</p>
               <h2 className="font-display-lg text-primary mb-8 max-w-2xl mx-auto lg:mx-0">A Legacy Reimagined for the Digital Electorate.</h2>
               <div className="h-px w-full bg-gradient-to-r from-tertiary-fixed/30 to-transparent mb-8"></div>
               <p className="font-body-lg text-on-surface-variant mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                 CivicOS (BOOT) isn't just a political platform; it's a structural evolution. We bridge the gap between institutional stability and frontier technology to create a governance model that is both ancient in its wisdom and modern in its execution.
               </p>
               <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6">
                 <button className="bg-primary text-white px-8 py-4 rounded-full font-label-lg flex items-center justify-center gap-2 hover:translate-y-[-2px] transition-transform active:scale-95 touch-manipulation">
                   Read the Charter <span className="material-symbols-outlined">arrow_forward</span>
                 </button>
                 <button className="border border-tertiary-container text-tertiary-container px-8 py-4 rounded-full font-label-lg hover:bg-tertiary-fixed transition-all active:scale-95 touch-manipulation">
                   The Manifesto
                 </button>
               </div>
             </div>
             <div className="lg:col-span-5 relative px-0 md:px-0">
               <div className="aspect-[4/5] rounded-xl overflow-hidden border border-tertiary-fixed/30 shadow-2xl">
                 <img className="w-full h-full object-cover grayscale-[0.2] hover:scale-105 transition-transform duration-700" alt="Modern government building" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHknQm1wfjIW7vBkBtmBUJ5Egw42Cl0pTnlV0a24qCCZOoa67fob2nlmq_G_cTWqsinyA6xGaESEgN9nq_CVuGimN0bic3x3PQgh4e0vFd1J2Q8BTn0oxZFn8EtPcvXvjSekBz7gQgOn9SnUnDDs3TnF3xXF_6Mf-F67Ar5QUuCVnhXyR39-4-opT_n65mz2p8h5W005avHYG24kbHbxX5Y7Oh13Fe7AUEn6zVgUZxGfi7y5j6vTGC_J0lcBgnHUXAz1TwU22ZvPGM"/>
               </div>
                <div className="absolute -bottom-10 -left-10 p-8 bg-surface-container-highest border border-tertiary-fixed/30 rounded-xl max-w-xs shadow-lg z-10">
                 <p className="font-headline-sm text-primary mb-2">2040 Vision</p>
                 <p className="font-body-sm text-on-surface-variant">The roadmap for a fully integrated civic operating system by the end of the decade.</p>
               </div>
             </div>
           </section>


           {/* Mission & Values: Bento Grid */}
           <section className="px-margin-mobile md:px-margin-desktop py-24 bg-surface-container-low">
             <div className="text-center mb-16">
               <h3 className="font-headline-lg text-primary mb-4">Core Directives</h3>
               <p className="font-body-md text-on-surface-variant max-w-lg mx-auto">The principles that guide every algorithm and every policy within the CivicOS ecosystem.</p>
             </div>
             <div className="bento-grid h-auto">
               <div className="md:col-span-4 p-6 md:p-10 bg-surface rounded-xl border border-tertiary-fixed/30 flex flex-col justify-between">
                 <div>
                   <span className="material-symbols-outlined text-primary text-5xl mb-6">verified_user</span>
                   <h4 className="font-headline-md text-primary mb-4">Institutional Trust</h4>
                   <p className="font-body-md text-on-surface-variant leading-relaxed">We leverage distributed ledger technology to ensure transparency is not a promise, but a mathematical certainty. Every vote, every grant, every policy change is immutable and verifiable.</p>
                 </div>
                 <ul className="space-y-3 mt-8">
                   <li className="flex items-center gap-2 font-label-md text-primary">
                     <span className="material-symbols-outlined text-tertiary-container text-sm">diamond</span> Audited Protocols
                   </li>
                   <li className="flex items-center gap-2 font-label-md text-primary">
                     <span className="material-symbols-outlined text-tertiary-container text-sm">diamond</span> Zero-Knowledge Privacy
                   </li>
                 </ul>
               </div>
               <div className="md:col-span-8 p-6 md:p-10 bg-primary-container text-on-primary-container rounded-xl flex items-center gap-6 md:gap-12 overflow-hidden relative">
                 <div className="z-10 relative">
                   <h4 className="font-headline-md mb-4 text-white">Visionary Stewardship</h4>
                   <p className="font-body-lg opacity-90 max-w-md">Our leaders are stewards of the future, guided by long-term alignment rather than short-term cycles.</p>
                 </div>
               </div>
               <div className="md:col-span-4 p-6 md:p-10 bg-surface rounded-xl border border-tertiary-fixed/30">
                 <span className="material-symbols-outlined text-secondary text-4xl mb-4">public</span>
                 <h4 className="font-headline-sm text-primary mb-2">Diaspora Hub</h4>
                 <p className="font-body-sm text-on-surface-variant">Connecting the global network of citizens through borderless digital infrastructure.</p>
               </div>
               <div className="md:col-span-4 p-6 md:p-10 bg-surface rounded-xl border border-tertiary-fixed/30">
                 <span className="material-symbols-outlined text-tertiary-container text-4xl mb-4">analytics</span>
                 <h4 className="font-headline-sm text-primary mb-2">Admin Intel</h4>
                 <p className="font-body-sm text-on-surface-variant">Data-driven decision making that prioritizes human outcomes and systemic efficiency.</p>
               </div>
             </div>
           </section>

           {/* History: The Timeline Grid */}
           <section className="px-margin-mobile md:px-margin-desktop py-24">
             <div className="flex flex-col md:flex-row gap-12 md:gap-20">
               <div className="md:w-1/3">
                 <h3 className="font-headline-lg text-primary md:sticky top-32">The Genesis of the Movement</h3>
                 <div className="h-px w-full bg-gradient-to-r from-tertiary-fixed/30 to-transparent my-6"></div>
                 <p className="font-body-md text-on-surface-variant mb-6">
                   Tracing the evolution from a grassroots policy incubator to a global operating system for civic life.
                 </p>
                 <div className="p-6 border border-outline-variant/30 rounded-lg">
                   <p className="font-label-md text-secondary mb-2">Current Milestone</p>
                   <p className="font-headline-sm text-primary">Beta 2.0 Deployment</p>
                   <div className="w-full h-2 bg-surface-variant rounded-full mt-4 overflow-hidden">
                     <div className="h-full bg-secondary-container" style={{ width: '75%' }}></div>
                   </div>
                 </div>
               </div>
               <div className="md:w-2/3 space-y-16">
                 <div className="relative pl-8 md:pl-12 border-l-2 border-outline-variant/20 pb-4">
                   <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-background"></div>
                   <span className="font-label-lg text-secondary">2020 — Founding</span>
                   <h4 className="font-headline-md text-primary mt-2">The Civic Incubator</h4>
                   <p className="font-body-md text-on-surface-variant mt-4 leading-relaxed">
                     Established as a think-tank in Geneva, focusing on how blockchain and AI could stabilize democratic institutions against digital fragmentation.
                   </p>
                 </div>
                 <div className="relative pl-8 md:pl-12 border-l-2 border-outline-variant/20 pb-4">
                   <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-outline-variant ring-4 ring-background"></div>
                   <span className="font-label-lg text-secondary">2022 — Protocol Genesis</span>
                   <h4 className="font-headline-md text-primary mt-2">BOOT Architecture Finalized</h4>
                   <p className="font-body-md text-on-surface-variant mt-4 leading-relaxed">
                     Release of the Whitepaper "Tradition in the Age of Tensors," outlining the dual-consensus mechanism that powers the CivicOS today.
                   </p>
                   <img className="mt-8 rounded-xl aspect-video object-cover border border-tertiary-fixed/30" alt="High-tech server room" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC47OfG-4mJGzdOPRuMg51E-y79_cGHZbYYxkhUx0nU_MZhYI7uemuksQ6MrZ9PwDezG5ARC3SIDIJC0cNkYVhqIjd-0tKSOHwm_yjRQDYxSdg59OI9ciZVbPOZXmE2pUvmFvQ-v7f7pCMVjf49tbokx87OwKOda2CDBIYLZBRpyoxZg-z1iHjTfdmtI2whcbw01Tzs6aZiw8ukbfBXV5xMEfXJNY6acmG2jzo8RM98QQyVH4H0r6FH52Fn8_hL3xipRRzgmdR3Fu4Z"/>
                 </div>
                 <div className="relative pl-8 md:pl-12 border-l-2 border-outline-variant/20 pb-4">
                   <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-outline-variant ring-4 ring-background"></div>
                   <span className="font-label-lg text-secondary">2024 — Global Expansion</span>
                   <h4 className="font-headline-md text-primary mt-2">The First Digital Districts</h4>
                   <p className="font-body-md text-on-surface-variant mt-4 leading-relaxed">
                     Launch of autonomous civic zones across three continents, proving the scalability of our "Visionary Tradition" framework.
                   </p>
                 </div>
               </div>
             </div>
           </section>
           {/* CTA Section */}
           <section className="px-margin-mobile md:px-margin-desktop py-24">
             <div className="bg-surface-container-highest rounded-2xl p-8 md:p-20 flex flex-col items-center text-center relative overflow-hidden">
               <h2 className="font-display-lg text-primary mb-6 z-10">Shape the Next Century.</h2>
               <p className="font-body-lg text-on-surface-variant max-w-2xl mb-10 z-10 leading-relaxed">
                 The tradition of the future starts with your participation. Join the movement that is defining the next era of human coordination.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 z-10">
                 <button className="bg-secondary text-white px-10 py-4 rounded-full font-label-lg hover:bg-on-secondary-fixed-variant transition-colors shadow-lg shadow-secondary/20 touch-manipulation">
                   Become a Delegate
                 </button>
                 <button className="bg-primary text-white px-10 py-4 rounded-full font-label-lg hover:bg-primary-container transition-colors touch-manipulation">
                   Explore Governance
                 </button>
               </div>
             </div>
            </section>
          </main>
        </div>
      </PublicLayout>
    );
  }
