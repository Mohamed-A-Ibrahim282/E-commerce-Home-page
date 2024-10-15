import React from "react";
import { Link } from "react-router-dom";
import icon1 from "../../image/Frame 4.svg";

const Navbar = () => {
  return (
    <>
      <nav className="nav navbar navbar-expand-lg py-3">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse row"
            id="navbarSupportedContent"
          >
            <div className="col-md-1 col-2">
              <img
                src={require("../../image/logo.png")}
                className="w-75"
                alt=""
              />
            </div>

            <div className="col-md-6">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <>
                  <li className="nav-item border border-1 border-dark-subtle border-start-0 border-top-0 border-bottom-0 ">
                    <Link
                      className="navTabs nav-link text-black fw-bold"
                      aria-current="page"
                    >
                      Contact us
                    </Link>
                  </li>
                  <li className="nav-item border border-1 border-dark-subtle border-start-0 border-top-0 border-bottom-0">
                    <Link
                      className="navTabs fw-bold text-black nav-link"
                      to="/category"
                    >
                      <i class="fa-regular fa-envelope me-1"></i>
                      contact@bellout.com
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      className="navTabs fw-bold text-black nav-link"
                      to="/brand"
                    >
                      <i class="fa-solid fa-phone me-1"></i>
                      +201030000000
                    </Link>
                  </li>
                </>
              </ul>
            </div>

            <div className="col-md-5">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 justify-content-end">
                <>
                  <li className="nav-item me-4">
                    <i class="fa-solid fa-globe me-2"></i>
                    English
                    <i class="fa-solid fa-angle-down ms-1"></i>
                  </li>
                  <li className="nav-item me-4 mt-3 mt-md-0">
                    <button
                      style={{ backgroundColor: "#E30613" }}
                      className="btn text-white"
                    >
                      <img src={icon1} className="col-1 me-1" alt="" />
                      Become a vendor
                    </button>
                  </li>
                </>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <nav className="nav navbar navbar-expand-lg p-3">
        <div className="container">
          <div className="row w-100">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent2"
              aria-controls="navbarSupportedContent2"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent2"
            >
              <div className="row w-100">
                <div class="dropdown col-md-2 mt-3 mt-md-0">
                  <button
                    style={{ backgroundColor: "#E30613" }}
                    className="btn  text-white"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Browse Category
                    <i class="fa-solid fa-angle-up ms-1"></i>
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <Link className="dropdown-item" href="#">
                        Action
                      </Link>
                    </li>
                  </ul>
                </div>

                <ul className="navbar-nav me-auto mb-2 mb-lg-0 col-md-4">
                  <>
                    <li className="nav-item">
                      <Link
                        style={{ color: "#E30613" }}
                        className="navTabs nav-link fw-bold"
                        aria-current="page"
                        to="/"
                      >
                        HOME
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="navTabs fw-bold text-black nav-link"
                        to="/category"
                      >
                        ABOUT US
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        className="navTabs fw-bold text-black nav-link"
                        to="/brand"
                      >
                        BLOGS
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        className="navTabs fw-bold text-black nav-link"
                        to="/allorders"
                      >
                        CONTACT US
                      </Link>
                    </li>
                  </>
                </ul>

                <form className="d-flex position-relative col-md-3">
                  <input
                    className="form-control me-2 w-100 rounded-pill border border-1 border-danger"
                    type="search"
                    placeholder="Search  your product"
                    aria-label="Search"
                  />
                  <i
                    style={{ top: 12, right: 40 }}
                    className="fa-solid fa-search position-absolute"
                  ></i>
                </form>

                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 col-md-3 px-0">
                  <>
                    <li className="nav-item me-4">
                      <i
                        style={{ color: "#E30613" }}
                        className="fa-regular fa-bell"
                      ></i>
                    </li>
                    <li className="nav-item me-4">
                      <i
                        style={{ color: "#E30613" }}
                        className="fa-solid fa-cart-shopping"
                      ></i>
                    </li>
                    <li className="nav-item me-4">
                      <i
                        style={{ color: "#E30613" }}
                        class="fa-solid fa-rotate-right"
                      ></i>
                    </li>
                    <li className="nav-item me-4">
                      <i
                        style={{ color: "#E30613" }}
                        className="fa-regular fa-user"
                      ></i>
                    </li>
                    <li className="nav-item me-4">Hello, login</li>
                  </>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
