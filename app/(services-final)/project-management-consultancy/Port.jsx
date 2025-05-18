"use client";
import Image from "next/image";
import backgroundImage from "@/public/assets/images/servicenew/project/port1.jpg";
import "@/public/assets/servicenew/port.css";

export default function HeroSection() {
  return (
    <section className="heroContainer wow img-custom-anim-top animated" aria-labelledby="project-management-hero-heading">
      {/* Blue Background (Right Half) */}
      <div className="blueCard" aria-hidden="true"></div>

      {/* Image (Centered & Overlapping) */}
      <div className="imageContainer">
        <Image
          src={backgroundImage}
          alt="Project Management Consultancy services by Capital Engineering Consultancy"
          layout="responsive"
          width={1200}
          height={800}
          objectFit="cover"
          priority
          className="image"
        />
      </div>

      {/* Text on Right Side Inside Blue Card */}
      <div className="textBox">
        <h1 id="project-management-hero-heading"style={{color:"white"}}>
          Precision <br />
          <span className="boldText">Project </span>
          <span className="boldText">Management </span>Excellence
        </h1>
        <a
          href="/contact"
          className="knowMore"
          aria-label="Contact Capital Engineering Consultancy for Project Management Consultancy services"
        >
          Get in Touch →
        </a>
      </div>

      {/* Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Project Management Consultancy Services",
            "provider": {
              "@type": "Organization",
              "name": "Capital Engineering Consultancy",
            },
            "description":
              "Capital Engineering Consultancy delivers precision project management consultancy services, ensuring seamless execution, cost control, and high-quality outcomes for construction and infrastructure projects worldwide.",
            "areaServed": {
              "@type": "Place",
              "name": "Global",
            },
            "keywords":
              "project management consultancy, construction management, project execution, cost control, Capital Engineering Consultancy",
          }),
        }}
      />
    </section>
  );
}