import { create } from "zustand";

const useLanguageStore = create((set, get) => ({
  language: "spanish",
  setLanguage: (newLanguage) =>
    set({
      language: newLanguage,
    }),
}));

export default useLanguageStore;
