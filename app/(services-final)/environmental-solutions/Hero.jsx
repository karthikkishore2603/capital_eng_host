"use client";
import Image from "next/image";
import backgroundImage from "@/public/assets/images/service/environment/bg.jpg";
import "@/public/assets/servicenew/heroStyle.css";

export default function RefinedLiving() {
  return (
    <section aria-labelledby="environmental-solutions-heading">
      <div className="container-sn">
        {/* Background Image */}
        <div className="image-container-hero wow img-custom-anim-top animated">
          <Image
            src={backgroundImage}
            alt="Sustainable environmental solutions by Capital Engineering Consultancy"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        {/* Card Positioned at the Bottom */}
        <div className="card">
          <h1
            id="environmental-solutions-heading"
            className="heading wow img-custom-anim-top animated"
          >
            Environmental Solutions
          </h1>
          <p className="subtext wow img-custom-anim-top animated">
            Expert guidance for a safer, greener, and sustainable future worldwide.
          </p>
        </div>
      </div>

      <div className="description wow img-custom-anim-left animated">
        <p className="description-color">
          At Capital Engineering Consultancy, we specialize in tailored
          environmental management services, including impact assessments, audits,
          and waste management, to support responsible development and long-term
          sustainability.
        </p>
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
              "Capital Engineering Consultancy provides tailored environmental solutions, including impact assessments, audits, and waste management, to promote responsible development and sustainability.",
            "areaServed": {
              "@type": "Place",
              "name": "Global",
            },
            "keywords":
              "environmental solutions, sustainability, environmental management, impact assessments, waste management, Capital Engineering Consultancy",
          }),
        }}
      />
    </section>
  );
}