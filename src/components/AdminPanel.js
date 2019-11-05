import React from "react";
import { Link } from "react-router-dom";

const AdminPanel = () => {
  return (
    <div stye={{ color: "black", textDecoration: "none" }}>
      <Link to="/dashboard"> dashboard</Link>
    </div>
  );
};
export default AdminPanel;
