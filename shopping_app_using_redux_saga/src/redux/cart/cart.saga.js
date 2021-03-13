import { all, call, put, takeLatest } from 'redux-saga/effects'

import UserActionTypes from '../user/user.type';
import { clearCart } from './cart.action';


export function* clearCartOnSignOut() {
    yield put(clearCart())
}


export function* onSignOutScuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
}
export function* cartSagas() {
    yield (all([
        call(onSignOutScuccess)
    ]))
}