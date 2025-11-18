import OpenAI from "openai";
export const runtime = "edge";

export async function POST(req: Request) {
  const { messages } = await req.json();
  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const stream = await client.chat.completions.stream({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "You are an assistant about Manideep Pippari’s portfolio." },
      ...messages,
    ],
  });
  return new Response(stream.toReadableStream());
}
