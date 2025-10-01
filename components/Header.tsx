'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();

    // If we're not on the home page, navigate to home first
    if (pathname !== '/') {
      router.push(`/#${targetId}`);
      return;
    }

    // If we're on the home page, scroll to the element
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="sticky top-0 z-50">
      {/* Top bar with group companies */}
      <div className="bg-slate-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-end items-center space-x-8 text-xs">
            <a href="https://appliscale.io" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">
              APPLISCALE
            </a>
            <a href="https://appliscalelabs.com/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">
              LABS
            </a>
            <a href="http://www.appliscaleventures.com/" target="_blank" rel="noopener noreferrer" className="text-slate-400 cursor-default">
              VENTURES
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link href="/" className="text-lg font-medium text-foreground">
                APPLISCALE VENTURES
              </Link>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a 
                href="#home" 
                onClick={(e) => handleNavClick(e, 'home')}
                className="text-foreground text-sm hover:underline transition-all cursor-pointer py-1.5"
              >
                Home
              </a>
              <Link
                href="/why"
                className="text-foreground text-sm hover:underline transition-all py-1.5"
              >
                Why
              </Link>
              <a 
                href="#portfolio" 
                onClick={(e) => handleNavClick(e, 'portfolio')}
                className="text-foreground text-sm hover:underline transition-all cursor-pointer py-1.5"
              >
                Portfolio
              </a>
              <a 
                href="#team" 
                onClick={(e) => handleNavClick(e, 'team')}
                className="text-foreground text-sm hover:underline transition-all cursor-pointer py-1.5"
              >
                Team
              </a>
              <Link
                href="/contact"
                className="bg-primary text-primary-foreground px-3 py-1.5 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm"
              >
                Get in Touch
              </Link>
            </nav>

            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <nav className="flex flex-col space-y-4 px-8 py-6">
              <a 
                href="#home" 
                onClick={(e) => handleNavClick(e, 'home')}
                className="text-foreground text-sm hover:underline transition-all cursor-pointer"
              >
                Home
              </a>
              <Link
                href="/why"
                className="text-foreground text-sm hover:underline transition-all"
              >
                Why
              </Link>
              <a
                href="#portfolio"
                onClick={(e) => handleNavClick(e, 'portfolio')}
                className="text-foreground text-sm hover:underline transition-all cursor-pointer"
              >
                Portfolio
              </a>
              <a
                href="#team"
                onClick={(e) => handleNavClick(e, 'team')}
                className="text-foreground text-sm hover:underline transition-all cursor-pointer"
              >
                Team
              </a>
              <Link
                href="/contact"
                className="bg-primary text-primary-foreground px-3 py-1.5 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm"
              >
                Get in Touch
              </Link>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
