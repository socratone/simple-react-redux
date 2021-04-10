import { INCREMENT, DECREMENT } from './constants';

const initialState = {
  number: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { number: state.number + action.payload.number };
    case DECREMENT:
      return { number: state.number - action.payload.number };
    default:
      return state;
  }
};

export default reducer;
