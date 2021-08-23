import { takeEvery, fork, put, all } from "redux-saga/effects";
import axios from "axios";
import Cookie from "js-cookie";

//Account Redux states
import { LOGIN_USER, LOGOUT_USER } from "./actionTypes";
import { loginError } from "./actions"

function* loginUser({ payload: { data, history } }) {
  try {
    const loginResponse = yield axios({
      method: "POST",
      url: "login",
      data,
    });
    if (loginResponse.data.success) {
      Cookie.set("user", loginResponse.data.token);
      history.push('/dashboard')
    } else {
      yield put(loginError(loginResponse.data.error));
    }
  } catch (error) {
    yield put(loginError(error.response.data.error));
  }
}

function* logoutUser({payload: history}) {
  try {
    Cookie.remove("user")
    history.push('/login')
  } catch (error) {
    console.log(error);
  }
}

export function* watchUserLogin() {
  yield takeEvery(LOGIN_USER, loginUser);
}

export function* watchUserLogout() {
  yield takeEvery(LOGOUT_USER, logoutUser);
}

function* loginSaga() {
  yield all([
    fork(watchUserLogin),
    fork(watchUserLogout),
  ]);
}

export default loginSaga;
