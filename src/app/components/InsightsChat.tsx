"use client";

import React, { useState } from "react";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export default function InsightsChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);

  async function send(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!input.trim()) return;

    const newMsgs: ChatMessage[] = [
      ...messages,
      { role: "user", content: input },
    ];

    setMessages(newMsgs);
    setInput("");
    setBusy(true);

    const res = await fetch("/api/insights", {
      method: "POST",
      body: JSON.stringify({ messages: newMsgs }),
    });

    const reader = res.body?.getReader();
    if (!reader) {
      setBusy(false);
      return;
    }

    let text = "";
    const decoder = new TextDecoder();

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      text += decoder.decode(value, { stream: true });

      setMessages([
        ...newMsgs,
        { role: "assistant", content: text },
      ]);
    }

    setBusy(false);
  }

  return (
    <section id="insights" className="max-w-4xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold mb-6 text-[var(--accent2)]">
        AI Insights
      </h2>
      <div className="card p-4 text-left">
        <div className="h-64 overflow-y-auto space-y-3">
          {messages.map((m, i) => (
            <div
              key={i}
              className={m.role === "user" ? "text-right" : "text-left"}
            >
              <div
                className={`inline-block px-3 py-2 rounded-md ${
                  m.role === "user"
                    ? "bg-[var(--accent)] text-black"
                    : "bg-white/10"
                }`}
              >
                {m.content}
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={send} className="mt-3 flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 rounded bg-white/5 border border-white/10 px-3 py-2"
            placeholder="Ask about Manideep…"
          />
          <button disabled={busy} className="btn btn-primary">
            {busy ? "Thinking…" : "Ask"}
          </button>
        </form>
      </div>
    </section>
  );
}