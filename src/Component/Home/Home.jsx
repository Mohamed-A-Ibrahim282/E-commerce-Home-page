import React from "react";
import { Link } from "react-router-dom";
import SliderComponent from "../SliderComponent/SliderComponent";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="row gy-4">
          <div className="col-md-9">
            <div className="row bg-body-secondary p-5 rounded-3">
              <div className="col-md-5">
                <h6>Enjoy</h6>
                <h1 style={{ color: "#E30613" }}>PRODUCT NAME</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                  iusto, corporis error ipsa vero consectetur! Eveniet pariatur
                  voluptates accusantium natus unde esse nesciunt nemo
                  architecto!
                </p>
                <div className="d-flex">
                  <h4 style={{ color: "#E30613" }} className="me-3 fw-bold">
                    50.00 EGP
                  </h4>
                  <h4 className="text-decoration-line-through fw-bold">
                    70.00 EGP
                  </h4>
                </div>
                <button
                  style={{ backgroundColor: "#E30613" }}
                  className="btn rounded-pill text-white px-5 py-3 my-3"
                >
                  <span className="fw-bold fs-5">Add to cart</span>
                  <i className="fa-solid fa-arrow-right ms-2"></i>
                </button>
              </div>
              <div className="col-md-3"></div>
              <div className="col-md-4">
                <img
                  src={require("../../image/3815e2c06e353446f05259a947df2606.png")}
                  className="w-100"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="inner h-100 position-relative bg-body-secondary rounded-2 p-3 d-flex flex-column justify-content-center align-items-center">
              <div
                style={{
                  width: "67px",
                  height: "24px",
                  gap: "10px",
                  borderBottomLeftRadius: "10px",
                  backgroundColor: "#3E9237",
                }}
                className="text-white text-center position-absolute top-0 end-0"
              >
                New
              </div>
              <h3 style={{ color: "#E30613" }} className="mt-5">
                PRODUCT NAME
              </h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla,
                molestias?
              </p>
              <div
                style={{
                  width: "67px",
                  height: "24px",
                  gap: "10px",
                  borderBottomLeftRadius: "10px",
                  backgroundColor: "#FFC436",
                }}
                className="text-white text-center"
              >
                15% off
              </div>
              <img
                src={require("../../image/8daf86214d094dbe3cf8ce76ed141c53.png")}
                className="w-50"
                alt=""
              />
              <button
                style={{ border: "1px solid #E30613" }}
                className="btn rounded-pill text-black mt-2"
              >
                Add to cart <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="row py-5 gy-4">
          <div className="col-lg-3 col-sm-6">
            <div
              style={{ borderTopRightRadius: "50px" }}
              className="inner d-flex bg-body-secondary"
            >
              <div>
                <img
                  src={require("../../image/product1.png")}
                  className="product"
                  alt=""
                />
              </div>
              <div className="p-2">
                <h6>Lorem ipsum dolor sit amet.</h6>
                <div
                  style={{
                    width: "67px",
                    height: "24px",
                    gap: "10px",
                    borderBottomLeftRadius: "10px",
                    backgroundColor: "#FFC436",
                  }}
                  className="text-white text-center my-3"
                >
                  15% off
                </div>
                <button
                  style={{ border: "1px solid #E30613" }}
                  className="btn text-black rounded-pill"
                >
                  Add to cart <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div
              style={{ borderTopRightRadius: "50px" }}
              className="inner d-flex bg-body-secondary"
            >
              <div>
                <img
                  src={require("../../image/product2.jpeg")}
                  className="product"
                  alt=""
                />
              </div>
              <div className="p-2">
                <h6>Lorem ipsum dolor sit amet.</h6>
                <div
                  style={{
                    width: "67px",
                    height: "24px",
                    gap: "10px",
                    borderBottomLeftRadius: "10px",
                    backgroundColor: "#FFC436",
                  }}
                  className="text-white text-center my-3"
                >
                  15% off
                </div>
                <button
                  style={{ border: "1px solid #E30613" }}
                  className="btn text-black rounded-pill"
                >
                  Add to cart <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div
              style={{ borderTopRightRadius: "50px" }}
              className="inner d-flex bg-body-secondary"
            >
              <div>
                <img
                  src={require("../../image/product3.png")}
                  className="product"
                  alt=""
                />
              </div>
              <div className="p-2">
                <h6>Lorem ipsum dolor sit amet.</h6>
                <div
                  style={{
                    width: "67px",
                    height: "24px",
                    gap: "10px",
                    borderBottomLeftRadius: "10px",
                    backgroundColor: "#FFC436",
                  }}
                  className="text-white text-center my-3"
                >
                  15% off
                </div>
                <button
                  style={{ border: "1px solid #E30613" }}
                  className="btn text-black rounded-pill"
                >
                  Add to cart <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div
              style={{ borderTopRightRadius: "50px" }}
              className="inner d-flex bg-body-secondary"
            >
              <div>
                <img
                  src={require("../../image/product4.png")}
                  className="product"
                  alt=""
                />
              </div>
              <div className="p-2">
                <h6>Lorem ipsum dolor sit amet.</h6>
                <div
                  style={{
                    width: "67px",
                    height: "24px",
                    gap: "10px",
                    borderBottomLeftRadius: "10px",
                    backgroundColor: "#FFC436",
                  }}
                  className="text-white text-center my-3"
                >
                  15% off
                </div>
                <button
                  style={{ border: "1px solid #E30613" }}
                  className="btn text-black rounded-pill"
                >
                  Add to cart <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row pb-5">
          <div className="inner row">
            <h3 className="fw-bold col-lg-6">Best Seller Proudact</h3>
            <ul className="nav justify-content-lg-end p-0 col-lg-6">
              <li className="nav-item">
                <Link
                  style={{ color: "#E30613" }}
                  className="nav-link fw-bold active text-decoration-underline"
                  aria-current="page"
                  href="#"
                >
                  Phone
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link fw-bold text-black"
                  aria-current="page"
                  href="#"
                >
                  Grocery
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link fw-bold text-black"
                  aria-current="page"
                  href="#"
                >
                  Baby Care
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link fw-bold text-black"
                  aria-current="page"
                  href="#"
                >
                  Skin care
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link fw-bold text-black"
                  aria-current="page"
                  href="#"
                >
                  Electronics
                </Link>
              </li>
            </ul>
          </div>

          <div className="row mt-3 gy-4">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="item position-relative text-center border border-1 border-dark-subtle rounded-3 p-3">
                <img
                  src={require("../../image/phone1.png")}
                  className="phoneImg"
                  alt=""
                />
                <h5>PRODUCT NAME</h5>
                <div
                  style={{
                    width: "67px",
                    height: "24px",
                    gap: "10px",
                    borderBottomLeftRadius: "10px",
                    backgroundColor: "#3E9237",
                  }}
                  className="text-white text-center position-absolute top-0 end-0"
                >
                  New
                </div>

                <div className="d-flex align-items-center justify-content-between">
                  <span>(332)</span>
                  <div
                    style={{ width: "100px", height: "5px" }}
                    className="bg-body-secondary"
                  >
                    <div
                      style={{ width: "70px", height: "5px" }}
                      className="bg-primary"
                    ></div>
                  </div>
                  <div>
                    <i
                      style={{ color: "#FFC436" }}
                      className="fa-solid fa-star"
                    ></i>
                    <i
                      style={{ color: "#FFC436" }}
                      className="fa-solid fa-star"
                    ></i>
                    <i
                      style={{ color: "#FFC436" }}
                      className="fa-solid fa-star"
                    ></i>
                    <i
                      style={{ color: "#FFC436" }}
                      className="fa-solid fa-star"
                    ></i>
                    <i
                      style={{ color: "#FFC436" }}
                      className="fa-solid fa-star"
                    ></i>
                  </div>
                </div>
                <div className="d-flex mt-2">
                  <h5 style={{ color: "#E30613" }} className="me-3 fw-bold">
                    500 EGP
                  </h5>
                  <h5 className="text-decoration-line-through fw-bold">
                    800 EGP
                  </h5>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <i
                    style={{ color: "#E30613" }}
                    class="fa-solid fa-cart-shopping"
                  ></i>
                  <i class="fa-solid fa-rotate-right"></i>
                  <i class="fa-regular fa-heart"></i>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="item position-relative text-center border border-1 border-dark-subtle rounded-3 p-3">
                <img
                  src={require("../../image/phone2.png")}
                  className="phoneImg"
                  alt=""
                />
                <h5>PRODUCT NAME</h5>
                <div
                  style={{
                    width: "67px",
                    height: "24px",
                    gap: "10px",
                    borderBottomLeftRadius: "10px",
                    backgroundColor: "#3E9237",
                  }}
                  className="text-white text-center position-absolute top-0 end-0"
                >
                  New
                </div>

                <div className="d-flex align-items-center justify-content-between">
                  <span>(332)</span>
                  <div
                    style={{ width: "100px", height: "5px" }}
                    className="bg-body-secondary"
                  >
                    <div
                      style={{ width: "70px", height: "5px" }}
                      className="bg-primary"
                    ></div>
                  </div>
                  <div>
                    <i
                      style={{ color: "#FFC436" }}
                      className="fa-solid fa-star"
                    ></i>
                    <i
                      style={{ color: "#FFC436" }}
                      className="fa-solid fa-star"
                    ></i>
                    <i
                      style={{ color: "#FFC436" }}
                      className="fa-solid fa-star"
                    ></i>
                    <i
                      style={{ color: "#FFC436" }}
                      className="fa-solid fa-star"
                    ></i>
                    <i
                      style={{ color: "#FFC436" }}
                      className="fa-solid fa-star"
                    ></i>
                  </div>
                </div>
                <div className="d-flex mt-2">
                  <h5 style={{ color: "#E30613" }} className="me-3 fw-bold">
                    500 EGP
                  </h5>
                  <h5 className="text-decoration-line-through fw-bold">
                    800 EGP
                  </h5>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <i
                    style={{ color: "#E30613" }}
                    class="fa-solid fa-cart-shopping "
                  ></i>
                  <i class="fa-solid fa-rotate-right"></i>
                  <i class="fa-regular fa-heart"></i>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="item position-relative text-center border border-1 border-dark-subtle rounded-3 p-3">
                <img
                  src={require("../../image/phone3.png")}
                  className="phoneImg"
                  alt=""
                />
                <h5>PRODUCT NAME</h5>
                <div
                  style={{
                    width: "67px",
                    height: "24px",
                    gap: "10px",
                    borderBottomLeftRadius: "10px",
                    backgroundColor: "#3E9237",
                  }}
                  className="text-white text-center position-absolute top-0 end-0"
                >
                  New
                </div>

                <div className="d-flex align-items-center justify-content-between">
                  <span>(332)</span>
                  <div
                    style={{ width: "100px", height: "5px" }}
                    className="bg-body-secondary"
                  >
                    <div
                      style={{ width: "70px", height: "5px" }}
                      className="bg-primary"
                    ></div>
                  </div>
                  <div>
                    <i
                      style={{ color: "#FFC436" }}
                      className="fa-solid fa-star"
                    ></i>
                    <i
                      style={{ color: "#FFC436" }}
                      className="fa-solid fa-star"
                    ></i>
                    <i
                      style={{ color: "#FFC436" }}
                      className="fa-solid fa-star"
                    ></i>
                    <i
                      style={{ color: "#FFC436" }}
                      className="fa-solid fa-star"
                    ></i>
                    <i
                      style={{ color: "#FFC436" }}
                      className="fa-solid fa-star"
                    ></i>
                  </div>
                </div>
                <div className="d-flex mt-2">
                  <h5 style={{ color: "#E30613" }} className="me-3 fw-bold">
                    500 EGP
                  </h5>
                  <h5 className="text-decoration-line-through fw-bold">
                    800 EGP
                  </h5>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <i
                    style={{ color: "#E30613" }}
                    class="fa-solid fa-cart-shopping"
                  ></i>
                  <i class="fa-solid fa-rotate-right"></i>
                  <i class="fa-regular fa-heart"></i>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="item position-relative text-center border border-1 border-dark-subtle rounded-3 p-3">
                <img
                  src={require("../../image/phone4.png")}
                  className="phoneImg"
                  alt=""
                />
                <h5>PRODUCT NAME</h5>
                <div
                  style={{
                    width: "67px",
                    height: "24px",
                    gap: "10px",
                    borderBottomLeftRadius: "10px",
                    backgroundColor: "#3E9237",
                  }}
                  className="text-white text-center position-absolute top-0 end-0"
                >
                  New
                </div>

                <div className="d-flex align-items-center justify-content-between">
                  <span>(332)</span>
                  <div
                    style={{ width: "100px", height: "5px" }}
                    className="bg-body-secondary"
                  >
                    <div
                      style={{ width: "70px", height: "5px" }}
                      className="bg-primary"
                    ></div>
                  </div>
                  <div>
                    <i
                      style={{ color: "#FFC436" }}
                      className="fa-solid fa-star"
                    ></i>
                    <i
                      style={{ color: "#FFC436" }}
                      className="fa-solid fa-star"
                    ></i>
                    <i
                      style={{ color: "#FFC436" }}
                      className="fa-solid fa-star"
                    ></i>
                    <i
                      style={{ color: "#FFC436" }}
                      className="fa-solid fa-star"
                    ></i>
                    <i
                      style={{ color: "#FFC436" }}
                      className="fa-solid fa-star"
                    ></i>
                  </div>
                </div>
                <div className="d-flex mt-2">
                  <h5 style={{ color: "#E30613" }} className="me-3 fw-bold">
                    500 EGP
                  </h5>
                  <h5 className="text-decoration-line-through fw-bold">
                    800 EGP
                  </h5>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <i
                    style={{ color: "#E30613" }}
                    class="fa-solid fa-cart-shopping"
                  ></i>
                  <i class="fa-solid fa-rotate-right"></i>
                  <i class="fa-regular fa-heart"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3">
            <div className="sideinner p-4 border border-1 border-dark-subtle rounded-3 h-100">
              <div className="d-flex justify-content-between">
                <h6>The Latest Items</h6>
                <div>
                  <i className="fa-solid fa-angle-left me-3"></i>
                  <i
                    style={{ color: "#E30613" }}
                    className="fa-solid fa-angle-right"
                  ></i>
                </div>
              </div>
              <div
                style={{ height: "5px" }}
                className="bg-body-secondary w-100 mt-3 rounded-pill"
              >
                <div
                  style={{ height: "5px", width: "50%" }}
                  className="bg-primary rounded-pill"
                ></div>
              </div>

              <div className="inner d-flex mt-4">
                <div>
                  <img
                    src={require("../../image/product1.png")}
                    className="product"
                    alt=""
                  />
                </div>
                <div className="p-2">
                  <h6>Lorem ipsum dolor sit amet.</h6>
                  <div className="d-flex mt-2">
                    <p style={{ color: "#E30613" }} className=" me-3 fw-bold">
                      500 EGP
                    </p>
                    <p className="text-decoration-line-through fw-bold">
                      800 EGP
                    </p>
                  </div>
                </div>
              </div>
              <div className="inner d-flex mt-4">
                <div>
                  <img
                    src={require("../../image/product2.jpeg")}
                    className="product"
                    alt=""
                  />
                </div>
                <div className="p-2">
                  <h6>Lorem ipsum dolor sit amet.</h6>
                  <div className="d-flex mt-2">
                    <p style={{ color: "#E30613" }} className=" me-3 fw-bold">
                      500 EGP
                    </p>
                    <p className="text-decoration-line-through fw-bold">
                      800 EGP
                    </p>
                  </div>
                </div>
              </div>
              <div className="inner d-flex mt-4">
                <div>
                  <img
                    src={require("../../image/product3.png")}
                    className="product"
                    alt=""
                  />
                </div>
                <div className="p-2">
                  <h6>Lorem ipsum dolor sit amet.</h6>
                  <div className="d-flex mt-2">
                    <p style={{ color: "#E30613" }} className=" me-3 fw-bold">
                      500 EGP
                    </p>
                    <p className="text-decoration-line-through fw-bold">
                      800 EGP
                    </p>
                  </div>
                </div>
              </div>
              <div className="inner d-flex mt-4">
                <div>
                  <img
                    src={require("../../image/product4.png")}
                    className="product"
                    alt=""
                  />
                </div>
                <div className="p-2">
                  <h6>Lorem ipsum dolor sit amet.</h6>
                  <div className="d-flex mt-2">
                    <p style={{ color: "#E30613" }} className=" me-3 fw-bold">
                      500 EGP
                    </p>
                    <p className="text-decoration-line-through fw-bold">
                      800 EGP
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-9 h-100 gy-4">
            <div className="inner row">
              <h3 className="fw-bold col-lg-6">The Best Products</h3>
              <ul className="nav p-0 col-lg-6">
                <li className="nav-item">
                  <Link
                    style={{ color: "#E30613" }}
                    className="nav-link fw-bold active text-decoration-underline"
                    aria-current="page"
                    href="#"
                  >
                    All product
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link fw-bold text-black"
                    aria-current="page"
                    href="#"
                  >
                    All product
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link fw-bold text-black"
                    aria-current="page"
                    href="#"
                  >
                    All product
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link fw-bold text-black"
                    aria-current="page"
                    href="#"
                  >
                    All product
                  </Link>
                </li>
              </ul>
            </div>

            <div className="row mt-2 gy-4">
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="item position-relative text-center border border-1 border-dark-subtle rounded-3 p-3">
                  <img
                    src={require("../../image/phone1.png")}
                    className="bestProduct"
                    alt=""
                  />
                  <h5>PRODUCT NAME</h5>
                  <div
                    style={{
                      width: "67px",
                      height: "24px",
                      gap: "10px",
                      borderBottomLeftRadius: "10px",
                      backgroundColor: "#3E9237",
                    }}
                    className="text-white text-center position-absolute top-0 end-0"
                  >
                    New
                  </div>

                  <div className="d-flex align-items-center justify-content-between">
                    <span>(332)</span>

                    <div>
                      <i
                        style={{ color: "#FFC436" }}
                        className="fa-solid fa-star"
                      ></i>
                      <i
                        style={{ color: "#FFC436" }}
                        className="fa-solid fa-star"
                      ></i>
                      <i
                        style={{ color: "#FFC436" }}
                        className="fa-solid fa-star"
                      ></i>
                      <i
                        style={{ color: "#FFC436" }}
                        className="fa-solid fa-star"
                      ></i>
                      <i
                        style={{ color: "#FFC436" }}
                        className="fa-solid fa-star"
                      ></i>
                    </div>
                  </div>
                  <div className="d-flex mt-2">
                    <h5 style={{ color: "#E30613" }} className=" me-3 fw-bold">
                      500 EGP
                    </h5>
                    <h5 className="text-decoration-line-through fw-bold">
                      800 EGP
                    </h5>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <i
                      style={{ color: "#E30613" }}
                      class="fa-solid fa-cart-shopping "
                    ></i>
                    <i class="fa-solid fa-rotate-right"></i>
                    <i class="fa-regular fa-heart"></i>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="item position-relative text-center border border-1 border-dark-subtle rounded-3 p-3">
                  <img
                    src={require("../../image/product5.png")}
                    className="bestProduct"
                    alt=""
                  />
                  <h5>PRODUCT NAME</h5>
                  <div
                    style={{
                      width: "67px",
                      height: "24px",
                      gap: "10px",
                      borderBottomLeftRadius: "10px",
                      backgroundColor: "#3E9237",
                    }}
                    className="text-white text-center position-absolute top-0 end-0"
                  >
                    New
                  </div>

                  <div className="d-flex align-items-center justify-content-between">
                    <span>(332)</span>

                    <div>
                      <i
                        style={{ color: "#FFC436" }}
                        className="fa-solid fa-star"
                      ></i>
                      <i
                        style={{ color: "#FFC436" }}
                        className="fa-solid fa-star"
                      ></i>
                      <i
                        style={{ color: "#FFC436" }}
                        className="fa-solid fa-star"
                      ></i>
                      <i
                        style={{ color: "#FFC436" }}
                        className="fa-solid fa-star"
                      ></i>
                      <i
                        style={{ color: "#FFC436" }}
                        className="fa-solid fa-star"
                      ></i>
                    </div>
                  </div>
                  <div className="d-flex mt-2">
                    <h5 style={{ color: "#E30613" }} className=" me-3 fw-bold">
                      500 EGP
                    </h5>
                    <h5 className="text-decoration-line-through fw-bold">
                      800 EGP
                    </h5>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <i
                      style={{ color: "#E30613" }}
                      class="fa-solid fa-cart-shopping "
                    ></i>
                    <i class="fa-solid fa-rotate-right"></i>
                    <i class="fa-regular fa-heart"></i>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="item position-relative text-center border border-1 border-dark-subtle rounded-3 p-3">
                  <img
                    src={require("../../image/product6.png")}
                    className="bestProduct"
                    alt=""
                  />
                  <h5>PRODUCT NAME</h5>
                  <div
                    style={{
                      width: "67px",
                      height: "24px",
                      gap: "10px",
                      borderBottomLeftRadius: "10px",
                      backgroundColor:"#3E9237"
                    }}
                    className="text-white text-center position-absolute top-0 end-0"
                  >
                    New
                  </div>

                  <div className="d-flex align-items-center justify-content-between">
                    <span>(332)</span>

                    <div>
                    <i style={{color:"#FFC436"}} className="fa-solid fa-star"></i>
                    <i style={{color:"#FFC436"}} className="fa-solid fa-star"></i>
                    <i style={{color:"#FFC436"}} className="fa-solid fa-star"></i>
                    <i style={{color:"#FFC436"}} className="fa-solid fa-star"></i>
                    <i style={{color:"#FFC436"}} className="fa-solid fa-star"></i>
                  </div>
                  </div>
                  <div className="d-flex mt-2">
                    <h5 style={{ color: "#E30613" }} className=" me-3 fw-bold">
                      500 EGP
                    </h5>
                    <h5 className="text-decoration-line-through fw-bold">
                      800 EGP
                    </h5>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <i
                      style={{ color: "#E30613" }}
                      class="fa-solid fa-cart-shopping "
                    ></i>
                    <i class="fa-solid fa-rotate-right"></i>
                    <i class="fa-regular fa-heart"></i>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="item position-relative text-center border border-1 border-dark-subtle rounded-3 p-3">
                  <img
                    src={require("../../image/product7.png")}
                    className="bestProduct"
                    alt=""
                  />
                  <h5>PRODUCT NAME</h5>
                  <div
                    style={{
                      width: "67px",
                      height: "24px",
                      gap: "10px",
                      borderBottomLeftRadius: "10px",
                      backgroundColor:"#3E9237"
                    }}
                    className="text-white text-center position-absolute top-0 end-0"
                  >
                    New
                  </div>

                  <div className="d-flex align-items-center justify-content-between">
                    <span>(332)</span>

                    <div>
                    <i style={{color:"#FFC436"}} className="fa-solid fa-star"></i>
                    <i style={{color:"#FFC436"}} className="fa-solid fa-star"></i>
                    <i style={{color:"#FFC436"}} className="fa-solid fa-star"></i>
                    <i style={{color:"#FFC436"}} className="fa-solid fa-star"></i>
                    <i style={{color:"#FFC436"}} className="fa-solid fa-star"></i>
                  </div>
                  </div>
                  <div className="d-flex mt-2">
                    <h5 style={{ color: "#E30613" }} className=" me-3 fw-bold">
                      500 EGP
                    </h5>
                    <h5 className="text-decoration-line-through fw-bold">
                      800 EGP
                    </h5>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <i
                      style={{ color: "#E30613" }}
                      class="fa-solid fa-cart-shopping "
                    ></i>
                    <i class="fa-solid fa-rotate-right"></i>
                    <i class="fa-regular fa-heart"></i>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="item position-relative text-center border border-1 border-dark-subtle rounded-3 p-3">
                  <img
                    src={require("../../image/product8.png")}
                    className="bestProduct"
                    alt=""
                  />
                  <h5>PRODUCT NAME</h5>
                  <div
                    style={{
                      width: "67px",
                      height: "24px",
                      gap: "10px",
                      borderBottomLeftRadius: "10px",
                      backgroundColor:"#3E9237"
                    }}
                    className="text-white text-center position-absolute top-0 end-0"
                  >
                    New
                  </div>

                  <div className="d-flex align-items-center justify-content-between">
                    <span>(332)</span>

                    <div>
                    <i style={{color:"#FFC436"}} className="fa-solid fa-star"></i>
                    <i style={{color:"#FFC436"}} className="fa-solid fa-star"></i>
                    <i style={{color:"#FFC436"}} className="fa-solid fa-star"></i>
                    <i style={{color:"#FFC436"}} className="fa-solid fa-star"></i>
                    <i style={{color:"#FFC436"}} className="fa-solid fa-star"></i>
                  </div>
                  </div>
                  <div className="d-flex mt-2">
                    <h5 style={{ color: "#E30613" }} className=" me-3 fw-bold">
                      500 EGP
                    </h5>
                    <h5 className="text-decoration-line-through fw-bold">
                      800 EGP
                    </h5>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <i
                      style={{ color: "#E30613" }}
                      class="fa-solid fa-cart-shopping "
                    ></i>
                    <i class="fa-solid fa-rotate-right"></i>
                    <i class="fa-regular fa-heart"></i>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="item position-relative text-center border border-1 border-dark-subtle rounded-3 p-3">
                  <img
                    src={require("../../image/product9.png")}
                    className="bestProduct"
                    alt=""
                  />
                  <h5>PRODUCT NAME</h5>
                  <div
                    style={{
                      width: "67px",
                      height: "24px",
                      gap: "10px",
                      borderBottomLeftRadius: "10px",
                      backgroundColor:"#3E9237"
                    }}
                    className="text-white text-center position-absolute top-0 end-0"
                  >
                    New
                  </div>

                  <div className="d-flex align-items-center justify-content-between">
                    <span>(332)</span>

                    <div>
                    <i style={{color:"#FFC436"}} className="fa-solid fa-star"></i>
                    <i style={{color:"#FFC436"}} className="fa-solid fa-star"></i>
                    <i style={{color:"#FFC436"}} className="fa-solid fa-star"></i>
                    <i style={{color:"#FFC436"}} className="fa-solid fa-star"></i>
                    <i style={{color:"#FFC436"}} className="fa-solid fa-star"></i>
                  </div>
                  </div>
                  <div className="d-flex mt-2">
                    <h5 style={{ color: "#E30613" }} className=" me-3 fw-bold">
                      500 EGP
                    </h5>
                    <h5 className="text-decoration-line-through fw-bold">
                      800 EGP
                    </h5>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <i
                      style={{ color: "#E30613" }}
                      class="fa-solid fa-cart-shopping "
                    ></i>
                    <i class="fa-solid fa-rotate-right"></i>
                    <i class="fa-regular fa-heart"></i>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="item position-relative text-center border border-1 border-dark-subtle rounded-3 p-3">
                  <img
                    src={require("../../image/product10.png")}
                    className="bestProduct"
                    alt=""
                  />
                  <h5>PRODUCT NAME</h5>
                  <div
                    style={{
                      width: "67px",
                      height: "24px",
                      gap: "10px",
                      borderBottomLeftRadius: "10px",
                      backgroundColor:"#3E9237"
                    }}
                    className="text-white text-center position-absolute top-0 end-0"
                  >
                    New
                  </div>

                  <div className="d-flex align-items-center justify-content-between">
                    <span>(332)</span>

                    <div>
                    <i style={{color:"#FFC436"}} className="fa-solid fa-star"></i>
                    <i style={{color:"#FFC436"}} className="fa-solid fa-star"></i>
                    <i style={{color:"#FFC436"}} className="fa-solid fa-star"></i>
                    <i style={{color:"#FFC436"}} className="fa-solid fa-star"></i>
                    <i style={{color:"#FFC436"}} className="fa-solid fa-star"></i>
                  </div>
                  </div>
                  <div className="d-flex mt-2">
                    <h5 style={{ color: "#E30613" }} className=" me-3 fw-bold">
                      500 EGP
                    </h5>
                    <h5 className="text-decoration-line-through fw-bold">
                      800 EGP
                    </h5>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <i
                      style={{ color: "#E30613" }}
                      class="fa-solid fa-cart-shopping "
                    ></i>
                    <i class="fa-solid fa-rotate-right"></i>
                    <i class="fa-regular fa-heart"></i>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="item position-relative text-center border border-1 border-dark-subtle rounded-3 p-3">
                  <img
                    src={require("../../image/8daf86214d094dbe3cf8ce76ed141c53.png")}
                    className="bestProduct"
                    alt=""
                  />
                  <h5>PRODUCT NAME</h5>
                  <div
                    style={{
                      width: "67px",
                      height: "24px",
                      gap: "10px",
                      borderBottomLeftRadius: "10px",
                      backgroundColor:"#3E9237"
                    }}
                    className="text-white text-center position-absolute top-0 end-0"
                  >
                    New
                  </div>

                  <div className="d-flex align-items-center justify-content-between">
                    <span>(332)</span>

                    <div>
                    <i style={{color:"#FFC436"}} className="fa-solid fa-star"></i>
                    <i style={{color:"#FFC436"}} className="fa-solid fa-star"></i>
                    <i style={{color:"#FFC436"}} className="fa-solid fa-star"></i>
                    <i style={{color:"#FFC436"}} className="fa-solid fa-star"></i>
                    <i style={{color:"#FFC436"}} className="fa-solid fa-star"></i>
                  </div>
                  </div>
                  <div className="d-flex mt-2">
                    <h5 style={{ color: "#E30613" }} className=" me-3 fw-bold">
                      500 EGP
                    </h5>
                    <h5 className="text-decoration-line-through fw-bold">
                      800 EGP
                    </h5>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <i
                      style={{ color: "#E30613" }}
                      class="fa-solid fa-cart-shopping "
                    ></i>
                    <i class="fa-solid fa-rotate-right"></i>
                    <i class="fa-regular fa-heart"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row my-5 gy-4">
          <div className="col-lg-9">
            <div className="row d-flex text-center bg-body-secondary border border-1 border-dark-subtle rounded-3 p-3">
              <div className="col-lg-8">
                <img
                  src={require("../../image/tv1.png")}
                  className="w-75"
                  alt=""
                />
                <div className="row py-3 justify-content-center">
                  <div className="col-2">
                    <div className="innerImg border border-2 border-danger rounded-2">
                      <img
                        src={require("../../image/tv2.png")}
                        className="w-100 rounded-2"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="innerImg">
                      <img
                        src={require("../../image/tv2.png")}
                        className="w-100"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="innerImg">
                      <img
                        src={require("../../image/tv2.png")}
                        className="w-100"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="innerImg">
                      <img
                        src={require("../../image/tv2.png")}
                        className="w-100"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center">
                <h2 style={{ color: "#E30613" }} className="text-start fw-bold">
                  PRODUCT NAME
                </h2>

                <div className="d-flex align-items-center justify-content-between my-3">
                  <span>(332)</span>
                  <div
                    style={{ width: "100px", height: "5px" }}
                    className="bg-dark rounded-pill mx-3"
                  >
                    <div
                      style={{ width: "70px", height: "5px" }}
                      className="bg-primary rounded-pill"
                    ></div>
                  </div>
                  <div>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                  </div>
                </div>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Harum cumque sint earum voluptates unde officiis.
                </p>
                <div className="d-flex mt-2">
                  <h3 style={{ color: "#E30613" }} className="me-3 fw-bold">
                    500 EGP
                  </h3>
                  <h3 className="text-decoration-line-through fw-bold">
                    800 EGP
                  </h3>
                </div>
                <button
                  style={{ backgroundColor: "#E30613" }}
                  className="btn rounded-pill text-white fw-bold mt-3 px-5 py-3"
                >
                  Add to cart <i className="fa-solid fa-arrow-right ms-2"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="inner h-100 position-relative bg-body-secondary rounded-2 p-3 d-flex flex-column justify-content-center align-items-center">
              <div
                style={{
                  width: "67px",
                  height: "24px",
                  gap: "10px",
                  borderBottomLeftRadius: "10px",
                }}
                className="bg-success text-white text-center position-absolute top-0 end-0"
              >
                New
              </div>
              <p className="text-center text-black mt-3 mt-md-0">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla,
                molestias?
              </p>
              <div
                style={{
                  width: "168px",
                  height: "50px",
                  gap: "10px",
                  borderBottomLeftRadius: "40px",
                }}
                className="bg-warning text-white d-flex align-items-center justify-content-center"
              >
                <h4>15% off</h4>
              </div>
              <img
                src={require("../../image/shose.png")}
                className="w-75"
                alt=""
              />
              <button
                style={{ border: "1px solid #E30613" }}
                className="btn rounded-pill text-black px-5 mt-2"
              >
                Add to cart <i className="fa-solid fa-arrow-right ms-2"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3">
            <div className="sideinner p-4 border border-1 border-dark-subtle rounded-3 h-100">
              <div className="d-flex justify-content-between">
                <h4 className="fw-bold">Category</h4>
                <div>
                  <i className="fa-solid fa-angle-left me-3"></i>
                  <i
                    style={{ color: "#E30613" }}
                    className="fa-solid fa-angle-right"
                  ></i>
                </div>
              </div>
              <div
                style={{ height: "5px" }}
                className="bg-body-secondary w-100 mt-3 rounded-pill"
              >
                <div
                  style={{ height: "5px", width: "50%" }}
                  className="bg-primary rounded-pill"
                ></div>
              </div>

              <div className="inner mt-4">
                <h5
                  style={{ color: "#E30613" }}
                  className="fw-bold mb-5 text-decoration-underline"
                >
                  Grocery
                </h5>
                <h5 className="fw-bold mb-5">Grocery</h5>
                <h5 className="fw-bold mb-5">Grocery</h5>
                <h5 className="fw-bold mb-5">Grocery</h5>
                <h5 className="fw-bold mb-5">Grocery</h5>
                <h5 className="fw-bold mb-5">Grocery</h5>
                <h5 className="fw-bold mb-5">Grocery</h5>
              </div>
            </div>
          </div>

          <div className="col-lg-9 h-100">
            <div
              style={{ color: "#E30613", borderBottom: "2px solid #E30613" }}
              className="inner d-flex justify-content-between align-items-center pt-4"
            >
              <h3 className="fw-bold">Grocery</h3>
              <h5>(332)</h5>
            </div>

            <div className="row mt-5 gy-4">
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="item position-relative text-center border border-1 border-dark-subtle rounded-3 p-3">
                  <img
                    src={require("../../image/product1.png")}
                    className="groceryProduct"
                    alt=""
                  />
                  <h5>PRODUCT NAME</h5>
                  <div
                    style={{
                      height: "24px",
                      gap: "10px",
                      borderBottomLeftRadius: "10px",
                      backgroundColor:"#1450A3"
                    }}
                    className="text-white text-center position-absolute top-0 end-0 px-1"
                  >
                    Best seller
                  </div>

                  <div className="d-flex align-items-center justify-content-between">
                    <span>(332)</span>

                    <div>
                    <i style={{color:"#FFC436"}} className="fa-solid fa-star"></i>
                    <i style={{color:"#FFC436"}} className="fa-solid fa-star"></i>
                    <i style={{color:"#FFC436"}} className="fa-solid fa-star"></i>
                    <i style={{color:"#FFC436"}} className="fa-solid fa-star"></i>
                    <i style={{color:"#FFC436"}} className="fa-solid fa-star"></i>
                  </div>
                  </div>
                  <div className="d-flex mt-2">
                    <h5 style={{ color: "#E30613" }} className=" me-3 fw-bold">
                      500 EGP
                    </h5>
                    <h5 className="text-decoration-line-through fw-bold">
                      800 EGP
                    </h5>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <i
                      style={{ color: "#E30613" }}
                      class="fa-solid fa-cart-shopping "
                    ></i>
                    <i class="fa-solid fa-rotate-right"></i>
                    <i class="fa-regular fa-heart"></i>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="item position-relative text-center border border-1 border-dark-subtle rounded-3 p-3">
                  <img
                    src={require("../../image/product2.jpeg")}
                    className="groceryProduct"
                    alt=""
                  />
                  <h5>PRODUCT NAME</h5>
                  <div
                    style={{
                      width: "67px",
                      height: "24px",
                      gap: "10px",
                      borderBottomLeftRadius: "10px",
                    }}
                    className="bg-success text-white text-center position-absolute top-0 end-0"
                  >
                    New
                  </div>

                  <div className="d-flex align-items-center justify-content-between">
                    <span>(332)</span>

                  <div>
                    <i style={{color:"#FFC436"}} className="fa-solid fa-star"></i>
                    <i style={{color:"#FFC436"}} className="fa-solid fa-star"></i>
                    <i style={{color:"#FFC436"}} className="fa-solid fa-star"></i>
                    <i style={{color:"#FFC436"}} className="fa-solid fa-star"></i>
                    <i style={{color:"#FFC436"}} className="fa-solid fa-star"></i>
                  </div>
                  </div>
                  <div className="d-flex mt-2">
                    <h5 style={{ color: "#E30613" }} className=" me-3 fw-bold">
                      500 EGP
                    </h5>
                    <h5 className="text-decoration-line-through fw-bold">
                      800 EGP
                    </h5>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <i
                      style={{ color: "#E30613" }}
                      class="fa-solid fa-cart-shopping "
                    ></i>
                    <i class="fa-solid fa-rotate-right"></i>
                    <i class="fa-regular fa-heart"></i>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="item position-relative text-center border border-1 border-dark-subtle rounded-3 p-3">
                  <img
                    src={require("../../image/product3.png")}
                    className="groceryProduct"
                    alt=""
                  />
                  <h5>PRODUCT NAME</h5>
                  <div
                    style={{
                      width: "67px",
                      height: "24px",
                      gap: "10px",
                      borderBottomLeftRadius: "10px",
                      backgroundColor:"#FFC436"
                    }}
                    className="text-white text-center position-absolute top-0 end-0"
                  >
                    15% off
                  </div>

                  <div className="d-flex align-items-center justify-content-between">
                    <span>(332)</span>

                  <div>
                    <i style={{color:"#FFC436"}} className="fa-solid fa-star"></i>
                    <i style={{color:"#FFC436"}} className="fa-solid fa-star"></i>
                    <i style={{color:"#FFC436"}} className="fa-solid fa-star"></i>
                    <i style={{color:"#FFC436"}} className="fa-solid fa-star"></i>
                    <i style={{color:"#FFC436"}} className="fa-solid fa-star"></i>
                  </div>
                  </div>
                  <div className="d-flex mt-2">
                    <h5 style={{ color: "#E30613" }} className=" me-3 fw-bold">
                      500 EGP
                    </h5>
                    <h5 className="text-decoration-line-through fw-bold">
                      800 EGP
                    </h5>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <i
                      style={{ color: "#E30613" }}
                      class="fa-solid fa-cart-shopping "
                    ></i>
                    <i class="fa-solid fa-rotate-right"></i>
                    <i class="fa-regular fa-heart"></i>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="item position-relative text-center border border-1 border-dark-subtle rounded-3 p-3">
                  <img
                    src={require("../../image/product4.png")}
                    className="groceryProduct"
                    alt=""
                  />
                  <h5>PRODUCT NAME</h5>
                  <div
                    style={{
                      height: "24px",
                      gap: "10px",
                      borderBottomLeftRadius: "10px",
                      backgroundColor:"#E30613"
                    }}
                    className="text-white text-center position-absolute top-0 end-0 px-1"
                  >
                    Top rating
                  </div>

                  <div className="d-flex align-items-center justify-content-between">
                    <span>(332)</span>

                  <div>
                    <i style={{color:"#FFC436"}} className="fa-solid fa-star"></i>
                    <i style={{color:"#FFC436"}} className="fa-solid fa-star"></i>
                    <i style={{color:"#FFC436"}} className="fa-solid fa-star"></i>
                    <i style={{color:"#FFC436"}} className="fa-solid fa-star"></i>
                    <i style={{color:"#FFC436"}} className="fa-solid fa-star"></i>
                  </div>
                  </div>
                  <div className="d-flex mt-2">
                    <h5 style={{ color: "#E30613" }} className=" me-3 fw-bold">
                      500 EGP
                    </h5>
                    <h5 className="text-decoration-line-through fw-bold">
                      800 EGP
                    </h5>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <i
                      style={{ color: "#E30613" }}
                      class="fa-solid fa-cart-shopping "
                    ></i>
                    <i class="fa-solid fa-rotate-right"></i>
                    <i class="fa-regular fa-heart"></i>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="item text-center border border-1 border-dark-subtle rounded-3 p-3">
                  <img
                    src={require("../../image/3815e2c06e353446f05259a947df2606.png")}
                    className="groceryProduct"
                    alt=""
                  />
                  <h5>PRODUCT NAME</h5>

                  <div className="d-flex align-items-center justify-content-between">
                    <span>(332)</span>

                  <div>
                    <i style={{color:"#FFC436"}} className="fa-solid fa-star"></i>
                    <i style={{color:"#FFC436"}} className="fa-solid fa-star"></i>
                    <i style={{color:"#FFC436"}} className="fa-solid fa-star"></i>
                    <i style={{color:"#FFC436"}} className="fa-solid fa-star"></i>
                    <i style={{color:"#FFC436"}} className="fa-solid fa-star"></i>
                  </div>
                  </div>
                  <div className="d-flex mt-2">
                    <h5 style={{ color: "#E30613" }} className=" me-3 fw-bold">
                      500 EGP
                    </h5>
                    <h5 className="text-decoration-line-through fw-bold">
                      800 EGP
                    </h5>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <i
                      style={{ color: "#E30613" }}
                      class="fa-solid fa-cart-shopping "
                    ></i>
                    <i class="fa-solid fa-rotate-right"></i>
                    <i class="fa-regular fa-heart"></i>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="item text-center border border-1 border-dark-subtle rounded-3 p-3">
                  <img
                    src={require("../../image/product7.png")}
                    className="groceryProduct"
                    alt=""
                  />
                  <h5>PRODUCT NAME</h5>

                  <div className="d-flex align-items-center justify-content-between">
                    <span>(332)</span>

                  <div>
                    <i style={{color:"#FFC436"}} className="fa-solid fa-star"></i>
                    <i style={{color:"#FFC436"}} className="fa-solid fa-star"></i>
                    <i style={{color:"#FFC436"}} className="fa-solid fa-star"></i>
                    <i style={{color:"#FFC436"}} className="fa-solid fa-star"></i>
                    <i style={{color:"#FFC436"}} className="fa-solid fa-star"></i>
                  </div>
                  </div>
                  <div className="d-flex mt-2">
                    <h5 style={{ color: "#E30613" }} className=" me-3 fw-bold">
                      500 EGP
                    </h5>
                    <h5 className="text-decoration-line-through fw-bold">
                      800 EGP
                    </h5>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <i
                      style={{ color: "#E30613" }}
                      class="fa-solid fa-cart-shopping "
                    ></i>
                    <i class="fa-solid fa-rotate-right"></i>
                    <i class="fa-regular fa-heart"></i>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="item text-center border border-1 border-dark-subtle rounded-3 p-3">
                  <img
                    src={require("../../image/product8.png")}
                    className="groceryProduct"
                    alt=""
                  />
                  <h5>PRODUCT NAME</h5>

                  <div className="d-flex align-items-center justify-content-between">
                    <span>(332)</span>

                  <div>
                    <i style={{color:"#FFC436"}} className="fa-solid fa-star"></i>
                    <i style={{color:"#FFC436"}} className="fa-solid fa-star"></i>
                    <i style={{color:"#FFC436"}} className="fa-solid fa-star"></i>
                    <i style={{color:"#FFC436"}} className="fa-solid fa-star"></i>
                    <i style={{color:"#FFC436"}} className="fa-solid fa-star"></i>
                  </div>
                  </div>
                  <div className="d-flex mt-2">
                    <h5 style={{ color: "#E30613" }} className=" me-3 fw-bold">
                      500 EGP
                    </h5>
                    <h5 className="text-decoration-line-through fw-bold">
                      800 EGP
                    </h5>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <i
                      style={{ color: "#E30613" }}
                      class="fa-solid fa-cart-shopping "
                    ></i>
                    <i class="fa-solid fa-rotate-right"></i>
                    <i class="fa-regular fa-heart"></i>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="item text-center border border-1 border-dark-subtle rounded-3 p-3">
                  <img
                    src={require("../../image/product9.png")}
                    className="groceryProduct"
                    alt=""
                  />
                  <h5>PRODUCT NAME</h5>

                  <div className="d-flex align-items-center justify-content-between">
                    <span>(332)</span>

                  <div>
                    <i style={{color:"#FFC436"}} className="fa-solid fa-star"></i>
                    <i style={{color:"#FFC436"}} className="fa-solid fa-star"></i>
                    <i style={{color:"#FFC436"}} className="fa-solid fa-star"></i>
                    <i style={{color:"#FFC436"}} className="fa-solid fa-star"></i>
                    <i style={{color:"#FFC436"}} className="fa-solid fa-star"></i>
                  </div>
                  </div>
                  <div className="d-flex mt-2">
                    <h5 style={{ color: "#E30613" }} className=" me-3 fw-bold">
                      500 EGP
                    </h5>
                    <h5 className="text-decoration-line-through fw-bold">
                      800 EGP
                    </h5>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <i
                      style={{ color: "#E30613" }}
                      class="fa-solid fa-cart-shopping "
                    ></i>
                    <i class="fa-solid fa-rotate-right"></i>
                    <i class="fa-regular fa-heart"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row py-5 gy-4">
          <div className="col-lg-3 col-sm-6">
            <div className="sideinner p-4 border border-1 border-dark-subtle rounded-3 h-100">
              <div className="d-flex justify-content-between">
                <h5>Featured Product</h5>
                <div>
                  <i className="fa-solid fa-angle-left me-3"></i>
                  <i
                    style={{ color: "#E30613" }}
                    className="fa-solid fa-angle-right"
                  ></i>
                </div>
              </div>
              <div
                style={{ height: "5px" }}
                className="bg-body-secondary w-100 mt-3 rounded-pill"
              >
                <div
                  style={{ height: "5px", width: "50%" }}
                  className="bg-primary rounded-pill"
                ></div>
              </div>

              <div className="inner d-flex mt-4">
                <div className="me-2">
                  <img
                    src={require("../../image/product1.png")}
                    className="product"
                    alt=""
                  />
                </div>
                <div className="p-1">
                  <h6>Lorem ipsum dolor sit amet.</h6>
                  <div
                    style={{
                      width: "90px",
                      height: "24px",
                      gap: "10px",
                      borderBottomLeftRadius: "10px",
                    }}
                    className="bg-white text-white text-center ma"
                  ></div>
                  <div className="d-flex mt-2">
                    <p style={{ color: "#E30613" }} className="me-3 fw-semibold">
                      500 EGP
                    </p>
                    <p className="text-decoration-line-through fw-semibold">
                      800 EGP
                    </p>
                  </div>
                </div>
              </div>

              <div className="inner d-flex mt-4">
                <div className="me-2">
                  <img
                    src={require("../../image/product4.png")}
                    className="product"
                    alt=""
                  />
                </div>
                <div className="p-1">
                  <h6>Lorem ipsum dolor sit amet.</h6>
                  <div
                    style={{
                      width: "90px",
                      height: "24px",
                      gap: "10px",
                      borderBottomLeftRadius: "10px",
                    }}
                    className="bg-white text-white text-center m-auto"
                  ></div>
                  <div className="d-flex mt-2">
                    <p style={{ color: "#E30613" }} className="me-3 fw-semibold">
                      500 EGP
                    </p>
                    <p className="text-decoration-line-through fw-semibold">
                      800 EGP
                    </p>
                  </div>
                </div>
              </div>

              <div className="inner d-flex mt-4">
                <div className="me-2">
                  <img
                    src={require("../../image/product2.jpeg")}
                    className="product"
                    alt=""
                  />
                </div>
                <div className="p-1">
                  <h6>Lorem ipsum dolor sit amet.</h6>
                  <div
                    style={{
                      width: "90px",
                      height: "24px",
                      gap: "10px",
                      borderBottomLeftRadius: "10px",
                    }}
                    className="bg-primary text-white text-center m-auto"
                  >
                    Best seller
                  </div>
                  <div className="d-flex mt-2">
                    <p style={{ color: "#E30613" }} className="me-3 fw-semibold">
                      500 EGP
                    </p>
                    <p className="text-decoration-line-through fw-semibold">
                      800 EGP
                    </p>
                  </div>
                </div>
              </div>

              <div className="inner d-flex mt-4">
                <div className="me-2">
                  <img
                    src={require("../../image/product3.png")}
                    className="product"
                    alt=""
                  />
                </div>
                <div className="p-1">
                  <h6>Lorem ipsum dolor sit amet.</h6>
                  <div
                    style={{
                      width: "90px",
                      height: "24px",
                      gap: "10px",
                      borderBottomLeftRadius: "10px",
                    }}
                    className="bg-warning text-white text-center m-auto"
                  >
                    15% off
                  </div>
                  <div className="d-flex mt-2">
                    <p style={{ color: "#E30613" }} className="me-3 fw-semibold">
                      500 EGP
                    </p>
                    <p className="text-decoration-line-through fw-semibold">
                      800 EGP
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="sideinner p-4 border border-1 border-dark-subtle rounded-3 h-100">
              <div className="d-flex justify-content-between">
                <h5>Top rating</h5>
                <div>
                  <i className="fa-solid fa-angle-left me-3"></i>
                  <i
                    style={{ color: "#E30613" }}
                    className="fa-solid fa-angle-right"
                  ></i>
                </div>
              </div>
              <div
                style={{ height: "5px" }}
                className="bg-body-secondary w-100 mt-3 rounded-pill"
              >
                <div
                  style={{ height: "5px", width: "50%" }}
                  className="bg-primary rounded-pill"
                ></div>
              </div>

              <div className="inner d-flex mt-4">
                <div className="me-2">
                  <img
                    src={require("../../image/product1.png")}
                    className="product"
                    alt=""
                  />
                </div>
                <div className="p-1">
                  <h6>Lorem ipsum dolor sit amet.</h6>
                  <div
                    style={{
                      width: "90px",
                      height: "24px",
                      gap: "10px",
                      borderBottomLeftRadius: "10px",
                      backgroundColor: "#E30613",
                    }}
                    className="text-white text-center m-auto"
                  >
                    Top rating
                  </div>
                  <div className="d-flex mt-2">
                    <p style={{ color: "#E30613" }} className="me-3 fw-semibold">
                      500 EGP
                    </p>
                    <p className="text-decoration-line-through fw-semibold">
                      800 EGP
                    </p>
                  </div>
                </div>
              </div>

              <div className="inner d-flex mt-4">
                <div className="me-2">
                  <img
                    src={require("../../image/product4.png")}
                    className="product"
                    alt=""
                  />
                </div>
                <div className="p-1">
                  <h6>Lorem ipsum dolor sit amet.</h6>
                  <div
                    style={{
                      width: "90px",
                      height: "24px",
                      gap: "10px",
                      borderBottomLeftRadius: "10px",
                      backgroundColor: "#E30613",
                    }}
                    className="text-white text-center m-auto"
                  >
                    Top rating
                  </div>
                  <div className="d-flex mt-2">
                    <p style={{ color: "#E30613" }} className="me-3 fw-semibold">
                      500 EGP
                    </p>
                    <p className="text-decoration-line-through fw-semibold">
                      800 EGP
                    </p>
                  </div>
                </div>
              </div>

              <div className="inner d-flex mt-4">
                <div className="me-2">
                  <img
                    src={require("../../image/product2.jpeg")}
                    className="product"
                    alt=""
                  />
                </div>
                <div className="p-1">
                  <h6>Lorem ipsum dolor sit amet.</h6>
                  <div
                    style={{
                      width: "90px",
                      height: "24px",
                      gap: "10px",
                      borderBottomLeftRadius: "10px",
                      backgroundColor: "#E30613",
                    }}
                    className="text-white text-center m-auto"
                  >
                    Top rating
                  </div>
                  <div className="d-flex mt-2">
                    <p style={{ color: "#E30613" }} className="me-3 fw-semibold">
                      500 EGP
                    </p>
                    <p className="text-decoration-line-through fw-semibold">
                      800 EGP
                    </p>
                  </div>
                </div>
              </div>

              <div className="inner d-flex mt-4">
                <div className="me-2">
                  <img
                    src={require("../../image/product3.png")}
                    className="product"
                    alt=""
                  />
                </div>
                <div className="p-1">
                  <h6>Lorem ipsum dolor sit amet.</h6>
                  <div
                    style={{
                      width: "90px",
                      height: "24px",
                      gap: "10px",
                      borderBottomLeftRadius: "10px",
                      backgroundColor: "#E30613",
                    }}
                    className="text-white text-center m-auto"
                  >
                    Top rating
                  </div>
                  <div className="d-flex mt-2">
                    <p style={{ color: "#E30613" }} className="me-3 fw-semibold">
                      500 EGP
                    </p>
                    <p className="text-decoration-line-through fw-semibold">
                      800 EGP
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="sideinner p-4 border border-1 border-dark-subtle rounded-3 h-100">
              <div className="d-flex justify-content-between">
                <h5>Featured Product</h5>
                <div>
                  <i className="fa-solid fa-angle-left me-3"></i>
                  <i
                    style={{ color: "#E30613" }}
                    className="fa-solid fa-angle-right"
                  ></i>
                </div>
              </div>
              <div
                style={{ height: "5px" }}
                className="bg-body-secondary w-100 mt-3 rounded-pill"
              >
                <div
                  style={{ height: "5px", width: "50%" }}
                  className="bg-primary rounded-pill"
                ></div>
              </div>

              <div className="inner d-flex mt-4">
                <div className="me-2">
                  <img
                    src={require("../../image/product1.png")}
                    className="product"
                    alt=""
                  />
                </div>
                <div className="p-1">
                  <h6>Lorem ipsum dolor sit amet.</h6>
                  <div
                    style={{
                      width: "90px",
                      height: "24px",
                      gap: "10px",
                      borderBottomLeftRadius: "10px",
                    }}
                    className="bg-warning text-white text-center m-auto"
                  >
                    15% off
                  </div>
                  <div className="d-flex mt-2">
                    <p style={{ color: "#E30613" }} className="me-3 fw-semibold">
                      500 EGP
                    </p>
                    <p className="text-decoration-line-through fw-semibold">
                      800 EGP
                    </p>
                  </div>
                </div>
              </div>

              <div className="inner d-flex mt-4">
                <div className="me-2">
                  <img
                    src={require("../../image/product4.png")}
                    className="product"
                    alt=""
                  />
                </div>
                <div className="p-1">
                  <h6>Lorem ipsum dolor sit amet.</h6>
                  <div
                    style={{
                      width: "90px",
                      height: "24px",
                      gap: "10px",
                      borderBottomLeftRadius: "10px",
                    }}
                    className="bg-white text-white text-center m-auto"
                  ></div>
                  <div className="d-flex mt-2">
                    <p style={{ color: "#E30613" }} className="me-3 fw-semibold">
                      500 EGP
                    </p>
                    <p className="text-decoration-line-through fw-semibold">
                      800 EGP
                    </p>
                  </div>
                </div>
              </div>

              <div className="inner d-flex mt-4">
                <div className="me-2">
                  <img
                    src={require("../../image/product2.jpeg")}
                    className="product"
                    alt=""
                  />
                </div>
                <div className="p-1">
                  <h6>Lorem ipsum dolor sit amet.</h6>
                  <div
                    style={{
                      width: "90px",
                      height: "24px",
                      gap: "10px",
                      borderBottomLeftRadius: "10px",
                    }}
                    className="bg-white text-white text-center ma"
                  ></div>
                  <div className="d-flex mt-2">
                    <p style={{ color: "#E30613" }} className="me-3 fw-semibold">
                      500 EGP
                    </p>
                    <p className="text-decoration-line-through fw-semibold">
                      800 EGP
                    </p>
                  </div>
                </div>
              </div>

              <div className="inner d-flex mt-4">
                <div className="me-2">
                  <img
                    src={require("../../image/product3.png")}
                    className="product"
                    alt=""
                  />
                </div>
                <div className="p-2">
                  <h6>Lorem ipsum dolor sit amet.</h6>
                  <div
                    style={{
                      width: "90px",
                      height: "24px",
                      gap: "10px",
                      borderBottomLeftRadius: "10px",
                    }}
                    className="bg-white text-white text-center m-auto"
                  ></div>
                  <div className="d-flex mt-2">
                    <p style={{ color: "#E30613" }} className="me-3 fw-semibold">
                      500 EGP
                    </p>
                    <p className="text-decoration-line-through fw-semibold">
                      800 EGP
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="sideinner px-3 border border-1 border-dark-subtle rounded-3 py-5 h-100">
              <div className="inner mt-4 d-flex flex-column justify-content-center align-items-center h-100">
                <h6 className="text-center">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Inventore, minima!
                </h6>
                <div
                  style={{
                    width: "168px",
                    height: "50px",
                    gap: "10px",
                    borderBottomLeftRadius: "20px",
                  }}
                  className="bg-warning text-white d-flex align-items-center justify-content-center my-3"
                >
                  <h4>15% off</h4>
                </div>

                <div className="my-4">
                  <img
                    src={require("../../image/makeup.png")}
                    className="w-100"
                    alt=""
                  />
                </div>

                <button
                  style={{ border: "1px solid #E30613" }}
                  className="btn px-5 rounded-pill text-black"
                >
                  Add to cart <i className="fa-solid fa-arrow-right ms-2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row my-5">
          <div
            style={{
              backgroundImage: `url(${require("../../image/bgmain.jpeg")})`,
            }}
            className="row d-flex text-center border border-1 border-dark-subtle rounded-3 p-3"
          >
            <div className="col-lg-4">
              <div className="inner p-5">
                <h4 className="text-white text-start">Enjoy</h4>
                <h2 className="text-warning fw-bold text-start">
                  PRODUCT NAME
                </h2>
                <p className="text-start text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus sit accusantium, corporis voluptate doloribus
                  dolorem.
                </p>

                <div
                  style={{
                    width: "202px",
                    height: "55px",
                    gap: "10px",
                    borderBottomLeftRadius: "30px",
                  }}
                  className="bg-warning text-black mb-3 text-center d-flex align-items-center justify-content-center m-auto"
                >
                  <h3>15% off</h3>
                </div>

                <button className="btn btn-outline-warning rounded-pill text-white fw-bold mt-3 px-5 py-3">
                  Add to cart <i className="fa-solid fa-arrow-right ms-2"></i>
                </button>
              </div>
            </div>

            <div className="col-lg-8">
              <img
                src={require("../../image/LG.png")}
                className="w-75"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="row">
          <h3 className="fw-bold mb-3">Our Beloved Client</h3>
          <SliderComponent />
        </div>
      </div>
    </>
  );
};

export default Home;
