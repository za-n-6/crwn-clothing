import { all, call } from "redux-saga/effects";

import { shopSagas } from "./shop/shop.saga";

import { userSagas } from "./user/user.sagas";

import { cartSagas } from "./cart/cart.sagas";

export default function* rootSaga() {
  yield all([call(shopSagas), call(userSagas), call(cartSagas)]);
}

//'all' gets the array of generator sagas that we invoke.
// 'all' allows us to actually call any number of sagas inside if this array and initialise them all on different tasks streams.
