"use client";
import Image from "next/image";
import backgroundImage from "@/public/assets/images/service/structure/a1.jpg";
import "@/public/assets/servicenew/about.css";

export default function SmartDesignSection() {
  return (
    <section className="smart-design mb-5" aria-labelledby="structural-engineering-heading">
      <div className="image-container wow img-custom-anim-left animated">
        <Image
          src={backgroundImage}
          alt="Structural Engineering solutions by Capital Engineering Consultancy"
          layout="responsive"
          width={800}
          height={600}
          objectFit="cover"
          priority
        />
      </div>
      <div className="content wow img-custom-anim-right animated">
        <h2 id="structural-engineering-heading">Smart Engineering for Stronger Foundations</h2>
        <p>
          Capital Engineering Consultancy delivers innovative and efficient
          structural engineering solutions, prioritizing durability, functionality,
          and aesthetics. Our expert team offers end-to-end services, including
          structural design, authority submissions, construction, and supervision.
          With over a decade of experience, we ensure strong, reliable, and
          tailored solutions for structural projects of all scales across
          industries worldwide.
        </p>
        <a href="/contact">
          <button
            className="cta-button"
            aria-label="Contact Capital Engineering Consultancy for Structural Engineering services"
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
            "serviceType": "Structural Engineering Services",
            "provider": {
              "@type": "Organization",
              "name": "Capital Engineering Consultancy",
            },
            "description":
              "Capital Engineering Consultancy provides innovative structural engineering solutions, offering comprehensive services from design to supervision, ensuring durability and functionality for projects worldwide.",
            "areaServed": {
              "@type": "Place",
              "name": "Global",
            },
            "keywords":
              "structural engineering, structural design, construction supervision, durable structures, Capital Engineering Consultancy",
          }),
        }}
      />
    </section>
  );
}