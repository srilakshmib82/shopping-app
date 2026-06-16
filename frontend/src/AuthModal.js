import "./AuthModal.css";

import { useState } from "react";

function AuthModal({

  show,
  setShow,

  setUser

}) {

  const [isLogin,
    setIsLogin] =
    useState(true);

  const [name,
    setName] =
    useState("");

  const [email,
    setEmail] =
    useState("");

  const [password,
    setPassword] =
    useState("");

  // =========================
  // SUBMIT
  // =========================

  const handleSubmit = (e) => {

    e.preventDefault();

    if (
      !email ||
      !password
    ) {

      alert(
        "Fill all details"
      );

      return;
    }

    const userData = {

      name:
        name || "User",

      email
    };

    localStorage.setItem(

      "user",

      JSON.stringify(
        userData
      )
    );

    setUser(userData);

    alert(

      isLogin

        ? "Login Successful"

        : "Registration Successful"
    );

    setShow(false);
  };

  if (!show) return null;

  return (

    <div className="auth-overlay">

      <div className="auth-modal">

        {/* CLOSE */}

        <button
          className="close-btn"

          onClick={() =>
            setShow(false)
          }
        >

          ✕

        </button>

        {/* TITLE */}

        <h1>

          {
            isLogin

              ? "Login"

              : "Register"
          }

        </h1>

        {/* FORM */}

        <form onSubmit={handleSubmit}>

          {
            !isLogin && (

              <input
                type="text"

                placeholder="Enter Name"

                value={name}

                onChange={(e) =>
                  setName(
                    e.target.value
                  )
                }
              />
            )
          }

          <input
            type="email"

            placeholder="Enter Email"

            value={email}

            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
          />

          <input
            type="password"

            placeholder="Enter Password"

            value={password}

            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
          />

          <button type="submit">

            {
              isLogin

                ? "Login"

                : "Register"
            }

          </button>

        </form>

        {/* SWITCH */}

        <p
          className="switch-text"

          onClick={() =>
            setIsLogin(
              !isLogin
            )
          }
        >

          {
            isLogin

              ? "Create New Account"

              : "Already Have Account?"
          }

        </p>

      </div>

    </div>
  );
}

export default AuthModal;