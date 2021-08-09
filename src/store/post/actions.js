import { CREATE_POST, ON_LOGIN_INPUT_CHANGE, GET_ALL, GET_ALL_SUCCESS } from "./actionTypes";

export const onInputChange = (field, value) => {
  return {
    type: ON_LOGIN_INPUT_CHANGE,
    payload: {
      field,
      value,
    },
  };
};

export const createPost = (data) => {
  return {
    type: CREATE_POST,
    payload: data,
  };
};

export const getAll = () => {
  return {
    type: GET_ALL
  }
}

export const getAllSuccess = (data) => {
  return {
    type: GET_ALL_SUCCESS,
    payload: data
  }
}