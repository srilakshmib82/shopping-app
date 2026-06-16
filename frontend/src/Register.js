import {
  useState
} from "react";

import {
  useNavigate
} from "react-router-dom";

import "./Auth.css";

function Register() {

  const navigate =
    useNavigate();

  const [name,
    setName] =
    useState("");

  const [email,
    setEmail] =
    useState("");

  const [password,
    setPassword] =
    useState("");

  // Register
  const handleRegister = () => {

    if (
      !name ||
      !email ||
      !password
    ) {

      alert(
        "Fill all fields"
      );

      return;
    }

    const users =
      JSON.parse(
        localStorage.getItem(
          "users"
        )
      ) || [];

    const userExists =
      users.find(
        (user) =>
          user.email === email
      );

    if (userExists) {

      alert(
        "User already exists"
      );

      return;
    }

    const newUser = {

      name,
      email,
      password
    };

    users.push(
      newUser
    );

    localStorage.setItem(

      "users",

      JSON.stringify(
        users
      )
    );

    alert(
      "Registration Successful"
    );

    navigate("/login");
  };

  return (

    <div className="auth-container">

      <div className="auth-box">

        <h1>
          Register
        </h1>

        <input
          type="text"
          placeholder="Name"

          value={name}

          onChange={(e) =>
            setName(
              e.target.value
            )
          }
        />

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
          onClick={handleRegister}
        >
          Register
        </button>

      </div>

    </div>
  );
}

export default Register;