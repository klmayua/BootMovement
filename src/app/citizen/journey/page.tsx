import React from 'react';
import { PortalLayout } from '@/components/layout/PortalLayout';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { CITIZEN_NAV } from '@/constants/navigation';

export default function JourneyPage() {
  return (
    <PortalLayout portalName="Citizen Portal" navItems={CITIZEN_NAV}>

      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center space-y-6">
          <Typography variant="label-lg" className="text-accent">Path to Citizenship</Typography>
          <Typography variant="display-lg" className="text-primary">True Nigerian Journey</Typography>
          <Typography variant="body-lg" className="text-neutral/80">
            Your growth in the movement is measured by impact, not just tenure. 
            Advance through the levels by embodying the values of the Thesis.
          </Typography>
        </div>

        {/* Level Progress */}
        <div className="relative py-12">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-accent/20" />
          <div className="space-y-12">
            {[
              { 
                level: 'Level 1: The Seeker', 
                status: 'Completed', 
                reqs: ['Register as a Citizen', 'Read the BOOT Thesis', 'Join a local Hub'], 
                date: 'Feb 2025', 
                color: 'bg-primary' 
              },
              { 
                level: 'Level 2: The Contributor', 
                status: 'Completed', 
                reqs: ['Volunteer for 20 hours', 'Complete first community project', 'Take the True Nigerian Pledge'], 
                date: 'May 2025', 
                color: 'bg-primary' 
              },
              { 
                level: 'Level 3: The Steward', 
                status: 'Completed', 
                reqs: ['Manage a local project budget', 'Mentor 3 new members', 'Lead a town hall session'], 
                date: 'Nov 2025', 
                color: 'bg-primary' 
              },
              { 
                level: 'Level 4: The Architect', 
                status: 'Current', 
                reqs: ['Propose a national-scale policy', 'Lead a multi-hub collaboration', 'Verified Impact score > 800'], 
                date: 'In Progress', 
                color: 'bg-secondary' 
              },
              { 
                level: 'Level 5: The Visionary', 
                status: 'Locked', 
                reqs: ['Sustained high-impact leadership', 'Contribution to the National Thesis', 'Peer-recognized stewardship'], 
                date: 'Locked', 
                color: 'bg-accent/20' 
              },
            ].map((step, i) => (
              <div key={i} className="relative pl-20">
                <div className={`absolute left-4 top-0 w-8 h-8 rounded-full border-4 border-surface ${step.color} flex items-center justify-center z-10`}>
                  {step.status === 'Completed' ? '✅' : step.status === 'Current' ? '⚡' : '🔒'}
                </div>
                <Card className={clsx('p-6 transition-all', step.status === 'Current' && 'ring-2 ring-secondary shadow-xl')}>
                  <CardContent className="p-0 space-y-4">
                    <div className="flex justify-between items-center">
                      <Typography variant="headline-sm" className="text-primary">{step.level}</Typography>
                      <span className="text-xs font-bold text-neutral/50 uppercase">{step.date}</span>
                    </div>
                    <div className="grid sm:grid-cols-3 gap-4">
                      {step.reqs.map((req, j) => (
                        <div key={j} className="flex items-center gap-2 text-xs text-neutral/70">
                          <span className={step.status === 'Completed' ? 'text-green-500' : 'text-accent'}>✓</span> {req}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PortalLayout>
  );
}
