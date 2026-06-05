import React from 'react';
import { PartyLayout } from '@/components/layout/PartyLayout';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';

export default function PartyContactPage() {
  return (
    <PartyLayout>
      <section className="py-20 px-4 bg-surface">
        <div className="max-w-container-max mx-auto space-y-16">
          <div className="text-center space-y-6">
            <Typography variant="label-lg" className="text-primary">Official Communications</Typography>
            <Typography variant="display-lg" className="text-primary">Contact the Party</Typography>
            <Typography variant="body-lg" className="text-neutral/80 max-w-3xl mx-auto">
              Reach out to the National Secretariat for official inquiries, media requests, 
              or institutional partnership opportunities.
            </Typography>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="p-8 bg-surface-container rounded-3xl border border-outline-variant/30 space-y-6">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary text-3xl">mail</span>
                  <div>
                    <Typography variant="label-md" className="text-primary font-bold">Official Email</Typography>
                    <Typography variant="body-md" className="text-neutral">secretariat@bootparty.org</Typography>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary text-3xl">location_on</span>
                  <div>
                    <Typography variant="label-md" className="text-primary font-bold">National Headquarters</Typography>
                    <Typography variant="body-md" className="text-neutral">Civic Plaza, Sector 1, Capital City</Typography>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary text-3xl">forum</span>
                  <div>
                    <Typography variant="label-md" className="text-primary font-bold">Press Office</Typography>
                    <Typography variant="body-md" className="text-neutral">press@bootparty.org</Typography>
                  </div>
                </div>
              </div>
              <div className="p-8 bg-primary text-white rounded-3xl space-y-4">
                <Typography variant="headline-md" className="text-white">Join the Vanguard</Typography>
                <Typography variant="body-md" className="opacity-90">
                  Are you a professional with a track record of impact? Apply to become a 
                  Party Steward and help shape the national agenda.
                </Typography>
                <Button variant="secondary" className="w-full">Apply for Stewardship →</Button>
              </div>
            </div>

            <div className="bg-white p-12 rounded-3xl shadow-xl border border-outline-variant/30">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-neutral uppercase">Full Name</label>
                    <input className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface-container-low outline-none focus:ring-2 focus:ring-primary" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-neutral uppercase">Email</label>
                    <input className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface-container-low outline-none focus:ring-2 focus:ring-primary" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-neutral uppercase">Subject</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface-container-low outline-none focus:ring-2 focus:ring-primary">
                    <option>General Inquiry</option>
                    <option>Press Request</option>
                    <option>Stewardship Application</option>
                    <option>Institutional Partnership</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-neutral uppercase">Message</label>
                  <textarea className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface-container-low outline-none focus:ring-2 focus:ring-primary h-32" placeholder="Your message..."></textarea>
                </div>
                <Button variant="primary" className="w-full py-4">Send Official Communication</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </PartyLayout>
  );
}
