import React from 'react';
import DataTable from 'react-data-table-component';

const columns = [
  {
    name: 'S.No',
    selector: row => row.sno,
    sortable: true,
  },
  {
    name: 'Name',
    selector: row => row.name,
    sortable: true,
  },
  {
    name: 'Email',
    selector: row => row.email,
    sortable: true,
  },
  {
    name: 'Password',
    selector: row => row.password,
    sortable: true,
  },
  {
    name: 'Phone',
    selector: row => row.phone,
    sortable: true,
  },
  {
    name: 'Action',
    cell: row => (
      <div>
        <button className="btn btn-sm btn-outline-primary">View</button>
        <button className="btn btn-sm btn-outline-warning " data-bs-toggle="offcanvas" data-bs-target="#editUserOffcanvas">Edit</button>
        <button className="btn btn-sm btn-outline-danger">Delete</button>
      </div>
    ),
  },
];


const data = [
  {
    sno: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    password: '123456',
    phone: '9876543210',
  },
  {
    sno: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    password: 'password123',
    phone: '9876543211',
  },
  {
    sno: 3,
    name: 'Sam Wilson',
    email: 'sam.wilson@example.com',
    password: 'sam123',
    phone: '9876543212',
  },
];

const Userdatatable = () => {
  return (
    <div className="page-wrapper">
      <div className="page-content">

        <div className="container-xxl">
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-12 mt-5">

              <button className="btn btn-primary " data-bs-toggle="offcanvas" data-bs-target="#userOffcanvas" style={{ float: "right", marginTop: "-51px" }}>
                Add User
              </button>

              <div className="card">

                <div className="card-header">
                  <div className="row align-items-center">
                    <div className="col">
                      <h4 className="card-title">Basic Example</h4>
                    </div>
                    <div className="col-auto">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search..."
                        />
                        <button className="btn btn-primary">Search</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-body" >
                  <DataTable
                    columns={columns}
                    data={data}
                    pagination
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="userOffcanvas" aria-labelledby="offcanvasLabel">
          <div className="offcanvas-header">
            <h5 id="offcanvasLabel">Add New User</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <form>
              <div className="mb-3">
                <label className="form-label">S No</label>
                <input type="text" className="form-control" placeholder="Enter serial number" />
              </div>
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
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>

        {/* Offcanvas for editing a user */}
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="editUserOffcanvas" aria-labelledby="editOffcanvasLabel">
          <div className="offcanvas-header">
            <h5 id="editOffcanvasLabel">Edit User</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <form>
              <div className="mb-3">
                <label className="form-label">S No</label>
                <input type="text" className="form-control" placeholder="Enter serial number" />
              </div>
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
              <button type="submit" className="btn btn-primary">Update</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userdatatable;