import {
  ADD_USER,
  FETCH_USERS_BEGIN,
  FETCH_USERS_FAILURE,
  FETCH_USERS_SUCCESS,
} from "./usersActions";

const initState = {
  users: [],
  error: "",
  loading: false,
};

const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_USERS_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
};

export default usersReducer;
