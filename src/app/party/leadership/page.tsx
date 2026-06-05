import React from 'react';
import { PartyLayout } from '@/components/layout/PartyLayout';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

export default function PartyLeadershipPage() {
  return (
    <PartyLayout>
      <section className="py-20 px-4 bg-surface">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center space-y-6">
            <Typography variant="label-lg" className="text-primary">Institutional Governance</Typography>
            <Typography variant="display-lg" className="text-primary">The Executive Council</Typography>
            <Typography variant="body-lg" className="text-neutral/80 max-w-3xl mx-auto">
              The BOOT Party is led by a council of proven experts and stewards. We replace the cult of personality 
              with the rigor of meritocracy and the weight of proven impact.
            </Typography>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Typography variant="headline-lg" className="text-primary">The Stewardship Mandate</Typography>
              <Typography variant="body-md" className="text-neutral/80 leading-relaxed">
                Our leadership operates under a strict mandate of stewardship. This means power is held in trust 
                for the nation, and every official is subject to continuous, real-time transparency audits.
              </Typography>
              <ul className="space-y-4">
                {[
                  { title: 'Merit-Based Ascension', desc: 'Official roles are appointed based on objective impact metrics.' },
                  { title: 'Strict Accountability', desc: 'All executive decisions are logged on the Open Ledger.' },
                  { title: 'Expert-Led Governance', desc: 'Policy is drafted by practitioners, not just politicians.' },
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 p-4 rounded-xl bg-surface-container border border-primary/20">
                    <span className="text-primary font-bold">{i+1}.</span>
                    <div>
                      <Typography variant="label-md" className="text-primary">{item.title}</Typography>
                      <Typography variant="body-sm" className="text-neutral/70">{item.desc}</Typography>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-primary rounded-3xl p-12 text-surface-container space-y-8">
              <Typography variant="headline-md" className="text-white">The Official Oath of Office</Typography>
              <Typography variant="body-lg" className="italic text-surface-container/80">
                "I solemnly swear to uphold the BOOT Doctrine and the National Agenda. I pledge to prioritize 
                the stability of the state over the ambition of the individual, and to serve as a transparent 
                steward of the people's trust."
              </Typography>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent" />
                <div>
                  <p className="font-bold text-white">National Executive Council</p>
                  <p className="text-sm text-surface-container/60">Guardians of the National Agenda</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <div className="text-center">
              <Typography variant="headline-lg" className="text-primary">The Party Hierarchy</Typography>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: 'Council Member', desc: 'Strategic oversight of national policy.', icon: '🏛️' },
                { step: 'Regional Steward', desc: 'Implementation of agenda at state level.', icon: '🌍' },
                { step: 'Technical Lead', desc: 'Ensuring systemic efficiency in administration.', icon: '⚙️' },
                { step: 'Civic Liaison', desc: 'Maintaining official ties with community hubs.', icon: '🤝' },
              ].map((stage, i) => (
                <Card key={i} className="text-center p-6 border-b-4 border-b-primary">
                  <div className="text-3xl mb-4">{stage.icon}</div>
                  <Typography variant="headline-sm" className="text-primary mb-2">{stage.step}</Typography>
                  <Typography variant="body-sm" className="text-neutral/70">{stage.desc}</Typography>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PartyLayout>
  );
}
