import { takeEvery, fork, put, all, call } from 'redux-saga/effects';
import axios from 'axios';

//Account Redux states
import { REGISTER_USER } from './actionTypes';


function* registerUser({ payload: data }) {
    try {
    	const registerResponse = yield axios({
            method: "POST",
            url: "register",
            data
        });
    	if (registerResponse.data.success) {
            console.log("registerResponse :: ", registerResponse)
            // yield put(registerUserSuccessful(registerResponse.data.result));
    	} else {
            // yield put(registerUserFailed(registerResponse.data.error));
        }

    } catch (error) {
    	console.log(error);
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

function* registerSaga() {
    yield all([
        fork(watchUserRegister)
    ]);
}

export default registerSaga;