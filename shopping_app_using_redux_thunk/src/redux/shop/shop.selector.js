import { createSelector } from 'reselect';

const selectShop = (state) => state.shop

console.log("selectShop", selectShop.Collections);

export const selectCollections = createSelector(
    [selectShop],
    shopData => {
        return shopData.Collections
    }
)

// Convert Object into an array because collectionOverView Comp. excepting an array 
export const selectCollectionForPreview = createSelector(
    [selectCollections],
    collections => {
        return collections ? Object.keys(collections).map(key => collections[key]) : []
    }
)

export const selectCollection = collectionUrlParam => {
    return createSelector(
        [selectCollections],
        collections => {
            return collections ? collections[collectionUrlParam] : null
        }
    )
}

export const selectIsCollectionsFetching = createSelector(
    [selectShop],
    shop => {
        return shop.isFetching
    }
)


export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.Collections
);

// !! -> It convert any value to true or false


// const testObject = {a:1,b:2}
// Object.keys(testObject)  ["a","b"]