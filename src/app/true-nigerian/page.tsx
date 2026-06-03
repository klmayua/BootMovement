import React from 'react';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';

export default function TrueNigerianPage() {
  return (
    <PublicLayout>
      <section className="py-20 px-4 bg-surface">
        <div className="max-w-7xl mx-auto space-y-24">
          {/* Hero */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-8">
                <Image src="/boot_logo_2022.png" alt="BOOT Logo" width={60} height={60} className="object-contain" />
                <Typography variant="headline-md" className="text-primary font-serif font-bold">BOOT Movement</Typography>
              </div>
              <Typography variant="display-lg" className="text-primary leading-tight">
                The True Nigerian Identity
              </Typography>
              <Typography variant="body-lg" className="text-neutral/80 leading-relaxed">
                Civic pride is more than a feeling; it is an active commitment to the sovereignty, progress, and unity of our nation. Become the architect of Nigeria's future.
              </Typography>
              <div className="flex flex-wrap gap-4">
                <Button variant="action" size="lg" className="px-12 py-4">Pledge Your Loyalty</Button>
                <Button variant="secondary" size="lg" className="px-12 py-4">Watch Manifesto</Button>
              </div>
            </div>
            <div className="relative">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZvs95OobQtSp3rzJIuOCqp0LSyj8DFo8Sh9tKlEOio2K1j0IGK_QN14xV01lh478zKVXvsaCP_jQ3ftM41P7RbG04KgMDqrMQXC5GbWs95FbiQn5EuIDf08Leh6vym93u2OBsFx35Vp7wKNa20kimiuqyqy0RSKbteu10yJFdcPnfhTuGIu4A_0E06xZeGmSpbfbOxj20nQqoWgE2BmEBCAfl_impUnjl0cJiZfl5s_MjKlE3ASBGaaTwHDoNabxtaQxJn7FH8kNK" 
                alt="True Nigerian Identity" 
                width={600} 
                height={600} 
                className="rounded-3xl shadow-2xl object-cover"
              />
            </div>
          </div>

          {/* Foundation of Character */}
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <Typography variant="headline-lg" className="text-primary">Foundation of Character</Typography>
              <Typography variant="body-md" className="text-neutral/70">Our identity is built on seven core values that define the modern statesman and citizen leader.</Typography>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Sovereign Integrity', desc: 'The True Nigerian acts with unshakeable honesty, placing the nation\'s interest above personal gain or tribal affiliation.', icon: '🛡️', link: '/code-of-conduct' },
                { title: 'Unity in Purpose', desc: 'Our diversity is a strategic asset. We leverage our varied backgrounds to build a singular, unstoppable vision.', icon: '🤝' },
                { title: 'Rule of Law', desc: 'Respect for institutions and the constitution is non-negotiable for the civic-minded citizen.', icon: '⚖️' },
                { title: 'Innovation', desc: 'Solving local problems through indigenous ingenuity and global technological standards.', icon: '💡' },
                { title: 'Service', desc: 'Living for a cause larger than oneself, ensuring no Nigerian is left behind in our journey.', icon: '🤲' },
              ].map((val, i) => (
                <div key={i} className="p-8 rounded-3xl bg-white border border-accent/20 space-y-4 hover:border-primary transition-all group">
                  <div className="text-3xl">{val.icon}</div>
                  <Typography variant="headline-sm" className="text-primary">{val.title}</Typography>
                  <Typography variant="body-sm" className="text-neutral/70 leading-relaxed">{val.desc}</Typography>
                  {val.link && (
                    <Link href={val.link} className="text-xs font-bold text-accent uppercase hover:text-primary transition-colors">Read more →</Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Civic Duty */}
          <div className="bg-primary text-white rounded-3xl p-12 space-y-12">
            <Typography variant="headline-lg" className="text-center text-white">The Civic Duty</Typography>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Democratic Participation', desc: 'Register, vote, and hold elected officials accountable through consistent engagement.' },
                { title: 'Economic Contribution', desc: 'Support local industries, pay fair taxes, and foster transparent business environments.' },
                { title: 'Community Policing', desc: 'Protect our neighborhoods through vigilance and cooperation with legitimate authorities.' },
              ].map((duty, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/10 border border-white/20 space-y-4">
                  <Typography variant="headline-sm" className="text-white">{duty.title}</Typography>
                  <Typography variant="body-sm" className="text-surface-container/70">{duty.desc}</Typography>
                </div>
              ))}
            </div>
          </div>

          {/* Ways to Contribute */}
          <div className="space-y-12">
            <div className="text-center">
              <Typography variant="headline-lg" className="text-primary">Ways to Contribute</Typography>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { num: '01', title: 'Policy Advocacy', desc: 'Join our working groups to draft legislative proposals that address education and health disparities.', impact: '75% Active Impact' },
                { num: '02', title: 'Local Leadership', desc: 'Run for local office or lead community development projects in your ward with BOOT support.', impact: '50% Active Impact' },
                { num: '03', title: 'Civic Education', desc: 'Volunteer to teach constitutionality and civic rights in secondary schools across the 36 states.', impact: '100% Target Met' },
              ].map((way, i) => (
                <div key={i} className="p-8 rounded-3xl bg-surface-container border border-accent/20 space-y-4">
                  <Typography variant="label-md" className="text-accent font-bold">{way.num}</Typography>
                  <Typography variant="headline-sm" className="text-primary">{way.title}</Typography>
                  <Typography variant="body-md" className="text-neutral/70">{way.desc}</Typography>
                  <div className="pt-4 border-t border-accent/10">
                    <span className="text-xs font-bold text-primary">{way.impact}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recognition */}
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <div className="text-4xl mx-auto">🎖️</div>
              <Typography variant="headline-lg" className="text-primary">Recognition Framework</Typography>
            </div>
            <div className="grid sm:grid-cols-3 gap-8">
              {[
                { title: 'Bronze Shield', desc: 'Awarded for consistent community service and local project leadership.', icon: '🥉' },
                { title: 'Silver Laurel', desc: 'Recognizing policy changes or significant civic innovations at the state level.', icon: '🥈' },
                { title: 'Gold Star of Boot', desc: 'Highest honor for lifelong dedication to Nigerian national excellence.', icon: '🥇' },
              ].map((badge, i) => (
                <div key={i} className="p-8 rounded-3xl bg-white border border-accent/20 text-center space-y-4">
                  <div className="text-4xl">{badge.icon}</div>
                  <Typography variant="headline-sm" className="text-primary">{badge.title}</Typography>
                  <Typography variant="body-sm" className="text-neutral/70">{badge.desc}</Typography>
                </div>
              ))}
            </div>
          </div>

          {/* Stories */}
          <div className="space-y-12">
            <div className="text-center">
              <Typography variant="headline-lg" className="text-primary">Stories of True Nigerians</Typography>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  quote: '"Being a True Nigerian means I no longer wait for the government to fix my street. We organized, funded, and built our own solar lighting network."', 
                  name: 'Adaugo Okafor', 
                  role: 'Community Architect, Enugu', 
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPzZXUptvJZhjqcXTn6STylTzjsrkzCgeThQtYhW1X_mBx4-PngSWzlxH0_dNLEf4GGlGzsHtWUiecj7AkKLJ1nqNC6_dklaIsQvpC6o88Xe54qyGKLt2RaxgBT8d74-hCKBQUcdXo95TKWBx_EdfjG0wzOVe6Y_KMHHNSZXRE1bSy0sna313Z7VPZxX-JvZmNb_LeuH24aRG9ze8uXwKjymZ-z79gLDYU-c39utkZA-Z3rmIXPGrur__Qqwv_pxebQTBK5TZQ6ATo' 
                },
                { 
                  quote: '"Integrity is my currency. As a civil servant, I rejected bribery and streamlined our procurement process, saving the state millions."', 
                  name: 'Musa Danjuma', 
                  role: 'Public Policy Advisor, Abuja', 
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByiOGG1AGZz5ApNSpAhkJ5SlfxF3puA95wV0zIKEXr9pf1CG2Xj-W0UlKgKPZokUAbiFMv6MiOd3KERXDpQ09FI60H62ulfoozUkfq2-BiFesNu-XJsbNxBd-aIYkPevYtgDOZvn9srFY2cSFk1M1rYCnr8GJFlkTiun_SprpVETvfkiiln-C1fGFzfwWJma6PWk_FylRM9Tb-vuzea4Y3ExnVqOivrkHqkYaZxC5J-pXV2kx2EsCxnw65h71DG0srRNBUIckRq6Ij' 
                },
                { 
                  quote: '"I taught 500 youths in Kano how to code for civic engagement. We are building the tools to monitor government spending in real-time."', 
                  name: 'Ibrahim Yusuf', 
                  role: 'Tech Lead, Kano', 
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5uBwzdH_o8DhS-vTAdUm3cersctBx0HFCU5GT0GJE4hIdyVx9H3DKIY5zk_1vNBSGBc-XtIaH7ak2mf0bN6cFILfTldf8F7nAMd0npmOO3H0a66K7eL7bXgZJY8CloNhCchiYt-qAR6rRw_eBdEAa6D_2NsK28sbQlWCY-7ZRNpMjfUsqaGTDwszdA3kcUZ0Usl-_1sUmb3u4188Fb0Pw3Qu26eRi0wwkJGxLl8Cvv7N7asUGdrap2ZOm0ukoO5eOPygbcZ4kacne' 
                },
              ].map((story, i) => (
                <Card key={i} className="p-8 space-y-6 border-none shadow-sm bg-white">
                  <div className="text-4xl text-accent">"</div>
                  <Typography variant="body-md" className="text-neutral italic leading-relaxed">
                    {story.quote}
                  </Typography>
                  <div className="flex items-center gap-4 pt-4 border-t border-accent/10">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary">
                      <Image src={story.img} alt={story.name} fill className="object-cover" />
                    </div>
                    <div className="text-left">
                      <Typography variant="body-sm" className="font-bold text-primary">{story.name}</Typography>
                      <Typography variant="label-md" className="text-neutral/60">{story.role}</Typography>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center space-y-8 py-12">
            <Typography variant="headline-lg" className="text-primary">Ready to Step Up?</Typography>
            <Typography variant="body-lg" className="text-neutral/80 max-w-2xl mx-auto">
              Nigeria is not just a place on a map; it is a collective destiny we build every day through our actions.
            </Typography>
            <div className="flex justify-center gap-4">
              <Button variant="action" size="lg" className="px-12 py-4">Sign the Civic Pledge</Button>
              <Button variant="secondary" size="lg" className="px-12 py-4">Download Resource Kit</Button>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
