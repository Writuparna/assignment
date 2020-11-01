import {
  USER_FETCH_REQUEST,
  USER_FETCH_SUCCESS,
  USER_FETCH_FAIL,
  SET_VALID_USER,
  USER_LOGOUT,
} from "./../action/users";

const initialState = {
  isFetching: false,
  userData: [],
  loggedUser: JSON.parse(localStorage.getItem("userInfo")),
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_FETCH_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case USER_FETCH_SUCCESS:
      return {
        ...state,
        userData: action.payload,
        isFetching: false,
      };
    case USER_FETCH_FAIL:
      return {
        ...state,
        isFetching: false,
      };
    case SET_VALID_USER:
      return {
        ...state,
        loggedUser: action.payload,
      };
    case USER_LOGOUT:
      return {
        ...state,
        loggedUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
