import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [userData, setUsers] = useState([]);
  const loadUsers = async () => {
    const response = await fetch("https://reqres.in/api/users?page=1");
    const jsonResponse = await response.json();
    setUsers(jsonResponse.data);
  };
  return (
    <div className="App">
      <div id="flexProperties">
        <h3 id="h3"> TASK 2 </h3>
        <button onClick={loadUsers}> Get Users </button>
      </div>
      <div id="flexDiv">
        {userData.map((data) => (
          <div id="mainContainer">
            <img id="avatar" src={data.avatar} alt="Avatar" />
            <h3>
              {" "}
              {data.first_name} {data.last_name}{" "}
            </h3>
            <p> {data.email} </p>
          </div>
        ))}
      </div>
    </div>
  );
}
