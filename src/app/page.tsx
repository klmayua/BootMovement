import React from 'react';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <PublicLayout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Building Our Tomorrow
            </div>
            <Typography variant="display-lg" className="text-primary leading-tight">
              A Movement for <br />
              <span className="text-secondary">True Nigerian</span> Governance
            </Typography>
            <Typography variant="body-lg" className="text-neutral/80 max-w-xl">
              BOOT is more than a political party. It is a civic operating system designed to return power to the people, 
              ensuring transparency, accountability, and sustainable development for every community in Nigeria.
            </Typography>
            <div className="flex flex-wrap gap-4">
              <Link href="/join">
                <Button variant="action" size="lg">Join the Movement</Button>
              </Link>
              <Link href="/thesis">
                <Button variant="secondary" size="lg">Read the Thesis</Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/5 rounded-full blur-3xl" />
            <Image 
              src="/boot_logo_2022.png" 
              alt="BOOT Movement" 
              width={600} 
              height={600} 
              className="relative z-10 w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-surface-container px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Typography variant="headline-lg" className="text-primary">
            The Vision: Our Tomorrow
          </Typography>
          <Typography variant="body-lg" className="text-neutral/80 italic">
            "We do not seek to merely change leaders; we seek to change the system of leadership. 
            Our goal is a Nigeria where governance is a service, not a privilege, and where 
            every citizen is an active architect of their community's future."
          </Typography>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Typography variant="label-lg" className="text-accent">Core Pillars</Typography>
            <Typography variant="headline-lg" className="text-primary">The BOOT Framework</Typography>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'The Thesis',
                desc: 'A comprehensive intellectual framework for modern Nigerian governance.',
                link: '/thesis',
                icon: '📚'
              },
              {
                title: 'True Nigerian',
                desc: 'Redefining citizenship through responsibility, ethics, and community action.',
                link: '/true-nigerian',
                icon: '🇳🇬'
              },
              {
                title: 'Civic OS',
                desc: 'The technology and processes that enable transparent, real-time governance.',
                link: '/movement',
                icon: '⚙️'
              }
            ].map((pillar, i) => (
              <Card key={i} className="hover:border-primary transition-colors group">
                <CardContent className="p-8 space-y-4 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">
                    {pillar.icon}
                  </div>
                  <Typography variant="headline-sm" className="text-primary">
                    {pillar.title}
                  </Typography>
                  <Typography variant="body-md" className="text-neutral/70">
                    {pillar.desc}
                  </Typography>
                  <Link href={pillar.link}>
                    <Button variant="ghost" size="sm" className="group-hover:text-primary">
                      Learn More →
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Counter */}
      <section className="py-20 bg-primary text-surface-container px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: 'Active Citizens', value: '2.4M+' },
            { label: 'Verified Communities', value: '1,200+' },
            { label: 'Local Projects', value: '450+' },
            { label: 'True Nigerian Pledge', value: '850K+' },
          ].map((stat, i) => (
            <div key={i} className="space-y-2">
              <Typography variant="display-lg" className="text-white font-bold">
                {stat.value}
              </Typography>
              <Typography variant="label-md" className="text-surface-container/60 uppercase">
                {stat.label}
              </Typography>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8 bg-surface-container p-12 rounded-3xl border border-accent/20">
          <Typography variant="headline-lg" className="text-primary">
            Ready to claim your future?
          </Typography>
          <Typography variant="body-lg" className="text-neutral/80">
            Join thousands of True Nigerians building a new foundation for our nation.
          </Typography>
          <div className="flex justify-center gap-4">
            <Link href="/join">
              <Button variant="action" size="lg">Join the Movement</Button>
            </Link>
            <Link href="/volunteer">
              <Button variant="secondary" size="lg">Volunteer Now</Button>
            </Link>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
