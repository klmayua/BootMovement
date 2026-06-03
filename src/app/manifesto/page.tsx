import React from 'react';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

export default function ManifestoPage() {
  return (
    <PublicLayout>
      <section className="py-20 px-4 bg-surface">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <Typography variant="label-lg" className="text-accent">Transparent Policy</Typography>
            <Typography variant="display-lg" className="text-primary">Manifesto Hub</Typography>
            <Typography variant="body-lg" className="text-neutral/80 max-w-3xl mx-auto">
              Our policies are not written in closed rooms. They are the result of thousands of 
              community discussions and verified needs.
            </Typography>
          </div>

          {/* Policy Categories */}
          <div className="grid md:grid-cols-3 gap-8">
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
              <Card key={i} className="border-t-4 border-t-primary">
                <CardContent className="p-8 space-y-6">
                  <Typography variant="headline-md" className="text-primary">{cat.category}</Typography>
                  <ul className="space-y-3">
                    {cat.policies.map((policy, j) => (
                      <li key={j} className="flex items-center gap-3 text-neutral/80 hover:text-primary cursor-pointer transition-colors">
                        <span className="text-accent">✦</span> {policy}
                      </li>
                    ))}
                  </ul>
                  <Button variant="ghost" size="sm" className="w-full">Explore Category →</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Featured Policy Deep Dive */}
          <div className="bg-surface-container rounded-3xl p-12 border border-accent/20 space-y-8">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1 space-y-6">
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase">
                  Featured Policy
                </div>
                <Typography variant="headline-lg" className="text-primary">The Decentralized Energy Act</Typography>
                <Typography variant="body-md" className="text-neutral/80 leading-relaxed">
                  Moving away from a fragile national grid to a network of community-owned solar 
                  micro-grids. This policy ensures that no village is left in darkness while 
                  creating thousands of local maintenance jobs.
                </Typography>
                <Button variant="primary" size="md">Read Full Policy Paper</Button>
              </div>
              <div className="flex-1 bg-white p-8 rounded-2xl shadow-sm border border-accent/20 space-y-4">
                <Typography variant="label-md" className="text-accent uppercase">Expected Impact</Typography>
                <div className="space-y-4">
                  {[
                    { label: 'Energy Access', value: '100% Rural Coverage' },
                    { label: 'Cost Reduction', value: '40% Lower Tariffs' },
                    { label: 'Job Creation', value: '50k Solar Technicians' },
                  ].map((stat, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-accent/10 pb-2">
                      <span className="text-sm text-neutral">{stat.label}</span>
                      <span className="text-sm font-bold text-primary">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
