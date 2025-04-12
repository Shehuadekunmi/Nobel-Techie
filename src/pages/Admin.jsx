import React, { useState } from "react";
import { loginUser, setAuthToken } from "../api";
import "../style/admin.css";
import { useNavigate } from "react-router";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Admin = () => {
  const [loginID, setLoginID] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true); // Show loader
    setError("");
    setSuccess("");

    try {
      const data = await loginUser(loginID, password);
      localStorage.setItem("token", data.token); // Store token
      setAuthToken(data.token); // Set token for future requests
      setSuccess("Login successful!");
      setTimeout(() => navigate("/adminpage"), 1500);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false); // Hide loader
    }
  };
  console.log("Stored Token:", localStorage.getItem("token"));

  return (
    <div className="">

<Link to="/winner" className="pt-lg- mx-lg- mo">
          <img
            src={logo}
            alt="Company Logo"
            className="m-2 m-lg-4 position-absolute "
          />
        </Link>

      <div className="admin" id="admin">
       
        <h1>Welcome to The Admin Dashboard</h1>
        <div>
          <input
            type="text"
            placeholder="Login ID"
            value={loginID}
            onChange={(e) => setLoginID(e.target.value)}
          />{" "}
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />{" "}
          <br />
          <button className="btn btn-war" onClick={handleLogin} disabled={loading}>
            {loading ? "Signing in..." : "Sign in"}
          </button>
          {loading && (
            <p>
              {" "}
              <Loading />{" "}
            </p>
          )}
          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && <p style={{ color: "green" }}>{success}</p>}
        </div>
      </div>
    </div>
  );
};

export default Admin;
