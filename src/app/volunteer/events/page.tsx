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

export default function MyEventsPage() {
  return (
    <PortalLayout portalName="Volunteer Portal" navItems={volunteerNav}>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <Typography variant="headline-lg" className="text-primary">My Registered Events</Typography>
          <Button variant="primary" size="sm">Browse All Events</Button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { 
              title: 'National Strategy Summit', 
              date: 'June 15, 2026', 
              time: '10:00 AM', 
              loc: 'Abuja Hub', 
              role: 'Facilitator' 
            },
            { 
              title: 'Lagos Clean-up Drive', 
              date: 'June 22, 2026', 
              time: '7:00 AM', 
              loc: 'Ikeja', 
              role: 'Team Lead' 
            },
            { 
              title: 'Civic OS Webinar', 
              date: 'June 28, 2026', 
              time: '6:00 PM', 
              loc: 'Virtual', 
              role: 'Attendee' 
            },
          ].map((event, i) => (
            <Card key={i} className="p-6 space-y-4 border-l-4 border-l-accent">
              <div className="flex justify-between items-start">
                <Typography variant="headline-sm" className="text-primary">{event.title}</Typography>
                <span className="text-xs font-bold text-neutral/50">{event.date}</span>
              </div>
              <div className="flex gap-4 text-sm text-neutral/70">
                <span>📍 {event.loc}</span>
                <span>⏰ {event.time}</span>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-accent/10">
                <span className="text-xs font-bold text-accent uppercase">Role: {event.role}</span>
                <Button variant="ghost" size="sm">Manage RSVP →</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </PortalLayout>
  );
}
