import React from 'react';
import { PartyNavbar } from './PartyNavbar';
import { PartyFooter } from './PartyFooter';

export const PartyLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col bg-surface overflow-x-hidden">
      <PartyNavbar />
      <main className="flex-grow">
        {children}
      </main>
      <PartyFooter />
    </div>
  );
};
