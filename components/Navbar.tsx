"use client";

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-gami-bg/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gami-purple shadow-brutal-purple rounded-sm flex items-center justify-center font-display font-bold text-xl">
              G
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-white">
              Gami Protocol
            </span>
          </Link>
          
          <div className="hidden md:flex space-x-8 items-center font-sans text-sm font-medium">
            <Link href="/waitlist" className="text-gray-300 hover:text-white transition-colors">Waitlist</Link>
            <Link href="/partners" className="text-gray-300 hover:text-white transition-colors">Partners</Link>
            <Link href="/developers" className="text-gray-300 hover:text-white transition-colors">Developers</Link>
            <Link href="/investors" className="text-gray-300 hover:text-white transition-colors">Investors</Link>
            <Link href="/token" className="text-gray-300 hover:text-white transition-colors">$GAMI</Link>
            <Link href="/tge" className="text-gray-300 hover:text-white transition-colors">TGE</Link>
            <Link href="/roadmap" className="text-gray-300 hover:text-white transition-colors">Roadmap</Link>
            <Link href="/waitlist" className="bg-white text-black px-5 py-2.5 rounded-sm font-display font-bold hover:bg-gray-200 transition-colors shadow-[4px_4px_0px_0px_rgba(110,60,251,1)]">
              Join Early
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gami-bg border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/waitlist" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white">Waitlist</Link>
            <Link href="/partners" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white">Partners</Link>
            <Link href="/developers" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white">Developers</Link>
            <Link href="/investors" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white">Investors</Link>
            <Link href="/token" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white">$GAMI</Link>
            <Link href="/tge" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white">TGE</Link>
            <Link href="/roadmap" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white">Roadmap</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
