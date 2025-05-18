"use client";
import Image from "next/image";
import backgroundImage from "@/public/assets/images/service/fitout/hero.jpg";
import "@/public/assets/servicenew/heroStyle.css";

export default function RefinedLiving() {
  return (
    <section aria-labelledby="fitout-interior-heading">
      <div className="container-sn">
        {/* Background Image */}
        <div className="image-container-hero wow img-custom-anim-top animated">
          <Image
            src={backgroundImage}
            alt="Modern interior space showcasing elegant fit-out and sustainable design"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        {/* Card Positioned at the Bottom */}
        <div className="card">
          <h1
            id="fitout-interior-heading"
            className="heading wow img-custom-anim-top animated"
          >
            Fit-out & Interior Design
          </h1>
          <p className="subtext wow img-custom-anim-top animated">
            Creating spaces that are functional, elegant, and sustainable
          </p>
        </div>
      </div>

      <div className="description wow img-custom-anim-left animated">
        <p className="description-color">
          We create functional, sustainable, and visually impactful interior
          designs tailored to residential, commercial, and hospitality projects.
        </p>
      </div>

      {/* Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Fit-out and Interior Design",
            provider: {
              "@type": "Organization",
              name: "Capital Engineering Consultancy",
            },
            description:
              "Expert fit-out and interior design services creating functional, elegant, and sustainable spaces for residential, commercial, and hospitality projects.",
            areaServed: {
              "@type": "Place",
              name: "Global",
            },
          }),
        }}
      />
    </section>
  );
}