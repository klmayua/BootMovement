import React from 'react';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import Image from 'next/image';
import Link from 'next/link';

export default function MovementPage() {
  return (
    <PublicLayout>
      <section className="py-20 px-4 bg-surface">
        <div className="max-w-7xl mx-auto space-y-24">
          {/* Hero Section */}
          <div className="text-center space-y-12">
            <div className="flex justify-center items-center gap-3 text-primary font-bold uppercase tracking-widest text-xs mb-4">
              <span>🏛️ BOOT Civic Movement</span>
            </div>
            <Typography variant="display-lg" className="text-primary leading-tight">
              Movement Operating System
            </Typography>
            <Typography variant="body-lg" className="text-neutral/80 max-w-3xl mx-auto leading-relaxed">
              A blueprint for national renewal. We've built an infrastructure for accountability, transparency, and collective action—designed to endure beyond cycles.
            </Typography>
            <div className="flex justify-center gap-4">
              <Button variant="primary" size="lg" className="px-12 py-4">Explore the Architecture</Button>
              <Button variant="secondary" size="lg" className="px-12 py-4">Download Manifesto</Button>
            </div>
          </div>

          {/* Architecture Section */}
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="p-8 rounded-3xl bg-surface-container border border-accent/20 space-y-6">
              <div className="text-4xl">🌳</div>
              <Typography variant="headline-md" className="text-primary">Decentralized Hubs</Typography>
              <Typography variant="body-md" className="text-neutral/70 leading-relaxed">
                Our architecture relies on local command centers that operate independently yet align with the national movement goals. Power starts at the community level.
              </Typography>
              <div className="flex justify-between items-center pt-4 border-t border-accent/10 text-xs font-bold text-primary">
                <span>Local Autonomy</span>
                <span>Global Strategy</span>
              </div>
            </div>
            <div className="p-8 rounded-3xl bg-primary text-white space-y-6">
              <div className="text-4xl">💎</div>
              <Typography variant="headline-md" className="text-white">Core Principles</Typography>
              <ul className="space-y-3">
                {['Radical Transparency', 'Meritocratic Leadership', 'Civic Duty First'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-surface-container/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 rounded-3xl bg-surface-container border border-accent/20 space-y-6">
              <div className="text-4xl">🔌</div>
              <Typography variant="headline-md" className="text-primary">Digital Backbone</Typography>
              <Typography variant="body-md" className="text-neutral/70 leading-relaxed">
                Secure voting, real-time resource tracking, and collaborative policy drafting tools integrated into a single platform.
              </Typography>
            </div>
          </div>

          {/* Visual Representation */}
          <div className="relative max-w-5xl mx-auto">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTugFo7cPJ6z8JsSm-U1tYqUyATMa-_EaLSksP2rw6zcGotovfv9WDhw3H0pFgOWSSq9MwX2DktR8uJ6oqKci9NbFaRIy5eEHG5GXXMUMiP_O70zRI7JGML8vyRDW2naLJQZzXhAM0dtO5k-tCX3QIc1qjJXxM81QZnrRlJ3O-OxOs7Obmo7Uk_Jxcu1hFq7LLz38lU-3j-Ujg0f4KQbjg3STFEQ_kAYID7LEH9I6mCvuigEQlDhfSWzI3HZrSAGuwcAQE9tkJDCrp" 
              alt="Movement Architecture" 
              width={1200} 
              height={600} 
              className="rounded-3xl shadow-2xl border border-accent/20 object-cover"
            />
          </div>

          {/* Participation Journey */}
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <Typography variant="headline-lg" className="text-primary">Participation Journey</Typography>
              <Typography variant="body-md" className="text-neutral/70">Find your place in the movement's evolution.</Typography>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: 'Phase 1: Enlist', icon: '📝', desc: 'Onboard and verify your civic credentials to join the network.' },
                { step: 'Phase 2: Train', icon: '🎓', desc: 'Complete the Civil Mastery modules to understand our core thesis.' },
                { step: 'Phase 3: Deploy', icon: '🚀', desc: 'Activate in local campaigns or policy committees.' },
                { step: 'Phase 4: Lead', icon: '🌟', desc: 'Ascend to strategic roles or run for local office under BOOT.' },
              ].map((phase, i) => (
                <div key={i} className="p-6 rounded-3xl bg-white border border-accent/20 space-y-4 hover:border-primary transition-all">
                  <div className="text-3xl">{phase.icon}</div>
                  <Typography variant="headline-sm" className="text-primary">{phase.step}</Typography>
                  <Typography variant="body-sm" className="text-neutral/70">{phase.desc}</Typography>
                </div>
              ))}
            </div>
          </div>

          {/* Contribution Pathways */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Financial Backing', icon: '💰', desc: 'Fund critical infrastructure and campaign logistics with full audit transparency.' },
              { title: 'Intellectual Capital', icon: '✍️', desc: 'Contribute research, whitepapers, or technical expertise to our policy labs.' },
              { title: 'Network Expansion', icon: '🌐', desc: 'Leverage your influence to bridge the movement into new communities.' },
            ].map((path, i) => (
              <Card key={i} className="p-8 space-y-4 hover:border-primary transition-all">
                <div className="text-3xl">{path.icon}</div>
                <Typography variant="headline-sm" className="text-primary">{path.title}</Typography>
                <Typography variant="body-md" className="text-neutral/70">{path.desc}</Typography>
              </Card>
            ))}
          </div>

          {/* Volunteer Pathways */}
          <div className="space-y-12">
            <div className="text-center">
              <Typography variant="headline-lg" className="text-primary">Volunteer Pathways</Typography>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { role: 'Grassroots Organizer', icon: '🏘️', desc: 'Lead ground operations and community meetups in your district.' },
                { role: 'Tech Guardian', icon: '💻', desc: 'Support our digital voting systems and security protocols.' },
                { role: 'Policy Advocate', icon: '⚖️', desc: 'Represent the movement in local town halls and legislative sessions.' },
                { role: 'Creative Force', icon: '🎨', desc: 'Drive the movement\'s visual narrative and public communication.' },
              ].map((path, i) => (
                <div key={i} className="p-6 rounded-3xl bg-surface-container border border-accent/20 space-y-4">
                  <div className="text-3xl">{path.icon}</div>
                  <Typography variant="headline-sm" className="text-primary">{path.role}</Typography>
                  <Typography variant="body-sm" className="text-neutral/70">{path.desc}</Typography>
                </div>
              ))}
            </div>
          </div>

          {/* Recognition System */}
          <div className="bg-primary text-white rounded-3xl p-12 space-y-12">
            <div className="text-center space-y-4">
              <Typography variant="headline-lg" className="text-white">Recognition System</Typography>
              <Typography variant="body-lg" className="text-surface-container/80">We don't just acknowledge work; we codify it. The 'Civic Cred' system tracks every hour of volunteerism.</Typography>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                { value: '4.8M', label: 'Civic Hours Logged', sub: 'Verified through local hub sign-ins.' },
                { value: '12k', label: 'Certified Leaders', sub: 'Graduates of the Mastery program.' },
                { value: '84', label: 'Policy Milestones', sub: 'Enacted through movement pressure.' },
              ].map((stat, i) => (
                <div key={i} className="space-y-2">
                  <Typography variant="display-lg" className="text-white font-bold">{stat.value}</Typography>
                  <Typography variant="headline-sm" className="text-accent">{stat.label}</Typography>
                  <Typography variant="body-sm" className="text-surface-container/60">{stat.sub}</Typography>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center py-20 space-y-8">
            <Typography variant="headline-lg" className="text-primary">Ready to install the OS?</Typography>
            <Typography variant="body-lg" className="text-neutral/80 max-w-2xl mx-auto">
              Join the thousands of citizens already building the future of our nation through disciplined, systematic action.
            </Typography>
            <Button variant="action" size="lg" className="px-12 py-4">Apply for Membership</Button>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
