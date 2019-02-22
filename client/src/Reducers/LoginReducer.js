const initialState = {
  AdminData: [],
  DeveloperData: [],
  ProjectList: [],
  TaskList: []
};
const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "SENDDATA": {
      newState.DeveloperData = action.payload;
      break;
    }
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

    default:
  }
  return newState;
};
export default reducer;
