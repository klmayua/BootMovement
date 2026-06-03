import React from 'react';
import { PortalLayout } from '@/components/layout/PortalLayout';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

const candidateNav = [
  { name: 'Candidate Dashboard', href: '/candidate/dashboard', icon: '🎯' },
  { name: 'My Profile', href: '/candidate/profile', icon: '👤' },
  { name: 'Manifesto Editor', href: '/candidate/manifesto', icon: '✍️' },
  { name: 'Voter Analytics', href: '/candidate/analytics', icon: '📈' },
  { name: 'Campaign Tools', href: '/candidate/tools', icon: '🛠️' },
];

export default function CandidateDashboard() {
  return (
    <PortalLayout portalName="Candidate Portal" navItems={candidateNav}>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <Typography variant="headline-lg" className="text-primary">Candidate Dashboard</Typography>
          <Button variant="primary" size="sm">Update Manifesto</Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { label: 'Approval Rating', value: '68%', icon: '👍', color: 'text-primary' },
            { label: 'Pledge Signatures', value: '42k', icon: '✍️', color: 'text-secondary' },
            { label: 'Reach Score', value: 'High', icon: '📡', color: 'text-accent' },
          ].map((stat, i) => (
            <Card key={i} className="p-6 text-center border-none shadow-sm bg-white">
              <div className="text-2xl mb-2">{stat.icon}</div>
              <Typography variant="display-lg" className={stat.color}>{stat.value}</Typography>
              <Typography variant="label-md" className="text-neutral/60 uppercase">{stat.label}</Typography>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="space-y-6">
            <CardContent className="p-6 space-y-4">
              <Typography variant="headline-sm" className="text-primary">Sentiment Analysis</Typography>
              <div className="space-y-6">
                {[
                  { label: 'Economic Policy', score: 75, sentiment: 'Positive' },
                  { label: 'Healthcare Vision', score: 90, sentiment: 'Very Positive' },
                  { label: 'Education Plan', score: 40, sentiment: 'Mixed' },
                ].map((item, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-xs font-bold text-neutral">
                      <span>{item.label}</span>
                      <span>{item.score}%</span>
                    </div>
                    <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: `${item.score}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="space-y-6">
            <CardContent className="p-6 space-y-4">
              <Typography variant="headline-sm" className="text-primary">Upcoming Campaign Events</Typography>
              {[
                { title: 'Enugu North Town Hall', date: 'June 12', time: '5PM' },
                { title: 'Podcast: The Future of Nigeria', date: 'June 18', time: '2PM' },
                { title: 'Youth Hub Visit - Lagos', date: 'June 25', time: '10AM' },
              ].map((event, i) => (
                <div key={i} className="p-4 rounded-xl bg-surface-container border border-accent/10 flex justify-between items-center">
                  <div className="space-y-1">
                    <Typography variant="body-sm" className="font-bold text-neutral">{event.title}</Typography>
                    <span className="text-xs text-neutral/60">{event.date} • {event.time}</span>
                  </div>
                  <Button variant="ghost" size="sm">Manage</Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </PortalLayout>
  );
}
