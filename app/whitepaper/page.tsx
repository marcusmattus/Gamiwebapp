"use client";

import Link from "next/link";
import { ArrowLeft, Download, FileText, ChevronRight } from "lucide-react";
import Markdown from "react-markdown";

const whitepaperContent = `
## 1. Abstract
Gami Protocol presents a revolutionary infrastructure layer designed to unify and elevate digital engagement across the internet. In a landscape fragmented by isolated loyalty programs, platform-specific achievements, and unsustainable reward economies, Gami Protocol introduces a seamless, interoperable, and intelligent system. By leveraging a powerful combination of a **Universal Wallet**, **Multi-Chain Progression (MCP) Core Services**, an **AI-Personalization Dashboard**, and robust cross-chain interoperability, the protocol enables users to own and transport their digital identity and assets across any application.

## 2. Introduction
### 2.1 Background: The Digital Engagement Imperative
In the contemporary digital economy, user attention is the ultimate currency. Platforms across gaming, e-commerce, social media, and fitness invest billions annually in loyalty programs and gamification mechanics to acquire and retain users. Despite this, current systems are fundamentally broken.

### 2.2 Purpose & Vision of Gami Protocol
Gami Protocol exists to build the universal layer for digital engagement. Our purpose is to unify and simplify loyalty and gamification systems, making them transparent, portable, and inherently more engaging for everyone.

## 3. Problem Statement: The Fragmented Digital Landscape
The modern internet user suffers from "loyalty fatigue." The proliferation of point systems has led to significant challenges:
- **Point Dilution and Inutility:** With points locked in individual apps, their collective value and utility are drastically reduced.
- **Lack of Coherent Identity:** A user's reputation, history, and achievements are balkanized. 
- **Poor User Experience:** Managing multiple wallets, logins, and reward programs creates friction that discourages participation.

## 4. Solution Overview: The Gami Protocol Ecosystem
Gami Protocol's solution is an integrated ecosystem of four core components that work in concert to solve the problems of fragmentation and complexity.

### 4.1 The Universal Wallet: Your Cross-Web Identity
The Gami Universal Wallet is the user's gateway to the ecosystem. It is a non-custodial wallet that goes beyond simply holding crypto assets.
- Unified Identity
- Asset Aggregator
- Quest Hub
- Seamless Onboarding

### 4.2 Multi-Chain Progression (MCP) Core Services
Handles cross-chain logic and reward distributions.

### 4.3 AI-Personalization Dashboard
Provides tailored quests and challenges.

## 5. Tokenomics: The $GAMI Economic Engine
A sustainable and utility-driven token economy is central to the long-term health of the Gami Protocol. Our model is designed to align the incentives of users, developers, and investors.

### 5.1 The Dual-Token Model: XP & $GAMI
The ecosystem operates on a dual-token model that separates "effort" from "economic value":
1. **Experience Points (XP):** Non-transferable, soulbound tokens representing a user's engagement and effort. Infinite in supply but costly to earn. Used for leveling up.
2. **$GAMI Token:** The transferable, liquid governance and utility token of the ecosystem. Used for governance, staking, paying platform fees, and accessing premium features.

### Token Allocation
- **Community Rewards & Ecosystem:** 40%
- **Team & Advisors:** 20%
- **Treasury:** 15%
- **Strategic Partners:** 15%
- **Seed & Private Investors:** 10%

## 6. Roadmap: From Launch to Ecosystem Dominance
- **Phase 1: Foundation & Launch (Q4 2025 - Q2 2026)**
- **Phase 2: Scale & Expansion (Q3 2026 - Q1 2027)**
- **Phase 3: Ecosystem & DAO Governance (2027+)**
`;

export default function WhitepaperPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 pt-12 pb-24">
      <div className="mb-12">
        <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white font-mono text-xs uppercase tracking-widest mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
              Whitepaper
            </h1>
            <p className="text-white/50 font-light max-w-2xl">
              Gami Protocol: The Universal Layer for Digital Engagement & Loyalty (v1.0)
            </p>
          </div>
          <button className="bg-white text-black px-6 py-3 font-bold uppercase text-xs tracking-tighter border-2 border-black shadow-[4px_4px_0px_0px_#6E3CFB] active:shadow-none transition-transform active:translate-x-1 active:translate-y-1 flex items-center gap-2">
            <Download className="w-4 h-4" /> Download PDF
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Table of Contents sidebar */}
        <div className="lg:w-64 flex-shrink-0">
          <div className="sticky top-32 bg-[#15151E] border border-white/10 p-6 hidden lg:block">
            <h3 className="font-bold text-white uppercase tracking-widest text-xs mb-4">Contents</h3>
            <ul className="space-y-3 font-mono text-xs text-white/50">
              <li className="hover:text-white cursor-pointer transition-colors">1. Abstract</li>
              <li className="hover:text-white cursor-pointer transition-colors">2. Introduction</li>
              <li className="hover:text-white cursor-pointer transition-colors">3. Problem Statement</li>
              <li className="hover:text-white cursor-pointer transition-colors">4. Solution Overview</li>
              <li className="hover:text-white cursor-pointer transition-colors">5. Tokenomics</li>
              <li className="hover:text-white cursor-pointer transition-colors">6. Roadmap</li>
            </ul>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 bg-[#15151E] p-8 md:p-12 border-2 border-black shadow-[8px_8px_0px_0px_#6E3CFB] prose prose-invert prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter prose-h1:text-4xl prose-h2:text-2xl prose-h2:text-[#9C6CFF] prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-4 prose-h3:text-xl prose-a:text-[#6E3CFB] max-w-none">
          <Markdown>{whitepaperContent}</Markdown>
        </div>
      </div>
    </div>
  );
}
