"use client";

import { useEffect, useState } from "react";
import { LayoutDashboard, Users, Target, Activity, Settings, Zap, ArrowUpRight, BarChart3, Medal } from "lucide-react";
import Link from "next/link";

export default function PartnerDashboard() {
  const [config, setConfig] = useState<any>(null);

  useEffect(() => {
    // Load config from local storage if available
    const saved = localStorage.getItem('gami_draft_config');
    if (saved) {
      try {
        setConfig(JSON.parse(saved));
      } catch (e) {}
    }
  }, []);

  return (
    <div className="flex min-h-screen bg-[#0E0E12] pt-24 font-sans">
      
      {/* Sidebar */}
      <div className="w-20 md:w-64 border-r border-white/10 bg-[#15151E] flex flex-col items-center md:items-stretch py-6 hidden sm:flex">
        <div className="px-6 mb-8 hidden md:block">
          <h2 className="font-black text-xl text-white uppercase tracking-tighter">Partner Portal</h2>
          <div className="text-[10px] font-mono text-green-400 uppercase tracking-widest mt-1 flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div> MCP Online
          </div>
        </div>

        <nav className="flex-1 flex flex-col gap-2 px-2 md:px-4">
          <NavItem href="/dashboard" icon={<LayoutDashboard />} label="Overview" active />
          <NavItem href="/dashboard/quests" icon={<Target />} label="Quests Engine" />
          <NavItem href="/dashboard/analytics" icon={<BarChart3 />} label="Analytics" />
          <NavItem href="/dashboard/users" icon={<Users />} label="User Base" />
          <NavItem href="/dashboard/settings" icon={<Settings />} label="Settings" />
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-4 md:p-10">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white">System Dashboard</h1>
              <p className="text-white/50 text-sm mt-2">Monitor your Gami Protocol engagement metrics.</p>
            </div>
            <div className="flex gap-4">
              <button className="bg-[#15151E] border-2 border-black text-white px-4 py-2 font-bold uppercase text-xs tracking-widest shadow-[4px_4px_0px_0px_#000000]">
                API Keys
              </button>
              <Link href="/build" className="bg-[#6E3CFB] border-2 border-black text-white px-4 py-2 font-bold uppercase text-xs tracking-widest shadow-[4px_4px_0px_0px_#000000] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all flex items-center gap-2">
                <Zap className="w-4 h-4" /> AI Generator
              </Link>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
            {[
              { label: "Total Users", value: "0", trend: "+0%" },
              { label: "Quests Completed", value: "0", trend: "+0%" },
              { label: "XP Distributed", value: "0", trend: "+0%" },
              { label: "Active Sessions", value: "0", trend: "+0%" },
            ].map((stat, i) => (
              <div key={i} className="bg-[#15151E] border-2 border-black p-6 shadow-[4px_4px_0px_0px_#6E3CFB]">
                <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-2">{stat.label}</div>
                <div className="text-3xl font-black text-white flex items-end gap-3">
                  {stat.value}
                  <span className="text-xs font-mono text-green-400 mb-1">{stat.trend}</span>
                </div>
              </div>
            ))}
          </div>

          {/* AI Generated Config (if exists) */}
          {config && (
            <div className="mb-10">
              <h2 className="text-xl font-black uppercase tracking-tighter text-white mb-4 flex items-center gap-2">
                <SparklesIcon /> Generated Gamification Logic
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                
                {/* Quests */}
                <div className="bg-[#15151E] border-2 border-black p-6 shadow-[6px_6px_0px_0px_#000000]">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold uppercase tracking-widest text-sm text-[#9C6CFF]">Active Quests</h3>
                    <Target className="w-5 h-5 text-white/40" />
                  </div>
                  <div className="space-y-4">
                    {config.quests?.map((q: any, i: number) => (
                      <div key={i} className="flex justify-between items-center p-3 border border-white/5 bg-black/50">
                        <div>
                          <div className="font-bold text-sm text-white">{q.title}</div>
                          <div className="text-xs text-white/50">{q.description}</div>
                        </div>
                        <div className="text-xs font-black text-[#9C6CFF] whitespace-nowrap">+{q.xp} XP</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Badges */}
                <div className="bg-[#15151E] border-2 border-black p-6 shadow-[6px_6px_0px_0px_#000000]">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold uppercase tracking-widest text-sm text-[#9C6CFF]">Badge Collection</h3>
                    <Medal className="w-5 h-5 text-white/40" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {config.badges?.map((b: any, i: number) => (
                      <div key={i} className="p-4 border border-[#6E3CFB]/30 bg-black flex flex-col items-center justify-center text-center gap-2">
                        <Medal className="w-6 h-6 text-[#9C6CFF]" />
                        <span className="font-bold text-xs text-white uppercase tracking-tighter">{b.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* Revenue Tracking Panel */}
          <div className="bg-[#15151E] border-2 border-black p-8 shadow-[8px_8px_0px_0px_#000000] mb-10">
            <h2 className="text-xl font-black uppercase tracking-tighter text-white mb-6 flex items-center gap-2">
              <Activity className="w-5 h-5 text-[#9C6CFF]" /> Revenue & Earnings
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-black/50 border border-[#6E3CFB]/30 p-6">
                <div className="text-[10px] font-mono text-white/50 uppercase tracking-widest mb-1">Estimated $GAMI Earnings</div>
                <div className="text-3xl font-black text-[#9C6CFF]">12,450</div>
                <div className="text-xs font-mono text-green-400 mt-2 flex items-center gap-1">
                  <ArrowUpRight className="w-3 h-3" /> +15% this month
                </div>
              </div>
              <div className="bg-black/50 border border-white/10 p-6">
                <div className="text-[10px] font-mono text-white/50 uppercase tracking-widest mb-1">Platform Fees Generated</div>
                <div className="text-3xl font-black text-white">$450.00</div>
                <div className="text-xs font-mono text-white/40 mt-2">
                  USD equivalent value
                </div>
              </div>
            </div>
          </div>

          {/* Setup Guide */}
          <div className="bg-[#15151E] border-2 border-black p-8 shadow-[8px_8px_0px_0px_#6E3CFB]">
             <h2 className="text-xl font-black uppercase tracking-tighter text-white mb-6">Integration Guide</h2>
             <div className="space-y-6">
               
               <div className="flex gap-4">
                 <div className="w-8 h-8 rounded-full bg-[#6E3CFB] flex items-center justify-center font-black text-sm flex-shrink-0">1</div>
                 <div>
                   <h3 className="font-bold text-white mb-2">Install SDK</h3>
                   <div className="bg-black border border-white/10 p-3 font-mono text-xs text-white/70">
                     npm install @gami/sdk
                   </div>
                 </div>
               </div>

               <div className="flex gap-4">
                 <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-black text-sm flex-shrink-0 text-white/50">2</div>
                 <div>
                   <h3 className="font-bold text-white mb-2 text-white/50">Initialize Client</h3>
                   <p className="text-sm text-white/40">Use your API keys to connect your frontend to the Gami MCP network.</p>
                 </div>
               </div>

               <div className="flex gap-4">
                 <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-black text-sm flex-shrink-0 text-white/50">3</div>
                 <div>
                   <h3 className="font-bold text-white mb-2 text-white/50">Emit Events</h3>
                   <p className="text-sm text-white/40">Trigger events in your app to automatically award XP and unlock quests based on your generated logic.</p>
                 </div>
               </div>

             </div>
          </div>

        </div>
      </div>

    </div>
  );
}

function NavItem({ href, icon, label, active = false }: { href: string; icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <Link href={href} className={`flex items-center gap-3 p-3 transition-colors ${active ? 'bg-[#6E3CFB]/10 text-[#9C6CFF] border-r-2 border-[#9C6CFF]' : 'text-white/40 hover:bg-white/5 hover:text-white'}`}>
      {icon}
      <span className="font-bold uppercase tracking-widest text-[10px] hidden md:block">{label}</span>
    </Link>
  );
}

function SparklesIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#9C6CFF]"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>;
}
