import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDmT4Cwgu2-aUtkIoMhfDvHp58k5IaEIG8",
    authDomain: "crwn-dbs-b6707.firebaseapp.com",
    databaseURL: "https://crwn-dbs-b6707.firebaseio.com",
    projectId: "crwn-dbs-b6707",
    storageBucket: "crwn-dbs-b6707.appspot.com",
    messagingSenderId: "203980227160",
    appId: "1:203980227160:web:e477f521bf382d911ac02d",
    measurementId: "G-6XG6BFXHS9"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) {
        return;
    }
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
        console.log("Snap Exit");
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName: displayName,
                email: email,
                createdAt: createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('Error Creating user', error.message);
        }
    }
    return userRef;
}

// To send data to the firebase

// export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
//     const collectionRef = firestore.collection(collectionKey);

//     const batch = firestore.batch();
//     objectsToAdd.forEach(obj => {
//         const newDocRef = collectionRef.doc(); // Create a new id of this items
//         batch.set(newDocRef, obj);
//         console.log("newDocRef", newDocRef)
//     });
//     return await batch.commit()
// }


export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollections = collections.docs.map(doc => { // It return a array 
        const { title, items } = doc.data();
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title: title,
            items: items
        }
    })
    console.log("AAAAAAAA-----", transformedCollections);
    return transformedCollections.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection
        return accumulator;
    }, {})
}

export const getCurrentUser = () => {
    return new Promise((reslove, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            reslove(userAuth);
        }, reject)
    })
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// firestore.collection('users').doc('93QwDhxBujBnIyBkupQb')
// var a = firestore.doc('/users/93QwDhxBujBnIyBkupQb/cartItems/FK1sHjzJnrbROWyaUKrO')
// var b = firestore.collection('/users/93QwDhxBujBnIyBkupQb/cartItems')


// Google Auth
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: 'select_account'
})
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;



