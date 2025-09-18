import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted with:", inputValue);
    
    try {
      const endpoint = isLogin ? "login" : "signup";
      console.log("Making request to:", `http://localhost:3002/auth/${endpoint}`);
      
      const { data } = await axios.post(
        `http://localhost:3002/auth/${endpoint}`,
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      
      console.log("Response received:", data);
      const { success, message } = data;
      
      if (success) {
        handleSuccess(message);
        
        setInputValue({
          email: "",
          password: "",
          username: "",
        });
        setTimeout(() => {
          const usernameToStore = isLogin ? email.split('@')[0] : username;
          window.location.href = `http://localhost:3000?username=${encodeURIComponent(usernameToStore)}`;
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.error("Full error object:", error);
      console.error("Error response:", error.response);
      console.error("Error message:", error.message);
      
      if (error.response) {
        handleError(error.response.data.message || "Server error occurred");
      } else if (error.request) {
        handleError("Network error - cannot reach server");
      } else {
        handleError("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="auth-page">
      <div className="form_container">
        <div style={{ display: 'flex', marginBottom: '1rem' }}>
          <button 
            type="button" 
            onClick={() => setIsLogin(true)}
            style={{ 
              flex: 1, 
              padding: '0.5rem', 
              backgroundColor: isLogin ? 'rgba(0, 212, 255, 1)' : '#f0f0f0',
              color: isLogin ? 'white' : 'black',
              border: 'none',
              borderRadius: '0.3rem 0 0 0.3rem'
            }}
          >
            Login
          </button>
          <button 
            type="button" 
            onClick={() => setIsLogin(false)}
            style={{ 
              flex: 1, 
              padding: '0.5rem', 
              backgroundColor: !isLogin ? 'rgba(0, 212, 255, 1)' : '#f0f0f0',
              color: !isLogin ? 'white' : 'black',
              border: 'none',
              borderRadius: '0 0.3rem 0.3rem 0'
            }}
          >
            Signup
          </button>
        </div>
        <h2>{isLogin ? 'Login Account' : 'Create Account'}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                value={username}
                placeholder="Enter your username"
                onChange={handleOnChange}
              />
            </div>
          )}
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={handleOnChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={handleOnChange}
            />
          </div>
          <button type="submit">{isLogin ? 'Login' : 'Signup'}</button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;