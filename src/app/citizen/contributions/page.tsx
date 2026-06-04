import React from 'react';
import Link from 'next/link';

export default function CitizenContributionsPage() {
  return (
    <div className="min-h-screen bg-surface">
      <header className="w-full border-b border-outline-variant/30 px-margin-desktop py-4 flex justify-between items-center">
        <h1 className="font-headline-sm text-headline-sm text-primary">My Contributions</h1>
        <Link href="/citizen/dashboard" className="text-primary font-label-lg hover:underline flex items-center gap-1">
          <span className="material-symbols-outlined text-sm">arrow_back</span> Back to Dashboard
        </Link>
      </header>
      <main className="max-w-container-max mx-auto px-margin-desktop py-12">
        <div className="bg-white border border-outline-variant/30 p-12 rounded-xl text-center">
          <div className="w-20 h-20 bg-primary-fixed/20 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="material-symbols-outlined text-4xl">volunteer_activism</span>
          </div>
          <h2 className="font-headline-md text-headline-md text-primary mb-4">Contribution Ledger</h2>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
            Your verified record of institutional impact. This section tracks your financial support, community labor, and policy stewardship.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 bg-surface-container-low rounded-lg border border-outline-variant/20">
              <span className="block font-label-md text-on-surface-variant uppercase mb-2">Lifetime Points</span>
              <span className="text-display-lg font-display-lg text-primary">4,820 PT</span>
            </div>
            <div className="p-6 bg-surface-container-low rounded-lg border border-outline-variant/20">
              <span className="block font-label-md text-on-surface-variant uppercase mb-2">Total Donated</span>
              <span className="text-display-lg font-display-lg text-primary">$12,450</span>
            </div>
            <div className="p-6 bg-surface-container-low rounded-lg border border-outline-variant/20">
              <span className="block font-label-md text-on-surface-variant uppercase mb-2">Verified Hours</span>
              <span className="text-display-lg font-display-lg text-primary">164.5h</span>
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <button className="bg-primary text-white px-8 py-3 rounded-lg font-label-lg hover:opacity-90 transition-opacity">
              Download Impact Report
            </button>
            <button className="border border-primary text-primary px-8 py-3 rounded-lg font-label-lg hover:bg-primary/5 transition-all">
              Update Profile
            </button>
          </div>
        </div>
        <div className="mt-12 text-center">
          <span className="px-3 py-1 bg-surface-container text-primary-container text-xs font-bold rounded-full uppercase tracking-widest">
            Demo Preview
          </span>
        </div>
      </main>
    </div>
  );
}
