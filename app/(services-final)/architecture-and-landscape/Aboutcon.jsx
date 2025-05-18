"use client";
import Image from "next/image";
import backgroundImage from "@/public/assets/images/servicenew/arch/32 (1).jpg";
import "@/public/assets/servicenew/about.css";

export default function SmartDesignSection() {
  return (
    <section className="smart-design mb-5" aria-labelledby="smart-design-heading">
      <div className="image-container wow img-custom-anim-left animated">
        <Image
          src={backgroundImage}
          alt="Innovative architecture and sustainable landscape design by Capital Engineering Consultancy"
          layout="responsive"
          width={800}
          height={600}
          objectFit="cover"
          priority
        />
      </div>
      <div className="content wow img-custom-anim-right animated">
        <h2 id="smart-design-heading">Timeless Design & Innovation</h2>
        <p>
          At Capital Engineering Consultancy, we create purposeful, efficient, and
          timeless architectural designs that seamlessly blend innovation with
          functionality. From concept to execution, our expert team delivers bold,
          modern, and sustainable structures.
        </p>
        <p>
          Our landscape design enhances natural surroundings with eco-friendly,
          visually striking spaces, integrating hardscape and softscape elements to
          promote sustainability.
        </p>
        <a href="/contact">
          <button className="cta-button" aria-label="Contact Capital Engineering Consultancy for architecture and landscape design services">
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
            "serviceType": "Architecture and Landscape Design",
            "provider": {
              "@type": "Organization",
              "name": "Capital Engineering Consultancy",
            },
            "description":
              "Capital Engineering Consultancy offers innovative architecture and sustainable landscape design services, creating timeless, functional, and eco-friendly spaces.",
            "areaServed": {
              "@type": "Place",
              "name": "Global",
            },
          }),
        }}
      />
    </section>
  );
}