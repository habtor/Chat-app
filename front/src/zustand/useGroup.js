import { create } from "zustand";

const useGroup = create((set) => ({
  selectedGroup: null,
  setSelectedGroup: (group) => set({ selectedGroup: group }),
  messages: [],
  setMessages: (messages) => set({ messages }),
}));

export default useGroup;
