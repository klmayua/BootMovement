import React from 'react';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

export default function PartyManifestoPage() {
  return (
    <section className="py-20 px-4 bg-surface">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-6">
          <Typography variant="label-lg" className="text-primary">Official Party Platform</Typography>
          <Typography variant="display-lg" className="text-primary">The National Agenda</Typography>
          <Typography variant="body-lg" className="text-neutral/80 max-w-3xl mx-auto">
            The BOOT Party is committed to a disciplined, evidence-based approach to governance. 
            Our platform is a formal pledge to the nation, ensuring stability through structural reform.
          </Typography>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              category: 'Economic Sovereignty', 
              color: 'bg-primary', 
              policies: ['National Fiscal Stability', 'Industrial Modernization', 'Strategic Credit Architecture'] 
            },
            { 
              category: 'Institutional Integrity', 
              color: 'bg-secondary', 
              policies: ['Judicial Independence', 'Administrative Audit Systems', 'Civil Service Reform'] 
            },
            { 
              category: 'National Infrastructure', 
              color: 'bg-accent', 
              policies: ['Energy Sovereignty Act', 'Digital National Grid', 'Sustainable Urbanization'] 
            },
          ].map((cat, i) => (
            <Card key={i} className="border-t-4 border-t-primary">
              <CardContent className="p-8 space-y-6">
                <Typography variant="headline-md" className="text-primary">{cat.category}</Typography>
                <ul className="space-y-3">
                  {cat.policies.map((policy, j) => (
                    <li key={j} className="flex items-center gap-3 text-neutral/80 hover:text-primary cursor-pointer transition-colors">
                      <span className="text-primary">✓</span> {policy}
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" size="sm" className="w-full">View Official Directive →</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-surface-container rounded-3xl p-12 border border-primary/20 space-y-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase">
                Primary Directive
              </div>
              <Typography variant="headline-lg" className="text-primary">The National Energy Sovereignty Act</Typography>
              <Typography variant="body-md" className="text-neutral/80 leading-relaxed">
                Our central legislative priority is the total liberation of the national grid. By transitioning 
                to a sovereign, decentralized energy model, we remove the vulnerability of centralized failure 
                and place power literally and figuratively in the hands of the governed.
              </Typography>
              <Button variant="primary" size="md">Read Legislative Draft</Button>
            </div>
            <div className="flex-1 bg-white p-8 rounded-2xl shadow-sm border border-primary/20 space-y-4">
              <Typography variant="label-md" className="text-primary uppercase">Strategic Targets</Typography>
              <div className="space-y-4">
                {[
                  { label: 'Grid Independence', value: '100% by 2030' },
                  { label: 'Energy Cost', value: '30% Reduction' },
                  { label: 'Local Employment', value: '1M Technical Jobs' },
                ].map((stat, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-primary/10 pb-2">
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
  );
}
