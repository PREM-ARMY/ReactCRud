import React from "react";
import { FaChartLine, FaUsers, FaDollarSign, FaClipboardList } from "react-icons/fa";

const Dashboard = () => {
  const userName = "User"; // Replace with dynamic username if available

  return (
    <div className="page-wrapper">
      <div className="page-content">
        <div className="container-xxl">
          <h2 className="mb-4">Welcome Back, {userName}!</h2>
          <div className="row">
            <div className="col-md-3">
              <div className="card text-center p-3">
                <FaChartLine size={24} className="mb-2" />
                <h6>Performance</h6>
                <p className="fw-bold">Analytics Overview</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-center p-3">
                <FaUsers size={24} className="mb-2" />
                <h6>Users</h6>
                <p className="fw-bold">Active Users Count</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-center p-3">
                <FaDollarSign size={24} className="mb-2" />
                <h6>Revenue</h6>
                <p className="fw-bold">Monthly Earnings</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-center p-3">
                <FaClipboardList size={24} className="mb-2" />
                <h6>Tasks</h6>
                <p className="fw-bold">Pending Actions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;