import { takeLatest, call, put, all } from "redux-saga/effects";
import ShopActionTypes from "./shop.types";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./shop.actions";

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

//   collectionRef
//     .get()
//     .then((snapshot) => {
//       const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
//       dispatch(fetchCollectionsSuccess(collectionsMap));
//     })
//     .catch((error) => dispatch(fetchCollectionsFailure(error.message)));

// call takes some function as its first argument, and the rest of the arguments will be the parameters that are going to be the one that we pass into the first parameter which is a function.
// call is the effect inside the generator function that invokes the method, but we want to yield this in case this call takes longer than it is expected.

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

//second parameter of tha above generator function is another generator function that will run in
// response to the first parameter of takeEvery listener.

//takeEvery creates a non-blocking call in order to not stop our application
// to continue running either other SAGAS or whatever the user wants to do.

//Sagas donot use dispatch to fire actions instead the use another
// keyword 'put'. PUT is the saga effect for creating actions.
//It works exactly like dispatch ,  the only difference is that we have to yield it.

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
