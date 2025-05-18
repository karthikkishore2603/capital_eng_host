"use client";
import Image from "next/image";
import backgroundImage from "@/public/assets/images/servicenew/fit/s1.jpg";
import "@/public/assets/servicenew/port.css";

export default function HeroSection() {
  return (
    <section className="heroContainer wow img-custom-anim-top animated" aria-labelledby="interior-design-hero-heading">
      {/* Blue Background (Right Half) */}
      <div className="blueCard" aria-hidden="true"></div>

      {/* Image (Centered & Overlapping) */}
      <div className="imageContainer">
        <Image
          src={backgroundImage}
          alt="Innovative interior design and fitout solutions by Capital Engineering Consultancy"
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
        <h1 id="interior-design-hero-heading" style={{color:"white"}}>
          Innovative <span className="boldText">Interior<br /></span> Design{" "}
          <span className="boldText">Solutions</span>
        </h1>
        <a
          href="/contact"
          className="knowMore"
          aria-label="Contact Capital Engineering Consultancy for interior design and fitout services"
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
            "serviceType": "Interior Design and Fitout Services",
            "provider": {
              "@type": "Organization",
              "name": "Capital Engineering Consultancy",
            },
            "description":
              "Capital Engineering Consultancy delivers innovative interior design and fitout solutions, creating sustainable and aesthetically pleasing spaces for residential, commercial, and hospitality projects.",
            "areaServed": {
              "@type": "Place",
              "name": "Global",
            },
            "keywords":
              "interior design, fitout services, sustainable design, residential interior design, commercial fitout, Capital Engineering Consultancy",
          }),
        }}
      />
    </section>
  );
}