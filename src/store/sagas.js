import { all } from 'redux-saga/effects';

import RegisterSaga from './auth/register/saga';
import LoginSaga from './auth/login/saga';
import PostSaga from './post/saga';

export default function* rootSaga() {
    yield all([
        //public
        // AuthSaga(),
        RegisterSaga(),
        LoginSaga(),
        PostSaga(),
    ])
}