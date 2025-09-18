import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const Dashboard = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("User");
  const [holdings, setHoldings] = useState([]);
  
  useEffect(() => {
    toast(`Welcome to EquiTrade Dashboard!`, {
      position: "top-right",
    });
    
    // Fetch holdings data
    fetchHoldings();
  }, []);
  
  const fetchHoldings = async () => {
    try {
      const response = await axios.get('http://localhost:3002/allHoldings');
      setHoldings(response.data);
    } catch (error) {
      console.error('Error fetching holdings:', error);
      toast.error('Failed to load holdings data');
    }
  };
  
  const Logout = () => {
    removeCookie("token");
    navigate("/");
  };
  
  return (
    <>
      <div style={{ padding: '20px', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2>EquiTrade Dashboard - <span style={{ color: 'rgba(0, 212, 255, 1)' }}>{username}</span></h2>
          <button onClick={Logout} style={{ padding: '10px 20px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>LOGOUT</button>
        </div>
        
        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
          <h3>Your Holdings</h3>
          {holdings.length > 0 ? (
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
              <thead>
                <tr style={{ backgroundColor: '#f8f9fa' }}>
                  <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #ddd' }}>Stock</th>
                  <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #ddd' }}>Qty</th>
                  <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #ddd' }}>Avg Price</th>
                  <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #ddd' }}>Current Price</th>
                  <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #ddd' }}>P&L</th>
                </tr>
              </thead>
              <tbody>
                {holdings.map((holding, index) => (
                  <tr key={index}>
                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>{holding.name}</td>
                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>{holding.qty}</td>
                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>₹{holding.avg}</td>
                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>₹{holding.price}</td>
                    <td style={{ padding: '10px', border: '1px solid #ddd', color: holding.net.includes('-') ? 'red' : 'green' }}>{holding.net}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No holdings data available. Make sure your backend is running on port 3002.</p>
          )}
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Dashboard;