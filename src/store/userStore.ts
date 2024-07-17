import { create } from "zustand";
import { User } from "../utils/User";

const emptyUser = {
  firstName: "",
  lastName: "",
  email: "",
};

interface Session {
  accessToken: string;
  refreshToken: string;
}

interface Store {
  user: User;
  session: Session;
  signIn: (details: User) => void;
  signOut: () => void;
}

const userStore = create<Store>((set) => ({
  user: emptyUser,
  session: {
    accessToken: "",
    refreshToken: "",
  },
  signIn: (details: User) =>
    set(() => ({
      user: {
        ...details,
      },
      isLoggedIn: true,
    })),
  signOut: () => set({ user: emptyUser }),
}));

export default userStore;
