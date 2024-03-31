import { create } from "zustand";

const useGroupInfo = create((set) => ({
  showGroupInfo: false,
  setShowGroupInfo: (showGroupInfo) => set({ showGroupInfo }),
}));

export default useGroupInfo;
