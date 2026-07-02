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
      <body className="antialiased min-h-screen flex flex-col relative" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1 pt-20">
          {children}
        </main>
        <footer className="border-t border-white/10 py-12 text-center text-sm font-mono text-gray-500 mt-20">
          <div className="max-w-7xl mx-auto px-4">
            <p>&copy; {new Date().getFullYear()} Gami Protocol. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
