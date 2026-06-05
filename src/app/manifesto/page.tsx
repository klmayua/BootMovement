"use client";

import React from 'react';
import Link from 'next/link';
import { CitizenLayout } from '@/components/layout/citizen/CitizenLayout';

export default function ManifestoPage() {
  return (
    <CitizenLayout>
      <main className="max-w-container-max mx-auto flex flex-row relative min-h-screen">
        {/* Contextual Sidebar */}
        <aside className="hidden xl:block w-72 h-fit sticky top-20 p-8 space-y-12">
          <div>
            <h4 className="font-label-lg text-label-lg text-primary uppercase tracking-widest mb-6">On This Page</h4>
            <nav className="space-y-4">
              <a className="block text-secondary font-medium" href="#rooted-mobility">01. Rooted Mobility</a>
              <a className="block text-on-surface-variant hover:text-primary" href="#institutional-weight">02. Institutional Weight</a>
              <a className="block text-on-surface-variant hover:text-primary" href="#sovereign-action">03. Sovereign Action</a>
              <a className="block text-on-surface-variant hover:text-primary" href="#implementation">04. Implementation Protocol</a>
            </nav>
          </div>
          <div className="p-6 bg-tertiary-fixed text-on-tertiary-fixed rounded-xl">
            <h5 className="font-label-lg text-label-lg mb-4">Thesis Score: 98%</h5>
            <p className="text-xs opacity-80 leading-relaxed">This document has been peer-reviewed by the BOOT Academic Council for logical consistency and historical accuracy.</p>
            <div className="mt-4 flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-white/20 border border-white/40 backdrop-blur flex items-center justify-center text-[10px]">✔</div>
              <div className="w-8 h-8 rounded-full bg-white/20 border border-white/40 backdrop-blur flex items-center justify-center text-[10px]">✔</div>
              <div className="w-8 h-8 rounded-full bg-white/20 border border-white/40 backdrop-blur flex items-center justify-center text-[10px]">✔</div>
            </div>
          </div>
          <div className="text-center">
            <span className="material-symbols-outlined text-outline-variant text-4xl block mb-2">shield_with_heart</span>
            <p className="font-label-md text-label-md text-outline">Verified Authenticity</p>
          </div>
        </aside>

        {/* Main Content Area */}
        <section className="flex-1 px-margin-desktop py-16" style={{ background: 'linear-gradient(180deg, rgba(241, 252, 244, 1) 0%, rgba(224, 235, 227, 0.5) 100%)' }}>
          {/* Hero Header */}
          <header className="max-w-3xl mb-24">
            <span className="font-label-lg text-label-lg text-secondary tracking-widest uppercase mb-4 block">Core Philosophy v2.4</span>
            <h1 className="font-display-lg text-display-lg text-primary mb-8">The BOOT Thesis: Reclaiming the Civic Engine</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 italic border-l-4 border-tertiary-container pl-6 leading-relaxed">
              "Civic stability is not a static state of rest, but a dynamic equilibrium of accountability, tradition, and radical transparency."
            </p>
            <div className="flex items-center gap-6">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-background bg-primary-container flex items-center justify-center text-white font-label-md">JD</div>
                <div className="w-10 h-10 rounded-full border-2 border-background bg-tertiary flex items-center justify-center text-white font-label-md">MK</div>
                <div className="w-10 h-10 rounded-full border-2 border-background bg-secondary flex items-center justify-center text-white font-label-md">LS</div>
              </div>
              <p className="font-label-md text-label-md text-on-surface-variant">Authored by the Council of Visionary Tradition</p>
            </div>
          </header>

          {/* Abstract Bento Grid */}
          <div className="grid grid-cols-12 gap-gutter mb-32">
            <div id="rooted-mobility" className="col-span-12 md:col-span-8 bg-surface-container-highest p-12 rounded-xl relative overflow-hidden">
              <h3 className="font-headline-sm text-headline-sm text-primary mb-6">01. The Principle of Rooted Mobility</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-loose">
                The modern state suffers from a disconnect between institutional tradition and the velocity of digital progress. The BOOT movement proposes a "Rooted Mobility" model where foundational legal frameworks remain anchored in history, while administrative execution moves at the speed of decentralized ledger technology.
              </p>
              <div className="flex items-center gap-2 text-secondary font-label-lg cursor-pointer hover:underline">
                <span>Read full derivation</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 bg-primary-container p-12 rounded-xl text-on-primary-container flex flex-col justify-between">
              <span className="material-symbols-outlined text-5xl opacity-50">analytics</span>
              <div>
                <h4 className="font-headline-sm text-headline-sm mb-4">Accountability Index</h4>
                <p className="font-body-sm text-body-sm opacity-80">Our metric for measuring the responsiveness of public servants to constituent mandates.</p>
              </div>
            </div>
          </div>

          {/* Deep Content Section */}
          <div className="max-w-3xl space-y-16">
            <article id="institutional-weight" className="prose prose-slate prose-lg">
              <h2 className="font-headline-md text-headline-md text-primary mb-8 flex items-center gap-3">
                <span className="w-8 h-8 bg-tertiary-fixed text-on-tertiary-fixed rounded-full flex items-center justify-center text-sm">2</span>
                The Mechanics of Institutional Weight
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                Stability is not found in the absence of change, but in the structural integrity of the change process. Institutional weight refers to the intentional friction designed into governance to prevent populist volatility from overriding long-term strategy.
                <span className="relative group cursor-help inline-flex items-center text-secondary font-semibold ml-1">
                  [1]
                  <span className="hidden group-hover:block absolute left-0 bottom-full mb-2 w-72 p-4 bg-surface shadow-xl border border-outline-variant rounded-lg z-20 text-on-surface-variant font-normal text-sm leading-snug">
                    <strong className="text-primary block mb-1">Footnote 1:</strong>
                    Referencing the 1922 'Stability vs Velocity' paper by Dr. Aris Thorne. Thorne argues that rapid legislative cycles without "anchor years" lead to civic fatigue.
                  </span>
                </span>
              </p>
              <div className="my-12 p-8 bg-white/70 backdrop-blur-sm border border-tertiary-fixed/20 rounded-xl">
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-tertiary-container mt-1">diamond</span>
                    <span className="font-body-md text-body-md">Decentralized Veto Mechanisms for local guilds.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-tertiary-container mt-1">diamond</span>
                    <span className="font-body-md text-body-md">Sunset Clauses on all emergency administrative powers.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-tertiary-container mt-1">diamond</span>
                    <span className="font-body-md text-body-md">Transparent Budgetary Ledgering (The BOOT Protocol).</span>
                  </li>
                </ul>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                By enforcing these constraints, we ensure that every action taken by the civic body is deliberate, documented, and defensible before the electorate.
              </p>
            </article>

            <div className="w-full aspect-video rounded-2xl overflow-hidden relative group">
              <img 
                alt="Architectural conceptualization of modern democracy" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_QXnmiL9hNIt-zY2sUQ9FMA6Zl8LdzWwk8b1SmuXGdmrRO3u5WPI7Pq1WRvTvugqQ1Iv8CgHbL lL_SInZ9b_OrRhVcw2jGsyUGCxPSkyWjMgs_8Ddt6cAUbjVM2jw4FPqJJIv3RZSM41RI8_wMibc8T8cgvRpdyDB4nAciKT9I8GimyFEuKa55IHXdMB2imq9RWuTpDBjwDidk1tWvkQi6J31BqKbke-I6BfC"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-8">
                <p className="text-white font-headline-sm text-headline-sm mb-2">Visualizing the Equilibrium</p>
                <p className="text-white/80 font-body-sm text-body-sm max-w-md">Fig A.1: The intersection of historic precedent and modern data infrastructure.</p>
              </div>
            </div>

            <article id="sovereign-action" className="prose prose-slate prose-lg">
              <h2 className="font-headline-md text-headline-md text-primary mb-8 flex items-center gap-3">
                <span className="w-8 h-8 bg-tertiary-fixed text-on-tertiary-fixed rounded-full flex items-center justify-center text-sm">3</span>
                The Mandate of Sovereign Action
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                Finally, the thesis addresses the necessity of individual sovereignty within the collective framework. The BOOT movement does not seek to replace the individual with the state, but to provide the individual with a more precise "Boot" — a tool for traction in a slippery political landscape.
              </p>
              <blockquote className="border-l-4 border-secondary pl-8 my-12 italic text-on-secondary-fixed-variant font-headline-sm bg-secondary-fixed/30 py-6">
                "The strength of the chain is not in its links, but in the clarity of the space between them."
              </blockquote>
            </article>
          </div>

          <div className="mt-24 pt-16 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="max-w-md">
              <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Request the Full Manuscript</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">The BOOT Thesis is available in a limited-edition leather-bound volume for founding members, or as a verified PDF for movement volunteers.</p>
            </div>
            <div className="flex gap-4">
              <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-label-lg text-label-lg hover:bg-primary hover:text-white transition-all">Download PDF</button>
              <button className="bg-secondary text-on-secondary px-8 py-3 rounded-lg font-label-lg text-label-lg hover:brightness-110 transition-all">Order Print</button>
            </div>
          </div>
        </section>
      </main>
    </CitizenLayout>
  );
}
