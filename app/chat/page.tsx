"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Zap, ChevronRight, MessageSquare, Target, Wallet, LayoutDashboard, ShoppingBag, Loader2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// MCP + Chat Engine MVP implementation
export default function GamiChatEngine() {
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string; xp?: number; quests?: any[] }[]>([
    {
      role: 'assistant',
      content: 'Hello! I am Nova, your Gami AI Assistant. How can I help you engage and earn today?',
    }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [userXp, setUserXp] = useState(1250);
  const [level, setLevel] = useState(4);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const activeQuests = [
    { id: 'q1', title: 'Complete your profile', progress: 50, max: 100, reward: 200 },
    { id: 'q2', title: 'Ask Nova 3 questions', progress: messages.filter(m => m.role === 'user').length, max: 3, reward: 50 },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setLoading(true);

    // Simulate API call to LLM Orchestrator
    setTimeout(() => {
      let aiResponse = "";
      let xpAwarded = 10; // Base XP for interacting
      let newQuests = [];

      const lowerInput = userMsg.toLowerCase();
      
      if (lowerInput.includes("integrate") || lowerInput.includes("business")) {
        aiResponse = "I can help you integrate Gami Protocol into your business. First, let's set up your MCP Server to connect your contextual data. I've unlocked the 'Partner Setup' quest for you!";
        xpAwarded = 50;
        newQuests.push({ id: 'q3', title: 'Connect MCP Server', reward_xp: 500 });
      } else if (lowerInput.includes("reward") || lowerInput.includes("earn")) {
        aiResponse = "You earn XP for every meaningful interaction here! Complete quests, stake $GAMI, or engage with our partners to multiply your rewards.";
        xpAwarded = 15;
      } else {
        aiResponse = "That's interesting! Keep exploring the Gami Ecosystem to uncover more quests and rewards.";
      }

      setUserXp(prev => prev + xpAwarded);
      // Simple level up logic
      if ((userXp + xpAwarded) > level * 500) {
        setLevel(prev => prev + 1);
      }

      setMessages(prev => [...prev, {
        role: 'assistant',
        content: aiResponse,
        xp: xpAwarded,
        quests: newQuests.length > 0 ? newQuests : undefined
      }]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="flex h-screen bg-[#0E0E12] pt-24 font-sans">
      {/* Sidebar Navigation */}
      <div className="w-20 md:w-64 border-r border-white/10 bg-[#15151E] flex flex-col items-center md:items-stretch py-6">
        <div className="px-4 mb-8 hidden md:block">
          <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-2">Your Progress</div>
          <div className="bg-black/50 p-4 border-2 border-black shadow-[4px_4px_0px_0px_#6E3CFB]">
            <div className="flex justify-between items-end mb-2">
              <span className="font-black text-xl text-white">LVL {level}</span>
              <span className="font-mono text-xs text-[#9C6CFF]">{userXp} XP</span>
            </div>
            <div className="w-full h-2 bg-black border border-white/10">
              <div className="h-full bg-[#6E3CFB]" style={{ width: `${(userXp % 500) / 500 * 100}%` }}></div>
            </div>
          </div>
        </div>

        <nav className="flex-1 flex flex-col gap-2 px-2 md:px-4">
          <NavItem href="/chat" icon={<MessageSquare />} label="AI Chat" active />
          <NavItem href="/quests" icon={<Target />} label="Quests" />
          <NavItem href="/wallet" icon={<Wallet />} label="Wallet" />
          <NavItem href="/dashboard" icon={<LayoutDashboard />} label="Dashboard" />
          <NavItem href="/marketplace" icon={<ShoppingBag />} label="Marketplace" />
        </nav>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col relative">
        <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-2xl ${msg.role === 'user' ? 'bg-[#6E3CFB] text-white' : 'bg-[#15151E] border border-white/10 text-white/90'} p-5 shadow-[4px_4px_0px_0px_#000000]`}>
                <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-white/50">
                  {msg.role === 'user' ? 'You' : 'Nova AI'}
                </div>
                <div className="leading-relaxed">
                  {msg.content}
                </div>
                
                {/* Meta data / Rewards */}
                {(msg.xp || msg.quests) && (
                  <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap gap-2">
                    {msg.xp && (
                      <div className="inline-flex items-center gap-1 bg-black/50 border border-[#9C6CFF]/30 px-3 py-1 text-xs font-bold text-[#9C6CFF]">
                        <Zap className="w-3 h-3" /> +{msg.xp} XP
                      </div>
                    )}
                    {msg.quests?.map((q, idx) => (
                      <div key={idx} className="inline-flex items-center gap-1 bg-black/50 border border-green-500/30 px-3 py-1 text-xs font-bold text-green-400">
                        <Target className="w-3 h-3" /> Quest Unlocked: {q.title}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-[#15151E] border border-white/10 p-5 shadow-[4px_4px_0px_0px_#000000] flex items-center gap-3">
                <Loader2 className="w-5 h-5 text-[#6E3CFB] animate-spin" />
                <span className="text-white/50 font-mono text-sm uppercase tracking-widest">Nova is thinking...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 md:p-8 border-t border-white/10 bg-[#0E0E12]">
          <div className="max-w-4xl mx-auto relative flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask Nova anything to earn XP..."
              className="w-full bg-[#15151E] border-2 border-black p-4 pr-16 text-white font-sans focus:outline-none focus:border-[#6E3CFB] shadow-[6px_6px_0px_0px_#000000] transition-colors"
            />
            <button 
              onClick={handleSend}
              disabled={loading || !input.trim()}
              className="absolute right-2 p-2 bg-white text-black hover:bg-gray-200 disabled:opacity-50 transition-colors"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Right Sidebar - Active Quests */}
      <div className="hidden lg:block w-80 border-l border-white/10 bg-[#15151E] p-6 overflow-y-auto">
        <h3 className="font-black uppercase tracking-tighter text-white text-xl mb-6 flex items-center gap-2">
          <Target className="w-5 h-5 text-[#9C6CFF]" /> Active Quests
        </h3>
        
        <div className="space-y-4">
          {activeQuests.map(quest => (
            <div key={quest.id} className="bg-black/50 border border-white/10 p-4 relative overflow-hidden group">
              <div className="relative z-10">
                <h4 className="font-bold text-white text-sm mb-2">{quest.title}</h4>
                <div className="flex justify-between items-center font-mono text-[10px] uppercase text-white/50 mb-2">
                  <span>Progress</span>
                  <span>{quest.progress} / {quest.max}</span>
                </div>
                <div className="w-full h-1 bg-white/5">
                  <div className="h-full bg-[#6E3CFB]" style={{ width: `${(quest.progress / quest.max) * 100}%` }}></div>
                </div>
                <div className="mt-3 text-xs font-bold text-[#9C6CFF] flex items-center gap-1">
                  <Zap className="w-3 h-3" /> {quest.reward} XP
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-[#6E3CFB]/10 border border-[#6E3CFB]/30">
          <h4 className="font-bold text-white text-sm mb-2 uppercase tracking-widest text-[10px]">MCP Server Status</h4>
          <div className="flex items-center gap-2 text-xs text-green-400 font-mono">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            Connected to Gami Network
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
