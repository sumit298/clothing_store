import React, { useState } from "react";
import "./shopPage.styles.scss";
import SHOP_DATA from "./ShopPageData.js";
import CollectionPreview from "../../Components/CollectionPreview/collection-preview.component";

const ShopPage = () => {
  // eslint-disable-next-line
  const [shop, setShop] = useState({
    collections: SHOP_DATA,
  });
  const { collections } = shop;
  return (
    <div>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
      
    </div>
  );
};

export default ShopPage;
