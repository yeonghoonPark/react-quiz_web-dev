const currentState = {
  correct_number: 0,
};

const INCREASE_CORRECT_NUMBER = "RECORD/INCREASE_CORRECT_NUMBER";

export const increaseCorrectNumber = () => ({
  type: INCREASE_CORRECT_NUMBER,
});

const record = (state = currentState, action) => {
  switch (action.type) {
    case INCREASE_CORRECT_NUMBER:
      return { ...state, correct_number: state.correct_number + 1 };

    default:
      return state;
  }
};

export default record;
