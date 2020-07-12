import React, { useState } from "react";
import MenuItem from "../Menu-Item/menu-item.component";
import "./directory.style.scss";

const DirectoryHook = () => {
  // eslint-disable-next-line
  const [items, showItems] = useState({
    sections: [
      {
        title: "hats",
        imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
        id: 1,
        linkUrl: "shop/hats",
      },
      {
        title: "jackets",
        imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
        id: 2,
        linkUrl: "shop/jackets",
      },
      {
        title: "sneakers",
        imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
        id: 3,
        linkUrl: "shop/sneakers",
      },
      {
        title: "womens",
        imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
        size: "large",
        id: 4,
        linkUrl: "shop/womens",
      },
      {
        title: "mens",
        imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
        size: "large",
        id: 5,
        linkUrl: "shop/mens",
      },
    ],
  });
  return (
    <div className="directory-menu">
      {items.sections.map(({ id, imageUrl, title, size, linkUrl }) => {
        return (
          <MenuItem
            key={id}
            imageUrl={imageUrl}
            size={size}
            title={title}
            linkUrl={linkUrl}
          />
        );
      })}
    </div>
  );
};

export default DirectoryHook;
