import { create } from "zustand";

const useFilter = create((set) => ({
  selectedFilter: "Contacts",
  setSelectedFilter: (selectedFilter) => set({ selectedFilter }),
}));

export default useFilter;
