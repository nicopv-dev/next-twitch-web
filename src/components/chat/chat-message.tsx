"use client";

import { generateColor } from "@/utils/generator";
import { useMemo } from "react";

interface Props {
  author: string;
  message: string;
}

export default function ChatMessage({ author, message }: Props) {
  const getColor = useMemo(() => generateColor(), [author]);

  return (
    <div className="flex flex-wrap gap-2 px-6">
      <span className={`text-sm font-semibold`} style={{ color: getColor }}>
        {author}
      </span>
      <p className="text-sm text-white/60 flex flex-wrap">{message}</p>
    </div>
  );
}
