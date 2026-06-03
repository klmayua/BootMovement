import React from 'react';
import { PortalLayout } from '@/components/layout/PortalLayout';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardContent } from '@/components/ui/Card';

export default function SettingsPage() {
  return (
    <PortalLayout>
      <div className="max-w-3xl mx-auto space-y-12">
        <div>
          <Typography variant="headline-lg" className="text-primary">Account Settings</Typography>
          <Typography variant="body-md" className="text-neutral/70">Manage your personal information and portal preferences.</Typography>
        </div>

        <div className="space-y-8">
          {/* Profile Settings */}
          <Card>
            <CardContent className="p-8 space-y-6">
              <Typography variant="headline-sm" className="text-primary">Profile Information</Typography>
              <div className="grid md:grid-cols-2 gap-6">
                <Input label="Display Name" defaultValue="Chidi Okafor" />
                <Input label="Email" defaultValue="chidi@example.com" />
                <Input label="Phone Number" defaultValue="+234 803 123 4567" />
                <Input label="City" defaultValue="Lagos" />
              </div>
              <Button variant="primary" size="sm">Save Changes</Button>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card>
            <CardContent className="p-8 space-y-6">
              <Typography variant="headline-sm" className="text-primary">Notifications</Typography>
              <div className="space-y-4">
                {[
                  { label: 'Email Alerts', desc: 'Receive weekly updates on movement progress.', enabled: true },
                  { label: 'Push Notifications', desc: 'Get real-time alerts for hub activities.', enabled: true },
                  { label: 'Newsletter', desc: 'Subscribe to the BOOT Monthly Thesis review.', enabled: false },
                ].map((notif, i) => (
                  <div key={i} className="flex justify-between items-center p-4 rounded-xl bg-surface-container border border-accent/10">
                    <div className="space-y-1">
                      <Typography variant="body-md" className="font-medium text-neutral">{notif.label}</Typography>
                      <Typography variant="body-sm" className="text-neutral/60">{notif.desc}</Typography>
                    </div>
                    <input type="checkbox" defaultChecked={notif.enabled} className="w-5 h-5 accent-primary" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Security Settings */}
          <Card>
            <CardContent className="p-8 space-y-6">
              <Typography variant="headline-sm" className="text-primary">Security & Privacy</Typography>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 rounded-xl bg-surface-container border border-accent/10">
                  <div>
                    <Typography variant="body-md" className="font-medium text-neutral">Two-Factor Authentication</Typography>
                    <Typography variant="body-sm" className="text-neutral/60">Add an extra layer of security to your account.</Typography>
                  </div>
                  <Button variant="secondary" size="sm">Enable</Button>
                </div>
                <div className="flex justify-between items-center p-4 rounded-xl bg-surface-container border border-accent/10">
                  <div>
                    <Typography variant="body-md" className="font-medium text-neutral">Profile Visibility</Typography>
                    <Typography variant="body-sm" className="text-neutral/60">Control who can see your impact score and badges.</Typography>
                  </div>
                  <select className="text-sm p-2 rounded border border-neutral/20 outline-none bg-white">
                    <option>Public</option>
                    <option>Hub Members Only</option>
                    <option>Private</option>
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end">
            <Button variant="ghost" size="md" className="text-secondary hover:bg-secondary/10">
              Delete Account
            </Button>
          </div>
        </div>
      </div>
    </PortalLayout>
  );
}
