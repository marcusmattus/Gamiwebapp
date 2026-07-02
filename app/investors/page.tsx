export default function InvestorsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 pt-24 pb-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-white mb-4">
          Investor Relations
        </h1>
        <p className="text-xl text-gray-400 font-sans max-w-2xl mx-auto">
          Join us in building the unified engagement layer of the internet. Request access to our data room and pitch deck.
        </p>
      </div>

      <form className="space-y-8 bg-white/5 p-8 md:p-12 border border-white/10 shadow-brutal relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-mono text-gray-300">Fund Name</label>
            <input required type="text" className="w-full bg-black/50 border border-white/10 p-4 text-white font-sans focus:outline-none focus:border-gami-purple focus:ring-1 focus:ring-gami-purple rounded-sm" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-mono text-gray-300">Investor Name</label>
            <input required type="text" className="w-full bg-black/50 border border-white/10 p-4 text-white font-sans focus:outline-none focus:border-gami-purple focus:ring-1 focus:ring-gami-purple rounded-sm" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-mono text-gray-300">Email Address</label>
            <input required type="email" className="w-full bg-black/50 border border-white/10 p-4 text-white font-sans focus:outline-none focus:border-gami-purple focus:ring-1 focus:ring-gami-purple rounded-sm" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-mono text-gray-300">Investor Type</label>
            <select className="w-full bg-black/50 border border-white/10 p-4 text-white font-sans focus:outline-none focus:border-gami-purple focus:ring-1 focus:ring-gami-purple rounded-sm appearance-none">
              <option>Venture Capital</option>
              <option>Token Fund</option>
              <option>Family Office</option>
              <option>Angel Investor</option>
              <option>Strategic Partner</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-mono text-gray-300">Typical Check Size</label>
          <select className="w-full bg-black/50 border border-white/10 p-4 text-white font-sans focus:outline-none focus:border-gami-purple focus:ring-1 focus:ring-gami-purple rounded-sm appearance-none">
            <option>$100k - $500k</option>
            <option>$500k - $1M</option>
            <option>$1M - $5M</option>
            <option>$5M+</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-mono text-gray-300">Areas of Interest</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
            {['Gaming', 'AI', 'Infrastructure', 'Layer 1', 'Fintech', 'Wallets'].map((area) => (
              <label key={area} className="flex items-center space-x-2">
                <input type="checkbox" className="w-4 h-4 bg-black border border-white/20 rounded-sm text-gami-purple focus:ring-gami-purple" />
                <span className="text-sm text-gray-400 font-sans">{area}</span>
              </label>
            ))}
          </div>
        </div>

        <button 
          type="submit"
          className="w-full py-4 bg-gami-purple text-white font-display font-bold text-lg flex items-center justify-center hover:bg-gami-purple/90 transition-transform hover:-translate-y-1 shadow-brutal"
        >
          Request Data Room Access
        </button>
      </form>
    </div>
  );
}
