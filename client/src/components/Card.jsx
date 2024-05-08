import React from 'react'

function Card(props) {
  return (
    <>
         <div className="col-12">
                  <a
                    href="/"
                    className="text-decoration-none text-light"
                  >
                    <div className="card bg text-light ">
                      <div className="card-body text-center">
                        <img
                          src={props.crs_img}
                          className="img-fluid"
                          alt="meeting"
                        />
                      </div>
                      <div className="card-footer border-0">
                        <div className="fw-semi-light">{props.crs_name}</div>
                      </div>
                    </div>
                  </a>
                </div>

    
    
    </>
  )
}

export default Card