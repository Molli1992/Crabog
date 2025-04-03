import { create } from "zustand";

const toastStore = create((set) => {
  return {
    toast: {
      visible: false,
      title: "",
      description: "",
      error: false,
      info: false,
    },
    setToast: (toast) => set({ toast: toast }),
    clearToast: () =>
      set({
        toast: {
          visible: false,
          title: "",
          description: "",
          error: false,
          info: false,
        },
      }),
  };
});

export default toastStore;
