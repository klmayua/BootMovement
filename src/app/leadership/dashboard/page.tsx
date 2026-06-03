import React from 'react';
import { PortalLayout } from '@/components/layout/PortalLayout';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { LEADERSHIP_NAV } from '@/constants/navigation';

export default function LeadershipDashboard() {
  return (
    <PortalLayout portalName="Leadership Portal" navItems={LEADERSHIP_NAV}>

      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <Typography variant="headline-lg" className="text-primary">Strategy Dashboard</Typography>
          <Button variant="primary" size="sm">Generate Report</Button>
        </div>

        {/* Movement Health Metrics */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { label: 'National Sentiment', value: '78%', status: 'Up 5%', icon: '😊' },
            { label: 'Hub Engagement', value: '64%', status: 'Up 12%', icon: '⚡' },
            { label: 'Thesis Adoption', value: 'Sustained', status: 'Stable', icon: '📖' },
          ].map((stat, i) => (
            <Card key={i} className="p-6 border-none shadow-sm bg-white">
              <div className="flex justify-between items-start mb-4">
                <Typography variant="label-md" className="text-neutral/60 uppercase">{stat.label}</Typography>
                <span className="text-2xl">{stat.icon}</span>
              </div>
              <Typography variant="display-lg" className="text-primary">{stat.value}</Typography>
              <span className="text-xs font-bold text-green-600">{stat.status}</span>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Strategic Priorities */}
          <Card className="space-y-6">
            <CardContent className="p-6 space-y-4">
              <Typography variant="headline-sm" className="text-primary">Current Strategic Priorities</Typography>
              {[
                { title: 'Scale Hubs to North-West', progress: 40, priority: 'High' },
                { title: 'Refine Energy Sovereignty Policy', progress: 80, priority: 'Medium' },
                { title: 'True Nigerian Certification v2', progress: 20, priority: 'High' },
              ].map((priority, i) => (
                <div key={i} className="p-4 rounded-xl bg-surface-container border border-accent/10 space-y-3">
                  <div className="flex justify-between items-center">
                    <Typography variant="body-md" className="font-bold text-neutral">{priority.title}</Typography>
                    <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${priority.priority === 'High' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'}`}>
                      {priority.priority}
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-white/50 rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: `${priority.progress}%` }} />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Council Notifications */}
          <Card className="space-y-6">
            <CardContent className="p-6 space-y-4">
              <Typography variant="headline-sm" className="text-primary">Council Alerts</Typography>
              {[
                { title: 'Budget Request: Lagos Hub', desc: 'Requested ₦500k for server upgrades.', time: '1h ago' },
                { title: 'Policy Dispute: Enugu', desc: 'Disagreement on seed distribution model.', time: '4h ago' },
                { title: 'New Stewardship Application', desc: 'Dr. Amina Yusuf submitted for Architect role.', time: '1d ago' },
              ].map((alert, i) => (
                <div key={i} className="p-4 rounded-xl border border-accent/20 space-y-2">
                  <div className="flex justify-between items-center">
                    <Typography variant="body-sm" className="font-bold text-neutral">{alert.title}</Typography>
                    <span className="text-[10px] text-neutral/50">{alert.time}</span>
                  </div>
                  <Typography variant="body-sm" className="text-neutral/70">{alert.desc}</Typography>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </PortalLayout>
  );
}
