/* Will run before dispatch to reducer in order to have an asyncronous call to the firebase-db */
export const createSeed = (seed) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // Async call to database
        const firestore = getFirestore();
        firestore.collection('seeds').add({
            ...seed,
            authorUserName: 'HensO',
            authorId: 1234,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_SEED', seed: seed });
        }).catch((err) => {
            dispatch({ type: 'CREATE_SEED_ERROR', err });
        })
    }
};