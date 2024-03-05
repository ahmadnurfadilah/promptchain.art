import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { decrypt } from "@/lib/utils";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const runtime = "edge";

export async function POST(req) {
  const { prompt, inputValues } = await req.json();

  const parsePrommpt = JSON.parse(decrypt(prompt?.data));

  const template = `${parsePrommpt.prompt}`;

  const promptText = template.replace(/\[(.*?)\]/g, (match, placeholder) => {
    const dynamicValue = inputValues[placeholder];
    return dynamicValue || match;
  });

  // Ask OpenAI for a streaming completion given the prompt
  const response = await openai.completions.create({
    model: parsePrommpt?.model || "gpt-3.5-turbo-instruct",
    stream: true,
    temperature: parseFloat(parsePrommpt?.temperature || 0.6),
    max_tokens: parseInt(parsePrommpt?.max_tokens || 1024),
    prompt: promptText,
  });
  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}