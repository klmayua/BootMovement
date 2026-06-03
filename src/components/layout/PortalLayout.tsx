"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';
import Image from 'next/image';


interface NavItem {
  name: string;
  href: string;
  icon: string;
}

interface PortalLayoutProps {
  children: React.ReactNode;
  portalName: string;
  navItems: NavItem[];
  user?: {
    name: string;
    id: string;
    avatar?: string;
  };
}

export const PortalLayout = ({ 
  children, 
  portalName, 
  navItems, 
  user = { name: 'Chidi Okafor', id: 'BOOT-2026-042' } 
}: PortalLayoutProps) => {
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex bg-surface-container">
      {/* Sidebar */}
      <aside className="w-64 bg-primary text-white hidden lg:flex flex-col sticky top-0 h-screen">
        <div className="p-6 flex items-center gap-3 border-b border-primary/20">
          <Image 
            src="/boot_logo_2022.png" 
            alt="BOOT Logo" 
            width={32} 
            height={32} 
            className="brightness-200 grayscale invert"
          />
          <span className="font-serif font-bold text-lg tracking-tight">{portalName}</span>
        </div>
        
        <nav className="flex-grow p-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                'flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-sm font-medium',
                pathname === item.href 
                  ? 'bg-white text-primary' 
                  : 'text-surface-container/70 hover:bg-white/10 hover:text-white'
              )}
            >
              <span>{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-primary/20">
          <Link href="/auth/login" className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-surface-container/70 hover:bg-white/10 hover:text-white transition-colors">
            <span>🚪</span> Logout
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-grow flex flex-col min-w-0">
        <header className="h-16 bg-surface border-b border-accent/20 px-6 flex items-center justify-between sticky top-0 z-10">
          <h2 className="font-serif font-semibold text-primary text-xl">
            {navItems.find(i => i.href === pathname)?.name || 'Dashboard'}
          </h2>
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium text-neutral">{user.name}</p>
              <p className="text-xs text-neutral/60">{user.id}</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center font-bold text-primary">
              {user.name.split(' ').map(n => n[0]).join('')}
            </div>
          </div>
        </header>
        <main className="p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};
