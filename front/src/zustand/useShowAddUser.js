import { create } from "zustand";

const useAddUser = create((set) => ({
  showAddUser: false,
  setShowAddUser: (showAddUser) => set({ showAddUser }),
}));

export default useAddUser;
