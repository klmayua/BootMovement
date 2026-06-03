import React from 'react';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <PublicLayout>
      <section className="py-20 px-4 bg-surface">
        <div className="max-w-7xl mx-auto space-y-24">
          {/* Hero */}
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <Typography variant="label-lg" className="text-accent uppercase tracking-widest">Institutional Foundation</Typography>
              <Typography variant="display-lg" className="text-primary leading-tight">
                Restoring Integrity to Civic Life.
              </Typography>
              <Typography variant="body-lg" className="text-neutral/80 max-w-3xl mx-auto leading-relaxed">
                The BOOT Civic Movement is a non-partisan institution dedicated to structural accountability and the revitalization of public service. We represent the "Visionary Tradition"—a commitment to the wisdom of the past as a bridge to a secure future.
              </Typography>
              <Link href="/thesis">
                <Button variant="primary" size="lg" className="px-12 py-4">Our Full Thesis →</Button>
              </Link>
            </div>
            <div className="relative max-w-5xl mx-auto">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDovGis0FBUfCZjp86Y4r-CKeSJ4ZVkLQN8K0jqNLrtC91v5o5PkkGfhcW0WtW8oOP9xrjf48BF0PnWN17hk_KX8NvExMUIMzvVX7acUq1rgbCOrVc5hwRsGa5U2hS8KGOoXScAaO82etJbj4ppBTvXuxqT-DI0qoI_xwWDM7VaJNclaAYTAXcOV1Jl3Kbqoo7WFKzanfn4a_6SBVHoZ34Aj7R5ZM57ufbPa7sHDYhiOzUNjYysuBH_ZUoX79kqMbkcQkuq1QbPHgWx" 
                alt="BOOT Institutional Foundation" 
                width={1200} 
                height={600} 
                className="rounded-3xl shadow-2xl border border-accent/20 object-cover"
              />
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white p-6 rounded-2xl shadow-xl border border-accent/20 max-w-md text-center">
                <Typography variant="body-md" className="text-primary italic font-serif">
                  "The strength of a nation lies in the accountability of its leaders."
                </Typography>
              </div>
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-12 rounded-3xl bg-surface-container border border-accent/20 space-y-6">
              <div className="text-4xl">🔭</div>
              <Typography variant="headline-lg" className="text-primary">Our Vision</Typography>
              <Typography variant="body-lg" className="text-neutral/80 leading-relaxed">
                A society where governance is a transparent stewardship, and civic participation is the primary driver of national prosperity. We envision a future anchored by institutional trust and technical excellence in public administration.
              </Typography>
            </div>
            <div className="p-12 rounded-3xl bg-primary text-white space-y-6">
              <div className="text-4xl">🎯</div>
              <Typography variant="headline-lg" className="text-white">Our Mission</Typography>
              <Typography variant="body-lg" className="text-surface-container/80 leading-relaxed">
                To identify, train, and support a new generation of leaders who prioritize constitutional integrity over political expediency. We build the frameworks for civic oversight that make accountability an automated reality rather than a rare exception.
              </Typography>
            </div>
          </div>

          {/* Journey Timeline */}
          <div className="space-y-12">
            <div className="text-center">
              <Typography variant="headline-lg" className="text-primary">Our Journey</Typography>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { year: '2018', title: 'The Founding', desc: 'Originally conceived as a technical think-tank, BOOT was founded by a coalition of jurists and architects seeking to reform public infrastructure procurement.' },
                { year: '2021', title: 'National Expansion', desc: 'The movement transitioned from a think-tank to a grassroots civic engine, establishing local communities across 40 provinces.' },
                { year: 'Present', title: 'The Civic Mandate', desc: 'With over 500,000 active members, BOOT now operates as the primary platform for training public-facing ethical leadership.' },
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-3xl bg-white border border-accent/20 space-y-4 hover:border-primary transition-all">
                  <Typography variant="label-md" className="text-accent font-bold">{item.year}</Typography>
                  <Typography variant="headline-sm" className="text-primary">{item.title}</Typography>
                  <Typography variant="body-sm" className="text-neutral/70 leading-relaxed">{item.desc}</Typography>
                </div>
              ))}
            </div>
          </div>

          {/* Pillars */}
          <div className="space-y-12">
            <div className="text-center">
              <Typography variant="headline-lg" className="text-primary">The Pillars of BOOT</Typography>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Absolute Integrity', desc: 'No compromise on ethical standards. Our leaders undergo continuous vetting and performance audits.', icon: '🛡️' },
                { title: 'Structural Justice', desc: 'We focus on the systems that allow corruption to flourish, rather than just the individuals.', icon: '⚖️' },
                { title: 'Civic Agency', desc: 'Every citizen is an active stakeholder. We provide the tools for direct participation.', icon: '🤝' },
                { title: 'Technical Competence', desc: 'Policy must be driven by data and expertise, not populist rhetoric.', icon: '📈' },
                { title: 'Heritage Honor', desc: 'Building on the achievements of our ancestors while discarding the obsolete.', icon: '📜' },
              ].map((pillar, i) => (
                <div key={i} className="p-8 rounded-3xl bg-surface-container border border-accent/20 space-y-4 hover:border-primary transition-all">
                  <div className="text-3xl">{pillar.icon}</div>
                  <Typography variant="headline-sm" className="text-primary">{pillar.title}</Typography>
                  <Typography variant="body-md" className="text-neutral/70 leading-relaxed">{pillar.desc}</Typography>
                </div>
              ))}
            </div>
          </div>

          {/* Structure */}
          <div className="bg-primary text-white rounded-3xl p-12 space-y-12">
            <div className="text-center space-y-4">
              <Typography variant="headline-lg" className="text-white">A Decentralized Movement with Central Discipline</Typography>
              <Typography variant="body-lg" className="text-surface-container/80">BOOT is structured to be unshakeable. Our leadership follows a strict horizontal oversight model.</Typography>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'The Council of Elders', desc: 'Strategic guidance and ethical oversight body composed of retired public servants.', icon: '👴' },
                { title: 'The Technical Committees', desc: 'Subject-matter experts who draft policy thesis and audit movement spending.', icon: '⚙️' },
                { title: 'Regional Chapters', desc: 'Autonomous local units that implement civic actions and community welfare.', icon: '📍' },
              ].map((unit, i) => (
                <div key={i} className="p-8 rounded-2xl bg-white/10 border border-white/20 space-y-4 text-center">
                  <div className="text-4xl">{unit.icon}</div>
                  <Typography variant="headline-sm" className="text-white">{unit.title}</Typography>
                  <Typography variant="body-sm" className="text-surface-container/70">{unit.desc}</Typography>
                </div>
              ))}
            </div>
          </div>

          {/* Roles */}
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <Typography variant="headline-lg" className="text-primary">Your Role in the Movement</Typography>
              <Typography variant="body-md" className="text-neutral/70">We do not ask for your vote; we ask for your commitment.</Typography>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { num: '01', title: 'The Advocate', desc: 'Spreading the thesis and mobilizing local communities.' },
                { num: '02', title: 'The Monitor', desc: 'Trained in public audit tools to track government spending.' },
                { num: '03', title: 'The Expert', desc: 'Consulting on technical committees for policy viability.' },
                { num: '04', title: 'The Candidate', desc: 'Entering the BOOT Academy for ethical public service.' },
              ].map((role, i) => (
                <div key={i} className="p-8 rounded-3xl bg-white border border-accent/20 space-y-4 hover:border-primary transition-all">
                  <Typography variant="label-md" className="text-accent font-bold">{role.num}</Typography>
                  <Typography variant="headline-sm" className="text-primary">{role.title}</Typography>
                  <Typography variant="body-sm" className="text-neutral/70">{role.desc}</Typography>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="text-center">
              <Typography variant="headline-lg" className="text-primary">Frequently Asked Questions</Typography>
            </div>
            <div className="space-y-6">
              {[
                { q: 'Is BOOT a political party?', a: 'No. BOOT is a civic movement. While we may endorse and field candidates through existing constitutional frameworks, our primary purpose is systemic accountability and civic education, which transcends party politics.' },
                { q: 'How is the movement funded?', a: 'We are funded entirely by small-donor contributions from our members. We refuse all corporate donations and large-scale interest group funding to ensure absolute independence.' },
                { q: 'How can I start a local chapter?', a: 'New chapters require a minimum of 20 certified members and must undergo a foundational audit of the proposed leadership team.' },
              ].map((faq, i) => (
                <div key={i} className="p-6 rounded-2xl bg-surface-container border border-accent/20 space-y-4">
                  <Typography variant="headline-sm" className="text-primary flex items-center gap-2">
                    {faq.q} <span className="text-accent">▾</span>
                  </Typography>
                  <Typography variant="body-md" className="text-neutral/70 leading-relaxed">
                    {faq.q === 'How can I start a local chapter?' ? faq.a + ' Contact our regional desk to begin the charter process.' : faq.a}
                  </Typography>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
