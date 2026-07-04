"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Target, Sparkles, Building2, ChevronRight, Loader2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Markdown from "react-markdown";

export default function BuildWithGami() {
  const router = useRouter();
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string; config?: any }[]>([
    {
      role: 'assistant',
      content: "Hi! I'm Nova, Gami Protocol's AI gamification architect. What kind of app or platform are you building, and how would you like to reward your users?",
    }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [generatedConfig, setGeneratedConfig] = useState<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

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
    const newMessages = [...messages, { role: 'user' as const, content: userMsg }];
    setMessages(newMessages);
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMsg,
          history: messages,
        }),
      });

      const data = await response.json();
      
      if (data.text) {
        let textContent = data.text;
        let config = null;

        // Parse JSON block if it exists
        const jsonMatch = textContent.match(/\`\`\`json\n([\s\S]*?)\n\`\`\`/);
        if (jsonMatch) {
          try {
            const parsed = JSON.parse(jsonMatch[1]);
            if (parsed.type === "gami_config") {
              config = parsed;
              setGeneratedConfig(config);
              // Remove the json block from the text content
              textContent = textContent.replace(jsonMatch[0], "").trim();
            }
          } catch (e) {
            console.error("Failed to parse config block");
          }
        }

        setMessages([...newMessages, { role: 'assistant', content: textContent, config }]);
      }
    } catch (error) {
      console.error("Chat error:", error);
    } finally {
      setLoading(false);
    }
  };

  const saveAndContinue = () => {
    if (generatedConfig) {
      // Store in local storage to pass to dashboard
      localStorage.setItem('gami_draft_config', JSON.stringify(generatedConfig));
    }
    router.push('/dashboard');
  };

  return (
    <div className="flex h-screen bg-[#0E0E12] pt-24 font-sans">
      <div className="flex-1 flex flex-col relative max-w-4xl mx-auto w-full border-x border-white/10 bg-[#15151E]">
        
        {/* Header */}
        <div className="p-6 border-b border-white/10 bg-black/50 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-black uppercase tracking-tighter text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#9C6CFF]" /> Build with Gami
            </h1>
            <p className="text-xs text-white/50 font-mono uppercase tracking-widest mt-1">AI Quest & Reward Generator</p>
          </div>
          {generatedConfig && (
            <button onClick={saveAndContinue} className="bg-[#6E3CFB] text-white px-6 py-2 font-bold uppercase text-xs tracking-widest border-2 border-black shadow-[4px_4px_0px_0px_#000000] active:shadow-none transition-transform active:translate-x-1 active:translate-y-1 flex items-center gap-2">
              Install System <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] ${msg.role === 'user' ? 'bg-[#6E3CFB] text-white' : 'bg-black/50 border border-white/10 text-white/90'} p-5 shadow-[4px_4px_0px_0px_#000000]`}>
                <div className="mb-3 font-mono text-[10px] uppercase tracking-widest text-white/50">
                  {msg.role === 'user' ? 'You' : 'Nova AI'}
                </div>
                <div className="leading-relaxed prose prose-invert prose-sm max-w-none">
                  <Markdown>{msg.content}</Markdown>
                </div>
                
                {/* Visualizing Config */}
                {msg.config && (
                  <div className="mt-6 border-t border-white/10 pt-6">
                    <h4 className="font-bold uppercase tracking-widest text-xs text-[#9C6CFF] mb-4">Generated Gamification System</h4>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      {msg.config.quests && msg.config.quests.length > 0 && (
                        <div className="bg-[#15151E] border border-white/10 p-4">
                          <div className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-3">Suggested Quests</div>
                          <div className="space-y-3">
                            {msg.config.quests.map((q: any, idx: number) => (
                              <div key={idx} className="flex justify-between items-start">
                                <div>
                                  <div className="font-bold text-sm text-white">{q.title}</div>
                                  <div className="text-xs text-white/50">{q.description}</div>
                                </div>
                                <div className="text-xs font-black text-[#9C6CFF]">+{q.xp} XP</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {msg.config.badges && msg.config.badges.length > 0 && (
                        <div className="bg-[#15151E] border border-white/10 p-4">
                          <div className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-3">Custom Badges</div>
                          <div className="flex flex-wrap gap-2">
                            {msg.config.badges.map((b: any, idx: number) => (
                              <div key={idx} className="bg-black border border-[#6E3CFB]/30 px-3 py-2 text-xs font-bold text-white flex items-center gap-2">
                                <Target className="w-3 h-3 text-[#9C6CFF]" /> {b.name}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-black/50 border border-white/10 p-5 shadow-[4px_4px_0px_0px_#000000] flex items-center gap-3">
                <Loader2 className="w-5 h-5 text-[#6E3CFB] animate-spin" />
                <span className="text-white/50 font-mono text-sm uppercase tracking-widest">Nova is architecting...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 md:p-6 border-t border-white/10 bg-[#0E0E12]">
          <div className="relative flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Describe your app (e.g. 'I am building a web3 fitness app...')"
              className="w-full bg-[#15151E] border-2 border-black p-4 pr-16 text-white font-sans focus:outline-none focus:border-[#6E3CFB] shadow-[4px_4px_0px_0px_#000000] transition-colors"
            />
            <button 
              onClick={handleSend}
              disabled={loading || !input.trim()}
              className="absolute right-2 p-3 bg-white text-black hover:bg-gray-200 disabled:opacity-50 transition-colors shadow-[2px_2px_0px_0px_#000000] active:shadow-none active:translate-x-0.5 active:translate-y-0.5"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
