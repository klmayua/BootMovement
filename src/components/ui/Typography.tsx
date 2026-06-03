import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'display-lg' | 'headline-lg' | 'headline-md' | 'headline-sm' | 'body-lg' | 'body-md' | 'body-sm' | 'label-lg' | 'label-md';
  as?: React.ElementType;
}

const variants = {
  'display-lg': 'font-serif text-5xl md:text-6xl font-bold leading-tight tracking-tight',
  'headline-lg': 'font-serif text-3xl md:text-4xl font-semibold leading-snug',
  'headline-md': 'font-serif text-2xl md:text-3xl font-semibold leading-snug',
  'headline-sm': 'font-serif text-xl md:text-2xl font-semibold leading-snug',
  'body-lg': 'font-sans text-lg leading-relaxed',
  'body-md': 'font-sans text-base leading-relaxed',
  'body-sm': 'font-sans text-sm leading-relaxed',
  'label-lg': 'font-sans text-sm font-semibold uppercase tracking-wider',
  'label-md': 'font-sans text-xs font-medium uppercase tracking-wider',
};

export const Typography = ({ variant = 'body-md', as: Component = 'p', className, ...props }: TypographyProps) => {
  return (
    <Component className={cn(variants[variant], className)} {...props} />
  );
};
