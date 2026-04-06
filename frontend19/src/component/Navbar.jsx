import React from "react";
import { useAuth } from "../conexts/AuthContext.jsx";

const navbarStyles = {
  nav: {
    backgroundColor: "#333",
    padding: "1rem",
    color: "white",
  },  
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  brand: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "white",
    textDecoration: "none",
  },
  navLinks: {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
  },
  link: {
    color: "white",
    textDecoration: "none",
    padding: "0.5rem 1rem",
    borderRadius: "4px",
    transition: "background-color 0.3s",
  },
  button: {
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    padding: "0.5rem 1rem",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "1rem",
  },
  userInfo: {
    marginRight: "1rem",
    fontSize: "0.9rem",
  },
};

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
    window.location.href = "/login";
  };

  return (
    <nav style={navbarStyles.nav}>
      <div style={navbarStyles.container}>
        <a href="/" style={navbarStyles.brand}>
          MyApp
        </a>
        <div style={navbarStyles.navLinks}>
          {isAuthenticated ? (
            <>
              <span style={navbarStyles.userInfo}>
                Welcome, {user?.name}
              </span>
              <button onClick={handleLogout} style={navbarStyles.button}>
                Logout
              </button>
            </>
          ) : (
            <>
              <a href="/login" style={navbarStyles.link}>
                Login
              </a>
              <a href="/register" style={navbarStyles.link}>
                Register
              </a>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;