import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";

const Home = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("User");
  
  useEffect(() => {
    // Simple welcome message without server verification for now
    toast(`Welcome to EquiTrade Dashboard!`, {
      position: "top-right",
    });
  }, []);
  
  const Logout = () => {
    removeCookie("token");
    navigate("/");
  };
  
  const goToDashboard = () => {
    // Get username from localStorage or use default
    const storedUsername = localStorage.getItem('equitrade_username') || 'User';
    // Redirect to the actual dashboard with username parameter
    window.location.href = `http://localhost:3000?username=${encodeURIComponent(storedUsername)}`;
  };
  
  return (
    <>
      <div className="home_page">
        <h4>
          Welcome <span>{username}</span>
        </h4>
        <button onClick={goToDashboard}>GO TO DASHBOARD</button>
        <button onClick={Logout}>LOGOUT</button>
      </div>
      <ToastContainer />
    </>
  );
};

export default Home;