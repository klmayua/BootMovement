import React from 'react';
import { PartyLayout } from '@/components/layout/PartyLayout';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';

export default function PartyAboutPage() {
  return (
    <PartyLayout>
      <section className="py-20 px-4 bg-surface">
        <div className="max-w-container-max mx-auto space-y-16">
          <div className="text-center space-y-6">
            <Typography variant="label-lg" className="text-primary">Institutional Identity</Typography>
            <Typography variant="display-lg" className="text-primary">About the BOOT Party</Typography>
            <Typography variant="body-lg" className="text-neutral/80 max-w-3xl mx-auto">
              The BOOT Party is not a mere political organization, but a disciplined vehicle for 
              national restoration. We operate on the principle of "Stewardship over Power".
            </Typography>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Typography variant="headline-lg" className="text-primary">Our Purpose</Typography>
              <Typography variant="body-md" className="text-neutral/80 leading-relaxed">
                Founded on the belief that the state must be as efficient as the most successful 
                enterprise and as transparent as a glass house, the BOOT Party seeks to rebuild 
                the civic engine of the nation.
              </Typography>
              <div className="p-6 bg-primary-container rounded-2xl border border-primary/20 space-y-4">
                <Typography variant="label-md" className="text-primary font-bold">The Party Creed</Typography>
                <Typography variant="body-sm" className="text-on-primary-container italic">
                  "Stability through structure. Progress through precision. Power through accountability."
                </Typography>
              </div>
            </div>
            <div className="bg-surface-container p-12 rounded-3xl border border-outline-variant/30">
              <Typography variant="headline-md" className="text-primary mb-6">Core Mandates</Typography>
              <ul className="space-y-4">
                {[
                  { title: 'Institutional Weight', desc: 'Preventing populist volatility through anchored legal frameworks.' },
                  { title: 'Meritocratic Order', desc: 'Replacing political patronage with proven impact metrics.' },
                  { title: 'Sovereign Infrastructure', desc: 'Ensuring national independence through decentralized energy and data.' },
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 p-4 rounded-xl bg-surface border border-outline-variant/20">
                    <span className="text-primary font-bold">{i+1}.</span>
                    <div>
                      <Typography variant="label-md" className="text-primary">{item.title}</Typography>
                      <Typography variant="body-sm" className="text-neutral/70">{item.desc}</Typography>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </PartyLayout>
  );
}
