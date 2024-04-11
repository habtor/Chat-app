import { create } from "zustand";

const useGroup = create((set) => ({
  selectedGroup: null,
  setSelectedGroup: (group) => set({ selectedGroup: group }),
  messages: [],
  setMessages: (messages) => set({ messages }),
  groups: [],
  setGroups: (groups) => set({ groups }),
}));

export default useGroup;
