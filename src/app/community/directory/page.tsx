import React from 'react';
import Link from 'next/link';

export default function CommunityDirectory() {
  return (
    <div className="bg-surface text-on-surface font-body-md overflow-x-hidden">
      {/* SideNavBar */}
      <nav className="fixed left-0 top-0 h-screen w-64 bg-surface-container-low dark:bg-on-background border-r border-outline-variant/30 dark:border-outline/20 flex flex-col py-8 px-4 z-50">
        <div className="mb-12 px-4">
          <h1 className="font-headline-sm text-headline-sm text-primary dark:text-primary-fixed-dim font-bold">BOOT OS</h1>
          <p className="font-label-md text-label-md text-on-surface-variant opacity-70">Civic Dashboard</p>
        </div>
        <div className="flex-grow space-y-2">
          <Link className="flex items-center gap-4 py-3 px-4 text-on-surface-variant hover:bg-surface-container dark:hover:bg-primary-container/10 transition-all rounded-lg group" href="/citizen/dashboard">
            <span className="material-symbols-outlined group-hover:translate-x-1 duration-300">dashboard</span>
            <span className="font-label-lg text-label-lg">Dashboard</span>
          </Link>
          <Link className="flex items-center gap-4 py-3 px-4 text-primary dark:text-primary-fixed-dim font-bold bg-primary-fixed/20 dark:bg-primary-container/30 rounded-lg group" href="/communities">
            <span className="material-symbols-outlined group-hover:translate-x-1 duration-300">groups</span>
            <span className="font-label-lg text-label-lg">Communities</span>
          </Link>
          <Link className="flex items-center gap-4 py-3 px-4 text-on-surface-variant hover:bg-surface-container dark:hover:bg-primary-container/10 transition-all rounded-lg group" href="/events">
            <span className="material-symbols-outlined group-hover:translate-x-1 duration-300">event</span>
            <span className="font-label-lg text-label-lg">Events</span>
          </Link>
          <Link className="flex items-center gap-4 py-3 px-4 text-on-surface-variant hover:bg-surface-container dark:hover:bg-primary-container/10 transition-all rounded-lg group" href="/projects">
            <span className="material-symbols-outlined group-hover:translate-x-1 duration-300">assignment</span>
            <span className="font-label-lg text-label-lg">Projects</span>
          </Link>
          <Link className="flex items-center gap-4 py-3 px-4 text-on-surface-variant hover:bg-surface-container dark:hover:bg-primary-container/10 transition-all rounded-lg group" href="#">
            <span className="material-symbols-outlined group-hover:translate-x-1 duration-300">monitoring</span>
            <span className="font-label-lg text-label-lg">Analytics</span>
          </Link>
          <Link className="flex items-center gap-4 py-3 px-4 text-on-surface-variant hover:bg-surface-container dark:hover:bg-primary-container/10 transition-all rounded-lg group" href="#">
            <span className="material-symbols-outlined group-hover:translate-x-1 duration-300">settings</span>
            <span className="font-label-lg text-label-lg">Settings</span>
          </Link>
        </div>
        <div className="mt-auto pt-8 border-t border-outline-variant/20 space-y-2">
          <button className="w-full bg-secondary text-on-secondary py-3 px-4 rounded-lg font-label-lg text-label-lg hover:opacity-90 transition-opacity mb-6">
            Donate Now
          </button>
          <Link className="flex items-center gap-4 py-2 px-4 text-on-surface-variant hover:bg-surface-container transition-all" href="#">
            <span className="material-symbols-outlined">help</span>
            <span className="font-label-lg text-label-lg">Support</span>
          </Link>
          <Link className="flex items-center gap-4 py-2 px-4 text-on-surface-variant hover:bg-surface-container transition-all" href="#">
            <span className="material-symbols-outlined">logout</span>
            <span className="font-label-lg text-label-lg">Logout</span>
          </Link>
        </div>
      </nav>

      {/* Main Canvas */}
      <main className="ml-64 min-h-screen relative">
        {/* TopAppBar */}
        <header className="w-full sticky top-0 z-40 bg-surface dark:bg-on-background border-b border-outline-variant/30 dark:border-outline/20 flex justify-between items-center px-margin-desktop py-4">
          <div className="flex items-center gap-6">
            <span className="font-headline-sm text-headline-sm font-bold text-primary dark:text-primary-fixed-dim">Community Directory</span>
          </div>
          <div className="flex items-center gap-8">
            <div className="hidden lg:flex items-center gap-6">
              <Link className="text-on-surface-variant dark:text-surface-variant font-label-lg hover:text-primary transition-colors" href="#">Overview</Link>
              <Link className="text-primary dark:text-primary-fixed-dim font-bold border-b-2 border-primary py-1" href="/community/directory">Directory</Link>
              <Link className="text-on-surface-variant dark:text-surface-variant font-label-lg hover:text-primary transition-colors" href="#">Resources</Link>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-surface-container-low rounded-full transition-colors material-symbols-outlined text-primary">notifications</button>
              <div className="flex items-center gap-2 cursor-pointer group">
                <div className="w-10 h-10 rounded-full bg-primary-container overflow-hidden border border-outline-variant">
                  <img alt="User profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9FmTRb8fHoX8BKBa4L-pEHsAo0vrIH7DDybroRm3JxJoAWoQhtCKv-jiYs-4bEJf-awhIxJYtMhZwuAi4MP3KgdWOxSbyvxDKeL-p8u7_mSwGwjqwskxbkgzl9MqiHkRdzIBNfLJhWv2WO3m1WcI" />
                </div>
                <span className="material-symbols-outlined text-primary group-hover:rotate-180 transition-transform">account_circle</span>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative h-[400px] flex items-center px-margin-desktop overflow-hidden bg-primary-container text-on-primary-container">
          <div className="relative z-10 max-w-2xl">
            <span className="inline-block px-3 py-1 bg-secondary text-on-secondary font-label-md text-label-md mb-6 uppercase tracking-widest">National Reach</span>
            <h2 className="font-display-lg text-display-lg leading-tight mb-4">Empowering the <span className="text-tertiary-fixed-dim">Civic Voice</span> through Local Action.</h2>
            <p className="font-body-lg text-body-lg opacity-90 max-w-xl">Explore our nationwide network of chapters and collectives. Find your people, organize your movement, and build the future of our democracy from the ground up.</p>
          </div>
        </section>

        {/* Filters & Search Bento Area */}
        <section className="px-margin-desktop -mt-16 relative z-20 mb-20">
          <div className="grid grid-cols-12 gap-6">
            {/* Search Box */}
            <div className="col-span-12 lg:col-span-8 bg-white/80 backdrop-blur border border-outline-variant/30 p-8 flex flex-col justify-center">
              <label className="font-label-lg text-label-lg text-primary mb-2 block">Search Collectives</label>
              <div className="relative">
                <input className="w-full h-16 pl-14 pr-6 bg-surface-container-lowest border border-outline-variant/50 focus:border-primary focus:ring-1 focus:ring-primary rounded-lg transition-all text-body-lg font-body-md outline-none" placeholder="Search by city, chapter name, or policy focus..." type="text" />
                <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-primary text-3xl">search</span>
              </div>
            </div>
            {/* Quick Action Bento Item */}
            <div className="col-span-12 lg:col-span-4 bg-primary text-on-primary p-8 rounded-lg flex flex-col justify-between hover:scale-[1.02] transition-transform cursor-pointer">
              <div>
                <h3 className="font-headline-sm text-headline-sm mb-2">Can't find a local chapter?</h3>
                <p className="font-body-sm text-body-sm opacity-80">Download the BOOT OS starter kit to establish a new collective in your community today.</p>
              </div>
              <button className="flex items-center gap-2 font-label-lg text-label-lg text-on-primary-fixed hover:gap-4 transition-all mt-4">
                START A CHAPTER <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
            {/* Filters Sidebar/Row */}
            <div className="col-span-12 flex flex-wrap gap-4 items-center py-4 overflow-x-auto whitespace-nowrap">
              <span className="font-label-lg text-label-lg text-on-surface-variant flex items-center gap-2 mr-4">
                <span className="material-symbols-outlined">filter_list</span> FILTER BY:
              </span>
              <button className="px-6 py-2 bg-primary text-on-primary rounded-full font-label-md text-label-md">All Communities</button>
              <button className="px-6 py-2 bg-surface-container border border-outline-variant rounded-full font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors">Urban Chapters</button>
              <button className="px-6 py-2 bg-surface-container border border-outline-variant rounded-full font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors">Rural Councils</button>
              <button className="px-6 py-2 bg-surface-container border border-outline-variant rounded-full font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors">Economic Policy</button>
              <button className="px-6 py-2 bg-surface-container border border-outline-variant rounded-full font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors">Environmental Action</button>
              <button className="px-6 py-2 bg-surface-container border border-outline-variant rounded-full font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors">Justice Collective</button>
            </div>
          </div>
        </section>

        {/* Main Directory Grid */}
        <section className="px-margin-desktop mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Community Card 1 */}
            <article className="group relative bg-surface-container-lowest border border-outline-variant/30 hover:border-primary/50 transition-all duration-300">
              <div className="h-48 overflow-hidden relative">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Urban connectivity and strength" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJAG5JwqCtyBmwdJB6Xyq9l8eOrE5Ni5zzQ4oN6pZApPO-iP5_V6nmydJZ8mIxeTj8gh8QNrJffPU7qrrkuR3ayn4SXwlGp-XSHEUjlrlggaHxpBcaeBO9Jgo-BDKUkBOQkaPOasOF6tn5vyjvoIiuHxvdq3G6Nv0XdoGH1gVwRylsAxgkUK_3XF4M9YGxW8YR-mROqgNy_mDUVtqnQicKMeNUlJqRTfMj4KIFBD9RcADzhLwmeIgprAXRU-0QQoP77eNcBpKRnbk_" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
                  <span className="bg-secondary px-3 py-1 font-label-md text-label-md text-on-secondary">METRO CHAPTER</span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-headline-sm text-headline-sm text-primary">San Francisco Civic</h3>
                  <div className="flex items-center gap-1 text-on-tertiary-container">
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="font-label-md">Tier 1</span>
                  </div>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 leading-relaxed">Focusing on high-density housing solutions and public transit reform in the Bay Area. Active since 2019.</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="px-2 py-1 bg-surface-container-high rounded text-primary font-label-md">#Urbanism</span>
                  <span className="px-2 py-1 bg-surface-container-high rounded text-primary font-label-md">#Housing</span>
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-outline-variant/20">
                  <div className="flex -space-x-2">
                    <img alt="Member" className="w-8 h-8 rounded-full border-2 border-surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgo3UTtlYecjwYuz3yJLCKAONaJbea_JhfqDWoKLiQF77S0mX6JzJfmVgrm5TCHqn2J4m4YgyiX29eJqHHu_ly38SNY1uN9nc5mD2g-WTZFATRx6oVG2MtO7mpDTS6PQ3ybSU6R993Z1ZaEsAJkauKPlaL3td_OoY4N06ZFD-wBWrQjWc0Y-CGEUQzH" />
                    <img alt="Member" className="w-8 h-8 rounded-full border-2 border-surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNo24MxICqsAVJ3ieCa_u_s2cfVXxK9fin3eWbVKOP83N9tbTuOCNoJyhlr9mT3jXVLD6BxHLz808NqBPBcvJcPgZB5_BwUmVPtvAgx9lhcxPX_b1vRnPDgcSu8QohNB6ao_zw059yvIAqYdL-gBCMWdmWENLBWIJH2_a9Z5_SjdzTKLZaMwnVyyBka8tzfhLbJB8badNU9Oa9AWRvfBZwyXbUaYcn8xfbsrK0y4QI_kA0Moy0BsgiONyryoz2wo0LElKZWcqXHO_d" />
                    <img alt="Member" className="w-8 h-8 rounded-full border-2 border-surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKs_3vEg63pHk1VILrojDMcvoif7ceN9u4anJTG9nWk3vEnhmX0OCM3Kj8IyoQda8v_s32m9uADpl9o4eJfloqGZzuiMDbFyNAG_YCPA4tOtC_hMFjGw7AIquvmrtADNy-Svu2mi34LrMnp9FLk8R0rVH4Bu87hWMqEFvWayiG3eLN4NxIcFUJE9wkPNUv8euuyP2jIp0qIwblOY6AuhU_Q0npETAmsrqR1qC1-5UNnBZmjkmFpvGzPBx6zZ2hSdsgdKAjbQtZC1vG" />
                    <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center text-[10px] font-bold">+1.2k</div>
                  </div>
                  <button className="font-label-lg text-label-lg text-primary flex items-center gap-2 group/btn">
                    VIEW CHAPTER <span className="material-symbols-outlined group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                  </button>
                </div>
              </div>
            </article>
            {/* Community Card 2 */}
            <article className="group relative bg-surface-container-lowest border border-outline-variant/30 hover:border-primary/50 transition-all duration-300">
              <div className="h-48 overflow-hidden relative">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Vast open landscape" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDocfCyUNdH-LTwL1DyxbXTe7kwpSe180K8aaGlq-pkFd6aan8FyahKh3scpzZGYitN7iUO-RFWf42xxE-vxvZFalDhLSl4kXCnOr5ndpc4b6rrF7W__xjfhyiP339msK1x1xzij3vcGalvhtIi31wFfGq0DuP1qVyLYtNY44dGMwucupbGatKenaNbicZQC-fE2LmcXfCkTookzRvuDqIHH5PfkQCLb3knlC7UkgVGQscP07jCcso-pyIUsQoGWTRqgsKxW5zEw-IJ" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
                  <span className="bg-secondary px-3 py-1 font-label-md text-label-md text-on-secondary">RURAL COUNCIL</span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-headline-sm text-headline-sm text-primary">High Plains Collective</h3>
                  <div className="flex items-center gap-1 text-on-tertiary-container">
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="font-label-md">Tier 1</span>
                  </div>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 leading-relaxed">Dedicated to sustainable agriculture policy and rural broadband infrastructure expansion across the plains.</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="px-2 py-1 bg-surface-container-high rounded text-primary font-label-md">#Agriculture</span>
                  <span className="px-2 py-1 bg-surface-container-high rounded text-primary font-label-md">#Infra</span>
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-outline-variant/20">
                  <div className="flex -space-x-2">
                    <img alt="Member" className="w-8 h-8 rounded-full border-2 border-surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTsbugwl8xdlNNxzXHVo0CxZanxj_05LKNfZ5hEMNJxhxjY7mWogLLwU2lNYffutmrL-04xz9u4h7cO77_9o7iMVCw2ue2yG-OELotp84_4tyrsO_UVKh_C0W_GIHUMBRSTcSaE8k2Dl7Xg-Eggg7K7z_fow8HGKFQvpPYWz-b-HtxXNwET5LLmGu1aAxPlb3Zch3OjJcD2y1huBJKA0q4HHT8MECm6xyd0miGoLh5YNVxOdgn1-2yeIgv-NPvR6J54HunwzKsRwZN" />
                    <img alt="Member" className="w-8 h-8 rounded-full border-2 border-surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBu10JI3VIer5S00pTB7uZc0Og_qwV9oTX06UCyDUtW_LsWoS6mC287Pc0jE3G6tQB7S3tYMU2NjjqdZjd7Ewy2VN3kb_1lnpxPXpNJaUKzTqAcGLE8PV6Z5opfpKxvIySqcJrfZjmXflOBGEZZnzKT9zridnamymTUmM8_iskgn8qJeAhZd0MFbSuS_aRAFGLncMUZLPK3Kb2LC1e0Qu86WPjCiOkc0nvcCUxOsPAzffdeJwD36kem-sjSeMC0ewPpkftLENXFSF73" />
                    <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center text-[10px] font-bold">+400</div>
                  </div>
                  <button className="font-label-lg text-label-lg text-primary flex items-center gap-2 group/btn">
                    VIEW CHAPTER <span className="material-symbols-outlined group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                  </button>
                </div>
              </div>
            </article>
            {/* Community Card 3 */}
            <article className="group relative bg-surface-container-lowest border border-outline-variant/30 hover:border-primary/50 transition-all duration-300">
              <div className="h-48 overflow-hidden relative">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Modern university building" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5gJ-RIzHFzaKwsQyBZkrAXeQ4tWHJJjth_gtO6oHRFHghHEheSnuJEVjmOxGcfTAZevntVvZOSIY6GghUpGj2_ZwBA_qWJTntlLMFpPigVQsCX0cVCHy6j7bga_3VqGsRzS_kx1jHw4lJTb7ZB7rLtA4nkO1P0P1bHINkQZhvs0M8QaOiRWnBj-a1orO6SqdCdYue7fwqEjDTOvHPeOpSYL9EGzhd3KTeKG-vuT7Z924XCwmYFIVmAxJTGlYfPzIJBabza5MhU2hE" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
                  <span className="bg-secondary px-3 py-1 font-label-md text-label-md text-on-secondary">STUDENT ALLIANCE</span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-headline-sm text-headline-sm text-primary">Columbia Policy Lab</h3>
                  <div className="flex items-center gap-1 text-on-tertiary-container">
                    <span className="material-symbols-outlined text-sm">star</span>
                    <span className="font-label-md">Tier 2</span>
                  </div>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 leading-relaxed">Student-led research initiative developing actionable policy frameworks for national economic stability.</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="px-2 py-1 bg-surface-container-high rounded text-primary font-label-md">#Economics</span>
                  <span className="px-2 py-1 bg-surface-container-high rounded text-primary font-label-md">#Policy</span>
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-outline-variant/20">
                  <div className="flex -space-x-2">
                    <img alt="Member" className="w-8 h-8 rounded-full border-2 border-surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTT2FAQxBdsTbJW-xMniWq9iO0lnWAW3BbJ6UYUPfe77Dq4K3NlKajkOGWMyJOuitYKZKL331ht7bBWkO2isyIyaAMcmrLVUZJWXYON8GbbQrQ1gFOB_kNkiIZwRkw3EKWF3dypEmlm4mKW-CcHFQHeA3S_rsvPzPLeUIDQxQH3PTO28dcPdaXhTW4RWn8ioibZSvIbaUasTAn7wMOnEECT-tbxgvHtQoB7qSL0H7y6TSLGSWNmhnRJRq0oNUms6RDswl8IZ4zlxk3" />
                    <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center text-[10px] font-bold">+80</div>
                  </div>
                  <button className="font-label-lg text-label-lg text-primary flex items-center gap-2 group/btn">
                    VIEW CHAPTER <span className="material-symbols-outlined group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                  </button>
                </div>
              </div>
            </article>
          </div>
          {/* Pagination or Load More */}
          <div className="mt-16 flex flex-col items-center">
            <p className="font-label-md text-label-md text-on-surface-variant mb-4">Showing 3 of 412 Communities Nationally</p>
            <button className="px-12 py-4 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-on-primary transition-all duration-300">
              LOAD MORE CHAPTERS
            </button>
          </div>
        </section>

        {/* Nationwide Stats Section */}
        <section className="bg-surface-container py-24 px-margin-desktop mb-24">
          <div className="max-w-container-max mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
              <div>
                <p className="font-display-lg text-display-lg text-primary mb-2">412</p>
                <p className="font-label-lg text-label-lg uppercase tracking-widest text-on-surface-variant">Active Chapters</p>
              </div>
              <div>
                <p className="font-display-lg text-display-lg text-secondary mb-2">82k</p>
                <p className="font-label-lg text-label-lg uppercase tracking-widest text-on-surface-variant">Vested Members</p>
              </div>
              <div>
                <p className="font-display-lg text-display-lg text-primary mb-2">14</p>
                <p className="font-label-lg text-label-lg uppercase tracking-widest text-on-surface-variant">Policy Labs</p>
              </div>
              <div>
                <p className="font-display-lg text-display-lg text-tertiary mb-2">50</p>
                <p className="font-label-lg text-label-lg uppercase tracking-widest text-on-surface-variant">States Represented</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full py-16 bg-surface-container-highest dark:bg-on-background border-t border-outline-variant/30 dark:border-outline/20">
          <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter">
            <div className="col-span-1 md:col-span-2">
              <h4 className="font-headline-sm text-headline-sm text-primary dark:text-primary-fixed-dim mb-6">BOOT Civic Operating System</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-surface-variant max-w-sm">
                Building the foundations for a more resilient, transparent, and participatory democratic process through technology and local community empowerment.
              </p>
            </div>
            <div>
              <h5 className="font-label-lg text-label-lg text-primary dark:text-primary-fixed-dim mb-6">RESOURCES</h5>
              <ul className="space-y-3">
                <li><Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary underline transition-all" href="#">Privacy Policy</Link></li>
                <li><Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary underline transition-all" href="#">Terms of Service</Link></li>
                <li><Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary underline transition-all" href="#">Transparency Report</Link></li>
                <li><Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary underline transition-all" href="#">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-label-lg text-label-lg text-primary dark:text-primary-fixed-dim mb-6">NEWSLETTER</h5>
              <div className="flex gap-2">
                <input className="bg-surface border border-outline-variant p-2 w-full focus:ring-1 focus:ring-primary outline-none" placeholder="Email" type="email" />
                <button className="bg-primary text-on-primary px-4 py-2">JOIN</button>
              </div>
            </div>
          </div>
          <div className="max-w-container-max mx-auto px-margin-desktop mt-16 pt-8 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between gap-4">
            <p className="font-label-md text-label-md text-on-surface-variant dark:text-surface-variant">© 2024 BOOT Civic Operating System. All Rights Reserved.</p>
            <div className="flex gap-6">
              <span className="material-symbols-outlined text-primary cursor-pointer hover:opacity-70 transition-opacity">share</span>
              <span className="material-symbols-outlined text-primary cursor-pointer hover:opacity-70 transition-opacity">public</span>
              <span className="material-symbols-outlined text-primary cursor-pointer hover:opacity-70 transition-opacity">forum</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
