import { create } from "zustand";

import { createStepSlice, type StepSlice } from "./onBoarding";
import { createUserSlice, type UserSlice } from "./user";
import {
  createPasswordRecoveryStepSlice,
  type PasswordRecoveryStepSlice,
} from "./passwordRecovery";

type Slices = StepSlice & UserSlice & PasswordRecoveryStepSlice;

const useStore = create<Slices>()((...a) => ({
  ...createStepSlice(...a),
  ...createPasswordRecoveryStepSlice(...a),
  ...createUserSlice(...a),
}));

export default useStore;
