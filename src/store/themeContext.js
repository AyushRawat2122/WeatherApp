import { create } from "zustand";
const initialState = "light";
const useTheme = create((set) => ({
  theme: initialState,
  setDark: () => set({ theme: "dark"}),
  setLight: () => set({ theme: "light"}),
}));
export default useTheme;
