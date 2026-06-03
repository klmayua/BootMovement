import React from 'react';

export default function MyCommunitiesPage() {
  return (
    <div className="min-h-screen font-body-md text-on-surface selection:bg-primary-fixed selection:text-on-primary-fixed">
      {/* SideNavBar */}
      <aside className="fixed left-0 top-0 h-screen w-64 bg-surface-container-low border-r border-outline-variant/30 flex flex-col py-8 px-4 z-50">
        <div className="mb-10 px-2">
          <h1 className="font-headline-sm text-headline-sm text-primary font-bold">BOOT OS</h1>
          <p className="font-label-md text-label-md text-on-surface-variant">Civic Dashboard</p>
        </div>
        <nav className="flex-1 space-y-2">
          <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container hover:translate-x-1 transition-all duration-300 rounded-lg group" href="#">
            <span className="material-symbols-outlined text-primary" data-icon="dashboard">dashboard</span>
            <span className="font-label-lg text-label-lg">Dashboard</span>
          </a>
          {/* ACTIVE TAB: Communities */}
          <a className="flex items-center gap-3 px-4 py-3 text-primary font-bold bg-primary-fixed/20 rounded-lg group" href="#">
            <span className="material-symbols-outlined" data-icon="groups" style={{ fontVariationSettings: "'FILL' 1" }}>groups</span>
            <span className="font-label-lg text-label-lg">Communities</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container hover:translate-x-1 transition-all duration-300 rounded-lg group" href="#">
            <span className="material-symbols-outlined" data-icon="event">event</span>
            <span className="font-label-lg text-label-lg">Events</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container hover:translate-x-1 transition-all duration-300 rounded-lg group" href="#">
            <span className="material-symbols-outlined" data-icon="assignment">assignment</span>
            <span className="font-label-lg text-label-lg">Projects</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container hover:translate-x-1 transition-all duration-300 rounded-lg group" href="#">
            <span className="material-symbols-outlined" data-icon="monitoring">monitoring</span>
            <span className="font-label-lg text-label-lg">Analytics</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container hover:translate-x-1 transition-all duration-300 rounded-lg group" href="#">
            <span className="material-symbols-outlined" data-icon="settings">settings</span>
            <span className="font-label-lg text-label-lg">Settings</span>
          </a>
        </nav>
        <div className="mt-auto border-t border-outline-variant/20 pt-6 space-y-2">
          <button className="w-full bg-secondary text-on-secondary py-3 rounded-lg font-label-lg text-label-lg shadow-sm hover:opacity-90 transition-opacity">
            Donate Now
          </button>
          <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container hover:translate-x-1 transition-all duration-300 rounded-lg" href="#">
            <span className="material-symbols-outlined" data-icon="help">help</span>
            <span className="font-label-lg text-label-lg">Support</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container hover:translate-x-1 transition-all duration-300 rounded-lg" href="#">
            <span className="material-symbols-outlined" data-icon="logout">logout</span>
            <span className="font-label-lg text-label-lg">Logout</span>
          </a>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="ml-64 min-h-screen">
        {/* TopAppBar */}
        <header className="w-full sticky top-0 z-40 bg-surface border-b border-outline-variant/30 flex justify-between items-center px-margin-desktop py-4 h-20">
          <div>
            <h2 className="font-headline-sm text-headline-sm font-bold text-primary">My Communities</h2>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative hidden lg:block">
              <input className="bg-surface-container-low border border-outline-variant rounded-full px-5 py-2 w-64 text-body-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="Search communities..." type="text" />
              <span className="material-symbols-outlined absolute right-4 top-2 text-on-surface-variant" data-icon="search">search</span>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 rounded-full hover:bg-surface-container-low transition-colors relative group">
                <span className="material-symbols-outlined text-primary" data-icon="notifications">notifications</span>
                <span className="absolute top-2 right-2 w-2 h-2 bg-secondary rounded-full"></span>
              </button>
              <button className="flex items-center gap-2 pl-2 pr-1 py-1 rounded-full border border-outline-variant/30 hover:bg-surface-container-low transition-colors">
                <span className="font-label-lg text-label-lg px-2">Jane Cooper</span>
                <span className="material-symbols-outlined text-3xl text-primary" data-icon="account_circle" style={{ fontVariationSettings: "'FILL' 1" }}>account_circle</span>
              </button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="max-w-container-max mx-auto px-margin-desktop py-12">
          {/* Hero Grid: Top Level Status */}
          <div className="grid grid-cols-12 gap-gutter mb-12">
            {/* Primary Insight Card */}
            <div className="col-span-12 lg:col-span-8 bg-primary-container text-white p-8 rounded-xl relative overflow-hidden flex flex-col justify-between h-80">
              <div className="z-10">
                <span className="bg-primary/30 px-3 py-1 rounded-full font-label-md text-label-md uppercase tracking-wider mb-4 inline-block">Regional Activity</span>
                <h3 className="font-headline-lg text-headline-lg mb-4">Your Voice in Bristol North</h3>
                <p className="font-body-lg text-body-lg text-primary-fixed-dim max-w-lg">You are currently active in 4 local councils and 2 community projects. Three votes are closing in the next 48 hours.</p>
              </div>
              <div className="z-10 flex gap-4">
                <button className="bg-secondary text-on-secondary px-6 py-3 rounded-lg font-label-lg text-label-lg hover:opacity-90 transition-opacity">View Active Polls</button>
                <button className="bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3 rounded-lg font-label-lg text-label-lg transition-all">Community Guidelines</button>
              </div>
              {/* Abstract Background Pattern */}
              <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute right-10 top-10 opacity-10">
                <span className="material-symbols-outlined text-[180px]" data-icon="hub">hub</span>
              </div>
            </div>

            {/* Pending Invitations Bento */}
            <div className="col-span-12 lg:col-span-4 bg-surface-container-high p-8 rounded-xl border border-outline-variant/30 flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <h4 className="font-headline-sm text-headline-sm text-primary">Invitations</h4>
                <span className="bg-secondary text-on-secondary text-xs font-bold px-2 py-1 rounded-full">2 New</span>
              </div>
              <div className="space-y-4 flex-1">
                {/* Invitation 1 */}
                <div className="p-4 bg-surface rounded-lg border border-outline-variant/20 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center">
                    <span className="material-symbols-outlined text-tertiary" data-icon="nature_people">nature_people</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-label-lg text-label-lg">Greenway Initiative</p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Invited by Bristol City</p>
                    <div className="flex gap-2 mt-3">
                      <button className="text-primary font-bold text-xs uppercase tracking-tight">Accept</button>
                      <button className="text-on-surface-variant text-xs uppercase tracking-tight">Ignore</button>
                    </div>
                  </div>
                </div>
                {/* Invitation 2 */}
                <div className="p-4 bg-surface rounded-lg border border-outline-variant/20 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary" data-icon="policy">policy</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-label-lg text-label-lg">Civic Oversight Board</p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Invited by Mark Thorne</p>
                    <div className="flex gap-2 mt-3">
                      <button className="text-primary font-bold text-xs uppercase tracking-tight">Accept</button>
                      <button className="text-on-surface-variant text-xs uppercase tracking-tight">Ignore</button>
                    </div>
                  </div>
                </div>
              </div>
              <button className="w-full text-center py-2 mt-4 text-primary font-label-lg text-label-lg hover:underline transition-all">Explore All Communities</button>
            </div>
          </div>

          {/* Management Section */}
          <div className="grid grid-cols-12 gap-gutter items-start">
            {/* Joined Communities Table-Style Management */}
            <div className="col-span-12 lg:col-span-8">
              <div className="flex justify-between items-end mb-8">
                <div>
                  <h3 className="font-headline-md text-headline-md text-primary">Your Active Networks</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">Managed communities where you hold active membership.</p>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 border border-outline-variant rounded hover:bg-surface-container transition-colors">
                    <span className="material-symbols-outlined" data-icon="filter_list">filter_list</span>
                  </button>
                  <button className="p-2 border border-outline-variant rounded hover:bg-surface-container transition-colors">
                    <span className="material-symbols-outlined" data-icon="sort">sort</span>
                  </button>
                </div>
              </div>
              <div className="space-y-4">
                {/* Community Item */}
                <div className="group bg-surface rounded-xl border border-outline-variant/30 p-6 flex flex-col md:flex-row items-center gap-6 hover:border-primary/50 transition-all">
                  <img className="w-full md:w-32 h-32 object-cover rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCStbUlGtFbUlxGQXFTaPhMtxNHuAyqouq3sIUogSJYpQj1yMb0cmeb3nomBXsniCRyhO4Hnl1sFMyASAZ6EJ_rMMQ_0J7WwdvQDVsgJ5pdgEkbQ1at7GDqHei0tRyJg7vCpxQg7wjfPupRMwnZRsta0rxacGQPXa5QjzmKd9pGwvwdjbTaAVSGYWnXbH-72GFSqp0ihYePyCNMXuEdTqnbVaka4NEyJgS4mGdG5Gp01zIRTCttn5wxmaHc1lUro5HXJcy_yXvX4_wK" alt="Bristol Heritage Council" />
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                      <h4 className="font-headline-sm text-headline-sm text-primary">Bristol Heritage Council</h4>
                      <span className="bg-primary-fixed text-on-primary-fixed text-[10px] px-2 py-0.5 rounded font-bold uppercase">Official</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">Protecting the architectural legacy and cultural identity of North Bristol through citizen oversight.</p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                      <div className="flex items-center gap-1 text-on-surface-variant">
                        <span className="material-symbols-outlined text-sm" data-icon="groups">groups</span>
                        <span className="font-label-md text-label-md">2.4k Members</span>
                      </div>
                      <div className="flex items-center gap-1 text-on-surface-variant">
                        <span className="material-symbols-outlined text-sm" data-icon="stars">stars</span>
                        <span className="font-label-md text-label-md">Trusted Member</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col gap-2">
                    <button className="px-4 py-2 bg-primary text-white rounded-lg font-label-lg text-label-lg hover:bg-primary-container transition-colors">Dashboard</button>
                    <button className="px-4 py-2 border border-outline-variant rounded-lg font-label-lg text-label-lg hover:bg-surface-container transition-colors">Settings</button>
                  </div>
                </div>
                {/* Community Item 2 */}
                <div className="group bg-surface rounded-xl border border-outline-variant/30 p-6 flex flex-col md:flex-row items-center gap-6 hover:border-primary/50 transition-all">
                  <img className="w-full md:w-32 h-32 object-cover rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwIXLNO6H8d-HAey2umPkWDVx90NKaDEg4q1qSZ488nVJPEPb7OFjcYnmjyyx4hEhd55lRXqMyROiyeS1lUqEggJC7cD1Ku0pJlbmFdQiePyO9eYc82BAxJGtOLNTvyAJLR38jqJJlQ8CHw6hjsLqzNbkbF8R5z4WCBHqkAGcu-Wp4OpSofeltS-C8Ca9u4MFHoRlh_WnmnFq6xQmZmTPNP5HK-8XnpAzt426KLVb9XkCyoBQhJNaOnuWJZUmtWI6G05Ay4hm3-RAn" alt="Urban Tech Commons" />
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                      <h4 className="font-headline-sm text-headline-sm text-primary">Urban Tech Commons</h4>
                      <span className="bg-tertiary-fixed text-on-tertiary-fixed text-[10px] px-2 py-0.5 rounded font-bold uppercase">Open Source</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">A collective of developers and policy makers building the digital infrastructure for future governance.</p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                      <div className="flex items-center gap-1 text-on-surface-variant">
                        <span className="material-symbols-outlined text-sm" data-icon="groups">groups</span>
                        <span className="font-label-md text-label-md">842 Members</span>
                      </div>
                      <div className="flex items-center gap-1 text-on-surface-variant">
                        <span className="material-symbols-outlined text-sm" data-icon="verified_user">verified_user</span>
                        <span className="font-label-md text-label-md">Admin</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col gap-2">
                    <button className="px-4 py-2 bg-primary text-white rounded-lg font-label-lg text-label-lg hover:bg-primary-container transition-colors">Dashboard</button>
                    <button className="px-4 py-2 border border-outline-variant rounded-lg font-label-lg text-label-lg hover:bg-surface-container transition-colors">Settings</button>
                  </div>
                </div>
                {/* Community Item 3 */}
                <div className="group bg-surface rounded-xl border border-outline-variant/30 p-6 flex flex-col md:flex-row items-center gap-6 hover:border-primary/50 transition-all">
                  <img className="w-full md:w-32 h-32 object-cover rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFQUSW41MEAYQdM7UasJZ8I6f1NwnfTb0RNJXx5qZ-edTqC5mh5wIePDmJCfkK2YSruxlz9J7JDlj4ixxj3Y_QA15DOyoThVW5mr6nyDLur183eEu_674eWbF5cM8ahSduqTZKCsjfclUe4qy-C5b_hZ91KPdJRxUOy4FKL7-YIFaFCiTJdjjXOaFNWRYvTRx3YBrVv5KY0pix6ZQBintPVveg8M75vIMng5ebi3Dpv_hnHy8Pp-fgeUMvbDdTTVlNr85f0pvTt-k" alt="Green Way Project" />
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                      <h4 className="font-headline-sm text-headline-sm text-primary">Green Way Project</h4>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">Dedicated to increasing the biodiversity and recreational space in the inner city through local effort.</p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                      <div className="flex items-center gap-1 text-on-surface-variant">
                        <span className="material-symbols-outlined text-sm" data-icon="groups">groups</span>
                        <span className="font-label-md text-label-md">1.2k Members</span>
                      </div>
                      <div className="flex items-center gap-1 text-on-surface-variant">
                        <span className="material-symbols-outlined text-sm" data-icon="group_add">group_add</span>
                        <span className="font-label-md text-label-md">Member</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col gap-2">
                    <button className="px-4 py-2 bg-primary text-white rounded-lg font-label-lg text-label-lg hover:bg-primary-container transition-colors">Dashboard</button>
                    <button className="px-4 py-2 border border-outline-variant rounded-lg font-label-lg text-label-lg hover:bg-surface-container transition-colors">Settings</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar: Meetings & Activity */}
            <div className="col-span-12 lg:col-span-4 space-y-gutter">
              {/* Upcoming Meetings */}
              <div className="bg-surface p-8 rounded-xl border border-outline-variant/30">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="font-headline-sm text-headline-sm text-primary">Local Meetings</h4>
                  <span className="material-symbols-outlined text-on-surface-variant cursor-pointer" data-icon="calendar_month">calendar_month</span>
                </div>
                <div className="space-y-6">
                  {/* Meeting 1 */}
                  <div className="relative pl-6 border-l-2 border-secondary">
                    <p className="text-secondary font-bold text-xs uppercase mb-1">Tomorrow, 18:30</p>
                    <h5 className="font-label-lg text-label-lg mb-1 leading-tight">Town Hall Q&amp;A: Public Transport Reform</h5>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Main Hall, Bristol North</p>
                    <div className="mt-3 flex items-center gap-2">
                      <div className="flex -space-x-2">
                        <div className="w-6 h-6 rounded-full border-2 border-surface bg-primary-fixed flex items-center justify-center text-[10px] font-bold">JD</div>
                        <div className="w-6 h-6 rounded-full border-2 border-surface bg-secondary-fixed flex items-center justify-center text-[10px] font-bold">AM</div>
                        <div className="w-6 h-6 rounded-full border-2 border-surface bg-tertiary-fixed flex items-center justify-center text-[10px] font-bold">+12</div>
                      </div>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">attending</span>
                    </div>
                  </div>
                  {/* Meeting 2 */}
                  <div className="relative pl-6 border-l-2 border-primary">
                    <p className="text-primary font-bold text-xs uppercase mb-1">Friday, 14:00</p>
                    <h5 className="font-label-lg text-label-lg mb-1 leading-tight">Urban Tech: Infrastructure Sprint</h5>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Digital Commons (Online)</p>
                    <button className="mt-3 text-primary font-bold text-xs flex items-center gap-1 group">
                      Join Link <span className="material-symbols-outlined text-xs group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Campaign Goals Progress Card */}
              <div className="bg-surface p-8 rounded-xl border border-outline-variant/30">
                <h4 className="font-headline-sm text-headline-sm text-primary mb-2">Campaign Impact</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-6">Collective progress towards regional goals.</p>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-xs font-bold mb-2">
                      <span className="uppercase tracking-wide">Heritage Fund</span>
                      <span>72%</span>
                    </div>
                    <div className="h-2 w-full bg-tertiary-fixed/30 rounded-full overflow-hidden">
                      <div className="h-full bg-secondary rounded-full" style={{ width: '72%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-bold mb-2">
                      <span className="uppercase tracking-wide">Digital Literacy Initiative</span>
                      <span>45%</span>
                    </div>
                    <div className="h-2 w-full bg-tertiary-fixed/30 rounded-full overflow-hidden">
                      <div className="h-full bg-secondary rounded-full" style={{ width: '45%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map/Location Shortcut */}
              <div className="relative h-48 rounded-xl overflow-hidden group">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAb1ReNtZiaHvHF2_7OCkwb-nOU0cTaxedWCfSDQFZ85NhrHGD3Ge87lP74lXNreaACNhY9qkeR4HcoUQ_eqK2sUm6xKOUrag-HKcerbGzpFnfNuljD95IhjrcFlkdexr3Jmu0wFnsCBJVMD2vHBGC_oA8u2wXdqqEeBgZvHL61MOZxai9Cdt31Fa9Y2z-3Jv9pzupsnsex5Fz0xzBq0tLOuM9q7MPZYCC5r1aRKD43HPkkXv2tXoS4QQbljYHUnzovzH7nl3hfKML_" alt="Interactive Map" />
                <div className="absolute inset-0 bg-primary/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                  <span className="bg-white text-primary px-4 py-2 rounded-lg font-bold text-sm">Open Interactive Map</span>
                </div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded border border-outline-variant/30">
                  <p className="text-[10px] font-bold uppercase text-primary">Viewing Region</p>
                  <p className="text-sm font-bold">Bristol North</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="w-full py-16 bg-surface-container-highest border-t border-outline-variant/30 mt-12">
          <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter">
            <div className="col-span-1 md:col-span-1">
              <h3 className="font-headline-sm text-headline-sm text-primary mb-4">BOOT OS</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Visionary Tradition for the modern citizen. Built to last for generations.</p>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="font-label-lg text-label-lg text-primary uppercase tracking-wider mb-2">Platform</h4>
              <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary underline transition-all" href="#">Transparency Report</a>
              <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary underline transition-all" href="#">Governance Model</a>
              <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary underline transition-all" href="#">API Access</a>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="font-label-lg text-label-lg text-primary uppercase tracking-wider mb-2">Legal</h4>
              <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary underline transition-all" href="#">Privacy Policy</a>
              <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary underline transition-all" href="#">Terms of Service</a>
              <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary underline transition-all" href="#">Data Rights</a>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="font-label-lg text-label-lg text-primary uppercase tracking-wider mb-2">Connect</h4>
              <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary underline transition-all" href="#">Contact Us</a>
              <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary underline transition-all" href="#">Help Center</a>
              <div className="flex gap-4 mt-2">
                <span className="material-symbols-outlined text-primary cursor-pointer hover:opacity-70 transition-opacity" data-icon="share">share</span>
                <span className="material-symbols-outlined text-primary cursor-pointer hover:opacity-70 transition-opacity" data-icon="mail">mail</span>
              </div>
            </div>
          </div>
          <div className="max-w-container-max mx-auto px-margin-desktop mt-12 pt-8 border-t border-outline-variant/10 text-center">
            <p className="font-body-sm text-body-sm text-on-surface-variant">© 2024 BOOT Civic Operating System. All Rights Reserved.</p>
          </div>
        </footer>
      </main>

      {/* FAB */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform active:scale-95 z-50 group">
        <span className="material-symbols-outlined text-3xl" data-icon="add">add</span>
        <span className="absolute right-16 bg-primary px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">Create Community</span>
      </button>
    </div>
  );
}
