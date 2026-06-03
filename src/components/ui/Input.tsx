import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = ({ className, label, error, ...props }: InputProps) => {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label className="text-sm font-medium text-neutral/80 ml-1">
          {label}
        </label>
      )}
      <input
        className={cn(
          'px-3 py-2 bg-surface border border-neutral/20 rounded-default outline-none transition-all',
          'focus:border-primary focus:ring-0 focus:border-2',
          error && 'border-secondary',
          className
        )}
        {...props}
      />
      {error && (
        <span className="text-xs text-secondary ml-1">{error}</span>
      )}
    </div>
  );
};
