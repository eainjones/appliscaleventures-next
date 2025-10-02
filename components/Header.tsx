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
      <div className="bg-slate-900/90 backdrop-blur-xl text-white py-2 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-end items-center space-x-8 text-xs">
            <a href="https://appliscale.io" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-200">
              APPLISCALE
            </a>
            <a href="https://appliscalelabs.com/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-200">
              LABS
            </a>
            <a href="http://www.appliscaleventures.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-400">
              VENTURES
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-slate-900/50 backdrop-blur-2xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link href="/" className="text-lg font-medium text-white">
                APPLISCALE VENTURES
              </Link>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                onClick={(e) => handleNavClick(e, 'home')}
                className="text-white/80 text-sm hover:text-cyan-400 transition-colors duration-200 cursor-pointer py-1.5"
              >
                Home
              </a>
              <Link
                href="/why"
                className="text-white/80 text-sm hover:text-cyan-400 transition-colors duration-200 py-1.5"
              >
                Why
              </Link>
              <a
                href="#portfolio"
                onClick={(e) => handleNavClick(e, 'portfolio')}
                className="text-white/80 text-sm hover:text-cyan-400 transition-colors duration-200 cursor-pointer py-1.5"
              >
                Portfolio
              </a>
              <Link
                href="/news"
                className="text-white/80 text-sm hover:text-cyan-400 transition-colors duration-200 py-1.5"
              >
                News
              </Link>
              <a
                href="#team"
                onClick={(e) => handleNavClick(e, 'team')}
                className="text-white/80 text-sm hover:text-cyan-400 transition-colors duration-200 cursor-pointer py-1.5"
              >
                Team
              </a>
              <Link
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-cyan-400 hover:to-blue-400 transition-all shadow-sm"
              >
                Get in Touch
              </Link>
            </nav>

            <button
              className="md:hidden p-2 text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/90 backdrop-blur-xl border-t border-white/10">
            <nav className="flex flex-col space-y-4 px-8 py-6">
              <a
                href="#home"
                onClick={(e) => handleNavClick(e, 'home')}
                className="text-white/80 text-sm hover:text-cyan-400 transition-colors duration-200 cursor-pointer"
              >
                Home
              </a>
              <Link
                href="/why"
                className="text-white/80 text-sm hover:text-cyan-400 transition-colors duration-200"
              >
                Why
              </Link>
              <a
                href="#portfolio"
                onClick={(e) => handleNavClick(e, 'portfolio')}
                className="text-white/80 text-sm hover:text-cyan-400 transition-colors duration-200 cursor-pointer"
              >
                Portfolio
              </a>
              <Link
                href="/news"
                className="text-white/80 text-sm hover:text-cyan-400 transition-colors duration-200"
              >
                News
              </Link>
              <a
                href="#team"
                onClick={(e) => handleNavClick(e, 'team')}
                className="text-white/80 text-sm hover:text-cyan-400 transition-colors duration-200 cursor-pointer"
              >
                Team
              </a>
              <Link
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-cyan-400 hover:to-blue-400 transition-all shadow-sm"
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
