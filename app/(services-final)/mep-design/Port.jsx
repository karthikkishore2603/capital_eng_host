"use client";
import Image from "next/image";
import backgroundImage from "@/public/assets/images/servicenew/mep/1272.jpg";
import "@/public/assets/servicenew/port.css";

export default function HeroSection() {
  return (
    <section className="heroContainer wow img-custom-anim-top animated" aria-labelledby="mep-hero-heading">
      {/* Blue Background (Right Half) */}
      <div className="blueCard" aria-hidden="true"></div>

      {/* Image (Centered & Overlapping) */}
      <div className="imageContainer">
        <Image
          src={backgroundImage}
          alt="Innovative MEP design solutions by Capital Engineering Consultancy"
          layout="responsive"
          width={1200}
          height={800}
          objectFit="cover"
          priority
          className="image"
        />
      </div>

      {/* Text on Right Side Inside Blue Card */}
      <div className="textBox">
        <h1 id="mep-hero-heading" style={{color:"white"}}>
          Innovative <span className="boldText">MEP </span>Solutions for{" "}
          <span className="boldText">Excellence</span>
        </h1>
        <a
          href="/contact"
          className="knowMore"
          aria-label="Contact Capital Engineering Consultancy for MEP design services"
        >
          Get in Touch →
        </a>
      </div>

      {/* Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "MEP Design Services",
            "provider": {
              "@type": "Organization",
              "name": "Capital Engineering Consultancy",
            },
            "description":
              "Capital Engineering Consultancy delivers innovative MEP design solutions, optimizing mechanical, electrical, and plumbing systems for efficiency and sustainability in industrial, commercial, and residential projects.",
            "areaServed": {
              "@type": "Place",
              "name": "Global",
            },
            "keywords":
              "MEP design, mechanical design, electrical design, plumbing design, sustainable engineering, Capital Engineering Consultancy",
          }),
        }}
      />
    </section>
  );
}