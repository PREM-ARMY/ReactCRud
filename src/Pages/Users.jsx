/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import axios from "axios";
import { httpClient } from "../utils/httpClient";
import { FormControlLabel, Switch } from "@mui/material";
import { MdEditDocument } from "react-icons/md";
import { styled } from "@mui/material/styles";
import { imageUrl } from "../env/envUrl";

const Users = () => {
  const [userData, setUserData] = useState([]);
  const [isActive, setIsActive] = useState({});


  const getAllUsers = async () => {
    try {
      const response = await httpClient.get("user/get.php");
  
      console.log("Full Response:", response);
  
      if (response?.data?.status === true && Array.isArray(response?.data?.response)) {
        const formattedData = response.data.response.map(user => 
          Object.fromEntries(Object.entries(user).filter(([key]) => isNaN(key)))
        );
        
        setUserData(formattedData); 
      } else {
        console.error("API returned unexpected format:", response.data);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  

  useEffect(() => {
    getAllUsers();
  }, []);

  const handleEdit = (row) => {
    console.log("Edit User:", row);
  
  };

  const handleActiveStatus = (row) => {
    setIsActive((prev) => ({ ...prev, [row.id]: !prev[row.id] }));
  };

  const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor: "#65C466",
          opacity: 1,
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 22,
      height: 22,
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: "#E9E9EA",
      opacity: 1,
    },
  }));

  const columns = [
    { field: "ID", headerName: "S.No", width: 130 },
    { field: "NAME", headerName: "Name", width: 130 },
    { field: "EMAIL", headerName: "Email", width: 130 },
    { field: "PHONENO", headerName: "Number", width: 160 },
    {
      field: "IMAGE",
      headerName: "IMAGE",
      width: 200,
      renderCell: (params) => (
        <img src={`${imageUrl}${params.row.IMAGE}`} alt={params.row.aboutTitle} width={50} height={50} />
      ),
    },
    { field: "PASSWORD", headerName: "Password", width: 130 },
    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => (
        <div style={{ display: "flex", gap: "10px" }}>
          <button style={{ padding: "5px", background: "#BAD6EB", borderRadius: "25px" }} onClick={() => handleEdit(params.row)}>
            <MdEditDocument style={{ fontSize: "20px", color: "#162884" }} />
          </button>
          <FormControlLabel
            control={<IOSSwitch checked={isActive[params.row.id] || false} />}
            onChange={() => handleActiveStatus(params.row)}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="page-wrapper">
      <div className="page-content">
        <div className="container-xxl">
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-12 mt-5">
              <div className="card">
                <div className="card-header">
                  <div className="row align-items-center">
                    <div className="col">
                      <h4 className="card-title">User Management</h4>
                    </div>
                    <div className="col-auto">
                      <button className="btn btn-primary" data-bs-toggle="offcanvas" data-bs-target="#userOffcanvas">
                        Add User
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card-body pt-0">
                  <Box sx={{ height: 400, width: "100%" }}>
                  <DataGrid
                    columns={columns}
                    rows={userData}
                    slots={{ toolbar: GridToolbar }}
                    slotProps={{ toolbar: { showQuickFilter: true } }}
                    autoHeight
                    pageSizeOptions={[10, 25, 50, 100]}
                    getRowId={(row) => row.ID || row._ID}  
                    />
                  </Box>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Offcanvas for adding a new user */}
        <div className="offcanvas offcanvas-end" id="userOffcanvas">
          <div className="offcanvas-header">
            <h5>Add New User</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
          </div>
          <div className="offcanvas-body">
            <form>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" placeholder="Enter name" />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Enter email" />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" placeholder="Enter password" />
              </div>
              <div className="mb-3">
                <label className="form-label">Number</label>
                <input type="text" className="form-control" placeholder="Enter number" />
              </div>
              <div className="mb-3">
                <label className="form-label">Image</label>
                <input type="file" className="form-control" />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
