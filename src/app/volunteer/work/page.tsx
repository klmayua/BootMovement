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

export default function MyVolunteerWork() {
  return (
    <PortalLayout portalName="Volunteer Portal" navItems={volunteerNav}>
      <div className="space-y-12">
        <div className="flex justify-between items-center">
          <Typography variant="headline-lg" className="text-primary">My Volunteer Work</Typography>
          <Button variant="primary" size="sm">Submit Log</Button>
        </div>

        <div className="space-y-8">
          {/* Active Tasks */}
          <div className="space-y-4">
            <Typography variant="headline-sm" className="text-primary">Current Assignments</Typography>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { 
                  title: 'Solar Grid Installation', 
                  hub: 'Lagos Mainland', 
                  status: 'In Progress', 
                  progress: 65, 
                  deadline: 'June 12' 
                },
                { 
                  title: 'Community Census', 
                  hub: 'Enugu North', 
                  status: 'In Progress', 
                  progress: 30, 
                  deadline: 'June 20' 
                },
              ].map((task, i) => (
                <Card key={i} className="p-6 space-y-4 border-l-4 border-l-primary">
                  <div className="flex justify-between items-start">
                    <Typography variant="body-md" className="font-bold text-neutral">{task.title}</Typography>
                    <span className="text-xs font-bold text-primary uppercase">{task.status}</span>
                  </div>
                  <div className="flex justify-between text-xs text-neutral/60">
                    <span>Hub: {task.hub}</span>
                    <span>Deadline: {task.deadline}</span>
                  </div>
                  <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: `${task.progress}%` }} />
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Completed Work */}
          <div className="space-y-4">
            <Typography variant="headline-sm" className="text-primary">Completed History</Typography>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-accent/20">
                    <th className="py-4 px-4 text-sm font-bold text-neutral uppercase">Task</th>
                    <th className="py-4 px-4 text-sm font-bold text-neutral uppercase">Hub</th>
                    <th className="py-4 px-4 text-sm font-bold text-neutral uppercase">Completion Date</th>
                    <th className="py-4 px-4 text-sm font-bold text-neutral uppercase text-right">Impact XP</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-accent/10">
                  {[
                    { task: 'Youth Tech Setup', hub: 'Lagos Mainland', date: 'May 10, 2026', xp: '300' },
                    { task: 'Health Clinic Support', hub: 'Enugu North', date: 'Apr 22, 2026', xp: '450' },
                    { task: 'Pledge Drive', hub: 'Kano Central', date: 'Mar 05, 2026', xp: '200' },
                    { task: 'Water Well Maintenance', hub: 'Port Harcourt', date: 'Feb 12, 2026', xp: '500' },
                  ].map((work, i) => (
                    <tr key={i} className="hover:bg-surface-container transition-colors">
                      <td className="py-4 px-4 text-sm font-medium text-primary">{work.task}</td>
                      <td className="py-4 px-4 text-sm text-neutral/70">{work.hub}</td>
                      <td className="py-4 px-4 text-sm text-neutral/70">{work.date}</td>
                      <td className="py-4 px-4 text-sm font-bold text-accent text-right">{work.xp} XP</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </PortalLayout>
  );
}
