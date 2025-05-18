"use client";
import Image from "next/image";
import backgroundImage from "@/public/assets/images/service/bim/bg.jpg";
import "@/public/assets/servicenew/heroStyle.css";

export default function RefinedLiving() {
  return (
    <section aria-labelledby="bim-services-heading">
      <div className="container-sn">
        {/* Background Image */}
        <div className="image-container-hero wow img-custom-anim-top animated">
          <Image
            src={backgroundImage}
            alt="Advanced BIM solutions for construction projects by Capital Engineering Consultancy"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        {/* Card Positioned at the Bottom */}
        <div className="card">
          <h1
            id="bim-services-heading"
            className="heading wow img-custom-anim-top animated"
          >
            BIM Services
          </h1>
          <p className="subtext wow img-custom-anim-top animated">
            Revolutionizing construction with precision, efficiency, and innovation.
          </p>
        </div>
      </div>

      <div className="description wow img-custom-anim-left animated">
        <p className="description-color">
          At Capital Engineering Consultancy, our innovative BIM solutions enhance
          efficiency, collaboration, and accuracy, ensuring seamless project execution
          from design to construction and maintenance.
        </p>
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
              "Capital Engineering Consultancy provides innovative BIM solutions to enhance efficiency, collaboration, and accuracy in construction projects, from design to maintenance.",
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