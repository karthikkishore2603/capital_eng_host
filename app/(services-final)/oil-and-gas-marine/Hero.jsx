"use client";
import Image from "next/image";
import backgroundImage from "@/public/assets/images/servicenew/oil/2149057699.jpg";
import "@/public/assets/servicenew/heroStyle.css";

export default function RefinedLiving() {
  return (
    <section aria-labelledby="oil-gas-marine-heading">
      <div className="container-sn">
        {/* Background Image */}
        <div className="image-container-hero wow img-custom-anim-top animated">
          <Image
            src={backgroundImage}
            alt="Oil & Gas and Marine Ports engineering solutions by Capital Engineering Consultancy"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        {/* Card Positioned at the Bottom */}
        <div className="card">
          <h1
            id="oil-gas-marine-heading"
            className="heading wow img-custom-anim-top animated"
          >
            Oil & Gas and Marine Ports
          </h1>
          <p className="subtext wow img-custom-anim-top animated">
            Engineering Excellence for Oil, Gas, and Marine Port Infrastructure
            Solutions
          </p>
        </div>
      </div>

      <div className="description wow img-custom-anim-left animated">
        <p className="description-color">
          At Capital Engineering Consultancy, we deliver cutting-edge engineering
          solutions for Oil & Gas and Marine Ports, ensuring efficiency, safety, and
          sustainability for offshore and onshore projects across the UAE, India, and
          Iraq.
        </p>
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
              "Capital Engineering Consultancy provides innovative engineering solutions for Oil & Gas and Marine Ports, delivering efficient, safe, and sustainable infrastructure for offshore and onshore projects in the UAE, India, and Iraq.",
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
              "Oil & Gas engineering, Marine Ports engineering, sustainable engineering, offshore projects, onshore projects, Capital Engineering Consultancy",
          }),
        }}
      />
    </section>
  );
}