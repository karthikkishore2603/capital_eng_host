"use client";
import Image from "next/image";
import backgroundImage from "@/public/assets/images/servicenew/bim/28843.jpg";
import "@/public/assets/servicenew/port.css";

export default function HeroSection() {
  return (
    <section className="heroContainer wow img-custom-anim-top animated" aria-labelledby="bim-hero-heading">
      {/* Blue Background (Right Half) */}
      <div className="blueCard" aria-hidden="true"></div>

      {/* Image (Centered & Overlapping) */}
      <div className="imageContainer">
        <Image
          src={backgroundImage}
          alt="Advanced BIM solutions for efficient construction by Capital Engineering Consultancy"
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
        <h1 id="bim-hero-heading" style={{color:"white"}}>
          Where <span className="boldText">Constructing</span> Efficiency,{" "}
          <span className="boldText">Designing</span> the Future
        </h1>
        <a
          href="/contact"
          className="knowMore"
          aria-label="Contact Capital Engineering Consultancy for BIM services"
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
            "serviceType": "Building Information Modeling (BIM) Services",
            "provider": {
              "@type": "Organization",
              "name": "Capital Engineering Consultancy",
            },
            "description":
              "Capital Engineering Consultancy provides advanced BIM solutions, constructing efficiency and designing the future of architecture and construction projects.",
            "areaServed": {
              "@type": "Place",
              "name": "Global",
            },
            "keywords": "BIM services, building information modeling, construction, Capital Engineering Consultancy",
          }),
        }}
      />
    </section>
  );
}