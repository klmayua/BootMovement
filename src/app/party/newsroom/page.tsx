import React from 'react';
import Link from 'next/link';
import { PartyLayout } from '@/components/layout/PartyLayout';

export default function PartyNewsroomPage() {
  return (
    <PartyLayout>
      <div className="bg-[#FDFBF7] font-body-md text-body-md">
        <main className="max-w-container-max mx-auto px-margin-desktop py-12">
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
              <div className="lg:col-span-8">
                <div className="group cursor-pointer">
                  <div className="aspect-[16/9] overflow-hidden mb-6 rounded-lg relative">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Official Government Building" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPhdKfr7y1uUpWXvJxnBuZewG4ZwKoFs0NpD1Ez5uAivw-tmyJXpD3N3moTJtnElh_vtbBXb5xwEPx53fVh18pxmjGSnOjOdNQtmcK9PNePM8WyNHLhrsApWBiXcJlu1wMUGQjxFFP_YEDDb0jALlFCW3DlU7fOwaMHZZnZCGeNqqt-SDNL4Hc2xdC-8m9luhypM4CREYBAMT4kJZTrP58hkc91xoT-hFkgX3CEhfdKbGB2CNbXyJQax-iAGTnymK0LdAIWqysfT3M"/>
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-white px-4 py-1 font-label-lg text-label-lg">OFFICIAL GAZETTE</span>
                    </div>
                  </div>
                  <h1 className="font-display-lg text-display-lg text-primary mb-4 leading-tight group-hover:text-secondary transition-colors">
                    National Energy Sovereignty Act officially ratified.
                  </h1>
                  <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 max-w-2xl">
                    The Executive Council has formally signed the Act into law, marking the beginning of the transition 
                    to a decentralized national grid. This is the first major legislative win of the current term.
                  </p>
                  <div className="flex items-center gap-4 border-t border-outline-variant/30 pt-6">
                    <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center">
                      <span className="material-symbols-outlined text-on-primary">verified_user</span>
                    </div>
                    <div>
                      <p className="font-label-lg text-label-lg text-primary">Office of the National Secretariat</p>
                      <p className="font-label-md text-label-md text-on-surface-variant">June 05, 2026 • Official Announcement</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 space-y-8">
                <h2 className="font-headline-sm text-headline-sm text-primary border-b border-outline-variant/30 pb-2 uppercase tracking-widest">Official Statements</h2>
                <div className="space-y-6">
                  <article className="group cursor-pointer">
                    <p className="text-primary font-label-md text-label-md mb-1">LEGAL NOTICE</p>
                    <h3 className="font-headline-sm text-headline-sm leading-snug group-hover:underline underline-offset-4">Updates to the Civil Service Merit Protocol</h3>
                    <p className="font-label-md text-label-md text-on-surface-variant mt-2">1 day ago</p>
                  </article>
                  <article className="group cursor-pointer">
                    <p className="text-primary font-label-md text-label-md mb-1">DIPLOMATIC</p>
                    <h3 className="font-headline-sm text-headline-sm leading-snug group-hover:underline underline-offset-4">Inter-Regional Cooperation Agreement signed in Abuja</h3>
                    <p className="font-label-md text-label-md text-on-surface-variant mt-2">3 days ago</p>
                  </article>
                  <article className="group cursor-pointer">
                    <p className="text-primary font-label-md text-label-md mb-1">OFFICIAL</p>
                    <h3 className="font-headline-sm text-headline-sm leading-snug group-hover:underline underline-offset-4">Quarterly Institutional Audit Report: Q2 2026</h3>
                    <p className="font-label-md text-label-md text-on-surface-variant mt-2">Last Week</p>
                  </article>
                </div>
                <div className="bg-primary-container p-8 rounded-lg text-on-primary">
                  <h4 className="font-headline-sm text-headline-sm mb-4">Press Accreditation</h4>
                  <p className="font-body-sm text-body-sm mb-6 opacity-90">Official journalists may apply for accreditation to access the National Press Office and receive direct briefings.</p>
                  <button className="w-full bg-secondary text-on-secondary font-label-lg text-label-lg py-3 hover:opacity-90 transition-opacity">
                    APPLY FOR ACCREDITATION
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className="mb-24">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-12 text-center">Legislative Progress</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-surface-container p-8 border border-outline-variant/30 rounded-lg flex flex-col justify-between group hover:border-primary transition-colors cursor-pointer">
                <div>
                  <span className="text-primary material-symbols-outlined text-4xl mb-4">gavel</span>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Bill 2026-04: Digital Rights</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Formalizing the right to data sovereignty for every citizen in the digital age.</p>
                </div>
                <Link className="font-label-lg text-label-lg text-primary flex items-center gap-2 mt-8" href="/party/thesis">
                  VIEW DRAFT <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
              <div className="bg-surface-container p-8 border border-outline-variant/30 rounded-lg flex flex-col justify-between group hover:border-primary transition-colors cursor-pointer">
                <div>
                  <span className="text-primary material-symbols-outlined text-4xl mb-4">account_balance</span>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Bill 2026-09: Fiscal Audit</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Establishing the independent board for real-time budgetary transparency.</p>
                </div>
                <Link className="font-label-lg text-label-lg text-primary flex items-center gap-2 mt-8" href="/party/thesis">
                  VIEW DRAFT <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
              <div className="bg-surface-container p-8 border border-outline-variant/30 rounded-lg flex flex-col justify-between group hover:border-primary transition-colors cursor-pointer">
                <div>
                  <span className="text-primary material-symbols-outlined text-4xl mb-4">location_city</span>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Bill 2026-12: Urban Reform</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Redesigning urban centers for sustainability and citizen-led mobility.</p>
                </div>
                <Link className="font-label-lg text-label-lg text-primary flex items-center gap-2 mt-8" href="/party/thesis">
                  VIEW DRAFT <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </PartyLayout>
  );
}
