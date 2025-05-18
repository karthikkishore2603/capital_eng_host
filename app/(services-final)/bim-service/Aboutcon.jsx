"use client";
import Image from "next/image";
import backgroundImage from "@/public/assets/images/service/bim/a1.jpg";
import "@/public/assets/servicenew/about.css";

export default function SmartDesignSection() {
  return (
    <section className="smart-design mb-5" aria-labelledby="bim-services-heading">
      <div className="image-container wow img-custom-anim-left animated">
        <Image
          src={backgroundImage}
          alt="Advanced BIM modeling for architecture and construction by Capital Engineering Consultancy"
          layout="responsive"
          width={800}
          height={600}
          objectFit="cover"
          priority
        />
      </div>
      <div className="content wow img-custom-anim-right animated">
        <h2 id="bim-services-heading">Smart Modelling for Smarter Construction</h2>
        <p>
          At Capital Engineering Consultancy, we deliver high-quality, cost-effective
          BIM solutions for architecture, structure, and MEP. Our services enhance
          collaboration, improve efficiency, and reduce costs through advanced
          modeling, clash detection, and coordination. From design to execution, we
          optimize every project phase, ensuring precision and seamless integration.
          Trust us for innovative BIM solutions tailored to your needs.
        </p>
        <a href="/contact">
          <button
            className="cta-button"
            aria-label="Contact Capital Engineering Consultancy for BIM services"
          >
            Get in Touch
          </button>
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
              "Capital Engineering Consultancy offers advanced BIM solutions for architecture, structure, and MEP, enhancing collaboration, efficiency, and precision in construction projects.",
            "areaServed": {
              "@type": "Place",
              "name": "Global",
            },
            "keywords": "BIM services, building information modeling, architecture, MEP, clash detection, Capital Engineering Consultancy",
          }),
        }}
      />
    </section>
  );
}