import { Coins, Lock, Users, Zap, Building2, Wallet } from "lucide-react";

export default function TokenPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-24 pb-24">
      <div className="text-center mb-20">
        <div className="inline-block px-4 py-1.5 rounded-full border border-gami-purple/30 bg-gami-purple/10 mb-6">
          <span className="font-mono text-sm font-medium text-gami-accent">Native Utility Token</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-white mb-6">
          $GAMI
        </h1>
        <p className="text-xl text-gray-400 font-sans max-w-2xl mx-auto">
          The core fuel of the Gami Protocol. Powering the universal rewards economy, governance, and network security.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
        <div className="bg-white/5 border border-white/10 p-6 rounded-sm">
          <div className="text-sm font-mono text-gray-400 mb-2">Total Supply</div>
          <div className="text-2xl md:text-3xl font-display font-bold text-white">1,000,000,000</div>
        </div>
        <div className="bg-white/5 border border-white/10 p-6 rounded-sm">
          <div className="text-sm font-mono text-gray-400 mb-2">Network</div>
          <div className="text-2xl md:text-3xl font-display font-bold text-white">Gami L1</div>
        </div>
        <div className="bg-white/5 border border-white/10 p-6 rounded-sm">
          <div className="text-sm font-mono text-gray-400 mb-2">Type</div>
          <div className="text-2xl md:text-3xl font-display font-bold text-white">ERC-20 Equivalent</div>
        </div>
        <div className="bg-white/5 border border-white/10 p-6 rounded-sm">
          <div className="text-sm font-mono text-gray-400 mb-2">Deflationary</div>
          <div className="text-2xl md:text-3xl font-display font-bold text-gami-accent">Fee Burn</div>
        </div>
      </div>

      {/* Utility Section */}
      <h2 className="text-3xl font-display font-bold text-white mb-8 text-center">Token Utility</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {[
          { icon: <Wallet />, title: "Network Fees", desc: "Pay for transactions and smart contract execution on the Gami L1." },
          { icon: <Lock />, title: "Staking", desc: "Secure the network and earn yields by staking $GAMI tokens." },
          { icon: <Users />, title: "Governance", desc: "Vote on protocol upgrades, treasury allocation, and partner grants." },
          { icon: <Zap />, title: "Quest Boosts", desc: "Spend $GAMI to multiply XP rewards and unlock premium quests." },
          { icon: <Building2 />, title: "Enterprise Settlement", desc: "Brands use $GAMI to fund reward pools and pay for AI API usage." },
          { icon: <Coins />, title: "Marketplace", desc: "Trade digital assets, NFTs, and access passes within the ecosystem." },
        ].map((item, i) => (
          <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-gami-purple/50 transition-colors">
            <div className="w-12 h-12 bg-gami-purple/20 text-gami-accent rounded-sm flex items-center justify-center mb-6">
              {item.icon}
            </div>
            <h3 className="text-xl font-display font-bold text-white mb-3">{item.title}</h3>
            <p className="text-gray-400 font-sans leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Tokenomics Breakdown */}
      <h2 className="text-3xl font-display font-bold text-white mb-8 text-center">Allocation</h2>
      <div className="bg-black/50 border border-white/10 p-8 md:p-12 rounded-sm shadow-brutal-purple">
        <div className="space-y-6">
          {[
            { label: "Community & Rewards", percent: "40%", color: "bg-gami-purple" },
            { label: "Ecosystem & Treasury", percent: "25%", color: "bg-gami-accent" },
            { label: "Core Contributors", percent: "15%", color: "bg-white" },
            { label: "Investors", percent: "15%", color: "bg-gray-400" },
            { label: "Public Liquidity", percent: "5%", color: "bg-gray-600" },
          ].map((item, i) => (
            <div key={i}>
              <div className="flex justify-between font-mono text-sm mb-2">
                <span className="text-white">{item.label}</span>
                <span className="text-gami-accent">{item.percent}</span>
              </div>
              <div className="w-full h-4 bg-white/10 rounded-full overflow-hidden">
                <div className={`h-full ${item.color}`} style={{ width: item.percent }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
