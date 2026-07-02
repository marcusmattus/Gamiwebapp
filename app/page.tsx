import Link from 'next/link';
import { ArrowRight, Box, Target, Cpu, Shield, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-[calc(100vh-80px)] overflow-hidden font-sans select-none pb-12">
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[50%] bg-gami-purple/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[50%] bg-gami-dark/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 flex flex-col lg:flex-row flex-1 p-6 md:p-10 gap-12 max-w-7xl mx-auto w-full items-center mt-8">
        
        {/* Left Column: Hero */}
        <div className="flex-[1.2] flex flex-col justify-center gap-6">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1 rounded-full w-fit">
            <div className="w-2 h-2 rounded-full bg-gami-accent animate-pulse"></div>
            <span className="text-[10px] font-mono uppercase text-gami-accent tracking-[0.2em]">V1.0 LIVE ON TESTNET</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-[80px] font-bold leading-[0.85] tracking-tighter uppercase text-white">
            The AI-Powered <br className="hidden md:block" />
            <span className="text-gami-purple">Gamification</span><br className="hidden md:block" /> Layer
          </h1>
          
          <p className="text-lg text-white/50 max-w-md font-light leading-relaxed">
            Powering AI-driven loyalty, quests, XP, rewards and tokenized engagement across gaming, e-commerce, fintech, creators and enterprise. One wallet, one reward layer, one protocol.
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <Link 
              href="/waitlist" 
              className="bg-gami-purple text-white px-8 py-4 font-bold uppercase text-sm tracking-widest border-2 border-black shadow-[6px_6px_0px_0px_#000000] active:shadow-none transition-transform active:translate-x-1 active:translate-y-1 flex items-center justify-center gap-2"
            >
              Join Waitlist
            </Link>
            
            <Link 
              href="/partners" 
              className="border-2 border-white/20 px-8 py-4 font-bold uppercase text-sm tracking-widest backdrop-blur-sm flex items-center justify-center hover:bg-white/5 transition-colors"
            >
              Become Partner
            </Link>

            <Link 
              href="/developers"
              className="bg-white text-black px-8 py-4 font-bold uppercase text-sm tracking-widest border-2 border-black shadow-[6px_6px_0px_0px_#6E3CFB] active:shadow-none transition-transform active:translate-x-1 active:translate-y-1 flex items-center justify-center"
            >
              Build with Gami
            </Link>
          </div>
        </div>

        {/* Right Column: Abstract & Value Props */}
        <div className="flex-1 flex flex-col gap-6 justify-center w-full">
          {/* Floating Abstract Element styled as a Card */}
          <div className="bg-[#15151E] border-2 border-black p-6 shadow-[8px_8px_0px_0px_#6E3CFB] flex items-center justify-center relative min-h-[280px] overflow-hidden">
            <div className="absolute inset-0 bg-gami-purple/5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gami-purple/20 via-transparent to-transparent opacity-50 pointer-events-none"></div>
            <div className="relative w-32 h-32 mx-auto animate-float">
              <div className="absolute inset-0 bg-gami-purple border-2 border-white rotate-12 opacity-80 mix-blend-screen shadow-[0_0_30px_rgba(110,60,251,0.5)]"></div>
              <div className="absolute inset-0 bg-gami-bg border-2 border-black -rotate-6 flex items-center justify-center shadow-2xl backdrop-blur-md">
                <Cpu className="w-12 h-12 text-gami-accent" />
              </div>
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-white/10 border border-white/20 backdrop-blur flex items-center justify-center animate-pulse">
                <span className="font-mono text-[10px] uppercase font-bold text-gami-accent">+50 XP</span>
              </div>
              <div className="absolute -bottom-4 -left-8 w-12 h-12 bg-white/10 rounded-full border border-white/20 backdrop-blur flex items-center justify-center animate-pulse" style={{ animationDelay: '1s'}}>
                <Target className="w-5 h-5 text-gami-purple" />
              </div>
            </div>
            
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-[10px] uppercase font-bold tracking-widest">
               <span className="text-white/40">Network Sync</span>
               <span className="text-gami-accent animate-pulse">Connected</span>
            </div>
          </div>

          {/* Value Props Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/5 border border-white/10 p-5 group hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gami-purple/20 flex items-center justify-center border border-gami-purple/40 group-hover:bg-gami-purple group-hover:border-black transition-colors">
                  <Zap className="w-4 h-4 text-gami-accent group-hover:text-white" />
                </div>
                <div>
                  <div className="text-[10px] text-white/40 uppercase font-mono tracking-widest mb-1">Core Feature</div>
                  <div className="text-sm font-bold uppercase tracking-tighter text-white">AI-Driven Rewards</div>
                </div>
              </div>
              <p className="text-xs text-white/50 font-light leading-relaxed">Multi-agent AI evaluates user activity in real-time, optimizing campaigns.</p>
            </div>

            <div className="bg-white/5 border border-white/10 p-5 group hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gami-purple/20 flex items-center justify-center border border-gami-purple/40 group-hover:bg-gami-purple group-hover:border-black transition-colors">
                  <Shield className="w-4 h-4 text-gami-accent group-hover:text-white" />
                </div>
                <div>
                  <div className="text-[10px] text-white/40 uppercase font-mono tracking-widest mb-1">Ecosystem</div>
                  <div className="text-sm font-bold uppercase tracking-tighter text-white">Universal XP</div>
                </div>
              </div>
              <p className="text-xs text-white/50 font-light leading-relaxed">A unified on-chain reputation and rewards profile across all apps.</p>
            </div>

            <div className="bg-white/5 border border-white/10 p-5 md:col-span-2 group flex flex-col sm:flex-row sm:items-center justify-between hover:bg-white/10 transition-colors gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gami-purple/20 flex items-center justify-center border border-gami-purple/40 group-hover:bg-gami-purple group-hover:border-black transition-colors shrink-0">
                  <Box className="w-4 h-4 text-gami-accent group-hover:text-white" />
                </div>
                <div>
                  <div className="text-[10px] text-white/40 uppercase font-mono tracking-widest mb-1">Development</div>
                  <div className="text-sm font-bold uppercase tracking-tighter text-white">Seamless Integration</div>
                </div>
              </div>
              <div className="text-left sm:text-right">
                <div className="text-[10px] text-gami-accent font-mono uppercase tracking-widest">SDK v0.1</div>
                <div className="text-[10px] text-white/40 font-mono uppercase tracking-widest mt-1">API Ready</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
