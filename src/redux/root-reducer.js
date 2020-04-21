import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //This is telling redux-persist that I want to use local storage.

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

//This is a JSON object.
const persistConfig = {
  key: "root", //key tells from which point we are gonna start storing everything and we want to start from root.
  storage,
  whitelist: ["cart"], // this property consist of any of the string names of the reducer that we want to store.
};
//Our user is being handled by firebase so we dont need to persist it.
// We only want to persist our cart,so we are only going to pass in our cart.

//export default combineReducers({
//user: userReducer,
//cart: cartReducer,
//});

//wrapping the above code in rootReducer as:

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
