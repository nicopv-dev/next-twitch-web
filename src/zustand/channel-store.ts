import Channel from "@/types/channel";
import { create } from "zustand";

interface State {
  channel: Channel | null;
}

interface Actions {
  setChannel: (channel: Channel) => void;
}

const channelStore = create<State & Actions>((set) => ({
  channel: null,
  setChannel: (channel) => set({ channel }),
}));

export const useChannel = channelStore;
