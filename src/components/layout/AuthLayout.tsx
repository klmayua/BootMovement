import React from 'react';
import { Card } from '../ui/Card';
import Image from 'next/image';

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-surface flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <Image 
            src="/boot_logo_2022.png" 
            alt="BOOT Logo" 
            width={80} 
            height={80} 
            className="mx-auto mb-4 object-contain"
          />
          <h1 className="font-serif text-3xl font-bold text-primary">Welcome to BOOT</h1>
          <p className="text-neutral/60 mt-2">Join the movement for a better Nigeria</p>
        </div>
        <Card variant="elevated">
          <CardContent className="p-8">
            {children}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
