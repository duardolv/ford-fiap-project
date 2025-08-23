import type { StateCreator } from "zustand";

export interface StepSlice {
  step: number;
  stepData: {
    email: string;
    password: string;
  };
  updateStep: () => void;
  updateStepData: (email: StepSlice["stepData"]) => void;
  resetStep: () => void;
}

const initialValues = {
  email: "",
  password: "",
};

export const createStepSlice: StateCreator<StepSlice, [], [], StepSlice> = (
  set
) => ({
  step: 0,
  stepData: initialValues,
  updateStep: () => set((state) => ({ step: state.step + 1 })),
  updateStepData: (newData) =>
    set((state) => ({ stepData: { ...state.stepData, ...newData } })),
  resetStep: () => set({ step: 0, stepData: initialValues }),
});
