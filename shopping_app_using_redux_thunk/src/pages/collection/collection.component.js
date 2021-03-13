import React from 'react';
import { connect } from 'react-redux'
import { selectCollection } from '../../redux/shop/shop.selector'
import CollectionItem from '../../compoments/collection-item/collection-item.component';
import './collection.style.scss';

const CollectionPage = (props) => {
    console.log("match.params.collectionI", props.match)

    const { collection } = props;
    const { title, items } = collection;
    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className="items">
                {
                    items.map(item => {
                        return <CollectionItem key={item.id} item={item} />
                    })
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state, url_props) => {
    return {
        collection: selectCollection(url_props.match.params.collectionId)(state)
    }
}


export default connect(mapStateToProps)(CollectionPage);