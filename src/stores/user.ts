import type { StateCreator } from 'zustand';

export interface IUser {
  userName: string;
  email: string;
  isAuth: boolean;
}

const userInitialState: IUser = {
  userName: '',
  email: '',
  isAuth: false,
};

export interface UserSlice {
  userData: IUser;
  saveUserData: (props: IUser) => void;
  resetUserData: () => void;
}

export const createUserSlice: StateCreator<UserSlice, [], [], UserSlice> = (set) => ({
  userData: userInitialState,
  saveUserData: (newUserData: IUser) => set({ userData: newUserData }),
  resetUserData: () => set({ userData: userInitialState }),
});
