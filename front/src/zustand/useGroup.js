import { create } from "zustand";

const useGroup = create((set) => ({
  selectedGroup: null,
  setSelectedGroup: (group) => set({ selectedGroup: group }),
}));

export default useGroup;
