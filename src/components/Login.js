import axios from "axios";
import { useState } from "react";
import { BrowserRouter, Route, Switch, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function authAttempt(e) {
    e.preventDefault();
    let user = {
      email,
      password,
    };

    try {
      const response = await axios.post("http://localhost:3000/login", {
        user,
      });
      const result = await response;

      if (!result.data.message) {
        // localStorage.setItem("jwt_token", result.data.jwt);
        localStorage.setItem("user", JSON.stringify(result.data.user.id));
        localStorage.setItem("role", JSON.stringify(result.data.user.role));
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <h1>Login Here</h1>
      <form>
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
