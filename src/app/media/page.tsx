import React from 'react';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';

export default function MediaGalleryPage() {
  return (
    <PublicLayout>
      <section className="py-20 px-4 bg-surface">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <Typography variant="label-lg" className="text-accent">Visual History</Typography>
            <Typography variant="display-lg" className="text-primary">Media Gallery</Typography>
            <Typography variant="body-lg" className="text-neutral/80 max-w-3xl mx-auto">
              A visual record of the BOOT Movement's journey. From the first town halls 
              to the largest community projects.
            </Typography>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center gap-4 mb-12">
            {['All', 'Town Halls', 'Community Projects', 'Leadership', 'Protests', 'Videos'].map((cat, i) => (
              <Button key={i} variant={i === 0 ? 'primary' : 'ghost'} size="sm">
                {cat}
              </Button>
            ))}
          </div>

          {/* Masonry Grid Mock */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="relative group rounded-2xl overflow-hidden bg-surface-container border border-accent/20 cursor-pointer">
                <div className={`w-full ${i % 3 === 0 ? 'h-64' : i % 2 === 0 ? 'h-96' : 'h-80'} bg-primary/10`} />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                  <Typography variant="headline-sm" className="text-white">
                    Movement Moment {i + 1}
                  </Typography>
                  <Typography variant="body-sm" className="text-surface-container/80">
                    Captured during the June 2026 National Summit.
                  </Typography>
                </div>
              </div>
            ))}
          </div>

          {/* Download Asset Section */}
          <div className="bg-surface-container rounded-3xl p-12 text-center space-y-8 border border-accent/20">
            <Typography variant="headline-lg" className="text-primary">Need Official Assets?</Typography>
            <Typography variant="body-lg" className="text-neutral/80 max-w-2xl mx-auto">
              Download the official BOOT logo, brand guidelines, and approved imagery for your publications.
            </Typography>
            <Button variant="primary" size="lg">Access Brand Portal</Button>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
