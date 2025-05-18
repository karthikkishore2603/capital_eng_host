"use client";
import Image from "next/image";
import backgroundImage from "@/public/assets/images/service/structure/bg.jpg";
import "@/public/assets/servicenew/heroStyle.css";

export default function RefinedLiving() {
  return (
    <section aria-labelledby="structural-engineering-heading">
      <div className="container-sn">
        {/* Background Image */}
        <div className="image-container-hero wow img-custom-anim-top animated">
          <Image
            src={backgroundImage}
            alt="Structural Engineering solutions by Capital Engineering Consultancy"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        {/* Card Positioned at the Bottom */}
        <div className="card">
          <h1
            id="structural-engineering-heading"
            className="heading wow img-custom-anim-top animated"
          >
            Structural Engineering
          </h1>
          <p className="subtext wow img-custom-anim-top animated">
            Innovative, Strong, and Sustainable Structural Designs for Safe and
            Aesthetic Spaces
          </p>
        </div>
      </div>

      <div className="description wow img-custom-anim-left animated">
        <p className="description-color">
          At Capital Engineering Consultancy, we deliver innovative, efficient,
          and durable structural engineering solutions, seamlessly blending
          aesthetics, functionality, and sustainability for diverse construction
          projects worldwide.
        </p>
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
              "Capital Engineering Consultancy offers innovative and durable structural engineering solutions, blending aesthetics, functionality, and sustainability for construction projects worldwide.",
            "areaServed": {
              "@type": "Place",
              "name": "Global",
            },
            "keywords":
              "structural engineering, structural design, sustainable construction, durable structures, Capital Engineering Consultancy",
          }),
        }}
      />
    </section>
  );
}