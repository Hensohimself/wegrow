/* Will run before dispatch to reducer in order to have an asyncronous call to the firebase-db */
export const createSeed = (seed) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // Async call to database
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;

        firestore.collection('seeds').add({
            ...seed,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName, 
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_SEED', seed: seed });
        }).catch((err) => {
            dispatch({ type: 'CREATE_SEED_ERROR', err });
        })
    }
};