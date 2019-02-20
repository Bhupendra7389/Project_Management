const initialState = {
  data: [],
  ProjectList: []
};
const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "SENDDATA": {
      console.log(action.payload);
      newState.data = action.payload;
      break;
    }
    case "GETLISTPROJECT": {
      newState.ProjectList = action.payload;
      break;
    }

    default:
  }
  return newState;
};
export default reducer;
