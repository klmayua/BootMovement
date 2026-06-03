import React from 'react';
import { PortalLayout } from '@/components/layout/PortalLayout';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { COMMUNITY_NAV } from '@/constants/navigation';

export default function CommunityDashboard() {
  return (
    <PortalLayout portalName="Community Portal" navItems={COMMUNITY_NAV}>

      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <Typography variant="headline-lg" className="text-primary">Lagos Mainland Hub Dashboard</Typography>
          <Button variant="primary" size="sm">Launch Meeting</Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { label: 'Active Members', value: '1,240', icon: '👥' },
            { label: 'Ongoing Projects', value: '8', icon: '🏗️' },
            { label: 'Treasury', value: '₦1.4M', icon: '💰' },
          ].map((stat, i) => (
            <Card key={i} className="p-6 text-center border-none shadow-sm bg-white">
              <div className="text-2xl mb-2">{stat.icon}</div>
              <Typography variant="display-lg" className="text-primary">{stat.value}</Typography>
              <Typography variant="label-md" className="text-neutral/60 uppercase">{stat.label}</Typography>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="space-y-6">
            <CardContent className="p-6 space-y-4">
              <Typography variant="headline-sm" className="text-primary">Upcoming Hub Events</Typography>
              {[
                { title: 'Weekly Sync Meeting', date: 'Tomorrow, 6PM', type: 'Sync' },
                { title: 'Waste Management Drive', date: 'Sat, 8AM', type: 'Action' },
                { title: 'Guest Lecture: Urbanism', date: 'Next Tue, 7PM', type: 'Education' },
              ].map((event, i) => (
                <div key={i} className="flex justify-between items-center p-3 rounded-xl bg-surface-container border border-accent/10">
                  <div className="space-y-1">
                    <Typography variant="body-sm" className="font-bold text-neutral">{event.title}</Typography>
                    <span className="text-xs text-neutral/60">{event.date}</span>
                  </div>
                  <span className="text-[10px] font-bold text-accent uppercase">{event.type}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="space-y-6">
            <CardContent className="p-6 space-y-4">
              <Typography variant="headline-sm" className="text-primary">Hub Announcements</Typography>
              {[
                { title: 'New Solar Budget Approved', desc: 'The community has voted to allocate ₦200k for hub lighting.' },
                { title: 'Volunteer Call', desc: 'Looking for 5 people to help with the candidate forum.' },
              ].map((ann, i) => (
                <div key={i} className="p-4 rounded-xl border border-accent/20 space-y-2">
                  <Typography variant="label-md" className="text-primary">{ann.title}</Typography>
                  <Typography variant="body-sm" className="text-neutral/70">{ann.desc}</Typography>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </PortalLayout>
  );
}
