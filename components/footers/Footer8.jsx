"use client";

import React from "react";
import Socials from "./component/Socials";
import Link from "next/link";
import FooterLinks1 from "./component/FooterLinks1";
import FooterLinks2 from "./component/FooterLinks2";

export default function Footer1() {
  return (
    <footer className="footer-wrapper footer-layout1 overflow-hidden bg-smoke">
      <div className="container">
        <div className="footer-top space">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <h2 className="footer-top-title">Let’s Create It <br/>Together</h2>
            </div>
            <div className="col-lg-5">
              <div className="footer-top-wrap">
                <p className="mb-30">
                From concept to completion, we engineer success. Contact us today to bring your project to life!


                </p>
                <Link scroll={false} href="/contact" style={{background:"#071E53"}} className="btn">
                  <span className="link-effect">
                    <span className="effect-1">GET IN TOUCH</span>
                    <span className="effect-1">GET IN TOUCH</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-menu-area">
          <div className="row gy-3 justify-content-between">
            <div className="col-xxl-6 col-lg-7">
              <ul className="footer-menu-list">
                <FooterLinks1 />
              </ul>
            </div>
            <div className="col-xxl-6 col-lg-5 text-lg-end">
              <ul className="footer-menu-list">
                <FooterLinks2 />
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap">
         <div className="container">
           <div className="copyright-wrap">
             <div className="row gy-3 justify-content-between align-items-center">
               <div className="col-md-6">
                 <p className="copyright-text">
                   Copyright © {new Date().getFullYear()}{" "}
                   <a href="https://themeforest.net/user/ib-themes/portfolio">
                   Capital Engineering Consultancy LLC
                   </a>
                 </p>
               </div>
               <div className="col-md-6 align-self-center">
                 <div className="social-btn style3 justify-content-md-end">
                   <Socials />
                 </div>
               </div>
             </div>
           </div>
         </div>
      </div>
    </footer>
  );
}