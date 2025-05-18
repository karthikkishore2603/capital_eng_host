"use client";
import Image from "next/image";
import backgroundImage from "@/public/assets/images/servicenew/mep/1475.jpg";
import "@/public/assets/servicenew/heroStyle.css";

export default function RefinedLiving() {
  return (
    <section aria-labelledby="mep-design-heading">
      <div className="container-sn">
        {/* Background Image */}
        <div className="image-container-hero wow img-custom-anim-top animated">
          <Image
            src={backgroundImage}
            alt="MEP design solutions for sustainable engineering by Capital Engineering Consultancy"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        {/* Card Positioned at the Bottom */}
        <div className="card">
          <h1
            id="mep-design-heading"
            className="heading wow img-custom-anim-top animated"
          >
            MEP Design and Services
          </h1>
          <p className="subtext wow img-custom-anim-top animated">
            Delivering excellence in MEP design with precision, efficiency, and
            innovation.
          </p>
        </div>
      </div>

      <div className="description wow img-custom-anim-left animated">
        <p className="description-color">
          At Capital Engineering Consultancy, we provide cutting-edge mechanical,
          electrical, and plumbing (MEP) design solutions, optimizing performance
          and sustainability for industrial, commercial, and residential projects.
        </p>
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
              "Capital Engineering Consultancy delivers innovative MEP design services, providing mechanical, electrical, and plumbing solutions that optimize performance and sustainability for industrial, commercial, and residential projects.",
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