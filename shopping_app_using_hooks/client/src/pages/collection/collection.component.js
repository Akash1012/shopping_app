import React, { useContext } from 'react';
// import { connect } from 'react-redux'
import { selectCollection } from '../../redux/shop/shop.selector'
import CollectionItem from '../../compoments/collection-item/collection-item.component';
import './collection.style.scss';
import CollectionsContext from '../../contexts/collections/collections.context';

const CollectionPage = (props) => {
    const collections = useContext(CollectionsContext);
    const collection = collections[props.match.params.collectionId];

    console.log("Updated data", collections);
    console.log("props.match.params.collectionId", props.match.params.collectionId);
    const { title, items } = collection;

    // const { collection } = props;

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

// const mapStateToProps = (state, url_props) => {
//     return {
//         collection: selectCollection(url_props.match.params.collectionId)(state)
//     }
// }


// export default connect(mapStateToProps)(CollectionPage);
export default CollectionPage;