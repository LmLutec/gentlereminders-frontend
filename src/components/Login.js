import axios from "axios";
import { useState } from "react";
import { BrowserRouter, Route, Switch, useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function authAttempt(e) {
    e.preventDefault();
    let credentials = {
      username,
      password,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/login/",
        credentials
      );
      const result = await response;

      if (result.data) {
        localStorage.setItem("jwt_token", result.data.jwt);
        localStorage.setItem("user", JSON.stringify(result.data.user));
        navigate("/getreminders");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <h1>Login Here</h1>
      <form>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <label>Password</label>
        <input
          type="text"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>

        <button type="submit" onClick={authAttempt}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
