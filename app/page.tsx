import Link from 'next/link';
import { ArrowRight, Box, Target, Cpu, Shield, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Animated Blobs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-gami-purple/30 rounded-full animate-pulse-glow z-0"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gami-accent/20 rounded-full animate-pulse-glow z-0" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 text-center">
        
        {/* Hero Section */}
        <div className="space-y-8 max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-6">
            <span className="font-mono text-sm font-medium text-gami-accent">v1.0 Testnet Live</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-white leading-tight">
            The AI-Powered <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gami-purple to-gami-accent">
              Gamification Layer
            </span><br className="hidden md:block"/>
            for Web3 & Enterprise
          </h1>
          
          <p className="text-xl md:text-2xl font-sans text-gray-300 max-w-2xl mx-auto">
            One wallet. One reward layer. One protocol.
          </p>
          
          <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto mb-12">
            Powering AI-driven loyalty, quests, XP, rewards and tokenized engagement across gaming, e-commerce, fintech, creators and enterprise.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
            <Link 
              href="/waitlist" 
              className="w-full sm:w-auto px-8 py-4 bg-gami-purple text-white font-display font-bold text-lg flex items-center justify-center gap-2 hover:bg-gami-purple/90 transition-transform hover:-translate-y-1 shadow-brutal"
            >
              Join Waitlist <ArrowRight className="w-5 h-5" />
            </Link>
            
            <Link 
              href="/partners" 
              className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-gami-purple text-white font-display font-bold text-lg flex items-center justify-center hover:bg-white/5 transition-transform hover:-translate-y-1 hover:shadow-glow"
            >
              Become a Partner
            </Link>
            
            <Link 
              href="/developers"
              className="w-full sm:w-auto px-8 py-4 bg-white text-black font-display font-bold text-lg flex items-center justify-center hover:bg-gray-200 transition-transform hover:-translate-y-1 shadow-[8px_8px_0px_0px_rgba(156,108,255,1)]"
            >
              Build with Gami
            </Link>
          </div>
        </div>

        {/* Floating Abstract Element */}
        <div className="mt-32 mb-20">
          <div className="relative w-64 h-64 mx-auto animate-float">
            <div className="absolute inset-0 bg-gradient-to-br from-gami-purple to-gami-dark rounded-2xl shadow-brutal-purple rotate-12 opacity-80 mix-blend-screen"></div>
            <div className="absolute inset-0 bg-gami-bg border border-white/20 rounded-2xl -rotate-6 flex items-center justify-center shadow-2xl backdrop-blur-md">
              <Cpu className="w-24 h-24 text-gami-accent" />
            </div>
            {/* Small floating particles */}
            <div className="absolute -top-12 -right-12 w-16 h-16 bg-white/10 rounded-sm border border-white/20 backdrop-blur flex items-center justify-center animate-pulse">
               <span className="font-mono text-xs">+50 XP</span>
            </div>
             <div className="absolute -bottom-8 -left-12 w-20 h-20 bg-white/10 rounded-full border border-white/20 backdrop-blur flex items-center justify-center animate-pulse" style={{ animationDelay: '1s'}}>
               <Target className="w-8 h-8 text-gami-purple" />
            </div>
          </div>
        </div>

        {/* Value Props Grid */}
        <div className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="p-8 border border-white/10 bg-white/5 backdrop-blur-sm rounded-sm hover:border-gami-purple/50 transition-colors group">
            <div className="w-12 h-12 bg-gami-purple/20 text-gami-accent rounded-sm flex items-center justify-center mb-6 group-hover:bg-gami-purple group-hover:text-white transition-colors shadow-brutal-purple">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-4">AI-Driven Rewards</h3>
            <p className="text-gray-400 font-sans leading-relaxed">
              Multi-agent AI evaluates user activity in real-time, dynamically optimizing campaigns and distributing personalized rewards.
            </p>
          </div>

          <div className="p-8 border border-white/10 bg-white/5 backdrop-blur-sm rounded-sm hover:border-gami-purple/50 transition-colors group">
            <div className="w-12 h-12 bg-gami-purple/20 text-gami-accent rounded-sm flex items-center justify-center mb-6 group-hover:bg-gami-purple group-hover:text-white transition-colors shadow-brutal-purple">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-4">Universal XP</h3>
            <p className="text-gray-400 font-sans leading-relaxed">
              A unified on-chain reputation and rewards profile. Actions across gaming, commerce, and enterprise contribute to one global score.
            </p>
          </div>

          <div className="p-8 border border-white/10 bg-white/5 backdrop-blur-sm rounded-sm hover:border-gami-purple/50 transition-colors group">
            <div className="w-12 h-12 bg-gami-purple/20 text-gami-accent rounded-sm flex items-center justify-center mb-6 group-hover:bg-gami-purple group-hover:text-white transition-colors shadow-brutal-purple">
              <Box className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-4">Seamless Integration</h3>
            <p className="text-gray-400 font-sans leading-relaxed">
              Integrate effortlessly using the Gami SDK, APIs, or MCP. Enable portable on-chain rewards across ecosystems in minutes.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
