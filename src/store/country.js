import { create } from "zustand";
const initialState = "USA";
const useStore = create((set) => ({
    country: initialState,
    updateCountry: (newCountry) => set({ country: newCountry }),
  }));

export default useStore;