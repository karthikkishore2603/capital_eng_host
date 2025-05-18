"use client";
import Socials from "./component/Socials";
import Image from "next/image";
import Link from "next/link";
import FooterLinks3 from "./component/FooterLinks3";

export default function Footer8() {
  return (
    <footer className="footer-wrapper footer-layout2 overflow-hidden">
      <div className="container">
        <div className="footer-top space">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <h2 className="footer-top-title">Let’s Work Together</h2>
            </div>
            <div className="col-lg-5">
              <div className="footer-top-wrap">
                <p className="mb-30">
                  We are digital agency that helps businesses develop immersive
                  and engaging user experiences
                </p>
                <Link scroll={false} href="/contact" className="btn">
                  <span className="link-effect">
                    <span className="effect-1">LET'S TALK WITH US</span>
                    <span className="effect-1">LET'S TALK WITH US</span>
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-md-3 col-xl-2 col-lg-3">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Links</h3>
                <div className="menu-all-pages-container list-column2">
                  <ul className="menu">
                    <FooterLinks3 />
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto col-lg-4">
              <div className="widget footer-widget widget-contact">
                <h3 className="widget_title">Contact</h3>
                <ul className="contact-info-list">
                  <li>
                  Unit 2109, 21st floor Regal Tower, Business Bay, <br /> Dubai, UAE
                  </li>
                  <li>
                    <a href="tel:1800123654987">+971 42546155</a>
                    <br />
                    <a href="mailto:info@capitalengg.com">
                    info@capitalengg.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap">
        <div className="container">
          <div className="row gy-3 justify-content-between align-items-center">
            <div className="col-md-6">
              <div className="social-btn style3">
                <Socials />
              </div>
            </div>
            <div className="col-md-6 align-self-center text-lg-end">
              <p className="copyright-text">
                Copyright © {new Date().getFullYear()}{" "}
                <a href="https://themeforest.net/user/ib-themes/portfolio">
                  ib-themes
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
