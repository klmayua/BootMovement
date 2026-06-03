import React from 'react';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

export default function CandidatesPage() {
  return (
    <PublicLayout>
      <section className="py-20 px-4 bg-surface">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <Typography variant="label-lg" className="text-accent">Merit-Based Representation</Typography>
            <Typography variant="display-lg" className="text-primary">BOOT Candidates</Typography>
            <Typography variant="body-lg" className="text-neutral/80 max-w-3xl mx-auto">
              Our candidates are not politicians; they are stewards. Each has been vetted through the 
              BOOT Meritocracy Framework and has a proven track record of community impact.
            </Typography>
          </div>

          {/* Filter */}
          <div className="flex justify-center gap-4 mb-12">
            {['All', 'Senate', 'House of Reps', 'Governors', 'Local Gov'].map((cat, i) => (
              <Button key={i} variant={i === 0 ? 'primary' : 'ghost'} size="sm">
                {cat}
              </Button>
            ))}
          </div>

          {/* Candidate Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                name: 'Dr. Amina Yusuf', 
                role: 'Senate Candidate - Kano Central', 
                impact: 'Reduced maternal mortality by 15% in 3 LGAs.', 
                rating: '⭐⭐⭐⭐⭐' 
              },
              { 
                name: 'Engr. Emeka Okoro', 
                role: 'House of Reps - Enugu North', 
                impact: 'Built 4 community-led solar grids for rural schools.', 
                rating: '⭐⭐⭐⭐⭐' 
              },
              { 
                name: 'Chief Olumide Adeyemi', 
                role: 'Governor Candidate - Ogun State', 
                impact: 'Founded the largest youth-led agricultural coop in the West.', 
                rating: '⭐⭐⭐⭐' 
              },
              { 
                name: 'Sarah Bello', 
                role: 'House of Reps - Kaduna South', 
                impact: 'Established 10 vocational training centers for women.', 
                rating: '⭐⭐⭐⭐⭐' 
              },
              { 
                name: 'Tunde Williams', 
                role: 'Senate Candidate - Lagos Central', 
                impact: 'Led the "Clean Lagos" initiative with 5k volunteers.', 
                rating: '⭐⭐⭐⭐' 
              },
              { 
                name: 'Ibrahim Musa', 
                role: 'Governor Candidate - Borno State', 
                impact: 'Restored water access to 20 IDP camps through engineering.', 
                rating: '⭐⭐⭐⭐⭐' 
              },
            ].map((candidate, i) => (
              <Card key={i} className="group hover:border-primary transition-all">
                <CardContent className="p-6 space-y-4">
                  <div className="w-full h-64 bg-surface-container rounded-xl mb-4 overflow-hidden relative">
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors" />
                    <div className="absolute bottom-4 left-4 bg-white px-2 py-1 rounded text-xs font-bold text-primary shadow-sm">
                      Verified Steward
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <Typography variant="headline-sm" className="text-primary">{candidate.name}</Typography>
                    <span className="text-xs text-accent font-bold">{candidate.rating}</span>
                  </div>
                  <Typography variant="label-md" className="text-neutral/60 uppercase">
                    {candidate.role}
                  </Typography>
                  <Typography variant="body-sm" className="text-neutral/80 italic">
                    "{candidate.impact}"
                  </Typography>
                  <Button variant="ghost" size="sm" className="w-full">View Full Manifesto →</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
