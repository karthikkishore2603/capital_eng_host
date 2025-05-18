"use client";
import Image from "next/image";
import backgroundImage from "@/public/assets/images/servicenew/arch/p1.jpg";
import "@/public/assets/servicenew/port.css";

export default function HeroSection() {
  return (
    <section className="heroContainer wow img-custom-anim-top animated" aria-labelledby="hero-heading">
      {/* Blue Background (Right Half) */}
      <div className="blueCard"></div>

      {/* Image (Centered & Overlapping) */}
      <div className="imageContainer">
        <Image
          src={backgroundImage}
          alt="Innovative architecture and sustainable landscape design by Capital Engineering Consultancy"
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
        <h1 id="hero-heading" style={{color:"white"}}>
          Innovative <span className="boldText">Architecture</span> & Sustainable{" "}
          <span className="boldText">Landscapes</span>
        </h1>
        <a
          href="/contact"
          className="knowMore"
          aria-label="Contact Capital Engineering Consultancy for architecture and landscape design services"
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
            "serviceType": "Architecture and Landscape Design",
            "provider": {
              "@type": "Organization",
              "name": "Capital Engineering Consultancy",
            },
            "description":
              "Capital Engineering Consultancy delivers innovative architecture and sustainable landscape design services, creating functional and timeless spaces.",
            "areaServed": {
              "@type": "Place",
              "name": "Global",
            },
          }),
        }}
      />
    </section>
  );
}