import React from 'react';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

export default function ManifestoPage() {
  return (
    <PublicLayout>
      <div className="flex flex-col min-h-screen overflow-x-hidden">
        <section className="py-12 md:py-20 px-margin-mobile md:px-margin-desktop bg-surface">
          <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
            <div className="text-center space-y-6">
              <Typography variant="label-lg" className="text-accent">Transparent Policy</Typography>
              <Typography variant="display-lg" className="text-primary">Manifesto Hub</Typography>
              <Typography variant="body-lg" className="text-neutral/80 max-w-3xl mx-auto">
                Our policies are not written in closed rooms. They are the result of thousands of 
                community discussions and verified needs.
              </Typography>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                { 
                  category: 'Economic Sovereignty', 
                  color: 'bg-primary', 
                  policies: ['Local Currency Stability', 'Cooperative Agriculture', 'SME Credit Access'] 
                },
                { 
                  category: 'Infrastructure & Energy', 
                  color: 'bg-secondary', 
                  policies: ['Decentralized Solar Grids', 'Community-Led Road Works', 'Digital Connectivity'] 
                },
                { 
                  category: 'Education & Health', 
                  color: 'bg-accent', 
                  policies: ['Skill-Based Curricula', 'Community Health Hubs', 'Meritocratic Scholarships'] 
                },
              ].map((cat, i) => (
                <Card key={i} className="border-t-4 border-t-primary active:scale-95 transition-transform touch-manipulation">
                  <CardContent className="p-6 md:p-8 space-y-6">
                    <Typography variant="headline-md" className="text-primary">{cat.category}</Typography>
                    <ul className="space-y-3">
                      {cat.policies.map((policy, j) => (
                        <li key={j} className="flex items-center gap-3 text-neutral/80 hover:text-primary cursor-pointer transition-colors text-sm touch-manipulation">
                          <span className="text-accent">✦</span> {policy}
                        </li>
                      ))}
                    </ul>
                    <Button variant="ghost" size="sm" className="w-full py-3 touch-manipulation">Explore Category →</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="bg-surface-container rounded-3xl p-6 md:p-12 border border-accent/20 space-y-8">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1 space-y-6 text-center md:text-left">
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase">
                    Featured Policy
                  </div>
                  <Typography variant="headline-lg" className="text-primary">The Decentralized Energy Act</Typography>
                  <Typography variant="body-md" className="text-neutral/80 leading-relaxed">
                    Moving away from a fragile national grid to a network of community-owned solar 
                    micro-grids. This policy ensures that no village is left in darkness while 
                    creating thousands of local maintenance jobs.
                  </Typography>
                  <Button variant="primary" size="md" className="w-full md:w-auto active:scale-95 transition-transform touch-manipulation">Read Full Policy Paper</Button>
                </div>
                <div className="flex-1 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-accent/20 space-y-4">
                  <Typography variant="label-md" className="text-accent uppercase">Expected Impact</Typography>
                  <div className="space-y-4">
                    {[
                      { label: 'Energy Access', value: '100% Rural Coverage' },
                      { label: 'Cost Reduction', value: '40% Lower Tariffs' },
                      { label: 'Job Creation', value: '50k Solar Technicians' },
                    ].map((stat, i) => (
                      <div key={i} className="flex justify-between items-center border-b border-accent/10 pb-2">
                        <span className="text-xs md:text-sm text-neutral">{stat.label}</span>
                        <span className="text-xs md:text-sm font-bold text-primary">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PublicLayout>
  );
}
