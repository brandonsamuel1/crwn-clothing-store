import React from "react";
import SHOP_DATA from "./shop.data";

import Collections from "../../components/collections/collections.component";

class ShopPage extends React.Component {
    constructor() {
        super();

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const { collections } = this.state;
        return (
            <div className="shop-page">
                {collections.map(({ id, ...otherCollectionProps }) => (
                    <Collections key={id} {...otherCollectionProps} />
                ))}
            </div>
        )
    }
}

export default ShopPage;