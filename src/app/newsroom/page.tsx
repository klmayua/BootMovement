import React from 'react';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';

export default function NewsroomPage() {
  return (
    <PublicLayout>
      <div className="flex flex-col min-h-screen">
        <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12">
          {/* Hero Section: Featured News */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
              <div className="lg:col-span-8">
                <div className="group cursor-pointer">
                  <div className="aspect-[16/9] overflow-hidden mb-6 rounded-lg relative">
                    <img 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      alt="A professional architectural photograph of a modern, sustainable civic center building"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPhdKfr7y1uUpWXvJxnBuZewG4ZwKoFs0NpD1Ez5uAivw-tmyJXpD3N3moTJtnElh_vtbBXb5xwEPx53fVh18pxmjGSnOjOdNQtmcK9PNePM8WyNHLhrsApWBiXcJlu1wMUGQjxFFP_YEDDb0jALlFCW3DlU7fOwaMHZZnZCGeNqqt-SDNL4Hc2xdC-8m9luhypM4CREYBAMT4kJZTrP58hkc9TcCkS5CkNl8YSg9-j8Ciuh7YqUdtlkiAnJzGn"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-secondary text-on-secondary px-4 py-1 font-label-lg text-label-lg">FEATURED ANNOUNCEMENT</span>
                    </div>
                  </div>
                  <h1 className="font-display-lg text-display-lg text-primary mb-4 leading-tight group-hover:text-secondary transition-colors">
                    The BOOT Civic OS expands to 50 new metropolitan hubs.
                  </h1>
                  <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 max-w-2xl">
                    A historic milestone for digital governance. Our latest expansion brings decentralized infrastructure and community-led decision-making tools to millions of new citizens across the nation.
                  </p>
                  <div className="flex items-center gap-4 border-t border-outline-variant/30 pt-6">
                    <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center">
                      <span className="material-symbols-outlined text-on-primary">verified_user</span>
                    </div>
                    <div>
                      <p className="font-label-lg text-label-lg text-primary">Office of Civic Strategy</p>
                      <p className="font-label-md text-label-md text-on-surface-variant">March 24, 2024 • 8 min read</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Sidebar News */}
              <div className="lg:col-span-4 space-y-8">
                <h2 className="font-headline-sm text-headline-sm text-primary border-b border-outline-variant/30 pb-2 uppercase tracking-widest">Latest Updates</h2>
                <div className="space-y-6">
                  <article className="group cursor-pointer">
                    <p className="text-secondary font-label-md text-label-md mb-1">PRESS RELEASE</p>
                    <h3 className="font-headline-sm text-headline-sm leading-snug group-hover:underline underline-offset-4">New security protocols for Community Wallets launched</h3>
                    <p className="font-label-md text-label-md text-on-surface-variant mt-2">2 hours ago</p>
                  </article>
                  <article className="group cursor-pointer">
                    <p className="text-secondary font-label-md text-label-md mb-1">MEDIA MENTION</p>
                    <h3 className="font-headline-sm text-headline-sm leading-snug group-hover:underline underline-offset-4">Civic Times: "How BOOT is redefining local participation."</h3>
                    <p className="font-label-md text-label-md text-on-surface-variant mt-2">5 hours ago</p>
                  </article>
                  <article className="group cursor-pointer">
                    <p className="text-secondary font-label-md text-label-md mb-1">OFFICIAL</p>
                    <h3 className="font-headline-sm text-headline-sm leading-snug group-hover:underline underline-offset-4">Quarterly Transparency Report: Q1 2024</h3>
                    <p className="font-label-md text-label-md text-on-surface-variant mt-2">Yesterday</p>
                  </article>
                </div>
                <div className="bg-primary-container p-8 rounded-lg text-on-primary">
                  <h4 className="font-headline-sm text-headline-sm mb-4">Media Relations</h4>
                  <p className="font-body-sm text-body-sm mb-6 opacity-90">Are you a journalist? Access our brand kit, high-res assets, and contact our press office.</p>
                  <button className="w-full bg-secondary text-on-secondary font-label-lg text-label-lg py-3 hover:opacity-90 transition-opacity">
                    DOWNLOAD MEDIA KIT
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Bento Grid: Secondary Stories */}
          <section className="mb-24">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-12 text-center">In-Depth Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Story Card 1 */}
              <div className="md:col-span-2 relative h-[400px] group overflow-hidden rounded-lg">
                <img 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                  alt="A cinematic, low-angle shot of a diverse group of people"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEoLglBJzp4qga8bje_PpCYoAhMmiiTauY7eMFDLO71ZP9VJ2bxAqyEkRNBGzc_spoAj0_Wu21SpwJBXjqxkRg_Wm86D82pvJsTs5v9MoOO5D5IQpUTf505TEKjRRFi-0yxe-ci4ShwWDBv4dYpJ1eRjaZtj2lP0HWiworVfbg7P33DUQNbHgSDIwYrI1P08RJGMYDFvIzbxQ1SPF7I7ybgOypwhH90qVzLP9vwhOQOsv7V5SdMwRoS0hxjvzT2xpdiOAfcEK7yZ5U"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent"></div>
                <div className="absolute bottom-0 p-8">
                  <span className="bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 font-label-md text-label-md mb-4 inline-block">POLICY</span>
                  <h3 className="font-headline-md text-headline-md text-white mb-2">Sustainable Development: Reimagining Urban Spaces</h3>
                  <p className="text-white/80 font-body-md text-body-md">How decentralized tools are empowering local neighborhoods to go green.</p>
                </div>
              </div>
              {/* Story Card 2 */}
              <div className="bg-surface-container p-8 flex flex-col justify-between border border-outline-variant/30 group hover:border-secondary transition-colors cursor-pointer rounded-lg">
                <div>
                  <span className="text-secondary material-symbols-outlined text-4xl mb-4">trending_up</span>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Impact Report 2024</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Measuring the shift in civic engagement across our top 10 communities.</p>
                </div>
                <a className="font-label-lg text-label-lg text-secondary flex items-center gap-2 mt-8" href="#">
                  READ REPORT <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
              {/* Story Card 3 */}
              <div className="bg-surface-container p-8 flex flex-col border border-outline-variant/30 group hover:border-secondary transition-colors cursor-pointer rounded-lg">
                <div className="aspect-square mb-6 overflow-hidden">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    alt="Close-up of high-quality digital interfaces"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-ZhaQ6BjwgFApYJl-Cx1R2E_fJSLI9ZWLp4bh8wyWfANtgZpCE6OT_V_FoApviuKwyBsD63J8Nq-eFiiw7_xoPwQLuIvCFp8E7ItRaN5hGJYRvKn_VzxHLInZ9b_OrRhVcw2jGsyUGCxPSkyWjMgs_8Ddt6cAUbjVM2jw4FPqJJIv3RZSM41RI8_wMibc8T8cgvRpdyDB4nAciKT9I8GimyFEuKa55IHXdMB2imq9RWuTpDBjwDidk1tWvkQi6J31BqKbke-I6BfC"
                  />
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Tech Stack v4.0</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">An open-source look at our latest infrastructure upgrades.</p>
              </div>
              {/* Story Card 4 */}
              <div className="md:col-span-2 border border-outline-variant/30 p-10 flex gap-8 items-center rounded-lg hover:bg-surface-container-low transition-colors group cursor-pointer">
                <div className="flex-1">
                  <span className="text-on-surface-variant font-label-md text-label-md uppercase mb-2 block">Interview</span>
                  <h3 className="font-headline-md text-headline-md text-primary mb-4">"The future is distributed." — A talk with the Visionary Board.</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">Lead designer Elara Vance discusses the balance between traditional governance and modern software.</p>
                </div>
                <div className="w-32 h-32 bg-primary-fixed rounded-full overflow-hidden flex-shrink-0 grayscale group-hover:grayscale-0 transition-all">
                  <img 
                    className="w-full h-full object-cover" 
                    alt="Professional headshot of a focused woman"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLggc37Tc48UlGUVFzDU fabricated-portrait-image"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Newsletter Subscription */}
          <section className="bg-surface-container-highest py-20 px-12 text-center rounded-xl mb-24 border border-outline-variant/20">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Direct to your inbox.</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl mx-auto">Get official announcements, policy briefs, and community highlights delivered weekly.</p>
            <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <input className="flex-1 px-6 py-4 bg-surface border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="email@organization.org" type="email"/>
              <button className="bg-primary text-on-primary px-8 py-4 font-label-lg text-label-lg hover:bg-primary-container transition-colors">
                SUBSCRIBE
              </button>
            </form>
            <p className="mt-4 font-label-md text-label-md text-on-surface-variant opacity-70">No spam. Only the essentials. Unsubscribe anytime.</p>
          </section>
        </main>
      </div>
    </PublicLayout>
  );
}