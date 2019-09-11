const ADD = "ADD";

export const studentsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      const newState = [...state, action.students]
      return newState;
      // eslint-disable-next-line
      break;
    default:
      return state;
  }
};
