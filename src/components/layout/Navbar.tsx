import React from 'react';
import Link from 'next/link';
import { Button } from './ui/Button';
import Image from 'next/image';

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-surface border-b border-accent/20 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/boot_logo_2022.png" 
            alt="BOOT Logo" 
            width={40} 
            height={40} 
            className="object-contain"
          />
          <span className="font-serif font-bold text-primary text-xl hidden md:block">BOOT MOVEMENT</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <Link href="/about" className="text-sm font-medium text-neutral hover:text-primary transition-colors">About</Link>
          <Link href="/thesis" className="text-sm font-medium text-neutral hover:text-primary transition-colors">Thesis</Link>
          <Link href="/movement" className="text-sm font-medium text-neutral hover:text-primary transition-colors">Movement</Link>
          <Link href="/candidates" className="text-sm font-medium text-neutral hover:text-primary transition-colors">Candidates</Link>
          <Link href="/donate" className="text-sm font-medium text-neutral hover:text-primary transition-colors">Donate</Link>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/auth/login">
            <Button variant="ghost" size="sm">Login</Button>
          </Link>
          <Link href="/join">
            <Button variant="action" size="sm">Join BOOT</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
