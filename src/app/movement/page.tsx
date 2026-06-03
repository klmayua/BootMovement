import React from 'react';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import Link from 'next/link';

export default function MovementPage() {

  return (
    <PublicLayout>
      <section className="py-20 px-4 bg-surface">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center space-y-6">
            <Typography variant="label-lg" className="text-accent">The Engine of Change</Typography>
            <Typography variant="display-lg" className="text-primary">The Movement</Typography>
            <Typography variant="body-lg" className="text-neutral/80 max-w-3xl mx-auto">
              BOOT is a coordinated surge of citizens taking ownership of their local realities. 
              From the streets of Lagos to the hills of Enugu, we are organizing for a new era.
            </Typography>
          </div>

          {/* Movement Phases */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                phase: 'Phase 1: Awakening', 
                desc: 'Education on the BOOT Thesis and the identification of True Nigerians.', 
                status: 'Completed',
                color: 'bg-primary'
              },
              { 
                phase: 'Phase 2: Organizing', 
                desc: 'Establishing Community Hubs and local governance structures.', 
                status: 'In Progress',
                color: 'bg-secondary'
              },
              { 
                phase: 'Phase 3: Implementation', 
                desc: 'Deploying the Civic OS and executing community-led projects.', 
                status: 'Upcoming',
                color: 'bg-accent'
              },
            ].map((item, i) => (
              <Card key={i} className="relative overflow-hidden">
                <div className={`h-2 w-full ${item.color}`} />
                <CardContent className="p-8 space-y-4">
                  <Typography variant="headline-md" className="text-primary">
                    {item.phase}
                  </Typography>
                  <Typography variant="body-md" className="text-neutral/70">
                    {item.desc}
                  </Typography>
                  <div className="inline-block px-2 py-1 rounded text-xs font-bold bg-surface-container text-neutral border border-accent/20">
                    {item.status}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* How to get involved */}
          <div className="bg-surface-container rounded-3xl p-12 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Typography variant="headline-lg" className="text-primary">
                How to Get Involved
              </Typography>
              <Typography variant="body-lg" className="text-neutral/80">
                Whether you are a student, a professional, a community leader, or a concerned citizen, 
                there is a place for you in the BOOT Movement.
              </Typography>
              <ul className="space-y-4">
                {[
                  'Study the Thesis and the BOOT Framework',
                  'Take the True Nigerian Pledge',
                  'Join or start a Community Hub',
                  'Volunteer for local impact projects',
                  'Support the movement through donations'
                ].map((step, i) => (
                  <li key={i} className="flex items-center gap-3 text-neutral">
                    <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <Link href="/join">
                <Button variant="action" size="lg" className="w-full py-6">Join the Movement Now</Button>
              </Link>
              <Link href="/volunteer">
                <Button variant="secondary" size="lg" className="w-full py-6">Explore Volunteer Roles</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
