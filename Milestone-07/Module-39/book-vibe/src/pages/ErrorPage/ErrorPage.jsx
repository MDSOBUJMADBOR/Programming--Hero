import React from 'react';
import { Link } from 'react-router';


const ErrorPage = () => {
  const style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    textAlign: "center",
    backgroundColor: "#f3f4f6"
  };

  return (
    <div style={style}>
      <h1 style={{fontSize:"80px", margin:"0"}}>404</h1>
      <h2>Oops! Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>

      <Link to="/">
        <button
          style={{
            marginTop:"15px",
            padding:"10px 20px",
            backgroundColor:"#2563eb",
            color:"white",
            border:"none",
            borderRadius:"6px",
            cursor:"pointer"
          }}
        >
          Go Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;