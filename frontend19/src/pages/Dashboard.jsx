import React from "react";
import { useAuth } from "../conexts/AuthContext.jsx";

const dashboardStyles = {
  container: {
    maxWidth: "800px",
    margin: "50px auto",
    padding: "20px",
  },
  card: {
    backgroundColor: "#f8f9fa",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "20px",
    marginBottom: "20px",
  },
  title: {
    color: "#333",
    marginBottom: "20px",
  },
  userInfo: {
    backgroundColor: "white",
    padding: "15px",
    borderRadius: "4px",
    marginTop: "10px",
  },
  field: {
    marginBottom: "10px",
    padding: "10px",
    borderBottom: "1px solid #eee",
  },
  label: {
    fontWeight: "bold",
    marginRight: "10px",
    color: "#555",
  },
  value: {
    color: "#333",
  },
};

const Dashboard = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div style={{ textAlign: "center", marginTop: "50px" }}>Loading...</div>;
  }

  if (!user) {
    return <div style={{ textAlign: "center", marginTop: "50px" }}>Please login to view dashboard</div>;
  }

  return (
    <div style={dashboardStyles.container}>
      <div style={dashboardStyles.card}>
        <h2 style={dashboardStyles.title}>Welcome to your Dashboard!</h2>
        <p>You are successfully logged in.</p>

        <div style={dashboardStyles.userInfo}>
          <h3>User Information:</h3>
          <div style={dashboardStyles.field}>
            <span style={dashboardStyles.label}>Name:</span>
            <span style={dashboardStyles.value}>{user.name}</span>
          </div>
          <div style={dashboardStyles.field}>
            <span style={dashboardStyles.label}>Email:</span>
            <span style={dashboardStyles.value}>{user.email}</span>
          </div>
          <div style={dashboardStyles.field}>
            <span style={dashboardStyles.label}>Role:</span>
            <span style={dashboardStyles.value}>{user.role}</span>
          </div>
          <div style={dashboardStyles.field}>
            <span style={dashboardStyles.label}>User ID:</span>
            <span style={dashboardStyles.value}>{user._id}</span>
          </div>
          <div style={dashboardStyles.field}>
            <span style={dashboardStyles.label}>Joined:</span>
            <span style={dashboardStyles.value}>
              {new Date(user.createdAt).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;