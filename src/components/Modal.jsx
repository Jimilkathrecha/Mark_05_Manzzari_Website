import React, { useState } from "react";
import Select from "react-select";
import { addStoreAction } from "../redux/actions/store";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { signUpStoreSchema } from "../components/schema";

export const Modal = ({ isOpenModal, setIsOpenModal, isOpenModalLogIn, setIsOpenModalLogIn }) => {


  const [RegisterStoreModal, setRegisterStoreModal] = useState(false)


  const [selectedOption, setSelectedOption] = useState(null);


  // const [isPasswordVisible, setIsPasswordVisible] = useState(false);


  const [active, setactive] = useState("register");

  const initialStoreDetails = {
    title: "",
    first_address: "",
    second_address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    owner: "",
    store_number: "",
    refferal_code: "",
    phone_no: "",
  };
  // const [storeDetails, setStoreDetails] = useState(initialStoreDetails);
  const dispatch = useDispatch();
  const handleChangeStoreDetails = (e) => {
    const { name, value } = e.target;
    formik.setFieldValue(name, value); // Use formik's setFieldValue to update the field
    // setStoreDetails({ ...storeDetails, [name]: value });
  };
  const handleFetchLocation = async () => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?postalcode=${formik?.values?.pincode}&format=json`
      );

      if (response.ok) {
        const data = await response.json();
        const convertedObject = data.reduce((result, item) => {
          result[item.name] = item;
          return result;
        }, {});
        console.log("convertedObject", convertedObject);

        if (data.length > 0) {
          formik.setValues({
            ...formik?.values,
            city: convertedObject?.[formik?.values?.pincode]?.display_name?.split(
              ","
            )[1],

            state:
              convertedObject?.[formik?.values?.pincode]?.display_name?.split(
                ","
              )[2],
          });
        } else {
          formik.setValues({
            ...formik?.values,
            city: "Not Found",
            state: "Not Found",
            country: "Not Found",
          });
        }
      } else {
        console.error("Error fetching data");
        formik.setValues({
          ...formik?.values,
          city: "",
          state: "",
          country: "",
        });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      formik.setValues({
        ...formik?.values,
        city: "",
        state: "",
        country: "",
      });
    }
  };

  const handleSubmitStore = (e) => {
    // e.preventDefault();
    const body = {
      title: formik?.values?.title,
      first_address: formik?.values?.first_address,
      second_address: formik?.values?.second_address,
      city: formik?.values?.city,
      state: formik?.values?.state,
      country: formik?.values?.country,
      pincode: formik?.values?.pincode,
      owner: formik?.values?.owner,
      store_number: formik?.values?.store_number,
      refferal_code: formik?.values?.refferal_code,
      phone_no: formik?.values?.phone_no,
    };

    dispatch(addStoreAction(body));
    formik?.setValues({
      title: "",
      first_address: "",
      second_address: "",
      city: "",
      state: "",
      country: "",
      pincode: "",
      owner: "",
      store_number: "",
      refferal_code: "",
      phone_no: "",
    })
  };



  const formik = useFormik({
    initialValues: initialStoreDetails,
    validationSchema: signUpStoreSchema,
    onSubmit: (values) => {
      handleSubmitStore(values);
      formik.resetForm();
    },
  });

  return (
    <>
      {/* Login Form */}
      <div
        className={`modal ${isOpenModalLogIn ? "d-block" : "d-none"} `}
      // id="loginstore"
      // tabIndex="-1"
      // aria-labelledby="loginstoreLabel"
      // aria-hidden="false"
      >
        <div className="modal-dialog">
          <div className="modal-content position-relative">
            <button
              type="button"
              className="close-btn bs-red position-absolute top-0 start-100 translate-middle rounded-pill"
              // data-bs-dismiss="modal"
              // aria-label="Close"
              onClick={() => { setIsOpenModalLogIn(false) }}

            >
              <i className="fa-solid fa-xmark fs-8 leading- px-[8px] py-[5px] tx-white"></i>
            </button>
            <div className="modal-body">
              <div className="modal-body d-flex">
                <div className="myform p-4 rounded-3 pe-lg-5 rounded-lg-end-0 mx-auto form">
                  <div className="tx-marun my-2 fs-2 text-center">
                    <h1>
                      <b>Login Or Signup</b>
                    </h1>
                  </div>
                  <form onSubmit={formik.handleSubmit}>
                    <img
                      className="w-100 mt-3"
                      src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw68b03088/login-pop-up.jpg"
                      alt=""
                    />
                    <div className="form-group h-fit align-items-center gap-2 d-flex mt-4">
                      <Select
                        className="py-0 w-25 h-100"
                        placeholder="+91"
                        Width="500px"
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                      />
                      <input
                        type="text"
                        name="username"
                        className="pe-4 p-2 rounded-3 border d-flex w-100"
                        id="username"
                        placeholder="Enter Mobile number"
                        onBlur={formik.handleBlur}
                        value={formik.values?.username}
                      />
                      {formik.touched.username && formik.errors.username && (
                        <div className="invalid-feedback">{formik.errors.username}</div>
                      )}
                    </div>
                    <div className="form-check mt-4">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        Remember Me
                      </label>
                    </div>
                    <div className="form-group mt-3">
                      <p className="text-center fs-8" id="signup">
                        <b>
                          By continuing, I agree to
                          <span className="tx-marun pointer">
                            {" "}
                            Terms of Use{" "}
                          </span>
                          &
                          <span className="tx-marun pointer">
                            Privacy Policy
                          </span>
                        </b>
                      </p>
                    </div>

                    <div className="col-md-12 text-center mt-5 ">
                      <button
                        type="submit"
                        className="rounded-2 border-0 text-white bs-marun px-3 py-1 fs-5"
                      >
                        <b>Login</b>
                      </button>
                    </div>
                  </form>
                </div>
                <div
                  style={{ minWidth: "200px", marginLeft: "-30px" }}
                  className="h-fit d-none d-lg-block rounded-3 position-relative z-3 overflow-hidden rounded-start-0"
                >
                  <p
                    type="button"
                    className="close-btn bs-trans position-absolute top-0 end-0 mx-3 my-2"
                    // data-bs-dismiss="modal"
                    // aria-label="Close"
                    onClick={() => { setIsOpenModalLogIn(false) }}
                  >
                    <i className="fa-solid fa-xmark tx-white"></i>
                  </p>
                  <img
                    style={{ maxHeight: "500px" }}
                    width={"250px"}
                    src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwcaaa047f/login_signup/Mask-Group.png"
                    alt=""
                  />
                </div>
              </div>
              {/* Login end section */}
            </div>
          </div>
        </div>
      </div>
      {/* Login Form */}

      {/* Register Form */}
      <div
        className={`modal ${isOpenModal ? "d-block" : "d-none"}`}
      // id="registerstore"
      // tabIndex="-1"
      // aria-labelledby="registerstoreLabel"
      // aria-hidden="true"
      >
        <div className="modal-dialog  modal-dialog-centered">
          <div className="modal-content position-relative">
            {/* Register Start section */}
            {active === "register" && (
              <>
                <button
                  type="button"
                  className="close-btn bs-red position-absolute top-0 start-100 translate-middle rounded-pill"
                  onClick={() => { setIsOpenModal(false) }}
                // data-bs-dismiss="modal"
                // aria-label="Close"
                >
                  <i className="fa-solid fa-xmark fs-8 leading- px-[8px] py-[5px] tx-white"></i>
                </button>

                {/* <div className="modal-body">
                                    <div className="myform p-3 rounded-3 rounded-lg-end-0 mx-auto form">
                                        <div className="tx-marun my-2 fs-2 text-center">
                                            <h1>
                                                <b>Register your store</b>
                                            </h1>
                                        </div>
                                        <form>
                                            <div className="form-group align-items-cente mt-4">
                                                <input
                                                    type="text"
                                                    className="pe-4 p-2 rounded-3 border d-flex w-100"
                                                    placeholder="Store Title"
                                                />
                                            </div>

                                            <div className="form-group align-items-cente mt-3">
                                                <textarea
                                                    type="text"
                                                    className="pe-4 p-2 rounded-3 border d-flex w-100"
                                                    placeholder="Address 1"
                                                />
                                            </div>

                                            <div className="form-group align-items-cente mt-3">
                                                <textarea
                                                    type="text"
                                                    className="pe-4 p-2 rounded-3 border d-flex w-100"
                                                    placeholder="Address 2"
                                                />
                                            </div>

                                            <div className='flex gap-3 h-fit align-items-center mt-3'>
                                                <div className="form-group w-50 align-items-cente">
                                                    <Select
                                                        className="py-0 col h-100"
                                                        placeholder="Select State"
                                                        Width="500px"
                                                        defaultValue={selectedOption}
                                                        onChange={setSelectedOption}
                                                        options={state}
                                                    />
                                                </div>

                                                <div className="form-group w-50 align-items-cente">
                                                    <input
                                                        type="number"
                                                        className="pe-4 p-2 rounded-3 border d-flex w-100"
                                                        placeholder="Pincode"
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-group w-100 mt-3 align-items-cente">
                                                <input
                                                    type="name"
                                                    className="pe-4 p-2 rounded-3 border d-flex w-100"
                                                    placeholder="Store owner name"
                                                />
                                            </div>

                                            <div className="form-group w-100 mt-3 align-items-cente">
                                                <input
                                                    type="number"
                                                    className="pe-4 p-2 rounded-3 border d-flex w-100"
                                                    placeholder="Store number"
                                                />
                                            </div>

                                            <div className="form-group w-100 mt-3 align-items-cente">
                                                <input
                                                    type="number"
                                                    className="pe-4 p-2 rounded-3 border d-flex w-100"
                                                    placeholder="Reffral code"
                                                />
                                            </div>


                                            <div className="form-group h-fit align-items-center gap-2 d-flex mt-3">
                                                <Select
                                                    className="py-0 w-25 h-100"
                                                    placeholder="+91"
                                                    Width="500px"
                                                    defaultValue={selectedOption}
                                                    onChange={setSelectedOption}
                                                    options={countrycode}
                                                />
                                                <input
                                                    type="number"
                                                    className="pe-4 p-2 rounded-3 border d-flex w-100"
                                                    placeholder="Enter Mobile number" />
                                            </div>

                                            <div className="form-group w-100 mt-3 align-items-cente relative">
                                                <input
                                                    type={isPasswordVisible ? "text" : "password"}
                                                    className="pe-4 p-2 rounded-3 border d-flex w-100"
                                                    placeholder="password"
                                                />
                                                <div
                                                    className="position-absolute"
                                                    style={{ right: "5%", top: "20%" }}
                                                    onClick={handlePasswordVisibility}
                                                >
                                                    {isPasswordVisible ? (
                                                        <i className="fa-regular fa-eye-slash "></i>
                                                    ) : (
                                                        <i className="fa-regular fa-eye "></i>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="form-group w-100 mt-3 align-items-cente relative">
                                                <input
                                                    type={isPasswordVisible ? "text" : "password"}
                                                    className="pe-4 p-2 rounded-3 border d-flex w-100"
                                                    placeholder="password" />
                                                <div
                                                    className="position-absolute"
                                                    style={{ right: "5%", top: "20%" }}
                                                    onClick={handlePasswordVisibility}
                                                >
                                                    {isPasswordVisible ? (
                                                        <i className="fa-regular fa-eye-slash "></i>
                                                    ) : (
                                                        <i className="fa-regular fa-eye "></i>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="form-group mt-3">
                                                <p className="text-center fs-8" id="signup">
                                                    <b>
                                                        By continuing, I agree to
                                                        <span className="tx-marun pointer"> Terms of Use </span>&
                                                        <span className="tx-marun pointer"> Privacy Policy</span>
                                                    </b>
                                                </p>
                                            </div>

                                            <div className="col-md-12 text-center mt-5 ">
                                                <button type="submit"
                                                    onClick={function () {
                                                        setactive("login");
                                                        handleClick();
                                                    }}
                                                    className="rounded-2 border-0 text-white bs-marun px-3 py-1 fs-5">
                                                    <b>Approve Request</b>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div> */}

                <div className="modal-body">
                  <div className="myform p-3 rounded-3 rounded-lg-end-0 mx-auto form">
                    <div className="tx-marun my-2 fs-2 text-center">
                      <h1>
                        <b>Register your store</b>
                      </h1>
                    </div>
                    <form onSubmit={formik.handleSubmit}>
                      <div className="form-group align-items-cente mt-4">
                        <input
                          type="text"
                          name="title"
                          className={`form-control ${formik.touched?.title && formik.errors?.title ? "is-invalid" : ""}`}
                          // className="pe-4 p-2 rounded-3 border d-flex w-100"
                          placeholder="Store Title"
                          onBlur={formik.handleBlur}
                          value={formik.values?.title}
                          onChange={handleChangeStoreDetails}
                        />
                        {formik.touched.title && formik.errors.title && (
                          <div className="invalid-feedback">{formik.errors.title}</div>
                        )}
                      </div>

                      <div className="form-group align-items-cente mt-3">
                        <textarea
                          className={`form-control ${formik.touched?.first_address && formik.errors?.first_address ? "is-invalid" : ""}`}
                          type="text"
                          name="first_address"
                          // className="pe-4 p-2 rounded-3 border d-flex w-100"
                          placeholder="Address 1"
                          onBlur={formik.handleBlur}
                          value={formik.values?.first_address}
                          onChange={handleChangeStoreDetails}
                        />
                        {formik.touched.first_address && formik.errors.first_address && (
                          <div className="invalid-feedback">{formik.errors.first_address}</div>
                        )}
                      </div>

                      <div className="form-group align-items-cente mt-3">
                        <textarea
                          type="text"
                          name="second_address"
                          className={`form-control ${formik.touched?.name && formik.errors?.name ? "is-invalid" : ""}`}
                          // className="pe-4 p-2 rounded-3 border d-flex w-100"
                          placeholder="Address 2"
                          onChange={handleChangeStoreDetails}
                          onBlur={formik.handleBlur}
                          value={formik.values?.second_address}
                        />
                        {formik.touched.second_address && formik.errors.second_address && (
                          <div className="invalid-feedback">{formik.errors.second_address}</div>
                        )}
                      </div>

                      <div className="flex gap-3 h-fit align-items-center mt-3">
                        <div className="form-group w-50 align-items-cente">
                          <input
                            className={`form-control ${formik.touched?.pincode && formik.errors?.pincode ? "is-invalid" : ""}`}
                            type="number"
                            name="pincode"
                            // className="pe-4 p-2 rounded-3 border d-flex w-100"
                            placeholder="Pincode"
                            onBlur={() => handleFetchLocation()}
                            onChange={handleChangeStoreDetails}
                            value={formik.values?.pincode}
                          />
                          {formik.touched.pincode && formik.errors.pincode && (
                            <div className="invalid-feedback">{formik.errors.pincode}</div>
                          )}
                        </div>
                        <div className="form-group w-50 align-items-cente">
                          <input
                            className={`form-control ${formik.touched?.city && formik.errors?.city ? "is-invalid" : ""}`}
                            // className="pe-4 p-2 rounded-3 border d-flex w-100"
                            placeholder="City"
                            width="500px"
                            onBlur={formik.handleBlur}
                            value={formik.values?.city}
                            // value={storeDetails?.city}
                            disabled={true}
                          />
                          {/* {formik.touched.city && formik.errors.city && (
                            <div className="invalid-feedback">{formik.errors.city}</div>
                          )} */}
                        </div>
                      </div>

                      <div className="flex gap-3 h-fit align-items-center mt-3">
                        <div className="form-group w-50 align-items-cente">
                          <input
                            className={`form-control ${formik.touched?.state && formik.errors?.state ? "is-invalid" : ""}`}
                            // className="pe-4 p-2 rounded-3 border d-flex w-100"
                            placeholder="State"
                            width="500px"
                            disabled={true}
                            onBlur={formik.handleBlur}
                            value={formik.values?.state}
                          // value={storeDetails?.state}
                          />
                          {/* {formik.touched.state && formik.errors.state && (
                            <div className="invalid-feedback">{formik.errors.state}</div>
                          )} */}
                        </div>
                      </div>

                      <div className="form-group w-100 mt-3 align-items-cente">
                        <input
                          type="name"
                          name="owner"
                          className={`form-control ${formik.touched?.owner && formik.errors?.owner ? "is-invalid" : ""}`}
                          // className="pe-4 p-2 rounded-3 border d-flex w-100"
                          placeholder="Store owner name"
                          onChange={handleChangeStoreDetails}
                          onBlur={formik.handleBlur}
                          value={formik.values?.owner}
                        />
                        {formik.touched.owner && formik.errors.owner && (
                          <div className="invalid-feedback">{formik.errors.owner}</div>
                        )}
                      </div>

                      <div className="form-group w-100 mt-3 align-items-cente">
                        <input
                          type="number"
                          name="store_number"
                          className={`form-control ${formik.touched?.store_number && formik.errors?.store_number ? "is-invalid" : ""}`}
                          // className="pe-4 p-2 rounded-3 border d-flex w-100"
                          placeholder="Store number"
                          onChange={handleChangeStoreDetails}
                          onBlur={formik.handleBlur}
                          value={formik.values?.store_number}
                          min={0}
                        />
                        {formik.touched.store_number && formik.errors.store_number && (
                          <div className="invalid-feedback">{formik.errors.store_number}</div>
                        )}
                      </div>

                      <div className="form-group w-100 mt-3 align-items-cente">
                        <input
                          type="number"
                          name="refferal_code"
                          className={`form-control ${formik.touched?.name && formik.errors?.name ? "is-invalid" : ""}`}
                          // className="pe-4 p-2 rounded-3 border d-flex w-100"
                          placeholder="Reffral code"
                          onChange={handleChangeStoreDetails}
                          onBlur={formik.handleBlur}
                          value={formik.values?.refferal_code}
                          min={0}
                        />
                        {formik.touched.refferal_code && formik.errors.refferal_code && (
                          <div className="invalid-feedback">{formik.errors.refferal_code}</div>
                        )}
                      </div>

                      <div className="form-group h-fit align-items-center gap-2 d-flex mt-3">
                        {/* <Select
                          className="py-0 w-25 h-100"
                          placeholder="+91"
                          width="500px"
                        /> */}
                        <input
                          type="number"
                          name="phone_no"
                          className={`form-control ${formik.touched?.phone_no && formik.errors?.phone_no ? "is-invalid" : ""}`}
                          // className="pe-4 p-2 rounded-3 border d-flex w-100"
                          placeholder="Enter Mobile number"
                          onChange={handleChangeStoreDetails}
                          onBlur={formik.handleBlur}
                          value={formik.values?.phone_no}
                        // value={storeDetails?.phone_no}
                        />
                        {formik.touched.phone_no && formik.errors.phone_no && (
                          <div className="invalid-feedback">{formik.errors.phone_no}</div>
                        )}
                      </div>
                      <div className="form-group mt-3">
                        <p className="text-center fs-8" id="signup">
                          <b>
                            By continuing, I agree to
                            <span className="tx-marun pointer">
                              {" "}
                              Terms of Use{" "}
                            </span>
                            <span className="tx-marun pointer">
                              Privacy Policy
                            </span>
                          </b>
                        </p>
                      </div>

                      <div className="col-md-12 text-center mt-5 ">
                        <button
                          type="submit"
                          className="rounded-2 border-0 text-white bs-marun px-3 py-1 fs-5"
                          onClick={(e) => handleSubmitStore(formik?.values)}
                        >
                          <b>Regtister Store</b>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </>
            )}
            {/* Register end section */}

            {/* Login Start section */}
            {active === "login" && (
              <div className="modal-body d-flex p-0 w-[550px]">
                <div className="myform p-4 rounded-3 pe-lg-5 rounded-lg-end-0 mx-auto form">
                  <div className="tx-marun my-2 fs-2 text-center">
                    <h1>
                      <b>Login Or Signup</b>
                    </h1>
                  </div>
                  <form>
                    <img
                      className="w-100 mt-3"
                      src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw68b03088/login-pop-up.jpg"
                      alt=""
                    />
                    <div className="form-group h-fit align-items-center gap-2 d-flex mt-4">
                      <Select
                        className="py-0 w-25 h-100"
                        placeholder="+91"
                        Width="500px"
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                      />
                      <input
                        type="number"
                        name="username"
                        className="pe-4 p-2 rounded-3 border d-flex w-100"
                        id="username"
                        placeholder="Enter Mobile number"
                      />
                    </div>
                    <div className="form-check mt-4">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        Remember Me
                      </label>
                    </div>
                    <div className="form-group mt-3">
                      <p className="text-center fs-8" id="signup">
                        <b>
                          By continuing, I agree to
                          <span className="tx-marun pointer">
                            {" "}
                            Terms of Use{" "}
                          </span>
                          &
                          <span className="tx-marun pointer">
                            Privacy Policy
                          </span>
                        </b>
                      </p>
                    </div>

                    <div className="col-md-12 text-center mt-5 ">
                      <button
                        onClick={function () {
                          setactive("verifypassword");
                          // handleClick();
                        }}
                        type="submit"
                        className="rounded-2 border-0 text-white bs-marun px-3 py-1 fs-5"
                      >
                        <b>Login</b>
                      </button>
                    </div>
                  </form>
                </div>
                <div
                  style={{ minWidth: "200px", marginLeft: "-30px" }}
                  className="h-fit d-none d-lg-block rounded-3 position-relative z-3 overflow-hidden rounded-start-0"
                >
                  <p
                    type="button"
                    className="close-btn bs-trans position-absolute top-0 end-0 mx-3 my-2"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <i className="fa-solid fa-xmark tx-white"></i>
                  </p>
                  <img
                    style={{ maxHeight: "500px" }}
                    width={"250px"}
                    src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwcaaa047f/login_signup/Mask-Group.png"
                    alt=""
                  />
                </div>
              </div>
            )}
            {/* Login end section */}

            {/* Otp section */}
            {active === "verifypassword" && (
              <div className="modal-body d-flex ">
                <div className="myform w-100 p-4 rounded-3 rounded-lg-end-0 mx-auto form">
                  <div className=" my-3 mt-4 fs-2 tx-marun text-center">
                    <h2>
                      <b>Verify Mobile OTP</b>
                    </h2>
                  </div>
                  <form>
                    <p className="text-center m-0 mt-4 fs-7">
                      <b>OTP Sent to mobile number ******5559</b>
                    </p>
                    <p className="text-center tx-grey">
                      <b>Enter OTP</b>
                    </p>
                    <div className="w-100 mt-4 d-flex gap-3">
                      <input
                        placeholder="_"
                        type="text"
                        className="w-100 border border-marun rounded-3 text-center fs-5"
                        name="username"
                        id="username"
                      />
                      <input
                        placeholder="_"
                        type="text"
                        className="w-100 border border-marun rounded-3 text-center fs-5"
                        name="username"
                        id="username"
                      />
                      <input
                        placeholder="_"
                        type="text"
                        className="w-100 border border-marun rounded-3 text-center fs-5"
                        name="username"
                        id="username"
                      />
                      <input
                        placeholder="_"
                        type="text"
                        className="w-100 border border-marun rounded-3 text-center fs-5"
                        name="username"
                        id="username"
                      />
                      <input
                        placeholder="_"
                        type="text"
                        className="w-100 border border-marun rounded-3 text-center fs-5"
                        name="username"
                        id="username"
                      />
                      <input
                        placeholder="_"
                        type="text"
                        className="w-100 border border-marun rounded-3 text-center fs-5"
                        name="username"
                        id="username"
                      />
                    </div>

                    <p className="text-center tx-grey mt-4 fs-6">
                      <b>
                        Haven't received the OTP ?{" "}
                        <span className="pointer tx-marun">Resend</span>
                      </b>
                    </p>
                    <p className="text-center tx-grey mt-4 fs-7">
                      <b>
                        By continuing, I agree to
                        <span className="pointer tx-marun">Terms of Use</span> &
                        <span className="pointer tx-marun">
                          {" "}
                          Privacy Policy{" "}
                        </span>
                      </b>
                    </p>

                    <div className="col-md-12 text-center mt-5 ">
                      <button
                        onClick={function () {
                          setactive("register");
                          // handleClick();
                        }}
                        type="submit"
                        className="rounded-2 border-0 tx-white py-2 bs-marun px-3 fs-6"
                      >
                        <b>Verify OTP</b>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
            {/* Otp end section */}
          </div>
        </div>
      </div>
      {/* Register Form */}
     
    </>
  );
};
