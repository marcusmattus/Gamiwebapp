"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function WaitlistPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto px-4 pt-32 pb-24 text-center">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-green-500/20 text-green-400 rounded-full mb-8 shadow-[0_0_40px_rgba(34,197,94,0.3)]">
          <CheckCircle2 className="w-12 h-12" />
        </div>
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
          You are officially early.
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mb-12">
          <div className="bg-white/5 border border-white/10 p-6 rounded-sm shadow-brutal-purple text-center">
            <div className="text-sm font-mono text-gray-400 mb-2">Referral Rank</div>
            <div className="text-3xl font-display font-bold text-white">#4,209</div>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-sm shadow-brutal-purple text-center">
            <div className="text-sm font-mono text-gray-400 mb-2">XP Earned</div>
            <div className="text-3xl font-display font-bold text-gami-accent">500 XP</div>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-sm shadow-brutal-purple text-center">
            <div className="text-sm font-mono text-gray-400 mb-2">Est. Position</div>
            <div className="text-3xl font-display font-bold text-white">Top 5%</div>
          </div>
        </div>

        <div className="bg-gami-dark/30 border border-gami-purple/30 p-8 text-left rounded-sm mb-12">
          <h3 className="font-display font-bold text-xl mb-4 text-white">Boost your ranking</h3>
          <p className="text-gray-300 font-sans mb-6">Share your unique referral link to earn +200 XP per signup.</p>
          <div className="flex bg-black/50 border border-white/10 p-2 rounded-sm items-center">
            <code className="flex-1 font-mono text-gami-accent px-4 truncate">gamiprotocol.io/ref/gami-early-xyz</code>
            <button className="bg-white text-black px-4 py-2 font-bold font-sans rounded-sm hover:bg-gray-200">Copy</button>
          </div>
        </div>

        <Link href="/" className="text-gray-400 hover:text-white font-mono text-sm underline underline-offset-4">
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 pt-24 pb-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-white mb-4">
          Join the Gami Waitlist
        </h1>
        <p className="text-xl text-gray-400 font-sans">
          Secure your early access to the universal engagement layer.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8 bg-white/5 p-8 md:p-12 border border-white/10 shadow-brutal relative">
        <div className="absolute -top-3 -right-3 w-6 h-6 bg-gami-purple shadow-glow rotate-45 mix-blend-screen pointer-events-none"></div>
        <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-gami-accent shadow-glow rotate-45 mix-blend-screen pointer-events-none"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-mono text-gray-300">First Name</label>
            <input required type="text" className="w-full bg-black/50 border border-white/10 p-4 text-white font-sans focus:outline-none focus:border-gami-purple focus:ring-1 focus:ring-gami-purple rounded-sm" placeholder="Satoshi" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-mono text-gray-300">Last Name</label>
            <input required type="text" className="w-full bg-black/50 border border-white/10 p-4 text-white font-sans focus:outline-none focus:border-gami-purple focus:ring-1 focus:ring-gami-purple rounded-sm" placeholder="Nakamoto" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-mono text-gray-300">Email Address</label>
          <input required type="email" className="w-full bg-black/50 border border-white/10 p-4 text-white font-sans focus:outline-none focus:border-gami-purple focus:ring-1 focus:ring-gami-purple rounded-sm" placeholder="satoshi@example.com" />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-mono text-gray-300">Wallet Address (Optional)</label>
          <input type="text" className="w-full bg-black/50 border border-white/10 p-4 text-white font-mono text-sm focus:outline-none focus:border-gami-purple focus:ring-1 focus:ring-gami-purple rounded-sm" placeholder="0x..." />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-mono text-gray-300">Preferred Chain</label>
            <select className="w-full bg-black/50 border border-white/10 p-4 text-white font-sans focus:outline-none focus:border-gami-purple focus:ring-1 focus:ring-gami-purple rounded-sm appearance-none">
              <option>Ethereum</option>
              <option>Base</option>
              <option>Arbitrum</option>
              <option>Optimism</option>
              <option>Polygon</option>
              <option>Solana</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-mono text-gray-300">Role</label>
            <select className="w-full bg-black/50 border border-white/10 p-4 text-white font-sans focus:outline-none focus:border-gami-purple focus:ring-1 focus:ring-gami-purple rounded-sm appearance-none">
              <option>Developer</option>
              <option>Investor</option>
              <option>Community Member</option>
              <option>Partner</option>
            </select>
          </div>
        </div>

        <div className="space-y-4">
          <label className="flex items-center space-x-3 cursor-pointer">
            <input type="checkbox" className="w-5 h-5 bg-black border border-white/20 rounded-sm text-gami-purple focus:ring-gami-purple" />
            <span className="text-sm text-gray-400 font-sans">Subscribe to protocol updates and ecosystem news.</span>
          </label>
          <label className="flex items-center space-x-3 cursor-pointer">
            <input required type="checkbox" className="w-5 h-5 bg-black border border-white/20 rounded-sm text-gami-purple focus:ring-gami-purple" />
            <span className="text-sm text-gray-400 font-sans">I accept the Terms of Service and Privacy Policy.</span>
          </label>
        </div>

        <button 
          type="submit"
          className="w-full py-4 bg-gami-purple text-white font-display font-bold text-lg flex items-center justify-center gap-2 hover:bg-gami-purple/90 transition-transform hover:-translate-y-1 shadow-brutal"
        >
          Submit Application <ArrowRight className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
}
