"use client";
import Image from "next/image";
import backgroundImage from "@/public/assets/images/servicenew/oil/emirates1.jpeg";
import "@/public/assets/servicenew/about.css";

export default function SmartDesignSection() {
  return (
    <section className="smart-design mb-5" aria-labelledby="oil-gas-marine-heading">
      <div className="image-container wow img-custom-anim-left animated">
        <Image
          src={backgroundImage}
          alt="Oil & Gas and Marine Ports engineering solutions by Capital Engineering Consultancy"
          layout="responsive"
          width={800}
          height={600}
          objectFit="cover"
          priority
        />
      </div>
      <div className="content wow img-custom-anim-right animated">
        <h2 id="oil-gas-marine-heading">Excellence in Energy Engineering</h2>
        <p>
          Capital Engineering Consultancy is a trusted leader in Oil & Gas and
          Marine Ports engineering, delivering innovative solutions for offshore and
          onshore projects across the UAE, India, and Iraq. Our expertise spans
          concept design, FEED, detailed design, procurement, construction,
          commissioning, and handover, ensuring seamless project execution and
          sustainable outcomes.
        </p>
        <a href="/contact">
          <button
            className="cta-button"
            aria-label="Contact Capital Engineering Consultancy for Oil & Gas and Marine Ports engineering services"
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
            "serviceType": "Oil & Gas and Marine Ports Engineering Services",
            "provider": {
              "@type": "Organization",
              "name": "Capital Engineering Consultancy",
            },
            "description":
              "Capital Engineering Consultancy provides innovative Oil & Gas and Marine Ports engineering services, specializing in concept design, FEED, detailed design, procurement, construction, commissioning, and handover for offshore and onshore projects in the UAE, India, and Iraq.",
            "areaServed": [
              {
                "@type": "Country",
                "name": "United Arab Emirates",
              },
              {
                "@type": "Country",
                "name": "India",
              },
              {
                "@type": "Country",
                "name": "Iraq",
              },
            ],
            "keywords":
              "Oil & Gas engineering, Marine Ports engineering, FEED, concept design, sustainable engineering, Capital Engineering Consultancy",
          }),
        }}
      />
    </section>
  );
}