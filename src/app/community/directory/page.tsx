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

export default function CommunityDirectory() {
  return (
    <PortalLayout portalName="Community Portal" navItems={communityNav}>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <Typography variant="headline-lg" className="text-primary">Community Directory</Typography>
          <Button variant="primary" size="sm">Request New Hub</Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: 'Lagos Mainland Hub', members: '12.5k', status: 'Active', focus: 'Infrastructure' },
            { name: 'Enugu North Hub', members: '8.2k', status: 'Active', focus: 'Agriculture' },
            { name: 'Kano Central Hub', members: '15.1k', status: 'Active', focus: 'Youth' },
            { name: 'Port Harcourt Hub', members: '9.8k', status: 'Active', focus: 'Environment' },
            { name: 'Ibadan Hub', members: '11k', status: 'Active', focus: 'Education' },
            { name: 'Jos Hub', members: '6.5k', status: 'Developing', focus: 'Peacebuilding' },
          ].map((hub, i) => (
            <Card key={i} className="hover:border-primary transition-colors cursor-pointer">
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <Typography variant="headline-sm" className="text-primary">{hub.name}</Typography>
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${hub.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                    {hub.status}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-neutral/60">{hub.members} members</span>
                  <span className="text-accent font-bold">{hub.focus}</span>
                </div>
                <Button variant="ghost" size="sm" className="w-full">View Hub Details →</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PortalLayout>
  );
}
