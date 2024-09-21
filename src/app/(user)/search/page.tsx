import channelService from "@/api/services/channel-service";
import ChannelCard from "@/components/common/channel-card";

const getData = async (query: string) => {
  try {
    const { data } = await channelService.searchChannels(query);

    return {
      success: true,
      data,
    };
  } catch (e) {
    console.log(e);
    return {
      success: false,
    };
  }
};

interface Props {
  searchParams: {
    q: string;
  };
}

export default async function Search({ searchParams }: Props) {
  const { data } = await getData(searchParams.q);

  if (!data) {
    return <p>sin cananles</p>;
  }

  const { data: channels } = data;

  return (
    <div className="container">
      <h2 className="font-semibold">Canales</h2>

      <div className="flex flex-col gap-3">
        {channels?.map((channel, index) => (
          <ChannelCard key={index} channel={channel} />
        ))}
      </div>
    </div>
  );
}
