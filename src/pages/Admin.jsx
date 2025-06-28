import React, { useEffect, useState } from "react";
import { loginUser, setAuthToken } from "../api";
import "../style/admin.css";
import { useNavigate } from "react-router";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Admin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/dashboard");
    }
  }, [navigate]);

const handleLogin = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError("");

  try {
    const data = await loginUser(email, password);
    // console.log("Login response:", data);
    
    if (data.token) {
      localStorage.setItem("token", data.token);
      setAuthToken(data.token);
      navigate("/dashboard");
    } else {
      throw new Error("No token received");
    }
  } catch (err) {
    setError(err.message);
    localStorage.removeItem("token"); 
  } finally {
    setLoading(false);
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
