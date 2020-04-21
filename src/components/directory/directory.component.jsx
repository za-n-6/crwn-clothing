import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import { connect } from "react-redux";

import "./directory.styles.scss";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {
      //this.state.sections.map(({title,imageUrl,id,size,linkUrl}) => (
      //<MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}/>

      // ))
      //we can write the above code using spreadOperators of Es6:

      sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
