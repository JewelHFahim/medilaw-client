import React, { useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const Test = () => {
  const [currentUsers, setCurrentUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setCurrentUsers(data));
  }, []);

  return (
    <div className="grid grid-cols-3 my-12 gap-5">
      {currentUsers.map((user2) => (
        <div key={user2._Id} user={user2}>
          
          <PhotoProvider>
            <PhotoView src={user2.photoURL}>
            <img
            style={{ width: "300px", height: "300px" }}
            src={user2.photoURL}
            alt=""
          />
            </PhotoView>
          </PhotoProvider>

          <p>{user2.name}</p>
          <p>{user2.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Test;
