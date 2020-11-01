import axios from "axios";
import Config from "./../../util/config";

export const BLOG_FETCH_REQUEST = "BLOG_FETCH_REQUEST";
export const BLOG_FETCH_SUCCESS = "BLOG_FETCH_SUCCESS";
export const BLOG_FETCH_FAIL = "BLOG_FETCH_FAIL";

export const getBlogs = () => (dispatch) => {
  dispatch({
    type: BLOG_FETCH_REQUEST,
  });
  axios
    .get(`${Config.apiPath}/posts`)
    .then((res) => {
      dispatch({
        type: BLOG_FETCH_SUCCESS,
        payload: res.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: BLOG_FETCH_FAIL,
        payload: error,
      });
    });
};
