import React from 'react';
import { PartyLayout } from '@/components/layout/PartyLayout';

export default function PartyLayoutWrapper({ children }: { children: React.ReactNode }) {
  return <PartyLayout>{children}</PartyLayout>;
}
