export const createProject = (project, ownProps) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid

    firestore.collection('projects').add({
      ...project,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date()
    }).then((project) => {
      ownProps.history.push(`/`);
      dispatch({ type: 'CREATE_PROJECT_SUCCESS', project });
    }).catch(err => {
      dispatch({ type: 'CREATE_PROJECT_ERROR', err });
    });

  }
};