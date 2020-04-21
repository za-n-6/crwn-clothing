import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component";

import { selectCollection } from "../../redux/shop/shop.selector";

import "./collection.styles.scss";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page ">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
//WE can also pass a Second optional parameter in our MapStateToProps along side State being the first parameter.

//OwnProps gives us all of the props that we are getting on our collection page.
//Including the match object that we get from our ROUTE component that is passing our Collection on our main SHOP page component.
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});
//SelectCollection is a function that returns a function ,we pass the  function that comes out of this function the state that wires everything together.

export default connect(mapStateToProps)(CollectionPage);
