import { TEST_ACTION } from './defaultActionTypes';

const initialState = {
  default: 'default'
};

const defaultReducer = (state = initialState, action) => {
  let newState;

  switch (action.type) {
    case TEST_ACTION:
      newState = {
        ...state,
        default: action.value
      };

      return newState;
    default:
      return state;
  }
};

export default defaultReducer;
