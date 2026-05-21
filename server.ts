import express from "express";
import path from "path";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";
import * as dotenv from 'dotenv';

dotenv.config();

let aiClient: GoogleGenAI | null = null;
function getAIClient() {
  if (!aiClient) {
    if (!process.env.GEMINI_API_KEY) {
      throw new Error("GEMINI_API_KEY environment variable is missing.");
    }
    aiClient = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  }
  return aiClient;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Indigo Development Consulting
  app.post("/api/consult", async (req, res) => {
    try {
      const { prompt } = req.body;
      if (!prompt) {
        return res.status(400).json({ error: "Prompt is required." });
      }

      const client = getAIClient();
      
      const systemInstruction = `You are a sophisticated, high-end real estate and property development consultant AI for "Indigo Homes and Developments Limited", a boutique luxury real estate firm based in Lagos, Nigeria. 
      Your tone should be elegant, professional, architectural, and highly knowledgeable. 
      Their core projects include: INSIGNIA, MERIDIANA HAYWOOD ESTATE, MERIDIANA BLUE OAK, MERIDIANA GOLD FOLD, IVORY GROVE, and THE MERIDIANA.
      Help the user with architectural guidance, investment advice, property selection, or project estimation based on their input.
      Do not invent new specific project names, refer only to their official projects when relevant.
      Keep your response concise, structured, and premium in feel.`;

      const response = await client.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });

      res.json({ result: response.text });
    } catch (error) {
      console.error("AI Generation Error:", error);
      res.status(500).json({ error: "Failed to process consultation request." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer().catch(console.error);
