import { create } from "zustand";

const useGroupMessagesStore = create((set) => ({
  messages: {}, // Object to store messages for each group
  addMessage: (groupId, message) =>
    set((state) => ({
      messages: {
        ...state.messages,
        [groupId]: [...(state.messages[groupId] || []), message],
      },
    })),
}));

export default useGroupMessagesStore;
