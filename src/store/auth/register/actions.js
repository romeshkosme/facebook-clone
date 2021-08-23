import {
  ON_REGISTER_INPUT_CHANGE,
  REGISTER_USER,
  VERIFY_USER,
  REGISTER_USER_FAILED,
} from "./actionTypes";

export const onInputChange = (field, value) => {
  return {
    type: ON_REGISTER_INPUT_CHANGE,
    payload: {
      field,
      value,
    },
  };
};

export const registerUser = (data, history) => {
  return {
    type: REGISTER_USER,
    payload: { data, history },
  };
};

export const registerUserFailed = (data) => {
  return {
    type: REGISTER_USER_FAILED,
    payload: data,
  }
}

export const verifyUser = (data, history) => {
  return {
    type: VERIFY_USER,
    payload: { data, history },
  };
};