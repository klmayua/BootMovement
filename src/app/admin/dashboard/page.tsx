import React from 'react';
import { PortalLayout } from '@/components/layout/PortalLayout';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

const adminNav = [
  { name: 'Global Oversight', href: '/admin/dashboard', icon: '🌐' },
  { name: 'User Management', href: '/admin/users', icon: '👥' },
  { name: 'Hub Approval', href: '/admin/hubs', icon: '🏘️' },
  { name: 'Financial Audit', href: '/admin/finance', icon: '💰' },
  { name: 'System Config', href: '/admin/config', icon: '⚙️' },
];

export default function AdminDashboard() {
  return (
    <PortalLayout portalName="Super Admin" navItems={adminNav}>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <Typography variant="headline-lg" className="text-primary">Global Oversight</Typography>
          <Button variant="primary" size="sm">Export Master Report</Button>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { label: 'Total Citizens', value: '2.4M', icon: '🌍' },
            { label: 'Total Hubs', value: '1,240', icon: '🏘️' },
            { label: 'Movement Funds', value: '₦1.2B', icon: '💰' },
            { label: 'System Uptime', value: '99.9%', icon: '⚡' },
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
              <Typography variant="headline-sm" className="text-primary">Pending Approvals</Typography>
              {[
                { title: 'Kano North Hub Application', type: 'Hub', urgency: 'Medium' },
                { title: 'Dr. Sarah's Steward Request', type: 'User', urgency: 'High' },
                { title: 'Sokoto Project Funding', type: 'Financial', urgency: 'High' },
              ].map((req, i) => (
                <div key={i} className="p-4 rounded-xl bg-surface-container border border-accent/10 flex justify-between items-center">
                  <div className="space-y-1">
                    <Typography variant="body-sm" className="font-bold text-neutral">{req.title}</Typography>
                    <span className="text-xs text-neutral/60">{req.type}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">Deny</Button>
                    <Button variant="primary" size="sm">Approve</Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="space-y-6">
            <CardContent className="p-6 space-y-4">
              <Typography variant="headline-sm" className="text-primary">System Health</Typography>
              <div className="space-y-4">
                {[
                  { label: 'Civic OS API', status: 'Healthy', color: 'text-green-600' },
                  { label: 'Blockchain Ledger', status: 'Healthy', color: 'text-green-600' },
                  { label: 'Authentication Service', status: 'Degraded', color: 'text-yellow-600' },
                  { label: 'Database Cluster', status: 'Healthy', color: 'text-green-600' },
                ].map((sys, i) => (
                  <div key={i} className="flex justify-between items-center p-3 rounded-lg bg-surface-container">
                    <span className="text-sm text-neutral">{sys.label}</span>
                    <span className={`text-xs font-bold ${sys.color}`}>{sys.status}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PortalLayout>
  );
}
