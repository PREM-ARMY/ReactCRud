import React from 'react'

const Register = () => {
  return (
    <>

<div className="container-xxl">
  <div className="row vh-100 d-flex justify-content-center">
    <div className="col-12 align-self-center">
      <div className="card-body">
        <div className="row">
          <div className="col-lg-4 mx-auto">
            <div className="card">
              <div className="card-body p-0 bg-black auth-header-box rounded-top">
                <div className="text-center p-3">
                  <a href="index.html" className="logo logo-admin">
                    <img src="assets/images/logo-sm.png" height={50} alt="logo" className="auth-logo" />
                  </a>
                  <h4 className="mt-3 mb-1 fw-semibold text-white fs-18">Create an account</h4>   
                  <p className="text-muted fw-medium mb-0">Enter your detail to Create your account today.</p>  
                </div>
              </div>
              <div className="card-body pt-0">                                    
                <form className="my-4" action="https://mannatthemes.com/rizz/default-dark/index.html">            
                  <div className="form-group mb-2">
                    <label className="form-label" htmlFor="username">Username</label>
                    <input type="text" className="form-control" id="username" name="username" placeholder="Enter username" />                               
                  </div>{/*end form-group*/} 
                  <div className="form-group mb-2">
                    <label className="form-label" htmlFor="useremail">Email</label>
                    <input type="email" className="form-control" id="useremail" name="user email" placeholder="Enter email" />                               
                  </div>{/*end form-group*/} 
                  <div className="form-group mb-2">
                    <label className="form-label" htmlFor="userpassword">Password</label>                                            
                    <input type="password" className="form-control" name="password" id="userpassword" placeholder="Enter password" />                            
                  </div>{/*end form-group*/} 
                  <div className="form-group mb-2">
                    <label className="form-label" htmlFor="Confirmpassword">ConfirmPassword</label>                                            
                    <input type="password" className="form-control" name="password" id="Confirmpassword" placeholder="Enter Confirm password" />                            
                  </div>{/*end form-group*/} 
                  <div className="form-group mb-2">
                    <label className="form-label" htmlFor="mobileNo">Mobile Number</label>
                    <input type="text" className="form-control" id="mobileNo" name="mobile number" placeholder="Enter Mobile Number" />                               
                  </div>{/*end form-group*/} 
                  <div className="form-group row mt-3">
                    <div className="col-12">
                      <div className="form-check form-switch form-switch-success">
                        <input className="form-check-input" type="checkbox" id="customSwitchSuccess" />
                        <label className="form-check-label" htmlFor="customSwitchSuccess">By registering you agree to the Rizz <a href="#" className="text-primary">Terms of Use</a></label>
                      </div>
                    </div>{/*end col*/} 
                  </div>{/*end form-group*/} 
                  <div className="form-group mb-0 row">
                    <div className="col-12">
                      <div className="d-grid mt-3">
                        <button className="btn btn-primary" type="button">Register Now<i className="fas fa-sign-in-alt ms-1" /></button>
                      </div>
                    </div>{/*end col*/} 
                  </div> {/*end form-group*/}                           
                </form>{/*end form*/}
                <div className="text-center">
                  <p className="text-muted">Already have an account ?  <a href="auth-login.html" className="text-primary ms-2">Log in</a></p>
                </div>
              </div>{/*end card-body*/}
            </div>{/*end card*/}
          </div>{/*end col*/}
        </div>{/*end row*/}
      </div>{/*end card-body*/}
    </div>{/*end col*/}
  </div>{/*end row*/}                                        
</div>

      
    </>
  )
}

export default Register
