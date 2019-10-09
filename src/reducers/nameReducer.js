function nameReducer(state = { name: "", nameWithFlex: "s" }, action) {
  switch (action.type) {
    case "UPDATE_NAME":
      return {
        ...state,
        name: action.payload
      };
    case "UPDATE_NAME_WITH_FLEX":
      return {
        ...state,
        nameWithFlex: action.payload
      };
    default:
      return state;
  }
}

export default nameReducer;
