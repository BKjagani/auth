import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ username: "", password: "" });
  const API = "http://127.0.0.1:3005/api/user/login";
  async function handleSubmit(e) {
    try {
      e.preventDefault();
      const response = await axios.post(API, user);
      const data = await response.data;
      const token = data.token;
      console.log(token);
      if (token) {
        localStorage.setItem("token", token);
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-5 m-auto">
            <form action="">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  name="username"
                  value={user.username}
                  onChange={(e) =>
                    setUser((preUser) => ({
                      ...preUser,
                      [e.target.name]: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Passwrod"
                  aria-label="password"
                  aria-describedby="basic-addon1"
                  name="password"
                  value={user.password}
                  onChange={(e) =>
                    setUser((preUser) => ({
                      ...preUser,
                      [e.target.name]: e.target.value,
                    }))
                  }
                />
              </div>
              <button
                type="submit"
                className="btn btn-success"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
