import React from 'react';
import { PortalLayout } from '@/components/layout/PortalLayout';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { CITIZEN_NAV } from '@/constants/navigation';
import Image from 'next/image';

export default function CitizenDashboard() {
  return (
    <PortalLayout portalName="Citizen Portal" navItems={CITIZEN_NAV}>
      <div className="space-y-12">
        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex items-center gap-6">
            <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-primary shadow-lg">
              <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgBf-4VgluaTQxNUJZJhiJ1UpFCFwFRVE6Y0839SA_jeHy4_BFpDPzqHhQSfWi_0YgU6EGn4nR85eskJ_mnwNj0_kHGKGflvBrBYRdrGa5Jd4MYPPamS3YkvFwY68lJLRIdftrJmTJSR2f2VfiCxlLgtzL8RQBRIpGMa56Gzfa2zgiy5f9OitQGOu-7YUoKsLAnffOWJlrAqOIzVfZ59WuC11VCUjuvLUVBbBeI5QmIvf6QKCTTGcGT-fYzr4FmDE1P1I2OXmLFjvr" alt="Profile" fill className="object-cover" />
            </div>
            <div className="space-y-1">
              <Typography variant="headline-lg" className="text-primary">Welcome back, Citizen Adebayo</Typography>
              <Typography variant="body-md" className="text-neutral/70">
                Your contribution to the movement is shaping a stable and visionary future for Nigeria. Keep the momentum going.
              </Typography>
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="secondary" size="sm">Donate Now</Button>
            <Button variant="primary" size="sm">Complete Profile</Button>
          </div>
        </div>

        {/* Status Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* True Nigerian Card */}
          <Card className="p-8 space-y-6 border-none shadow-sm bg-white">
            <div className="flex justify-between items-center">
              <Typography variant="headline-sm" className="text-primary">True Nigerian</Typography>
              <span className="px-3 py-1 rounded-full bg-primary text-white text-xs font-bold">LVL 08</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-3xl">⭐</div>
              <div className="space-y-1">
                <Typography variant="body-md" className="font-bold text-neutral">14 Day Streak</Typography>
                <Typography variant="body-sm" className="text-neutral/60">Active Citizen status maintained</Typography>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-neutral">
                <span>Progress to Level 09</span>
                <span>850 / 1000 XP</span>
              </div>
              <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-primary" style={{ width: '85%' }} />
              </div>
            </div>
          </Card>

          {/* Profile Completion */}
          <Card className="p-8 space-y-6 border-none shadow-sm bg-white">
            <div className="flex justify-between items-center">
              <Typography variant="headline-sm" className="text-primary">Profile Completion</Typography>
              <span className="text-xl font-bold text-primary">70%</span>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-neutral">
                <span className="text-green-500">✓</span> Verified Identity
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral/60">
                <span className="text-neutral/30">○</span> Add Voter ID Details
              </div>
            </div>
          </Card>

          {/* Contribution Score */}
          <Card className="p-8 space-y-6 border-none shadow-sm bg-white">
            <div className="flex justify-between items-center">
              <Typography variant="headline-sm" className="text-primary">Contribution Score</Typography>
              <span className="text-2xl font-bold text-primary">4,892</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-green-600">
                <span>📈</span> +12% from last week
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral">
                <span className="text-accent">🏆</span> Top 5% in Lagos State
              </div>
            </div>
          </Card>
        </div>

        {/* Active Communities */}
        <div className="space-y-8">
          <div className="flex justify-between items-center">
            <Typography variant="headline-lg" className="text-primary">Active Communities</Typography>
            <Button variant="ghost" size="sm">View All →</Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                category: 'Economy', 
                title: 'Urban Resilience Hub', 
                desc: 'Collaborative space for designing modern sustainable living standards.', 
                members: '1.2k', 
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIg495cONGLLWnE3iezh66wPKWA-f3xj5gkGuSai-sinjDR387DiL6HUgWAem094PszjY1mYO8wuqzaXreIXsWnBLEKu6UmF4_rPkv1oQ_lMIZz-n0Fnov24ZGGl0LfjaVomMQo1FTuVqRFRujbLBm8oiElRCpJusSSvuhqHbY39mXL7waAgBjx9g2XIlOW2mZ7tf9ogAR-NtWeLIl6mzuX0Q-M7VReM8yx10N7x9uQyiZGjCLeHZj-WQADtUIKCPfsO2K8a0j7g1V' 
              },
              { 
                category: 'Education', 
                title: 'Tech Literacy League', 
                desc: 'Bridging the digital divide for the next generation of leaders.', 
                members: '3.4k', 
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzZ_pQoms7QwZqv1yXKSQ4jeYuVoqassh6rBT_HPJWrOuLizCJh-m8G2WviYJ4ZAwD6pnIsw8cmFxx_RPeNQa17tO1ZSFnn9GZ4lnIsOmdcqLlRZwwwveRMzbUZnY3LFB8KRugkRp8nyIWcNVa9ZfAasy3XRoEhUZN4xAVgQrn1IQwpHNQoc0rVOIf-_CIW6gNeqG8iL-DFnX2D3b8psOl1SImdnV8P-TwZp1CNRL_KriNZxo8CE2c_TXGAC9pHLIwM0phhYAa96JX' 
              },
              { 
                category: 'Climate', 
                title: 'Solar Pioneers', 
                desc: 'Advancing clean energy initiatives through community action.', 
                members: '890', 
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBo3sZBcHjU9LTcbrlTXXwg6aK-M6OngmdYbYNFZ0zccS3BdecWICcnPW6dabw0CVNY-NPocoHHfHNZ9xnv4e7FCgOX8QhzLYIYRIrBuP_NBbl9d4-Mi3Cgm0RTJvYJhtGTXm0o6tKi5uR4k3LA91rKI-Ts5kKSaFeZNRQBzCZoCY66sZGdYl6W53Z0KsVUuLhtKxKGgjA0ry-CWyXkxAO9-BqeI3jPvQmUxYy4-tUiPjsbS1MqRxt2SDECfNzSgf3Vvb5ivbHrVoGH' 
              },
            ].map((hub, i) => (
              <Card key={i} className="overflow-hidden group cursor-pointer">
                <div className="h-40 relative overflow-hidden">
                  <Image src={hub.img} alt={hub.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <CardContent className="p-6 space-y-4">
                  <Typography variant="label-md" className="text-accent uppercase">{hub.category}</Typography>
                  <Typography variant="headline-sm" className="text-primary">{hub.title}</Typography>
                  <Typography variant="body-sm" className="text-neutral/70 leading-relaxed">
                    {hub.desc}
                  </Typography>
                  <div className="flex justify-between items-center pt-4 border-t border-accent/10">
                    <span className="text-xs font-bold text-neutral">{hub.members} Members</span>
                    <Button variant="ghost" size="sm">Enter →</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="space-y-6">
          <Typography variant="headline-lg" className="text-primary">Upcoming Events</Typography>
          <div className="space-y-4">
            {[
              { date: 'Oct 24', title: 'Regional Town Hall Meeting', loc: 'Civic Center, Victoria Island', time: '10:00 AM' },
              { date: 'Nov 02', title: 'Policy Workshop: Digital Economy', loc: 'Virtual Event', time: '2:00 PM' },
              { date: 'Nov 15', title: 'Community Service Saturday', loc: 'Lekki Conservation Centre', time: '8:00 AM' },
            ].map((event, i) => (
              <div key={i} className="flex items-center gap-6 p-6 rounded-3xl bg-white border border-accent/20 hover:border-primary transition-colors cursor-pointer">
                <div className="flex flex-col items-center justify-center bg-primary text-white rounded-2xl w-16 h-16 shrink-0">
                  <span className="text-xs font-bold uppercase">{event.date.split(' ')[0]}</span>
                  <span className="text-xl font-bold">{event.date.split(' ')[1]}</span>
                </div>
                <div className="flex-grow space-y-1">
                  <Typography variant="headline-sm" className="text-primary">{event.title}</Typography>
                  <div className="flex items-center gap-2 text-sm text-neutral/60">
                    <span>📍</span> {event.loc} • {event.time}
                  </div>
                </div>
                <span className="text-primary text-xl">→</span>
              </div>
            ))}
          </div>
        </div>

        {/* Take Action */}
        <div className="grid md:grid-cols-2 gap-8 pb-20">
          {[
            { title: 'Mentor a New Member', desc: 'Guide a junior citizen through their first policy contribution.', reward: '+200 XP', icon: '🤝' },
            { title: 'Review Policy Draft #112', desc: 'Provide feedback on the proposed Agricultural Subsidies bill.', reward: '+150 XP', icon: '📝' },
          ].map((action, i) => (
            <Card className="p-8 space-y-6 border-none shadow-sm bg-white group cursor-pointer hover:border-primary transition-all">
              <div className="flex items-start gap-6">
                <div className="text-4xl p-4 rounded-2xl bg-surface-container group-hover:bg-primary/10 transition-colors">
                  {action.icon}
                </div>
                <div className="space-y-2">
                  <Typography variant="headline-sm" className="text-primary">{action.title}</Typography>
                  <Typography variant="body-md" className="text-neutral/70">{action.desc}</Typography>
                </div>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-accent/10">
                <span className="text-xs font-bold text-accent uppercase">{action.reward}</span>
                <Button variant="ghost" size="sm">Start Now →</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </PortalLayout>
  );
}
