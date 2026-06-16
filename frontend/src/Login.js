import {
  useState
} from "react";

import {
  useNavigate
} from "react-router-dom";

import "./Auth.css";

function Login() {

  const navigate =
    useNavigate();

  const [email,
    setEmail] =
    useState("");

  const [password,
    setPassword] =
    useState("");

  // Login
  const handleLogin = () => {

    const users =
      JSON.parse(
        localStorage.getItem(
          "users"
        )
      ) || [];

    const existingUser =
      users.find(
        (user) =>

          user.email === email

          &&

          user.password ===
          password
      );

    if (!existingUser) {

      alert(
        "Invalid Credentials"
      );

      return;
    }

    localStorage.setItem(

      "currentUser",

      JSON.stringify(
        existingUser
      )
    );

    alert(
      "Login Successful"
    );

    navigate("/");
  };

  return (

    <div className="auth-container">

      <div className="auth-box">

        <h1>
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"

          value={email}

          onChange={(e) =>
            setEmail(
              e.target.value
            )
          }
        />

        <input
          type="password"
          placeholder="Password"

          value={password}

          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
        />

        <button
          onClick={handleLogin}
        >
          Login
        </button>

      </div>

    </div>
  );
}

export default Login;