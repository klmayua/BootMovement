import React from 'react';
import { PortalLayout } from '@/components/layout/PortalLayout';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import Link from 'next/link';
import { CITIZEN_NAV } from '@/constants/navigation';

export default function CitizenDashboard() {
  return (
    <PortalLayout portalName="Citizen Portal" navItems={CITIZEN_NAV}>

      <div className="space-y-8">
        {/* Welcome Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="space-y-2">
            <Typography variant="headline-lg" className="text-primary">Welcome back, Chidi!</Typography>
            <Typography variant="body-md" className="text-neutral/70">
              Your civic activity is helping build a better Nigeria. Keep it up!
            </Typography>
          </div>
          <Link href="/citizen/profile">
            <Button variant="primary" size="sm">Edit Profile</Button>
          </Link>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Impact Score', value: '840', color: 'text-primary', icon: '📈' },
            { label: 'Contributions', value: '12', color: 'text-secondary', icon: '✍️' },
            { label: 'True Nigerian Level', value: 'Lvl 4', color: 'text-accent', icon: '🇳🇬' },
            { label: 'Donations', value: '₦45,000', color: 'text-primary', icon: '💰' },
          ].map((stat, i) => (
            <Card key={i} className="text-center p-6 border-none shadow-sm bg-white">
              <div className="text-2xl mb-2">{stat.icon}</div>
              <Typography variant="display-lg" className={stat.color}>{stat.value}</Typography>
              <Typography variant="label-md" className="text-neutral/60 uppercase">{stat.label}</Typography>
            </Card>
          ))}
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Center Feed / Activity */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex justify-between items-center">
              <Typography variant="headline-sm" className="text-primary">Recent Activity</Typography>
              <Link href="/citizen/feed" className="text-sm text-primary font-bold hover:underline">View All Feed →</Link>
            </div>
            
            <div className="space-y-4">
              {[
                { 
                  user: 'Community Hub: Lagos Mainland', 
                  action: 'posted a new project', 
                  detail: 'Youth Tech Center Renovation', 
                  time: '2h ago', 
                  type: 'project' 
                },
                { 
                  user: 'National Council', 
                  action: 'updated the Thesis', 
                  detail: 'Chapter 4: Energy Sovereignty', 
                  time: '5h ago', 
                  type: 'update' 
                },
                { 
                  user: 'Sani Musa', 
                  action: 'completed a True Nigerian milestone', 
                  detail: 'Community Service - Level 2', 
                  time: '1d ago', 
                  type: 'milestone' 
                },
              ].map((activity, i) => (
                <Card key={i} className="p-4 space-y-3 hover:border-primary transition-colors">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                        {activity.user[0]}
                      </div>
                      <span className="text-sm font-semibold text-neutral">{activity.user}</span>
                    </div>
                    <span className="text-[10px] text-neutral/50">{activity.time}</span>
                  </div>
                  <Typography variant="body-sm" className="text-neutral/80">
                    {activity.action} <span className="font-bold text-primary">{activity.detail}</span>
                  </Typography>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar Widgets */}
          <div className="space-y-8">
            {/* My Communities Widget */}
            <div className="space-y-4">
              <Typography variant="headline-sm" className="text-primary">My Communities</Typography>
              <Card className="space-y-4">
                <CardContent className="p-4 space-y-4">
                  {[
                    { name: 'Lagos Mainland', status: 'Active' },
                    { name: 'Enugu North', status: 'Member' },
                    { name: 'Youth Tech Network', status: 'Lead' },
                  ].map((comm, i) => (
                    <div key={i} className="flex justify-between items-center p-2 rounded-lg bg-surface-container">
                      <span className="text-sm font-medium text-neutral">{comm.name}</span>
                      <span className="text-[10px] font-bold text-accent uppercase">{comm.status}</span>
                    </div>
                  ))}
                  <Link href="/citizen/communities">
                    <Button variant="ghost" size="sm" className="w-full">Manage Hubs →</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            {/* Next Milestone Widget */}
            <div className="space-y-4">
              <Typography variant="headline-sm" className="text-primary">Next Milestone</Typography>
              <Card className="bg-primary text-white border-none shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🏆</span>
                    <Typography variant="label-md" className="text-surface-container/80 uppercase">True Nigerian Lvl 5</Typography>
                  </div>
                  <Typography variant="body-md" className="font-medium">
                    Volunteer for 2 more community projects to unlock this level.
                  </Typography>
                  <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-accent w-3/4" />
                  </div>
                  <p className="text-right text-xs text-surface-container/60">75% completed</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </PortalLayout>
  );
}
