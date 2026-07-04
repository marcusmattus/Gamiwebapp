import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const { message, history } = await req.json();

    const systemPrompt = `You are Nova, the AI Gamification Architect for Gami Protocol. 
Your goal is to help businesses, developers, and creators design an XP, quest, and reward system for their product.
You act as an onboarding assistant. First, you chat with them to understand their product (e.g. e-commerce, web3 game, fitness app).
Then, you help them generate a set of custom badges, quests, and rewards.
Output your response in regular conversational text. If you want to propose a quest/badge configuration, output it within a specialized markdown code block like this:
\`\`\`json
{
  "type": "gami_config",
  "quests": [
    { "title": "First Purchase", "xp": 100, "description": "User completes their first purchase" }
  ],
  "badges": [
    { "name": "Early Adopter", "icon": "Star", "color": "purple" }
  ]
}
\`\`\`
Be concise, enthusiastic, and highly professional with a web3/tech tone.`;

    const chatHistory = [
      { role: "user", parts: [{ text: systemPrompt }] },
      { role: "model", parts: [{ text: "Understood. I am Nova. I will help the user build their gamification layer." }] },
    ];

    for (const msg of history) {
      chatHistory.push({
        role: msg.role === "assistant" ? "model" : "user",
        parts: [{ text: msg.content }],
      });
    }

    chatHistory.push({
      role: "user",
      parts: [{ text: message }],
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: chatHistory,
    });

    return NextResponse.json({ text: response.text });
  } catch (error) {
    console.error("Gemini API Error:", error);
    return NextResponse.json({ error: "Failed to generate response" }, { status: 500 });
  }
}
