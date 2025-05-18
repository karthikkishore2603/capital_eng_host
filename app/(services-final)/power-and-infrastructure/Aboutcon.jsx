"use client";
import Image from "next/image";
import backgroundImage from "@/public/assets/images/service/bim/a1.jpg";
import "@/public/assets/servicenew/about.css";

export default function SmartDesignSection() {
  return (
    <section className="smart-design mb-5" aria-labelledby="power-infra-heading">
      <div className="image-container wow img-custom-anim-left animated">
        <Image
          src={backgroundImage}
          alt="Power and Infrastructure engineering solutions by Capital Engineering Consultancy"
          layout="responsive"
          width={800}
          height={600}
          objectFit="cover"
          priority
        />
      </div>
      <div className="content wow img-custom-anim-right animated">
        <h2 id="power-infra-heading">Powering Progress, Building the Future</h2>
        <p>
          At Capital Engineering Consultancy, we deliver innovative power and
          infrastructure engineering solutions, driving efficiency, sustainability,
          and excellence. Our expert team provides end-to-end services, from concept
          design to project execution, delivering high-quality, cost-effective, and
          future-ready infrastructure tailored to meet the evolving demands of
          industries and communities worldwide.
        </p>
        <a href="/contact">
          <button
            className="cta-button"
            aria-label="Contact Capital Engineering Consultancy for Power and Infrastructure engineering services"
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
            "serviceType": "Power and Infrastructure Engineering Services",
            "provider": {
              "@type": "Organization",
              "name": "Capital Engineering Consultancy",
            },
            "description":
              "Capital Engineering Consultancy specializes in power and infrastructure engineering, offering innovative, sustainable, and cost-effective solutions from concept design to execution for industries and communities worldwide.",
            "areaServed": {
              "@type": "Place",
              "name": "Global",
            },
            "keywords":
              "power engineering, infrastructure engineering, sustainable infrastructure, concept design, project execution, Capital Engineering Consultancy",
          }),
        }}
      />
    </section>
  );
}