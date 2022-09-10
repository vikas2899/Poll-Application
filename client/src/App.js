import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Menu from "./screens/Menu";
import Navbar from "./components/Navbar";
import Announcement from "./components/Announcement";
import Footer from "./components/Footer";

import "./App.css";
import CreatePoll from "./screens/CreatePoll";
import ActivePoll from "./screens/ActivePoll";
import PollResponse from "./screens/PollResponse";
import About from "./screens/About";

function App() {
  const user = useSelector((state) => state.userLogin.currentUser);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route
            path="/login"
            element={user ? <Navigate to="/poll-menu" /> : <Login />}
            exact
          />
          <Route path="/register" element={<Register />} exact />
          <Route
            path="/poll-menu"
            element={user ? <Menu /> : <Navigate to="/login" />}
            exact
          />
          <Route
            path="/poll-menu/create"
            element={user ? <CreatePoll /> : <Navigate to="/login" />}
            exact
          />
          <Route
            path="/poll-menu/view"
            element={user ? <ActivePoll /> : <Navigate to="/login" />}
            exact
          />
          <Route
            path="/poll-menu/response"
            element={user ? <PollResponse /> : <Navigate to="/login" />}
            exact
          />
          <Route path="/about" element={<About />} exact />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
