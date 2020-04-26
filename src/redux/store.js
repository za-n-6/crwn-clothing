import { createStore, applyMiddleware } from "redux";

import logger from "redux-logger";
import { persistStore } from "redux-persist";

import rootReducer from "./root-reducer";

const middlewares = [];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

//const store = createStore(rootReducer, applyMiddleware(...middlewares));

//we are going to export our store out.
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

//Also going to export a persistor which is going to be the persisted version of our store.
export const persistor = persistStore(store);

export default { store, persistor };
