/* eslint-disable no-unused-vars */
import React from 'react'

const Footer = () => {
    return (
        <>
           <div class="page-wrapper">
              <div className="page-content">
                <footer className="footer text-center text-sm-start d-print-none">
                  <div className="container-xxl">
                    <div className="row">
                      <div className="col-12">
                        <div className="card mb-0 rounded-bottom-0">
                          <div className="card-body">
                            <p className="text-muted mb-0">
                              ©
                              Makersmind
                              <span className="text-muted d-none d-sm-inline-block float-end">
                                Designed By
                                <i className="iconoir-heart text-danger" />
                                Team Shan</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </footer>
             </div>
           </div>
        </>
    )
}

export default Footer