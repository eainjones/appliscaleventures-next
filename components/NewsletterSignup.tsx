'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Mail, Check } from 'lucide-react';

interface NewsletterSignupProps {
  variant?: 'default' | 'minimal';
}

export default function NewsletterSignup({ variant = 'default' }: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');

    // Simulate API call - replace with actual newsletter service
    setTimeout(() => {
      setStatus('success');
      setMessage('Thank you for subscribing!');
      setEmail('');

      // Reset after 3 seconds
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 3000);
    }, 1000);
  };

  if (variant === 'minimal') {
    return (
      <div className="w-full">
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-grow">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10"
              disabled={status === 'loading' || status === 'success'}
            />
          </div>
          <Button
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            className="whitespace-nowrap"
          >
            {status === 'loading' ? 'Subscribing...' : status === 'success' ? <><Check className="h-4 w-4 mr-2" />Subscribed</> : 'Subscribe'}
          </Button>
        </form>
        {message && (
          <p className={`mt-2 text-sm ${status === 'error' ? 'text-destructive' : 'text-green-600'}`}>
            {message}
          </p>
        )}
      </div>
    );
  }

  return (
    <Card className="w-full shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-primary/10 p-3 rounded-lg">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">Get our latest insights and news</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="your.email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === 'loading' || status === 'success'}
            className="w-full"
          />

          <Button
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            className="w-full"
          >
            {status === 'loading' ? 'Subscribing...' : status === 'success' ? <><Check className="h-4 w-4 mr-2" />Subscribed!</> : 'Subscribe to Newsletter'}
          </Button>

          {message && (
            <p className={`text-sm text-center ${status === 'error' ? 'text-destructive' : 'text-green-600'}`}>
              {message}
            </p>
          )}

          <p className="text-xs text-muted-foreground text-center">
            By subscribing, you agree to receive our newsletter. Unsubscribe anytime.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
