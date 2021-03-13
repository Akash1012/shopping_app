import React, { useContext } from 'react';
import './collection-overview.style.scss'
import PreviewCollection from '../preview-collection/preview-collection.compoments'
import { connect } from 'react-redux';
import { selectCollectionForPreview } from '../../redux/shop/shop.selector'
import CollectionsContext from '../../contexts/collections/collections.context';


const CollectionOverview = (props) => {
    // const { collections } = props
    // console.log("xxxx", props)
    const collectionsMap = useContext(CollectionsContext);
    const collections = Object.keys(collectionsMap).map(keys => collectionsMap[keys]);
    return (
        <div className='collections-overview'>
            <h1>Hello Akash</h1>
            {
                collections.map(({ id, ...otherCollectionProps }) => {
                    return <PreviewCollection key={id} {...otherCollectionProps} />
                }
                )
            }
        </div>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         collections: selectCollectionForPreview(state)
//     }
// }

// export default connect(mapStateToProps)(CollectionOverview);

export default CollectionOverview;
