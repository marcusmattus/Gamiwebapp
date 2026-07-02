import { CheckCircle2, Circle, ArrowRight } from "lucide-react";

export default function RoadmapPage() {
  const milestones = [
    {
      phase: "Phase 1: Foundation",
      status: "completed",
      items: ["Testnet L1 Deployment", "Universal Wallet Prototype", "Basic SDK v0.1", "Initial Partner Onboarding"]
    },
    {
      phase: "Phase 2: The Engagement Engine",
      status: "current",
      items: ["AI Quest Engine Alpha", "Mainnet Snapshot", "TGE Registration", "Developer Portal Launch"]
    },
    {
      phase: "Phase 3: Network Effects",
      status: "upcoming",
      items: ["$GAMI Token Generation Event (TGE)", "Public Mainnet Launch", "Staking & Yield Activation", "Governance Forum V1"]
    },
    {
      phase: "Phase 4: Universal Expansion",
      status: "upcoming",
      items: ["Enterprise AI Orchestration", "Cross-chain Reward Bridges", "Mobile App Launch", "Global Developer Grants"]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 pt-24 pb-24">
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-display font-bold tracking-tight text-white mb-6">
          Protocol Roadmap
        </h1>
        <p className="text-xl text-gray-400 font-sans max-w-2xl mx-auto">
          The path to building the universal engagement layer.
        </p>
      </div>

      <div className="space-y-12">
        {milestones.map((milestone, i) => (
          <div key={i} className={`p-8 md:p-12 border ${milestone.status === 'current' ? 'bg-gami-dark/20 border-gami-purple shadow-glow relative' : 'bg-white/5 border-white/10 shadow-brutal'} rounded-sm`}>
            {milestone.status === 'current' && (
              <div className="absolute top-0 right-0 px-4 py-1 bg-gami-purple text-xs font-mono font-bold text-white uppercase rounded-bl-sm">Current Focus</div>
            )}
            
            <div className="flex items-center space-x-4 mb-6">
              {milestone.status === 'completed' ? (
                <CheckCircle2 className="w-8 h-8 text-gami-accent" />
              ) : milestone.status === 'current' ? (
                <div className="relative">
                  <Circle className="w-8 h-8 text-gami-purple animate-pulse" />
                  <div className="absolute inset-0 m-auto w-4 h-4 bg-gami-purple rounded-full"></div>
                </div>
              ) : (
                <Circle className="w-8 h-8 text-gray-600" />
              )}
              <h2 className="text-3xl font-display font-bold text-white">{milestone.phase}</h2>
            </div>
            
            <ul className="space-y-4 font-sans">
              {milestone.items.map((item, j) => (
                <li key={j} className="flex items-start space-x-3 text-gray-300">
                  <ArrowRight className="w-5 h-5 text-gray-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
