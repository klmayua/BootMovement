import React from 'react';
import { PortalLayout } from '@/components/layout/PortalLayout';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

export default function ProjectsPage() {
  return (
    <PortalLayout>
      <div className="space-y-12">
        <div className="flex justify-between items-center">
          <div>
            <Typography variant="headline-lg" className="text-primary">Community Projects</Typography>
            <Typography variant="body-md" className="text-neutral/70">Track and contribute to local impact initiatives.</Typography>
          </div>
          <Button variant="primary" size="sm">Propose Project</Button>
        </div>

        {/* Active Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              title: 'Solar Street Lighting', 
              hub: 'Lagos Mainland', 
              goal: '₦1.2M', 
              raised: '₦850k', 
              progress: 70, 
              status: 'Funding' 
            },
            { 
              title: 'Youth Coding Bootcamp', 
              hub: 'Enugu North', 
              goal: '₦500k', 
              raised: '₦500k', 
              progress: 100, 
              status: 'Executing' 
            },
            { 
              title: 'Market Waste System', 
              hub: 'Kano Central', 
              goal: '₦3M', 
              raised: '₦1.1M', 
              progress: 36, 
              status: 'Funding' 
            },
            { 
              title: 'Mobile Health Clinic', 
              hub: 'Cross River', 
              goal: '₦10M', 
              raised: '₦2M', 
              progress: 20, 
              status: 'Planning' 
            },
            { 
              title: 'Clean Water Boreholes', 
              hub: 'Katsina Hub', 
              goal: '₦2.5M', 
              raised: '₦2.5M', 
              progress: 100, 
              status: 'Completed' 
            },
            { 
              title: 'Agri-Coop Warehouse', 
              hub: 'Benue State', 
              goal: '₦8M', 
              raised: '₦4M', 
              progress: 50, 
              status: 'Executing' 
            },
          ].map((proj, i) => (
            <Card key={i} className="hover:border-primary transition-all">
              <CardContent className="p-6 space-y-6">
                <div className="flex justify-between items-start">
                  <Typography variant="headline-sm" className="text-primary">{proj.title}</Typography>
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${proj.status === 'Completed' ? 'bg-green-100 text-green-700' : proj.status === 'Executing' ? 'bg-blue-100 text-blue-700' : 'bg-yellow-100 text-yellow-700'}`}>
                    {proj.status}
                  </span>
                </div>
                
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-bold text-neutral">
                    <span>{proj.hub}</span>
                    <span>{proj.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: `${proj.progress}%` }} />
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-accent/10">
                  <div className="text-sm">
                    <span className="text-neutral/60">Raised: </span>
                    <span className="font-bold text-neutral">{proj.raised} / {proj.goal}</span>
                  </div>
                  <Button variant="ghost" size="sm">Details →</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PortalLayout>
  );
}
