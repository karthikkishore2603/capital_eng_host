"use client";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";

export default function MessageCeo() {
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
        <p>
          Established in 2006 and headquartered in the UAE, Capital Engineering Consultancy is a leading multidisciplinary firm with a presence in KSA, Oman, Egypt, India, Iraq, and the UK. Blending tradition with innovation, we deliver practical and sustainable solutions across architecture, structural engineering, roads, infrastructure, and oil & gas.
        </p>
        <p>
          Driven by excellence, commitment, and perseverance, we reshape the engineering landscape through quality and innovation. Catering to both public and private sectors, we ensure exceptional value and transformative solutions worldwide.
        </p>
      </div>
    );
  };

  return (
    <div
      className="why-area-1 space bg-theme shape-mockup-wrap"
      style={{ paddingBottom: "300px" }}
    >
      <div
        className="why-img-1-1 shape-mockup wow img-custom-anim-right animated"
        data-wow-duration="1.5s"
        data-wow-delay="0.2s"
        style={{ top: "-100px", right: "0px", bottom: "140px" }}
      >
        <Image
          width={838}
          height={778}
          src="/assets/img/team/Engr. Balaskandan Raghunathan - Founder & Managing Director.JPG"
          alt="img"
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="title-area mb-45">
              <h2 className="sec-title" style={{ color: "#211574" }}>
                Message from our CEO and Managing Director
              </h2>
            </div>
            <FadeInSection /> {/* Use the FadeInSection component here */}
          </div>
        </div>
      </div>
    </div>
  );
}