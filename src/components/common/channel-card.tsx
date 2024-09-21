"use client";

import Channel from "@/types/channel";
import { useChannel } from "@/zustand/channel-store";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  channel: Channel;
}

export default function ChannelCard({ channel }: Props) {
  const { display_name, thumbnail_url } = channel;
  const { setChannel } = useChannel();
  const router = useRouter();

  const goToChannel = () => {
    setChannel(channel);
    router.push(channel.display_name);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={goToChannel}
        className="size-20 relative rounded-full overflow-hidden hover:cursor-pointer"
      >
        <Image
          src={thumbnail_url}
          alt={display_name}
          layout="fill"
          objectFit="cover"
        />
      </button>

      <div>
        <h3 className="font-semibold">{display_name}</h3>
      </div>
    </div>
  );
}
