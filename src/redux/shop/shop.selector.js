import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])

  //We are saying through above code that we want all the keys and then we want to map over those keys
  //So that we can get the value of our collection object at that Key which will give us array of the object that
  //we are trying to get
);

//SelectCollection is a function that returns a function ,we pass the  function that comes out of this function the state that wires everything together.
export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
  );

//CollectionUrlParam give us the string value that we get from the URL property on our page.
