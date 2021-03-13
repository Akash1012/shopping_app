import React from 'react';
import './collection-overview.style.scss'
import PreviewCollection from '../preview-collection/preview-collection.compoments'
import { connect } from 'react-redux';
import { selectCollectionForPreview } from '../../redux/shop/shop.selector'


const CollectionOverview = (props) => {
    const { collections } = props
    console.log("xxxx", props)
    return (
        <div className='collections-overview'>
            {
                collections.map(({ id, ...otherCollectionProps }) => {
                    return <PreviewCollection key={id} {...otherCollectionProps} />
                }
                )
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        collections: selectCollectionForPreview(state)
    }
}

export default connect(mapStateToProps)(CollectionOverview);
