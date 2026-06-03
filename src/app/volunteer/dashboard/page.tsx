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

export default function VolunteerDashboard() {
  return (
    <PortalLayout portalName="Volunteer Portal" navItems={volunteerNav}>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <Typography variant="headline-lg" className="text-primary">Volunteer Dashboard</Typography>
          <Button variant="primary" size="sm">Find New Tasks</Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { label: 'Hours Contributed', value: '156h', icon: '⏳' },
            { label: 'Tasks Completed', value: '24', icon: '✅' },
            { label: 'Impact Points', value: '4,200', icon: '✨' },
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
              <Typography variant="headline-sm" className="text-primary">My Active Assignments</Typography>
              {[
                { title: 'Solar Installation', hub: 'Lagos Mainland', deadline: 'Tomorrow', priority: 'High' },
                { title: 'Data Entry: Census', hub: 'Enugu North', deadline: 'Friday', priority: 'Medium' },
                { title: 'Town Hall Moderation', hub: 'Kano Central', deadline: 'Next Mon', priority: 'Low' },
              ].map((task, i) => (
                <div key={i} className="flex justify-between items-center p-3 rounded-xl bg-surface-container border border-accent/10">
                  <div className="space-y-1">
                    <Typography variant="body-sm" className="font-bold text-neutral">{task.title}</Typography>
                    <span className="text-xs text-neutral/60">{task.hub} • {task.deadline}</span>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${task.priority === 'High' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'}`}>
                    {task.priority}
                  </span>
                </div>
              ))}
              <Button variant="ghost" size="sm" className="w-full">View All Tasks →</Button>
            </CardContent>
          </Card>

          <Card className="space-y-6">
            <CardContent className="p-6 space-y-4">
              <Typography variant="headline-sm" className="text-primary">Upcoming Training</Typography>
              {[
                { title: 'Civic OS Mastery', date: 'June 10', type: 'Webinar' },
                { title: 'Community Conflict Resolution', date: 'June 15', type: 'Workshop' },
              ].map((train, i) => (
                <div key={i} className="p-4 rounded-xl border border-accent/20 space-y-2">
                  <div className="flex justify-between items-center">
                    <Typography variant="body-sm" className="font-bold text-neutral">{train.title}</Typography>
                    <span className="text-xs text-accent font-bold">{train.date}</span>
                  </div>
                  <span className="text-[10px] uppercase text-neutral/50">{train.type}</span>
                </div>
              ))}
              <Button variant="ghost" size="sm" className="w-full">My Learning Path →</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </PortalLayout>
  );
}
