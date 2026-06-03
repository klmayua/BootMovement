import React from 'react';
import { PortalLayout } from '@/components/layout/PortalLayout';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { CITIZEN_NAV } from '@/constants/navigation';

export default function MessagesPage() {
  return (
    <PortalLayout portalName="Citizen Portal" navItems={CITIZEN_NAV}>

      <div className="h-[calc(100vh-120px)] flex gap-8">
        {/* Contact List */}
        <div className="w-80 bg-white rounded-3xl border border-accent/20 overflow-hidden flex flex-col">
          <div className="p-6 border-b border-accent/10 space-y-4">
            <Typography variant="headline-sm" className="text-primary">Messages</Typography>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search chats..." 
                className="w-full pl-4 pr-10 py-2 rounded-full bg-surface-container border border-neutral/10 outline-none text-sm"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral/40">🔍</span>
            </div>
          </div>
          <div className="flex-grow overflow-y-auto p-2 space-y-1">
            {[
              { name: 'Sani Musa', msg: 'The project plan is ready...', time: '2m', unread: true, role: 'Community Hub' },
              { name: 'Amina Yusuf', msg: 'Can you join the call at 4?', time: '1h', unread: false, role: 'Leadership' },
              { name: 'Lagos Mainland Hub', msg: 'New event this Saturday!', time: '5h', unread: false, role: 'Hub' },
              { name: 'Tunde Williams', msg: 'Thanks for the contribution!', time: '1d', unread: false, role: 'Peer' },
            ].map((chat, i) => (
              <div key={i} className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-colors ${i === 0 ? 'bg-primary/10' : 'hover:bg-surface-container'}`}>
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                  {chat.name[0]}
                </div>
                <div className="flex-grow overflow-hidden">
                  <div className="flex justify-between items-center">
                    <Typography variant="body-sm" className="font-bold text-neutral truncate">{chat.name}</Typography>
                    <span className="text-[10px] text-neutral/50">{chat.time}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <Typography variant="label-md" className="text-neutral/60 truncate">{chat.msg}</Typography>
                    {chat.unread && <div className="w-2 h-2 rounded-full bg-secondary" />}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Window */}
        <div className="flex-grow bg-white rounded-3xl border border-accent/20 overflow-hidden flex flex-col">
          <div className="p-6 border-b border-accent/10 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">S</div>
              <div>
                <Typography variant="body-md" className="font-bold text-neutral">Sani Musa</Typography>
                <span className="text-xs text-green-600 font-medium">Online</span>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="ghost" size="sm">📞</Button>
              <Button variant="ghost" size="sm">🎥</Button>
            </div>
          </div>
          
          <div className="flex-grow overflow-y-auto p-6 space-y-6 bg-surface-container/30">
            <div className="flex justify-center">
              <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-[10px] font-bold uppercase">Today</span>
            </div>
            <div className="flex justify-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">S</div>
              <div className="max-w-md p-3 rounded-2xl rounded-tl-none bg-white border border-accent/10 text-sm text-neutral leading-relaxed">
                Hello Chidi! I've just finished the draft for the Youth Tech Center renovation. Could you take a look at the budget section?
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <div className="max-w-md p-3 rounded-2xl rounded-tr-none bg-primary text-white text-sm leading-relaxed">
                Hey Sani! I'll check it out right now. I think we might need to allocate more to the solar components.
              </div>
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">C</div>
            </div>
            <div className="flex justify-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">S</div>
              <div className="max-w-md p-3 rounded-2xl rounded-tl-none bg-white border border-accent/10 text-sm text-neutral leading-relaxed">
                Agreed. I'll update the spreadsheet and send it back.
              </div>
            </div>
          </div>

          <div className="p-6 border-t border-accent/10 flex gap-4">
            <input 
              type="text" 
              placeholder="Type a message..." 
              className="flex-grow px-4 py-2 rounded-full bg-surface-container border border-neutral/10 outline-none focus:border-primary text-sm"
            />
            <Button variant="primary" size="sm" className="rounded-full px-6">Send</Button>
          </div>
        </div>
      </div>
    </PortalLayout>
  );
}
