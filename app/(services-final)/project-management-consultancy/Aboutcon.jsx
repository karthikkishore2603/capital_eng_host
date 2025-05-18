"use client";
import Image from "next/image";
import backgroundImage from "@/public/assets/images/servicenew/project/iraq1 (1).jpg";
import "@/public/assets/servicenew/about.css";

export default function SmartDesignSection() {
  return (
    <section className="smart-design mb-5" aria-labelledby="project-management-heading">
      <div className="image-container wow img-custom-anim-left animated">
        <Image
          src={backgroundImage}
          alt="Project Management Consultancy services by Capital Engineering Consultancy"
          layout="responsive"
          width={800}
          height={600}
          objectFit="cover"
          priority
        />
      </div>
      <div className="content wow img-custom-anim-right animated">
        <h2 id="project-management-heading">Expert Solutions for Flawless Delivery</h2>
        <p>
          Capital Engineering Consultancy delivers integrated project management
          consultancy services, overseeing the entire construction life cycle from
          feasibility studies to commissioning. Our expertise ensures on-time,
          cost-effective, and high-quality project delivery across industries. By
          leveraging advanced technologies and industry best practices, we provide
          tailored solutions to drive project success and operational efficiency.
        </p>
        <a href="/contact">
          <button
            className="cta-button"
            aria-label="Contact Capital Engineering Consultancy for Project Management Consultancy services"
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
            "serviceType": "Project Management Consultancy Services",
            "provider": {
              "@type": "Organization",
              "name": "Capital Engineering Consultancy",
            },
            "description":
              "Capital Engineering Consultancy provides integrated project management consultancy services, managing the construction life cycle from feasibility studies to commissioning, ensuring on-time, cost-effective, and high-quality project delivery across industries.",
            "areaServed": {
              "@type": "Place",
              "name": "Global",
            },
            "keywords":
              "project management consultancy, construction management, feasibility studies, project delivery, Capital Engineering Consultancy",
          }),
        }}
      />
    </section>
  );
}