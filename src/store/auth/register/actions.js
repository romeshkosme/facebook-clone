import { ON_REGISTER_INPUT_CHANGE, REGISTER_USER } from "./actionTypes";

export const onInputChange = (field, value) => {
  return {
    type: ON_REGISTER_INPUT_CHANGE,
    payload: {
      field,
      value,
    },
  };
};

export const registerUser = (data) => {
  return {
    type: REGISTER_USER,
    payload: data,
  };
};
