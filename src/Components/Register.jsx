import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registerStatus, setRegisterStatus] = useState("");
  const [error, setError] = useState(false);
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const register = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:3001/register`, {
      email: email,
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setRegisterStatus(response.data.message);
      } else {
        if (username.length === 0 || password.length === 0) {
          setError(true);
        } else {
        setRegisterStatus("ACCOUNT CREATED SUCCESSFULLY");
        }
      }
    });
  };

  if (token) {
    navigate('/dashboard', { replace: true });
    return null;
  }

  return (
    <div className="col-sm-6 offset-sm-3">
      <h1>Register</h1>
      <br />
      <input
        type="email"
        className="form-control"
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      {error ? <label>Field cant be empty</label> : ''}
      <br />
      <br />
      <input
        type="text"
        className="form-control"
        placeholder="Name"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <br />
      {error ? <label>Field cant be empty</label> : ''}
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
      {error ? <label>Field cant be empty</label> : ''}
      <br />
      <br />
      <button className="btn btn-primary" onClick={register}>
        Signup
      </button>
      
      <h1>{registerStatus}</h1>
    </div>
  );
}
