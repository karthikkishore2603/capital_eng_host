"use client";
import Image from "next/image";
import backgroundImage from "/public/assets/images/servicenew/envi/STP, Houma-images-0.jpg";
import "@/public/assets/servicenew/about.css";

export default function SmartDesignSection() {
  return (
    <section className="smart-design mb-5" aria-labelledby="environmental-solutions-heading">
      <div className="image-container wow img-custom-anim-left animated">
        <Image
          src={backgroundImage}
          alt="Innovative environmental solutions for sustainability by Capital Engineering Consultancy"
          layout="responsive"
          width={800}
          height={600}
          objectFit="cover"
          priority
        />
      </div>
      <div className="content wow img-custom-anim-right animated">
        <h2 id="environmental-solutions-heading">Smart Planning for a Greener Tomorrow</h2>
        <p>
          At Capital Engineering Consultancy, we deliver innovative environmental
          solutions, specializing in health, safety, and environmental management.
          Our multidisciplinary team provides tailored services, including
          environmental impact assessments, sustainability audits, risk evaluations,
          and waste management. Committed to regulatory compliance and sustainable
          development, we empower public and private sector clients to achieve a
          greener future.
        </p>
        <a href="/contact">
          <button
            className="cta-button"
            aria-label="Contact Capital Engineering Consultancy for environmental solutions"
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
            "serviceType": "Environmental Solutions",
            "provider": {
              "@type": "Organization",
              "name": "Capital Engineering Consultancy",
            },
            "description":
              "Capital Engineering Consultancy offers innovative environmental solutions, including impact assessments, sustainability audits, risk evaluations, and waste management, ensuring compliance and sustainable development.",
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