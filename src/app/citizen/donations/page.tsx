import React from 'react';
import { PortalLayout } from '@/components/layout/PortalLayout';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { CITIZEN_NAV } from '@/constants/navigation';

export default function DonationsPage() {
  return (
    <PortalLayout portalName="Citizen Portal" navItems={CITIZEN_NAV}>

      <div className="max-w-5xl mx-auto space-y-12">
        <div className="flex justify-between items-center">
          <Typography variant="headline-lg" className="text-primary">My Donations</Typography>
          <Button variant="primary" size="sm">Make New Donation</Button>
        </div>

        {/* Total Contribution */}
        <Card className="bg-primary text-white border-none shadow-lg">
          <CardContent className="p-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="space-y-2 text-center md:text-left">
              <Typography variant="label-md" className="text-surface-container/60 uppercase">Total Contribution</Typography>
              <Typography variant="display-lg" className="text-white font-bold">₦45,000</Typography>
            </div>
            <div className="flex gap-4">
              <div className="px-4 py-2 rounded-lg bg-white/10 text-sm">
                <span className="block text-[10px] uppercase opacity-60">Projects Funded</span>
                <span className="font-bold">12</span>
              </div>
              <div className="px-4 py-2 rounded-lg bg-white/10 text-sm">
                <span className="block text-[10px] uppercase opacity-60">Certificates</span>
                <span className="font-bold">3</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Donation History */}
        <div className="space-y-6">
          <Typography variant="headline-sm" className="text-primary">Transaction History</Typography>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-accent/20">
                  <th className="py-4 px-4 text-sm font-bold text-neutral uppercase">Date</th>
                  <th className="py-4 px-4 text-sm font-bold text-neutral uppercase">Destination</th>
                  <th className="py-4 px-4 text-sm font-bold text-neutral uppercase">Category</th>
                  <th className="py-4 px-4 text-sm font-bold text-neutral uppercase text-right">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-accent/10">
                {[
                  { date: 'Jun 01, 2026', dest: 'Lagos Mainland Hub', cat: 'Infrastructure', amt: '₦10,000' },
                  { date: 'May 15, 2026', dest: 'National Thesis Fund', cat: 'Education', amt: '₦5,000' },
                  { date: 'Apr 20, 2026', dest: 'Enugu North Hub', cat: 'Health', amt: '₦20,000' },
                  { date: 'Mar 12, 2026', dest: 'Kano Youth Center', cat: 'Technology', amt: '₦10,000' },
                ].map((tx, i) => (
                  <tr key={i} className="hover:bg-surface-container transition-colors">
                    <td className="py-4 px-4 text-sm text-neutral/70">{tx.date}</td>
                    <td className="py-4 px-4 text-sm font-medium text-primary">{tx.dest}</td>
                    <td className="py-4 px-4">
                      <span className="px-2 py-1 rounded-full bg-accent/10 text-accent text-[10px] font-bold uppercase">
                        {tx.cat}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-sm font-bold text-neutral text-right">{tx.amt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </PortalLayout>
  );
}
