import { Clock, CheckCircle2, AlertCircle } from "lucide-react";

export default function TGEPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 pt-24 pb-24">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-white mb-6">
          TGE Event
        </h1>
        <p className="text-xl text-gray-400 font-sans max-w-2xl mx-auto">
          The official Token Generation Event for $GAMI. Check your eligibility and prepare for launch.
        </p>
      </div>

      {/* Countdown Timer */}
      <div className="bg-white/5 border border-white/10 p-8 md:p-12 text-center shadow-brutal-purple mb-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gami-accent to-transparent"></div>
        <h2 className="text-2xl font-mono text-gray-400 mb-8 uppercase tracking-widest">Mainnet Launch In</h2>
        <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
          {[
            { label: "Days", value: "45" },
            { label: "Hours", value: "12" },
            { label: "Mins", value: "34" },
            { label: "Secs", value: "59" }
          ].map((item, i) => (
            <div key={i} className="bg-black/50 border border-white/10 p-4 md:p-6 rounded-sm">
              <div className="text-3xl md:text-5xl font-display font-bold text-white mb-2">{item.value}</div>
              <div className="text-xs font-mono text-gray-500 uppercase">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Status Box */}
        <div className="bg-white/5 border border-white/10 p-8 rounded-sm">
          <h3 className="text-2xl font-display font-bold text-white mb-6">Your Status</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-black/50 border border-white/10 rounded-sm">
              <span className="font-mono text-sm text-gray-300">Wallet Connected</span>
              <AlertCircle className="w-5 h-5 text-yellow-500" />
            </div>
            <div className="flex items-center justify-between p-4 bg-black/50 border border-white/10 rounded-sm">
              <span className="font-mono text-sm text-gray-300">KYC Status</span>
              <AlertCircle className="w-5 h-5 text-gray-600" />
            </div>
            <div className="flex items-center justify-between p-4 bg-black/50 border border-white/10 rounded-sm">
              <span className="font-mono text-sm text-gray-300">Whitelist Eligibility</span>
              <AlertCircle className="w-5 h-5 text-gray-600" />
            </div>
            <button className="w-full py-4 bg-white text-black font-display font-bold hover:bg-gray-200 mt-4 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">
              Connect Wallet to Check
            </button>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white/5 border border-white/10 p-8 rounded-sm">
          <h3 className="text-2xl font-display font-bold text-white mb-6">Launch Timeline</h3>
          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
            
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-gami-purple text-white shadow shadow-gami-purple/20 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-sm border border-white/10 bg-black/50">
                <div className="font-display font-bold text-white mb-1">Testnet Launch</div>
                <div className="text-xs font-mono text-gray-400">Completed</div>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gami-purple bg-black text-gami-purple shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <div className="w-2 h-2 rounded-full bg-gami-purple animate-pulse"></div>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-sm border border-gami-purple/30 bg-black/50">
                <div className="font-display font-bold text-white mb-1">Snapshot</div>
                <div className="text-xs font-mono text-gami-accent">In Progress</div>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-black text-gray-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <Clock className="w-5 h-5" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-sm border border-white/10 bg-black/50 opacity-50">
                <div className="font-display font-bold text-white mb-1">TGE & Claim</div>
                <div className="text-xs font-mono text-gray-400">Upcoming</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
