import { GET_TEXT, GET_TEXT_SUCCESS, GET_TEXT_ERROR } from './constants';

const initialState = {
  text: 'TEXT를 불러오세요.',
  isFetching: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TEXT:
      return {
        text: state.text,
        isFetching: true
      }
    case GET_TEXT_SUCCESS:
      return {
        text: action.payload.title,
        isFetching: false
      }
    case GET_TEXT_ERROR:
      return {
        text: '에러가 발생했습니다.',
        isFetching: false
      }
    default:
      return state;
  }
};

export default reducer;
