import React from 'react';
import { PortalLayout } from '@/components/layout/PortalLayout';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

const communityNav = [
  { name: 'Community Dashboard', href: '/community/dashboard', icon: '🏘️' },
  { name: 'Directory', href: '/community/directory', icon: '📖' },
  { name: 'Discussions', href: '/community/discussions', icon: '💬' },
  { name: 'Projects', href: '/community/projects', icon: '🏗️' },
  { name: 'Members', href: '/community/members', icon: '👥' },
];

export default function PolicyDiscussions() {
  return (
    <PortalLayout portalName="Community Portal" navItems={communityNav}>
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <Typography variant="headline-lg" className="text-primary">Policy Discussions</Typography>
          <Button variant="primary" size="sm">Start New Thread</Button>
        </div>

        <div className="space-y-6">
          {[
            { 
              title: 'Proposed Local Waste Levy', 
              hub: 'Lagos Mainland', 
              votes: '450 Approve / 120 Oppose', 
              status: 'Voting Open', 
              desc: 'Proposal to implement a micro-levy for community-led street cleaning.' 
            },
            { 
              title: 'Agricultural Seed Distribution', 
              hub: 'Enugu North', 
              votes: '890 Approve / 10 Oppose', 
              status: 'Passed', 
              desc: 'Setting up a cooperative seed bank for smallholder farmers.' 
            },
            { 
              title: 'Youth Tech Center Hours', 
              hub: 'Kano Central', 
              votes: '120 Approve / 80 Oppose', 
              status: 'Discussion', 
              desc: 'Should the tech center operate 24/7 during exam seasons?' 
            },
          ].map((thread, i) => (
            <Card key={i} className="hover:border-primary transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <Typography variant="headline-sm" className="text-primary">{thread.title}</Typography>
                    <span className="text-xs text-accent font-bold uppercase">{thread.hub}</span>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${thread.status === 'Passed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                    {thread.status}
                  </span>
                </div>
                <Typography variant="body-sm" className="text-neutral/70">{thread.desc}</Typography>
                <div className="flex justify-between items-center pt-4 border-t border-accent/10">
                  <span className="text-xs font-bold text-neutral">{thread.votes}</span>
                  <Button variant="ghost" size="sm">Join Debate →</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PortalLayout>
  );
}
