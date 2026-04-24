"use client";

import { useEffect, useState, useCallback } from "react";

type Message = {
  id: number;
  from: "patient" | "agent";
  text: string;
  delay: number;
};

const MESSAGES: Message[] = [
  {
    id: 1,
    from: "patient",
    text: "Hola buenas, ¿cuánto cuesta una limpieza dental?",
    delay: 800,
  },
  {
    id: 2,
    from: "agent",
    text: "¡Hola! 😊 Una limpieza dental en nuestra clínica tiene un precio de 60€. ¿Quieres que te agendemos una cita? Tenemos huecos disponibles esta semana.",
    delay: 2400,
  },
  {
    id: 3,
    from: "patient",
    text: "Sí, perfecto. ¿El jueves por la tarde?",
    delay: 4600,
  },
  {
    id: 4,
    from: "agent",
    text: "Perfecto, te apunto el jueves a las 17:30h. Te llegará una confirmación ahora mismo. ¡Hasta el jueves! 😊",
    delay: 6400,
  },
];

const LOOP_RESET = 10000;
const TYPING_OFFSET = 1200;

function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 px-4 py-3 bg-white rounded-2xl rounded-bl-sm shadow-sm w-fit">
      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0ms]" />
      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:150ms]" />
      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:300ms]" />
    </div>
  );
}

export default function WhatsAppMockup() {
  const [visibleIds, setVisibleIds] = useState<number[]>([]);
  const [typingId, setTypingId] = useState<number | null>(null);
  const [cycleKey, setCycleKey] = useState(0);

  const runCycle = useCallback(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    MESSAGES.forEach((msg) => {
      if (msg.from === "agent") {
        timers.push(
          setTimeout(
            () => setTypingId(msg.id),
            msg.delay - TYPING_OFFSET
          )
        );
      }
      timers.push(
        setTimeout(() => {
          setTypingId(null);
          setVisibleIds((prev) => [...prev, msg.id]);
        }, msg.delay)
      );
    });

    timers.push(
      setTimeout(() => {
        setVisibleIds([]);
        setTypingId(null);
        setCycleKey((k) => k + 1);
      }, LOOP_RESET)
    );

    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    return runCycle();
  }, [cycleKey, runCycle]);

  return (
    <div className="relative w-full max-w-sm mx-auto select-none">
      {/* Phone frame */}
      <div className="bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden">
        {/* WhatsApp header */}
        <div className="bg-[#075E54] px-5 pt-10 pb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center border-2 border-accent/40 shrink-0">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
              </svg>
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Clínica Dental Sonrisa</p>
              <p className="text-green-200 text-xs">en línea ahora</p>
            </div>
          </div>
        </div>

        {/* Chat bubbles */}
        <div
          className="px-4 py-4 min-h-[300px] flex flex-col gap-2 overflow-hidden"
          style={{
            background: "#e5ddd5",
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cg fill='%23a3c9a8' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        >
          {MESSAGES.map((msg) => {
            const isVisible = visibleIds.includes(msg.id);
            const isTyping = typingId === msg.id;

            if (!isVisible && !isTyping) return null;

            if (isTyping && !isVisible) {
              return (
                <div key={`t-${msg.id}`} className="flex justify-start">
                  <TypingIndicator />
                </div>
              );
            }

            return (
              <div
                key={msg.id}
                className={`flex ${msg.from === "patient" ? "justify-end" : "justify-start"} chat-bubble-in`}
              >
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-2xl shadow-sm text-sm leading-relaxed ${
                    msg.from === "patient"
                      ? "bg-[#DCF8C6] text-gray-800 rounded-br-sm"
                      : "bg-white text-gray-800 rounded-bl-sm"
                  }`}
                >
                  {msg.text}
                  {msg.from === "patient" && (
                    <span className="block text-right text-blue-400 text-[10px] mt-0.5">
                      ✓✓
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Input bar */}
        <div className="bg-[#f0f0f0] px-4 py-3 flex items-center gap-2">
          <div className="flex-1 bg-white rounded-full px-4 py-2 text-gray-400 text-sm">
            Escribe un mensaje...
          </div>
          <div className="w-10 h-10 bg-[#075E54] rounded-full flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Ambient glow */}
      <div className="absolute inset-0 -z-10 blur-3xl opacity-15 rounded-[2.5rem] bg-accent scale-90" />
    </div>
  );
}
