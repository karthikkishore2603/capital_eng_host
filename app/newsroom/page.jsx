import MarqueeComponent from "./Marquee";
import Footer8 from "@/components/footers/Footer8";
import Header3 from "@/components/headers/Header3";
import Breadcumb from "./Breadcumb";
import Projects3 from "./Projects3";
import React from "react";
import Head from "next/head";

export const metadata = {
  title: "Newsroom | Capital Engineering Consultancy",
  description: "Stay updated with the latest news, projects, and announcements from Capital Engineering Consultancy. Explore our achievements and industry insights.",
  keywords: "Capital Engineering Consultancy, newsroom, engineering news, consultancy updates, project announcements, industry insights",
  alternates: {
    canonical: "https://www.capitalengg.com/newsroom",
  },
};

export default function Newsroom() {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content="Capital Engineering Consultancy" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.capitalengg.com/newsroom" />
        <meta property="og:title" content="Newsroom | Capital Engineering Consultancy" />
        <meta property="og:description" content="Stay updated with the latest news, projects, and announcements from Capital Engineering Consultancy. Explore our achievements and industry insights." />
        <meta property="og:image" content="https://www.capitalengg.com/images/newsroom-og-image.jpg" />
        <meta property="og:site_name" content="Capital Engineering Consultancy" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.capitalengg.com/newsroom" />
        <meta name="twitter:title" content="Newsroom | Capital Engineering Consultancy" />
        <meta name="twitter:description" content="Stay updated with the latest news, projects, and announcements from Capital Engineering Consultancy." />
        <meta name="twitter:image" content="https://www.capitalengg.com/images/newsroom-og-image.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.capitalengg.com/newsroom" />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsMediaOrganization",
            "name": "Capital Engineering Consultancy",
            "url": "https://www.capitalengg.com",
            "logo": "https://www.capitalengg.com/images/logo.png",
            "sameAs": [
              "https://www.linkedin.com/company/capital-engineering-consultancy",
              "https://twitter.com/CapitalEngCons",
              "https://www.facebook.com/CapitalEngineeringConsultancy"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+971-4-123-4567",
              "contactType": "Customer Service",
              "email": "info@capitalengineeringconsultancy.com",
              "areaServed": "AE",
              "availableLanguage": ["English", "Arabic"]
            },
            "description": "Capital Engineering Consultancy provides innovative engineering solutions. Stay updated with our latest news and projects in our Newsroom."
          })}
        </script>
      </Head>

      <div className="newsroom-page">
        <Header3 />
        <main>
          <section aria-labelledby="newsroom-heading">
            <Breadcumb />
            <h1 id="newsroom-heading" className="sr-only">Newsroom - Capital Engineering Consultancy</h1>
            <Projects3 />
          </section>
          <MarqueeComponent />
        </main>
        <Footer8 />
      </div>
    </>
  );
}