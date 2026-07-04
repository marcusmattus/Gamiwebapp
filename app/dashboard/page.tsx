"use client";

import { useEffect, useState } from "react";
import { LayoutDashboard, Users, Target, Activity, Settings, Zap, ArrowUpRight, BarChart3, Medal } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const revenueData = [
  { name: 'Jan', earnings: 4000 },
  { name: 'Feb', earnings: 5000 },
  { name: 'Mar', earnings: 4500 },
  { name: 'Apr', earnings: 6000 },
  { name: 'May', earnings: 8000 },
  { name: 'Jun', earnings: 9500 },
  { name: 'Jul', earnings: 12450 },
];

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
    <div className="flex min-h-screen bg-background pt-24 font-sans text-foreground">
      
      {/* Sidebar */}
      <div className="w-20 md:w-64 border-r border-border bg-panel flex flex-col items-center md:items-stretch py-6 hidden sm:flex">
        <div className="px-6 mb-8 hidden md:block">
          <h2 className="font-black text-xl text-foreground uppercase tracking-tighter">Partner Portal</h2>
          <div className="text-[10px] font-mono text-green-500 uppercase tracking-widest mt-1 flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div> MCP Online
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
              <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-foreground">System Dashboard</h1>
              <p className="text-muted text-sm mt-2">Monitor your Gami Protocol engagement metrics.</p>
            </div>
            <div className="flex gap-4 items-center">
              <ThemeToggle />
              <button className="bg-panel border-2 border-border-strong text-foreground px-4 py-2 font-bold uppercase text-xs tracking-widest shadow-brutal active:shadow-none transition-all">
                API Keys
              </button>
              <Link href="/build" className="bg-accent border-2 border-border-strong text-accent-foreground px-4 py-2 font-bold uppercase text-xs tracking-widest shadow-brutal active:shadow-none active:translate-x-1 active:translate-y-1 transition-all flex items-center gap-2">
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
              <div key={i} className="bg-panel border-2 border-border-strong p-6 shadow-brutal-purple">
                <div className="text-[10px] font-mono text-muted uppercase tracking-widest mb-2">{stat.label}</div>
                <div className="text-3xl font-black text-foreground flex items-end gap-3">
                  {stat.value}
                  <span className="text-xs font-mono text-green-500 mb-1">{stat.trend}</span>
                </div>
              </div>
            ))}
          </div>

          {/* AI Generated Config (if exists) */}
          {config && (
            <div className="mb-10">
              <h2 className="text-xl font-black uppercase tracking-tighter text-foreground mb-4 flex items-center gap-2">
                <SparklesIcon /> Generated Gamification Logic
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                
                {/* Quests */}
                <div className="bg-panel border-2 border-border-strong p-6 shadow-brutal">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold uppercase tracking-widest text-sm text-[#9C6CFF]">Active Quests</h3>
                    <Target className="w-5 h-5 text-muted" />
                  </div>
                  <div className="space-y-4">
                    {config.quests?.map((q: any, i: number) => (
                      <div key={i} className="flex justify-between items-center p-3 border border-border bg-foreground/5">
                        <div>
                          <div className="font-bold text-sm text-foreground">{q.title}</div>
                          <div className="text-xs text-muted">{q.description}</div>
                        </div>
                        <div className="text-xs font-black text-[#9C6CFF] whitespace-nowrap">+{q.xp} XP</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Badges */}
                <div className="bg-panel border-2 border-border-strong p-6 shadow-brutal">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold uppercase tracking-widest text-sm text-[#9C6CFF]">Badge Collection</h3>
                    <Medal className="w-5 h-5 text-muted" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {config.badges?.map((b: any, i: number) => (
                      <div key={i} className="p-4 border border-accent/30 bg-foreground/10 flex flex-col items-center justify-center text-center gap-2">
                        <Medal className="w-6 h-6 text-[#9C6CFF]" />
                        <span className="font-bold text-xs text-foreground uppercase tracking-tighter">{b.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* Revenue Tracking Panel */}
          <div className="bg-panel border-2 border-border-strong p-8 shadow-brutal mb-10">
            <h2 className="text-xl font-black uppercase tracking-tighter text-foreground mb-6 flex items-center gap-2">
              <Activity className="w-5 h-5 text-[#9C6CFF]" /> Revenue & Earnings
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-foreground/5 border border-accent/30 p-6">
                <div className="text-[10px] font-mono text-muted uppercase tracking-widest mb-1">Estimated $GAMI Earnings</div>
                <div className="text-3xl font-black text-[#9C6CFF]">12,450</div>
                <div className="text-xs font-mono text-green-500 mt-2 flex items-center gap-1">
                  <ArrowUpRight className="w-3 h-3" /> +15% this month
                </div>
              </div>
              <div className="bg-foreground/5 border border-border p-6">
                <div className="text-[10px] font-mono text-muted uppercase tracking-widest mb-1">Platform Fees Generated</div>
                <div className="text-3xl font-black text-foreground">$450.00</div>
                <div className="text-xs font-mono text-muted mt-2">
                  USD equivalent value
                </div>
              </div>
            </div>

            <div className="h-72 w-full pt-4 border-t border-border">
              <h3 className="text-xs font-mono text-muted uppercase tracking-widest mb-4">Earnings Over Time</h3>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenueData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                  <XAxis dataKey="name" stroke="currentColor" className="text-muted" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="currentColor" className="text-muted" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'var(--panel)', borderColor: 'var(--border)', color: 'var(--foreground)' }}
                    itemStyle={{ color: '#9C6CFF' }}
                  />
                  <Line type="monotone" dataKey="earnings" stroke="#9C6CFF" strokeWidth={3} dot={{ fill: 'var(--panel)', stroke: '#9C6CFF', strokeWidth: 2, r: 4 }} activeDot={{ r: 6, fill: '#9C6CFF' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Setup Guide */}
          <div className="bg-panel border-2 border-border-strong p-8 shadow-brutal-purple">
             <h2 className="text-xl font-black uppercase tracking-tighter text-foreground mb-6">Integration Guide</h2>
             <div className="space-y-6">
               
               <div className="flex gap-4">
                 <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center font-black text-sm flex-shrink-0 text-white">1</div>
                 <div>
                   <h3 className="font-bold text-foreground mb-2">Install SDK</h3>
                   <div className="bg-foreground/10 border border-border p-3 font-mono text-xs text-foreground/80">
                     npm install @gami/sdk
                   </div>
                 </div>
               </div>

               <div className="flex gap-4">
                 <div className="w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center font-black text-sm flex-shrink-0 text-muted">2</div>
                 <div>
                   <h3 className="font-bold text-muted mb-2">Initialize Client</h3>
                   <p className="text-sm text-muted">Use your API keys to connect your frontend to the Gami MCP network.</p>
                 </div>
               </div>

               <div className="flex gap-4">
                 <div className="w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center font-black text-sm flex-shrink-0 text-muted">3</div>
                 <div>
                   <h3 className="font-bold text-muted mb-2">Emit Events</h3>
                   <p className="text-sm text-muted">Trigger events in your app to automatically award XP and unlock quests based on your generated logic.</p>
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
    <Link href={href} className={`flex items-center gap-3 p-3 transition-colors ${active ? 'bg-accent/10 text-[#9C6CFF] border-r-2 border-[#9C6CFF]' : 'text-muted hover:bg-foreground/5 hover:text-foreground'}`}>
      {icon}
      <span className="font-bold uppercase tracking-widest text-[10px] hidden md:block">{label}</span>
    </Link>
  );
}

function SparklesIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#9C6CFF]"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>;
}
