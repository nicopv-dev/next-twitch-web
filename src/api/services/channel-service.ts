import api from "@/lib/axios";
import Channel from "@/types/channel";

class ChannelService {
  searchChannels = async (query: string) =>
    await api.get<{
      data: Channel[];
    }>("/search/channels", {
      params: {
        query,
      },
    });

  getChannel = async (channel: string) =>
    await api.get<Channel>(`/channels/${channel}`);
}

export default new ChannelService();
