export default function PartnersPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 pt-24 pb-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-white mb-4">
          Partner with Gami
        </h1>
        <p className="text-xl text-gray-400 font-sans max-w-2xl mx-auto">
          Integrate the universal XP and rewards engine into your game, e-commerce platform, or enterprise application.
        </p>
      </div>

      <form className="space-y-8 bg-white/5 p-8 md:p-12 border border-white/10 shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)] relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-mono text-gray-300">Company Name</label>
            <input required type="text" className="w-full bg-black/50 border border-white/10 p-4 text-white font-sans focus:outline-none focus:border-white focus:ring-1 focus:ring-white rounded-sm" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-mono text-gray-300">Website URL</label>
            <input required type="url" className="w-full bg-black/50 border border-white/10 p-4 text-white font-sans focus:outline-none focus:border-white focus:ring-1 focus:ring-white rounded-sm" placeholder="https://" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-mono text-gray-300">Contact Person</label>
            <input required type="text" className="w-full bg-black/50 border border-white/10 p-4 text-white font-sans focus:outline-none focus:border-white focus:ring-1 focus:ring-white rounded-sm" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-mono text-gray-300">Company Email</label>
            <input required type="email" className="w-full bg-black/50 border border-white/10 p-4 text-white font-sans focus:outline-none focus:border-white focus:ring-1 focus:ring-white rounded-sm" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-mono text-gray-300">Partner Type</label>
          <select className="w-full bg-black/50 border border-white/10 p-4 text-white font-sans focus:outline-none focus:border-white focus:ring-1 focus:ring-white rounded-sm appearance-none">
            <option>Gaming Studio</option>
            <option>E-Commerce / Retail</option>
            <option>Fintech / Payments</option>
            <option>AI Platform</option>
            <option>Creator Economy</option>
            <option>Enterprise</option>
            <option>Other</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-mono text-gray-300">Describe your intended integration</label>
          <textarea required rows={4} className="w-full bg-black/50 border border-white/10 p-4 text-white font-sans focus:outline-none focus:border-white focus:ring-1 focus:ring-white rounded-sm placeholder:text-gray-600" placeholder="How do you plan to use Gami's XP and reward mechanics?"></textarea>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-mono text-gray-300">Estimated Monthly Active Users</label>
            <select className="w-full bg-black/50 border border-white/10 p-4 text-white font-sans focus:outline-none focus:border-white focus:ring-1 focus:ring-white rounded-sm appearance-none">
              <option>&lt; 10,000</option>
              <option>10,000 - 100,000</option>
              <option>100,000 - 1,000,000</option>
              <option>&gt; 1,000,000</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-mono text-gray-300">Current Blockchain (if any)</label>
            <input type="text" className="w-full bg-black/50 border border-white/10 p-4 text-white font-sans focus:outline-none focus:border-white focus:ring-1 focus:ring-white rounded-sm" placeholder="e.g. Ethereum, Solana, None" />
          </div>
        </div>

        <button 
          type="submit"
          className="w-full py-4 bg-white text-black font-display font-bold text-lg flex items-center justify-center gap-2 hover:bg-gray-200 transition-transform hover:-translate-y-1 shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)]"
        >
          Submit Partner Application
        </button>
      </form>
    </div>
  );
}
