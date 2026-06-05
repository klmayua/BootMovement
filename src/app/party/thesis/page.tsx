import React from 'react';
import Link from 'next/link';
import { PartyLayout } from '@/components/layout/PartyLayout';

export default function PartyThesisPage() {
  return (
    <PartyLayout>
      <div className="bg-background text-on-surface font-body-md overflow-x-hidden selection:bg-secondary/20 selection:text-secondary">
        <main className="max-w-container-max mx-auto flex flex-row relative min-h-screen">
          <aside className="hidden lg:block w-80 h-[calc(100vh-120px)] sticky top-24 p-4 border-r border-outline-variant/20 bg-surface-container-low">
            <div className="flex flex-col gap-2">
              <h2 className="font-headline-sm text-headline-sm text-primary px-4 mb-4">Doctrine Navigation</h2>
              <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant rounded-lg transition-all duration-300 group" href="/party">
                <span className="material-symbols-outlined">home</span>
                <span className="font-label-lg text-label-lg">Party Home</span>
              </Link>
              <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant rounded-lg transition-all duration-300" href="/party/manifesto">
                <span className="material-symbols-outlined">description</span>
                <span className="font-label-lg text-label-lg">Manifesto</span>
              </Link>
              <Link className="flex items-center gap-3 px-4 py-3 bg-primary-container text-on-primary-container rounded-full transition-all duration-300" href="/party/thesis">
                <span className="material-symbols-outlined">menu_book</span>
                <span className="font-label-lg text-label-lg">The Thesis</span>
              </Link>
              <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant rounded-lg transition-all duration-300" href="/party/leadership">
                <span className="material-symbols-outlined">account_balance</span>
                <span className="font-label-lg text-label-lg">Executive Council</span>
              </Link>
              <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant rounded-lg transition-all duration-300" href="/party/newsroom">
                <span className="material-symbols-outlined">campaign</span>
                <span className="font-label-lg text-label-lg">Press Office</span>
              </Link>
            </div>
            <div className="mt-12 p-6 bg-surface-container rounded-xl border border-outline-variant/30">
              <p className="font-label-md text-label-md text-primary mb-2 uppercase tracking-widest">Institutional Alignment</p>
              <div className="h-2 w-full bg-tertiary-fixed-dim rounded-full overflow-hidden">
                <div className="h-full bg-secondary w-full transition-all duration-1000"></div>
              </div>
              <p className="font-label-sm text-label-md mt-2 text-on-surface-variant">100% Doctrine Consistency</p>
            </div>
          </aside>
          <section className="flex-1 px-margin-desktop py-16 bg-gradient-to-b from-[#fcfcfc] to-[#f5f5f5]">
            <header className="max-w-3xl mb-24">
              <span className="font-label-lg text-label-lg text-secondary tracking-widest uppercase mb-4 block">Official Governing Logic</span>
              <h1 className="font-display-lg text-display-lg text-primary mb-8">The BOOT Doctrine: Institutional Stability</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 italic border-l-4 border-primary pl-6 leading-relaxed">
                "Governance is the art of managing the tension between ancestral wisdom and futuristic necessity. 
                Stability is achieved when institutional weight is perfectly balanced by digital transparency."
              </p>
              <div className="flex items-center gap-6">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-background bg-primary-container flex items-center justify-center text-white font-label-md">EC</div>
                  <div className="w-10 h-10 rounded-full border-2 border-background bg-tertiary flex items-center justify-center text-white font-label-md">BC</div>
                  <div className="w-10 h-10 rounded-full border-2 border-background bg-secondary flex items-center justify-center text-white font-label-md">SC</div>
                </div>
                <p className="font-label-md text-label-md text-on-surface-variant">Ratified by the National Executive Council</p>
              </div>
            </header>
            <div className="grid grid-cols-12 gap-gutter mb-32">
              <div className="col-span-12 md:col-span-8 bg-surface-container-highest p-12 rounded-xl relative overflow-hidden border border-outline-variant/30">
                <h3 className="font-headline-sm text-headline-sm text-primary mb-6">01. The Principle of Institutional Anchor</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-loose">
                  Unlike grassroots movements, a political party must act as an anchor. The BOOT Doctrine establishes 
                  "Institutional Anchors"—core legal and ethical constants that cannot be altered by simple majority 
                  vote, ensuring that the nation's long-term strategic interests are protected from short-term volatility.
                </p>
                <div className="flex items-center gap-2 text-secondary font-label-lg cursor-pointer hover:underline">
                  <span>Read Official Decree</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </div>
              </div>
              <div className="col-span-12 md:col-span-4 bg-primary-container p-12 rounded-xl text-on-primary-container flex flex-col justify-between border border-primary/20">
                <span className="material-symbols-outlined text-5xl opacity-50">verified</span>
                <div>
                  <h4 className="font-headline-sm text-headline-sm mb-4">Compliance Rating</h4>
                  <p className="font-body-sm text-body-sm opacity-80">Our commitment to the Rule of Law is audited quarterly by an independent judicial board.</p>
                </div>
              </div>
            </div>
            <div className="max-w-3xl space-y-16">
              <article className="prose prose-slate prose-lg">
                <h2 className="font-headline-md text-headline-md text-primary mb-8 flex items-center gap-3">
                  <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm">2</span>
                  The Architecture of State Efficiency
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                  The Party believes in "Structural Efficiency"—the removal of redundant administrative layers through 
                  the integration of a unified civic operating system. By digitizing the interface between the 
                  citizen and the state, we eliminate the "Bureaucratic Friction" that historically slows national progress.
                </p>
                <div className="my-12 p-8 bg-white/70 backdrop-blur-sm border border-outline-variant/20 rounded-xl">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                      <span className="font-body-md text-body-md">Real-time Legislative Tracking (The Open Ledger).</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                      <span className="font-body-md text-body-md">Automatic Sunset Clauses on administrative decrees.</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                      <span className="font-body-md text-body-md">Direct Meritocratic Appointment of technical experts.</span>
                    </li>
                  </ul>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  This is not merely a technical upgrade, but a philosophical shift from "Governing Over" to "Serving For".
                </p>
              </article>
              <div className="w-full aspect-video rounded-2xl overflow-hidden relative group">
                <img alt="Formal government architecture" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_QXnmiL9hNIt-zY2sUQ9FMA6Zl8LdzWwk8b1SmuXGdmrRO3u5WPI7Pq1WRvTvugqQ1Iv8CgHbblGsR7yYEwMrPqA7XY5yjiPuhviENmHUsPMepYY2axO7W1mKXYzK9RQnKXhb8ahIdKCZa2g7m17LJyPm5nnXg4eeEg5IA5QGs93cbk-t7cl6mJFG-w5UxVrnp7sC46xFRx7o6ujWl_PF_c-GzoFq2RtA3Gy-4VyPjK2bL1Rk_UvcEgzv2-f2VQQaK2WEsfTdeYkQ"/>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-8">
                  <p className="text-white font-headline-sm text-headline-sm mb-2">The Pillar of Stability</p>
                  <p className="text-white/80 font-body-sm text-body-sm max-w-md">Fig B.1: Representation of the structural balance between stability and progress.</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </PartyLayout>
  );
}
