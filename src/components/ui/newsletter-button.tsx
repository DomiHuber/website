"use client";

import { Mail } from 'lucide-react';
import { Button } from './button';

interface NewsletterButtonProps {
  variant?: 'default' | 'outline' | 'secondary';
  size?: 'default' | 'sm' | 'lg';
  className?: string;
  children?: React.ReactNode;
}

export default function NewsletterButton({ 
  variant = 'default',
  size = 'default',
  className = '',
  children = 'Subscribe to Intelligence Brief'
}: NewsletterButtonProps) {
  
  const handleClick = () => {
    if (typeof window !== 'undefined' && (window as any).ml) {
      try {
        (window as any).ml('show', 'K1pHki', true);
      } catch (error) {
        console.error('MailerLite popup error:', error);
      }
    } else {
      console.warn('MailerLite not loaded yet');
    }
  };

  return (
    <Button
      onClick={handleClick}
      variant={variant}
      size={size}
      className={className}
    >
      <Mail className="w-4 h-4 mr-2" />
      {children}
    </Button>
  );
}

