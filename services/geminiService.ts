import { GoogleGenAI, Type } from "@google/genai";
import { Fund } from '../types';

// Fallback data in case API key is missing or fails
const FALLBACK_FUNDS: Fund[] = [
  { name: "Nippon India Small Cap Fund", category: "Small Cap", return3yr: "32.5%", risk: "Very High" },
  { name: "Quant Mid Cap Fund", category: "Mid Cap", return3yr: "28.4%", risk: "High" },
  { name: "Parag Parikh Flexi Cap Fund", category: "Flexi Cap", return3yr: "22.1%", risk: "High" },
  { name: "HDFC Top 100 Fund", category: "Large Cap", return3yr: "18.5%", risk: "High" },
  { name: "SBI Contra Fund", category: "Contra", return3yr: "25.2%", risk: "High" }
];

export const getTopPerformingFunds = async (): Promise<Fund[]> => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API Key not found, using fallback data.");
    return FALLBACK_FUNDS;
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: "List 5 current top-performing Equity Mutual Funds in India. Return ONLY a JSON array. Each object must have: 'name', 'category', 'return3yr' (e.g., '25%'), and 'risk'.",
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              name: { type: Type.STRING },
              category: { type: Type.STRING },
              return3yr: { type: Type.STRING },
              risk: { type: Type.STRING }
            },
            required: ["name", "category", "return3yr", "risk"]
          }
        }
      }
    });

    if (response.text) {
      const data = JSON.parse(response.text) as Fund[];
      return data;
    }
    return FALLBACK_FUNDS;
  } catch (error) {
    console.error("Error fetching funds from Gemini:", error);
    return FALLBACK_FUNDS;
  }
};

export const getFinancialAdvice = async (goal: string, risk: string, duration: string): Promise<string> => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    return "AI Service is currently offline. Please contact Kanaram Saini directly for advice.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const prompt = `
      You are an expert Mutual Fund Distributor assistant for Kanaram Saini (ARN-254674).
      
      User Profile:
      - Goal: ${goal}
      - Risk Appetite: ${risk}
      - Investment Duration: ${duration}

      Task:
      Provide a concise investment strategy in 3-4 bullet points.
      1. Suggest an asset allocation (e.g., 60% Equity, 40% Debt).
      2. Recommend specific mutual fund CATEGORIES (e.g., Large Cap, Flexi Cap) that fit this risk and duration. Do NOT name specific schemes.
      3. Provide a brief tip for this specific goal.

      Constraints:
      - Keep it under 150 words.
      - Tone: Professional, encouraging, and trustworthy.
      - MANDATORY DISCLAIMER: End with "Disclaimer: This is AI-generated guidance. Please consult Kanaram Saini for specific scheme recommendations before investing."
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    return response.text || "Unable to generate advice at this time.";
  } catch (error) {
    console.error("AI Advice Error:", error);
    return "We are experiencing high traffic. Please try again later or contact us directly.";
  }
};
