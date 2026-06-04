'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  label: string;
  href: string;
  icon: string;
}

const NAV_CONFIGS = {
  public: [
    { label: 'Home', href: '/', icon: 'home' },
    { label: 'About', href: '/about', icon: 'info' },
    { label: 'Communities', href: '/communities', icon: 'groups' },
    { label: 'Events', href: '/events', icon: 'event' },
    { label: 'Party', href: '/party', icon: 'language' },
    { label: 'Join', href: '/join', icon: 'person_add' },
  ],
  citizen: [
    { label: 'Home', href: '/citizen/dashboard', icon: 'home' },
    { label: 'Profile', href: '/citizen/profile', icon: 'person' },
    { label: 'Communities', href: '/citizen/communities', icon: 'groups' },
    { label: 'Impact', href: '/citizen/impact', icon: 'analytics' },
    { label: 'Settings', href: '/citizen/settings', icon: 'settings' },
  ],
  executive: [
    { label: 'Command', href: '/admin/dashboard', icon: 'grid_view' },
    { label: 'Campaign', href: '/campaign', icon: 'campaign' },
    { label: 'Narrative', href: '/narrative', icon: 'psychology' },
    { label: 'Intel', href: '/admin/dashboard', icon: 'analytics' },
    { label: 'Settings', href: '/citizen/settings', icon: 'settings' },
  ],
};

export function BottomNav() {
  const pathname = usePathname();

  const getNavConfig = () => {
    if (pathname.startsWith('/citizen')) return NAV_CONFIGS.citizen;
    if (pathname.startsWith('/admin') || pathname === '/campaign' || pathname === '/narrative') return NAV_CONFIGS.executive;
    return NAV_CONFIGS.public;
  };

  const config = getNavConfig();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden 
                    bg-surface/80 backdrop-blur-lg border-t border-outline-variant/30 
                    flex justify-around items-center 
                    h-20 pb-[env(safe-area-inset-bottom)]"
         aria-label="Mobile Navigation">
      {config.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`relative flex flex-col items-center justify-center gap-1 
                        px-4 py-2 min-w-[64px] transition-all duration-200 
                        active:scale-90 touch-manipulation
                        ${isActive ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'}`}
            aria-current={isActive ? 'page' : undefined}
          >
            <span className={`material-symbols-outlined transition-all duration-200 
                             ${isActive ? 'scale-110' : 'scale-100'}`}
                  style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}>
              {item.icon}
            </span>
            <span className={`text-[10px] leading-none ${isActive ? 'font-bold' : 'font-medium'}`}>{item.label}</span>
            {isActive && (
              <div className="absolute -bottom-1 w-1 h-1 bg-primary rounded-full" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
