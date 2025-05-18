"use client";
import Image from "next/image";
import backgroundImage from "@/public/assets/images/service/structure/p1.jpeg";
import "@/public/assets/servicenew/port.css";

export default function HeroSection() {
  return (
    <section className="heroContainer wow img-custom-anim-top animated" aria-labelledby="structural-engineering-hero-heading">
      {/* Blue Background (Right Half) */}
      <div className="blueCard" aria-hidden="true"></div>

      {/* Image (Centered & Overlapping) */}
      <div className="imageContainer">
        <Image
          src={backgroundImage}
          alt="Structural Engineering solutions by Capital Engineering Consultancy"
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
        <h1 id="structural-engineering-hero-heading" style={{color:"white"}}>
          Engineering{" "}
          <span className="boldText">Strength, </span>
          <span className="boldText">Designing <br /> </span>the Future
        </h1>
        <a
          href="/contact"
          className="knowMore"
          aria-label="Contact Capital Engineering Consultancy for Structural Engineering services"
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
            "serviceType": "Structural Engineering Services",
            "provider": {
              "@type": "Organization",
              "name": "Capital Engineering Consultancy",
            },
            "description":
              "Capital Engineering Consultancy delivers innovative structural engineering solutions, designing strong, sustainable, and aesthetic structures for construction projects worldwide.",
            "areaServed": {
              "@type": "Place",
              "name": "Global",
            },
            "keywords":
              "structural engineering, structural design, sustainable structures, construction engineering, Capital Engineering Consultancy",
          }),
        }}
      />
    </section>
  );
}