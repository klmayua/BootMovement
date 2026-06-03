import React from 'react';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

export default function ThesisPage() {
  return (
    <PublicLayout>
      <section className="py-20 px-4 bg-surface">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <Typography variant="label-lg" className="text-accent">The Intellectual Foundation</Typography>
            <Typography variant="display-lg" className="text-primary">The BOOT Thesis</Typography>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          </div>

          <div className="prose prose-lg max-w-none space-y-12 text-neutral/80">
            <div className="bg-surface-container p-8 rounded-2xl border-l-8 border-primary italic text-xl leading-relaxed">
              "Governance is not the act of ruling people, but the art of managing collective resources for the greatest common good. 
              The current Nigerian system is not broken; it was designed to function exactly as it does. 
              To fix it, we must replace the operating system itself."
            </div>

            <div className="space-y-6">
              <Typography variant="headline-md" className="text-primary">1. The Crisis of Representation</Typography>
              <Typography variant="body-md" className="leading-relaxed">
                Traditional electoral systems in Nigeria have become markets for the highest bidder. 
                The disconnect between the representative and the represented has led to a state 
                of 'Governance Vacuum' where laws exist on paper but not in practice.
              </Typography>
            </div>

            <div className="space-y-6">
              <Typography variant="headline-md" className="text-primary">2. The Civic Operating System (Civic OS)</Typography>
              <Typography variant="body-md" className="leading-relaxed">
                BOOT proposes a transition from 'Representative Governance' to 'Participatory Governance'. 
                Through the Civic OS, we introduce:
              </Typography>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: 'Real-time Accountability', desc: 'Traceable budget spending at the community level.' },
                  { title: 'Meritocratic Scaling', desc: 'Promotion of leaders based on verified local impact.' },
                  { title: 'Decentralized Planning', desc: 'Bottom-up priority setting for infrastructure.' },
                  { title: 'Digital Consensus', desc: 'Secure, transparent voting on community-specific policies.' },
                ].map((item, i) => (
                  <Card key={i}>
                    <CardContent className="p-4 space-y-2">
                      <Typography variant="label-md" className="text-primary">{item.title}</Typography>
                      <Typography variant="body-sm">{item.desc}</Typography>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <Typography variant="headline-md" className="text-primary">3. The True Nigerian Pledge</Typography>
              <Typography variant="body-md" className="leading-relaxed">
                The Thesis posits that systemic change requires a cultural shift. The 'True Nigerian' 
                is not defined by ethnicity or region, but by a commitment to the collective 
                prosperity of the nation over personal or tribal gain.
              </Typography>
            </div>
          </div>

          <div className="text-center py-12">
            <Button variant="primary" size="lg" className="px-12">
              Download Full Thesis (PDF)
            </Button>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
