import { GET_TEXT, GET_TEXT_SUCCESS, GET_TEXT_ERROR } from './constants';

/**
 * 일반적으로 actions에는 action이 정의된 객체를 리턴하는 함수가 와야 하지만
 * thunk를 사용하는 경우 아래처럼 dispatch와 getState를 파라미터로 하는
 * 함수를 리턴할 수 있다.
 * 이 함수 안에서 async나 Promise를 사용하여 비동기 처리가 가능하다.
 */

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