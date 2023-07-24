import { create } from "zustand";

const useStore = create((set) => ({
  activeSection: null,
  setActive: () =>
    set((state: any, active: string) => ({
      activeSection: active,
    })),
}));

export { useStore };
