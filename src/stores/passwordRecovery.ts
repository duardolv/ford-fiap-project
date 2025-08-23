import type { StateCreator } from "zustand";

export interface PasswordRecoveryStepSlice {
  passwordRecoveryStepData: {
    email: string;
    code: string;
    step: number;
  };
  updatePasswordRecoveryStepData: (
    data: Partial<PasswordRecoveryStepSlice["passwordRecoveryStepData"]>
  ) => void;
  resetPasswordRecoveryStep: () => void;
}

const initialValues = {
  email: "",
  code: "",
  step: 0,
};

export const createPasswordRecoveryStepSlice: StateCreator<
  PasswordRecoveryStepSlice,
  [],
  [],
  PasswordRecoveryStepSlice
> = (set) => ({
  passwordRecoveryStepData: initialValues,

  updatePasswordRecoveryStepData: (data) =>
    set((state) => ({
      ...state,
      passwordRecoveryStepData: { ...state.passwordRecoveryStepData, ...data },
    })),
  resetPasswordRecoveryStep: () =>
    set({ passwordRecoveryStepData: initialValues }),
});
