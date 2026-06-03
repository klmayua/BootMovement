import React from 'react';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import Link from 'next/link';

export default function CommunitiesPage() {

  return (
    <PublicLayout>
      <section className="py-20 px-4 bg-surface">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <Typography variant="label-lg" className="text-accent">Localized Governance</Typography>
            <Typography variant="display-lg" className="text-primary">Our Communities</Typography>
            <Typography variant="body-lg" className="text-neutral/80 max-w-3xl mx-auto">
              BOOT operates through a network of Community Hubs. These are the laboratories of 
              democracy where policies are tested and impact is delivered.
            </Typography>
          </div>

          {/* Stats */}
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            {[
              { label: 'Active Hubs', value: '1,240' },
              { label: 'Community Members', value: '2.1M' },
              { label: 'Local Projects', value: '480' },
            ].map((stat, i) => (
              <div key={i} className="p-8 rounded-3xl bg-surface-container border border-accent/20 space-y-2">
                <Typography variant="display-lg" className="text-primary font-bold">{stat.value}</Typography>
                <Typography variant="label-md" className="text-neutral/60 uppercase">{stat.label}</Typography>
              </div>
            ))}
          </div>

          {/* Feature Hubs */}
          <div className="space-y-12">
            <div className="flex justify-between items-end">
              <div className="space-y-2">
                <Typography variant="headline-lg" className="text-primary">Featured Community Hubs</Typography>
                <Typography variant="body-md" className="text-neutral/70">Exemplars of the BOOT framework in action.</Typography>
              </div>
              <Link href="/communities/directory">
                <Button variant="ghost">View All Hubs →</Button>
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { 
                  name: 'Lagos Mainland Hub', 
                  focus: 'Urban Infrastructure & Tech', 
                  impact: 'Deployed 3 community-led waste management systems.',
                  members: '12.5k' 
                },
                { 
                  name: 'Enugu North Hub', 
                  focus: 'Agricultural Innovation', 
                  impact: 'Increased crop yield for 400 local farmers via BOOT cooperatives.',
                  members: '8.2k' 
                },
                { 
                  name: 'Kano Central Hub', 
                  focus: 'Youth Entrepreneurship', 
                  impact: 'Launched 15 youth-led micro-enterprises in the textile sector.',
                  members: '15.1k' 
                },
                { 
                  name: 'Port Harcourt Hub', 
                  focus: 'Environmental Restoration', 
                  impact: 'Initiated mangrove restoration project with 200 volunteers.',
                  members: '9.8k' 
                },
              ].map((hub, i) => (
                <Card key={i} className="hover:border-primary transition-colors">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex justify-between items-start">
                      <Typography variant="headline-sm" className="text-primary">{hub.name}</Typography>
                      <span className="px-2 py-1 rounded bg-accent/10 text-accent text-xs font-bold">{hub.members} members</span>
                    </div>
                    <Typography variant="label-md" className="text-accent">{hub.focus}</Typography>
                    <Typography variant="body-md" className="text-neutral/70 leading-relaxed">
                      {hub.impact}
                    </Typography>
                    <Button variant="ghost" size="sm">Visit Hub Dashboard →</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Start a Hub */}
          <div className="bg-primary text-surface-container rounded-3xl p-12 text-center space-y-8">
            <Typography variant="headline-lg" className="text-white">Start Your Own Hub</Typography>
            <Typography variant="body-lg" className="text-surface-container/70 max-w-2xl mx-auto">
              Do you have a group of committed True Nigerians in your area? 
              Establish a BOOT Community Hub and begin the journey of local governance.
            </Typography>
            <Button variant="action" size="lg" className="px-12">Apply to Start a Hub</Button>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
