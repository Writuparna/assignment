import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBlogs } from "../../util/action/blogs";
import { useHistory } from "react-router-dom";

const BlogDetails = (props) => {
  const [details, setDetails] = useState(null);
  const dispatch = useDispatch();
  const { isFetching, blogData } = useSelector((state) => state.blogReducer);
  const history = useHistory();

  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);

  useEffect(() => {
    setDetails(
      blogData.find((blog) => blog.id === parseInt(props.match.params.blogId))
    );
  }, [blogData, props.match.params.blogId]);
  return (
    <div>
      <p className="goBack"
        onClick={() => {
          history.goBack();
        }}
      >
        Go back
      </p>

      {!isFetching && details ? (
        <div className="blogDetails">
          <h2>{details.title}</h2>
          <p>{details.body}</p>
        </div>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </div>
  );
};

export default BlogDetails;
