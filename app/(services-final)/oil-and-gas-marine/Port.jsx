"use client";
import Image from "next/image";
import backgroundImage from "@/public/assets/images/servicenew/oil/oilandgas.png";
import "@/public/assets/servicenew/port.css";

export default function HeroSection() {
  return (
    <section className="heroContainer wow img-custom-anim-top animated" aria-labelledby="oil-marine-hero-heading">
      {/* Blue Background (Right Half) */}
      <div className="blueCard" aria-hidden="true"></div>

      {/* Image (Centered & Overlapping) */}
      <div className="imageContainer">
        <Image
          src={backgroundImage}
          alt="Innovative Oil & Gas and Marine Ports engineering solutions by Capital Engineering Consultancy"
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
        <h1 id="oil-marine-hero-heading" style={{color:"white"}}>
          Innovative <span className="boldText">Solutions<br /></span> for{" "}
          <span className="boldText">Oil & Marine</span>
        </h1>
        <a
          href="/contact"
          className="knowMore"
          aria-label="Contact Capital Engineering Consultancy for Oil & Gas and Marine Ports engineering services"
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
            "serviceType": "Oil & Gas and Marine Ports Engineering Services",
            "provider": {
              "@type": "Organization",
              "name": "Capital Engineering Consultancy",
            },
            "description":
              "Capital Engineering Consultancy delivers innovative engineering solutions for Oil & Gas and Marine Ports, specializing in efficient and sustainable infrastructure for offshore and onshore projects in the UAE, India, and Iraq.",
            "areaServed": [
              {
                "@type": "Country",
                "name": "United Arab Emirates",
              },
              {
                "@type": "Country",
                "name": "India",
              },
              {
                "@type": "Country",
                "name": "Iraq",
              },
            ],
            "keywords":
              "Oil & Gas engineering, Marine Ports engineering, sustainable engineering, offshore projects, onshore projects, Capital Engineering Consultancy",
          }),
        }}
      />
    </section>
  );
}