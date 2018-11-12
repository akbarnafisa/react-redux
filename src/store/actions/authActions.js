export const signIn = (credentials, ownProps) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    console.log(credentials)
    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then((user) => {
      // ownProps.history.push(`/`);
      dispatch({ type: 'LOGIN_SUCCESS', user })
    }).catch((err) => {
      dispatch({ type: 'LOGIN_ERROR', err })
    })
  }
}

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase.auth().signOut().then(() => {
      dispatch({ type: 'SIGNOUT_SUCCESS' })
    })
  }
}

export const signUp = (newUser) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase.auth().createUserWithEmailAndPassword(
      newUser.email,
      newUser.password,
    ).then((res) => {
      console.log('wew', res)
      return firestore.collection('users').doc(res.user.uid).set({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        initials: newUser.firstName[0] + newUser.lastName[0]
      })
    }).then(() => {
      dispatch({ type: 'SIGNUP_SUCCESS' })
    }).catch((err) => {
      dispatch({ type: 'SIGNUP_ERROR', err })
    })
  }
}