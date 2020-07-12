import React from "react";
import SHOP_DATA from "./shopData.js";
import CollectionPreview from "../../Components/Collection-Preview/collection-preview.component";

class ShopPage extends React.Component {
  constructor() {
    super();
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionPreview }) => {
          return <CollectionPreview key={id} {...otherCollectionPreview} />;
        })}
      </div>
    );
  }
}

export default ShopPage;
