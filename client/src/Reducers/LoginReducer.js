const initialState = {
  data: [],
  ProjectList: [],
  TaskList: []
};
const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "SENDDATA": {
      console.log(action.payload);
      newState.data = action.payload;
      break;
    }
    case "DEVELOPERSENDDATA": {
      console.log(action.payload);
      newState.data = action.payload;
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
