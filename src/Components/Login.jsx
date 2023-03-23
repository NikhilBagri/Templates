import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css"

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
            localStorage.setItem("token", response.data.token);
            navigate("/dashboard");
          }
        }
      });
  };

  return (
    <div className="col-sm-6 offset-sm-3">
      <h1 className="login my-5">Login</h1>
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        {error ? <label className="label">Field cant be empty</label> : ""}
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
        {error ? <label className="label">Field cant be empty</label> : ""}
        <br />
        <br />
        <button className="btn btn-dark" onClick={login}>
          Login
        </button>
      </form>

      <h1>{loginStatus}</h1>
    </div>
  );
}
