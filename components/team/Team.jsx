"use client";
import Image from "next/image";
import React from "react";
import { useState, useEffect, useRef } from "react";

export default function Team() {
  const boardHeadingRef = useRef(null); // Separate ref for "Board of Directors"
  const executiveHeadingRef = useRef(null); // Separate ref for "Executive Profiles"
  const partnersHeadingRef = useRef(null); // New ref for Partners heading

  useEffect(() => {
    // Intersection Observer for "Board of Directors"
    const boardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.setProperty("--underline-width", "100%");
          } else {
            entry.target.style.setProperty("--underline-width", "0%");
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the element is visible
      }
    );

    // Intersection Observer for "Executive Profiles"
    const executiveObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.setProperty("--underline-width", "100%");
          } else {
            entry.target.style.setProperty("--underline-width", "0%");
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the element is visible
      }
    );

    // Intersection Observer for "Partners"
    const partnersObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.setProperty("--underline-width", "100%");
          } else {
            entry.target.style.setProperty("--underline-width", "0%");
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the element is visible
      }
    );

    // Observe the "Board of Directors" heading
    if (boardHeadingRef.current) {
      boardObserver.observe(boardHeadingRef.current);
    }

    // Observe the "Executive Profiles" heading
    if (executiveHeadingRef.current) {
      executiveObserver.observe(executiveHeadingRef.current);
    }

    // Observe the "Partners" heading
    if (partnersHeadingRef.current) {
      partnersObserver.observe(partnersHeadingRef.current);
    }

    // Cleanup observers on unmount
    return () => {
      if (boardHeadingRef.current) {
        boardObserver.unobserve(boardHeadingRef.current);
      }
      if (executiveHeadingRef.current) {
        executiveObserver.unobserve(executiveHeadingRef.current);
      }
      if (partnersHeadingRef.current) {
        partnersObserver.unobserve(partnersHeadingRef.current);
      }
    };
  }, []);

  return (
    <div className="team-area-1 space overflow-hidden">
      <div className="container">
        <h1
          ref={boardHeadingRef}
          style={{
            fontSize: "2.5rem",
            fontWeight: "500",
            color: "#211574",
            textAlign: "center",
            paddingBottom: "3rem",
            fontFamily: "Georgia, serif",
            letterSpacing: "1px",
            lineHeight: "1.2",
            margin: "0",
            position: "relative",
            display: "inline-block",
          }}
        >
          Board of Directors
          <span
            style={{
              position: "absolute",
              left: "0",
              bottom: "2rem",
              width: "var(--underline-width, 0%)",
              height: "2px",
              backgroundColor: "#211574",
              transition: "width 0.5s ease",
            }}
          />
        </h1>

        <div className="row gy-4 justify-content-center pt-5 pb-50">
          {/* First Card */}
          <div className="col-lg-6 mb-4">
            <div className="team-card d-flex align-items-center shadow-sm rounded overflow-hidden flex-column flex-md-row">
              <div className="d-flex w-100 flex-column flex-md-row">
                <div
                  className="team-card_img order-md-1"
                  style={{
                    width: "100%",
                    maxWidth: "350px", // Increased from 1500px
                    height: "300px",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src="/assets/img/team/Engr. Balaskandan Raghunathan - Founder & Managing Director.JPG"
                    alt="Engr. Balaskandan Raghunathan"
                    width={350} // Increased from 300
                    height={300}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </div>
                <div className="team-card-details p-4 order-md-2">
                  <h4
                    style={{
                      color: "#081761",
                      fontSize: "25px",
                      fontWeight: "bold",
                      marginBottom: "8px",
                    }}
                  >
                    Engr. Balaskandan <br /> Raghunathan
                  </h4>
                  <span
                    className="d-block fs-6 mb-2"
                    style={{ color: "black" }}
                  >
                    Founder & Managing Director
                  </span>
                  <p
                    className="text-secondary text-justify"
                    style={{
                      lineHeight: "1.5",
                      fontSize: "16px",
                    }}
                  >
                    As Founder and Managing Director, we believe true
                    engineering defies limits and challenges the impossible. At
                    Capital Engineering, our vision is to be a top global
                    consultant. If it hasn't been done, we'll do it first. If it
                    seems impossible, we'll make it inevitable.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div className="col-lg-6 mb-4">
            <div className="team-card d-flex align-items-center shadow-sm rounded overflow-hidden flex-column flex-md-row">
              <div className="d-flex w-100 flex-column flex-md-row">
                <div
                  className="team-card_img order-md-1"
                  style={{
                    width: "100%",
                    maxWidth: "350px", // Increased from 1350px
                    height: "300px",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src="/assets/img/team/Mr. Krishna Thyagarajan - Operations Director.JPG"
                    alt="Mr. Krishna Thyagarajan"
                    width={350} // Increased from 250
                    height={300}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </div>
                <div className="team-card-details p-4 order-md-2">
                  <h4
                    style={{
                      color: "#081761",
                      fontSize: "25px",
                      fontWeight: "bold",
                      marginBottom: "8px",
                    }}
                  >
                    Mr. Krishna <br /> Thyagarajan
                  </h4>
                  <span
                    className="d-block fs-6 mb-2"
                    style={{ color: "black" }}
                  >
                    Director - Group Operations
                  </span>
                  <p
                    className="text-secondary text-justify"
                    style={{
                      lineHeight: "1.5",
                      fontSize: "16px",
                    }}
                  >
                    As Director - Group Operations at Capital Engineering, we
                    leave no stone unturned, while leaving an edifice with
                    lasting legacy. We believe that Engineering is an obsession
                    for methodical perfection. We don't wait for the Future, we
                    are immersed in making it our Present.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* partners */}

        <h1
          ref={partnersHeadingRef}
          style={{
            fontSize: "2.5rem",
            fontWeight: "500",
            color: "#211574",
            textAlign: "center",
            paddingBottom: "3rem",
            paddingTop: "50px",
            fontFamily: "Georgia, serif",
            letterSpacing: "1px",
            lineHeight: "1.2",
            margin: "0",
            position: "relative",
            display: "inline-block",
          }}
        >
          Partners
          <span
            style={{
              position: "absolute",
              left: "0",
              bottom: "2rem",
              width: "var(--underline-width, 0%)",
              height: "2px",
              backgroundColor: "#211574",
              transition: "width 0.5s ease",
            }}
          />
        </h1>
        <div className="row gy-4 justify-content-center">
          {/* partner1 */}
          <div className="col-lg-6 mb-4">
            <div className="team-card d-flex align-items-center shadow-sm rounded overflow-hidden flex-column flex-md-row">
              <div className="d-flex w-100 flex-column flex-md-row">
                <div
                  className="team-card_img order-md-1"
                  style={{
                    width: "100%",
                    maxWidth: "450px", // Increased from 350px
                    height: "300px",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src="/assets/img/team/Ali Khalid Al Hammadi.png"
                    alt="Engr. Aman Alqaisy"
                    width={450} // Updated width
                    height={300}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </div>
                <div className="team-card-details p-4 order-md-2">
                  <h4
                    style={{
                      color: "#081761",
                      fontSize: "25px",
                      fontWeight: "bold",
                      marginBottom: "8px",
                    }}
                  >
                    Ali Khalid <br />
                    Al Hammadi
                  </h4>
                  <span
                    className="d-block fs-6 mb-2"
                    style={{ color: "black" }}
                  >
                    Partner & Executive Director
                  </span>
                  <p
                    className="text-secondary text-justify"
                    style={{
                      lineHeight: "1.5",
                      fontSize: "16px",
                    }}
                  >
                    We believe in the strength of collaboration and innovation
                    to deliver impactful engineering solutions. By combining
                    diverse expertise with a shared vision, we turn challenges
                    into opportunities and create lasting value for our clients
                    and communities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="col-lg-3 col-md-6 pt-50">
            <div className="team-card">
              <div
                className="team-card_img"
                style={{ height: "380px", overflow: "hidden" }}
              >
                <Image
                  src="/assets/img/team/Mohammed Ibrahim Jawad Al Ridha.png"
                  alt="Engr. Aman Alqaisy"
                  width={250}
                  height={300}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </div>
              <h4
                style={{
                  color: "#081761",
                  fontSize: "25px",
                  fontWeight: "bold",
                }}
              >
                Mohammed Ibrahim <br />
                Jawad Al Ridha
              </h4>
              <span className="fs-5">Partner</span>
            </div>
          </div> */}

          {/* partner2 */}
          {/* <div className="col-lg-3 col-md-6 pt-50">
            <div className="team-card">
              <div
                className="team-card_img"
                style={{ height: "380px", overflow: "hidden" }}
              >
                <Image
                  src="/assets/img/team/Ali Khalid Al Hammadi.png"
                  alt="Engr. Aman Alqaisy"
                  width={250}
                  height={300}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </div>
              <h4
                style={{
                  color: "#081761",
                  fontSize: "25px",
                  fontWeight: "bold",
                }}
              >
                Ali Khalid <br />
                Al Hammadi
              </h4>
              <span className="fs-5">Partner & Executive Director</span>
            </div>
          </div> */}
        </div>

        <h1
          ref={executiveHeadingRef}
          style={{
            fontSize: "2.5rem",
            fontWeight: "500",
            color: "#211574",
            textAlign: "center",
            paddingBottom: "3rem",
            paddingTop: "50px",
            fontFamily: "Georgia, serif",
            letterSpacing: "1px",
            lineHeight: "1.2",
            margin: "0",
            position: "relative",
            display: "inline-block",
          }}
        >
          Executive Profiles
          <span
            style={{
              position: "absolute",
              left: "0",
              bottom: "2rem",
              width: "var(--underline-width, 0%)",
              height: "2px",
              backgroundColor: "#211574",
              transition: "width 0.5s ease",
            }}
          />
        </h1>
        <div className="row gy-4 justify-content-center pt-5">
          {/* Sharjah */}
          <div className="col-lg-3 col-md-6">
            <div className="team-card">
              <div
                className="team-card_img"
                style={{ height: "380px", overflow: "hidden" }}
              >
                <Image
                  src="/assets/img/team/Engr. Aman Alqaisy - Head of Operations (Sharjah).webp"
                  alt="Engr. Aman Alqaisy"
                  width={308}
                  height={380}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <h4
                style={{
                  color: "#081761",
                  fontSize: "25px",
                  fontWeight: "bold",
                }}
              >
                Engr. Aman <br /> Alqaisy
              </h4>
              <span className="fs-5">
                Head of Operations <br />
                Sharjah
              </span>
            </div>
          </div>

          {/* Dubai & Egypt */}
          <div className="col-lg-3 col-md-6">
            <div className="team-card">
              <div
                className="team-card_img"
                style={{ height: "380px", overflow: "hidden" }}
              >
                <Image
                  src="/assets/img/team/Engr. Eslam Mohammed Ali - Head of Operations (Dubai & Egypt).JPG"
                  alt="Engr. Eslam Mohammed Ali"
                  width={308}
                  height={380}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <h4
                style={{
                  color: "#081761",
                  fontSize: "25px",
                  fontWeight: "bold",
                }}
              >
                Engr. Eslam <br />
                Mohammed Ali
              </h4>
              <span className="fs-5">
                Head of Operations <br />
                Dubai & Egypt
              </span>
            </div>
          </div>

          {/* Abu Dhabi */}
          <div className="col-lg-3 col-md-6">
            <div className="team-card">
              <div
                className="team-card_img"
                style={{ height: "380px", overflow: "hidden" }}
              >
                <Image
                  src="/assets/img/team/Engr. Senthilram Palavesamuthu - Head of Operations (Abu Dhabi).webp"
                  alt="Engr. Senthilram Palavesamuthu"
                  width={308}
                  height={380}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <h4
                style={{
                  color: "#081761",
                  fontSize: "25px",
                  fontWeight: "bold",
                }}
              >
                Engr. Senthilram <br /> Palavesamuthu
              </h4>
              <span className="fs-5">
                Head of Operations <br />
                Abu Dhabi
              </span>
            </div>
          </div>

          {/* Ras Al Khaimah */}
          <div className="col-lg-3 col-md-6">
            <div className="team-card">
              <div
                className="team-card_img"
                style={{ height: "380px", overflow: "hidden" }}
              >
                <Image
                  src="/assets/img/team/Ravikumar.png"
                  alt="Engr. Ravikumar M"
                  width={308}
                  height={380}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <h4
                style={{
                  color: "#081761",
                  fontSize: "25px",
                  fontWeight: "bold",
                }}
              >
                Engr. Ravikumar <br />
                Mahalingam
              </h4>
              <span className="fs-5">
                Head of Operations <br /> Ras Al Khaimah
              </span>
            </div>
          </div>

          {/* Umm Al Quwain */}
          <div className="col-lg-3 col-md-6 pt-50">
            <div className="team-card">
              <div
                className="team-card_img"
                style={{ height: "380px", overflow: "hidden" }}
              >
                <Image
                  src="/assets/img/team/Mr. Subith Sreenivasan - Head of Operations (Umm Al Quwain).webp"
                  alt="Mr. Subith Sreenivasan"
                  width={308}
                  height={380}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <h4
                style={{
                  color: "#081761",
                  fontSize: "25px",
                  fontWeight: "bold",
                }}
              >
                Mr. Subith <br /> Sreenivasan
              </h4>
              <span className="fs-5">
                Head of Operations <br /> Umm Al Quwain
              </span>
            </div>
          </div>

          {/* Ajman */}
          <div className="col-lg-3 col-md-6 pt-50">
            <div className="team-card">
              <div
                className="team-card_img"
                style={{ height: "380px", overflow: "hidden" }}
              >
                <Image
                  src="/assets/img/team/Engr. Rolan Cabahug Carpi - Head of Operations (Ajman).JPG"
                  alt="Engr. Rolan Cabahug Carpi"
                  width={308}
                  height={380}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <h4
                style={{
                  color: "#081761",
                  fontSize: "25px",
                  fontWeight: "bold",
                }}
              >
                Engr. Rolan <br /> Cabahug Carpi
              </h4>
              <span className="fs-5">
                Head of Operations <br />
                Ajman
              </span>
            </div>
          </div>

          {/* Saudi Arabia */}
          <div className="col-lg-3 col-md-6 pt-50">
            <div className="team-card">
              <div
                className="team-card_img"
                style={{ height: "380px", overflow: "hidden" }}
              >
                <Image
                  src="/assets/img/team/Engr. Shobanbaabu Arumugam - Head of Operations (Saudi Arabia).webp"
                  alt="Engr. Shobanbaabu Arumugam"
                  width={308}
                  height={380}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <h4
                style={{
                  color: "#081761",
                  fontSize: "25px",
                  fontWeight: "bold",
                }}
              >
                Engr. Shobanbaabu <br /> Arumugam
              </h4>
              <span className="fs-5">
                Head of Operations <br />
                Saudi Arabia
              </span>
            </div>
          </div>

          {/* Oman */}
          <div className="col-lg-3 col-md-6 pt-50">
            <div className="team-card">
              <div
                className="team-card_img"
                style={{ height: "380px", overflow: "hidden" }}
              >
                <Image
                  src="/assets/img/team/Engr. Navas Mohammed - Head of Operations (Oman).JPG"
                  alt="Engr. Navas Mohammed"
                  width={308}
                  height={380}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <h4
                style={{
                  color: "#081761",
                  fontSize: "25px",
                  fontWeight: "bold",
                }}
              >
                Engr. Navas <br /> Mohammed
              </h4>
              <span className="fs-5">
                Head of Operations <br />
                Oman
              </span>
            </div>
          </div>

          {/* Operations Manager */}
          <div className="col-lg-3 col-md-6 pt-50">
            <div className="team-card">
              <div
                className="team-card_img"
                style={{ height: "380px", overflow: "hidden" }}
              >
                <Image
                  src="/assets/img/team/Mr. Saravanan Ellappan - Operations Manager.JPG"
                  alt="Mr. Saravanan Ellappan"
                  width={308}
                  height={450}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <h4
                style={{
                  color: "#081761",
                  fontSize: "25px",
                  fontWeight: "bold",
                }}
              >
                Mr. Saravanan <br /> Ellappan
              </h4>
              <span className="fs-5">Operations Manager</span>
            </div>
          </div>

          {/* Architectural Design Director */}
          <div className="col-lg-3 col-md-6 pt-50">
            <div className="team-card">
              <div
                className="team-card_img"
                style={{ height: "380px", overflow: "hidden" }}
              >
                <Image
                  src="/assets/img/team/Arch.  B.K. Kulkarni - Architectural Design Director.JPG"
                  alt="Arch. B.K. Kulkarni"
                  width={308}
                  height={380}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <h4
                style={{
                  color: "#081761",
                  fontSize: "25px",
                  fontWeight: "bold",
                }}
              >
                Arch. B.K. <br /> Kulkarni
              </h4>
              <span className="fs-5">Architectural Design Director</span>
            </div>
          </div>

          {/* MEP Manager */}
          <div className="col-lg-3 col-md-6 pt-50">
            <div className="team-card">
              <div
                className="team-card_img"
                style={{ height: "380px", overflow: "hidden" }}
              >
                <Image
                  src="/assets/img/team/Engr. Anurag Varun - MEP Manager.JPG"
                  alt="Engr. Anurag Varun"
                  width={308}
                  height={380}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <h4
                style={{
                  color: "#081761",
                  fontSize: "25px",
                  fontWeight: "bold",
                }}
              >
                Engr. Anurag <br />
                Varun
              </h4>
              <span className="fs-5">MEP Manager</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
