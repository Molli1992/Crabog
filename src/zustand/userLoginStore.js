import { create } from "zustand";

const userLoginStore = create((set) => ({
  user: false,
  setUser: (newUser) =>
    set({
      user: newUser,
    }),
}));

export default userLoginStore;
