import React from 'react';
import { PortalLayout } from '@/components/layout/PortalLayout';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

const volunteerNav = [
  { name: 'Volunteer Dashboard', href: '/volunteer/dashboard', icon: '🛠️' },
  { name: 'Opportunities', href: '/volunteer/opportunities', icon: '🌟' },
  { name: 'My Work', href: '/volunteer/work', icon: '📋' },
  { name: 'My Events', href: '/volunteer/events', icon: '📅' },
  { name: 'Rewards', href: '/volunteer/rewards', icon: '🏅' },
];

export default function VolunteerOpportunities() {
  return (
    <PortalLayout portalName="Volunteer Portal" navItems={volunteerNav}>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <Typography variant="headline-lg" className="text-primary">Open Opportunities</Typography>
          <div className="flex gap-2">
            <Button variant="ghost" size="sm">Near Me</Button>
            <Button variant="ghost" size="sm">Remote</Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              title: 'Solar Grid Installer', 
              hub: 'Lagos Mainland', 
              impact: 'Critical', 
              points: '500 XP', 
              desc: 'Help install 10 new solar arrays in underserved areas.' 
            },
            { 
              title: 'Youth Mentor', 
              hub: 'Enugu North', 
              impact: 'Medium', 
              points: '300 XP', 
              desc: 'Guide 5 students through the Civic OS training program.' 
            },
            { 
              title: 'Truth Verifier', 
              hub: 'Virtual', 
              impact: 'High', 
              points: '400 XP', 
              desc: 'Review and verify community reports on infrastructure.' 
            },
            { 
              title: 'Town Hall Moderator', 
              hub: 'Kano Central', 
              impact: 'High', 
              points: '350 XP', 
              desc: 'Facilitate the June 20th strategy session.' 
            },
            { 
              title: 'Health Clinic Assistant', 
              hub: 'Port Harcourt', 
              impact: 'Critical', 
              points: '600 XP', 
              desc: 'Coordinate patient flow at the mobile health clinic.' 
            },
            { 
              title: 'Data Entry Clerk', 
              hub: 'Virtual', 
              impact: 'Low', 
              points: '200 XP', 
              desc: 'Digitize physical records from rural hubs.' 
            },
          ].map((opp, i) => (
            <Card key={i} className="hover:border-primary transition-all">
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <Typography variant="headline-sm" className="text-primary">{opp.title}</Typography>
                  <span className="text-xs font-bold text-accent">{opp.points}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral/60">
                  <span>📍</span> {opp.hub}
                </div>
                <Typography variant="body-sm" className="text-neutral/70 leading-relaxed">
                  {opp.desc}
                </Typography>
                <div className="flex justify-between items-center pt-4 border-t border-accent/10">
                  <span className={`text-[10px] font-bold uppercase ${opp.impact === 'Critical' ? 'text-secondary' : 'text-neutral'}`}>
                    Impact: {opp.impact}
                  </span>
                  <Button variant="primary" size="sm">Apply Now</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PortalLayout>
  );
}
