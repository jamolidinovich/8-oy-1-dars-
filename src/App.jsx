import React from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
function App() {
  const [token, setToken] = useState("nmb");
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, []);
  function ProtectedRoute({ children }) {
    const isAuthenticated = token ? true : false;
    useEffect(() => {
      if (!isAuthenticated) {
        navigate("/login");
      }
    }, [isAuthenticated, navigate]);
    return isAuthenticated ? children : null;
  }
  return (
    <Routes>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/register" element={<Register></Register>}></Route>
      {/* <Route path="/" element={<Home></Home>}></Route> */}
      <Route
        path="/"
        element={
          <ProtectedRoute isAuthentication={token ? true : false}>
            <Home></Home>
          </ProtectedRoute>
        }
      ></Route>
    </Routes>
  );
}

export default App;
