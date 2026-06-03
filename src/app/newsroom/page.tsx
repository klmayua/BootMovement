import React from 'react';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

export default function NewsroomPage() {
  return (
    <PublicLayout>
      <section className="py-20 px-4 bg-surface">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <Typography variant="label-lg" className="text-accent">Movement Updates</Typography>
            <Typography variant="display-lg" className="text-primary">Newsroom</Typography>
            <Typography variant="body-lg" className="text-neutral/80 max-w-3xl mx-auto">
              Stay updated with the latest developments from the BOOT Movement. 
              Truth, transparency, and progress, reported in real-time.
            </Typography>
          </div>

          {/* Featured News */}
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="lg:col-span-2 overflow-hidden group cursor-pointer">
              <div className="h-96 bg-surface-container relative">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors" />
              </div>
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center gap-3 text-xs font-bold text-accent uppercase">
                  <span>National Update</span>
                  <span>•</span>
                  <span>June 01, 2026</span>
                </div>
                <Typography variant="headline-lg" className="text-primary group-hover:text-secondary transition-colors">
                  BOOT Movement Reaches 2 Million Active Citizens Across 36 States
                </Typography>
                <Typography variant="body-md" className="text-neutral/70 line-clamp-3">
                  The movement has seen an unprecedented surge in registration over the last quarter, 
                  signaling a nationwide shift toward the BOOT framework of meritocratic governance.
                </Typography>
                <Button variant="ghost" size="sm">Read Full Story →</Button>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Typography variant="headline-sm" className="text-primary">Latest Briefs</Typography>
              {[
                { title: 'Kano Hub Launches Youth Tech Initiative', date: 'May 28', cat: 'Community' },
                { title: 'The Thesis: New Chapter on Energy Sovereignty', date: 'May 25', cat: 'Thesis' },
                { title: 'Senate Candidate Dr. Yusuf’s Town Hall', date: 'May 20', cat: 'Politics' },
                { title: 'New Transparency Ledger Now Live', date: 'May 15', cat: 'Tech' },
              ].map((news, i) => (
                <div key={i} className="p-4 rounded-xl border border-accent/20 hover:bg-surface-container transition-colors cursor-pointer space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold text-accent uppercase">{news.cat}</span>
                    <span className="text-[10px] text-neutral/50">{news.date}</span>
                  </div>
                  <Typography variant="body-sm" className="font-semibold text-neutral hover:text-primary">
                    {news.title}
                  </Typography>
                </div>
              ))}
              <Button variant="ghost" size="sm" className="w-full">View All News →</Button>
            </div>
          </div>

          {/* Press Kit */}
          <div className="bg-surface-container rounded-3xl p-12 text-center space-y-8 border border-accent/20">
            <Typography variant="headline-lg" className="text-primary">Press & Media Kit</Typography>
            <Typography variant="body-lg" className="text-neutral/80 max-w-2xl mx-auto">
              Are you a journalist or content creator? Download our official brand assets, 
              fact sheets, and high-resolution images.
            </Typography>
            <div className="flex justify-center gap-4">
              <Button variant="primary" size="md">Download Press Kit</Button>
              <Button variant="secondary" size="md">Request Interview</Button>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
