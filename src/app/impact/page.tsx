import React from 'react';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

export default function ImpactPage() {
  return (
    <PublicLayout>
      <section className="py-20 px-4 bg-surface">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center space-y-6">
            <Typography variant="label-lg" className="text-accent">Proven Results</Typography>
            <Typography variant="display-lg" className="text-primary">Impact Hub</Typography>
            <Typography variant="body-lg" className="text-neutral/80 max-w-3xl mx-auto">
              We don't just promise change; we demonstrate it. The Impact Hub tracks every project, 
              every kobo, and every life improved across the movement.
            </Typography>
          </div>

          {/* Impact Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'People Impacted', value: '1.2M' },
              { label: 'Projects Delivered', value: '450+' },
              { label: 'Funds Mobilized', value: '₦4.2B' },
              { label: 'Volunteer Hours', value: '850k' },
            ].map((stat, i) => (
              <Card key={i} className="text-center p-6 bg-surface-container border-none shadow-sm">
                <Typography variant="display-lg" className="text-primary font-bold">{stat.value}</Typography>
                <Typography variant="label-md" className="text-neutral/60 uppercase">{stat.label}</Typography>
              </Card>
            ))}
          </div>

          {/* Project Gallery */}
          <div className="space-y-12">
            <div className="text-center">
              <Typography variant="headline-lg" className="text-primary">Success Stories</Typography>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              {[
                { 
                  title: 'The Solar Village Project', 
                  loc: 'Kwara State', 
                  impact: 'Provided 24/7 electricity to 500 households using community-owned solar arrays.', 
                  metric: '100% Energy Access' 
                },
                { 
                  title: 'Rural Health Network', 
                  loc: 'Cross River', 
                  impact: 'Established 12 mobile clinics and trained 50 local health workers.', 
                  metric: '30% Reduction in Infant Mortality' 
                },
                { 
                  title: 'Youth Agri-Cooperative', 
                  loc: 'Benue State', 
                  impact: 'Connected 200 young farmers directly to urban markets, bypassing middlemen.', 
                  metric: '2x Increase in Farmer Income' 
                },
                { 
                  title: 'Clean Water Initiative', 
                  loc: 'Kano State', 
                  impact: 'Installed 25 solar-powered boreholes in underserved LGAs.', 
                  metric: '15k People with Clean Water' 
                },
              ].map((project, i) => (
                <Card key={i} className="group overflow-hidden hover:border-primary transition-all">
                  <div className="h-48 bg-surface-container relative">
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors" />
                  </div>
                  <CardContent className="p-8 space-y-4">
                    <div className="flex justify-between items-center">
                      <Typography variant="headline-sm" className="text-primary">{project.title}</Typography>
                      <span className="text-xs font-bold text-accent">{project.loc}</span>
                    </div>
                    <Typography variant="body-md" className="text-neutral/70 leading-relaxed">
                      {project.impact}
                    </Typography>
                    <div className="flex items-center justify-between pt-4 border-t border-accent/10">
                      <span className="text-sm font-bold text-primary">{project.metric}</span>
                      <Button variant="ghost" size="sm">View Details →</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Transparency Callout */}
          <div className="bg-surface-container rounded-3xl p-12 text-center space-y-8 border border-accent/20">
            <Typography variant="headline-lg" className="text-primary">Radical Transparency</Typography>
            <Typography variant="body-lg" className="text-neutral/80 max-w-2xl mx-auto">
              Every project in the Impact Hub is backed by public ledgers. You can trace every 
              contribution from donation to delivery.
            </Typography>
            <Button variant="primary" size="lg">Explore the Public Ledger</Button>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
