import { connect } from 'react-redux';
import { compose } from 'redux';
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selector';
import WithSpinner from '../../compoments/with-spinner/with-spinner.component';
import CollectionPage from './collection.component';
// import { createStructuredSelector } from 'reselect'

const mapStateToProps = (state) => {
    return {
        isLoading: !selectIsCollectionsLoaded(state)
    }
}

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

export default CollectionPageContainer;