import React from 'react';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';

export default function HomePage() {
  return (
    <PublicLayout>
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[870px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBktre1t5gtk0LcsqiOsUVYs-OubN7wRk1GSv6y1lyAivhTVCjdh0T8iRu63McxGb_sc7lLTmWU9t1LeTkBAIwm5Z0NEMcf_rJig4DtF5REJuyazi-qZEfJbZ1Hr6EBgmX63s4Tcoi7ulkS39F0mMOFIhz_s3tffqz1_SFJhQNOFjPNUxy3BAA2B1Jn6KoJ7_dzRsiQZKg09PP09-q3nuPOIFRE8uwQsh5t50JguujgmD9QgqG8xOVnjA2x4MG6p_poasX7Pk-1vYjI"
              alt="National Assembly Building"
            />
            <div className="hero-gradient absolute inset-0"></div>
          </div>
          
          <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full grid md:grid-cols-2 gap-16 items-center">
              <div className="text-white space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary-fixed-dim/30 rounded-full bg-primary/40 backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                  <span className="font-label-md text-label-md tracking-widest uppercase">The 2024 Reform Agenda</span>
                </div>
                <h1 className="font-display-lg text-display-lg leading-tight">
                  Traditional Values. <br/>
                  <span className="text-primary-fixed-dim">Future Progress.</span>
                </h1>
                <p className="font-body-lg text-body-lg text-surface-variant max-w-lg">
                  Restoring the foundations of civic duty through transparency, localized empowerment, and unwavering institutional integrity.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <button className="bg-secondary text-on-secondary px-8 py-4 rounded-full font-label-lg text-label-lg flex items-center gap-2 hover:translate-y-[-2px] transition-transform shadow-xl shadow-secondary/20">
                      Join the Movement
                      <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                  <button className="border border-white/30 text-white px-8 py-4 rounded-full font-label-lg text-label-lg hover:bg-white/10 transition-all">
                      View Our Thesis
                  </button>
                </div>
                </div>
                <div className="hidden md:block">
                  <div className="bg-surface/5 backdrop-blur-md border border-white/10 p-8 rounded-xl">
                    <div className="flex justify-between items-end mb-12">
                      <div>
                        <p className="font-label-md text-label-md text-primary-fixed-dim uppercase tracking-tighter">Current Momentum</p>
                        <p className="font-headline-lg text-headline-lg text-white">428,910</p>
                      </div>
                      <span className="material-symbols-outlined text-secondary text-headline-lg" style={{ fontVariationSettings: "'FILL' 1" }}>trending_up</span>
                    </div>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <div className="flex justify-between text-white font-label-lg text-label-lg">
                          <span>Volunteer Goal</span>
                          <span>85%</span>
                        </div>
                        <div className="h-2 w-full bg-primary-container rounded-full overflow-hidden">
                          <div className="h-full bg-secondary" style={{ width: '85%' }}></div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-primary/40 p-4 rounded-lg">
                          <p className="text-primary-fixed-dim font-label-md text-label-md">Local Chapters</p>
                          <p className="text-white font-headline-sm text-headline-sm">114</p>
                        </div>
                        <div className="bg-primary/40 p-4 rounded-lg">
                          <p className="text-primary-fixed-dim font-label-md text-label-md">Active Campaigns</p>
                          <p className="text-white font-headline-sm text-headline-sm">32</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

        {/* Manifesto Highlight */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-margin-mobile text-center space-y-8">
            <span className="material-symbols-outlined text-primary text-display-lg opacity-20">format_quote</span>
            <h3 className="font-headline-lg text-headline-lg text-primary italic">
              "We do not seek to reinvent the wheel of governance, but to return it to the citizens it was built to serve. Accountability is not a campaign slogan—it is our primary mandate."
            </h3>
            <div className="flex flex-col items-center gap-2">
              <div className="h-px w-24 bg-on-tertiary-container"></div>
              <p className="font-label-lg text-label-lg uppercase tracking-widest text-on-tertiary-container">The Boot Manifesto, 2024</p>
            </div>
          </div>
        </section>

        {/* Mission Pillars - Bento Grid */}
        <section className="py-24 px-margin-desktop max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Our Foundational Pillars</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">A multi-generational strategy designed to restore trust in public institutions through pragmatic, localized reform.</p>
            </div>
               <Link href="/manifesto" className="font-label-lg text-label-lg text-primary flex items-center gap-2 group">
                 Explore Our Full Policy Framework
                 <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
               </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Pillar 1 */}
            <div className="md:col-span-2 group pillar-card bg-surface-container-low p-10 rounded-xl border border-outline-variant/20 hover:border-primary/20 transition-all">
              <div className="flex flex-col h-full justify-between gap-12">
                <div className="flex justify-between items-start">
                  <span className="material-symbols-outlined pillar-icon text-primary text-display-lg transition-transform">account_balance</span>
                  <span className="font-label-md text-label-md text-on-tertiary-container border border-on-tertiary-container/30 px-3 py-1 rounded-full">Pillar 01</span>
                </div>
                <div>
                  <h4 className="font-headline-md text-headline-md text-primary mb-4">Institutional Accountability</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-lg">We advocate for strict transparency protocols and digital-first public ledgers to ensure every cent of taxpayer revenue is traceable and purposeful.</p>
                </div>
              </div>
            </div>
            {/* Pillar 2 */}
            <div className="group pillar-card bg-primary text-white p-10 rounded-xl transition-all">
              <div className="flex flex-col h-full justify-between gap-12">
                <div className="flex justify-between items-start">
                  <span className="material-symbols-outlined pillar-icon text-secondary text-display-lg transition-transform">groups</span>
                  <span className="font-label-md text-label-md text-primary-fixed-dim border border-primary-fixed-dim/30 px-3 py-1 rounded-full">Pillar 02</span>
                </div>
                <div>
                  <h4 className="font-headline-md text-headline-md text-white mb-4">Localized Empowerment</h4>
                  <p className="font-body-md text-body-md text-surface-variant">Returning decision-making power to municipal councils and community boards, reducing central bureaucracy.</p>
                </div>
              </div>
            </div>
            {/* Pillar 3 */}
            <div className="group pillar-card bg-surface-container-highest p-10 rounded-xl transition-all">
              <div className="flex flex-col h-full justify-between gap-12">
                <div className="flex justify-between items-start">
                  <span className="material-symbols-outlined pillar-icon text-on-tertiary-container text-display-lg transition-transform">history_edu</span>
                  <span className="font-label-md text-label-md text-on-surface-variant border border-outline/30 px-3 py-1 rounded-full">Pillar 03</span>
                </div>
                <div>
                  <h4 className="font-headline-md text-headline-md text-primary mb-4">Heritage Conservation</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">Protecting our national cultural assets while modernizing the infrastructure that supports them for future generations.</p>
                </div>
              </div>
            </div>
            {/* Pillar 4 */}
            <div className="md:col-span-2 group pillar-card bg-surface-container-low p-10 rounded-xl border border-outline-variant/20 transition-all">
              <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="w-full md:w-1/3">
                  <img className="w-full h-48 object-cover rounded-lg" alt="Professional office setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuChyhxbTLinqETCq9NSMdvnqIScl2K_r7HutjCvexWq-Cu2Z9fkqA0mLOtXJun1C6RYhDp_aBNRJ4WYZ5k3Y6N90karpHe1KSlcuR1ynIkoYj4nWz4B-1KE1djuop4lbFbVCEshrVDSu51utJhSMrUXY-g5hhGGA81txCwGI1xVtmsFr231h1UFnLRnFeceGcq8MQ_9gPmNA-AnM15dy8EUABuLtUG5Vh7YF62i0WDYiqLbWVn5nQZ6Vc8HTW6WDpLcCXAxzpwoO2aK"/>
                </div>
                <div className="w-full md:w-2/3">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-headline-md text-headline-md text-primary">Pragmatic Economics</h4>
                    <span className="font-label-md text-label-md text-on-surface-variant">Pillar 04</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant">A fiscal strategy rooted in reality, prioritizing debt reduction and small-business incentives to drive grassroots growth.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-primary py-20 text-white">
          <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-2 md:grid-cols-4 gap-gutter text-center">
            <div className="space-y-2">
              <p className="font-display-lg text-display-lg text-secondary">150k+</p>
              <p className="font-label-lg text-label-lg uppercase tracking-widest text-primary-fixed-dim">Signed Members</p>
            </div>
            <div className="space-y-2">
              <p className="font-display-lg text-display-lg text-secondary">$2.4M</p>
              <p className="font-label-lg text-label-lg uppercase tracking-widest text-primary-fixed-dim">Community Funded</p>
            </div>
            <div className="space-y-2">
              <p className="font-display-lg text-display-lg text-secondary">22</p>
              <p className="font-label-lg text-label-lg uppercase tracking-widest text-primary-fixed-dim">Policy Wins</p>
            </div>
            <div className="space-y-2">
              <p className="font-display-lg text-display-lg text-secondary">48</p>
              <p className="font-label-lg text-label-lg uppercase tracking-widest text-primary-fixed-dim">Endorsed Leaders</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-32 bg-cream overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
            <span className="material-symbols-outlined text-[40rem]" style={{ fontVariationSettings: "'FILL' 0" }}>account_balance</span>
          </div>
          <div className="max-w-container-max mx-auto px-margin-desktop relative z-10">
            <div className="max-w-2xl bg-white p-12 md:p-20 shadow-2xl shadow-primary/5 rounded-xl border-l-8 border-secondary">
              <h2 className="font-display-lg text-display-lg text-primary mb-6">The future is a choice we make together.</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-10">
                Join the BOOT Civic Movement today. Whether as a donor, a volunteer, or a local organizer, your contribution is the catalyst for national accountability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-secondary text-on-secondary px-10 py-5 rounded-full font-label-lg text-label-lg hover:brightness-110 shadow-lg shadow-secondary/30 transition-all active:scale-95">
                  Join the Movement
                </button>
                <button className="bg-primary text-white px-10 py-5 rounded-full font-label-lg text-label-lg hover:brightness-110 transition-all active:scale-95">
                  Donate to the Cause
                </button>
              </div>
            </div>
          </div>
        </section>

         {/* Newsletter Signup */}
         <section className="px-margin-mobile md:px-0 py-12 md:py-24 mx-margin-mobile md:mx-0 rounded-2xl md:rounded-none bg-primary-container text-on-primary overflow-hidden relative md:bg-primary-container">
           <div className="absolute -right-10 -top-10 w-40 h-40 border-8 border-white/5 rounded-full md:hidden"></div>
           <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
             <h2 className="font-headline-lg md:font-headline-lg text-headline-lg md:text-headline-lg mb-6">Stay Informed</h2>
             <p className="font-body-lg text-body-lg text-on-primary-container max-w-2xl mx-auto mb-10">Receive weekly policy briefings, community reports, and movement updates directly from the BOOT Civic Secretariat.</p>
             <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
               <input className="flex-grow bg-white/10 border border-white/20 text-white placeholder:text-white/50 px-6 py-4 focus:ring-2 focus:ring-secondary outline-none" placeholder="Your professional email" type="email"/>
               <button className="bg-secondary text-white px-10 py-4 font-label-lg text-label-lg hover:bg-on-secondary-fixed-variant transition-colors whitespace-nowrap">Subscribe Now</button>
             </form>
             <p className="mt-6 font-label-md text-label-md text-on-primary-container opacity-60">We value your privacy. Unsubscribe at any time.</p>
           </div>
         </section>
         {/* Bottom Navbar removed - now handled by RootLayout */}
         <div className="hidden md:block"></div>
       </div>
     </PublicLayout>
   );
}