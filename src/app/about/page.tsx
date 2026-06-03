import React from 'react';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

export default function AboutPage() {
  return (
    <PublicLayout>
      <section className="py-20 px-4 bg-surface">
        <div className="max-w-7xl mx-auto space-y-20">
          {/* Header */}
          <div className="text-center space-y-6">
            <Typography variant="label-lg" className="text-accent">Our Identity</Typography>
            <Typography variant="display-lg" className="text-primary">
              About BOOT Movement
            </Typography>
            <Typography variant="body-lg" className="text-neutral/80 max-w-3xl mx-auto">
              The BOOT Movement is a systemic response to the failure of traditional politics in Nigeria. 
              We are building a civic architecture that prioritizes merit, transparency, and community-led development.
            </Typography>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-12">
            <Card variant="elevated">
              <CardContent className="p-10 space-y-6">
                <div className="text-4xl">🎯</div>
                <Typography variant="headline-md" className="text-primary">Our Mission</Typography>
                <Typography variant="body-md" className="text-neutral/80 leading-relaxed">
                  To establish a decentralized but coordinated network of citizens who act as the 
                  primary architects of governance, ensuring that policies are derived from 
                  actual community needs rather than top-down mandates.
                </Typography>
              </CardContent>
            </Card>
            <Card variant="elevated">
              <CardContent className="p-10 space-y-6">
                <div className="text-4xl">🔭</div>
                <Typography variant="headline-md" className="text-primary">Our Vision</Typography>
                <Typography variant="body-md" className="text-neutral/80 leading-relaxed">
                  A Nigeria where the state serves as an efficient infrastructure for human flourishing, 
                  where power is transparently managed, and where every True Nigerian has a 
                  meaningful voice in the direction of their community.
                </Typography>
              </CardContent>
            </Card>
          </div>

          {/* Values */}
          <div className="space-y-12">
            <div className="text-center">
              <Typography variant="headline-lg" className="text-primary">Our Core Values</Typography>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { value: 'Radical Transparency', desc: 'Every decision and kobo spent is traceable and public.', icon: '🔍' },
                { value: 'Meritocratic Leadership', desc: 'Leadership is earned through proven impact, not patronage.', icon: '🏆' },
                { value: 'Community Sovereignty', desc: 'Local solutions for local problems, coordinated nationally.', icon: '🏘️' },
                { value: 'Civic Responsibility', desc: 'Rights are paired with duties to the collective good.', icon: '🤝' },
              ].map((item, i) => (
                <Card key={i} className="text-center p-6 hover:border-primary transition-colors">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <Typography variant="headline-sm" className="text-primary mb-2">
                    {item.value}
                  </Typography>
                  <Typography variant="body-sm" className="text-neutral/70">
                    {item.desc}
                  </Typography>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary text-surface-container rounded-3xl p-12 text-center space-y-8">
            <Typography variant="headline-lg" className="text-white">
              Be Part of the Solution
            </Typography>
            <Typography variant="body-lg" className="text-surface-container/70 max-w-2xl mx-auto">
              We are not looking for followers; we are looking for architects. 
              Join us in building the system that will serve generations to come.
            </Typography>
            <div className="flex justify-center gap-4">
              <Button variant="action" size="lg">Join BOOT Now</Button>
              <Button variant="secondary" size="lg" className="text-white border-white hover:bg-white hover:text-primary">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
