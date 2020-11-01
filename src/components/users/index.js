import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SelectBox from "../selectbox";
import { getUsers } from "./../../util/action/users";

const Users = () => {
  const [userName, setUserName] = useState("");
  const [filteredUser, setFilteredUser] = useState([]);
  const dispatch = useDispatch();
  const { isFetching, userData } = useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  useEffect(() => {
    let filteredUser = userData;
    if (userName !== "") {
      filteredUser = filteredUser.filter((user) => user.name === userName);
    }
    setFilteredUser(filteredUser);
  }, [userData, userName]);

  return (
    <div>
      <h2>User list</h2>
      {!isFetching ? (
        <>
          <SelectBox
            filterType="Filter user"
            value={userName}
            result="name"
            handleChange={(e) => setUserName(e.target.value)}
            data={userData}
            selectKey="name"
            selectValue="name"
          />
          <div className="blockList">
            {filteredUser.map((user) => (
              <div className="block" key={user.id}>
                <h3>{user.name}</h3>
                <p>{user.email}</p>
                <p>{user.phone}</p>
                <p>{user.website}</p>
                <p>{user.company.name}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default Users;
