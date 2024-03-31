import { create } from "zustand";

const useAddGroup = create((set) => ({
  showAddGroup: false,
  setShowAddGroup: (showAddGroup) => set({ showAddGroup }),
}));

export default useAddGroup;
