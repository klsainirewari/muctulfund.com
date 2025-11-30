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