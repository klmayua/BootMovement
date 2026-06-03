import React from 'react';
import { PortalLayout } from '@/components/layout/PortalLayout';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

export default function ProfilePage() {
  return (
    <PortalLayout>
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Profile Header */}
        <div className="bg-white rounded-3xl border border-accent/20 overflow-hidden">
          <div className="h-32 bg-primary w-full" />
          <div className="px-8 pb-8">
            <div className="relative flex justify-between items-end -mt-12 mb-6">
              <div className="w-24 h-24 rounded-full border-4 border-white bg-accent flex items-center justify-center text-3xl font-bold text-white shadow-lg">
                CO
              </div>
              <Button variant="secondary" size="sm">Edit Profile</Button>
            </div>
            <div className="space-y-2">
              <Typography variant="headline-lg" className="text-primary">Chidi Okafor</Typography>
              <Typography variant="body-md" className="text-neutral/60">True Nigerian • Level 4 • Lagos, Nigeria</Typography>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column: Details */}
          <div className="lg:col-span-1 space-y-8">
            <Card>
              <CardContent className="p-6 space-y-6">
                <Typography variant="headline-sm" className="text-primary">Personal Details</Typography>
                <div className="space-y-4">
                  {[
                    { label: 'Citizen ID', value: 'BOOT-2026-042' },
                    { label: 'Joined', value: 'Feb 12, 2025' },
                    { label: 'Primary Hub', value: 'Lagos Mainland' },
                    { label: 'Role', value: 'Community Contributor' },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-accent/10 pb-2">
                      <span className="text-sm text-neutral/60">{item.label}</span>
                      <span className="text-sm font-medium text-neutral">{item.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-6">
                <Typography variant="headline-sm" className="text-primary">Badges</Typography>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { icon: '🏅', title: 'Founder' },
                    { icon: '📚', title: 'Scholar' },
                    { icon: '🤝', title: 'Helper' },
                    { icon: '🇳🇬', title: 'Patriot' },
                    { icon: '🛠️', title: 'Builder' },
                    { icon: '🔍', title: 'Truth' },
                  ].map((badge, i) => (
                    <div key={i} className="flex flex-col items-center gap-1">
                      <div className="w-12 h-12 rounded-full bg-surface-container border border-accent/20 flex items-center justify-center text-xl">
                        {badge.icon}
                      </div>
                      <span className="text-[10px] font-bold text-neutral/60 uppercase">{badge.title}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Contributions */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex justify-between items-center">
              <Typography variant="headline-sm" className="text-primary">Civic Contributions</Typography>
              <Link href="/citizen/contributions">
                <Button variant="ghost" size="sm">View All →</Button>
              </Link>
            </div>
            
            <div className="space-y-4">
              {[
                { 
                  title: 'Lagos Waste Management Initiative', 
                  role: 'Volunteer Coordinator', 
                  impact: 'Coordinated 200 volunteers for weekend clean-up.', 
                  date: 'Mar 2026' 
                },
                { 
                  title: 'The Thesis Feedback Loop', 
                  role: 'Contributor', 
                  impact: 'Proposed amendments to Chapter 2 on Local Governance.', 
                  date: 'Jan 2026' 
                },
                { 
                  title: 'Community Solar Pilot', 
                  role: 'Technical Support', 
                  impact: 'Helped install 5 micro-grids in rural Lagos.', 
                  date: 'Nov 2025' 
                },
              ].map((item, i) => (
                <Card key={i} className="hover:border-primary transition-colors">
                  <CardContent className="p-6 flex justify-between items-start gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Typography variant="body-md" className="font-bold text-primary">{item.title}</Typography>
                        <span className="text-xs font-bold text-accent px-2 py-0.5 rounded bg-accent/10">{item.role}</span>
                      </div>
                      <Typography variant="body-sm" className="text-neutral/70">{item.impact}</Typography>
                    </div>
                    <span className="text-xs text-neutral/40 whitespace-nowrap">{item.date}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PortalLayout>
  );
}
