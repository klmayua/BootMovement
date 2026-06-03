import React from 'react';
import Link from 'next/link';

export default function LearningCenter() {
  return (
    <div className="bg-surface font-body-md text-on-surface min-h-screen">
      {/* TopAppBar Shell */}
      <header className="bg-surface w-full sticky top-0 z-50 border-b border-outline-variant/30 flex justify-between items-center px-margin-desktop py-4">
        <div className="flex items-center gap-8">
          <span className="font-headline-sm text-headline-sm font-bold text-primary">BOOT Civic OS</span>
          <nav className="hidden md:flex gap-6 items-center">
            <Link className="text-on-surface-variant hover:bg-surface-container-low transition-colors px-3 py-1 font-body-md" href="#">Resources</Link>
            <Link className="text-primary font-bold border-b-2 border-primary px-3 py-1 font-body-md" href="/learning">Learning Center</Link>
            <Link className="text-on-surface-variant hover:bg-surface-container-low transition-colors px-3 py-1 font-body-md" href="#">Library</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
            <input className="pl-10 pr-4 py-2 bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-primary w-64 text-body-sm" placeholder="Search courses..." type="text"/>
          </div>
          <span className="material-symbols-outlined cursor-pointer text-primary hover:bg-surface-container-low p-2 rounded-full transition-all">notifications</span>
          <span className="material-symbols-outlined cursor-pointer text-primary hover:bg-surface-container-low p-2 rounded-full transition-all">account_circle</span>
        </div>
      </header>

      <div className="flex">
        {/* SideNavBar Shell */}
        <aside className="fixed left-0 top-16 h-[calc(100vh-64px)] w-64 border-r border-outline-variant/30 bg-surface-container-low flex flex-col py-8 px-4 z-40">
          <div className="mb-8 px-4">
            <h2 className="font-headline-sm text-headline-sm text-primary">Learning</h2>
            <p className="text-on-surface-variant text-body-sm">Civic Leadership Track</p>
          </div>
          <nav className="flex-1 space-y-2">
            <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container hover:translate-x-1 transition-all duration-300 rounded-lg" href="#">
              <span className="material-symbols-outlined">dashboard</span>
              <span className="font-label-lg text-label-lg">Dashboard</span>
            </Link>
            <Link className="flex items-center gap-3 px-4 py-3 text-primary font-bold bg-primary-fixed/20 rounded-lg" href="#">
              <span className="material-symbols-outlined">assignment</span>
              <span className="font-label-lg text-label-lg">My Courses</span>
            </Link>
            <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container hover:translate-x-1 transition-all duration-300 rounded-lg" href="#">
              <span className="material-symbols-outlined">groups</span>
              <span className="font-label-lg text-label-lg">Study Circles</span>
            </Link>
            <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container hover:translate-x-1 transition-all duration-300 rounded-lg" href="#">
              <span className="material-symbols-outlined">monitoring</span>
              <span className="font-label-lg text-label-lg">Impact Analytics</span>
            </Link>
          </nav>
          <div className="mt-auto border-t border-outline-variant/20 pt-6 px-4">
            <button className="w-full bg-secondary text-on-secondary font-label-lg text-label-lg py-3 rounded-lg hover:opacity-90 transition-opacity mb-4">
              Donate Now
            </button>
            <div className="space-y-2">
              <Link className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-all" href="#">
                <span className="material-symbols-outlined">help</span>
                <span className="text-label-md">Support</span>
              </Link>
              <Link className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-all" href="#">
                <span className="material-symbols-outlined">logout</span>
                <span className="text-label-md">Logout</span>
              </Link>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="ml-64 flex-1 p-margin-desktop bg-surface min-h-[calc(100vh-64px)]">
          {/* Hero Header */}
          <section className="mb-12">
            <div className="flex justify-between items-end mb-8">
              <div>
                <span className="text-on-secondary-fixed-variant font-label-lg text-label-lg tracking-widest uppercase mb-2 block">Level Up Your Civic Impact</span>
                <h1 className="font-headline-lg text-headline-lg text-primary">Leadership Development</h1>
              </div>
              <div className="flex gap-4">
                <button className="px-6 py-2 border border-tertiary-container text-tertiary-container font-label-lg rounded-lg hover:bg-surface-container transition-all">Course Directory</button>
                <button className="px-6 py-2 bg-primary-container text-white font-label-lg rounded-lg hover:opacity-90 transition-all">Continue Learning</button>
              </div>
            </div>
            {/* Learning Stats Bento */}
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-8 bg-white/70 backdrop-blur-xl border border-tertiary-fixed/20 rounded-xl p-8 relative overflow-hidden h-64 flex flex-col justify-end">
                <div className="relative z-10">
                  <h3 className="font-headline-md text-headline-md text-primary mb-2">Campaign Management 101</h3>
                  <p className="text-on-surface-variant mb-4 max-w-md">You've completed 64% of the Advanced Grassroots Organizing module. Pick up where you left off.</p>
                  <div className="w-full h-2 bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-secondary w-[64%]"></div>
                  </div>
                </div>
              </div>
              <div className="col-span-4 border border-outline-variant/30 rounded-xl p-6 flex flex-col justify-between">
                <div>
                  <span className="material-symbols-outlined text-tertiary-container text-4xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
                  <h4 className="font-headline-sm text-headline-sm text-primary">Impact Credits</h4>
                  <p className="text-body-sm text-on-surface-variant">Earned through civic participation and course completion.</p>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-primary">2,450</span>
                  <span className="text-label-md text-on-surface-variant">XP earned</span>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Courses Grid */}
          <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-headline-md text-headline-md text-primary">Curated for Your Path</h2>
              <div className="flex gap-2">
                <span className="text-label-lg text-on-surface-variant bg-surface-container px-3 py-1 rounded-full">Policy</span>
                <span className="text-label-lg text-on-surface-variant bg-surface-container px-3 py-1 rounded-full">Governance</span>
                <span className="text-label-lg text-on-surface-variant bg-surface-container px-3 py-1 rounded-full">Ethics</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-8">
              {/* Course Card 1 */}
              <div className="group cursor-pointer">
                <div className="aspect-video rounded-xl overflow-hidden mb-4 relative border border-outline-variant/20">
                  <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Professional office" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCu-SXxEj3YwKfqe0getG7dxqFF0-BsDiNUW9MopdDQNEyWq-R6xSrffpk9dGaF-ug18mNBdX_TNaYWe8NhwsBXf3OeaGnUs46Cd0UDicqueEjgaKUzCYzNyE7w0C5MAT_y70n407UPqF0zHdXXL2R4id_V8LekykFW9o_i9od_8oo1drrz-g4kbvYRvjEQJC253UHsYQsU0OkOccDyyzMFQfXhWuo7nAO9Do71h2XpUwLnBFOG9wgMy2kjJP3VJ17_RcybMbjRC5T"/>
                  <div className="absolute top-4 left-4 bg-primary text-white text-label-md px-2 py-1 rounded">MANDATORY</div>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-primary mb-1 group-hover:text-secondary transition-colors">Ethical Public Service</h4>
                <p className="text-body-sm text-on-surface-variant mb-4">Understanding the framework of accountability in modern civic offices.</p>
                <div className="flex items-center justify-between text-label-md text-on-surface-variant">
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">schedule</span> 4.5 Hours</span>
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">star</span> 4.9 (1.2k)</span>
                </div>
              </div>
              {/* Course Card 2 */}
              <div className="group cursor-pointer">
                <div className="aspect-video rounded-xl overflow-hidden mb-4 relative border border-outline-variant/20">
                  <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Grand library" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2GKvvpE_MSwLrwr7p6CFouVPoVBpAlXaaNIClS0Ck8JG3YLNVUFPkrY_Pc33JLnO3eFbCRrPG-JC0ltrJnJD79W4LWjhbGkIdZRzcOOaV2SiX7ZnlznRY7Z_mk1l70g8Gc7MwMMeLqoWHljhXVTUmSAPBZoi7MMDxitBs5PTUujf8-Kx-1xu97epWnViJRifW0uw94HAupjPyW9FvzWd-mbXUeGP9B8YK4ikhK1kxmMMgojmyKTBQaVPye7uztb7MjOBaITKHadw2"/>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-primary mb-1 group-hover:text-secondary transition-colors">Civic History &amp; Heritage</h4>
                <p className="text-body-sm text-on-surface-variant mb-4">A deep dive into the historical precedents of the BOOT movement and civic OS.</p>
                <div className="flex items-center justify-between text-label-md text-on-surface-variant">
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">schedule</span> 8 Hours</span>
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">star</span> 4.8 (850)</span>
                </div>
              </div>
              {/* Course Card 3 */}
              <div className="group cursor-pointer">
                <div className="aspect-video rounded-xl overflow-hidden mb-4 relative border border-outline-variant/20">
                  <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Collaboration" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJZl6xa60ESLUWRKcv4RwIX4Ta19GOIebpd-B_fi2FtZs1xR2voCM7_RZpzFkrzJizqII06sHdrXrtJag14TARMVCcH0zMiLmx17gwWXyWV_txkswLr4tmveOYpj-YnS3wuYXNqcdAinuxx6WmOp_VEM7eK8kgFWDjE_IgvmAvvo3tACzzgfwvJygixnPh3xJpojMhwk0KKSZ70useHb-j57KWgTCrgybw6EhsWWknmTTxsxVBl-DNIlSpJM0w5FuOI-z82Es7e81S"/>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-primary mb-1 group-hover:text-secondary transition-colors">Data-Driven Policy Making</h4>
                <p className="text-body-sm text-on-surface-variant mb-4">Mastering the BOOT analytics engine for community resource allocation.</p>
                <div className="flex items-center justify-between text-label-md text-on-surface-variant">
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">schedule</span> 6.5 Hours</span>
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">star</span> 4.7 (2.1k)</span>
                </div>
              </div>
            </div>
          </section>

          {/* Upcoming Workshops Section */}
          <section className="mb-16">
            <div className="border border-outline-variant/20 rounded-2xl overflow-hidden">
              <div className="bg-surface-container p-6 border-b border-outline-variant/20 flex justify-between items-center">
                <h3 className="font-headline-sm text-headline-sm text-primary">Live Training Sessions</h3>
                <Link className="text-secondary font-label-lg hover:underline transition-all" href="#">View Full Calendar</Link>
              </div>
              <div className="divide-y divide-outline-variant/10">
                <div className="p-6 flex items-center justify-between hover:bg-surface-container-low transition-all">
                  <div className="flex gap-6 items-center">
                    <div className="bg-primary-container text-white px-4 py-2 rounded flex flex-col items-center min-w-[80px]">
                      <span className="text-body-sm font-bold">OCT</span>
                      <span className="text-headline-sm">24</span>
                    </div>
                    <div>
                      <h5 className="font-label-lg text-label-lg text-primary">Digital Sovereignty Workshop</h5>
                      <p className="text-body-sm text-on-surface-variant">Host: Dr. Sarah Aris | 14:00 GMT</p>
                    </div>
                  </div>
                  <button className="px-4 py-2 border border-secondary text-secondary rounded-lg font-label-md hover:bg-secondary-fixed transition-all">Reserve Spot</button>
                </div>
                <div className="p-6 flex items-center justify-between hover:bg-surface-container-low transition-all">
                  <div className="flex gap-6 items-center">
                    <div className="bg-surface-container-highest text-on-surface px-4 py-2 rounded flex flex-col items-center min-w-[80px]">
                      <span className="text-body-sm font-bold">OCT</span>
                      <span className="text-headline-sm">28</span>
                    </div>
                    <div>
                      <h5 className="font-label-lg text-label-lg text-primary">Grassroots Resource Management</h5>
                      <p className="text-body-sm text-on-surface-variant">Host: Julian Thorne | 10:00 GMT</p>
                    </div>
                  </div>
                  <button className="px-4 py-2 border border-secondary text-secondary rounded-lg font-label-md hover:bg-secondary-fixed transition-all">Reserve Spot</button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Footer Shell */}
      <footer className="bg-surface-container-highest w-full py-16 border-t border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter">
          <div className="col-span-1">
            <span className="font-headline-sm text-headline-sm text-primary mb-6 block">BOOT Civic OS</span>
            <p className="text-on-surface-variant text-body-sm pr-8">Empowering citizens through transparent governance and leadership education. Build the future, together.</p>
          </div>
          <div className="col-span-1">
            <h6 className="font-label-lg text-label-lg text-primary mb-6 uppercase tracking-wider">Education</h6>
            <ul className="space-y-4">
              <li><Link className="text-on-surface-variant font-label-md hover:text-primary underline transition-all" href="#">Course Directory</Link></li>
              <li><Link className="text-on-surface-variant font-label-md hover:text-primary underline transition-all" href="#">Certification Paths</Link></li>
              <li><Link className="text-on-surface-variant font-label-md hover:text-primary underline transition-all" href="#">Civic Internships</Link></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h6 className="font-label-lg text-label-lg text-primary mb-6 uppercase tracking-wider">Governance</h6>
            <ul className="space-y-4">
              <li><Link className="text-on-surface-variant font-label-md hover:text-primary underline transition-all" href="#">Transparency Report</Link></li>
              <li><Link className="text-on-surface-variant font-label-md hover:text-primary underline transition-all" href="#">OS Documentation</Link></li>
              <li><Link className="text-on-surface-variant font-label-md hover:text-primary underline transition-all" href="#">Privacy Policy</Link></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h6 className="font-label-lg text-label-lg text-primary mb-6 uppercase tracking-wider">Contact</h6>
            <ul className="space-y-4">
              <li><Link className="text-on-surface-variant font-label-md hover:text-primary underline transition-all" href="#">Help Center</Link></li>
              <li><Link className="text-on-surface-variant font-label-md hover:text-primary underline transition-all" href="#">Terms of Service</Link></li>
              <li><Link className="text-on-surface-variant font-label-md hover:text-primary underline transition-all" href="#">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-container-max mx-auto px-margin-desktop mt-16 pt-8 border-t border-outline-variant/10">
          <p className="text-body-sm text-on-surface-variant opacity-60">© 2024 BOOT Civic Operating System. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
