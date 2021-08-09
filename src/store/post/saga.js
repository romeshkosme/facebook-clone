import { takeEvery, fork, put, all, call } from "redux-saga/effects";
import axios from "axios";
import Cookie from "js-cookie";
import socketIOClient from "socket.io-client";

//Account Redux states
import { CREATE_POST, GET_ALL } from "./actionTypes";
import {getAllSuccess} from './actions'

function* createPost({ payload: data }) {
  try {
    const postResponse = yield axios({
      method: "POST",
      url: "post/create",
      headers: {authorization: `Bearer ${Cookie.get("user")}`},
      data,
    });
    if (postResponse.data.success) {
        //   S U C C E S S     F U N C T I O N
    } else {
    //   yield put(loginError(loginResponse.data.error));
    }
  } catch (error) {
      console.log(error)
    // yield put(loginError(error.response.data.error));
  }
}

function* getAll({ payload: data }) {
  try {
    const postResponse = yield axios({
      method: "GET",
      url: "post/get-all",
      headers: {authorization: `Bearer ${Cookie.get("user")}`}
    });
    if (postResponse.data.success) {
        //   S U C C E S S     F U N C T I O N
        yield put(getAllSuccess(postResponse.data.result));
    } else {
    //   yield put(loginError(loginResponse.data.error));
    }
  } catch (error) {
      console.log(error.response)
    // yield put(loginError(error.response.data.error));
  }
}

export function* watchCreatePost() {
  yield takeEvery(CREATE_POST, createPost);
}

export function* watchGetAll() {
  yield takeEvery(GET_ALL, getAll);
}


function* postSaga() {
  yield all([
    fork(watchCreatePost),
    fork(watchGetAll),
  ]);
}

export default postSaga;
