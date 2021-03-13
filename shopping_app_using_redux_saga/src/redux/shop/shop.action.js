import ShopActionTypes from './shop.types';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => {
    console.log("Start");
    return {
        type: ShopActionTypes.FETCH_COLLECTIONS_START
    }
};

export const fetchCollectionsSuccess = (collectionMap) => {
    return {
        type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
        payload: collectionMap
    }
}

export const fetchCollectionsFailure = (errorMessage) => {
    return {
        type: ShopActionTypes.fetchCollectionsFailure,
        payload: errorMessage
    }
}

// We are dispatching multiple dispatch with the help of redux thunk
export const fetchCollectionsStartAsync = () => {
    console.log("Calling meee ");
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        console.log("collectionRef", collectionRef);
        dispatch(fetchCollectionsStart());
        collectionRef.get().then
            (snapshot => {
                const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
                console.log("collectionsMap", collectionsMap)
                dispatch(fetchCollectionsSuccess(collectionsMap))
            }).catch(error => dispatch(fetchCollectionsFailure(error.message)))
    }
}


// export const fetchCollectionsStartAsync = () => {
//     return dispatch => {
//         const collectionRef = firestore.collection('collections');
//         dispatch(fetchCollectionsStart())
//         collectionRef.onSnapshot(async snapshot => {
//             const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
//             console.log("collectionsMap", collectionsMap)
//             dispatch(fetchCollectionsSuccess(collectionsMap))
//         });
//     }
// }