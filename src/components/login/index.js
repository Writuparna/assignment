import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { getUsers, setValidUser } from "./../../util/action/users";

const Login = (props) => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.userReducer);
  const { history } = props;
  const [error, setError] = useState("");

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    const userInfo = userData.find(
      (user) => user.email === values.email && user.username === values.password
    );
    if (userInfo) {
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      setError("");
      dispatch(setValidUser(userInfo));
      history.replace("/home");
    } else {
      setError("User is invalid");
    }
  };

  return (
    <div className="login">
      <div className="loginBlock">
        <h2>Login</h2>
        {error && <div className="error">{error}</div>}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            return (
              <Form noValidate>
                <div>
                  <label htmlFor="email">Email</label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                  />
                  <ErrorMessage name="email">
                    {(errorMsg) => <div className="error">{errorMsg}</div>}
                  </ErrorMessage>
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                  />
                  <ErrorMessage name="password">
                    {(errorMsg) => <div className="error">{errorMsg}</div>}
                  </ErrorMessage>
                </div>
                <button type="submit">Submit</button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
