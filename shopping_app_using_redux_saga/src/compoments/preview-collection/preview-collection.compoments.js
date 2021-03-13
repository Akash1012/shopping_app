import React from 'react'
import './preview-collection.style.scss';
import CollectionItem from '../collection-item/collection-item.component'

const PreviewCollection = (props) => {
    const { title, items } = props
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title}</h1>
            <div className='preview'>
                {
                    items.filter((item, index) => index < 3).map((item) => (
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default PreviewCollection;