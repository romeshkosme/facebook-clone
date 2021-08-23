import { takeEvery, fork, put, all } from "redux-saga/effects";
import axios from "axios";
import Cookie from "js-cookie";

//Account Redux states
import { REGISTER_USER, VERIFY_USER } from "./actionTypes";
import { registerUserFailed } from './actions'
function* registerUser({ payload: { data, history } }) {
  try {
    const registerResponse = yield axios({
      method: "POST",
      url: "register",
      data,
    });
    if (registerResponse.data.success) {
      history.push('/verify-user')
      // yield put(registerUserSuccessful(registerResponse.data.result));
    } else {
      yield put(registerUserFailed(registerResponse.data.result));
    }
  } catch (error) {
    console.log(error);
    yield put(registerUserFailed(error.response.data));
    // if (error.response && error.response.data && error.response.data.error) {
    //     yield put(registerUserFailed(error.response.data.error));
    // } else {
    //     yield put(registerUserFailed("Something went Wrong!"));
    // }
  }
}

function* verifyUser({ payload: { data, history } }) {
  try {
    const verifyUserResponse = yield axios({
      method: "POST",
      url: "verify-user",
      data,
    });
    if (verifyUserResponse.data.success) {
      Cookie.set("user", verifyUserResponse.data.token);
      history.push('/dashboard')
      // yield put(registerUserSuccessful(registerResponse.data.result));
    } else {
      // yield put(registerUserFailed(registerResponse.data.error));
    }
  } catch (error) {
    console.log(error);
    yield put(registerUserFailed(error.response.data));
    // if (error.response && error.response.data && error.response.data.error) {
    //     yield put(registerUserFailed(error.response.data.error));
    // } else {
    //     yield put(registerUserFailed("Something went Wrong!"));
    // }
  }
}

export function* watchUserRegister() {
  yield takeEvery(REGISTER_USER, registerUser);
}

export function* watchVerifyUser() {
  yield takeEvery(VERIFY_USER, verifyUser);
}

function* registerSaga() {
  yield all([fork(watchUserRegister)]);
  yield all([fork(watchVerifyUser)]);
}

export default registerSaga;
