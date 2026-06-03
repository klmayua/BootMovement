import React from 'react';
import { PortalLayout } from '@/components/layout/PortalLayout';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { clsx } from 'clsx';
import { CITIZEN_NAV } from '@/constants/navigation';

export default function NotificationsPage() {
  return (
    <PortalLayout portalName="Citizen Portal" navItems={CITIZEN_NAV}>

      <div className="max-w-3xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <Typography variant="headline-lg" className="text-primary">Notifications</Typography>
          <Button variant="ghost" size="sm">Mark all as read</Button>
        </div>

        <div className="space-y-4">
          {[
            { 
              title: 'New Project Funding Goal', 
              desc: 'Lagos Mainland Hub has started a new project: Solar Street Lighting.', 
              time: '10m ago', 
              type: 'project', 
              unread: true 
            },
            { 
              title: 'True Nigerian Milestone', 
              desc: 'You have reached Level 4! Check your new badges in your profile.', 
              time: '2h ago', 
              type: 'achievement', 
              unread: true 
            },
            { 
              title: 'Thesis Update', 
              desc: 'The Leadership Council has published a new amendment to Chapter 4.', 
              time: '5h ago', 
              type: 'update', 
              unread: false 
            },
            { 
              title: 'Message from Sani Musa', 
              desc: 'The project plan is ready for your review.', 
              time: '1d ago', 
              type: 'message', 
              unread: false 
            },
            { 
              title: 'Upcoming Town Hall', 
              desc: 'Reminder: National Town Hall starts in 24 hours.', 
              time: '2d ago', 
              type: 'event', 
              unread: false 
            },
          ].map((notif, i) => (
            <Card key={i} className={clsx('transition-colors', notif.unread && 'bg-primary/5 border-primary/30')}>
              <CardContent className="p-4 flex gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xl ${notif.unread ? 'bg-primary text-white' : 'bg-surface-container text-neutral'}`}>
                  {notif.type === 'project' ? '🏗️' : notif.type === 'achievement' ? '🏆' : notif.type === 'update' ? '📚' : notif.type === 'message' ? '💬' : '🔔'}
                </div>
                <div className="flex-grow space-y-1">
                  <div className="flex justify-between items-center">
                    <Typography variant="body-md" className={clsx('font-bold text-neutral', notif.unread && 'text-primary')}>
                      {notif.title}
                    </Typography>
                    <span className="text-[10px] text-neutral/50">{notif.time}</span>
                  </div>
                  <Typography variant="body-sm" className="text-neutral/70">
                    {notif.desc}
                  </Typography>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PortalLayout>
  );
}
