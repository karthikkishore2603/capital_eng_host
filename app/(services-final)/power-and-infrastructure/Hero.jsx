"use client";
import Image from "next/image";
import backgroundImage from "@/public/assets/images/servicenew/power/273.jpg";
import "@/public/assets/servicenew/heroStyle.css";

export default function RefinedLiving() {
  return (
    <section aria-labelledby="power-infra-heading">
      <div className="container-sn">
        {/* Background Image */}
        <div className="image-container-hero wow img-custom-anim-top animated">
          <Image
            src={backgroundImage}
            alt="Power and Infrastructure engineering solutions by Capital Engineering Consultancy"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        {/* Card Positioned at the Bottom */}
        <div className="card">
          <h1
            id="power-infra-heading"
            className="heading wow img-custom-anim-top animated"
          >
            Power & Infrastructure
          </h1>
          <p className="subtext wow img-custom-anim-top animated">
            Empowering Progress, Building the Future with Innovation and Excellence
          </p>
        </div>
      </div>

      <div className="description wow img-custom-anim-left animated">
        <p className="description-color">
          At Capital Engineering Consultancy, we deliver innovative power and
          infrastructure engineering solutions, ensuring efficiency, sustainability,
          and excellence for industrial, commercial, and community projects
          worldwide.
        </p>
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
              "Capital Engineering Consultancy provides innovative power and infrastructure engineering solutions, delivering efficient, sustainable, and high-quality infrastructure for industrial, commercial, and community projects worldwide.",
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