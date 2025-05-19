"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import SideMenu from "@/components/headers/component/SideMenu";
import MobileMenuSocials from "@/components/headers/component/MobileMenuSocials";
import Link from "next/link";

const HeaderHome = () => {
  // Navbar state
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  // Navbar effects
  useEffect(() => {
    const handleDocumentClick = (event) => {
      const menuWrapper = document.querySelector(".mobile-menu-wrapper");
      const menuContainer = document.querySelector(".mobile-menu-area");

      if (
        menuWrapper &&
        menuContainer &&
        !menuContainer.contains(event.target) &&
        menuWrapper.contains(event.target)
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
      
      // Remove the fixed position when scrolled
      if (scrollPosition > 50) {
        setIsNavbarVisible(false);
      } else {
        setIsNavbarVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${isNavbarVisible ? 'fixed' : 'relative'} w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white" : "bg-transparent"
      } ${!isNavbarVisible ? 'hidden' : ''}`}
    >
      <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Mobile Menu */}
      <div
        className={`mobile-menu-wrapper ${
          mobileMenuOpen ? "body-visible" : ""
        } `}
      >
        <div className="mobile-menu-area">
          <button
            className="menu-toggle"
            onClick={() => setMobileMenuOpen(false)}
          >
            <i className="fas fa-times"></i>
          </button>
          <div className="mobile-logo">
            <Link scroll={false} href="/">
              <Image
                height={30}
                width={150}
                style={{ width: "150px", height: "30px" }}
                src="/assets/img/home-logo.png"
                alt="Ovation"
              />
            </Link>
          </div>
          <div className="mobile-menu">
            <ul>
              <li>
                <Link href="/">HOME</Link>
              </li>
              <li>
                <Link href="/expertise">OUR EXPERTISE</Link>
              </li>
              <li>
                <Link href="/sectors">SECTORS</Link>
              </li>
              <li>
                <Link href="/newsroom">NEWSROOM</Link>
              </li>
              <li>
                <Link href="/careers">CAREERS</Link>
              </li>
              <li>
                <Link href="/contact">CONTACT</Link>
              </li>
            </ul>
          </div>
          <div className="sidebar-wrap">
            <h6>Unit 2109, 21st floor Regal Tower, Business Bay,</h6>
            <h6>Dubai, UAE</h6>
          </div>
          <div className="sidebar-wrap">
            <h6>
              <a href="tel:1800123654987">+971 42546155 </a>
            </h6>
            <h6>
              <a href="mailto:info@capitalengg.com">info@capitalengg.com</a>
            </h6>
          </div>
          <div className="social-btn style3">
            <MobileMenuSocials />
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`nav-header header-layout3 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}
      >
        <div className={`sticky-wrapper ${isScrolled ? "header-sticky" : ""}`}>
          <div className="menu-area">
            <div className="container-fluid">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <div className="header-logo">
                    <Link scroll={false} href="/">
                      <Image
                        width={250}
                        height={44}
                        src={
                          isScrolled
                            ? "/assets/img/capital-logo-blue.webp"
                            : "/assets/img/home-logo.png"
                        }
                        alt="logo"
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-auto ms-auto">
                  <nav className="main-menu d-none d-lg-inline-block">
                    <ul>
                      <li>
                        <Link
                          href="/"
                          className={isScrolled ? "text-black" : "text-white"}
                        >
                          HOME
                        </Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link
                          href="/expertise"
                          className={isScrolled ? "text-black" : "text-white"}
                        >
                          OUR EXPERTISE
                        </Link>
                        <ul className="sub-menu">
                          <li>
                            <Link href="/architecture-and-landscape">
                              Architecture & Landscape
                            </Link>
                          </li>
                          <li>
                            <Link href="/fitout-and-interior-design">
                              Fit Out & Interior Design
                            </Link>
                          </li>
                          <li>
                            <Link href="/power-and-infrastructure">
                              Power & Infrastructure
                            </Link>
                          </li>
                          <li>
                            <Link href="/bim-service">BIM Services</Link>
                          </li>
                          <li>
                            <Link href="/mep-design">
                              MEP Design and Services
                            </Link>
                          </li>
                          <li>
                            <Link href="/structural-engineering">
                              Structural Engineering
                            </Link>
                          </li>
                          <li>
                            <Link href="/oil-and-gas-marine">
                              Oil & Gas and Marine & Ports
                            </Link>
                          </li>
                          <li>
                            <Link href="/project-management-consultancy">
                              Project Management Consultancy
                            </Link>
                          </li>
                          <li>
                            <Link href="/environmental-solutions">
                              Environmental Solutions
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <Link
                          href="/sectors"
                          className={isScrolled ? "text-black" : "text-white"}
                        >
                          SECTORS
                        </Link>
                        <ul className="sub-menu">
                          <li>
                            <Link href="/commercial">Commercial</Link>
                          </li>
                          <li>
                            <Link href="/education">Education</Link>
                          </li>
                          <li>
                            <Link href="/railways">Railways</Link>
                          </li>
                          <li>
                            <Link href="/shelters">Shelters</Link>
                          </li>
                          <li>
                            <Link href="/oil-and-gas">Oil & Gas</Link>
                          </li>
                          <li>
                            <Link href="/power-and-energy">Power & Energy</Link>
                          </li>
                          <li>
                            <Link href="/marine-and-ports">Marine & Ports</Link>
                          </li>
                          <li>
                            <Link href="/healthcare-and-hospitality">
                              Healthcare & Hospitality
                            </Link>
                          </li>
                          <li>
                            <Link href="/industrial-and-logistics">
                              Industrial & Logistics
                            </Link>
                          </li>
                          <li>
                            <Link href="/roads-and-infrastructure">
                              Roads & Infrastructure
                            </Link>
                          </li>
                          <li>
                            <Link href="/wtp-ro-and-desalination">
                              WTP, RO & Desalination Plants
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link
                          href="/newsroom"
                          className={isScrolled ? "text-black" : "text-white"}
                        >
                          NEWSROOM
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/careers"
                          className={isScrolled ? "text-black" : "text-white"}
                        >
                          CAREERS
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/contact"
                          className={isScrolled ? "text-black" : "text-white"}
                        >
                          CONTACT
                        </Link>
                      </li>
                    </ul>
                  </nav>
                  <div className="navbar-right d-inline-flex d-lg-none">
                    <button
                      type="button"
                      onClick={() => setMobileMenuOpen(true)}
                      className={`menu-toggle sidebar-btn ${isScrolled ? "text-black" : "text-white"}`}
                    >
                      <span
                        className={`line ${isScrolled ? "bg-black" : "bg-white"}`}
                      ></span>
                      <span
                        className={`line ${isScrolled ? "bg-black" : "bg-white"}`}
                      ></span>
                      <span
                        className={`line ${isScrolled ? "bg-black" : "bg-white"}`}
                      ></span>
                    </button>
                  </div>
                </div>
                <div className="col-auto d-none d-lg-block">
                  <div className="header-button">
                    <Link
                      scroll={false}
                      href="/contact"
                      style={{
                        background: "#071E53",
                        padding: "15px",
                        borderRadius: "15px",
                      }}
                      className="btn"
                    >
                      <span className="link-effect">
                        <span className="effect-1">GET IN TOUCH</span>
                        <span className="effect-1">GET IN TOUCH</span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderHome;
