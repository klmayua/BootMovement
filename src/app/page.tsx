import React from 'react';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <PublicLayout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 px-4 bg-surface overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 z-10">
            <div className="flex items-center gap-4 mb-8">
              <Image src="/boot_logo_2022.png" alt="BOOT Logo" width={60} height={60} className="object-contain" />
              <Typography variant="headline-md" className="text-primary font-serif font-bold">BOOT Movement</Typography>
            </div>
            
            <div className="space-y-4">
              <Typography variant="label-lg" className="text-accent uppercase tracking-widest">Nigeria's Future, Built Today</Typography>
              <Typography variant="display-lg" className="text-primary leading-tight">
                Because Of <br />
                <span className="text-secondary">Our Tomorrow</span>
              </Typography>
              <Typography variant="body-lg" className="text-neutral/80 max-w-xl leading-relaxed">
                A national movement for participation, leadership, accountability and shared progress. 
                Every boot on the ground is a step toward excellence.
              </Typography>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/join">
                <Button variant="action" size="lg" className="px-8 py-4">Join BOOT Movement →</Button>
              </Link>
              <Link href="/donate">
                <Button variant="secondary" size="lg" className="px-8 py-4">Explore Donate</Button>
              </Link>
            </div>
          </div>
          
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl" />
            <Image 
              src="/boot_logo_2022.png" 
              alt="BOOT Movement Logo" 
              width={600} 
              height={600} 
              className="relative z-10 w-full max-w-md h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary text-surface-container">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: 'Members', value: '2.4M' },
            { label: 'Volunteers', value: '85K' },
            { label: 'LGAs Active', value: '774' },
            { label: 'States', value: '36' },
          ].map((stat, i) => (
            <div key={i} className="space-y-1">
              <Typography variant="display-lg" className="text-white font-bold">{stat.value}</Typography>
              <Typography variant="label-md" className="text-surface-container/60 uppercase">{stat.label}</Typography>
            </div>
          ))}
        </div>
      </section>

      {/* Our Pillars */}
      <section className="py-24 px-4 bg-surface">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <Typography variant="headline-lg" className="text-primary">Our Pillars</Typography>
            <Typography variant="body-md" className="text-neutral/70">The foundation of a visionary nation.</Typography>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Mass Participation', desc: 'Direct involvement in democratic processes.', icon: '👥' },
              { title: 'Governance', desc: 'Transparent and accountable systems.', icon: '⚖️' },
              { title: 'Leadership', desc: 'Merit-based stewardship and service.', icon: '🏛️' },
              { title: 'National Development', desc: 'Evidence-based growth strategies.', icon: '📈' },
            ].map((pillar, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white border border-accent/20 text-center space-y-4 hover:border-primary transition-all group cursor-pointer">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">
                  {pillar.icon}
                </div>
                <Typography variant="headline-sm" className="text-primary">{pillar.title}</Typography>
                <Typography variant="body-sm" className="text-neutral/70">{pillar.desc}</Typography>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Movement Stories */}
      <section className="py-24 px-4 bg-surface-container">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex justify-between items-end">
            <div className="space-y-2">
              <Typography variant="headline-lg" className="text-primary">Movement Stories</Typography>
              <Typography variant="body-md" className="text-neutral/70">Real impact, real people.</Typography>
            </div>
            <Link href="/impact">
              <Button variant="ghost" size="sm">See All ↗</Button>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { 
                category: 'Community Impact', 
                title: 'The Lagos Youth Hub Success Story', 
                desc: 'How local grassroots organizing revitalized urban digital literacy programs...',
                img: '/boot_logo_2022.png'
              },
              { 
                category: 'Leadership', 
                title: 'Emerging Leaders Summit 2024', 
                desc: 'Identifying the next generation of accountable public servants for Nigeria.',
                img: '/boot_logo_2022.png'
              },
            ].map((story, i) => (
              <div key={i} className="overflow-hidden rounded-3xl border border-accent/20 bg-white group cursor-pointer">
                <div className="h-64 relative overflow-hidden">
                  <Image src={story.img} alt={story.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8 space-y-4">
                  <Typography variant="label-md" className="text-accent uppercase">{story.category}</Typography>
                  <Typography variant="headline-sm" className="text-primary">{story.title}</Typography>
                  <Typography variant="body-md" className="text-neutral/70 leading-relaxed">{story.desc}</Typography>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24 px-4 bg-surface">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center">
            <Typography variant="headline-lg" className="text-primary">Upcoming Events</Typography>
          </div>
          <div className="space-y-4">
            {[
              { month: 'Oct', day: '24', title: 'National Policy Dialogue', loc: 'Abuja, FCT', icon: '📍' },
              { month: 'Nov', day: '05', title: 'Diaspora Engagement Webinar', loc: 'Virtual / Global', icon: '📹' },
            ].map((event, i) => (
              <div key={i} className="flex items-center gap-6 p-6 rounded-3xl bg-surface-container border border-accent/20 hover:border-primary transition-colors cursor-pointer">
                <div className="flex flex-col items-center justify-center bg-primary text-white rounded-2xl w-16 h-16 shrink-0">
                  <span className="text-xs font-bold uppercase">{event.month}</span>
                  <span className="text-xl font-bold">{event.day}</span>
                </div>
                <div className="flex-grow space-y-1">
                  <Typography variant="headline-sm" className="text-primary">{event.title}</Typography>
                  <div className="flex items-center gap-2 text-sm text-neutral/60">
                    <span>{event.icon}</span> {event.loc}
                  </div>
                </div>
                <span className="text-primary text-xl">→</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Snapshot */}
      <section className="py-20 bg-surface-container px-4 border-y border-accent/20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 items-center">
          <div className="text-center md:text-left space-y-4">
            <Typography variant="headline-lg" className="text-primary">Impact Snapshot</Typography>
            <div className="space-y-2">
              <div className="flex justify-between items-center gap-8">
                <span className="text-neutral">Funded Projects</span>
                <span className="font-bold text-primary">142</span>
              </div>
              <div className="flex justify-between items-center gap-8">
                <span className="text-neutral">Trained Cadets</span>
                <span className="font-bold text-primary">12K+</span>
              </div>
            </div>
            <Button variant="secondary" size="sm">View Accountability Report</Button>
          </div>
          <div className="md:col-span-2 flex justify-center">
             <div className="w-64 h-64 rounded-full border-8 border-primary flex items-center justify-center text-center p-8 relative">
               <div className="absolute inset-0 rounded-full border-8 border-accent opacity-20 scale-110" />
               <div>
                 <Typography variant="display-lg" className="text-primary font-bold">BOOT</Typography>
                 <Typography variant="label-md" className="text-neutral/60 uppercase">Accountability</Typography>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Diaspora Connection */}
      <section className="py-24 px-4 bg-surface">
        <div className="max-w-5xl mx-auto rounded-3xl bg-primary text-surface-container p-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="relative z-10 space-y-8 text-center max-w-2xl mx-auto">
            <Typography variant="headline-lg" className="text-white">The Diaspora Connection</Typography>
            <Typography variant="body-lg" className="text-surface-container/80">
              Nigeria is larger than its borders. Join the global network of BOOT members to support candidates, 
              mentor youth hubs, and provide strategic advisory from anywhere in the world.
            </Typography>
            <Button variant="secondary" size="lg" className="px-12 py-4 text-white border-white hover:bg-white hover:text-primary">
              Join Diaspora Wing
            </Button>
          </div>
        </div>
      </section>

      {/* Final Footer CTA */}
      <section className="py-24 px-4 text-center bg-surface">
        <div className="max-w-3xl mx-auto space-y-12">
          <Typography variant="display-lg" className="text-primary">Be the change you seek.</Typography>
          <Typography variant="body-lg" className="text-neutral/80">
            The BOOT Movement is powered by ordinary citizens doing extraordinary things.
          </Typography>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/join">
              <Button variant="action" size="lg" className="px-12 py-4">Become a Volunteer</Button>
            </Link>
            <Link href="/donate">
              <Button variant="secondary" size="lg" className="px-12 py-4">Donate to the Cause</Button>
            </Link>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
