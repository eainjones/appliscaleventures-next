import React from 'react';
import Link from 'next/link';
import { Linkedin } from 'lucide-react';
import NewsletterSignup from './NewsletterSignup';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-8 py-16">
        {/* Newsletter Section */}
        <div className="mb-12 pb-12 border-b border-white/10">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Stay in the Loop</h3>
            <p className="text-slate-400 mb-6">
              Get our latest news, investment insights, and portfolio updates delivered to your inbox.
            </p>
            <NewsletterSignup variant="minimal" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-lg mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Appliscale Ventures</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Backing exceptional founders building tomorrow's companies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium text-sm mb-4 text-cyan-400 uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-slate-400 hover:text-cyan-400 transition-colors duration-200 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/why" className="text-slate-400 hover:text-cyan-400 transition-colors duration-200 text-sm">
                  Why Appliscale
                </Link>
              </li>
              <li>
                <Link href="/#portfolio" className="text-slate-400 hover:text-cyan-400 transition-colors duration-200 text-sm">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-slate-400 hover:text-cyan-400 transition-colors duration-200 text-sm">
                  News
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-cyan-400 transition-colors duration-200 text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-medium text-sm mb-4 text-cyan-400 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="mailto:hello@appliscaleventures.com" className="text-slate-400 hover:text-cyan-400 transition-colors duration-200">
                  hello@appliscaleventures.com
                </a>
              </li>
              <li>
                <a href="mailto:invest@appliscaleventures.com" className="text-slate-400 hover:text-cyan-400 transition-colors duration-200">
                  invest@appliscaleventures.com
                </a>
              </li>
              <li className="text-slate-400 pt-2">
                <div className="text-sm">
                  ul. Zyczkowskiego 14<br />
                  31-864 Krakow, Poland
                </div>
              </li>
            </ul>
          </div>

          {/* Network */}
          <div>
            <h4 className="font-medium text-sm mb-4 text-cyan-400 uppercase tracking-wider">Network</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://linkedin.com/company/appliscale-ventures"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-cyan-400 transition-colors duration-200 text-sm flex items-center gap-2"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://appliscale.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                >
                  Appliscale Group
                </a>
              </li>
              <li>
                <a
                  href="https://appliscalelabs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                >
                  Appliscale Labs
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Appliscale Ventures. Part of Appliscale Group.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <Link href="/privacy" className="hover:text-cyan-400 transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-cyan-400 transition-colors duration-200">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
