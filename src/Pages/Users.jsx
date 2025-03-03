/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { FormControlLabel, Switch } from "@mui/material";
import { styled } from "@mui/material/styles";
import { httpClient } from "../utils/httpClient";
import { imageUrl } from "../env/envUrl";
import { useNavigate } from "react-router-dom";
import { uploadFileImage } from "../utils/uploadFile";
import { MdEditDocument } from 'react-icons/md';

const Users = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
    image: "",
  });
  const [userData, setUserData] = useState([]);
  const [updateUser, setUpdateUser] = useState({});
  const [snackbarStatus, setSnackbarStatus] = useState(false);
  const [snackbarIcon, setSnackbarIcon] = useState(null);
  const [snackbarRes, setSnackbarRes] = useState(null);
  const [formError, setFormError] = useState({});
  const [isActive, setIsActive] = useState(true);
  const [userPreview, setUserPreview] = useState();
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 
  const validate = () => {
    let errors = {};
    let isFormValid = true;

    if (!formData.name) {
      isFormValid = false;
      errors.name = "**Please enter the name";
    }
    if (!formData.email) {
      isFormValid = false;
      errors.email = "**Please enter the email";
    }
    if (!formData.password) {
      isFormValid = false;
      errors.password = "**Please enter the password";
    }
    if (!formData.number) {
      isFormValid = false;
      errors.number = "**Please enter the number";
    }
    // if (!formData.image) {
    //   isFormValid = false;
    //   errors.image = "**Please upload an image";
    // }

    setFormError(errors);
    return isFormValid;
  };


  const columns = [
    {
      field: "user_id",
      headerName: "S.No",
      filterable: false,
      renderCell: (params) => params.api.getRowIndexRelativeToVisibleRows(params.row.user_id) + 1,
      width: 130,
    },
    { field: "name", headerName: "Name", width: 130 },
    { field: "email", headerName: "Email", width: 180 },
    { field: "number", headerName: "Number", width: 150 },
    {
      field: "image",
      headerName: "Image",
      width: 150,
      height: 150,
      renderCell: (params) => {
        return (
          <div>
            <img
              src={`${imageUrl}${params.row.image}`}  
              alt={params.row.name}
              width={50}
              height={50}
            />
          </div>
        );
      },
    },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      width: 200,
      renderCell: (params) => {
        return (
          <div className="d-flex justify-content-between align-items-center">
            <button
              style={{
                padding: "5px",
                background: "#bad6eb",
                borderRadius: "25px",
              }}
              type="button"
              onClick={() => handleEdit(params.row)}
            >
              Edit
            </button>
            <FormControlLabel
              control={<Switch sx={{ m: 1 }} checked={params.row.status === '1'} />}
              style={{ marginLeft: "10px" }}
              onChange={() => handleActiveStatus(params.row)}
            />
          </div>
        );
      },
    },
  ];


  const handleActiveStatus = async (row) => {
    try {
      const response = await httpClient.patch(
        `user/manage-user-status/${row?._id}`
      );
      if (response?.data?.status == 200) {
        setSnackbarStatus(true);
        setSnackbarIcon("success");
        setSnackbarRes(response?.data?.message);
        setIsActive(response?.data?.data?.status);
        getAllUsers();
      }
    } catch (error) {
      setSnackbarStatus(true);
      setSnackbarIcon("error");
      setSnackbarRes(error?.message);
    }
  };

  const handleEdit = (row) => {
    setShow(true);
    setFormData({
      name: row.name,
      email: row.email,
      password: row.password,
      number: row.number,
      image: row.image,
    });
    setUpdateUser(row);
  };

  const getAllUsers = async () => {
    try {
      
      const response = await httpClient.get("user/get.php");
      console.log("API Response:", response);


      if (response?.data?.status === true) {
        setUserData(response?.data?.data);
      } else {
        console.log("Error: ", response?.data?.message || "Something went wrong");
      }
    } catch (error) {
      console.log("get users error", error);
    }
  };


  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarStatus(false);
  };

  const handleUserInput = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setUserPreview(objectUrl); 

      const imageResponse = await uploadFileImage(file);

      if (!imageResponse?.data?.success) {
        setSnackbarStatus(true);
        setSnackbarIcon("warning");
        setSnackbarRes(imageResponse?.message);
      } else {
       
        setFormData((prev) => ({
          ...prev,
          image: imageResponse?.data?.data?.filename,  
        }));
      }
    }
  };

  const handleSubmitUser = async (event) => {
    event.preventDefault();
    if (validate()) {
      if (updateUser?.user_id) {
        try {
          const response = await httpClient.put(
            `user/update-user/${updateUser?.user_id}`,
            formData
          );
          if (response?.data?.status == 200) {
            setSnackbarStatus(true);
            setSnackbarIcon("success");
            setSnackbarRes(response?.data?.message);
            setShow(false);
            navigate("/Users");
            getAllUsers();
          } else {
            setSnackbarStatus(true);
            setSnackbarIcon("error");
            setSnackbarRes(response?.data?.message);
          }
        } catch (error) {
          setSnackbarStatus(true);
          setSnackbarIcon("error");
          setSnackbarRes(error?.message);
        }
      } else {
        try {
          const response = await httpClient.post("user/post.php", formData);
          if (response?.data?.status == 201) {
            setSnackbarStatus(true);
            setSnackbarIcon("success");
            setSnackbarRes(response?.data?.message);
            navigate("/Users");
            getAllUsers();
          } else {
            setSnackbarStatus(true);
            setSnackbarIcon("error");
            setSnackbarRes(response?.data?.message);
          }
        } catch (error) {
          setSnackbarStatus(true);
          setSnackbarIcon("error");
          setSnackbarRes(error?.message);
        }
      }
    } else {
      setSnackbarStatus(true);
      setSnackbarIcon("warning");
      setSnackbarRes("Please Enter Mandatory fields");
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  useEffect(() => {
    console.log("userData:", userData);  
  }, [userData]);

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
                      getRowId={(row) => row.user_id || row.userId || row._id}
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
            <form method="POST" encType="multipart/form-data" onSubmit={handleSubmitUser}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" placeholder="Enter name" name="name" onChange={handleUserInput} value={formData?.name || ""} />
                {formError.name && <p className="errorMessage">{formError.name}</p>}
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Enter email" name="email" onChange={handleUserInput} value={formData?.email || ""} />
                {formError.email && <p className="errorMessage">{formError.email}</p>}
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" placeholder="Enter password" name="password" onChange={handleUserInput} value={formData?.password || ""} />
                {formError.password && <p className="errorMessage">{formError.password}</p>}
              </div>
              <div className="mb-3">
                <label className="form-label">Number</label>
                <input type="text" className="form-control" placeholder="Enter number" name="number" onChange={handleUserInput} value={formData?.number || ""} />
                {formError.number && <p className="errorMessage">{formError.number}</p>}
              </div>
              <div className="mb-3">
                <label className="form-label">Image</label>
                <input type="file" className="form-control" name="image" onChange={handleImageUpload} />
                {formError.image && <p className="errorMessage">{formError.image}</p>}
                {userPreview && (
                  <div className="image-preview">
                    <img src={userPreview} alt="Preview" style={{ width: "100px", height: "100px" }} />
                  </div>
                )}
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Users;
