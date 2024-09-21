"use client";

import { useChannel } from "@/zustand/channel-store";
import { Gamepad2, Users } from "lucide-react";
import Image from "next/image";

export default function ChannelDetails() {
  const { channel } = useChannel();

  if (!channel) {
    return <p>sin cananles</p>;
  }

  return (
    <div className="flex gap-4">
      <Image
        alt="game"
        src={
          "https://static-cdn.jtvnw.net/ttv-boxart/Red%20Dead%20Redemption%202-188x250.jpg"
        }
        width={100}
        height={160}
        className="object-cover rounded"
      />

      <div className="w-full">
        <div className="flex items-center justify-between">
          <h2 className="text-lg">{channel.title}</h2>
          <div className="flex items-center gap-2">
            <Users size={20} className="text-red-600" />
            <div className="w-1 h-1 rounded-full bg-red-600" />
            <span className="text-red-600 text-xl">1,234</span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Gamepad2 size={16} />
          <h4 className="text-sm font-semibold">Red Dead Redemption 2</h4>
        </div>
      </div>
    </div>
  );
}
