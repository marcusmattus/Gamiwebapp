"use client";

import { useState, useEffect } from "react";
import { ArrowRight, CheckCircle2, Copy, Twitter, Share2 } from "lucide-react";
import Link from "next/link";
import { db } from "@/lib/firebase";
import { collection, addDoc, query, where, getDocs, updateDoc, increment, doc, orderBy, limit, serverTimestamp } from "firebase/firestore";
import { useSearchParams } from "next/navigation";

export default function WaitlistPage() {
  const searchParams = useSearchParams();
  const refParam = searchParams.get('ref');

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    walletAddress: '',
    preferredChain: 'Ethereum',
    role: 'Developer'
  });
  
  const [userData, setUserData] = useState<{refCode: string, xp: number, rank?: number} | null>(null);
  const [leaderboard, setLeaderboard] = useState<any[]>([]);

  useEffect(() => {
    // Fetch top 5 for leaderboard preview
    const fetchLeaderboard = async () => {
      try {
        const q = query(collection(db, "waitlist"), orderBy("xp", "desc"), limit(5));
        const snapshot = await getDocs(q);
        const leaders = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setLeaderboard(leaders);
      } catch (e) {
        console.error("Leaderboard fetch error", e);
      }
    };
    fetchLeaderboard();
  }, [submitted]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Check if email already exists
      const emailQuery = query(collection(db, "waitlist"), where("email", "==", formData.email));
      const emailSnapshot = await getDocs(emailQuery);
      
      if (!emailSnapshot.empty) {
        alert("This email is already on the waitlist!");
        setLoading(false);
        return;
      }

      // Generate random ref code
      const refCode = `gami-${Math.random().toString(36).substring(2, 8)}`;
      let initialXp = 500;

      // Handle referral bonus
      if (refParam) {
        const refQuery = query(collection(db, "waitlist"), where("refCode", "==", refParam));
        const refSnapshot = await getDocs(refQuery);
        if (!refSnapshot.empty) {
          const referrerDoc = refSnapshot.docs[0];
          // Update referrer
          await updateDoc(doc(db, "waitlist", referrerDoc.id), {
            xp: increment(200),
            referralCount: increment(1)
          });
          initialXp += 100; // Bonus for being referred
        }
      }

      await addDoc(collection(db, "waitlist"), {
        ...formData,
        refCode,
        referredBy: refParam || null,
        xp: initialXp,
        referralCount: 0,
        createdAt: serverTimestamp()
      });

      setUserData({ refCode, xp: initialXp, rank: Math.floor(Math.random() * 1000) + 100 });
      setSubmitted(true);
    } catch (error) {
      console.error("Error joining waitlist:", error);
      alert("Failed to join waitlist. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const copyRefLink = () => {
    if (typeof window !== 'undefined' && userData) {
      const url = `${window.location.origin}/waitlist?ref=${userData.refCode}`;
      navigator.clipboard.writeText(url);
      alert("Referral link copied!");
    }
  };

  const shareTwitter = () => {
    if (typeof window !== 'undefined' && userData) {
      const url = `${window.location.origin}/waitlist?ref=${userData.refCode}`;
      const text = `I just joined the Gami Protocol waitlist! 🚀 The AI-Powered Gamification Layer for Web3. Join me and earn XP:`;
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
    }
  };

  if (submitted && userData) {
    return (
      <div className="max-w-4xl mx-auto px-4 pt-12 pb-24 text-center">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-green-500/20 text-green-400 rounded-full mb-8 shadow-[0_0_40px_rgba(34,197,94,0.3)]">
          <CheckCircle2 className="w-12 h-12" />
        </div>
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 uppercase tracking-tighter">
          You are officially early.
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mb-12">
          <div className="bg-[#15151E] border-2 border-black p-6 shadow-[8px_8px_0px_0px_#6E3CFB] text-center">
            <div className="text-sm font-mono text-white/40 mb-2 uppercase tracking-widest">Referral Rank</div>
            <div className="text-4xl font-black text-white">#{userData.rank}</div>
          </div>
          <div className="bg-[#15151E] border-2 border-black p-6 shadow-[8px_8px_0px_0px_#6E3CFB] text-center">
            <div className="text-sm font-mono text-white/40 mb-2 uppercase tracking-widest">XP Earned</div>
            <div className="text-4xl font-black text-[#9C6CFF]">{userData.xp}</div>
          </div>
          <div className="bg-[#15151E] border-2 border-black p-6 shadow-[8px_8px_0px_0px_#6E3CFB] text-center">
            <div className="text-sm font-mono text-white/40 mb-2 uppercase tracking-widest">Est. Position</div>
            <div className="text-4xl font-black text-white">Top 5%</div>
          </div>
        </div>

        <div className="bg-[#15151E] border border-white/10 p-8 text-left mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <h3 className="font-bold text-xl mb-2 text-white uppercase tracking-tighter">Boost your ranking</h3>
            <p className="text-white/50 text-sm mb-4">Share your unique referral link to earn +200 XP per signup.</p>
            <div className="flex bg-black border border-white/10 p-2 items-center w-full max-w-md">
              <code className="flex-1 font-mono text-[#9C6CFF] px-4 truncate text-sm">
                gamiprotocol.io/ref/{userData.refCode}
              </code>
              <button onClick={copyRefLink} className="bg-white text-black p-2 font-bold uppercase text-xs tracking-tighter hover:bg-gray-200">
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="flex gap-4">
            <button onClick={shareTwitter} className="bg-[#1DA1F2] text-white px-6 py-3 font-bold uppercase text-xs tracking-tighter border-2 border-black shadow-[4px_4px_0px_0px_#000000] active:shadow-none transition-all flex items-center gap-2">
              <Twitter className="w-4 h-4" /> Share
            </button>
          </div>
        </div>

        {leaderboard.length > 0 && (
          <div className="bg-white/5 border border-white/10 p-6 md:p-8 text-left mb-12">
            <h3 className="font-bold text-xl mb-6 text-white uppercase tracking-widest text-center">Top Referrers Leaderboard</h3>
            <div className="space-y-4">
              {leaderboard.map((user, idx) => (
                <div key={user.id} className="flex items-center justify-between bg-black/50 p-4 border border-white/5">
                  <div className="flex items-center gap-4">
                    <div className="text-white/40 font-mono text-sm w-6">#{idx + 1}</div>
                    <div className="font-bold text-white uppercase tracking-tighter">
                      {user.firstName} {user.lastName.substring(0, 1)}.
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <div className="text-[#9C6CFF] font-black">{user.xp} XP</div>
                      <div className="text-[10px] text-white/40 font-mono uppercase tracking-widest">{user.referralCount || 0} Referrals</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <Link href="/" className="text-white/40 hover:text-white font-mono text-xs uppercase tracking-widest underline underline-offset-4">
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 pt-12 pb-24">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1 rounded-full w-fit mb-6">
          <div className="w-2 h-2 rounded-full bg-[#9C6CFF] animate-pulse"></div>
          <span className="text-[10px] font-mono uppercase text-[#9C6CFF] tracking-[0.2em]">EARLY ACCESS OPEN</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-white mb-4 uppercase">
          Join the Gami Waitlist
        </h1>
        <p className="text-lg text-white/50 max-w-xl mx-auto font-light leading-relaxed">
          Secure your early access to the universal engagement layer and earn initial XP for your on-chain reputation profile.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8 bg-[#15151E] p-8 md:p-12 border-2 border-black shadow-[8px_8px_0px_0px_#6E3CFB] relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest">First Name</label>
            <input required type="text" value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} className="w-full bg-black/50 border border-white/10 p-4 text-white font-sans focus:outline-none focus:border-[#6E3CFB] transition-colors" placeholder="Satoshi" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Last Name</label>
            <input required type="text" value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} className="w-full bg-black/50 border border-white/10 p-4 text-white font-sans focus:outline-none focus:border-[#6E3CFB] transition-colors" placeholder="Nakamoto" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Email Address</label>
          <input required type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-black/50 border border-white/10 p-4 text-white font-sans focus:outline-none focus:border-[#6E3CFB] transition-colors" placeholder="satoshi@example.com" />
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Wallet Address (Optional)</label>
          <input type="text" value={formData.walletAddress} onChange={(e) => setFormData({...formData, walletAddress: e.target.value})} className="w-full bg-black/50 border border-white/10 p-4 text-white font-mono text-sm focus:outline-none focus:border-[#6E3CFB] transition-colors" placeholder="0x..." />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Preferred Chain</label>
            <select value={formData.preferredChain} onChange={(e) => setFormData({...formData, preferredChain: e.target.value})} className="w-full bg-black/50 border border-white/10 p-4 text-white font-sans focus:outline-none focus:border-[#6E3CFB] transition-colors appearance-none">
              <option>Ethereum</option>
              <option>Base</option>
              <option>Arbitrum</option>
              <option>Optimism</option>
              <option>Polygon</option>
              <option>Solana</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Role</label>
            <select value={formData.role} onChange={(e) => setFormData({...formData, role: e.target.value})} className="w-full bg-black/50 border border-white/10 p-4 text-white font-sans focus:outline-none focus:border-[#6E3CFB] transition-colors appearance-none">
              <option>Developer</option>
              <option>Investor</option>
              <option>Community Member</option>
              <option>Partner</option>
            </select>
          </div>
        </div>

        {refParam && (
           <div className="p-4 bg-[#6E3CFB]/10 border border-[#6E3CFB]/30 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#9C6CFF] animate-pulse"></div>
              <span className="text-xs text-[#9C6CFF] font-medium">You were referred! You'll get a +100 XP bonus.</span>
           </div>
        )}

        <div className="space-y-4 pt-4 border-t border-white/5">
          <label className="flex items-center space-x-3 cursor-pointer">
            <input type="checkbox" className="w-5 h-5 bg-black border border-white/20 text-[#6E3CFB] focus:ring-[#6E3CFB]" />
            <span className="text-xs text-white/50">Subscribe to protocol updates and ecosystem news.</span>
          </label>
          <label className="flex items-center space-x-3 cursor-pointer">
            <input required type="checkbox" className="w-5 h-5 bg-black border border-white/20 text-[#6E3CFB] focus:ring-[#6E3CFB]" />
            <span className="text-xs text-white/50">I accept the Terms of Service and Privacy Policy.</span>
          </label>
        </div>

        <button 
          type="submit"
          disabled={loading}
          className="w-full bg-[#6E3CFB] text-white px-8 py-5 font-bold uppercase text-sm tracking-widest border-2 border-black shadow-[6px_6px_0px_0px_#000000] active:shadow-none transition-transform active:translate-x-1 active:translate-y-1 flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {loading ? 'Processing...' : 'Submit Application'} <ArrowRight className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}

