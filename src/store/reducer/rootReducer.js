import authReducer from './authReducer';
import seedReducer from './seedReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth: authReducer,
    seed: seedReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;