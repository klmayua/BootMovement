import React from 'react';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

export default function DonatePage() {
  return (
    <PublicLayout>
      <section className="py-20 px-4 bg-surface">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <Typography variant="label-lg" className="text-accent">Fuel the Movement</Typography>
              <Typography variant="display-lg" className="text-primary">Support the Future of Nigeria</Typography>
              <Typography variant="body-lg" className="text-neutral/80">
                BOOT is a grassroots movement. We don't take money from corporate interests 
                or political lobbyists. We are powered by the people, for the people.
              </Typography>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-container border border-accent/20">
                <span className="text-2xl">🛡️</span>
                <div>
                  <Typography variant="label-md" className="text-primary">100% Transparency</Typography>
                  <Typography variant="body-sm" className="text-neutral/70">Every donation is logged on the public blockchain ledger.</Typography>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-container border border-accent/20">
                <span className="text-2xl">🚀</span>
                <div>
                  <Typography variant="label-md" className="text-primary">Direct Impact</Typography>
                  <Typography variant="body-sm" className="text-neutral/70">Funds go directly to community projects and movement operations.</Typography>
                </div>
              </div>
            </div>
          </div>

          <Card variant="elevated" className="border-2 border-accent/30">
            <CardContent className="p-8 space-y-8">
              <div className="text-center space-y-2">
                <Typography variant="headline-md" className="text-primary">Make a Contribution</Typography>
                <Typography variant="body-sm" className="text-neutral/60">Choose an amount to support our operations</Typography>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {['₦5,000', '₦20,000', '₦50,000'].map((amt, i) => (
                  <Button key={i} variant={i === 1 ? 'primary' : 'secondary'} size="md" className="py-4">
                    {amt}
                  </Button>
                ))}
              </div>

              <div className="space-y-2">
                <Typography variant="label-md" className="text-neutral">Custom Amount</Typography>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-neutral">₦</span>
                  <input 
                    type="number" 
                    placeholder="0.00" 
                    className="w-full pl-8 pr-4 py-3 rounded-default border border-neutral/20 focus:border-primary focus:ring-0 outline-none"
                  />
                </div>
              </div>

              <Button variant="action" size="lg" className="w-full py-6 text-lg">
                Complete Donation
              </Button>

              <div className="text-center space-y-2">
                <p className="text-xs text-neutral/50">Secure payment powered by BOOT-Pay</p>
                <div className="flex justify-center gap-3 opacity-50 grayscale">
                  {/* Mock payment icons */}
                  <div className="w-8 h-5 bg-neutral/20 rounded" />
                  <div className="w-8 h-5 bg-neutral/20 rounded" />
                  <div className="w-8 h-5 bg-neutral/20 rounded" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </PublicLayout>
  );
}
