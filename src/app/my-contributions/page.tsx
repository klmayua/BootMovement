import React from 'react';

export default function MyImpactPage() {
  return (
    <div className="font-body-md text-on-surface bg-background overflow-x-hidden">
      {/* Sidebar Navigation */}
      <aside className="fixed left-0 top-0 h-screen w-64 bg-surface-container-low border-r border-outline-variant/30 flex flex-col py-8 px-4 z-50">
        <div className="mb-12 px-2">
          <h1 className="font-headline-sm text-headline-sm text-primary">BOOT OS</h1>
          <p className="font-label-md text-on-surface-variant">Civic Dashboard</p>
        </div>
        <nav className="flex-grow space-y-2">
          <a className="flex items-center gap-4 p-3 font-label-lg text-label-lg text-primary font-bold bg-primary-fixed/20 rounded-lg hover:translate-x-1 duration-300 ease-in-out" href="#">
            <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
            Dashboard
          </a>
          <a className="flex items-center gap-4 p-3 font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container transition-all hover:translate-x-1 duration-300 ease-in-out" href="#">
            <span className="material-symbols-outlined" data-icon="groups">groups</span>
            Communities
          </a>
          <a className="flex items-center gap-4 p-3 font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container transition-all hover:translate-x-1 duration-300 ease-in-out" href="#">
            <span className="material-symbols-outlined" data-icon="event">event</span>
            Events
          </a>
          <a className="flex items-center gap-4 p-3 font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container transition-all hover:translate-x-1 duration-300 ease-in-out" href="#">
            <span className="material-symbols-outlined" data-icon="assignment">assignment</span>
            Projects
          </a>
          <a className="flex items-center gap-4 p-3 font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container transition-all hover:translate-x-1 duration-300 ease-in-out" href="#">
            <span className="material-symbols-outlined" data-icon="monitoring">monitoring</span>
            Analytics
          </a>
          <a className="flex items-center gap-4 p-3 font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container transition-all hover:translate-x-1 duration-300 ease-in-out" href="#">
            <span className="material-symbols-outlined" data-icon="settings">settings</span>
            Settings
          </a>
        </nav>
        <div className="mt-auto border-t border-outline-variant/30 pt-6 px-2 space-y-4">
          <button className="w-full bg-secondary text-on-secondary py-3 px-4 rounded-lg font-label-lg hover:opacity-90 transition-opacity">
            Donate Now
          </button>
          <div className="space-y-2">
            <a className="flex items-center gap-4 p-2 text-on-surface-variant hover:text-primary transition-colors" href="#">
              <span className="material-symbols-outlined" data-icon="help">help</span>
              <span className="text-label-md">Support</span>
            </a>
            <a className="flex items-center gap-4 p-2 text-on-surface-variant hover:text-primary transition-colors" href="#">
              <span className="material-symbols-outlined" data-icon="logout">logout</span>
              <span className="text-label-md">Logout</span>
            </a>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="ml-64 min-h-screen">
        {/* Top App Bar */}
        <header className="sticky top-0 z-40 bg-surface border-b border-outline-variant/30 px-margin-desktop py-4 flex justify-between items-center w-full">
          <h2 className="font-headline-sm text-headline-sm font-bold text-primary">My Impact</h2>
          <div className="flex items-center gap-6">
            <div className="relative group">
              <input className="bg-surface-container-low border-none rounded-full py-2 px-10 focus:ring-2 focus:ring-primary w-64 text-body-sm" placeholder="Search insights..." type="text" />
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-body-md" data-icon="search">search</span>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-surface-container-low rounded-full transition-colors relative">
                <span className="material-symbols-outlined text-primary" data-icon="notifications">notifications</span>
                <span className="absolute top-2 right-2 w-2 h-2 bg-secondary rounded-full"></span>
              </button>
              <div className="flex items-center gap-3 cursor-pointer p-1 pr-4 rounded-full hover:bg-surface-container-low transition-colors">
                <img alt="User profile" className="w-8 h-8 rounded-full bg-primary-fixed" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjW1gjqzhaAafOaA6bxJyTzMk5RCdYUvN31z1Psftvg3NmFsrxaTsWx7J8Qy3wEPob6dotLE2kYsy2pozjDyJne3Ru2x8SHqfF9YWSVNd2Z6e3Ds_LM_ASVVthal9QyKTAir2ay4S49i01RtiKS9mmRn9Qj8s_TffY_yRT7aHwMI8gIKkFxR0u1JCXg26K6qbYxvXJHU4lncSlZjZTnM-vOEceLfufyEC_o_CMGc-FRDedYOUtd6POxdX2WqAvmsrE9ZHyUyKd9jD8" />
                <span className="font-label-lg text-primary">Alex Chen</span>
              </div>
            </div>
          </div>
        </header>

        <div className="px-margin-desktop py-12 max-w-container-max mx-auto">
          {/* Hero Impact Summary */}
          <section className="grid grid-cols-12 gap-gutter mb-12">
            <div className="col-span-8 p-12 bg-primary-container text-white rounded-xl relative overflow-hidden shadow-sm">
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <span className="font-label-lg text-primary-fixed-dim tracking-widest uppercase mb-4 block">Personal Legacy</span>
                  <h3 className="font-display-lg text-display-lg mb-4">Empowering 1,240 Neighbors</h3>
                  <p className="font-body-lg text-surface-variant max-w-lg mb-8">Through consistent contributions to urban development and local community grants, your direct actions have catalyzed a 15% increase in local green spaces.</p>
                </div>
                <div className="flex gap-8">
                  <div className="flex flex-col">
                    <span className="font-headline-md text-headline-md">148</span>
                    <span className="font-label-md text-primary-fixed-dim">Volunteer Hours</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-headline-md text-headline-md">$12,450</span>
                    <span className="font-label-md text-primary-fixed-dim">Grants Facilitated</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-headline-md text-headline-md">12</span>
                    <span className="font-label-md text-primary-fixed-dim">Local Policies Passed</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-4 p-8 bg-surface-container border border-outline-variant/30 rounded-xl flex flex-col justify-between">
              <div>
                <h4 className="font-headline-sm text-headline-sm text-primary mb-2">Milestone Progress</h4>
                <p className="font-body-sm text-on-surface-variant mb-6">Next Badge: Community Architect</p>
                <div className="relative w-full h-48 flex items-center justify-center">
                  <svg className="w-40 h-40 transform -rotate-90">
                    <circle className="text-tertiary-fixed" cx="80" cy="80" fill="transparent" r="70" stroke="currentColor" strokeWidth="12"></circle>
                    <circle className="text-secondary transition-all duration-1000" cx="80" cy="80" fill="transparent" r="70" stroke="currentColor" strokeDasharray="440" strokeDashoffset="88" strokeWidth="12"></circle>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="font-headline-md text-headline-md text-primary">80%</span>
                    <span className="font-label-md text-on-surface-variant">Level 14</span>
                  </div>
                </div>
              </div>
              <button className="w-full border border-tertiary-fixed-dim text-tertiary font-label-lg py-3 hover:bg-tertiary-fixed/10 transition-colors mt-4">
                View Achievements
              </button>
            </div>
          </section>

          {/* Data Visualizations */}
          <section className="grid grid-cols-12 gap-gutter mb-12">
            <div className="col-span-7 bg-white border border-outline-variant/30 p-8 rounded-xl">
              <div className="flex justify-between items-center mb-10">
                <div>
                  <h4 className="font-headline-sm text-headline-sm text-primary">Contribution Velocity</h4>
                  <p className="font-body-sm text-on-surface-variant">Engagement levels across Q1-Q3 2024</p>
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-surface-container-low text-primary rounded-full font-label-md">Monthly</span>
                  <span className="px-3 py-1 text-on-surface-variant rounded-full font-label-md cursor-pointer hover:bg-surface-container-low">Quarterly</span>
                </div>
              </div>
              <div className="h-64 w-full flex items-end gap-4 px-4">
                <div className="flex-1 bg-primary-fixed-dim/20 h-1/4 rounded-t-sm group relative">
                  <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </div>
                <div className="flex-1 bg-primary-fixed-dim/30 h-2/4 rounded-t-sm group relative">
                  <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </div>
                <div className="flex-1 bg-primary-fixed-dim/40 h-3/5 rounded-t-sm group relative">
                  <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </div>
                <div className="flex-1 bg-primary-container h-4/5 rounded-t-sm group relative">
                  <div className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-40 transition-opacity"></div>
                </div>
                <div className="flex-1 bg-primary-fixed-dim/50 h-3/4 rounded-t-sm group relative">
                  <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </div>
                <div className="flex-1 bg-primary-container h-full rounded-t-sm group relative">
                  <div className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-40 transition-opacity"></div>
                </div>
              </div>
              <div className="flex justify-between mt-4 text-label-md text-on-surface-variant uppercase tracking-tighter">
                <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
              </div>
            </div>
            <div className="col-span-5 bg-white border border-outline-variant/30 p-8 rounded-xl flex flex-col">
              <h4 className="font-headline-sm text-headline-sm text-primary mb-6">Impact Domains</h4>
              <div className="space-y-6 flex-grow flex flex-col justify-center">
                <div className="space-y-2">
                  <div className="flex justify-between text-label-lg">
                    <span className="text-on-surface">Environmental Sustainability</span>
                    <span className="text-primary font-bold">42%</span>
                  </div>
                  <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                    <div className="bg-primary-container h-full w-[42%]"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-label-lg">
                    <span className="text-on-surface">Education &amp; Literacy</span>
                    <span className="text-primary font-bold">28%</span>
                  </div>
                  <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                    <div className="bg-secondary h-full w-[28%]"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-label-lg">
                    <span className="text-on-surface">Urban Infrastructure</span>
                    <span className="text-primary font-bold">18%</span>
                  </div>
                  <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                    <div className="bg-tertiary-container h-full w-[18%]"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-label-lg">
                    <span className="text-on-surface">Public Wellness</span>
                    <span className="text-primary font-bold">12%</span>
                  </div>
                  <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                    <div className="bg-outline h-full w-[12%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Bottom Row */}
          <section className="grid grid-cols-12 gap-gutter">
            <div className="col-span-8 bg-surface-container-low border border-outline-variant/30 rounded-xl overflow-hidden">
              <div className="p-8 border-b border-outline-variant/30 flex justify-between items-center bg-white/50">
                <h4 className="font-headline-sm text-headline-sm text-primary">Contribution Log</h4>
                <button className="text-primary font-label-lg flex items-center gap-1 hover:underline">
                  Export Report <span className="material-symbols-outlined text-sm" data-icon="download">download</span>
                </button>
              </div>
              <div className="p-8">
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-label-md text-on-surface-variant uppercase tracking-widest border-b border-outline-variant/20">
                      <th className="pb-4 font-semibold">Action</th>
                      <th className="pb-4 font-semibold">Category</th>
                      <th className="pb-4 font-semibold">Date</th>
                      <th className="pb-4 font-semibold text-right">Points</th>
                    </tr>
                  </thead>
                  <tbody className="text-body-sm">
                    <tr className="border-b border-outline-variant/10 hover:bg-surface-container-high transition-colors">
                      <td className="py-5 font-semibold text-primary">Oak Tree Initiative - District 7</td>
                      <td className="py-5"><span className="px-2 py-1 bg-primary-fixed/30 text-on-primary-fixed-variant rounded-md text-xs">Sustainability</span></td>
                      <td className="py-5 text-on-surface-variant">Oct 12, 2024</td>
                      <td className="py-5 text-right font-bold text-secondary">+450</td>
                    </tr>
                    <tr className="border-b border-outline-variant/10 hover:bg-surface-container-high transition-colors">
                      <td className="py-5 font-semibold text-primary">Community Grant: STEM for All</td>
                      <td className="py-5"><span className="px-2 py-1 bg-tertiary-fixed/30 text-on-tertiary-fixed-variant rounded-md text-xs">Education</span></td>
                      <td className="py-5 text-on-surface-variant">Oct 08, 2024</td>
                      <td className="py-5 text-right font-bold text-secondary">+1,200</td>
                    </tr>
                    <tr className="border-b border-outline-variant/10 hover:bg-surface-container-high transition-colors">
                      <td className="py-5 font-semibold text-primary">Urban Transit Review - Panelist</td>
                      <td className="py-5"><span className="px-2 py-1 bg-secondary-fixed/30 text-on-secondary-fixed-variant rounded-md text-xs">Infrastructure</span></td>
                      <td className="py-5 text-on-surface-variant">Sep 28, 2024</td>
                      <td className="py-5 text-right font-bold text-secondary">+800</td>
                    </tr>
                    <tr className="hover:bg-surface-container-high transition-colors">
                      <td className="py-5 font-semibold text-primary">Volunteer: Local Food Drive</td>
                      <td className="py-5"><span className="px-2 py-1 bg-outline-variant/30 text-on-surface-variant rounded-md text-xs">Wellness</span></td>
                      <td className="py-5 text-on-surface-variant">Sep 15, 2024</td>
                      <td className="py-5 text-right font-bold text-secondary">+250</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-span-4 bg-white border border-outline-variant/30 rounded-xl p-8">
              <h4 className="font-headline-sm text-headline-sm text-primary mb-6">Regional Leaders</h4>
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <span className="font-display-lg text-secondary text-headline-md opacity-20">01</span>
                  <img alt="Top contributor avatar" className="w-12 h-12 rounded-full border-2 border-primary-fixed" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCx1cBILK6F7XxKl5fvQ3aQ9_uxs0ntfOwowssOiHHQDJUOOr8MyV3--2JPvE0zDBLavV0DCGxkT-ATGWla1UAp0f4MExwxi3av8I0pX97tCsdBhod0VZy46eYmDpCw_lAtFmiFnYmi12zSWfCjI59JN-3GJQeGuIuUDhsRZEyHKUNpMizpT_qwDzGBOdG7k6ZHjUfYXp6dqdy20gqZJM8e5iq9dcn9KOkQYo5YFQEd0MeHzwdkfTzi6vV4hDJxl-AwNVOM1Gj016wm" />
                  <div className="flex-grow">
                    <p className="font-label-lg text-primary">Jordan D.</p>
                    <p className="text-label-md text-on-surface-variant">24,500 Impact pts</p>
                  </div>
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-display-lg text-on-surface-variant text-headline-md opacity-20">02</span>
                  <img alt="Second contributor avatar" className="w-12 h-12 rounded-full border-2 border-outline-variant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDmWNXwDyoo5eZEnte2LuyEZEpjBLJQ5o7RtqCq-n0WpsYmsHXQiJvZJ0vFB9YTF5_bJffC2ihOJMnBeGyc1phEQJaDkHnQbbphsM5Fp4hUMcy5CnbM1dhJvmqHmEK9uf2FvsgWw4L2NHj0WK0DBtSr3Vv0T1SHaiuOWCKnM5b1bPYirg58B4l5Af_crd0Am1uPCs0Q3OQvmjCzRvqFW7wEY6Ngah3L6TZK9WavTf-OkvihOGtH6lr1gH-fTYzXWcfihM6KDH" />
                  <div className="flex-grow">
                    <p className="font-label-lg text-primary">Sarah M.</p>
                    <p className="text-label-md text-on-surface-variant">21,200 Impact pts</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-surface-container-low p-4 -mx-4 rounded-lg border-y border-outline-variant/10">
                  <span className="font-display-lg text-primary text-headline-md opacity-20">14</span>
                  <img alt="User avatar" className="w-12 h-12 rounded-full border-2 border-primary" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDY28728lbUeiMkOylsw0XwM15n3XIqpDlTHYkKzWEkcJCdOr_MusPoB-_fN9GDRS29oKx1tLf3w7N7Dk5L2tEo9CqjB6zt6W2HXbJOAJDcbFwISnVw29h3xbKNOaUJm6-8KALYwpGuM9G0Z_KZPBrCgP_E8ogqX19iW_-xBNPYEvMGg0gsJ6sJ1qUIU5iDCQRxiDq6AhiTTo_KP88N3odHdZXU_brv5wS52xO7A_CigDcdmKLAIBhsepW0kX9Ruy0MdWKRR7IJ-9i" />
                  <div className="flex-grow">
                    <p className="font-label-lg text-primary">Alex Chen (You)</p>
                    <p className="text-label-md text-on-surface-variant">12,850 Impact pts</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-display-lg text-on-surface-variant text-headline-md opacity-20">15</span>
                  <img alt="Next contributor avatar" className="w-12 h-12 rounded-full border-2 border-outline-variant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjT8ZFLibTUlIu8m-zYQLFWGVbXC8lnqhxDGaUu7KhToHyxW4uK-2OOGbH-3XxT4boh7_ARc4uGFssQ9ynoT7_jk_SYDgF8a3uDCMxVnjjTy_uc3-Bsm4JYzue17_oxafFCRFwwH6_gLOwZWV7wRQoZF2KP5Ia_YghCx7HR71NXmiYEYWIN0QCqtmz3PFuKYVtsFjicJMMwUvHGyjWq3sDwiiCF3Cbn_LqkWdt-YQB51dYTX7kMgQO99q6LNsKOXFxki4EzevDU3NY" />
                  <div className="flex-grow">
                    <p className="font-label-lg text-primary">Riley L.</p>
                    <p className="text-label-md text-on-surface-variant">11,900 Impact pts</p>
                  </div>
                </div>
              </div>
              <button className="w-full mt-8 py-3 text-primary font-label-lg border-t border-outline-variant/30 hover:bg-surface-container-low transition-colors">
                Explore Full Leaderboard
              </button>
            </div>
          </section>
        </div>
        {/* Footer */}
        <footer className="w-full py-16 bg-surface-container-highest border-t border-outline-variant/30">
          <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter">
            <div className="col-span-1">
              <h3 className="font-headline-sm text-headline-sm text-primary mb-4">BOOT Civic OS</h3>
              <p className="font-body-sm text-on-surface-variant pr-8">Fostering transparent community growth and individual contribution through institutional-grade digital infrastructure.</p>
            </div>
            <div className="col-span-1">
              <h4 className="font-label-lg text-label-lg text-primary mb-4">System</h4>
              <ul className="space-y-2">
                <li><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary underline transition-all" href="#">Transparency Report</a></li>
                <li><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary underline transition-all" href="#">Privacy Policy</a></li>
                <li><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary underline transition-all" href="#">Terms of Service</a></li>
              </ul>
            </div>
            <div className="col-span-1">
              <h4 className="font-label-lg text-label-lg text-primary mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary underline transition-all" href="#">Contact Us</a></li>
                <li><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary underline transition-all" href="#">Help Center</a></li>
                <li><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary underline transition-all" href="#">Status</a></li>
              </ul>
            </div>
            <div className="col-span-1">
              <h4 className="font-label-lg text-label-lg text-primary mb-4">Civic Network</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">Join 240,000+ citizens shaping the future.</p>
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-primary cursor-pointer hover:opacity-80" data-icon="share">share</span>
                <span className="material-symbols-outlined text-primary cursor-pointer hover:opacity-80" data-icon="language">language</span>
              </div>
            </div>
          </div>
          <div className="max-w-container-max mx-auto px-margin-desktop mt-16 pt-8 border-t border-outline-variant/10 text-center">
            <p className="font-label-md text-label-md text-on-surface-variant">© 2024 BOOT Civic Operating System. All Rights Reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
