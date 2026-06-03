import React from 'react';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

export default function VolunteerPage() {
  return (
    <PublicLayout>
      <section className="py-20 px-4 bg-surface">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center space-y-6">
            <Typography variant="label-lg" className="text-accent">Civic Service</Typography>
            <Typography variant="display-lg" className="text-primary">Volunteer with BOOT</Typography>
            <Typography variant="body-lg" className="text-neutral/80 max-w-3xl mx-auto">
              The movement is powered by people. Whether you have a few hours a week or are 
              ready for full-time commitment, your skills can help build our tomorrow.
            </Typography>
          </div>

          {/* Roles */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                role: 'Community Organizer', 
                desc: 'Build and manage local BOOT hubs, coordinating meetings and projects.', 
                icon: '🏘️',
                skills: ['Leadership', 'Communication', 'Logistics']
              },
              { 
                role: 'Tech Steward', 
                desc: 'Help implement the Civic OS and train citizens on using digital tools.', 
                icon: '💻',
                skills: ['Tech Savvy', 'Training', 'Data Entry']
              },
              { 
                role: 'Truth Advocate', 
                desc: 'Verify local reports and fight misinformation using BOOT standards.', 
                icon: '🔍',
                skills: ['Critical Thinking', 'Research', 'Writing']
              },
            ].map((item, i) => (
              <Card key={i} className="hover:border-primary transition-colors">
                <CardContent className="p-8 space-y-6 text-center">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <Typography variant="headline-md" className="text-primary">{item.role}</Typography>
                  <Typography variant="body-md" className="text-neutral/70 leading-relaxed">
                    {item.desc}
                  </Typography>
                  <div className="flex flex-wrap justify-center gap-2">
                    {item.skills.map((s, j) => (
                      <span key={j} className="px-2 py-1 rounded bg-accent/10 text-accent text-[10px] font-bold uppercase">
                        {s}
                      </span>
                    ))}
                  </div>
                  <Button variant="ghost" size="sm" className="w-full">Apply for this Role →</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Application Form */}
          <div className="max-w-3xl mx-auto bg-surface-container rounded-3xl p-12 border border-accent/20 space-y-12">
            <div className="text-center space-y-4">
              <Typography variant="headline-lg" className="text-primary">Join the Volunteer Corps</Typography>
              <Typography variant="body-md" className="text-neutral/70">Fill out the form below and our team will reach out to you.</Typography>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Typography variant="label-md" className="text-neutral">Full Name</Typography>
                <input type="text" placeholder="e.g. Chidi Okafor" className="w-full px-4 py-3 rounded-default border border-neutral/20 outline-none focus:border-primary" />
              </div>
              <div className="space-y-2">
                <Typography variant="label-md" className="text-neutral">Email Address</Typography>
                <input type="email" placeholder="chidi@example.com" className="w-full px-4 py-3 rounded-default border border-neutral/20 outline-none focus:border-primary" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Typography variant="label-md" className="text-neutral">Area of Interest</Typography>
                <select className="w-full px-4 py-3 rounded-default border border-neutral/20 outline-none focus:border-primary bg-white">
                  <option>Community Organizing</option>
                  <option>Technology & Data</option>
                  <option>Communications & Media</option>
                  <option>Logistics & Operations</option>
                </select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <Typography variant="label-md" className="text-neutral">Why do you want to volunteer for BOOT?</Typography>
                <textarea rows={4} placeholder="Tell us about your motivation..." className="w-full px-4 py-3 rounded-default border border-neutral/20 outline-none focus:border-primary" />
              </div>
            </div>
            <div className="text-center">
              <Button variant="action" size="lg" className="px-12">Submit Application</Button>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
