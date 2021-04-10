import { GET_TEXT, GET_TEXT_SUCCESS, GET_TEXT_ERROR } from './constants';

export const getText = () => async (dispatch, getState) => {
  dispatch({ type: GET_TEXT })

  try {
    const res = await fetch('https://koreanjson.com/posts/1')
    const json = await res.json();
    console.log(json)
    dispatch({ type: GET_TEXT_SUCCESS, payload: json })
  } catch (error) {
    dispatch({ type: GET_TEXT_ERROR })
    console.log(error)
  }
}