import React from 'react';
import { AuthLayout } from '@/components/layout/AuthLayout';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import Link from 'next/link';

export default function JoinPage() {

  return (
    <AuthLayout>
      <div className="space-y-8">
        <div className="space-y-4 text-center">
          <Typography variant="headline-md" className="text-primary">Start Your Journey</Typography>
          <Typography variant="body-sm" className="text-neutral/70">
            Fill in your details to begin the onboarding process and take the True Nigerian Pledge.
          </Typography>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <Input label="First Name" placeholder="Chidi" />
            <Input label="Last Name" placeholder="Okafor" />
          </div>
          <Input label="Email Address" type="email" placeholder="chidi@example.com" />
          <Input label="Phone Number" type="tel" placeholder="+234 ..." />
          <Input label="State of Residence" placeholder="e.g. Lagos" />
          <Input label="Local Government Area" placeholder="e.g. Ikeja" />
          
          <div className="flex items-start gap-3 p-4 rounded-xl bg-accent/10 border border-accent/20">
            <input type="checkbox" id="terms" className="mt-1" />
            <label htmlFor="terms" className="text-xs text-neutral/80 leading-relaxed">
              I agree to the BOOT Movement Code of Conduct and commit to the values of the True Nigerian identity.
            </label>
          </div>

          <Button variant="action" size="lg" className="w-full py-6">
            Create Account
          </Button>
        </form>

        <div className="text-center">
          <Typography variant="body-sm" className="text-neutral/60">
            Already a member? <Link href="/auth/login" className="text-primary font-bold hover:underline">Login here</Link>
          </Typography>
        </div>
      </div>
    </AuthLayout>
  );
}
