import React from 'react';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

export default function ContactPage() {
  return (
    <PublicLayout>
      <section className="py-12 md:py-20 px-margin-mobile md:px-margin-desktop bg-surface overflow-x-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          <div className="space-y-12 text-center lg:text-left">
            <div className="space-y-6">
              <Typography variant="label-lg" className="text-accent">Get In Touch</Typography>
              <Typography variant="display-lg" className="text-primary">Contact Us</Typography>
              <Typography variant="body-lg" className="text-neutral/80 max-w-xl mx-auto lg:mx-0">
                Have questions about the movement? Need help starting a hub in your area? 
                Our team is here to support you.
              </Typography>
            </div>
            <div className="space-y-6">
              {[
                { label: 'Email', value: 'contact@bootmovement.ng', icon: 'mail' },
                { label: 'Office', value: 'Abuja, Federal Capital Territory, Nigeria', icon: 'location_on' },
                { label: 'Support', value: 'support@bootmovement.ng', icon: 'support_agent' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-surface-container border border-accent/20 active:scale-95 transition-transform touch-manipulation">
                  <span className="material-symbols-outlined text-primary text-2xl">{item.icon}</span>
                  <div className="text-left">
                    <Typography variant="label-md" className="text-neutral">{item.label}</Typography>
                    <Typography variant="body-md" className="text-primary">{item.value}</Typography>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-6 md:p-12 rounded-3xl border border-accent/20 shadow-sm space-y-8">
            <div className="space-y-4 text-center">
              <Typography variant="headline-md" className="text-primary">Send a Message</Typography>
              <Typography variant="body-sm" className="text-neutral/60">We usually respond within 48 hours.</Typography>
            </div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input label="Name" placeholder="Your Name" />
                <Input label="Email" type="email" placeholder="your@email.com" />
              </div>
              <Input label="Subject" placeholder="How can we help?" />
              <div className="space-y-2">
                <Typography variant="label-md" className="text-neutral">Message</Typography>
                <textarea 
                  rows={5} 
                  placeholder="Write your message here..." 
                  className="w-full px-4 py-3 rounded-default border border-neutral/20 outline-none focus:border-primary bg-surface-container-low transition-all touch-manipulation" 
                />
              </div>
              <Button variant="primary" size="lg" className="w-full py-6 active:scale-95 transition-transform touch-manipulation">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
