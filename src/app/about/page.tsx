import React from 'react';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';

export default function AboutPage() {
  return (
    <PublicLayout>
      <div className="flex flex-col min-h-screen">
        {/* Hero Section: Editorial Impact */}
        <section className="px-margin-mobile md:px-margin-desktop py-24 grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="col-span-1 md:col-span-7">
            <p className="font-label-lg text-label-lg text-secondary mb-4 tracking-widest uppercase">Tradition x Technology</p>
            <h2 className="font-display-lg text-display-lg text-primary mb-8 max-w-2xl">A Legacy Reimagined for the Digital Electorate.</h2>
            <div className="editorial-line mb-8"></div>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl leading-relaxed">
              CivicOS (BOOT) isn't just a political platform; it's a structural evolution. We bridge the gap between institutional stability and frontier technology to create a governance model that is both ancient in its wisdom and modern in its execution.
            </p>
            <div className="flex flex-wrap gap-6">
              <button className="bg-primary text-white px-8 py-4 rounded-full font-label-lg text-label-lg flex items-center gap-2 hover:translate-y-[-2px] transition-transform">
                Read the Charter <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <button className="border border-[#C5A059] text-tertiary-container px-8 py-4 rounded-full font-label-lg text-label-lg hover:bg-tertiary-fixed transition-all">
                The Manifesto
              </button>
            </div>
          </div>
          <div className="col-span-1 md:col-span-5 relative">
            <div className="aspect-[4/5] rounded-xl overflow-hidden bento-card">
              <img 
                className="w-full h-full object-cover grayscale-[0.2] hover:scale-105 transition-transform duration-700" 
                alt="A sophisticated architectural photograph of a modern government building"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHknQm1wfjIW7vBkBtmBUJ5Egw42Cl0pTnlV0a24qCCZOoa67fob2nlmq_G_cTWqsinyA6xGaESEgN9nq_CVuGimN0bic3x3PQgh4e0vFd1J2Q8BTn0oxZFn8EtPcvXvjSekBz7gQgOn9SnUnDDs3TnF3xXF_6Mf-F67Ar5QUuCVnhXyR39-4-opT_n65mz2p8h5W005avHYG24kbHbxX5Y7Oh13Fe7AUEn6zVgUZxGfi7y5j6vTGC_J0lcBgnHUXAz1TwU22ZvPGM"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 p-8 bg-surface-container-highest bento-card rounded-xl max-w-xs shadow-sm hidden md:block">
              <p className="font-headline-sm text-headline-sm text-primary mb-2">2040 Vision</p>
              <p className="font-body-sm text-body-sm text-on-surface-variant">The roadmap for a fully integrated civic operating system by the end of the decade.</p>
            </div>
          </div>
        </section>

        {/* Mission & Values: Bento Grid */}
        <section className="px-margin-mobile md:px-margin-desktop py-24 bg-surface-container-low">
          <div className="text-center mb-16">
            <h3 className="font-headline-lg text-headline-lg text-primary mb-4">Core Directives</h3>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-lg mx-auto">The principles that guide every algorithm and every policy within the CivicOS ecosystem.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="p-10 bg-surface rounded-xl bento-card flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-primary text-5xl mb-6">verified_user</span>
                <h4 className="font-headline-md text-headline-md text-primary mb-4">Institutional Trust</h4>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">We leverage distributed ledger technology to ensure transparency is not a promise, but a mathematical certainty. Every vote, every grant, every policy change is immutable and verifiable.</p>
              </div>
              <ul className="space-y-3 mt-8">
                <li className="flex items-center gap-2 font-label-md text-label-md text-primary">
                  <span className="material-symbols-outlined text-tertiary-container text-sm">diamond</span> Audited Protocols
                </li>
                <li className="flex items-center gap-2 font-label-md text-label-md text-primary">
                  <span className="material-symbols-outlined text-tertiary-container text-sm">diamond</span> Zero-Knowledge Privacy
                </li>
              </ul>
            </div>
            <div className="md:col-span-2 p-10 bg-primary-container text-on-primary-container rounded-xl flex items-center gap-12 overflow-hidden relative">
              <div className="z-10 relative">
                <h4 className="font-headline-md text-headline-md mb-4 text-white">Visionary Stewardship</h4>
                <p className="font-body-lg text-body-lg opacity-90 max-w-md">Our leaders are stewards of the future, guided by long-term alignment rather than short-term cycles.</p>
              </div>
            </div>
            <div className="p-10 bg-surface rounded-xl bento-card">
              <span className="material-symbols-outlined text-secondary text-4xl mb-4">public</span>
              <h4 className="font-headline-sm text-headline-sm text-primary mb-2">Diaspora Hub</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Connecting the global network of citizens through borderless digital infrastructure.</p>
            </div>
            <div className="p-10 bg-surface rounded-xl bento-card">
              <span className="material-symbols-outlined text-tertiary-container text-4xl mb-4">analytics</span>
              <h4 className="font-headline-sm text-headline-sm text-primary mb-2">Admin Intel</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Data-driven decision making that prioritizes human outcomes and systemic efficiency.</p>
            </div>
          </div>
        </section>

        {/* History: The Timeline Grid */}
        <section className="px-margin-mobile md:px-margin-desktop py-24">
          <div className="flex flex-col md:flex-row gap-20">
            <div className="md:w-1/3">
              <h3 className="font-headline-lg text-headline-lg text-primary sticky top-32">The Genesis of the Movement</h3>
              <div className="editorial-line my-6"></div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                Tracing the evolution from a grassroots policy incubator to a global operating system for civic life.
              </p>
              <div className="p-6 border border-outline-variant/30 rounded-lg">
                <p className="font-label-md text-label-md text-secondary mb-2">Current Milestone</p>
                <p className="font-headline-sm text-headline-sm text-primary">Beta 2.0 Deployment</p>
                <div className="w-full h-2 bg-surface-variant rounded-full mt-4 overflow-hidden">
                  <div className="h-full bg-secondary-container" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
            <div className="md:w-2/3 space-y-16">
              <div className="relative pl-12 border-l-2 border-outline-variant/20 pb-4">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-background"></div>
                <span className="font-label-lg text-label-lg text-secondary">2020 — Founding</span>
                <h4 className="font-headline-md text-headline-md text-primary mt-2">The Civic Incubator</h4>
                <p className="font-body-md text-body-md text-on-surface-variant mt-4 leading-relaxed">
                  Established as a think-tank in Geneva, focusing on how blockchain and AI could stabilize democratic institutions against digital fragmentation.
                </p>
              </div>
              <div className="relative pl-12 border-l-2 border-outline-variant/20 pb-4">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-outline-variant ring-4 ring-background"></div>
                <span className="font-label-lg text-label-lg text-secondary">2022 — Protocol Genesis</span>
                <h4 className="font-headline-md text-headline-md text-primary mt-2">BOOT Architecture Finalized</h4>
                <p className="font-body-md text-body-md text-on-surface-variant mt-4 leading-relaxed">
                  Release of the Whitepaper "Tradition in the Age of Tensors," outlining the dual-consensus mechanism that powers the CivicOS today.
                </p>
                <img 
                  className="mt-8 rounded-xl aspect-video object-cover bento-card" 
                  alt="High-tech server room"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC47OfG-4mJGzdOPRuMg51E-y79_cGHZbYYxkhUx0nU_MZhYI7uemuksQ6MrZ9PwDezG5ARC3SIDIJC0cNkYVhqIjd-0tKSOHwm_yjRQDYxSdg5HxhS39F0mMOFIhz_s3tffqz1_SFJhQNOFjPNUxy3BAA2B1Jn6KoJ7_dzRsiQZKg09PP09-q3nuPOIFRE8uwQsh5t50JguujgmD9QgqG8xOVnjA2x4MG6p_poasX7Pk-1vYjI"
                />
              </div>
              <div className="relative pl-12 border-l-2 border-outline-variant/20 pb-4">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-outline-variant ring-4 ring-background"></div>
                <span className="font-label-lg text-label-lg text-secondary">2024 — Global Expansion</span>
                <h4 className="font-headline-md text-headline-md text-primary mt-2">The First Digital Districts</h4>
                <p className="font-body-md text-body-md text-on-surface-variant mt-4 leading-relaxed">
                  Launch of autonomous civic zones across three continents, proving the scalability of our "Visionary Tradition" framework.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-margin-mobile md:px-margin-desktop py-24">
          <div className="bg-surface-container-highest rounded-2xl p-10 md:p-20 flex flex-col items-center text-center relative overflow-hidden">
            <h2 className="font-display-lg text-display-lg text-primary mb-6 z-10">Shape the Next Century.</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-10 z-10 leading-relaxed">
              The tradition of the future starts with your participation. Join the movement that is defining the next era of human coordination.
            </p>
            <div className="flex flex-col md:flex-row gap-4 z-10">
              <button className="bg-secondary text-white px-10 py-4 rounded-full font-label-lg text-label-lg hover:bg-on-secondary-fixed-variant transition-colors shadow-lg shadow-secondary/20">
                Become a Delegate
              </button>
              <button className="bg-primary text-white px-10 py-4 rounded-full font-label-lg text-label-lg hover:bg-primary-container transition-colors">
                Explore Governance
              </button>
            </div>
          </div>
        </section>
      </div>
    </PublicLayout>
  );
}