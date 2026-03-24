import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const TikTokIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.01.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.12-3.44-3.17-3.8-5.46-.4-2.51.34-5.08 2.05-7.1 1.09-1.31 2.53-2.18 4.14-2.51.13-.03.27-.04.4-.06v4.06c-1.78.22-3.26 1.54-3.75 3.27-.48 1.63.15 3.49 1.53 4.41 1.25.86 2.95.96 4.31.25 1.52-.77 2.39-2.43 2.39-4.14.03-5.26.01-10.51.01-15.77z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-slate-900 pt-16 pb-8 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand */}
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-2xl font-extrabold text-white mb-4 tracking-tight">Extra Ed</h2>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            Providing top-tier educational programs and dynamic learning experiences for students everywhere.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"><Facebook size={18} /></a>
            <a href="#" className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-black hover:text-white transition-colors"><TikTokIcon size={18} /></a>
            <a href="#" className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors"><Instagram size={18} /></a>
            <a href="#" className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-700 hover:text-white transition-colors"><Linkedin size={18} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/about-us" className="hover:text-blue-400 transition-colors">About Us</Link></li>
            <li><Link to="/programs" className="hover:text-blue-400 transition-colors">All Programs</Link></li>
            <li><Link to="/in-the-news" className="hover:text-blue-400 transition-colors">Press & Media</Link></li>
            <li><Link to="/contact-us-extraed-were-here-to-help" className="hover:text-blue-400 transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Initiatives */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-6">Our Initiatives</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/economic-inclusivity" className="hover:text-blue-400 transition-colors">Economic Inclusivity</Link></li>
            <li><Link to="/sustainability" className="hover:text-blue-400 transition-colors">Sustainability Policies</Link></li>
            <li><Link to="/donate" className="hover:text-blue-400 transition-colors">Donate</Link></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Partner With Us</a></li>
          </ul>
        </div>

        {/* Contact info (No Location) */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-6">Get in Touch</h3>
          <ul className="space-y-4 text-sm mt-2">
            <li className="flex items-center gap-3">
              <Phone className="text-blue-500 shrink-0" size={20} />
              <span className="font-medium">+1 (555) 123-4567</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-blue-500 shrink-0" size={20} />
              <span className="font-medium">info@extraed.ca</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500">
        <p>&copy; {new Date().getFullYear()} Extra Ed. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-slate-300">Privacy Policy</a>
          <a href="#" className="hover:text-slate-300">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
