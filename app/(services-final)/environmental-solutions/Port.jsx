"use client";
import Image from "next/image";
import backgroundImage from "@/public/assets/images/servicenew/envi/shj-2220-stp-dhaid-eagle.jpg";
import "@/public/assets/servicenew/port.css";

export default function HeroSection() {
  return (
    <section className="heroContainer wow img-custom-anim-top animated" aria-labelledby="environmental-hero-heading">
      {/* Blue Background (Right Half) */}
      <div className="blueCard" aria-hidden="true"></div>

      {/* Image (Centered & Overlapping) */}
      <div className="imageContainer">
        <Image
          src={backgroundImage}
          alt="Environmental solutions for sustainability by Capital Engineering Consultancy"
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
        <h1 id="environmental-hero-heading" style={{color:"white"}}>
          <span className="boldText">Engineering </span>for<br />
          <span className="boldText">Environmental </span>Excellence
        </h1>
        <a
          href="/contact"
          className="knowMore"
          aria-label="Contact Capital Engineering Consultancy for environmental solutions"
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
            "serviceType": "Environmental Solutions",
            "provider": {
              "@type": "Organization",
              "name": "Capital Engineering Consultancy",
            },
            "description":
              "Capital Engineering Consultancy delivers innovative environmental solutions, engineering sustainable practices for health, safety, and environmental excellence.",
            "areaServed": {
              "@type": "Place",
              "name": "Global",
            },
            "keywords":
              "environmental solutions, sustainability, environmental management, Capital Engineering Consultancy",
          }),
        }}
      />
    </section>
  );
}