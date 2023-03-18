import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [error, setError] = useState(false);

  const login = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:3001/login`, {
        username: username,
        password: password,
      })
      .then((response) => {
        if (response.data.message) {
          setLoginStatus(response.data.message);
        } else {
          if (username.length === 0 || password.length === 0) {
            setError(true);
          } else {
            setLoginStatus(response.data[0].username + "  LOGGED IN");
            localStorage.setItem("token", response.data.token); // save token to localStorage
            navigate("/dashboard"); // redirect to the dashboard page
          }
        }
      });
  };

  return (
    <div className="col-sm-6 offset-sm-3">
      <h1>Login</h1>
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <br />
        {error ? <label>Field cant be empty</label> : ""}
        <br />
        <br />
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        {error ? <label>Field cant be empty</label> : ""}
        <br />
        <br />
        <button className="btn btn-primary" onClick={login}>
          Login
        </button>
      </form>

      <h1>{loginStatus}</h1>
    </div>
  );
}
