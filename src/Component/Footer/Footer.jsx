import React from "react";

const Footer = () => {
  return (
    <>
      <div className="container-fluid bg-dark mt-5 py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="inner">
                <img
                  src={require("../../image/logo.png")}
                  className="w-50"
                  alt=""
                />
                <h6 className="text-white my-1">Download App</h6>
                <div className="my-3 w-50 rounded-2">
                  <img
                    src={require("../../image/footer1.png")}
                    className="w-100"
                    alt=""
                  />
                </div>

                <div className="my-3 w-50 rounded-2">
                <img
                    src={require("../../image/footer2.png")}
                    className="w-100"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="inner">
                <h4 className="text-white my-1">Service us</h4>

                <p className="text-white mt-4">About us</p>
                <p className="text-white">contact us</p>
                <p className="text-white">Privacy</p>
                <p className="text-white">Term</p>
                <p className="text-white">FAQ</p>

                <div style={{border:"1px solid #FFC436"}} className="d-flex align-items-center justify-content-center text-white rounded-pill py-2 my-2 w-75 ">
                  <h4 className="fw-bold">Become a viendor</h4>
                </div>

                <div className="d-flex py-3">
                  <i className="fa-brands text-white me-3 fa-xl fa-facebook"></i>
                  <i className="fa-brands text-white me-3 fa-xl fa-instagram"></i>
                  <i className="fa-brands text-white me-3 fa-xl fa-twitter"></i>
                  <i className="fa-brands text-white me-3 fa-xl fa-linkedin"></i>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="inner">
                <h4 className="text-white my-1">Our company</h4>

                <p className="text-white mt-4">All Product</p>
                <p className="text-white">All Order</p>
                <p className="text-white">Payment methods</p>
                <p className="text-white">Blog</p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="inner">
                <h4 className="text-white my-1">Store Information</h4>

                <p className="text-white mt-4">
                  <i class="fa-solid fa-location-dot"></i> Nasr city
                </p>
                <p className="text-white">
                  <i class="fa-solid fa-phone"></i> +201013688445
                </p>
                <p className="text-white">
                  <i class="fa-regular fa-envelope"></i> mo123456@gamil.com
                </p>
                <p className="text-white">We are ready to help</p>
                <div className="d-flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="form-control rounded-end-0"
                  />
                  <button style={{backgroundColor:"#E30613"}} className="btn rounded-start-0 text-white">
                    Subscripe
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-white text-center mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            consequatur blanditiis.{" "}
            <span style={{color:"#FFC436"}}>
              Dolor, molestiae! Cupiditate, cumque.
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
