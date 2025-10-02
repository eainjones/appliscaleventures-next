'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <div className="flex-grow flex items-center justify-center px-8">
        <div className="max-w-2xl text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-primary/20">404</h1>
            <h2 className="text-3xl font-semibold text-foreground mt-4 mb-4">
              Page Not Found
            </h2>
            <p className="text-lg text-muted-foreground">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button size="lg" className="w-full sm:w-auto">
                <Home className="h-4 w-4 mr-2" />
                Go Home
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.history.back()}
              className="w-full sm:w-auto"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Go Back
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">
              Looking for something specific?
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <Link href="/#portfolio" className="text-primary hover:underline">
                Portfolio
              </Link>
              <Link href="/news" className="text-primary hover:underline">
                News
              </Link>
              <Link href="/why" className="text-primary hover:underline">
                Why Appliscale
              </Link>
              <Link href="/contact" className="text-primary hover:underline">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
