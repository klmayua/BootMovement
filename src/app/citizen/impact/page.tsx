import React from 'react';
import { PortalLayout } from '@/components/layout/PortalLayout';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { CITIZEN_NAV } from '@/constants/navigation';

export default function ImpactPage() {
  return (
    <PortalLayout portalName="Citizen Portal" navItems={CITIZEN_NAV}>

      <div className="space-y-12">
        <div className="text-center space-y-4">
          <Typography variant="headline-lg" className="text-primary">My Impact Journey</Typography>
          <Typography variant="body-md" className="text-neutral/70">Track your contribution to the movement and your progress toward the True Nigerian ideal.</Typography>
        </div>

        {/* Impact Overview */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { label: 'Lives Touched', value: '1.2k', icon: '👥', color: 'text-primary' },
            { label: 'Projects Completed', value: '4', icon: '✅', color: 'text-secondary' },
            { label: 'Civic Hours', value: '156h', icon: '⏳', color: 'text-accent' },
          ].map((stat, i) => (
            <Card key={i} className="text-center p-8 border-none shadow-sm bg-white">
              <div className="text-4xl mb-4">{stat.icon}</div>
              <Typography variant="display-lg" className={stat.color}>{stat.value}</Typography>
              <Typography variant="label-md" className="text-neutral/60 uppercase">{stat.label}</Typography>
            </Card>
          ))}
        </div>

        {/* Impact Graph Mock */}
        <Card className="p-8 space-y-8">
          <div className="flex justify-between items-center">
            <Typography variant="headline-sm" className="text-primary">Impact Growth (2025-2026)</Typography>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm">Monthly</Button>
              <Button variant="primary" size="sm">Yearly</Button>
            </div>
          </div>
          <div className="h-64 w-full bg-surface-container rounded-2xl flex items-end justify-between p-6 gap-4">
            {[40, 60, 45, 90, 70, 85, 100, 80, 95, 110, 130, 150].map((h, i) => (
              <div key={i} className="w-full bg-primary rounded-t-md transition-all hover:bg-secondary" style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="flex justify-between text-[10px] text-neutral/50 font-bold uppercase">
            <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
          </div>
        </Card>

        {/* Detailed Impact Logs */}
        <div className="space-y-6">
          <Typography variant="headline-sm" className="text-primary">Impact Breakdown</Typography>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { category: 'Environmental', score: 85, detail: 'Lead coordinator for Lagos waste drive.' },
              { category: 'Education', score: 60, detail: 'Taught digital literacy to 20 students.' },
              { category: 'Health', score: 40, detail: 'Volunteer at Enugu mobile clinic.' },
              { category: 'Infrastructure', score: 90, detail: 'Technical lead for solar micro-grid.' },
            ].map((item, i) => (
              <Card key={i} className="p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <Typography variant="label-md" className="text-primary">{item.category}</Typography>
                  <span className="text-sm font-bold text-primary">{item.score}%</span>
                </div>
                <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: `${item.score}%` }} />
                </div>
                <Typography variant="body-sm" className="text-neutral/70">{item.detail}</Typography>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </PortalLayout>
  );
}
