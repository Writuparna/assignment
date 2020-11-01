import {
  BLOG_FETCH_REQUEST,
  BLOG_FETCH_SUCCESS,
  BLOG_FETCH_FAIL,
} from "./../action/blogs";

const initialState = {
  isFetching: false,
  blogData: [],
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case BLOG_FETCH_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case BLOG_FETCH_SUCCESS:
      return {
        ...state,
        blogData: action.payload,
        isFetching: false,
      };
    case BLOG_FETCH_FAIL:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default blogReducer;
