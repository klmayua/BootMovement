import React from 'react';
import { PortalLayout } from '@/components/layout/PortalLayout';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { CITIZEN_NAV } from '@/constants/navigation';

export default function CommunitiesPage() {
  return (
    <PortalLayout portalName="Citizen Portal" navItems={CITIZEN_NAV}>

      <div className="space-y-12">
        <div className="flex justify-between items-center">
          <div>
            <Typography variant="headline-lg" className="text-primary">My Communities</Typography>
            <Typography variant="body-md" className="text-neutral/70">Manage your membership and contributions to local hubs.</Typography>
          </div>
          <Button variant="primary" size="sm">Join New Hub</Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            { 
              name: 'Lagos Mainland Hub', 
              role: 'Active Member', 
              status: 'Verified', 
              progress: 85, 
              tasks: 12, 
              impact: 'High' 
            },
            { 
              name: 'Enugu North Hub', 
              role: 'Contributor', 
              status: 'Pending Review', 
              progress: 40, 
              tasks: 5, 
              impact: 'Medium' 
            },
            { 
              name: 'Youth Tech Network', 
              role: 'Hub Lead', 
              status: 'Verified', 
              progress: 100, 
              tasks: 28, 
              impact: 'Critical' 
            },
          ].map((hub, i) => (
            <Card key={i} className="hover:border-primary transition-all">
              <CardContent className="p-6 space-y-6">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <Typography variant="headline-sm" className="text-primary">{hub.name}</Typography>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-medium text-neutral">{hub.role}</span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${hub.status === 'Verified' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                        {hub.status}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <Typography variant="label-md" className="text-accent uppercase">Impact: {hub.impact}</Typography>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold text-neutral">
                    <span>Community Standing</span>
                    <span>{hub.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: `${hub.progress}%` }} />
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-accent/10">
                  <span className="text-sm text-neutral/70">{hub.tasks} Tasks Completed</span>
                  <Button variant="ghost" size="sm">Open Hub Portal →</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PortalLayout>
  );
}
