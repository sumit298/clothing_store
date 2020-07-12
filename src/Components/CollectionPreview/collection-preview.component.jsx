import React from "react";
import "./collection-preview.style.scss";
import CollectionItem from "../Collections-Items/collections-items.component";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>

      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...otherCollectionItemProps }) => (
            <CollectionItem key={id} {...otherCollectionItemProps} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
