const currentState = {
  correct_number: 0,
  time_taken: null,
  rank_list: [],
};

// const INCREASE_CORRECT_NUMBER = "RECORD/INCREASE_CORRECT_NUMBER";

// const TEST_TIME_ATTACK = "RECORD/TEST_TIME_ATTACK";

// const RESET_CORRECT_NUMBER = "RECORD/RESET_CORRECT_NUMBER";

const TEST_ARRAY = "RECORD/TEST_ARRAY";

export const increaseCorrectNumber = () => ({
  type: INCREASE_CORRECT_NUMBER,
});

// export const resetCorrectNumber = () => ({
//   type: RESET_CORRECT_NUMBER,
// });

// export const testTimeAttack = () => ({
//   type: TEST_TIME_ATTACK,
// });

export const testArray = () => ({
  type: TEST_ARRAY,
});

const record = (state = currentState, action) => {
  switch (action.type) {
    // case INCREASE_CORRECT_NUMBER:
    //   return { ...state, correct_number: state.correct_number + 1 };

    // case RESET_CORRECT_NUMBER:
    //   return { ...state, correct_number: (state.correct_number = 0) };

    case TEST_ARRAY:
      return { ...state, rank_list: state.rank_list };
    default:
      return state;
  }
};

export default record;
