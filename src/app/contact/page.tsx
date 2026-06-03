import React from 'react';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

export default function ContactPage() {
  return (
    <PublicLayout>
      <section className="py-20 px-4 bg-surface">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="space-y-6">
              <Typography variant="label-lg" className="text-accent">Get In Touch</Typography>
              <Typography variant="display-lg" className="text-primary">Contact Us</Typography>
              <Typography variant="body-lg" className="text-neutral/80">
                Have questions about the movement? Need help starting a hub in your area? 
                Our team is here to support you.
              </Typography>
            </div>

            <div className="space-y-6">
              {[
                { label: 'Email', value: 'contact@bootmovement.ng', icon: '✉️' },
                { label: 'Office', value: 'Abuja, Federal Capital Territory, Nigeria', icon: '📍' },
                { label: 'Support', value: 'support@bootmovement.ng', icon: '🎧' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-surface-container border border-accent/20">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <Typography variant="label-md" className="text-neutral">{item.label}</Typography>
                    <Typography variant="body-md" className="text-primary">{item.value}</Typography>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-accent/20 shadow-sm space-y-8">
            <div className="space-y-4 text-center">
              <Typography variant="headline-md" className="text-primary">Send a Message</Typography>
              <Typography variant="body-sm" className="text-neutral/60">We usually respond within 48 hours.</Typography>
            </div>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Input label="Name" placeholder="Your Name" />
                <Input label="Email" type="email" placeholder="your@email.com" />
              </div>
              <Input label="Subject" placeholder="How can we help?" />
              <div className="space-y-2">
                <Typography variant="label-md" className="text-neutral">Message</Typography>
                <textarea 
                  rows={5} 
                  placeholder="Write your message here..." 
                  className="w-full px-4 py-3 rounded-default border border-neutral/20 outline-none focus:border-primary" 
                />
              </div>
              <Button variant="primary" size="lg" className="w-full py-6">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
