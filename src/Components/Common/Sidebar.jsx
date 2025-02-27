/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <>
       <div className="startbar d-print-none">
  {/*start brand*/}
  <div className="brand">
    <a href="index.html" className="logo">
      <span>
        <img src="assets/images/logo-sm.png" alt="logo-small" className="logo-sm" />
      </span>
      <span className>
        <img src="assets/images/logo-light.png" alt="logo-large" className="logo-lg logo-light" />
        <img src="assets/images/logo-dark.png" alt="logo-large" className="logo-lg logo-dark" />
      </span>
    </a>
  </div>
  {/*end brand*/}
  {/*start startbar-menu*/}
  <div className="startbar-menu">
    <div className="startbar-collapse" id="startbarCollapse" data-simplebar>
      <div className="d-flex align-items-start flex-column w-100">
        {/* Navigation */}
        <ul className="navbar-nav mb-auto w-100">
          <li className="menu-label pt-0 mt-0">
            {/* <small class="label-border">
                          <div class="border_left hidden-xs"></div>
                          <div class="border_right"></div>
                      </small> */}
            <span>Main Menu</span>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#sidebarDashboards" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarDashboards">
              <i className="iconoir-home-simple menu-icon" />
              <span>Dashboards</span>
            </a>
            <div className="collapse " id="sidebarDashboards">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link className="nav-link"  to= '/dashboard'>Dashboard</Link>
                </li>{/*end nav-item*/}
              
              </ul>{/*end nav*/}
            </div>{/*end startbarDashboards*/}
          </li>{/*end nav-item*/}
          <li className="nav-item">
            <a className="nav-link" href="#sidebarUser" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarDashboards">
              <i className="iconoir-home-simple menu-icon" />
              <span>User</span>
            </a>
            <div className="collapse " id="sidebarUser">
              <ul className="nav flex-column">
                <li className="nav-item">
                <Link className="nav-link" to='/user'>User</Link>
                </li>{/*end nav-item*/}
              </ul>{/*end nav*/}
            </div>{/*end startbarDashboards*/}
          </li>{/*end nav-item*/}
          
          
         
         
        </ul>{/*end navbar-nav-*/}
        
      </div>
    </div>{/*end startbar-collapse*/}
  </div>{/*end startbar-menu*/}    
</div>{/*end startbar*/}

        
        
        </>
    )
}

export default Sidebar