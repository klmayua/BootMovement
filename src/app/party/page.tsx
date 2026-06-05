import React from 'react';
import Link from 'next/link';

export default function PartyPage() {
  return (
    <main className="font-body-md text-on-surface">
        {/* Hero Section */}
        <section className="relative h-[85vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover brightness-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0dndBN91UiEj2HgrdJ3hFcXdbdXBSL9bAFJnGOQhuJCnYhBA-OARRQb6deSzroPC8rZPCONTWU3SmzpYhxCh_fmBh_iGEceyZCfpnp26SJgwjCFWris42Mmwen8JhKJvFcbt3zLjl8gCxSf2M6FQ5b49J1jakOLLXSe1wrT33jXsDPb8If01emqu-vmiMuibLKY4kwiaj-pfRLUOCl4GeEK7XNMdcJFQTFNyoUCHQlSzIxmaIBRmQ8OezA7-cRGSB1ICIh_n04AAS" alt="Neoclassical government building" />
          </div>
          <div className="relative z-10 max-w-container-max mx-auto px-margin-desktop w-full">
            <div className="max-w-2xl text-on-primary">
              <h1 className="font-display-lg text-display-lg mb-6 leading-tight">Because Of Our Tomorrow.</h1>
              <p className="font-body-lg text-body-lg mb-10 opacity-90 border-l-4 border-secondary pl-6">
                Building a legacy of stability and forward-looking growth for every citizen. Join the movement for a principled future.
              </p>
              <div className="flex gap-4">
                <Link href="/party/login" className="bg-secondary px-8 py-4 font-label-lg text-label-lg text-on-secondary hover:translate-y-[-2px] transition-transform duration-300 active:scale-95">Enter Movement Portal</Link>
                <Link href="/party/thesis" className="border-2 border-white px-8 py-4 font-label-lg text-label-lg text-white hover:bg-white/10 transition-colors active:scale-95">Read Our Thesis</Link>
              </div>
            </div>
          </div>
        </section>
        {/* Foundation of Progress */}
        <section className="py-24 bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-margin-desktop">
            <div className="flex flex-col md:flex-row gap-12 items-end mb-16">
              <div className="md:w-2/3">
                <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Foundation of Progress</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">Our philosophy bridges the wisdom of our heritage with the innovations of tomorrow. We believe in building on solid ground.</p>
              </div>
              <div className="md:w-1/3 flex justify-end">
                <div className="w-24 h-1 bg-secondary"></div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              {/* Card: Traditional Values */}
              <div className="group relative bg-surface p-12 border border-outline-variant/30 hover:border-secondary/50 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="material-symbols-outlined text-[120px]" data-icon="account_balance">account_balance</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-6">Traditional Values</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8">Upholding the institutional integrity that has sustained our society for generations. We protect the core principles of accountability and respect.</p>
                <Link className="inline-flex items-center text-secondary font-label-lg text-label-lg group-hover:gap-4 transition-all active:scale-95" href="/party/about">
                                LEARN MORE <span className="material-symbols-outlined ml-2">arrow_forward</span>
                            </Link>
              </div>
              {/* Card: Future Progress */}
              <div className="group relative bg-primary-container p-12 text-on-primary transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="material-symbols-outlined text-[120px] text-on-primary-container" data-icon="rocket_launch">rocket_launch</span>
                </div>
                <h3 className="font-headline-md text-headline-md mb-6">Future Progress</h3>
                <p className="font-body-md text-body-md text-on-primary-container mb-8">Investing in the technologies and policies that will define the next century. Our vision is forward-facing, bold, and meticulously planned.</p>
                <Link className="inline-flex items-center text-on-primary font-label-lg text-label-lg group-hover:gap-4 transition-all active:scale-95" href="/party/thesis">
                                EXPLORE VISION <span className="material-symbols-outlined ml-2">arrow_forward</span>
                            </Link>
              </div>
            </div>
          </div>
        </section>
        {/* Stats Section */}
        <section className="py-20 border-y border-outline-variant/30 bg-surface">
          <div className="max-w-container-max mx-auto px-margin-desktop">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              <div className="relative pb-8 text-center">
                <div className="font-display-lg text-display-lg text-primary mb-2">150k+</div>
                <div className="font-label-lg text-label-lg text-on-surface-variant uppercase tracking-widest">Signed Members</div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-0.5 bg-secondary"></div>
              </div>
              <div className="relative pb-8 text-center">
                <div className="font-display-lg text-display-lg text-primary mb-2">$2.4M</div>
                <div className="font-label-lg text-label-lg text-on-surface-variant uppercase tracking-widest">Community Funded</div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-0.5 bg-secondary"></div>
              </div>
              <div className="relative pb-8 text-center">
                <div className="font-display-lg text-display-lg text-primary mb-2">22</div>
                <div className="font-label-lg text-label-lg text-on-surface-variant uppercase tracking-widest">Policy Wins</div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-0.5 bg-secondary"></div>
              </div>
              <div className="relative pb-8 text-center">
                <div className="font-display-lg text-display-lg text-primary mb-2">48</div>
                <div className="font-label-lg text-label-lg text-on-surface-variant uppercase tracking-widest">Endorsed Leaders</div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-0.5 bg-secondary"></div>
              </div>
            </div>
          </div>
        </section>
        {/* Our Foundational Pillars */}
        <section className="py-24 bg-surface-container">
          <div className="max-w-container-max mx-auto px-margin-desktop">
            <div className="text-center mb-16">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Our Foundational Pillars</h2>
              <div className="w-20 h-1 bg-secondary mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-8 bg-surface border border-outline-variant/20 hover:shadow-xl transition-all duration-300">
                <span className="material-symbols-outlined text-secondary text-4xl mb-6">gavel</span>
                <h4 className="font-headline-sm text-headline-sm text-primary mb-3">Institutional Accountability</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Ensuring transparent governance through digital audits and civic oversight.</p>
              </div>
              <div className="p-8 bg-surface border border-outline-variant/20 hover:shadow-xl transition-all duration-300">
                <span className="material-symbols-outlined text-secondary text-4xl mb-6">location_city</span>
                <h4 className="font-headline-sm text-headline-sm text-primary mb-3">Localized Empowerment</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Returning decision-making power to community councils and local districts.</p>
              </div>
              <div className="p-8 bg-surface border border-outline-variant/20 hover:shadow-xl transition-all duration-300">
                <span className="material-symbols-outlined text-secondary text-4xl mb-6">museum</span>
                <h4 className="font-headline-sm text-headline-sm text-primary mb-3">Heritage Conservation</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Preserving our cultural landmarks and historic values for the next generation.</p>
              </div>
              <div className="p-8 bg-surface border border-outline-variant/20 hover:shadow-xl transition-all duration-300">
                <span className="material-symbols-outlined text-secondary text-4xl mb-6">trending_up</span>
                <h4 className="font-headline-sm text-headline-sm text-primary mb-3">Pragmatic Economics</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Evidence-based fiscal policy that prioritizes sustainable growth and equity.</p>
              </div>
            </div>
          </div>
        </section>
        {/* Latest Initiatives */}
        <section className="py-24 bg-surface">
          <div className="max-w-container-max mx-auto px-margin-desktop">
            <div className="flex justify-between items-end mb-12">
              <h2 className="font-headline-lg text-headline-lg text-primary">Latest Initiatives</h2>
              <Link className="font-label-lg text-label-lg text-secondary underline active:scale-95 transition-all" href="/party/newsroom">View All News</Link>
            </div>
            <div className="grid grid-cols-12 gap-gutter">
              <div className="col-span-12 lg:col-span-8 group relative overflow-hidden h-[400px]">
                <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuChVQujRFQ_VYUkIT4rS5GAQ4YZA-iQcJNHTzThF-FCmy1eWXV3Kb6ZCfdpF0eqBIhACZ7QP7BwP046wKFHXTxICzsJILyLyDyFp9EDJ4ko65QVvJH-G8OIXOzjrc9dvwwPMs5Va4H5FhZeBvtoFrmELREMyfzoZU0Ee7mA9BzA1IP1ZuxnfwnE2sz-Ld_-iQoWZemm89zFMzidCWGIeV_xHUKqxZJdSrSFJIChjWBLsGYBC4VGSuMYrtkCysHvtJJIZ_aUKdDoDfRG" alt="Solar farm" />
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
                <Link href="/party/newsroom" className="w-full text-center border-2 border-primary text-primary font-label-lg text-label-lg py-3 hover:bg-primary hover:text-white transition-all active:scale-95">Register to Attend</Link>
              </div>
            </div>
          </div>
        </section>
        {/* Newsletter Signup */}
        <section className="py-24 bg-primary-container text-on-primary">
          <div className="max-w-container-max mx-auto px-margin-desktop text-center">
            <h2 className="font-headline-lg text-headline-lg mb-6">Stay Informed</h2>
            <p className="font-body-lg text-body-lg text-on-primary-container max-w-2xl mx-auto mb-10">Receive weekly policy briefings, community reports, and movement updates directly from the BOOT Civic Secretariat.</p>
            <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
              <input className="flex-grow bg-white/10 border border-white/20 text-white placeholder:text-white/50 px-6 py-4 focus:ring-2 focus:ring-secondary outline-none" placeholder="Your professional email" type="email" />
              <button className="bg-secondary text-white px-10 py-4 font-label-lg text-label-lg hover:bg-on-secondary-fixed-variant transition-colors whitespace-nowrap">Subscribe Now</button>
            </form>
            <p className="mt-6 font-label-md text-label-md text-on-primary-container opacity-60">We value your privacy. Unsubscribe at any time.</p>
          </div>
        </section>
      </main>
    </div>
  );
}




      <main>
        {/* Hero Section */}
        <section className="relative h-[85vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover brightness-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0dndBN91UiEj2HgrdJ3hFcXdbdXBSL9bAFJnGOQhuJCnYhBA-OARRQb6deSzroPC8rZPCONTWU3SmzpYhxCh_fmBh_iGEceyZCfpnp26SJgwjCFWris42Mmwen8JhKJvFcbt3zLjl8gCxSf2M6FQ5b49J1jakOLLXSe1wrT33jXsDPb8If01emqu-vmiMuibLKY4kwiaj-pfRLUOCl4GeEK7XNMdcJFQTFNyoUCHQlSzIxmaIBRmQ8OezA7-cRGSB1ICIh_n04AAS" alt="Neoclassical government building" />
          </div>
          <div className="relative z-10 max-w-container-max mx-auto px-margin-desktop w-full">
            <div className="max-w-2xl text-on-primary">
              <h1 className="font-display-lg text-display-lg mb-6 leading-tight">Because Of Our Tomorrow.</h1>
              <p className="font-body-lg text-body-lg mb-10 opacity-90 border-l-4 border-secondary pl-6">
                Building a legacy of stability and forward-looking growth for every citizen. Join the movement for a principled future.
              </p>
               <div className="flex gap-4">
                 <Link href="/" className="bg-secondary px-8 py-4 font-label-lg text-label-lg text-on-secondary hover:translate-y-[-2px] transition-transform duration-300 active:scale-95">Enter Movement Portal</Link>
                 <Link href="/thesis" className="border-2 border-white px-8 py-4 font-label-lg text-label-lg text-white hover:bg-white/10 transition-colors active:scale-95">Read Our Thesis</Link>
               </div>
            </div>
          </div>
        </section>

        {/* Foundation of Progress */}
        <section className="py-24 bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-margin-desktop">
            <div className="flex flex-col md:flex-row gap-12 items-end mb-16">
              <div className="md:w-2/3">
                <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Foundation of Progress</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">Our philosophy bridges the wisdom of our heritage with the innovations of tomorrow. We believe in building on solid ground.</p>
              </div>
              <div className="md:w-1/3 flex justify-end">
                <div className="w-24 h-1 bg-secondary"></div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              {/* Card: Traditional Values */}
              <div className="group relative bg-surface p-12 border border-outline-variant/30 hover:border-secondary/50 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="material-symbols-outlined text-[120px]" data-icon="account_balance">account_balance</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-6">Traditional Values</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8">Upholding the institutional integrity that has sustained our society for generations. We protect the core principles of accountability and respect.</p>
<Link className="inline-flex items-center text-secondary font-label-lg text-label-lg group-hover:gap-4 transition-all" href="/party/about">
                            LEARN MORE <span className="material-symbols-outlined ml-2">arrow_forward</span>
                        </Link>
              </div>
              {/* Card: Future Progress */}
              <div className="group relative bg-primary-container p-12 text-on-primary transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="material-symbols-outlined text-[120px] text-on-primary-container" data-icon="rocket_launch">rocket_launch</span>
                </div>
                <h3 className="font-headline-md text-headline-md mb-6">Future Progress</h3>
                <p className="font-body-md text-body-md text-on-primary-container mb-8">Investing in the technologies and policies that will define the next century. Our vision is forward-facing, bold, and meticulously planned.</p>
<Link className="inline-flex items-center text-on-primary font-label-lg text-label-lg group-hover:gap-4 transition-all" href="/party/thesis">
                            EXPLORE VISION <span className="material-symbols-outlined ml-2">arrow_forward</span>
                        </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 border-y border-outline-variant/30 bg-surface">
          <div className="max-w-container-max mx-auto px-margin-desktop">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              <div className="relative pb-8 text-center">
                <div className="font-display-lg text-display-lg text-primary mb-2">150k+</div>
                <div className="font-label-lg text-label-lg text-on-surface-variant uppercase tracking-widest">Signed Members</div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-0.5 bg-secondary"></div>
              </div>
              <div className="relative pb-8 text-center">
                <div className="font-display-lg text-display-lg text-primary mb-2">$2.4M</div>
                <div className="font-label-lg text-label-lg text-on-surface-variant uppercase tracking-widest">Community Funded</div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-0.5 bg-secondary"></div>
              </div>
              <div className="relative pb-8 text-center">
                <div className="font-display-lg text-display-lg text-primary mb-2">22</div>
                <div className="font-label-lg text-label-lg text-on-surface-variant uppercase tracking-widest">Policy Wins</div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-0.5 bg-secondary"></div>
              </div>
              <div className="relative pb-8 text-center">
                <div className="font-display-lg text-display-lg text-primary mb-2">48</div>
                <div className="font-label-lg text-label-lg text-on-surface-variant uppercase tracking-widest">Endorsed Leaders</div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-0.5 bg-secondary"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Foundational Pillars */}
        <section className="py-24 bg-surface-container">
          <div className="max-w-container-max mx-auto px-margin-desktop">
            <div className="text-center mb-16">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Our Foundational Pillars</h2>
              <div className="w-20 h-1 bg-secondary mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-8 bg-surface border border-outline-variant/20 hover:shadow-xl transition-all duration-300">
                <span className="material-symbols-outlined text-secondary text-4xl mb-6" data-icon="gavel">gavel</span>
                <h4 className="font-headline-sm text-headline-sm text-primary mb-3">Institutional Accountability</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Ensuring transparent governance through digital audits and civic oversight.</p>
              </div>
              <div className="p-8 bg-surface border border-outline-variant/20 hover:shadow-xl transition-all duration-300">
                <span className="material-symbols-outlined text-secondary text-4xl mb-6" data-icon="location_city">location_city</span>
                <h4 className="font-headline-sm text-headline-sm text-primary mb-3">Localized Empowerment</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Returning decision-making power to community councils and local districts.</p>
              </div>
              <div className="p-8 bg-surface border border-outline-variant/20 hover:shadow-xl transition-all duration-300">
                <span className="material-symbols-outlined text-secondary text-4xl mb-6" data-icon="museum">museum</span>
                <h4 className="font-headline-sm text-headline-sm text-primary mb-3">Heritage Conservation</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Preserving our cultural landmarks and historic values for the next generation.</p>
              </div>
              <div className="p-8 bg-surface border border-outline-variant/20 hover:shadow-xl transition-all duration-300">
                <span className="material-symbols-outlined text-secondary text-4xl mb-6" data-icon="trending_up">trending_up</span>
                <h4 className="font-headline-sm text-headline-sm text-primary mb-3">Pragmatic Economics</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Evidence-based fiscal policy that prioritizes sustainable growth and equity.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Initiatives */}
        <section className="py-24 bg-surface">
          <div className="max-w-container-max mx-auto px-margin-desktop">
            <div className="flex justify-between items-end mb-12">
              <h2 className="font-headline-lg text-headline-lg text-primary">Latest Initiatives</h2>
              <a className="font-label-lg text-label-lg text-secondary underline" href="/newsroom">View All News</a>
            </div>
            <div className="grid grid-cols-12 gap-gutter">
              <div className="col-span-12 lg:col-span-8 group relative overflow-hidden h-[400px]">
                <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuChVQujRFQ_VYUkIT4rS5GAQ4YZA-iQcJNHTzThF-FCmy1eWXV3Kb6ZCfdpF0eqBIhACZ7QP7BwP046wKFHXTxICzsJILyLyDyFp9EDJ4ko65QVvJH-G8OIXOzjrc9dvwwPMs5Va4H5FhZeBvtoFrmELREMyfzoZU0Ee7mA9BzA1IP1ZuxnfwnE2sz-Ld_-iQoWZemm89zFMzidCWGIeV_xHUKqxZJdSrSFJIChjWBLsGYBC4VGSuMYrtkCysHvtJJIZ_aUKdDoDfRG" alt="Solar farm" />
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
                 <Link href="/events" className="w-full text-center border-2 border-primary text-primary font-label-lg text-label-lg py-3 hover:bg-primary hover:text-white transition-all active:scale-95">Register to Attend</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-24 bg-primary-container text-on-primary">
          <div className="max-w-container-max mx-auto px-margin-desktop text-center">
            <h2 className="font-headline-lg text-headline-lg mb-6">Stay Informed</h2>
            <p className="font-body-lg text-body-lg text-on-primary-container max-w-2xl mx-auto mb-10">Receive weekly policy briefings, community reports, and movement updates directly from the BOOT Civic Secretariat.</p>
            <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
              <input className="flex-grow bg-white/10 border border-white/20 text-white placeholder:text-white/50 px-6 py-4 focus:ring-2 focus:ring-secondary outline-none" placeholder="Your professional email" type="email" />
              <button className="bg-secondary text-white px-10 py-4 font-label-lg text-label-lg hover:bg-on-secondary-fixed-variant transition-colors whitespace-nowrap">Subscribe Now</button>
            </form>
            <p className="mt-6 font-label-md text-label-md text-on-primary-container opacity-60">We value your privacy. Unsubscribe at any time.</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-16 bg-surface-container-highest border-t border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter">
          <div className="md:col-span-1">
            <img alt="BOOT Logo" className="h-10 mb-6 grayscale hover:grayscale-0 transition-all cursor-pointer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzphfpJ0ilRJ4OKndPGRQoy2L3bEoSDLwjRjVjLEVHTF3U6i4tngba5qDB29rf_5jWSDfNv8IKj12oBWjzAW5Xj_oSzJG4hQ0zU24ry4nvRh7MSG52KrZ_uJ5gbIFF05KZ5xxQj4_bRHa-jVdrMCMrsUKbri10D55qp_ND8NWDWAS5MAIcWH98IwhXdPJ9DDiyK9xAoihWafz8bL4zzJVYRGei40wZAlldVNV_5O0q3T2oU-NdU3GSDpJcJbz7zHc_jX_SxNOAXY3j" />
            <p className="font-body-sm text-body-sm text-on-surface-variant">The BOOT Civic Operating System is a platform for the next generation of principled governance.</p>
          </div>
          <div>
            <h5 className="font-label-lg text-label-lg text-primary mb-6">Governance</h5>
            <ul className="space-y-4">
<li><a className="text-on-surface-variant hover:text-primary underline transition-all font-body-sm text-body-sm" href="/newsroom">Transparency Report</a></li>
<li><a className="text-on-surface-variant hover:text-primary underline transition-all font-body-sm text-body-sm" href="/thesis">Policy Thesis</a></li>
<li><a className="text-on-surface-variant hover:text-primary underline transition-all font-body-sm text-body-sm" href="/about">Legal Framework</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-label-lg text-label-lg text-primary mb-6">Support</h5>
            <ul className="space-y-4">
<li><a className="text-on-surface-variant hover:text-primary underline transition-all font-body-sm text-body-sm" href="/about">Privacy Policy</a></li>
<li><a className="text-on-surface-variant hover:text-primary underline transition-all font-body-sm text-body-sm" href="/about">Terms of Service</a></li>
<li><a className="text-on-surface-variant hover:text-primary underline transition-all font-body-sm text-body-sm" href="/contact">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-label-lg text-label-lg text-primary mb-6">Connect</h5>
            <div className="flex gap-4">
<a className="text-on-surface-variant hover:text-secondary" href="/contact"><span className="material-symbols-outlined">public</span></a>
<a className="text-on-surface-variant hover:text-secondary" href="/contact"><span className="material-symbols-outlined">forum</span></a>
<a className="text-on-surface-variant hover:text-secondary" href="/contact"><span className="material-symbols-outlined">mail</span></a>
            </div>
          </div>
        </div>
        <div className="max-w-container-max mx-auto px-margin-desktop mt-16 pt-8 border-t border-outline-variant/30 text-center">
          <p className="font-label-md text-label-md text-on-surface-variant">© 2024 BOOT Civic Operating System. All Rights Reserved. Authorized by the National Civic Committee.</p>
        </div>
    </main>
  );
}
