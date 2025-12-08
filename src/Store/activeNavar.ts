import { create } from "zustand";

type TactiveMain = {
  activeNavar: "home" | "char" | "packages" | "work" | "parse";
  setActiveNavar: (
    value: "home" | "char" | "packages" | "work" | "parse"
  ) => void;
};

export const useActiveNavar = create<TactiveMain>()((set) => ({
  activeNavar: "home",
  setActiveNavar: (value) => set(() => ({ activeNavar: value })),
}));
