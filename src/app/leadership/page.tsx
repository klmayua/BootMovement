import React from 'react';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

export default function LeadershipPage() {
  return (
    <PublicLayout>
      <div className="flex flex-col min-h-screen overflow-x-hidden">
        <section className="py-12 md:py-20 px-4 bg-surface">
          <div className="max-w-7xl mx-auto space-y-12 md:space-y-20">
            <div className="text-center space-y-6">
              <Typography variant="label-lg" className="text-accent">Meritocratic Governance</Typography>
              <Typography variant="display-lg" className="text-primary text-display-md md:text-display-lg">Our Leadership Model</Typography>
              <Typography variant="body-lg" className="text-neutral/80 max-w-3xl mx-auto text-body-md md:text-body-lg">
                In BOOT, leadership is not a status symbol or a tool for power. It is a responsibility 
                earned through a proven track record of community impact.
              </Typography>
            </div>

            {/* Leadership Philosophy */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-center lg:text-left">
                <Typography variant="headline-lg" className="text-primary text-headline-md md:text-headline-lg">From 'Rulers' to 'Stewards'</Typography>
                <Typography variant="body-md" className="text-neutral/80 leading-relaxed">
                  Traditional politics treats leaders as superiors. BOOT treats leaders as stewards. 
                  A steward is someone entrusted with the management of resources for the benefit of others.
                </Typography>
                <ul className="space-y-4">
                  {[
                    { title: 'Impact-Based Selection', desc: 'Leaders are identified by their contribution to the community.' },
                    { title: 'Term-Limited Service', desc: 'Leadership is a temporary duty, not a permanent career.' },
                    { title: 'Radical Accountability', desc: 'Leaders must publish performance metrics and budget spend.' },
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 p-4 rounded-xl bg-surface-container border border-accent/20 active:scale-95 transition-transform">
                      <span className="text-primary font-bold">{i+1}.</span>
                      <div>
                        <Typography variant="label-md" className="text-primary">{item.title}</Typography>
                        <Typography variant="body-sm" className="text-neutral/70">{item.desc}</Typography>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-primary rounded-3xl p-8 md:p-12 text-surface-container space-y-8 text-center lg:text-left">
                <Typography variant="headline-md" className="text-white text-headline-sm md:text-headline-md">The Stewardship Oath</Typography>
                <Typography variant="body-lg" className="italic text-surface-container/80 text-body-md md:text-body-lg">
                  "I accept this responsibility not as a privilege, but as a duty. I pledge to be transparent in 
                  my actions, humble in my authority, and tireless in my pursuit of the common good. 
                  My success is measured not by my rank, but by the tangible improvement in the lives 
                  of the people I serve."
                </Typography>
                <div className="flex items-center justify-center lg:justify-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent" />
                  <div>
                    <p className="font-bold text-white">The BOOT Leadership Council</p>
                    <p className="text-sm text-surface-container/60">Guardians of the Thesis</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Leadership Pipeline */}
            <div className="space-y-12">
              <div className="text-center">
                <Typography variant="headline-lg" className="text-primary text-headline-md md:text-headline-lg">The Leadership Pipeline</Typography>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { step: 'Citizen', desc: 'Active participant in community hubs.', icon: '👤' },
                  { step: 'Contributor', desc: 'Proven impact through local projects.', icon: '🛠️' },
                  { step: 'Steward', desc: 'Managing community-level resources.', icon: '📦' },
                  { step: 'Architect', desc: 'Designing national-scale policy.', icon: '🏛️' },
                ].map((stage, i) => (
                  <Card key={i} className="text-center p-6 border-b-4 border-b-primary active:scale-95 transition-transform">
                    <div className="text-3xl mb-4">{stage.icon}</div>
                    <Typography variant="headline-sm" className="text-primary mb-2">{stage.step}</Typography>
                    <Typography variant="body-sm" className="text-neutral/70">{stage.desc}</Typography>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </PublicLayout>
  );
}
