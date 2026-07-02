import { Code2, Terminal, BookOpen, Key } from "lucide-react";

export default function DevelopersPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-24 pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Info Column */}
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-white leading-tight">
            Build the <span className="text-gami-accent">Engagement</span> Layer
          </h1>
          <p className="text-xl text-gray-400 font-sans leading-relaxed">
            Integrate Gami Protocol into your application with just a few lines of code. Get access to our SDK, APIs, and smart contract documentation.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
            <div className="bg-white/5 border border-white/10 p-6 rounded-sm">
              <Code2 className="w-8 h-8 text-gami-purple mb-4" />
              <h3 className="font-display font-bold text-white mb-2">Universal SDK</h3>
              <p className="text-sm text-gray-400 font-sans">React Native, Unity, and standard Web SDKs ready to deploy.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-sm">
              <Terminal className="w-8 h-8 text-gami-purple mb-4" />
              <h3 className="font-display font-bold text-white mb-2">RESTful APIs</h3>
              <p className="text-sm text-gray-400 font-sans">Direct access to the AI agent orchestration layer.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-sm">
              <BookOpen className="w-8 h-8 text-gami-purple mb-4" />
              <h3 className="font-display font-bold text-white mb-2">Smart Contracts</h3>
              <p className="text-sm text-gray-400 font-sans">EVM-compatible architecture for custom on-chain logic.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-sm">
              <Key className="w-8 h-8 text-gami-purple mb-4" />
              <h3 className="font-display font-bold text-white mb-2">Instant API Keys</h3>
              <p className="text-sm text-gray-400 font-sans">Sign up to generate keys and access the testnet faucet.</p>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="bg-black border border-white/10 p-8 shadow-brutal-purple relative">
          <div className="flex items-center space-x-2 mb-8 border-b border-white/10 pb-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="font-mono text-xs text-gray-500 ml-4">dev_signup.sh</span>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-mono text-gray-300">Developer Name</label>
              <input required type="text" className="w-full bg-white/5 border border-white/10 p-3 text-white font-mono text-sm focus:outline-none focus:border-gami-accent" />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-mono text-gray-300">Email Address</label>
              <input required type="email" className="w-full bg-white/5 border border-white/10 p-3 text-white font-mono text-sm focus:outline-none focus:border-gami-accent" />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-mono text-gray-300">GitHub Profile (Optional)</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 p-3 text-white font-mono text-sm focus:outline-none focus:border-gami-accent" placeholder="github.com/" />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-mono text-gray-300">Primary Language / Framework</label>
              <select className="w-full bg-white/5 border border-white/10 p-3 text-white font-mono text-sm focus:outline-none focus:border-gami-accent appearance-none">
                <option>TypeScript / Node.js</option>
                <option>React / Next.js</option>
                <option>Python</option>
                <option>Rust</option>
                <option>Go</option>
                <option>C# / Unity</option>
              </select>
            </div>

            <button 
              type="submit"
              className="w-full py-4 bg-gami-accent text-black font-mono font-bold hover:bg-gami-accent/80 transition-colors mt-4"
            >
              $ generate_api_key --env=testnet
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
