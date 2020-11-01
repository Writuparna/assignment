import axios from "axios";
import Config from "./../../util/config";


export const USER_FETCH_REQUEST = "USER_FETCH_REQUEST";
export const USER_FETCH_SUCCESS = "USER_FETCH_SUCCESS";
export const USER_FETCH_FAIL = "USER_FETCH_FAIL";
export const SET_VALID_USER = "SET_VALID_USER";
export const USER_LOGOUT = "USER_LOGOUT";

export const getUsers = () => (dispatch) => {
  dispatch({
    type: USER_FETCH_REQUEST,
  });
  axios
    .get(`${Config.apiPath}/users`)
    .then((res) => {
      dispatch({
        type: USER_FETCH_SUCCESS,
        payload: res.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: USER_FETCH_FAIL,
        payload: error,
      });
    });
};

export const setValidUser = (payload) => {
  return {
    type: SET_VALID_USER,
    payload,
  };
};

export const userLogout = (payload) => {
  return {
    type: USER_LOGOUT,
    payload,
  };
};
