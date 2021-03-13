import React, { useEffect } from 'react'
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionOverviewContainer from '../../compoments/collection-overview/collection-overview.container';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.action';
import { fetchCollectionsStart } from '../../redux/shop/shop.action';

import CollectionPageContainer from '../../pages/collection/collection.container';

const ShopPage = (props) => {
    useEffect(() => {
        const { fetchCollectionsStart } = props;
        fetchCollectionsStart();
    }, [fetchCollectionsStart]);

    // componentDidMount() {
    //     // const { fetchCollectionsStartAsync } = this.props;
    //     const { fetchCollectionsStart } = this.props;
    //     fetchCollectionsStart();
    // }

    const { match } = props;
    console.log("Mathc", match.path);
    return (
        <div className='shop-page'>
            {/* Here IsLoading value go to the withSpinner HOC */}
            <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
    }
}


export default connect(null, mapDispatchToProps)(ShopPage);