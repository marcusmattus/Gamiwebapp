"use client";

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-gami-bg/80 backdrop-blur-md border-b border-white/10 px-6 md:px-10 py-6 flex items-center justify-between font-sans select-none">
      <Link href="/" className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gami-purple flex items-center justify-center font-bold text-black border-2 border-white">
          G
        </div>
        <span className="font-black text-xl tracking-tighter uppercase hidden sm:block">
          Gami Protocol
        </span>
      </Link>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60 uppercase tracking-widest">
        <Link href="/waitlist" className="hover:text-white transition-colors">Waitlist</Link>
        <Link href="/partners" className="hover:text-white transition-colors">Partners</Link>
        <Link href="/developers" className="hover:text-white transition-colors">Developers</Link>
        <Link href="/investors" className="hover:text-white transition-colors">Investors</Link>
        <Link href="/token" className="hover:text-white transition-colors">$GAMI</Link>
        <Link href="/tge" className="hover:text-white transition-colors">TGE</Link>
        <Link href="/roadmap" className="hover:text-white transition-colors">Roadmap</Link>
      </div>

      <div className="hidden md:flex items-center">
        <Link href="/waitlist" className="bg-white text-black px-6 py-2 font-bold uppercase text-xs tracking-tighter border-2 border-black shadow-[4px_4px_0px_0px_#6E3CFB] transition-transform active:translate-x-1 active:translate-y-1 active:shadow-none">
          Join Early
        </Link>
      </div>

      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-gami-bg border-b border-white/10 flex flex-col uppercase tracking-widest text-sm font-medium text-white/60">
          <Link href="/waitlist" className="block px-6 py-4 border-b border-white/5 hover:text-white" onClick={() => setIsOpen(false)}>Waitlist</Link>
          <Link href="/partners" className="block px-6 py-4 border-b border-white/5 hover:text-white" onClick={() => setIsOpen(false)}>Partners</Link>
          <Link href="/developers" className="block px-6 py-4 border-b border-white/5 hover:text-white" onClick={() => setIsOpen(false)}>Developers</Link>
          <Link href="/investors" className="block px-6 py-4 border-b border-white/5 hover:text-white" onClick={() => setIsOpen(false)}>Investors</Link>
          <Link href="/token" className="block px-6 py-4 border-b border-white/5 hover:text-white" onClick={() => setIsOpen(false)}>$GAMI</Link>
          <Link href="/tge" className="block px-6 py-4 border-b border-white/5 hover:text-white" onClick={() => setIsOpen(false)}>TGE</Link>
          <Link href="/roadmap" className="block px-6 py-4 hover:text-white" onClick={() => setIsOpen(false)}>Roadmap</Link>
        </div>
      )}
    </nav>
  );
}
