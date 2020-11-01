import React, { useState, useEffect } from "react";
import SelectBox from "../selectbox";
import { getBlogs } from "../../util/action/blogs";
import { getUsers } from "./../../util/action/users";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Blog = () => {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogAuthor, setBlogAuthor] = useState("");
  const [filterBlog, setFilterBlog] = useState([]);
  const dispatch = useDispatch();
  const { isFetching, blogData } = useSelector((state) => state.blogReducer);
  const { userData } = useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(getBlogs());
    dispatch(getUsers());
  }, [dispatch]);

  useEffect(() => {
    let filteredBlog = blogData;
    if (blogTitle !== "") {
      filteredBlog = filteredBlog.filter((blog) => blog.title === blogTitle);
    }
    if (blogAuthor !== "") {
      filteredBlog = filteredBlog.filter(
        (blog) => blog.userId === parseInt(blogAuthor)
      );
    }

    setFilterBlog(filteredBlog);
  }, [blogData, blogTitle, blogAuthor]);

  return (
    <div>
      <h2>Blog</h2>
      {!isFetching ? (
        <>
          <div className="filterBar">
            <SelectBox
              filterType="Title"
              value={blogTitle}
              result="title"
              handleChange={(e) => setBlogTitle(e.target.value)}
              data={blogData}
              selectKey="title"
              selectValue="title"
            />
            <SelectBox
              filterType="Author"
              value={blogAuthor}
              result="name"
              handleChange={(e) => setBlogAuthor(e.target.value)}
              data={userData}
              selectKey="name"
              selectValue="id"
            />
          </div>

          <div className="blockList">
            {filterBlog.length > 0 ? (
              filterBlog.map((blog) => (
                <Link className="block" key={blog.id} to={"/blogs/" + blog.id}>
                  <h3>{blog.title}</h3>
                </Link>
              ))
            ) : (
              <>
                <h3>No result found</h3>
              </>
            )}
          </div>
        </>
      ) : (<div className="loading">
        Loading...
        </div>
      )}
    </div>
  );
};

export default Blog;
