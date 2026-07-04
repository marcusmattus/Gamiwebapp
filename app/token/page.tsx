import { Coins, Lock, Users, Zap, Building2, Wallet, CheckCircle2, ShieldAlert } from "lucide-react";

export default function TokenPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-12 pb-24">
      <div className="text-center mb-20">
        <div className="inline-block px-4 py-1.5 border-2 border-black bg-[#6E3CFB]/10 mb-6 shadow-[4px_4px_0px_0px_#6E3CFB]">
          <span className="font-mono text-sm font-bold uppercase tracking-widest text-white">Native Utility Token</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6 uppercase">
          $GAMI
        </h1>
        <p className="text-lg text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
          The utility and governance token for the Gami Protocol economy. It supports staking tiers, XP multipliers, premium partner access, governance, reward pool funding, and ecosystem incentives.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
        <div className="bg-[#15151E] border-2 border-black p-6 shadow-[4px_4px_0px_0px_#6E3CFB]">
          <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-2">Total Supply</div>
          <div className="text-2xl md:text-3xl font-black text-white">1,000,000,000</div>
        </div>
        <div className="bg-[#15151E] border-2 border-black p-6 shadow-[4px_4px_0px_0px_#6E3CFB]">
          <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-2">Network</div>
          <div className="text-2xl md:text-3xl font-black text-white">Gami L1</div>
        </div>
        <div className="bg-[#15151E] border-2 border-black p-6 shadow-[4px_4px_0px_0px_#6E3CFB]">
          <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-2">Type</div>
          <div className="text-2xl md:text-3xl font-black text-white">ERC-20</div>
        </div>
        <div className="bg-[#15151E] border-2 border-black p-6 shadow-[4px_4px_0px_0px_#6E3CFB]">
          <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-2">Deflationary</div>
          <div className="text-2xl md:text-3xl font-black text-[#9C6CFF]">Fee Burn</div>
        </div>
      </div>

      {/* Utility Section */}
      <h2 className="text-3xl font-black uppercase tracking-tighter text-white mb-8 text-center">Core Utilities</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {[
          { icon: <Zap />, title: "XP Multiplier", desc: "Holding or staking $GAMI can boost XP earnings across the ecosystem." },
          { icon: <Lock />, title: "Tier Access", desc: "Premium tiers and partner features require $GAMI staking." },
          { icon: <Coins />, title: "Reward Pools", desc: "Treasury and fee flows fund user rewards, quests, and sponsored incentives." },
          { icon: <Users />, title: "Governance", desc: "Holders vote on protocol parameters, reward formulas, fee rates, and ecosystem programs." },
          { icon: <Building2 />, title: "Partner Access", desc: "Partners stake or subscribe for higher campaign limits, analytics, SDK access, and lower fees." },
          { icon: <Wallet />, title: "Network Settlement", desc: "Trade digital assets and settle cross-chain transactions within the ecosystem." },
        ].map((item, i) => (
          <div key={i} className="bg-[#15151E] border-2 border-black p-8 shadow-[6px_6px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#6E3CFB] transition-shadow">
            <div className="w-12 h-12 bg-[#6E3CFB] text-white flex items-center justify-center mb-6 border-2 border-black">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold uppercase tracking-tighter text-white mb-3">{item.title}</h3>
            <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Tokenomics Breakdown */}
      <div className="grid md:grid-cols-2 gap-12 mb-24">
        <div>
          <h2 className="text-3xl font-black uppercase tracking-tighter text-white mb-8">Illustrative Allocation</h2>
          <div className="bg-[#15151E] border-2 border-black p-8 md:p-10 shadow-[8px_8px_0px_0px_#6E3CFB]">
            <div className="space-y-8">
              {[
                { label: "Community and Reward Pools", percent: "50%", value: 50, color: "bg-[#6E3CFB]" },
                { label: "Team and Advisors", percent: "20%", value: 20, color: "bg-[#9C6CFF]" },
                { label: "Strategic Partners and Investors", percent: "20%", value: 20, color: "bg-white" },
                { label: "Treasury and Reserves", percent: "10%", value: 10, color: "bg-white/40" },
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between font-mono text-xs uppercase tracking-widest mb-3">
                    <span className="text-white">{item.label}</span>
                    <span className="text-white font-bold">{item.percent}</span>
                  </div>
                  <div className="w-full h-3 border border-black bg-black">
                    <div className={`h-full ${item.color}`} style={{ width: `${item.value}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-[10px] font-mono text-white/40 uppercase tracking-widest text-center">
              * Final allocation requires legal, treasury, and governance review.
            </p>
          </div>
        </div>

        <div>
           <h2 className="text-3xl font-black uppercase tracking-tighter text-white mb-8">Airdrop & Launch Strategy</h2>
           <div className="bg-[#15151E] border-2 border-black p-8 shadow-[8px_8px_0px_0px_#000000] space-y-6">
              <div>
                <h3 className="font-bold uppercase tracking-widest text-sm text-[#9C6CFF] mb-2">Launch Philosophy</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Do not lead with speculative token claims. Lead with protocol utility, partner adoption, SDK usage, points activity, wallet engagement, and transparent reward flows. Token launch should amplify a working ecosystem, not substitute for one.
                </p>
              </div>
              <div className="h-px w-full bg-white/10" />
              <div>
                <h3 className="font-bold uppercase tracking-widest text-sm text-[#9C6CFF] mb-2">Airdrop Actions</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Airdrops should reward useful actions: early wallet signup, XP earned, quest completion, partner integrations, developer contributions, community ambassador work, staking participation, and verified referrals.
                </p>
              </div>
              <div className="h-px w-full bg-white/10" />
              <div className="flex gap-4">
                <ShieldAlert className="w-8 h-8 flex-shrink-0 text-[#6E3CFB]" />
                <div>
                  <h3 className="font-bold uppercase tracking-widest text-sm text-white mb-1">Risk Controls</h3>
                  <p className="text-white/40 text-xs leading-relaxed">
                    Geofencing where required, claim caps, sybil checks, lockups, vesting, treasury controls, anti-bot scoring, and legal review for cash-equivalent rewards.
                  </p>
                </div>
              </div>
           </div>
        </div>
      </div>

      <div className="border-t-2 border-black pt-16">
        <h2 className="text-3xl font-black uppercase tracking-tighter text-white mb-8 text-center">TGE Readiness Checklist</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {[
            "MVP wallet live with XP, quests, and claims",
            "SDK integrated with initial design partners",
            "Token legal memo completed",
            "Treasury contracts audited",
            "Vesting contracts finalized",
            "Market maker and liquidity plan agreed",
            "Exchange/listing strategy prepared",
            "Community campaign and airdrop system ready",
            "Token risk disclosures complete",
            "Governance roadmap published"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 bg-[#15151E] border border-white/5 p-4">
              <CheckCircle2 className="w-5 h-5 text-[#9C6CFF]" />
              <span className="text-sm font-medium text-white/80">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
