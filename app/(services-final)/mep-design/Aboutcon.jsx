"use client";
import Image from "next/image";
import backgroundImage from "@/public/assets/images/servicenew/mep/JSW Cement – Fujairah Clinker Plant2.jpeg";
import "@/public/assets/servicenew/about.css";

export default function SmartDesignSection() {
  return (
    <section className="smart-design mb-5" aria-labelledby="mep-design-heading">
      <div className="image-container wow img-custom-anim-left animated">
        <Image
          src={backgroundImage}
          alt="MEP design solutions for industrial efficiency by Capital Engineering Consultancy"
          layout="responsive"
          width={800}
          height={600}
          objectFit="cover"
          priority
        />
      </div>
      <div className="content wow img-custom-anim-right animated">
        <h2 id="mep-design-heading">Smart Engineering for Efficient Spaces</h2>
        <p>
          At Capital Engineering Consultancy, our MEP design services encompass HVAC,
          electrical, plumbing, fire protection, and IT systems, delivering efficient
          and sustainable solutions for industrial, commercial, and residential
          projects. Leveraging advanced tools and a team of expert professionals, we
          provide innovative, tailored designs from concept to execution. Our
          commitment to quality, precision, and client satisfaction ensures engineering
          excellence in every project.
        </p>
        <a href="/contact">
          <button
            className="cta-button"
            aria-label="Contact Capital Engineering Consultancy for MEP design services"
          >
            Get in Touch →
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
            "serviceType": "MEP Design Services",
            "provider": {
              "@type": "Organization",
              "name": "Capital Engineering Consultancy",
            },
            "description":
              "Capital Engineering Consultancy offers MEP design services, including HVAC, electrical, plumbing, fire protection, and IT systems, delivering efficient and sustainable solutions for industrial, commercial, and residential projects.",
            "areaServed": {
              "@type": "Place",
              "name": "Global",
            },
            "keywords":
              "MEP design, HVAC systems, electrical design, plumbing design, sustainable engineering, Capital Engineering Consultancy",
          }),
        }}
      />
    </section>
  );
}