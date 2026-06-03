import React from 'react';
import { PortalLayout } from '@/components/layout/PortalLayout';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { CITIZEN_NAV } from '@/constants/navigation';
import Image from 'next/image';

export default function NationalFeedPage() {
  return (
    <PortalLayout portalName="Citizen Portal" navItems={CITIZEN_NAV}>
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="flex justify-between items-center">
          <Typography variant="headline-lg" className="text-primary">National Feed</Typography>
          <Button variant="primary" size="sm">Donate</Button>
        </div>

        {/* Trending Conversations */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-primary font-bold">
            <span>📈</span>
            <Typography variant="headline-sm">Trending Conversations</Typography>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { tag: '#EconomicReform', desc: 'Proposed tax relief for multi-generational families.', count: '2.4k' },
              { tag: '#DigitalSovereignty', desc: 'Protecting local data from global conglomerates.', count: '1.8k' },
              { tag: '#RuralRevival', desc: 'New grants for small-town infrastructure projects.', count: '940' },
              { tag: '#HeritageEducation', desc: 'Integrating national history into tech curriculums.', count: '3.1k' },
            ].map((trend, i) => (
              <Card key={i} className="p-4 space-y-2 hover:border-primary transition-colors cursor-pointer group">
                <div className="flex justify-between items-center">
                  <Typography variant="label-md" className="text-primary font-bold">{trend.tag}</Typography>
                  <span className="text-xs text-neutral/50">→</span>
                </div>
                <Typography variant="body-sm" className="text-neutral/70">{trend.desc}</Typography>
                <div className="text-xs font-bold text-accent">{trend.count} debating</div>
              </Card>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 py-4 border-y border-accent/10">
          <Button variant="primary" size="sm">All Updates</Button>
          <Button variant="ghost" size="sm">Leadership Statements</Button>
          <Button variant="ghost" size="sm">Policy Debates</Button>
          <Button variant="ghost" size="sm">Community Updates</Button>
        </div>

        {/* Call to Action */}
        <div className="bg-primary text-white rounded-3xl p-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-2 text-center md:text-left">
            <Typography variant="headline-md" className="text-white">Join the Vision</Typography>
            <Typography variant="body-md" className="text-surface-container/70">
              Our tradition is our future. Become a verified contributor to shape the national debate.
            </Typography>
          </div>
          <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-accent hover:text-white">
            GET VERIFIED
          </Button>
        </div>

        {/* Feed Posts */}
        <div className="space-y-8">
          {[
            { 
              user: 'Arthur Sterling', 
              role: 'Movement Chairman', 
              time: '2h ago', 
              category: 'Leadership', 
              content: '"True progress is not about discarding the foundation of our past, but building upon it with new, sharper tools. Today\'s release of the \'Digital Commons\' whitepaper represents our commitment to institutional longevity in the age of rapid automation."',
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADgpzvvYwEGS8yvkcDv0RvnacfqPqEIbvB7je31QOjh4NhCSY8p_AsWnbAxE2zmif__z6RLCZtX1RIYh_sWwqU0Nk1a8gEnO11iroas6b67k_QRVbget2hk032CPyHgO1kIYtWGEJneLxdZR_T_KogWFlCwlC1CBjskMTLOa0zbkKgpzC83kzwZ1VlKXduLwgLhh_i1CQkfS-za1KFRg64QfZzoCBrfsINl-Ccfe5l2XDKYIeuEj0H9P4R2HEgrkGo1S8fTkhPAp6G',
              actionImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdXyPEalW_It28p85GH1HTCTyIh1x7X4rK3Ds8CrEmLMxsjfsd_TOQYE9sWvCHbHRenAGG8OYZNq0lYcHbYx9Pk6Y44aKaMk-xMM4G-SP5_b4dav9FPdhngUhQ_VMxrcnsMkUt7ige88FD6xtFDrIUyop6gsRVaGFN1V_s8McI_9nbjHF18mhjcyRCek5ltP0jR0PuFtT6H5IAr0YpVQVMomOLerWroIh9gBho_G8D_j14PQvg0CWhzMrjkLIUKyWyoA7ZJawzgPIn',
              likes: '1.2k', 
              comments: '248' 
            },
          ].map((post, i) => (
            <Card key={i} className="overflow-hidden border-none shadow-sm bg-white">
              <CardContent className="p-6 space-y-6">
                <div className="flex justify-between items-start">
                  <div className="flex gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary">
                      <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuA70W8E_o2lKpDt0yx5o5DdWdPCyOf5ownwx36PcwXN738xp3bpUN7j1DucdDEijAMbmvscU_y925qsIoK46qClU2e0PThRrT7UTIWJq7HrJTxgdRjWLAAhzwuJGa0LSO63mSHjlTE3Bs3KVkM47dNWNvfLBU2tb9-r3M49JD_TXX6ge1I6qgQkUcA3fM-hEPQB9tZvqIFQSVr7Oetj_Qdsz1eKhOOKSQ8TrDZLNUzBsfc75pKAIiY-ZApDieKvZUzScFWsZ_i8Zss_" alt="Profile" fill className="object-cover" />
                    </div>
                    <div>
                      <Typography variant="body-md" className="font-bold text-neutral">{post.user}</Typography>
                      <div className="flex items-center gap-2 text-xs text-neutral/60">
                        <span className="text-primary font-bold">Verified</span>
                        <span>•</span>
                        <span>{post.role} • {post.time}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">•••</Button>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-accent uppercase">
                    <span>🏷️</span> {post.category}
                  </div>
                  <Typography variant="body-lg" className="text-neutral leading-relaxed italic">
                    {post.content}
                  </Typography>
                  <div className="relative h-80 rounded-2xl overflow-hidden border border-accent/20">
                    <Image src={post.actionImg} alt="Post content" fill className="object-cover" />
                  </div>
                  <div className="flex justify-center">
                    <Button variant="primary" size="sm" className="px-6">Read the Full Whitepaper</Button>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-6 border-t border-accent/10">
                  <div className="flex gap-6">
                    <button className="flex items-center gap-2 text-sm text-neutral hover:text-primary transition-colors">
                      <span>👍</span> {post.likes}
                    </button>
                    <button className="flex items-center gap-2 text-sm text-neutral hover:text-primary transition-colors">
                      <span>💬</span> {post.comments}
                    </button>
                    <button className="flex items-center gap-2 text-sm text-neutral hover:text-primary transition-colors">
                      <span>🔄</span> Share
                    </button>
                  </div>
                  <Button variant="ghost" size="sm">🔖</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Policy Debate */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-primary font-bold">
            <span>⚖️</span>
            <Typography variant="headline-sm">Ongoing Policy Debate</Typography>
          </div>
          <Card className="p-8 space-y-8 border-2 border-primary/20 bg-white">
            <div className="space-y-4 text-center">
              <Typography variant="headline-md" className="text-primary">Should energy infrastructure be re-nationalized?</Typography>
              <Typography variant="body-md" className="text-neutral/70">
                A discussion on balancing private innovation with public stability for the next decade's energy transition.
              </Typography>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-primary text-white text-center space-y-2">
                <Typography variant="body-md" className="font-bold">Yes, for stability</Typography>
                <Typography variant="display-lg" className="text-white font-bold">64%</Typography>
              </div>
              <div className="div-6 la-2 p-6 rounded-2xl bg-surface-container text-neutral text-center space-y-2 border border-accent/20">
                <Typography variant="body-md" className="font-bold">No, maintain market competition</Typography>
                <Typography variant="display-lg" className="text-primary font-bold">36%</Typography>
              </div>
            </div>
            <div className="text-center">
              <Button variant="action" size="lg" className="px-12">JOIN DEBATE</Button>
            </div>
          </Card>
        </div>

        {/* Movement Pulse */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-20">
          {[
            { label: 'Membership Goal', value: '82%', icon: '🎯' },
            { label: 'Policy Consensus', value: '64%', icon: '⚖️' },
            { label: 'Active Today', value: '45.2k', icon: '⚡' },
            { label: 'New Policies', value: '12', icon: '📜' },
          ].map((stat, i) => (
            <div key={i} className="p-6 rounded-3xl bg-white border border-accent/20 text-center space-y-2">
              <div className="text-2xl mb-2">{stat.icon}</div>
              <Typography variant="display-lg" className="text-primary font-bold">{stat.value}</Typography>
              <Typography variant="label-md" className="text-neutral/60 uppercase">{stat.label}</Typography>
            </div>
          ))}
        </div>
      </div>
    </PortalLayout>
  );
}
