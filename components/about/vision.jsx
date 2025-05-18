"use client";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";

export default function Vision() {
  const FadeInSection = () => {
    const sectionRef = useRef(null); // Reference to the section
    const [isVisible, setIsVisible] = useState(false); // State to track visibility

    // Intersection Observer callback
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Set visibility to true when the section is in view
            observer.unobserve(entry.target); // Stop observing once triggered
          }
        },
        {
          root: null, // Use the viewport as the root
          rootMargin: "0px",
          threshold: 0.1, // Trigger when 10% of the section is visible
        }
      );

      if (sectionRef.current) {
        observer.observe(sectionRef.current); // Start observing the section
      }

      return () => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current); // Cleanup observer on unmount
        }
      };
    }, []);

    return (
      <div
        ref={sectionRef}
        style={{
          opacity: isVisible ? 1 : 0, // Fade in when visible
          transition: "opacity 1.5s ease-in-out", // Smooth transition
        }}
      >
        <h2 className="sec-title" style={{ color: "#211574" }}>Our Team Behind the Vision</h2>
        <p className="sec-text mt-35 mb-40" style={{fontSize:"18px"}}>
          Capital Engineering Consultancy's success is driven by a dedicated team of experts in architecture, structural engineering, MEP services, BIM, roads, and infrastructure, committed to delivering innovative and high-quality solutions.
        </p>
        <p className="sec-text mt-35 mb-40" style={{fontSize:"18px"}}>
          By embracing challenges and continuous learning, we stay at the forefront of industry advancements, blending creativity and precision to create lasting impacts for clients, stakeholders, and communities.
        </p>
      </div>
    );
  };

  return (
    <div className="service-area-1 space bg-theme shape-mockup-wrap">
      <div
        className="service-img-1-1 shape-mockup wow img-custom-anim-left animated"
        data-wow-duration="1.5s"
        data-wow-delay="0.2s"
        style={{
          top: "-100px",
          left: "0px",
          bottom: "140px",
          height: "500px", // Ensures the div has a height
          overflow: "hidden", // Prevents extra space issues
        }}
        data-left="0"
        data-top="-100px"
        data-bottom="140px"
      >
        <Image
          width={838}
          height={778}
          style={{ width: "100%", height: "100%", objectFit: "cover" }} // Ensures image covers the div
          src="/assets/img/team/teams.jpg"
          alt="img"
        />
      </div>
      <div className="container">
        <div className="row align-items-center justify-content-end">
          <div className="col-lg-6">
            <div className="about-content-wrap">
              <div className="title-area mb-0">
                <FadeInSection /> {/* Use the FadeInSection component here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}