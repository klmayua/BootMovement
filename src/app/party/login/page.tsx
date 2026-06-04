'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { PartyLayout } from '@/components/layout/PartyLayout';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';

const ROLE_MAPPING = [
  { 
    role: 'Citizen', 
    email: 'citizen@bootmovement.org', 
    password: 'password123', 
    dashboard: '/citizen/dashboard',
    desc: 'Standard Voter & Community Member'
  },
  { 
    role: 'Administrator', 
    email: 'admin@bootmovement.org', 
    password: 'adminpassword', 
    dashboard: '/admin/dashboard',
    desc: 'System & Registry Management'
  },
  { 
    role: 'Candidate', 
    email: 'candidate@bootmovement.org', 
    password: 'candidatepassword', 
    dashboard: '/candidate/dashboard',
    desc: 'Election & Campaign Management'
  },
  { 
    role: 'Leadership', 
    email: 'leader@bootmovement.org', 
    password: 'leaderpassword', 
    dashboard: '/leadership/dashboard',
    desc: 'National Executive Council'
  },
  { 
    role: 'Volunteer', 
    email: 'volunteer@bootmovement.org', 
    password: 'volunteerpassword', 
    dashboard: '/volunteer/dashboard',
    desc: 'Field Operations & Outreach'
  },
  { 
    role: 'Campaign Manager', 
    email: 'campaign@bootmovement.org', 
    password: 'campaignpassword', 
    dashboard: '/campaign',
    desc: 'Strategic Command'
  },
];

export default function PartyLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [activeRole, setActiveRole] = useState<string | null>(null);

  const handleRoleSelect = (roleData: typeof ROLE_MAPPING[0]) => {
    setActiveRole(roleData.role);
    setEmail(roleData.email);
    setPassword(roleData.password);
  };

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    
    const role = ROLE_MAPPING.find(r => r.email === email);
    if (role) {
      router.push(role.dashboard);
    } else {
      // Fallback to citizen if manually typed something else
      router.push('/citizen/dashboard');
    }
  };

  return (
    <PartyLayout>
      <div className="min-h-[calc(100vh-160px)] flex items-center justify-center px-4 py-12 bg-surface">
        <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Branding & Context */}
          <div className="space-y-8 text-center md:text-left">
            <div>
              <Typography variant="display-lg" className="text-primary mb-4">Secure Access</Typography>
              <Typography variant="body-lg" className="text-neutral/80">
                Access the BOOT Civic Operating System. Please authenticate your identity 
                to enter your designated administrative or civic portal.
              </Typography>
            </div>
            <div className="p-6 bg-primary-container rounded-2xl border border-primary/20">
              <Typography variant="label-md" className="text-primary font-bold mb-2">Security Notice</Typography>
              <Typography variant="body-sm" className="text-on-primary-container">
                This portal is protected by institutional-grade encryption. All access is 
                logged on the National Open Ledger for transparency and accountability.
              </Typography>
            </div>
          </div>

          {/* Right Side: Login Form & Role Selector */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-outline-variant/30 space-y-10">
            <div className="text-center space-y-2">
              <Typography variant="headline-md" className="text-primary">Sign In</Typography>
              <Typography variant="body-sm" className="text-neutral/60">Enter your credentials or select a demo role</Typography>
            </div>

            <form onSubmit={handleSignIn} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-neutral uppercase tracking-wider">Official Email</label>
                <input 
                  type="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface-container-low outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="name@bootmovement.org"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-neutral uppercase tracking-wider">Security Key</label>
                <input 
                  type="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface-container-low outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="••••••••"
                  required
                />
              </div>
              <Button variant="primary" className="w-full py-4 text-lg" type="submit">
                Authenticate Access
              </Button>
            </form>

            <div className="space-y-4">
              <div className="relative flex items-center py-2">
                <div className="flex-grow border-t border-outline-variant/30"></div>
                <span className="flex-shrink mx-4 text-xs font-bold text-neutral/40 uppercase tracking-widest">Demo Roles</span>
                <div className="flex-grow border-t border-outline-variant/30"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ROLE_MAPPING.map((item) => (
                  <button 
                    key={item.role}
                    onClick={() => handleRoleSelect(item)}
                    className={`text-left p-3 rounded-xl border transition-all duration-200 ${
                      activeRole === item.role 
                        ? 'bg-primary text-white border-primary shadow-md scale-[1.02]' 
                        : 'bg-surface border-outline-variant/30 hover:border-primary text-neutral hover:text-primary'
                    }`}
                  >
                    <div className="font-bold text-sm">{item.role}</div>
                    <div className={`text-[10px] ${activeRole === item.role ? 'text-white/80' : 'text-neutral/60'}`}>
                      {item.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PartyLayout>
  );
}
