import React from 'react';
import Link from 'next/link';

export default function AuthRecoveryPage() {
  return (
    <div className="min-h-screen bg-surface flex items-center justify-center px-margin-mobile md:px-margin-desktop">
      <div className="max-w-md w-full bg-white border border-outline-variant/30 p-8 rounded-xl shadow-sm text-center">
        <div className="w-16 h-16 bg-primary-fixed/20 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="material-symbols-outlined text-3xl">lock_reset</span>
        </div>
        <h1 className="font-headline-sm text-headline-sm text-primary mb-2">Account Recovery</h1>
        <p className="font-body-md text-on-surface-variant mb-8">
          Securely recover your BOOT Civic OS account. Enter your verified email to begin the restoration process.
        </p>
        <div className="space-y-4">
          <input 
            type="email" 
            placeholder="email@example.com" 
            className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:ring-2 focus:ring-primary outline-none"
          />
          <button className="w-full bg-primary text-white py-3 rounded-lg font-label-lg hover:opacity-90 transition-opacity">
            Send Recovery Link
          </button>
        </div>
        <div className="mt-8 pt-6 border-t border-outline-variant/20">
          <Link href="/auth/login" className="text-primary font-label-lg hover:underline">
            Back to Login
          </Link>
        </div>
        <div className="mt-6 inline-block px-3 py-1 bg-surface-container text-primary-container text-xs font-bold rounded-full uppercase tracking-widest">
          Demo Preview
        </div>
      </div>
    </div>
  );
}
