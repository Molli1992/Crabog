import { create } from "zustand";

const useLanguageStore = create((set) => ({
  language: "spanish",
  setLanguage: (newLanguage) =>
    set({
      language: newLanguage,
    }),
}));

export default useLanguageStore;
