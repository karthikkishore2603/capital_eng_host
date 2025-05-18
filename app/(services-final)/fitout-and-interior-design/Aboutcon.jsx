"use client";
import Image from "next/image";
import backgroundImage from "@/public/assets/images/service/fitout/a1.jpg";
import "@/public/assets/servicenew/about.css";

export default function SmartDesignSection() {
  return (
    <section className="smart-design mb-5" aria-labelledby="interior-design-heading">
      <div className="image-container wow img-custom-anim-left animated">
        <Image
          src={backgroundImage}
          alt="Innovative interior design and fitout solutions by Capital Engineering Consultancy"
          layout="responsive"
          width={800}
          height={600}
          objectFit="cover"
          priority
        />
      </div>
      <div className="content wow img-custom-anim-right animated">
        <h2 id="interior-design-heading">Smart Design for Inspired Interiors</h2>
        <p>
          At Capital Engineering Consultancy, our Interior Design Team delivers
          exceptional, functional, and sustainable fitout and interior design
          solutions for residential, commercial, and hospitality projects. Using
          advanced technology and quality materials, we create stunning spaces that
          blend aesthetics with practicality. From concept to execution, our
          collaborative approach ensures efficiency, durability, and customization,
          providing high-quality, cost-effective designs tailored to our clients’ needs.
        </p>
        <a href="/contact">
          <button
            className="cta-button"
            aria-label="Contact Capital Engineering Consultancy for fitout and interior design services"
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
            "serviceType": "Fitout and Interior Design Services",
            "provider": {
              "@type": "Organization",
              "name": "Capital Engineering Consultancy",
            },
            "description":
              "Capital Engineering Consultancy offers innovative fitout and interior design solutions for residential, commercial, and hospitality projects, ensuring sustainable, functional, and aesthetically pleasing spaces.",
            "areaServed": {
              "@type": "Place",
              "name": "Global",
            },
            "keywords":
              "fitout services, interior design, sustainable design, residential interior design, commercial fitout, Capital Engineering Consultancy",
          }),
        }}
      />
    </section>
  );
}