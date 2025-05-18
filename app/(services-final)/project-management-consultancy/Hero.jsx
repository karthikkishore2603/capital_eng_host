"use client";
import Image from "next/image";
import backgroundImage from "@/public/assets/images/service/project/bg.png";
import "@/public/assets/servicenew/heroStyle.css";

export default function RefinedLiving() {
  return (
    <section aria-labelledby="project-management-heading">
      <div className="container-sn">
        {/* Background Image */}
        <div className="image-container-hero wow img-custom-anim-top animated">
          <Image
            src={backgroundImage}
            alt="Project Management Consultancy services by Capital Engineering Consultancy"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        {/* Card Positioned at the Bottom */}
        <div className="card">
          <h1
            id="project-management-heading"
            className="heading wow img-custom-anim-top animated"
          >
            Project Management Consultancy
          </h1>
          <p className="subtext wow img-custom-anim-top animated">
            Expert Project Management for Seamless Execution, Efficiency, and
            Excellence
          </p>
        </div>
      </div>

      <div className="description wow img-custom-anim-left animated">
        <p className="description-color">
          At Capital Engineering Consultancy, we deliver comprehensive project
          management consultancy services, ensuring efficiency, cost control, risk
          mitigation, and seamless execution from concept to completion for
          construction and infrastructure projects worldwide.
        </p>
      </div>

      {/* Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Project Management Consultancy Services",
            "provider": {
              "@type": "Organization",
              "name": "Capital Engineering Consultancy",
            },
            "description":
              "Capital Engineering Consultancy offers comprehensive project management consultancy services, ensuring efficiency, cost control, and seamless execution for construction and infrastructure projects worldwide.",
            "areaServed": {
              "@type": "Place",
              "name": "Global",
            },
            "keywords":
              "project management consultancy, construction management, risk mitigation, project execution, Capital Engineering Consultancy",
          }),
        }}
      />
    </section>
  );
}