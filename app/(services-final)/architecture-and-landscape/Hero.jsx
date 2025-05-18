"use client";
import Image from "next/image";
import backgroundImage from "@/public/assets/images/service/archi/bg.jpg"; 
import "@/public/assets/servicenew/heroStyle.css";

export default function RefinedLiving() {
  return (
    <section aria-labelledby="architecture-landscape-heading">
      <div className="container-sn">
        {/* Background Image */}
        <div className="image-container-hero wow img-custom-anim-top animated">
          <Image
            src={backgroundImage}
            alt="Modern city skyline showcasing innovative architecture and sustainable landscapes"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        {/* Card Positioned at the Bottom */}
        <div className="card">
          <h1
            id="architecture-landscape-heading"
            className="heading wow img-custom-anim-top animated"
          >
            Architecture & Landscape
          </h1>
          <p className="subtext wow img-custom-anim-top animated">
            Innovative Architecture & Sustainable Landscapes for Timeless Designs.
          </p>
        </div>
      </div>

      <div className="description wow img-custom-anim-left animated">
        <p className="description-color">
          We deliver innovative architecture and landscape solutions, blending
          sustainability, efficiency, creativity, precision, and timeless design
          excellence.
        </p>
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
              "Innovative architecture and sustainable landscape design services, blending creativity, precision, and timeless excellence.",
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