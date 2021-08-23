import { ON_LOGIN_INPUT_CHANGE, GET_ALL_SUCCESS } from "./actionTypes";

const initialState = {
  postContent: null,
  message: null,
  loading: false,
  feeds: [],
};

const post = (state = initialState, action) => {
  switch (action.type) {
    case ON_LOGIN_INPUT_CHANGE:
      return { ...state, [action.payload.field]: action.payload.value };
    case GET_ALL_SUCCESS:
      return { ...state, feeds: [...action.payload] };
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default post;
