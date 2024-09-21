"use client";

import { useEffect, useRef, useState } from "react";
import ChatMessage from "./chat-message";
import { Send, Settings2 } from "lucide-react";
import Message from "@/types/message";
import { generateMessage, generateUsername } from "@/utils/generator";

export default function ChatList() {
  const [messages, setMessages] = useState<Message[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  // add message with set timeout every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setMessages((prev) => [
        ...prev,
        { content: generateMessage(), author: generateUsername() },
      ]);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      // smoth scroll
    }
  }, [messages]);

  const addMessage = (message: Message) => {
    setMessages((prev) => [...prev, message]);
  };

  return (
    <div className="h-[86vh] bg-twitch-bg rounded-lg py-3 flex flex-col gap-2 justify-between">
      <div
        className="grow overflow-y-auto scrollbar-thin scrollbar-track-current flex flex-col gap-1"
        ref={scrollRef}
      >
        {messages.map(({ author, content }, index) => (
          <ChatMessage key={index} author={author} message={content} />
        ))}
      </div>
      <div className="px-3">
        <textarea
          placeholder="Enviar mensaje"
          className="w-full p-3 h-20 bg-black/20 rounded-lg text-sm focus:outline-none border border-transparent focus:border-twitch"
        />
        <div className="flex items-center justify-between">
          <button type="button">
            <Settings2 size={12} />
          </button>
          <button
            type="button"
            className="bg-twitch rounded-lg px-3 py-2 flex items-center gap-2 text-sm shadow-none transition-all duration-200 ease-in-out hover:shadow-md hover:shadow-twitch-500/60"
            onClick={() =>
              addMessage({ content: "hola", author: generateUsername() })
            }
          >
            <Send size={12} />
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}
