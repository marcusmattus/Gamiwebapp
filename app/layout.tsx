import type {Metadata} from 'next';
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Gami Protocol - Universal Gamification Infrastructure',
  description: 'Earn XP, rewards, and tokens across apps and games using Gami Protocol\'s AI-powered gamification engine.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="antialiased min-h-screen flex flex-col relative bg-[#0E0E12] text-white" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1 pt-[104px]">
          {children}
        </main>
        <footer className="relative z-10 px-6 md:px-10 py-6 border-t border-white/10 bg-black/40 flex flex-col md:flex-row items-center justify-between text-[10px] font-mono tracking-[0.2em] uppercase text-white/30 gap-4 mt-auto">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <span>Block: #19,204,112</span>
            <span>Gas: 14 Gwei</span>
            <span>Epoch: 402</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <a href="#" className="hover:text-gami-purple transition-colors">Twitter/X</a>
            <a href="#" className="hover:text-gami-purple transition-colors">Discord</a>
            <a href="#" className="hover:text-gami-purple transition-colors">GitHub</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
