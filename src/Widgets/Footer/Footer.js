import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      {/* fixed-bottom */}
      <footer className="page-footer " id="footer-layout">
        <div id="footer-holder">
          <div className="container-fluid  text-md-left" id="footer-container">
            <div className="row text-center" id="footer-container1">
              <section className="col">
                <h6>Sunday-Thursday</h6>
                <span>4-9pm</span>

                <h6>Friday-Sunday</h6>
                <span>4-10pm</span>
              </section>
              <hr className="col" id="footer-divider" />
              <section className="col">
                <h6>09055506102</h6>
                <h6>7 Achi Street Independence Layout, Enugu. 400001.</h6>
              </section>
            </div>
            <div id="footer-container2">
              <section className="row" id="footer-copyright">

                <div className="col">
                  <h6>FOLLOW</h6>
                  <i className="fa fa-instagram fa-lg" aria-hidden="true"></i>
                  <h6>GET THE LATEST NEWS. SIGN UP FOR OUR NEWSLETTER.</h6>
                </div>

                <p className="col">© Midas Cravings 2021</p>
              </section>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export { Footer };
