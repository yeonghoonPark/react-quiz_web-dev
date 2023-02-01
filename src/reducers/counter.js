const currentState = {
  number: 0,
  diff: 1,
};

const SET_DIFF = "COUNTER/SET_DIFF";
const INCREASE = "COUNTER/INCREASE";
const DECREASE = "COUNTER/DECREASE";

export const setDiff = (diff) => ({
  type: SET_DIFF,
  diff,
});

export const increase = () => ({
  type: INCREASE,
});

export const decrease = () => ({
  type: DECREASE,
});

const counter = (state = currentState, action) => {
  switch (action.type) {
    case INCREASE:
      return { ...state, number: state.number + 1 };
    case DECREASE:
      return { ...state, number: state - state.diff };
    default:
      return state;
  }
};

export default counter;
