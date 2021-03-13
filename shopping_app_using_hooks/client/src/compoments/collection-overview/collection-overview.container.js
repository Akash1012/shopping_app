import { connect } from 'react-redux';
import { selectIsCollectionsFetching } from '../../redux/shop/shop.selector';
import withSpinner from '../with-spinner/with-spinner.component';
import CollectionOverview from './collection-overview.component';
import { compose } from 'redux';

const mapStateToProps = (state) => {
    return {
        isLoading: selectIsCollectionsFetching(state)
    }
}

//isLoading goes to the WithSpinner
const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    withSpinner
)(CollectionOverview);

// Other Ways
// const CollectionOverviewContainer = connect(mapStateToProps)(withSpinner(CollectionOverview));


export default CollectionOverviewContainer;