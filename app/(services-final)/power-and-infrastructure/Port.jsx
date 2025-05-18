"use client";
import Image from "next/image";
import backgroundImage from "@/public/assets/images/service/bim/p1.jpg";
import "@/public/assets/servicenew/port.css";

export default function HeroSection() {
  return (
    <section className="heroContainer wow img-custom-anim-top animated" aria-labelledby="power-infra-hero-heading">
      {/* Blue Background (Right Half) */}
      <div className="blueCard" aria-hidden="true"></div>

      {/* Image (Centered & Overlapping) */}
      <div className="imageContainer">
        <Image
          src={backgroundImage}
          alt="Power and Infrastructure engineering solutions by Capital Engineering Consultancy"
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
        <h1 id="power-infra-hero-heading" style={{color:"white"}}>
          <span className="boldText">Powering </span>Progress,{" "}
          <span className="boldText">Building </span>Futures
        </h1>
        <a
          href="/contact"
          className="knowMore"
          aria-label="Contact Capital Engineering Consultancy for Power and Infrastructure engineering services"
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
            "serviceType": "Power and Infrastructure Engineering Services",
            "provider": {
              "@type": "Organization",
              "name": "Capital Engineering Consultancy",
            },
            "description":
              "Capital Engineering Consultancy delivers innovative power and infrastructure engineering solutions, driving progress and building sustainable futures for industrial, commercial, and community projects worldwide.",
            "areaServed": {
              "@type": "Place",
              "name": "Global",
            },
            "keywords":
              "power engineering, infrastructure engineering, sustainable infrastructure, industrial projects, Capital Engineering Consultancy",
          }),
        }}
      />
    </section>
  );
}