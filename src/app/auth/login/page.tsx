import React from 'react';
import { AuthLayout } from '@/components/layout/AuthLayout';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <AuthLayout>
      <div className="space-y-6">
        <div className="space-y-4 text-center">
          <Typography variant="headline-md" className="text-primary">Welcome Back</Typography>
          <Typography variant="body-sm" className="text-neutral/70">Enter your credentials to access your portal</Typography>
        </div>

        <form className="space-y-6">
          <Input label="Citizen ID or Email" placeholder="BOOT-2026-..." />
          <Input label="Password" type="password" placeholder="••••••••" />
          
          <div className="flex justify-between items-center text-xs">
            <label className="flex items-center gap-2 text-neutral/70 cursor-pointer">
              <input type="checkbox" className="rounded" /> Remember me
            </label>
            <Link href="/auth/recovery" className="text-primary font-bold hover:underline">Forgot Password?</Link>
          </div>

          <Button variant="action" size="lg" className="w-full py-6">
            Sign In
          </Button>
        </form>

        <div className="text-center pt-4">
          <Typography variant="body-sm" className="text-neutral/60">
            Not a member yet? <Link href="/join" className="text-primary font-bold hover:underline">Join the Movement</Link>
          </Typography>
        </div>
      </div>
    </AuthLayout>
  );
}
