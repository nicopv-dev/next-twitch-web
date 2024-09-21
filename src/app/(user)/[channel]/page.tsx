import ChannelDetails from "@/components/channel/channel-details";
import ChatList from "@/components/chat/chat-list";

interface Props {
  params: {
    channel: string;
  };
}

export default function Channel({ params }: Props) {
  return (
    <div className="flex gap-4 container w-full">
      {/* content */}
      <div className="grow w-full flex flex-col gap-4">
        {/* gameplay*/}
        <iframe
          src={`https://player.twitch.tv/?channel=${params.channel}&parent=localhost`}
          height="480"
          width="100%"
          allowFullScreen={true}
        ></iframe>

        {/* game details info */}
        <ChannelDetails />
      </div>

      {/* chat */}
      <div className="w-1/3">
        <ChatList />
      </div>
    </div>
  );
}
