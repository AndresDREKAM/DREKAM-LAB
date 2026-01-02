
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getBrutalStrategy = async (projectIdea: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are the lead consultant at Drekam Lab, a brutalist digital agency. 
      Your task is to analyze the user's project idea and provide a "Brutally Effective" strategy.

      CRITICAL INSTRUCTION: Detect the language of the user's input. 
      - If the user writes in Spanish, you MUST respond in Spanish. 
      - If the user writes in English, you MUST respond in English. 
      - If the user writes in Mandarin/Chinese, you MUST respond in Mandarin/Chinese.

      Project Idea: "${projectIdea}"

      Provide a "Brutal Strategy Breakdown" that is honest, punchy, and professional. 
      Format it in Markdown with these three sections (translated to the detected language):
      1. REALITY CHECK (The hard truths about their market/idea)
      2. THE CORE IMPACT (The single most important factor for success)
      3. DREKAM'S ACTION (What our agency would specifically do to disrupt the market)

      Keep it under 300 words. Use a bold, direct, and minimalist tone. No fluff.`,
      config: {
        temperature: 0.8,
        topP: 0.95,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Error fetching strategy:", error);
    return "The lab is currently recalibrating. Please try again later. Brutal truth: connectivity issues.";
  }
};
