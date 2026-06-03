import React from 'react';
import { PortalLayout } from '@/components/layout/PortalLayout';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

export default function NationalFeedPage() {
  return (
    <PortalLayout>
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <Typography variant="headline-lg" className="text-primary">National Feed</Typography>
          <Button variant="primary" size="sm">Create Post</Button>
        </div>

        {/* Post Creator */}
        <Card className="border-2 border-accent/20">
          <CardContent className="p-4 space-y-4">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">CO</div>
              <textarea 
                placeholder="What's happening in your community?" 
                className="flex-grow p-3 rounded-xl bg-surface-container border border-neutral/10 outline-none focus:border-primary resize-none"
                rows={3}
              />
            </div>
            <div className="flex justify-between items-center pt-2">
              <div className="flex gap-3 text-sm text-neutral/60">
                <button className="hover:text-primary">🖼️ Image</button>
                <button className="hover:text-primary">📍 Location</button>
                <button className="hover:text-primary">👥 Tag Hub</button>
              </div>
              <Button variant="primary" size="sm">Post to Feed</Button>
            </div>
          </CardContent>
        </Card>

        {/* Feed Items */}
        <div className="space-y-6">
          {[
            { 
              user: 'Lagos Mainland Hub', 
              role: 'Hub Admin', 
              content: 'We just completed the first phase of the Youth Tech Center. 15 laptops installed and 50 students enrolled! 🚀 #CommunityImpact #LagosMainland', 
              likes: 124, 
              comments: 18, 
              time: '3h ago' 
            },
            { 
              user: 'Dr. Amina Yusuf', 
              role: 'Senate Candidate', 
              content: 'Our focus must shift from building roads to building people. Infrastructure is useless if the people using it are uneducated and unskilled.', 
              likes: 850, 
              comments: 142, 
              time: '8h ago' 
            },
            { 
              user: 'Sani Musa', 
              role: 'True Nigerian Lvl 3', 
              content: 'Just spent the weekend volunteering at the Enugu North hub. The energy here is incredible. This is how we build our tomorrow!', 
              likes: 45, 
              comments: 7, 
              time: '12h ago' 
            },
          ].map((post, i) => (
            <Card key={i} className="space-y-0">
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                      {post.user[0]}
                    </div>
                    <div>
                      <Typography variant="body-md" className="font-bold text-neutral">{post.user}</Typography>
                      <Typography variant="label-md" className="text-neutral/50">{post.role}</Typography>
                    </div>
                  </div>
                  <span className="text-xs text-neutral/40">{post.time}</span>
                </div>
                <Typography variant="body-md" className="text-neutral/80 leading-relaxed">
                  {post.content}
                </Typography>
                <div className="flex gap-6 pt-4 border-t border-accent/10">
                  <button className="flex items-center gap-2 text-sm text-neutral hover:text-primary transition-colors">
                    <span>❤️</span> {post.likes}
                  </button>
                  <button className="flex items-center gap-2 text-sm text-neutral hover:text-primary transition-colors">
                    <span>💬</span> {post.comments}
                  </button>
                  <button className="flex items-center gap-2 text-sm text-neutral hover:text-primary transition-colors ml-auto">
                    <span>🔄</span> Share
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PortalLayout>
  );
}
