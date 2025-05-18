import React from "react";
import Link from "next/link";

export default function CtaForm() {
  return (
    <footer className="footer-wrapper footer-layout1 overflow-hidden bg-smoke" >
      <div className="container">
        <div className="footer-top space" >
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <h2 className="footer-top-title">Let’s Build It Together</h2>
            </div>
            <div className="col-lg-5">
              <div className="footer-top-wrap">
                <p className="mb-30">
                From concept to completion, we engineer success. Contact us today to bring your project to life!
                </p>
                <Link scroll={false} href="/contact" className="btn">
                  <span className="link-effect">
                    <span className="effect-1">WORK WITH US</span>
                    <span className="effect-1">WORK WITH US</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
       
      </div>
     
    </footer>
  );
}
