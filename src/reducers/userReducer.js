const initialState = {
  fetching: false,
  fetched: false,
  users: [],
  RANDOMusers: [],
  error: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS_PENDING": {
      return { ...state, fetching: true };
    }
    case "FETCH_USERS_REJECTED": {
      return { ...state, fetching: false, error: action.payload };
    }
    case "FETCH_USERS_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        users: action.payload
      };
    }
    case "FETCH_RANDOM_USERS_PENDING": {
      return { ...state, fetching: true };
    }
    case "FETCH_RANDOM_USERS_REJECTED": {
      return { ...state, fetching: false, error: action.payload };
    }
    case "FETCH_RANDOM_USERS_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        RANDOMusers: action.payload
      };
    }
    default:
      return state;
  }
};

export default userReducer;
