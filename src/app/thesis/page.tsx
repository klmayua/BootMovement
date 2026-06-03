import React from 'react';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';

export default function ThesisPage() {
  return (
    <PublicLayout>
      <section className="relative py-20 px-4 bg-surface">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <div className="flex justify-center items-center gap-3 text-primary font-bold uppercase tracking-widest text-xs mb-4">
            <span>🏛️ BOOT Civic Movement</span>
          </div>
          
          <div className="flex justify-center gap-4 mb-8">
            <Link href="/" className="text-sm font-medium text-neutral hover:text-primary">Home</Link>
            <Link href="/about" className="text-sm font-medium text-neutral hover:text-primary">About</Link>
            <Link href="/thesis" className="text-sm font-medium text-primary underline underline-offset-4">Thesis</Link>
            <Link href="/communities" className="text-sm font-medium text-neutral hover:text-primary">Communities</Link>
          </div>

          <div className="space-y-8">
            <Typography variant="label-lg" className="text-accent uppercase tracking-widest">The Manifesto for a New Era</Typography>
            <Typography variant="display-lg" className="text-primary leading-tight max-w-5xl mx-auto">
              The BOOT Thesis: Reclaiming the Nigerian Promise.
            </Typography>
            <Typography variant="body-lg" className="text-neutral/80 max-w-3xl mx-auto leading-relaxed">
              A foundational argument for systemic restoration, community-led governance, and the evolution of political participation from temporary cycles to permanent advocacy.
            </Typography>
            <Link href="#why-boot">
              <Button variant="primary" size="lg" className="px-12 py-4 rounded-full">
                Read the Thesis ↓
              </Button>
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="max-w-6xl mx-auto mt-20 relative group">
          <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl group-hover:bg-primary/20 transition-all" />
          <Image 
            src="/boot_logo_2022.png" 
            alt="BOOT Thesis Visual" 
            width={1200} 
            height={600} 
            className="relative z-10 rounded-3xl shadow-2xl border border-accent/20 object-cover"
          />
          <div className="absolute bottom-10 left-10 right-10 bg-white/90 backdrop-blur p-8 rounded-2xl border border-accent/20 shadow-xl max-w-2xl">
            <Typography variant="body-lg" className="text-primary italic font-serif leading-relaxed">
              "We do not seek to win the next election; we seek to win the next century for every Nigerian child."
            </Typography>
          </div>
        </div>

        {/* Chapters Navigation */}
        <div className="max-w-7xl mx-auto py-24">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { label: 'Why BOOT Exists', icon: 'ℹ️', href: '#why-boot' },
              { label: 'Nigerian Opportunity', icon: '📈', href: '#opportunity' },
              { label: 'Participation Gap', icon: '👥', href: '#gap' },
              { label: 'Movement Not Party', icon: '🏘️', href: '#movement' },
              { label: 'True Nigerian Concept', icon: '🌍', href: '#true-nigerian' },
              { label: 'Long Term Vision', icon: '🔭', href: '#vision' },
            ].map((chapter, i) => (
              <Link key={i} href={chapter.href} className="p-4 rounded-2xl bg-surface-container border border-accent/20 hover:border-primary transition-all text-center space-y-2 group">
                <div className="text-xl group-hover:scale-110 transition-transform">{chapter.icon}</div>
                <Typography variant="label-md" className="text-neutral group-hover:text-primary">{chapter.label}</Typography>
              </Link>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto space-y-32 pb-32">
          {/* Section I */}
          <div id="why-boot" className="space-y-8">
            <div className="flex items-center gap-4">
              <span className="text-4xl font-serif font-bold text-primary">I.</span>
              <Typography variant="headline-lg" className="text-primary">Why BOOT Exists</Typography>
            </div>
            <Typography variant="body-lg" className="text-neutral/80 leading-relaxed space-y-6">
              <p>
                The current political framework in Nigeria is designed for cycles, not for citizens. Every four years, the apparatus of power awakens, demanding participation, only to retreat into the shadows of bureaucracy once the ballots are counted. BOOT—the Believe Of Overseas Nigerians and Thais (and all global citizens)—was born from the realization that governance is not a seasonal event, but a continuous civic obligation.
              </p>
              <p>
                We exist to bridge the profound disconnect between the aspirations of the Nigerian people and the mechanics of the state. It is no longer enough to wait for leaders to emerge from smoke-filled rooms; we must build the infrastructure that allows the brightest minds to lead from the front, backed by a community that demands accountability in real-time.
              </p>
            </Typography>
          </div>

          {/* Section II */}
          <div id="opportunity" className="space-y-8">
            <div className="flex items-center gap-4">
              <span className="text-4xl font-serif font-bold text-primary">II.</span>
              <Typography variant="headline-lg" className="text-primary">The Nigerian Opportunity</Typography>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl bg-surface-container border border-accent/20 space-y-4">
                <div className="text-2xl">📈</div>
                <Typography variant="headline-sm" className="text-primary">Human Capital</Typography>
                <Typography variant="body-md" className="text-neutral/70">
                  Our greatest export is our intellect. BOOT leverages the global Nigerian diaspora to repatriate knowledge, technology, and visionary governance.
                </Typography>
              </div>
              <div className="p-8 rounded-3xl bg-surface-container border border-accent/20 space-y-4">
                <div className="text-2xl">🔄</div>
                <Typography variant="headline-sm" className="text-primary">Systemic Reset</Typography>
                <Typography variant="body-md" className="text-neutral/70">
                  Technology allows us to leapfrog traditional political barriers, creating a direct line between policy and public approval.
                </Typography>
              </div>
            </div>
            <Typography variant="body-lg" className="text-neutral/80 italic border-l-4 border-accent pl-6 py-2">
              Nigeria stands at a precipice. The demographic boom of the next decade can either be a dividend or a disaster. BOOT identifies the "Opportunity Gap"—the space where creative innovation meets institutional stability—and seeks to fill it with competent, audited leadership.
            </Typography>
          </div>

          {/* Section III */}
          <div id="gap" className="space-y-8">
            <div className="flex items-center gap-4">
              <span className="text-4xl font-serif font-bold text-primary">III.</span>
              <Typography variant="headline-lg" className="text-primary">The Participation Gap</Typography>
            </div>
            <Typography variant="body-lg" className="text-neutral/80 leading-relaxed">
              "The danger is not that people participate and fail; it is that the best people no longer feel participation is worth the effort."
            </Typography>
            <Typography variant="body-md" className="text-neutral/70 leading-relaxed">
              Only 34% of eligible voters participated in the last major cycle. This is not apathy; it is a rational response to a system that provides no feedback loops. BOOT's digital platform turns every citizen into a stakeholder, allowing for micro-participation that aggregates into massive systemic change.
            </Typography>
            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-2 rounded-full bg-primary text-white text-xs font-bold">✓ Verified Governance</div>
              <div className="px-4 py-2 rounded-full bg-primary text-white text-xs font-bold">✓ Open Policy Ledger</div>
            </div>
          </div>

          {/* Section IV */}
          <div id="movement" className="space-y-8">
            <div className="flex items-center gap-4">
              <span className="text-4xl font-serif font-bold text-primary">IV.</span>
              <Typography variant="headline-lg" className="text-primary">A Movement, Not Just a Party</Typography>
            </div>
            <Typography variant="body-lg" className="text-neutral/80 leading-relaxed">
              Political parties in the traditional sense are vehicles for conquest. Movements are vehicles for transformation. BOOT functions as an incubator for ideas and a shield for values. We do not just run candidates; we run education programs, community development projects, and civic audits.
            </Typography>
            <div className="relative p-8 rounded-3xl bg-surface-container border border-accent/20">
              <Image 
                src="/boot_logo_2022.png" 
                alt="BOOT Movement" 
                width={800} 
                height={400} 
                className="rounded-2xl shadow-lg object-cover"
              />
            </div>
            <Typography variant="body-md" className="text-neutral/70 leading-relaxed">
              Our structure is decentralized. Like the roots of an ancient tree, BOOT finds its strength in its local chapters. These chapters are not mere campaign offices; they are "Impact Hubs" where local problems meet collective solutions.
            </Typography>
            <div className="grid sm:grid-cols-3 gap-4">
              {['Permanent Civic Infrastructure', 'Meritocratic Candidate Vetting', 'Zero-Tolerance Transparency'].map((item, i) => (
                <div key={i} className="p-4 rounded-xl bg-white border border-accent/20 text-center font-bold text-primary text-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Section V */}
          <div id="true-nigerian" className="space-y-8">
            <div className="flex items-center gap-4">
              <span className="text-4xl font-serif font-bold text-primary">V.</span>
              <Typography variant="headline-lg" className="text-primary">The Concept of the 'True Nigerian'</Typography>
            </div>
            <Typography variant="body-md" className="text-neutral/80 mb-8">
              A True Nigerian is defined not by geography or tribe, but by a shared set of values:
            </Typography>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Integrity of Service', desc: 'Placing the public good above personal or tribal gain, always.' },
                { title: 'Intellectual Humility', desc: 'The willingness to learn from data and the experiences of others.' },
                { title: 'Ancestral Stewardship', desc: 'Acting as temporary custodians of the land for future generations.' },
                { title: 'Radical Accountability', desc: 'Inviting scrutiny as a means of improving outcomes.' },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white border border-accent/20 space-y-2">
                  <Typography variant="headline-sm" className="text-primary">{item.title}</Typography>
                  <Typography variant="body-sm" className="text-neutral/70">{item.desc}</Typography>
                </div>
              ))}
            </div>
          </div>

          {/* Section VI */}
          <div id="vision" className="space-y-8">
            <div className="flex items-center gap-4">
              <span className="text-4xl font-serif font-bold text-primary">VI.</span>
              <Typography variant="headline-lg" className="text-primary">Long-Term Vision</Typography>
            </div>
            <Typography variant="body-lg" className="text-neutral/80 leading-relaxed">
              By 2030, BOOT aims to have established a parallel civic economy where transparency is the default and engagement is the currency. We are building the first fully-audited political organization in Africa.
            </Typography>
            <div className="grid grid-cols-3 gap-6 text-center">
              {[
                { label: 'Active Members', value: '10M+' },
                { label: 'Financial Audits', value: '100%' },
                { label: 'Local Hubs', value: '774' },
              ].map((stat, i) => (
                <div key={i} className="p-6 rounded-3xl bg-primary text-white space-y-2">
                  <Typography variant="display-lg" className="font-bold">{stat.value}</Typography>
                  <Typography variant="label-md" className="text-surface-container/60 uppercase">{stat.label}</Typography>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="max-w-3xl mx-auto text-center py-20 space-y-8">
          <Typography variant="headline-lg" className="text-primary">Ready to contribute to the Thesis?</Typography>
          <Typography variant="body-md" className="text-neutral/70">
            Our movement is dynamic. If you have insights on policy, technology, or governance, we want to hear from you. Join the BOOT Think Tank.
          </Typography>
          <div className="flex justify-center gap-4">
            <Button variant="primary" size="lg" className="px-12">Submit Feedback</Button>
            <Button variant="secondary" size="lg" className="px-12">Volunteer Today</Button>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
