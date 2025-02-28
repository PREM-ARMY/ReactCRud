import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { FormControlLabel, Switch } from "@mui/material";
import { styled } from "@mui/material/styles";
import { httpClient } from "../utils/httpClient";
import { imageUrl } from "../env/envUrl";

const Users = () => {
  const [userData, setUserData] = useState([]);
  const [isActive, setIsActive] = useState({});
  const [editUser, setEditUser] = useState(null);

  const getAllUsers = async () => {
    try {
      const response = await httpClient.get("user/get.php");
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
    setEditUser(row); // Set selected user for editing
    const offcanvas = new bootstrap.Offcanvas(document.getElementById("usereditOffcanvas"));
    offcanvas.show();
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!editUser) return;
    try {
      await httpClient.put("user/update.php", editUser);
      getAllUsers();
      document.getElementById("closeEditOffcanvasBtn").click();
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const columns = [
    { field: "ID", headerName: "S.No", width: 130 },
    { field: "NAME", headerName: "Name", width: 130 },
    { field: "EMAIL", headerName: "Email", width: 130 },
    { field: "NUMBER", headerName: "Number", width: 160 },
    {
      field: "IMAGE",
      headerName: "IMAGE",
      width: 200,
      renderCell: (params) => (
        <img src={`${imageUrl}${params.row.IMAGE}`} alt={params.row.NAME} width={50} height={50} />
      ),
    },
    { field: "PASSWORD", headerName: "Password", width: 130 },
    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => (
        <div style={{ display: "flex", gap: "10px" }}>
          <button className="btn btn-outline-info me-3 mt-1" onClick={() => handleEdit(params.row)}>
            Edit
          </button>
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
        
        {/* Edit User Offcanvas */}
        <div className="offcanvas offcanvas-end" id="usereditOffcanvas">
          <div className="offcanvas-header">
            <h5>Edit User</h5>
            <button id="closeEditOffcanvasBtn" type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
          </div>
          <div className="offcanvas-body">
            {editUser && (
              <form onSubmit={handleUpdate}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={editUser.NAME}
                    onChange={(e) => setEditUser({ ...editUser, NAME: e.target.value })}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={editUser.EMAIL}
                    onChange={(e) => setEditUser({ ...editUser, EMAIL: e.target.value })}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Number</label>
                  <input
                    type="text"
                    className="form-control"
                    value={editUser.NUMBER}
                    onChange={(e) => setEditUser({ ...editUser, NUMBER: e.target.value })}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Image</label>
                  <input
                    type="file"
                    className="form-control"
                    onChange={(e) => setEditUser({ ...editUser, IMAGE: e.target.files[0].name })}
                  />
                  {editUser.IMAGE && (
                    <div className="mt-2">
                      <img src={`${imageUrl}${editUser.IMAGE}`} alt="User" width={100} />
                    </div>
                  )}
                </div>
                <button type="submit" className="btn btn-primary">Update</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
