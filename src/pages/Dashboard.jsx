import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "../style/dashboard.css";
import { logoutUser } from "../api";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${API_URL}/auth/winners`);
        console.log("API Response:", response.data);
        
      
        const usersArray = response.data.data?.winners || [];
        setUsers(usersArray);
        
        console.log("Processed users:", usersArray);
      } catch (err) {
        console.error("Error:", err.response?.data || err.message);
        setError("Failed to load users");
        setUsers([]);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, [API_URL]);

  const handleDelete = async (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await axios.delete(`${API_URL}/auth/winners/${userId}`);
        setUsers(users.filter((user) => user._id !== userId));
        alert("Winner deleted successfully")
      } catch (err) {
        setError("Failed to delete user.");
      }
    }
  };

  const handleEdit = (user) => {
    navigate("/adminpage", { state: { user } });
  };

  const handleLogout = async () => {
    await logoutUser();
    navigate("/admin"); 
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="dashboard-container">
      <div className="d-flex justify-content-between .btn-create">
      <h1>User Management</h1>
      <Link to="/adminpage" className="btn-create">
        Create New Winner
      </Link>
      <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>
     
      {users.length === 0 ? (
         <div className="no-users">
         <p>No users found in database.</p>
         <button onClick={() => window.location.reload()}>Retry</button>
       </div>
      ) : (
        <table className="users-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Certificate #</th>
              <th>Company</th>
              <th>Country</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.candidateName}</td>
                <td>{user.certificateNumber}</td>
                <td>{user.company}</td>
                <td>{user.country}</td>
                <td>
                  <button onClick={() => handleEdit(user)} className="btn-edit">
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn-delete"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Dashboard;