import React from 'react';
import { MovementNavbar } from './MovementNavbar';
import { MovementFooter } from './MovementFooter';

export const MovementLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background overflow-x-hidden">
      <MovementNavbar />
      <main className="flex-grow">
        {children}
      </main>
      <MovementFooter />
    </div>
  );
};
