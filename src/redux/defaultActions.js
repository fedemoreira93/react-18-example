import { TEST_ACTION } from './defaultActionTypes';

export const doModifyDefault = (value) => {
  return {
    type: TEST_ACTION,
    value: value
  };
};
