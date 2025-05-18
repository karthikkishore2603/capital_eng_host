import MarqueeComponent from "@/components/common/Marquee";
import Footer8 from "@/components/footers/Footer8";
import Header3 from "@/components/headers/Header3";
import Breadcumb from "@/components/careers/breadcrumb";
import Contact from "@/components/contact/Contact";
import Features2 from "@/components/careers/jobs";
import Head from "next/head";
import React from "react";

// Metadata for SEO
export const metadata = {
  title: "Careers at Capital Engineering Consultancy | Join Our Team",
  description:
    "Explore exciting career opportunities at Capital Engineering Consultancy. Join our innovative team in engineering and consultancy roles. Apply now!",
  keywords:
    "Capital Engineering Consultancy careers, engineering jobs, consultancy jobs, career opportunities, join our team",
  alternates: {
    canonical: "https://www.capitalengg.com/careers",
  },
  openGraph: {
    title: "Careers at Capital Engineering Consultancy",
    description:
      "Discover rewarding career opportunities at Capital Engineering Consultancy. Apply for engineering and consultancy roles today!",
    url: "https://www.capitalengg.com/careers",
    siteName: "Capital Engineering Consultancy",
    images: [
      {
        url: "https://www.capitalengg.com/images/careers-og.jpg",
        width: 1200,
        height: 630,
        alt: "Careers at Capital Engineering Consultancy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at Capital Engineering Consultancy",
    description:
      "Join Capital Engineering Consultancy! Explore engineering and consultancy career opportunities.",
    images: ["https://www.capitalengg.com/images/careers-og.jpg"],
  },
};

export default function CareersPage() {
  return (
    <>
      <Head>
        {/* Structured Data for Job Postings */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Careers at Capital Engineering Consultancy",
            description:
              "Explore career opportunities at Capital Engineering Consultancy. Join our team in engineering and consultancy roles.",
            url: "https://www.capitalengg.com/careers",
            publisher: {
              "@type": "Organization",
              name: "Capital Engineering Consultancy",
              logo: {
                "@type": "ImageObject",
                url: "https://www.capitalengg.com/images/logo.png",
              },
            },
            jobPosting: [
              {
                "@type": "JobPosting",
                title: "Senior Civil Engineer",
                description:
                  "Join our team as a Senior Civil Engineer to lead innovative projects at Capital Engineering Consultancy.",
                hiringOrganization: {
                  "@type": "Organization",
                  name: "Capital Engineering Consultancy",
                  sameAs: "https://www.capitalengg.com",
                },
                employmentType: "FULL_TIME",
                datePosted: "2025-04-01",
                validThrough: "2025-12-31",
                jobLocation: {
                  "@type": "Place",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Dubai",
                    addressCountry: "AE",
                  },
                },
                baseSalary: {
                  "@type": "MonetaryAmount",
                  currency: "AED",
                  value: {
                    "@type": "QuantitativeValue",
                    minValue: 15000,
                    maxValue: 25000,
                    unitText: "MONTH",
                  },
                },
              },
              // Add more job postings as needed
            ],
          })}
        </script>
      </Head>

      {/* Main Content */}
      <div className="careers-page">
        <Header3 />
        <main>
          <Breadcumb />
          <section aria-labelledby="careers-heading">
            <h1 id="careers-heading" className="sr-only">
              Careers at Capital Engineering Consultancy
            </h1>
            <Features2 />
          </section>
          <Contact />
          <MarqueeComponent />
        </main>
        <Footer8 />
      </div>
    </>
  );
}