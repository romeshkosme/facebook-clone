import { ON_LOGIN_INPUT_CHANGE, LOGIN_USER, LOGOUT_USER, LOGIN_ERROR } from "./actionTypes";

export const onInputChange = (field, value) => {
  return {
    type: ON_LOGIN_INPUT_CHANGE,
    payload: {
      field,
      value,
    },
  };
};

export const loginUser = (data, history) => {
  return {
    type: LOGIN_USER,
    payload: { data, history },
  };
};

export const logoutUser = (history) => {
  return {
    type: LOGOUT_USER,
    payload: history
  };
};

export const loginError = (data) => {
  return {
    type: LOGIN_ERROR,
    payload: data,
  };
};