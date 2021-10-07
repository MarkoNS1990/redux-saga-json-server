import {
  ADD_USER,
  FETCH_USERS_BEGIN,
  FETCH_USERS_FAILURE,
  FETCH_USERS_SUCCESS,
  REMOVE_USER,
  UPDATE_USER,
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
    case REMOVE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload.id),
      };
    case UPDATE_USER:
      const userToUpdate = state.users.find(
        (user) => user.id === action.payload.id
      );

      const index = state.users.indexOf(userToUpdate);

      state.users.splice(index, 1, action.payload);

      return {
        ...state,
        users: [...state.users],
      };
    default:
      return state;
  }
};

export default usersReducer;
