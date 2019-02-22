const initialState = {
  ListDeveloper: [],
  DeveloperData: [],
  ProjectList: [],
  TaskList: []
};
const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "DEVELOPERSENDDATA": {
      newState.DeveloperData = action.payload;
      break;
    }

    case "GETLISTPROJECT": {
      newState.ProjectList = action.payload;
      break;
    }
    case "GETLISTTASK": {
      newState.TaskList = action.payload;
      break;
    }
    case "GETLISTDEVELOPER": {
      newState.ListDeveloper = action.payload;
      break;
    }

    default:
  }
  return newState;
};
export default reducer;
