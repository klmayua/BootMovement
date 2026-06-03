import React from 'react';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

export default function EventsPage() {
  return (
    <PublicLayout>
      <section className="py-20 px-4 bg-surface">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <Typography variant="label-lg" className="text-accent">Civic Engagement</Typography>
            <Typography variant="display-lg" className="text-primary">Events & Town Halls</Typography>
            <Typography variant="body-lg" className="text-neutral/80 max-w-3xl mx-auto">
              Join us for town halls, strategy sessions, and community action days. 
              The movement happens where people meet.
            </Typography>
          </div>

          {/* Event Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['All Events', 'Town Halls', 'Workshops', 'Community Action', 'Candidate Forums'].map((filter, i) => (
              <Button key={i} variant={i === 0 ? 'primary' : 'ghost'} size="sm">
                {filter}
              </Button>
            ))}
          </div>

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: 'National Town Hall: The Thesis', 
                date: 'June 15, 2026', 
                location: 'Virtual / Abuja', 
                category: 'Town Hall', 
                desc: 'A deep dive into the BOOT Thesis and Q&A with the Leadership Council.' 
              },
              { 
                title: 'Lagos Community Action Day', 
                date: 'June 22, 2026', 
                location: 'Ikeja, Lagos', 
                category: 'Action', 
                desc: 'Join us for a community-led waste management drive in Ikeja.' 
              },
              { 
                title: 'Civic OS Workshop', 
                date: 'June 28, 2026', 
                location: 'Enugu Hub', 
                category: 'Workshop', 
                desc: 'Learning how to use the BOOT portal for community project tracking.' 
              },
              { 
                title: 'Candidate Manifesto Debate', 
                date: 'July 05, 2026', 
                location: 'Virtual', 
                category: 'Forum', 
                desc: 'A transparent debate between BOOT-endorsed candidates for the Senate.' 
              },
              { 
                title: 'The True Nigerian Seminar', 
                date: 'July 12, 2026', 
                location: 'Port Harcourt', 
                category: 'Workshop', 
                desc: 'Exploring the ethical pillars of the True Nigerian identity.' 
              },
              { 
                title: 'Regional Strategy Summit', 
                date: 'July 20, 2026', 
                location: 'Kano', 
                category: 'Town Hall', 
                desc: 'Aligning local hub goals with the national movement strategy.' 
              },
            ].map((event, i) => (
              <Card key={i} className="hover:border-primary transition-colors">
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="px-2 py-1 rounded bg-accent/10 text-accent text-xs font-bold uppercase">
                      {event.category}
                    </span>
                    <span className="text-xs text-neutral/60 font-medium">{event.date}</span>
                  </div>
                  <Typography variant="headline-sm" className="text-primary">
                    {event.title}
                  </Typography>
                  <div className="flex items-center gap-2 text-sm text-neutral/70">
                    <span>📍</span> {event.location}
                  </div>
                  <Typography variant="body-sm" className="text-neutral/70 leading-relaxed">
                    {event.desc}
                  </Typography>
                  <Button variant="ghost" size="sm" className="w-full">RSVP Now →</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
