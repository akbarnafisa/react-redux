const initState = {

}
const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT_SUCCESS':
      console.log('created', action.project);
      return state;
    case 'CREATE_PROJECT_ERROR':
      alert('create project error', action.err);
      return state;
    default:
      return state;
  }
  return state
}

export default projectReducer;