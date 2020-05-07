import firebase from 'firebase'

export const signIn = (creds) => {
  return (dispatch, getState) => {
    firebase.auth().signInWithEmailAndPassword(
      creds.email,
      creds.password
    ).then(() => {
      dispatch({ type: 'LOGIN_SUCCESS' })
    }).catch((err) => {
      dispatch({ type: 'LOGIN_ERROR', err })
    })
  }
}

export const signOut = () => {
  return (dispatch, getState) => {
    firebase.auth().signOut().then(() => {
      dispatch({ type: 'LOGOUT_SUCCESS' });
    });
  }
}
