import React from "react";

export default function Loginmodel() {
  return (
    <>
      <div id="common-button">
        <button
          className="btn secondary-btn false custom-btn"
          id="loginButton"
          data-toggle="modal"
          data-target="#loginModal"
          /*data-url="/on/demandware.store/Sites-Tanishq-Site/en_IN/CustomerForm-Get"*/ fdprocessedid="7nqty"
        >
          <a href="#loginModal">
            <span className="">Log In</span>
          </a>
        </button>
      </div>

      <div
        className="modal login-pop-modal p-0 show"
        data-keyboard="true"
        data-backdrop="static"
        id="loginModal"
        tabIndex="-1" /*style="display: block; padding-right: 17px;" aria-modal="true"*/
      >
        <div className="modal-dialog modal-dialog-centered loginmodalcenter registermodalcenter">
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                className="registerpopup-close loginpopup-close btn-close"
                data-bs-dismiss="modal"
                fdprocessedid="hq1k1k"
              >
                <img
                  src="/on/demandware.static/Sites-Tanishq-Site/-/default/dw31377196/images/Group 14430.svg"
                  alt="cross icon not load"
                  width="34"
                  height="34"
                  className="mx-auto d-sm-none d-md-block"
                />
                <img
                  src="/on/demandware.static/Sites-Tanishq-Site/-/default/dw1149e82f/images/cross-smallscreen.svg"
                  alt="cross icon not load"
                  width="24"
                  height="24"
                  className="mx-auto d-sm-block d-md-none"
                />
              </button>

              <div
                className="container"
                id="login-popup"
                data-form-id="Log_n_sign_up"
                data-form-name="Log in Sign Up"
              >
                <div className="row row-img-right">
                  <div className="col-md-8 col-sm-12 loginpopup-left">
                    <div className="content-asset login-or-signup-title">
                      <h4 className="loginpopup-heading">Login Or Signup</h4>

                      <div className="welcome-500-image">
                        <img
                          className="img-fluid"
                          alt="login-pop-up"
                          src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw68b03088/login-pop-up.jpg"
                          title=""
                        />
                      </div>
                    </div>
                    <div className="loginpopup-formdiv">
                      <form
                        action="javascript:void(0);"
                        id="login-form"
                        className="login-form"
                        method="POST"
                        name="dwfrm_profile"
                      >
                        <div className="mb-3 form-check">
                          <div className="input-group flex-nowrap">
                            <div
                              className="country-selector-dropdown"
                              id="popup-custom-drop"
                            >
                              <select
                                id="countrycode"
                                className="form-select phone-code d-none"
                                name="dwfrm_profile_countryCode"
                                required=""
                                aria-required="true"
                                value=""
                                maxlength="2147483647"
                                autocomplete="code"
                              >
                                <option
                                  id="+91"
                                  value="+91"
                                  data-iso-code="IN"
                                  data-phone-min-length="10.0"
                                  data-phone-max-length="10.0"
                                  selected="selected"
                                >
                                  {" "}
                                  +91
                                </option>
                                {/* <option id="+971" value="+971" data-iso-code="AE" data-phone-min-length="9.0" data-phone-max-length="9.0"> +971</option>
                                                                <option id="+49" value="+49" data-iso-code="DE" data-phone-min-length="6.0" data-phone-max-length="13.0"> +49</option>
                                                                <option id="+966" value="+966" data-iso-code="SA" data-phone-min-length="8.0" data-phone-max-length="9.0"> +966</option>
                                                                <option id="+31" value="+31" data-iso-code="NL" data-phone-min-length="9.0" data-phone-max-length="9.0"> +31</option>
                                                                <option id="+60" value="+60" data-iso-code="MY" data-phone-min-length="7.0" data-phone-max-length="9.0"> +60</option>
                                                                <option id="+254" value="+254" data-iso-code="KE" data-phone-min-length="9.0" data-phone-max-length="9.0"> +254</option>
                                                                <option id="+40" value="+40" data-iso-code="RO" data-phone-min-length="8.0" data-phone-max-length="10.0"> +40</option>
                                                                <option id="+34" value="+34" data-iso-code="ES" data-phone-min-length="9.0" data-phone-max-length="9.0"> +34</option>
                                                                <option id="+351" value="+351" data-iso-code="PT" data-phone-min-length="9.0" data-phone-max-length="9.0"> +351</option>
                                                                <option id="+974" value="+974" data-iso-code="QA" data-phone-min-length="3.0" data-phone-max-length="8.0"> +974</option>
                                                                <option id="+39" value="+39" data-iso-code="IT" data-phone-min-length="9.0" data-phone-max-length="11.0"> +39</option>
                                                                <option id="+968" value="+968" data-iso-code="OM" data-phone-min-length="7.0" data-phone-max-length="8.0"> +968</option>
                                                                <option id="+965" value="+965" data-iso-code="KW" data-phone-min-length="7.0" data-phone-max-length="8.0"> +965</option>
                                                                <option id="+973" value="+973" data-iso-code="BH" data-phone-min-length="8.0" data-phone-max-length="8.0"> +973</option>
                                                                <option id="+27" value="+27" data-iso-code="ZA" data-phone-min-length="9.0" data-phone-max-length="9.0"> +27</option>
                                                                <option id="+1" value="+1" data-iso-code="CA" data-phone-min-length="10.0" data-phone-max-length="10.0"> +1</option>
                                                                <option id="+64" value="+64" data-iso-code="NZ" data-phone-min-length="8.0" data-phone-max-length="10.0"> +64</option>
                                                                <option id="+61" value="+61" data-iso-code="AU" data-phone-min-length="9.0" data-phone-max-length="9.0"> +61</option>
                                                                <option id="+65" value="+65" data-iso-code="SG" data-phone-min-length="8.0" data-phone-max-length="8.0"> +65</option>
                                                                <option id="+1" value="+1" data-iso-code="US" data-phone-min-length="10.0" data-phone-max-length="10.0"> +1</option>
                                                                <option id="+44" value="+44" data-iso-code="GB" data-phone-min-length="10.0" data-phone-max-length="10.0"> +44</option> */}
                              </select>
                              <div className="custom-drop-down-pop">
                                <span className="selected-value-pop">+91</span>
                                <i
                                  id="arrowDown-pop"
                                  className="fa fa-angle-down down-arrow-pop pl-0" /*style="transform: rotate(0deg); transition: all 0.5s ease 0s;"*/
                                ></i>
                              </div>
                              <div className="option-values-pop option-values-second-pop custom-hide">
                                <ul className="m-0 p-0">
                                  <li
                                    id="+91"
                                    className="option-value-pop"
                                    value="+91"
                                    data-iso-code="IN"
                                    data-phone-min-length="10.0"
                                    data-phone-max-length="10.0"
                                  >
                                    <img
                                      src="/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw1075ce53/images/flags/in.svg"
                                      alt=""
                                    />
                                    <span>+91</span>
                                  </li>
                                  {/* <li id="+971" className="option-value-pop" value="+971" data-iso-code="AE" data-phone-min-length="9.0" data-phone-max-length="9.0">
                                                                        <img src="/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw0abcfe60/images/flags/ae.svg" alt="" />
                                                                        <span>+971</span>
                                                                    </li>
                                                                    <li id="+49" className="option-value-pop" value="+49" data-iso-code="DE" data-phone-min-length="6.0" data-phone-max-length="13.0">
                                                                        <img src="/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw0a8d2663/images/flags/de.svg" alt="" />
                                                                        <span>+49</span>
                                                                    </li>
                                                                    <li id="+966" className="option-value-pop" value="+966" data-iso-code="SA" data-phone-min-length="8.0" data-phone-max-length="9.0">
                                                                        <img src="/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw7e922005/images/flags/sa.svg" alt="" />
                                                                        <span>+966</span>
                                                                    </li>
                                                                    <li id="+31" className="option-value-pop" value="+31" data-iso-code="NL" data-phone-min-length="9.0" data-phone-max-length="9.0">
                                                                        <img src="/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwad6b7631/images/flags/nl.svg" alt="" />
                                                                        <span>+31</span>
                                                                    </li>
                                                                    <li id="+60" className="option-value-pop" value="+60" data-iso-code="MY" data-phone-min-length="7.0" data-phone-max-length="9.0">
                                                                        <img src="/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw3144468c/images/flags/my.svg" alt="" />
                                                                        <span>+60</span>
                                                                    </li>
                                                                    <li id="+254" className="option-value-pop" value="+254" data-iso-code="KE" data-phone-min-length="9.0" data-phone-max-length="9.0">
                                                                        <img src="/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw6fec1671/images/flags/ke.svg" alt="" />
                                                                        <span>+254</span>
                                                                    </li>
                                                                    <li id="+40" className="option-value-pop" value="+40" data-iso-code="RO" data-phone-min-length="8.0" data-phone-max-length="10.0">
                                                                        <img src="/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwfacf070e/images/flags/ro.svg" alt="" />
                                                                        <span>+40</span>
                                                                    </li>
                                                                    <li id="+34" className="option-value-pop" value="+34" data-iso-code="ES" data-phone-min-length="9.0" data-phone-max-length="9.0">
                                                                        <img src="/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw1ad2c641/images/flags/es.svg" alt="" />
                                                                        <span>+34</span>
                                                                    </li>
                                                                    <li id="+351" className="option-value-pop" value="+351" data-iso-code="PT" data-phone-min-length="9.0" data-phone-max-length="9.0">
                                                                        <img src="/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwecc481e8/images/flags/pt.svg" alt="" />
                                                                        <span>+351</span>
                                                                    </li>
                                                                    <li id="+974" className="option-value-pop" value="+974" data-iso-code="QA" data-phone-min-length="3.0" data-phone-max-length="8.0">
                                                                        <img src="/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw6656a528/images/flags/qa.svg" alt="" />
                                                                        <span>+974</span>
                                                                    </li>
                                                                    <li id="+39" className="option-value-pop" value="+39" data-iso-code="IT" data-phone-min-length="9.0" data-phone-max-length="11.0">
                                                                        <img src="/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw0fb27ce3/images/flags/it.svg" alt="" />
                                                                        <span>+39</span>
                                                                    </li>
                                                                    <li id="+968" className="option-value-pop" value="+968" data-iso-code="OM" data-phone-min-length="7.0" data-phone-max-length="8.0">
                                                                        <img src="/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw0f5142e1/images/flags/om.svg" alt="" />
                                                                        <span>+968</span>
                                                                    </li>
                                                                    <li id="+965" className="option-value-pop" value="+965" data-iso-code="KW" data-phone-min-length="7.0" data-phone-max-length="8.0">
                                                                        <img src="/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwccfdb206/images/flags/kw.svg" alt="" />
                                                                        <span>+965</span>
                                                                    </li>
                                                                    <li id="+973" className="option-value-pop" value="+973" data-iso-code="BH" data-phone-min-length="8.0" data-phone-max-length="8.0">
                                                                        <img src="/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw0551d237/images/flags/bh.svg" alt="" />
                                                                        <span>+973</span>
                                                                    </li>
                                                                    <li id="+27" className="option-value-pop" value="+27" data-iso-code="ZA" data-phone-min-length="9.0" data-phone-max-length="9.0">
                                                                        <img src="/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw84e742e9/images/flags/za.svg" alt="" />
                                                                        <span>+27</span>
                                                                    </li>
                                                                    <li id="+1" className="option-value-pop" value="+1" data-iso-code="CA" data-phone-min-length="10.0" data-phone-max-length="10.0">
                                                                        <img src="/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw62573951/images/flags/ca.svg" alt="" />
                                                                        <span>+1</span>
                                                                    </li>
                                                                    <li id="+64" className="option-value-pop" value="+64" data-iso-code="NZ" data-phone-min-length="8.0" data-phone-max-length="10.0">
                                                                        <img src="/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw39d4b45e/images/flags/nz.svg" alt="" />
                                                                        <span>+64</span>
                                                                    </li>
                                                                    <li id="+61" className="option-value-pop" value="+61" data-iso-code="AU" data-phone-min-length="9.0" data-phone-max-length="9.0">
                                                                        <img src="/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw3f379483/images/flags/au.svg" alt="" />
                                                                        <span>+61</span>
                                                                    </li>
                                                                    <li id="+65" className="option-value-pop" value="+65" data-iso-code="SG" data-phone-min-length="8.0" data-phone-max-length="8.0">
                                                                        <img src="/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwe7fd8211/images/flags/sg.svg" alt="" />
                                                                        <span>+65</span>
                                                                    </li>
                                                                    <li id="+1" className="option-value-pop" value="+1" data-iso-code="US" data-phone-min-length="10.0" data-phone-max-length="10.0">
                                                                        <img src="/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw2fe2a6f8/images/flags/us.svg" alt="" />
                                                                        <span>+1</span>
                                                                    </li>
                                                                    <li id="+44" className="option-value-pop" value="+44" data-iso-code="GB" data-phone-min-length="10.0" data-phone-max-length="10.0">
                                                                        <img src="/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwd38b30e2/images/flags/gb.svg" alt="" />
                                                                        <span>+44</span>
                                                                    </li> */}
                                </ul>
                              </div>
                            </div>

                            <div
                              id="floating-label-group"
                              className="phoneno-field"
                            >
                              <input
                                type="text"
                                placeholder=" "
                                maxlength="10.0"
                                minlength="10.0"
                                className="form-control mobileinputfield"
                                id="mobile"
                                aria-describedby="addon-wrapping"
                                name="dwfrm_profile_phone"
                                required=""
                                aria-required="true"
                                value=""
                                fdprocessedid="eubzx"
                              />
                              <label className="floating-label mobileno-label">
                                Enter your Mobile Number
                              </label>
                              <span
                                className="errormsg d-none"
                                id="valid-error"
                              >
                                Please enter valid Mobile Number
                              </span>
                              <span
                                className="errormsg d-none"
                                id="default-error"
                              >
                                Enter Mobile Number
                              </span>
                            </div>
                          </div>
                        </div>
                        <input
                          type="hidden"
                          name="csrf_token"
                          value="ipQ5x7QqxkzaX0ZSOoHIEi4zofLdp2_INLV1ecM320A6PSUhP0Jio5ajFSjJ2GXCN7MoqJpL3sKeQJwQ6vS7dSZzSm_Uv1-MkWjsCXR4zz-YWYoxU8NZGfbMtC094pEvriDQb9kFcluQ5GQAgkMKw8c7IOADSaoXYngGU-J2274OF56ix1U="
                        />
                        <div className="mb-3 form-check form-checkbox">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                            name="dwfrm_profile_rememberMe"
                            value="true"
                            checked=""
                          />
                          <label
                            className="form-check-label remember-me"
                            for="exampleCheck1"
                          >
                            Remember Me
                          </label>
                        </div>
                      </form>
                    </div>
                    <div className="loginpopup-terms text-center">
                      <div className="content-asset login-agree-terms">
                        <p className="terms-line text-center">
                          By continuing, I agree to{" "}
                          <a
                            className="terms-link"
                            href="https://www.tanishq.co.in/terms-and-conditions.html?lang=en_IN"
                            target="_blank"
                          >
                            Terms of Use
                          </a>{" "}
                          &amp;{" "}
                          <a
                            className="terms-link"
                            href="https://www.tanishq.co.in/privacy-policy.html?lang=en_IN"
                            target="_blank"
                          >
                            Privacy Policy
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="text-center">
                      <button
                        className="loginpopup-submitbutton btn btn-primary btn-lg"
                        data-requestotpurl="https://www.tanishq.co.in/on/demandware.store/Sites-Tanishq-Site/en_IN/OtpVerification-SendOTP"
                        type="submit"
                        fdprocessedid="3fg95e"
                      >
                        Request OTP
                      </button>
                      <p className="responsemessage errormsg otperror-msg mt-3 d-none"></p>
                    </div>
                  </div>

                  <div className="col-md-8 col-sm-12 otppopup-left d-none">
                    <input type="hidden" id="isEmailSelected" value="false" />
                    <div className="mobile-otp-block">
                      <div className="content-asset verify-mobile-otp-title">
                        <h4 className="otppopup-heading">Verify Mobile OTP</h4>
                      </div>
                      <div className="otp-mobileno sent-otp">
                        OTP Sent to mobile number
                        <span
                          className="pl-2 d-inline-block resent-otp-mobilenumber"
                          id="entered-mobile-number"
                        ></span>
                      </div>
                      <div className="otp-mobileno resent-otp d-none">
                        OTP Resent to mobile number
                        <span
                          className="pl-2 d-inline-block resent-otp-mobilenumber"
                          id="entered-mobile-number"
                        ></span>
                      </div>
                    </div>

                    <div className="email-otp-block d-none">
                      <div className="content-asset verify-email-otp-title">
                        <h4 className="otppopup-heading">Verify Email OTP</h4>
                      </div>
                      <div className="otp-mobileno">
                        OTP Sent to email ID
                        <span
                          className="d-inline-block"
                          id="entered-emailid"
                        ></span>
                      </div>
                    </div>
                    <div className="enter-otp-pop">Enter OTP</div>
                    <div className="otppopup-formdiv">
                      <form
                        action="javascript:void(0);"
                        id="otp-form"
                        className="otp-form"
                        method="POST"
                        name="dwfrm_profile"
                      >
                        <input
                          type="hidden"
                          name="csrf_token"
                          value="giBc6qsxnUBGa9epwGtz49f731OHwNZK5EMZ3HxgIvg-f8rRJTJlMYLkFmlyXFvnfKwIJlCq6x-vsKGAH7Tx5ruXQlXaJG6OgQaJnhZ82VWcMRcUcHwa0iimc6zKx4G63CTEEiZXFnejROHXnDi2kDPd5Q4pm64HS9tgok_J9mfzSJmtkyM="
                        />
                        <div className="otpfeilds">
                          <div className="otp-boxes-otp d-flex align-item-center justify-content-center">
                            <input
                              type="tel"
                              className="form-control-otp otp-input"
                              autocomplete="off"
                              placeholder="-"
                              name="dwfrm_profile_otp1"
                              required=""
                              aria-required="true"
                              value=""
                              maxlength="1"
                              minlength="1"
                            />
                            <input
                              type="tel"
                              className="form-control-otp otp-input"
                              autocomplete="off"
                              placeholder="-"
                              name="dwfrm_profile_otp2"
                              required=""
                              aria-required="true"
                              value=""
                              maxlength="1"
                              minlength="1"
                            />
                            <input
                              type="tel"
                              className="form-control-otp otp-input"
                              autocomplete="off"
                              placeholder="-"
                              name="dwfrm_profile_otp3"
                              required=""
                              aria-required="true"
                              value=""
                              maxlength="1"
                              minlength="1"
                            />
                            <input
                              type="tel"
                              className="form-control-otp otp-input"
                              autocomplete="off"
                              placeholder="-"
                              name="dwfrm_profile_otp4"
                              required=""
                              aria-required="true"
                              value=""
                              maxlength="1"
                              minlength="1"
                            />
                            <input
                              type="tel"
                              className="form-control-otp otp-input"
                              autocomplete="off"
                              placeholder="-"
                              name="dwfrm_profile_otp5"
                              required=""
                              aria-required="true"
                              value=""
                              maxlength="1"
                              minlength="1"
                            />
                            <input
                              type="tel"
                              className="form-control-otp otp-input"
                              autocomplete="off"
                              placeholder="-"
                              name="dwfrm_profile_otp6"
                              required=""
                              aria-required="true"
                              value=""
                              maxlength="1"
                              minlength="1"
                            />
                          </div>
                        </div>
                        <p id="otp-error"></p>
                        <p id="recaptcha-validation-failed"></p>
                        <div className="otp-below-text-question mt-3 mt-md-5">
                          <div className="otp-question text-center my-3">
                            Haven't received the OTP ?
                            <button
                              type="button"
                              className="resend resend-link"
                              id="resendLink"
                              data-resendotpurl="https://www.tanishq.co.in/on/demandware.store/Sites-Tanishq-Site/en_IN/OtpVerification-ResendOTP"
                              disabled="" /*style="border: none;"*/
                            >
                              Resend
                            </button>
                            <span id="some-div"> </span>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="otppopup-terms text-center">
                      <div className="content-asset login-agree-terms">
                        <p className="terms-line text-center">
                          By continuing, I agree to{" "}
                          <a
                            className="terms-link"
                            href="https://www.tanishq.co.in/terms-and-conditions.html?lang=en_IN"
                            target="_blank"
                          >
                            Terms of Use
                          </a>{" "}
                          &amp;{" "}
                          <a
                            className="terms-link"
                            href="https://www.tanishq.co.in/privacy-policy.html?lang=en_IN"
                            target="_blank"
                          >
                            Privacy Policy
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="text-center">
                      <button
                        className="otppopup-submitbutton btn btn-primary btn-lg"
                        type="submit"
                        data-verifyotpurl="https://www.tanishq.co.in/on/demandware.store/Sites-Tanishq-Site/en_IN/OtpVerification-VerifyOTP"
                        data-verifyemailotpurl="https://www.tanishq.co.in/on/demandware.store/Sites-Tanishq-Site/en_IN/OtpVerification-VerifyEmailOTP"
                      >
                        Verify OTP
                      </button>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12 loginpopup-right">
                    <div className="content-asset login-popout-image">
                      <img
                        src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwcaaa047f/login_signup/Mask-Group.png"
                        alt="image not found"
                        width="100%"
                        height="100%"
                        className="d-lg-block d-md-block d-none"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="container d-none" id="registration-popup">
                <div className="row row-img-right">
                  <div className="col-md-8 col-sm-12 registerpopup-left">
                    <span className="registerpopup-header">
                      <div className="content-asset register-user-title">
                        <h4 className="registerpopup-heading">Register user</h4>
                        <div className="register-subheading mb-3">
                          Welcome! Please fill the details
                        </div>
                      </div>
                    </span>

                    <span className="existing-customerpopup-header">
                      <div className="content-asset register-almost-there-welcome">
                        <h4 className="existing-customerpopup-heading">
                          Almost there!
                        </h4>
                        <div className="existing-customerpopup-subheading">
                          Welcome back, Please fill the missing fields.
                        </div>
                      </div>
                      <input
                        type="hidden"
                        className="welcome-back-input"
                        value="Welcome back,"
                      />
                      <input
                        type="hidden"
                        className="fill-input-feild"
                        value="! Please fill the missing fields."
                      />
                    </span>

                    <div className="registerpopup-formdiv">
                      <form
                        action="javascript:void(0);"
                        id="register-form"
                        className="register-form"
                        method="POST"
                        name="dwfrm_profile"
                      >
                        <input
                          type="hidden"
                          name="csrf_token"
                          value="7BQgTQspRLS7k3apsDhJQjyTy9DYw-bbexnbWxSYaS_tedRGfNlMXpSecArRDposbgFuR6V-zcmmLMd4BhyuCKXbI7SRQ4-BLGmvjL7XPJoweCVtAaKXGpp98OSArI0ZV4sVF-xcMw4yWvSyiqU8nfpdcUMHP7BnmoKe9R9PHs8VQKscXR8="
                        />
                        <div className="row">
                          <div className="col-12 selectdiv-register">
                            <div id="floating-label-group">
                              <div
                                className="country-selector-dropdown"
                                id="salutation-custom-drop"
                              >
                                <select
                                  id="salutation"
                                  className="form-control drop d-none"
                                  name="dwfrm_profile_salutation"
                                  required=""
                                  aria-required="true"
                                  autocomplete="code"
                                >
                                  <option
                                    disabled="disabled"
                                    selected="true"
                                    value=""
                                  >
                                    Select
                                  </option>
                                  <option id="mr" value="Mr">
                                    Mr
                                  </option>
                                  <option id="ms" value="Ms">
                                    Ms
                                  </option>
                                </select>
                                <div className="custom-drop-down-salutation">
                                  <span className="selected-value-salutation">
                                    Title
                                  </span>
                                  <i
                                    id="arrowDown-salutation"
                                    className="fa fa-angle-down down-arrow-salutation pl-0"
                                  ></i>
                                </div>
                                <div className="option-values-salutation option-values-second-salutation custom-hide">
                                  <ul className="m-0 p-0">
                                    <li
                                      id="mr"
                                      className="option-value-salutation"
                                      value="Mr"
                                    >
                                      <span>Mr</span>
                                    </li>
                                    <li
                                      id="ms"
                                      className="option-value-salutation"
                                      value="Ms"
                                    >
                                      <span>Ms</span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div
                                className="text-danger"
                                id="blank-salutation"
                              ></div>
                            </div>
                          </div>
                        </div>
                        <div className="row mt-4">
                          <div className="col-12">
                            <div id="floating-label-group">
                              <input
                                id="full-name"
                                type="text"
                                className="form-control"
                                placeholder=" "
                                autocomplete="off"
                                autofocus=""
                                required=""
                                name="dwfrm_profile_fullname"
                                aria-required="true"
                                value=""
                                maxlength="100"
                              />
                              <label className="floating-label">
                                Enter Full Name
                              </label>
                              <div
                                className="text-danger"
                                id="blank-fname"
                              ></div>
                            </div>
                          </div>
                        </div>
                        <div className="row mt-4 ">
                          <div className="col-4">
                            <div
                              id="floating-label-group"
                              className="arrow-down-reg"
                            >
                              <input
                                id="country-code"
                                type="text"
                                placeholder=" "
                                className="form-control"
                                autocomplete="off"
                                autofocus=""
                                required=""
                                name="dwfrm_profile_countryCode"
                                aria-required="true"
                                value=""
                                maxlength="2147483647"
                              />
                              <label className="floating-label">Code</label>
                              <div className="invalid-feedback"></div>
                            </div>
                          </div>
                          <div className="col-8">
                            <div id="floating-label-group">
                              <input
                                id="phone-number"
                                type="text"
                                placeholder=" "
                                className="form-control mobileinputfield-form"
                                autocomplete="off"
                                autofocus=""
                                required=""
                                name="dwfrm_profile_phone"
                                aria-required="true"
                                value=""
                                maxlength="2147483647"
                              />
                              <label className="floating-label">
                                Enter Mobile Number
                              </label>
                              <div className="invalid-feedback"></div>
                            </div>
                          </div>
                        </div>
                        <div className="row mt-4">
                          <div className="col-12">
                            <div id="floating-label-group">
                              <input
                                id="email"
                                type="text"
                                placeholder=" "
                                className="form-control email"
                                autocomplete="off"
                                autofocus=""
                                required=""
                                name="dwfrm_profile_email"
                                aria-required="true"
                                value=""
                                maxlength="50"
                                pattern="^[\w.%+-]+@[\w.-]+\.[\w]{2,6}$"
                              />
                              <label className="floating-label">
                                Enter Email ID
                              </label>
                              <div
                                className="text-danger"
                                id="blank-email"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="registerpopup-terms text-center">
                      <div className="content-asset login-agree-terms">
                        <p className="terms-line text-center">
                          By continuing, I agree to{" "}
                          <a
                            className="terms-link"
                            href="https://www.tanishq.co.in/terms-and-conditions.html?lang=en_IN"
                            target="_blank"
                          >
                            Terms of Use
                          </a>{" "}
                          &amp;{" "}
                          <a
                            className="terms-link"
                            href="https://www.tanishq.co.in/privacy-policy.html?lang=en_IN"
                            target="_blank"
                          >
                            Privacy Policy
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="text-center">
                      <button
                        className="registerpopup-submitbutton btn btn-primary btn-lg"
                        type="submit"
                        data-oauthreentryurl="https://www.tanishq.co.in/on/demandware.store/Sites-Tanishq-Site/en_IN/Login-OAuthReentry"
                      >
                        Continue
                      </button>
                    </div>
                  </div>

                  <div className="col-md-8 col-sm-12 already-registeremail-left d-none">
                    <div className="heading-section">
                      <div className="content-asset email-already-registered-below-phone-number">
                        <h4 className="main-heading">
                          Email ID is already registered with us !
                        </h4>
                        <div className="sub-heading">
                          This email is registered against the below phone
                          number. Verify the email to swap it to the account you
                          are creating.
                        </div>
                      </div>
                      <div className="or py-1">OR</div>
                      <div className="sub-heading pb-2">
                        Continue with registered mobile number
                      </div>
                    </div>
                    <div className="row mb-5 mt-3 radio-block">
                      <div className="col-12 col-sm-5 mb-2 mb-sm-0">
                        <div className="form-check email-already p-sm-0 flex">
                          <input
                            className="form-check-input phone-radio-button"
                            type="radio"
                            name="flexRadioDefault"
                            id="phoneRadioButton"
                          />
                          <label
                            id="phoneRadioText"
                            className="form-check-label pl-3 phone-radio-text"
                            for="flexRadioDefault1"
                          ></label>
                        </div>
                      </div>
                      <div className="col-12 col-sm-7">
                        <div className="form-check email-already p-sm-0 flex">
                          <input
                            className="form-check-input email-radio-button"
                            type="radio"
                            name="flexRadioDefault"
                            id="emailRadioButton"
                          />
                          <label
                            id="emailRadioText"
                            className="form-check-label pl-3 email-radio-text"
                            for="flexRadioDefault1"
                          ></label>
                        </div>
                      </div>
                    </div>
                    <div className="registerpopup-terms text-center">
                      <div className="content-asset login-agree-terms">
                        <p className="terms-line text-center">
                          By continuing, I agree to{" "}
                          <a
                            className="terms-link"
                            href="https://www.tanishq.co.in/terms-and-conditions.html?lang=en_IN"
                            target="_blank"
                          >
                            Terms of Use
                          </a>{" "}
                          &amp;{" "}
                          <a
                            className="terms-link"
                            href="https://www.tanishq.co.in/privacy-policy.html?lang=en_IN"
                            target="_blank"
                          >
                            Privacy Policy
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="text-center">
                      <button
                        className="emailid-already-submitbutton btn btn-primary btn-lg"
                        type="submit"
                        data-emailswappableurl="https://www.tanishq.co.in/on/demandware.store/Sites-Tanishq-Site/en_IN/OtpVerification-EmailSwappable"
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12 registerpopup-right medium-screen-image">
                    <div className="content-asset login-popout-image-on-form">
                      <img
                        src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwe9639bfc/login_signup/Group-14443.png"
                        alt="Girl in a jacket" /*style="width:100%;height:100%;"*/
                      />
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12 registerpopup-right small-screen-img">
                    <div className="content-asset login-popout-image">
                      <img
                        src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwcaaa047f/login_signup/Mask-Group.png"
                        alt="image not found"
                        width="100%"
                        height="100%"
                        className="d-lg-block d-md-block d-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
