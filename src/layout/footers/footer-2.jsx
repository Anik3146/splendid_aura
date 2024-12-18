import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import social_data from "@/data/social-data";
import { Email, Location } from "@/svg";
import logo from "@assets/img/logo/logo.svg";
import pay from "@assets/img/footer/footer-pay.png";
import ReactWhatsappButton from "react-whatsapp-button";


const FooterTwo = () => {
  const isMobile = window.innerWidth <= 768; // Define your mobile breakpoint

  return (
    <>
      <footer>
        <div
          className="tp-footer-area tp-footer-style-2 tp-footer-style-3 tp-footer-style-4"
          data-bg-color="#CE4584"
          style={{ backgroundColor: `#CE4584` }}
        >
          <div className="tp-footer-top pt-95 pb-40">
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                  <div className="tp-footer-widget footer-col-4-1 mb-50">
                    <div className="tp-footer-widget-content">
                      <div className="tp-footer-talk mb-20">
                        <span className="text-white">
                          Got Questions? Call us
                        </span>
                        <h4>
                          <a className="text-white" href="tel:670-413-90-762">
                            +670 413 90 762
                          </a>
                        </h4>
                      </div>
                      <div className="tp-footer-contact">
                        <div className="tp-footer-contact-item d-flex align-items-start">
                          <div className="tp-footer-contact-icon">
                            <span className="text-white">
                              <Email />
                            </span>
                          </div>
                          <div className="tp-footer-contact-content">
                            <p>
                              <a
                                href="mailto:shofy@support.com"
                                className="text-white"
                              >
                                splendid_aura@mail.com
                              </a>
                            </p>
                          </div>
                        </div>
                        <div className="tp-footer-contact-item d-flex align-items-start">
                          <div className="tp-footer-contact-icon">
                            <span className="text-white">
                              <Location />
                            </span>
                          </div>
                          <div className="tp-footer-contact-content">
                            <p>
                              <a
                                className="text-white"
                                href="https://www.google.com/maps/place/Sleepy+Hollow+Rd,+Gouverneur,+NY+13642,+USA/@44.3304966,-75.4552367,17z/data=!3m1!4b1!4m6!3m5!1s0x4cccddac8972c5eb:0x56286024afff537a!8m2!3d44.3304928!4d-75.453048!16s%2Fg%2F1tdsjdj4"
                                target="_blank"
                              >
                                79 Sleepy Hollow St. <br /> Jamaica, New York
                                1432
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                  <div className="tp-footer-widget footer-col-4-2 mb-50">
                    <h4 className="tp-footer-widget-title text-white">
                      My Account
                    </h4>
                    <div className="tp-footer-widget-content">
                      <ul>
                        <li>
                          <a className="text-white" href="#">
                            Track Orders
                          </a>
                        </li>
                        <li>
                          <a className="text-white" href="#">
                            Shipping
                          </a>
                        </li>
                        <li>
                          <a className="text-white" href="#">
                            Wishlist
                          </a>
                        </li>
                        <li>
                          <a className="text-white" href="#">
                            My Account
                          </a>
                        </li>
                        <li>
                          <a className="text-white" href="#">
                            Order History
                          </a>
                        </li>
                        <li>
                          <a className="text-white" href="#">
                            Returns
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-2 col-md-4 col-sm-5">
                  <div className="tp-footer-widget footer-col-4-3 mb-50">
                    <h4 className="tp-footer-widget-title text-white">
                      Infomation
                    </h4>
                    <div className="tp-footer-widget-content">
                      <ul>
                        <li>
                          <a className="text-white" href="#">
                            Our Story
                          </a>
                        </li>
                        <li>
                          <a className="text-white" href="#">
                            Careers
                          </a>
                        </li>
                        <li>
                          <a className="text-white" href="#">
                            Privacy Policy
                          </a>
                        </li>
                        <li>
                          <a className="text-white" href="#">
                            Terms & Conditions
                          </a>
                        </li>
                        <li>
                          <a className="text-white" href="#">
                            Latest News
                          </a>
                        </li>
                        <li>
                          <a className="text-white" href="#">
                            Contact Us
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-7">
                  <div className="tp-footer-widget footer-col-4-4 mb-50">
                    <h4 className="tp-footer-widget-title text-white">
                      Subcribe.
                    </h4>
                    <div className="tp-footer-widget-content">
                      <div className="tp-footer-subscribe">
                        <p className="text-white">
                          Our conversation is just getting started
                        </p>
                        <div className="tp-footer-subscribe-form mb-30">
                          <form action="#">
                            <div className="tp-footer-subscribe-input">
                              <input
                                type="email"
                                placeholder="Enter Your Email"
                              />
                              <button type="submit">Subscribe</button>
                            </div>
                          </form>
                        </div>
                        <div className="tp-footer-social-4 tp-footer-social">
                          <h4 className="tp-footer-social-title-4 text-white font-bold">
                            Follow Us On
                          </h4>
                          {social_data.map((s) => (
                            <a href={s.link} key={s.id} target="_blank">
                              <i className={`${s.icon}`}></i>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tp-footer-bottom">
            <div className="container">
              <div className="tp-footer-bottom-wrapper">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <div className="tp-footer-copyright">
                      <p className="text-white">
                        © {new Date().getFullYear()} All Rights Reserved | Next
                        js Template by
                        <Link className="text-white" href="/">
                          ThemePure
                        </Link>
                        .
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="tp-footer-payment text-md-end">
                      <p>
                        <Image src={pay} alt="pay" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <ReactWhatsappButton
        countryCode="880"
        phoneNumber="1786636915"
        style={{
          backgroundColor: "#25D366",
          position: "fixed",
          bottom: isMobile ? "45px" : "20px", // Adjust for vertical positioning
          left: "20px", // Fixed to the left side
          width: isMobile ? "45px" : "70px", // Smaller for mobile
          height: isMobile ? "45px" : "70px", // Smaller for mobile
          borderRadius: "50%", // Keep it circular
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)", // Optional shadow for depth
        }}
        animated
        message="Is there anybody available to chat?"
      />

     
    </>
  );
};

export default FooterTwo;
