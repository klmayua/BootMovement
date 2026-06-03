import React from 'react';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

export default function TrueNigerianPage() {
  return (
    <PublicLayout>
      <section className="py-20 px-4 bg-surface">
        <div className="max-w-4xl mx-auto space-y-20">
          <div className="text-center space-y-6">
            <Typography variant="label-lg" className="text-accent">Civic Identity</Typography>
            <Typography variant="display-lg" className="text-primary">The True Nigerian</Typography>
            <Typography variant="body-lg" className="text-neutral/80">
              Beyond ethnicity, religion, and region. A commitment to the collective destiny of Nigeria.
            </Typography>
          </div>

          {/* The Definition */}
          <div className="bg-primary text-surface-container rounded-3xl p-12 space-y-8 shadow-2xl">
            <Typography variant="headline-lg" className="text-white text-center">
              What is a True Nigerian?
            </Typography>
            <div className="grid sm:grid-cols-2 gap-8">
              {[
                { 
                  title: 'The Ethical Pillar', 
                  desc: 'Rejects patronage, bribery, and tribalism in favor of merit and integrity.' 
                },
                { 
                  title: 'The Social Pillar', 
                  desc: 'Actively contributes to the welfare of their immediate community.' 
                },
                { 
                  title: 'The Political Pillar', 
                  desc: 'Views voting not as a transaction, but as a sacred civic duty.' 
                },
                { 
                  title: 'The National Pillar', 
                  desc: 'Prioritizes the stability and growth of Nigeria above sectional interests.' 
                },
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <Typography variant="label-md" className="text-accent">{item.title}</Typography>
                  <Typography variant="body-sm" className="text-surface-container/80">{item.desc}</Typography>
                </div>
              ))}
            </div>
          </div>

          {/* The Pledge */}
          <div className="space-y-12 text-center">
            <Typography variant="headline-lg" className="text-primary">The True Nigerian Pledge</Typography>
            <div className="p-12 rounded-3xl border-2 border-dashed border-accent/30 bg-surface-container/50 space-y-6">
              <Typography variant="body-lg" className="italic leading-relaxed text-neutral">
                "I solemnly pledge my loyalty to the collective progress of Nigeria. 
                I commit to lead by example, to act with integrity, and to prioritize the 
                needs of my community over my own. I reject the politics of division 
                and embrace the responsibility of being a True Nigerian."
              </Typography>
              <div className="pt-6">
                <Button variant="action" size="lg" className="px-12">
                  Take the Pledge
                </Button>
              </div>
            </div>
          </div>

          {/* Impact of the Identity */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'End of Patronage', desc: 'Positions filled by competence, not connections.' },
              { title: 'Resource Equity', desc: 'Fair distribution based on community need and impact.' },
              { title: 'National Unity', desc: 'A shared identity that transcends ethnic boundaries.' },
            ].map((item, i) => (
              <Card key={i} className="hover:border-primary transition-colors">
                <CardContent className="p-6 space-y-3 text-center">
                  <Typography variant="headline-sm" className="text-primary">
                    {item.title}
                  </Typography>
                  <Typography variant="body-sm" className="text-neutral/70">
                    {item.desc}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
