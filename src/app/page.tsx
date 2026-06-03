import React from 'react';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';

export default function HomePage() {
  return (
    <PublicLayout>
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="relative px-margin-mobile pt-12 pb-16 overflow-hidden">
          <div className="max-w-container-max mx-auto relative z-10">
            <span className="inline-block text-secondary font-sans text-xs font-semibold tracking-widest uppercase mb-4">
              Nigeria's Future, Built Today
            </span>
            <h1 className="font-serif text-5xl font-bold text-primary leading-tight mb-6">
              Because Of <br/><span className="text-secondary">Our Tomorrow</span>
            </h1>
            <p className="font-sans text-lg text-on-surface-variant max-w-md mb-8">
              A national movement for participation, leadership, accountability and shared progress. Every boot on the ground is a step toward excellence.
            </p>
            <div className="flex flex-col gap-4">
              <Link href="/join" className="w-full bg-primary-container text-white py-4 rounded-xl font-sans text-sm font-semibold flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-transform">
                Join BOOT Movement
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <div className="flex gap-3">
                <Link href="/about" className="flex-1 bg-surface-container-low border border-outline-variant text-primary py-3 rounded-xl font-sans text-sm font-semibold active:bg-surface-variant">
                  Explore
                </Link>
                <Link href="/donate" className="flex-1 bg-secondary text-white py-3 rounded-xl font-sans text-sm font-semibold active:opacity-90 shadow-md">
                  Donate
                </Link>
              </div>
            </div>
          </div>
          {/* Atmospheric BG Element */}
          <div className="absolute -right-20 top-20 opacity-10 pointer-events-none">
            <span className="material-symbols-outlined text-[200px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
              account_balance
            </span>
          </div>
        </section>

        {/* Live Metrics Section */}
        <section className="bg-surface-container-low py-8 border-y border-outline-variant/20">
          <div className="flex overflow-x-auto hide-scrollbar gap-6 px-margin-mobile">
            <div className="flex-shrink-0 text-center">
              <p className="font-serif text-2xl font-semibold text-primary mb-1">2.4M</p>
              <p className="font-sans text-xs font-medium uppercase text-on-surface-variant">Members</p>
            </div>
            <div className="w-px h-12 bg-outline-variant/30 self-center"></div>
            <div className="flex-shrink-0 text-center">
              <p className="font-serif text-2xl font-semibold text-primary mb-1">85K</p>
              <p className="font-sans text-xs font-medium uppercase text-on-surface-variant">Volunteers</p>
            </div>
            <div className="w-px h-12 bg-outline-variant/30 self-center"></div>
            <div className="flex-shrink-0 text-center">
              <p className="font-serif text-2xl font-semibold text-primary mb-1">774</p>
              <p className="font-sans text-xs font-medium uppercase text-on-surface-variant">LGAs Active</p>
            </div>
            <div className="w-px h-12 bg-outline-variant/30 self-center"></div>
            <div className="flex-shrink-0 text-center">
              <p className="font-serif text-2xl font-semibold text-primary mb-1">36</p>
              <p className="font-sans text-xs font-medium uppercase text-on-surface-variant">States</p>
            </div>
          </div>
        </section>

        {/* Pillars Section */}
        <section className="px-margin-mobile py-16 bg-surface">
          <h2 className="font-serif text-3xl font-semibold text-primary mb-2">Our Pillars</h2>
          <p className="font-sans text-base text-on-surface-variant mb-8">The foundation of a visionary nation.</p>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-primary-container p-6 rounded-2xl flex flex-col justify-between col-span-2 aspect-[16/9]">
              <span className="material-symbols-outlined text-white text-4xl">groups</span>
              <div>
                <h3 className="font-serif text-xl font-semibold text-white">Mass Participation</h3>
                <p className="font-sans text-sm text-primary-fixed-dim mt-1">Direct involvement in democratic processes.</p>
              </div>
            </div>
            <div className="glass-card p-4 rounded-2xl border border-tertiary/20">
              <span className="material-symbols-outlined text-tertiary mb-3">verified_user</span>
              <h3 className="font-sans text-sm font-semibold text-primary">Governance</h3>
            </div>
            <div className="glass-card p-4 rounded-2xl border border-secondary/20">
              <span className="material-symbols-outlined text-secondary mb-3">account_balance</span>
              <h3 className="font-sans text-sm font-semibold text-primary">Leadership</h3>
            </div>
            <div className="bg-surface-container-high p-4 rounded-2xl col-span-2 flex items-center gap-4">
              <span className="material-symbols-outlined text-primary text-3xl">analytics</span>
              <div>
                <h3 className="font-sans text-sm font-semibold text-primary uppercase">National Development</h3>
                <p className="font-sans text-sm text-on-surface-variant">Evidence-based growth strategies.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Stories */}
        <section className="py-12 bg-surface-container-lowest">
          <div className="px-margin-mobile flex justify-between items-end mb-8">
            <div>
              <h2 className="font-serif text-3xl font-semibold text-primary">Movement Stories</h2>
              <p className="font-sans text-sm text-on-surface-variant">Real impact, real people.</p>
            </div>
            <Link href="/media" className="text-secondary font-sans text-sm font-semibold flex items-center gap-1">
              See All <span className="material-symbols-outlined text-sm">open_in_new</span>
            </Link>
          </div>
          <div className="flex overflow-x-auto hide-scrollbar gap-4 px-margin-mobile">
            {/* Card 1 */}
            <div className="flex-shrink-0 w-72 rounded-2xl overflow-hidden border border-outline-variant/30 bg-white">
              <img 
                className="w-full h-40 object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmuUxgQvv_UqtUTnffO1wM7LCn9ES2wnzzmYVWF9Id3wI1PAFBPFUuAvXEQRDG5dakiR5_1U0u17ObxJFXtkdKdgmM52qI6yl9oH1UcwuIl5zhYj1R0MALY_Ft5ZpwZVry56cSod6C0EpgungMhXj66VRdkTTkbt3sCacTCtcs8j9eWPqlnfjK_gHIBrFsoMyF_7dInykyujGZDX3yV35ezlkNN2nAX78vgIjBBxiWLwCiyhvxPcquRk8HvABnsed4QkL5iuUvWHeH"
                alt="Community Town Hall"
              />
              <div className="p-5">
                <span className="font-sans text-xs font-medium text-secondary uppercase mb-2 block">Community Impact</span>
                <h4 className="font-serif text-xl font-semibold text-primary leading-snug">The Lagos Youth Hub Success Story</h4>
                <p className="font-sans text-sm text-on-surface-variant mt-2 line-clamp-2">How local grassroots organizing revitalized urban digital literacy programs...</p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="flex-shrink-0 w-72 rounded-2xl overflow-hidden border border-outline-variant/30 bg-white">
              <img 
                className="w-full h-40 object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuACEeqUQqNTqNijClmAj8KgTq4Mc7Em2cCYWX5E9D238P4pwMnsUwNV0lX_O3A1KcgC17dqLjSPSkt56L8UHxHjuvqvGF-kUKdfeyLaiIpxiLyYNzj0pTHBeWdiAFsqhWeOTHa4i38VGrMnvzQLI61qmLd8EXWcCeEMlv1Om6CnOSssMMnULIG8--BLtcYDYh-NB-qOqC4WsaO7zFyUW8WN1Hp1nXFuq3lkGThkZg56IcptYn50biV4KaKYfiFtyQIbMYfstSI6zCRFm"
                alt="Emerging Leaders"
              />
              <div className="p-5">
                <span className="font-sans text-xs font-medium text-secondary uppercase mb-2 block">Leadership</span>
                <h4 className="font-serif text-xl font-semibold text-primary leading-snug">Emerging Leaders Summit 2024</h4>
                <p className="font-sans text-sm text-on-surface-variant mt-2 line-clamp-2">Identifying the next generation of accountable public servants for Nigeria.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section className="px-margin-mobile py-16 bg-surface">
          <h2 className="font-serif text-3xl font-semibold text-primary mb-8">Upcoming Events</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 bg-white p-4 rounded-xl border-l-4 border-secondary shadow-sm">
              <div className="text-center min-w-[48px]">
                <p className="font-sans text-xs font-medium text-secondary uppercase">Oct</p>
                <p className="font-serif text-2xl font-semibold text-primary">24</p>
              </div>
              <div>
                <h4 className="font-sans text-sm font-semibold text-primary">National Policy Dialogue</h4>
                <p className="font-sans text-sm text-on-surface-variant flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">location_on</span> Abuja, FCT
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white p-4 rounded-xl border-l-4 border-primary shadow-sm">
              <div className="text-center min-w-[48px]">
                <p className="font-sans text-xs font-medium text-primary uppercase">Nov</p>
                <p className="font-serif text-2xl font-semibold text-primary">05</p>
              </div>
              <div>
                <h4 className="font-sans text-sm font-semibold text-primary">Diaspora Engagement Webinar</h4>
                <p className="font-sans text-sm text-on-surface-variant flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">videocam</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Snapshot Dashboard */}
        <section className="mx-margin-mobile my-8 bg-primary-container rounded-3xl p-8 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="font-serif text-xl font-semibold mb-6">Impact Snapshot</h2>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="font-sans text-xs font-medium text-primary-fixed-dim uppercase mb-1">Funded Projects</p>
                <p className="font-serif text-3xl font-semibold">142</p>
                <div className="w-full bg-white/20 h-1 rounded-full mt-2">
                  <div className="bg-secondary h-full w-[70%] rounded-full"></div>
                </div>
              </div>
              <div>
                <p className="font-sans text-xs font-medium text-primary-fixed-dim uppercase mb-1">Trained Cadets</p>
                <p className="font-serif text-3xl font-semibold">12K+</p>
                <div className="w-full bg-white/20 h-1 rounded-full mt-2"></div>
              </div>
            </div>
            <button className="mt-8 font-sans text-sm font-semibold border-b border-secondary text-secondary-fixed-dim">
              View Accountability Report
            </button>
          </div>
          <span className="material-symbols-outlined absolute -bottom-8 -right-8 text-[160px] opacity-10 text-white">
            donut_large
          </span>
        </section>

        {/* Diaspora Section */}
        <section className="px-margin-mobile py-16 bg-surface-container">
          <div className="text-center mb-8">
            <h2 className="font-serif text-3xl font-semibold text-primary">The Diaspora Connection</h2>
            <p className="font-sans text-base text-on-surface-variant mt-2">Nigeria is larger than its borders. Join the global network of BOOT members.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-outline-variant/30">
            <h3 className="font-sans text-sm font-semibold text-primary mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">public</span> Global Remittance of Talent
            </h3>
            <p className="font-sans text-sans text-sm text-on-surface-variant mb-6">
              Support candidates, mentor youth hubs, and provide strategic advisory from anywhere in the world.
            </p>
            <button className="w-full border border-primary text-primary py-3 rounded-xl font-sans text-sm font-semibold hover:bg-primary-container hover:text-white transition-colors">
              Join Diaspora Wing
            </button>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="px-margin-mobile py-20 text-center">
          <h2 className="font-serif text-3xl font-semibold text-primary mb-4">Be the change you seek.</h2>
          <p className="font-sans text-base text-on-surface-variant mb-10 px-4">
            The BOOT Movement is powered by ordinary citizens doing extraordinary things.
          </p>
          <div className="space-y-4">
            <button className="w-full bg-secondary text-white py-5 rounded-2xl font-sans text-sm font-semibold shadow-xl shadow-secondary/20 flex items-center justify-center gap-2">
              Become a Volunteer <span className="material-symbols-outlined">volunteer_activism</span>
            </button>
            <button className="w-full bg-primary-container text-white py-5 rounded-2xl font-sans text-sm font-semibold shadow-xl shadow-primary-container/20">
              Donate to the Cause
            </button>
          </div>
        </section>
      </div>
    </PublicLayout>
  );
}
