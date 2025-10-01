
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h3 className="text-3xl font-light mb-6">
              <span className="text-white">Appliscale</span>
              <span className="text-emerald-400 font-medium ml-2">Ventures</span>
            </h3>
            <p className="text-slate-300 mb-8 leading-relaxed font-light text-lg">
              Part of the Appliscale Group, we partner with exceptional entrepreneurs 
              to build transformative companies across Europe and the US.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/appliscale-ventures" target="_blank" rel="noopener noreferrer" className="p-3 text-slate-400 hover:text-emerald-400 transition-colors rounded-full">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://twitter.com/appliscale" target="_blank" rel="noopener noreferrer" className="p-3 text-slate-400 hover:text-emerald-400 transition-colors rounded-full">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-medium mb-8 text-emerald-400">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <a href="#home" className="text-slate-400 font-light text-lg">
                  Home
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-slate-400 font-light text-lg">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#team" className="text-slate-400 font-light text-lg">
                  Team
                </a>
              </li>
              <li>
                <a href="https://appliscale.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors font-light text-lg">
                  About Appliscale Group
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-medium mb-8 text-emerald-400">Contact Us</h4>
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-emerald-400 mr-4" />
                <span className="text-slate-300 font-light">hello@appliscaleventures.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-emerald-400 mr-4" />
                <span className="text-slate-300 font-light">+48 12 345 6789</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-emerald-400 mr-4 mt-1" />
                <div className="text-slate-300 font-light">
                  <p>Krakow Office</p>
                  <p>ul. Zyczkowskiego 14</p>
                  <p>31-864 Krakow, Poland</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-16 pt-8 text-center">
          <p className="text-slate-400 font-light">
            © 2024 Appliscale Ventures. Part of Appliscale Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
