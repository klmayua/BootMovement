import React from 'react';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';

export default function HomePage() {
  return (
    <PublicLayout>
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[85vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              className="w-full h-full object-cover md:brightness-50" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0dndBN91UiEj2HgrdJ3hFcXdbdXBSL9bAFJnGOQhuJCnYhBA-OARRQb6deSzroPC8rZPCONTWU3SmzpYhxCh_fmBh_iGEceyZCfpnp26SJgwjCFWris42Mmwen8JhKJvFcbt3zLjl8gCxSf2M6FQ5b49J1jakOLLXSe1wrT33jXsDPb8If01emqu-vmiMuibLKY4kwiaj-pfRLUOCl4GeEK7XNMdcJFQTFNyoUCHQlSzIxmaIBRmQ8OezA7-cRGSB1ICIh_n04AAS"
              alt="A grand neoclassical government building with towering white columns and a wide stone staircase"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent md:hidden"></div>
          </div>
          
          <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full">
            <div className="max-w-2xl text-on-primary">
              <span className="font-label-lg text-label-lg text-secondary uppercase tracking-[0.2em] mb-4 block font-semibold md:hidden">Our Vision</span>
              <h1 className="font-display-lg text-[42px] md:text-display-lg leading-tight mb-6 md:italic">Because Of Our Tomorrow.</h1>
              <p className="font-body-lg text-body-lg mb-10 max-w-md md:max-w-none md:border-l-4 md:border-secondary md:pl-6 opacity-90">
                Building a legacy of stability and forward-looking growth for every citizen. Join the movement for a principled future.
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <button className="bg-secondary text-white font-label-lg text-label-lg py-4 px-8 rounded-lg shadow-lg md:shadow-none md:rounded-none md:px-8 md:py-4 active:scale-95 transition-transform text-center uppercase tracking-wider md:hover:translate-y-[-2px] md:duration-300">
                  Join the Movement
                </button>
                <button className="bg-transparent border-2 border-white text-white font-label-lg text-label-lg py-4 px-8 rounded-lg md:rounded-none md:border-2 md:px-8 md:py-4 active:scale-95 transition-transform text-center uppercase tracking-wider md:hover:bg-white/10 md:transition-colors">
                  Read Our Thesis
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Foundation of Progress */}
        <section className="px-margin-mobile md:px-0 py-16 md:py-24 bg-surface-container-low md:bg-surface">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-end mb-12 md:mb-16">
              <div className="md:w-2/3">
                <h2 className="font-headline-lg text-headline-lg text-primary mb-4 text-center md:text-left">Foundation of Progress</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  Our philosophy bridges the wisdom of our heritage with the innovations of tomorrow. We believe in building on solid ground.
                </p>
              </div>
              <div className="md:w-1/3 flex justify-center md:justify-end">
                <div className="w-24 h-1 bg-secondary"></div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-gutter">
              {/* Card: Traditional Values */}
              <div className="group relative bg-surface p-8 md:p-12 border border-outline-variant/30 hover:border-secondary/50 transition-all duration-500 overflow-hidden rounded-xl md:rounded-none">
                <h3 className="font-headline-md text-headline-md text-primary mb-6">Traditional Values</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8">Upholding the institutional integrity that has sustained our society for generations. We protect the core principles of accountability and respect.</p>
                <a className="inline-flex items-center text-secondary font-label-lg text-label-lg group-hover:gap-4 transition-all" href="#">
                  LEARN MORE <span className="material-symbols-outlined ml-2">arrow_forward</span>
                </a>
              </div>
              {/* Card: Future Progress */}
              <div className="group relative bg-primary-container p-8 md:p-12 text-on-primary transition-all duration-500 overflow-hidden rounded-xl md:rounded-none">
                <h3 className="font-headline-md text-headline-md mb-6">Future Progress</h3>
                <p className="font-body-md text-body-md text-on-primary-container mb-8">Investing in the technologies and policies that will define the next century. Our vision is forward-facing, bold, and meticulously planned.</p>
                <a className="inline-flex items-center text-on-primary font-label-lg text-label-lg group-hover:gap-4 transition-all" href="#">
                  EXPLORE VISION <span className="material-symbols-outlined ml-2">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Action Grid - Mobile Only */}
        <section className="px-margin-mobile py-8 bg-surface-container-low md:hidden">
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center gap-2">
              <button className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white shadow-md active:scale-90 transition-transform">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>person_add</span>
              </button>
              <span className="font-label-md text-label-md font-semibold text-primary">Join Now</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <button className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-white shadow-md active:scale-90 transition-transform">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>volunteer_activism</span>
              </button>
              <span className="font-label-md text-label-md font-semibold text-primary">Volunteer</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <button className="w-16 h-16 rounded-full bg-tertiary-container flex items-center justify-center text-tertiary-fixed shadow-md active:scale-90 transition-transform">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>payments</span>
              </button>
              <span className="font-label-md text-label-md font-semibold text-primary">Donate</span>
            </div>
          </div>
        </section>

        {/* Stats Section - Desktop Only */}
        <section className="hidden md:block py-20 border-y border-outline-variant/30 bg-surface">
          <div className="max-w-container-max mx-auto px-margin-desktop">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              <div className="stat-card relative pb-8 text-center">
                <div className="font-display-lg text-display-lg text-primary mb-2">150k+</div>
                <div className="font-label-lg text-label-lg text-on-surface-variant uppercase tracking-widest">Signed Members</div>
              </div>
              <div className="stat-card relative pb-8 text-center">
                <div className="font-display-lg text-display-lg text-primary mb-2">$2.4M</div>
                <div className="font-label-lg text-label-lg text-on-surface-variant uppercase tracking-widest">Community Funded</div>
              </div>
              <div className="stat-card relative pb-8 text-center">
                <div className="font-display-lg text-display-lg text-primary mb-2">22</div>
                <div className="font-label-lg text-label-lg text-on-surface-variant uppercase tracking-widest">Policy Wins</div>
              </div>
              <div className="stat-card relative pb-8 text-center">
                <div className="font-display-lg text-display-lg text-primary mb-2">48</div>
                <div className="font-label-lg text-label-lg text-on-surface-variant uppercase tracking-widest">Endorsed Leaders</div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Foundational Pillars - Desktop Only */}
        <section className="hidden md:block py-24 bg-surface-container">
          <div className="max-w-container-max mx-auto px-margin-desktop">
            <div className="text-center mb-16">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Our Foundational Pillars</h2>
              <div className="w-20 h-1 bg-secondary mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-8 bg-surface border border-outline-variant/20 hover:shadow-xl transition-all duration-300">
                <span className="material-symbols-outlined text-secondary text-4xl mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>gavel</span>
                <h4 className="font-headline-sm text-headline-sm text-primary mb-3">Institutional Accountability</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Ensuring transparent governance through digital audits and civic oversight.</p>
              </div>
              <div className="p-8 bg-surface border border-outline-variant/20 hover:shadow-xl transition-all duration-300">
                <span className="material-symbols-outlined text-secondary text-4xl mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>location_city</span>
                <h4 className="font-headline-sm text-headline-sm text-primary mb-3">Localized Empowerment</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Returning decision-making power to community councils and local districts.</p>
              </div>
              <div className="p-8 bg-surface border border-outline-variant/20 hover:shadow-xl transition-all duration-300">
                <span className="material-symbols-outlined text-secondary text-4xl mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>museum</span>
                <h4 className="font-headline-sm text-headline-sm text-primary mb-3">Heritage Conservation</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Preserving our cultural landmarks and historic values for the next generation.</p>
              </div>
              <div className="p-8 bg-surface border border-outline-variant/20 hover:shadow-xl transition-all duration-300">
                <span className="material-symbols-outlined text-secondary text-4xl mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>trending_up</span>
                <h4 className="font-headline-sm text-headline-sm text-primary mb-3">Pragmatic Economics</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Evidence-based fiscal policy that prioritizes sustainable growth and equity.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Initiatives (Bento Grid Style) - Desktop Only */}
        <section className="hidden md:block py-24 bg-surface">
          <div className="max-w-container-max mx-auto px-margin-desktop">
            <div className="flex justify-between items-end mb-12">
              <h2 className="font-headline-lg text-headline-lg text-primary">Latest Initiatives</h2>
              <a className="font-label-lg text-label-lg text-secondary underline" href="#">View All News</a>
            </div>
            <div className="bento-grid">
              <div className="col-span-12 lg:col-span-8 group relative overflow-hidden h-[400px]">
                <img 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuChVQujRFQ_VYUkIT4rS5GAQ4YZA-iQcJNHTzThF-FCmy1eWXV3Kb6ZCfdpF0eqBIhACZ7QP7BwP046wKFHXTxICzsJILyLyDyFp9EDJ4ko65QVvJH-G8OIXOzjrc9dvwwPMs5Va4H5FhZeBvtoFrmELREMyfzoZU0Ee7mA9BzA1IP1ZuxnfwnE2sz-Ld_-iQoWZemm89zFMzidCWGIeV_xHUKqxZJdSrSFJIChjWBLsGYBC4VGSuMYrtkCysHvtJJIZ_aUKdDoDfRG"
                  alt="A futuristic solar farm at sunrise"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-10 text-on-primary">
                  <span className="bg-secondary px-3 py-1 font-label-md text-label-md mb-4 inline-block">LEGISLATIVE UPDATE</span>
                  <h3 className="font-headline-md text-headline-md mb-2">Energy Sovereignty Act</h3>
                  <p className="font-body-md text-body-md opacity-80 max-w-xl">Securing our nation's grid through decentralized renewable infrastructure and strategic reserves.</p>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-4 bg-surface-container-highest p-10 flex flex-col justify-between">
                <div>
                  <span className="text-secondary font-label-md text-label-md mb-4 block">UPCOMING EVENT</span>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-4">National Townhall: Digital Infrastructure</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-6">Join Party leadership this Friday for a live discussion on the 2025 Digital Charter and data privacy initiatives.</p>
                </div>
                <button className="w-full border-2 border-primary text-primary font-label-lg text-label-lg py-3 hover:bg-primary hover:text-white transition-all">Register to Attend</button>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Updates Feed - Mobile Only */}
        <section className="px-margin-mobile py-16 md:hidden">
          <div className="flex justify-between items-end mb-8">
            <h2 className="font-headline-md text-headline-md text-primary">Latest Initiatives</h2>
            <a className="text-secondary font-label-lg text-label-lg border-b border-secondary" href="#">View All</a>
          </div>
          <div className="flex flex-col gap-8">
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

        {/* Mobile Bottom Navbar - Only visible on mobile */}
        <nav className="fixed bottom-0 left-0 w-full z-50 md:hidden flex justify-around items-center px-4 pb-4 pt-2 bg-surface-container-lowest border-t border-outline-variant shadow-lg rounded-t-xl">
          <a className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-full px-4 py-1 transition-transform duration-150 scale-95 active:scale-90" href="#">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
            <span className="font-label-md text-label-md">Home</span>
          </a>
          <a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:text-primary transition-all duration-150 active:scale-90" href="#">
            <span className="material-symbols-outlined">group</span>
            <span className="font-label-md text-label-md">Communities</span>
          </a>
          <a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:text-primary transition-all duration-150 active:scale-90" href="#">
            <span className="material-symbols-outlined">event</span>
            <span className="font-label-md text-label-md">Events</span>
          </a>
          <a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:text-primary transition-all duration-150 active:scale-90" href="#">
            <span className="material-symbols-outlined">rss_feed</span>
            <span className="font-label-md text-label-md">Feed</span>
          </a>
          <a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:text-primary transition-all duration-150 active:scale-90" href="#">
            <span className="material-symbols-outlined">person</span>
            <span className="font-label-md text-label-md">Profile</span>
          </a>
        </nav>
      </div>
    </PublicLayout>
  );
}