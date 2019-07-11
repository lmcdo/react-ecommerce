import React, { Component } from "react";
import CollectionPreview from "../../components/preview-collection/CollectionPreview";

import SHOP_DATA from "../../data/shop.data";

class ShopPage extends Component {
  state = {
    collections: SHOP_DATA
  };
  render() {
    return (
      <div className="shop-page">
        {this.state.collections.map(({ id, ...otherCollectionProps }) => {
          return <CollectionPreview key={id} {...otherCollectionProps} />;
        })}
      </div>
    );
  }
}

export default ShopPage;
