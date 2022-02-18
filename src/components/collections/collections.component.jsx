import React from "react";
import './collections.styles.scss'

import CollectionItem from "../collection-item/collection-item.component";

const Collections = ({ title, items }) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}<span className="view-more">View More</span></h1>
            <div className="preview">
                {items
                    .filter((item, index) => index < 4)
                    .map(({ id, ...otherCollectionItemProps }) => (
                        <CollectionItem key={id}{...otherCollectionItemProps} />
                    ))}
            </div>
        </div>
    )
}

export default Collections;