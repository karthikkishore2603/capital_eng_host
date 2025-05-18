
import BlogList1 from "@/components/blog/MediaCoverageList";
import Breadcumb from "@/components/blog/Breadcumb-media";
import MarqueeComponent from "@/components/common/Marquee";
import { Suspense } from "react";
import Footer8 from "@/components/footers/Footer8";
import Header3 from "@/components/headers/Header3";
import Head from "next/head";
import React from "react";

export const metadata = {
  title: "Media Coverage | Capital Engineering Consultancy",
  description:
    "Discover the latest media coverage of Capital Engineering Consultancy. Explore articles, interviews, and features highlighting our engineering achievements and industry impact.",
  keywords:
    "Capital Engineering Consultancy, media coverage, engineering news, industry features, press mentions, consultancy achievements",
  alternates: {
    canonical: "https://www.capitalengg.com/media-coverage",
  },
};

export default function MediaCoveragePage() {
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
        <meta
          property="og:url"
          content="https://www.capitalengg.com/media-coverage"
        />
        <meta
          property="og:title"
          content="Media Coverage | Capital Engineering Consultancy"
        />
        <meta
          property="og:description"
          content="Discover the latest media coverage of Capital Engineering Consultancy. Explore articles, interviews, and features highlighting our engineering achievements."
        />
        <meta
          property="og:image"
          content="https://www.capitalengg.com/images/media-coverage-og-image.jpg"
        />
        <meta
          property="og:site_name"
          content="Capital Engineering Consultancy"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content="https://www.capitalengg.com/media-coverage"
        />
        <meta
          name="twitter:title"
          content="Media Coverage | Capital Engineering Consultancy"
        />
        <meta
          name="twitter:description"
          content="Discover the latest media coverage of Capital Engineering Consultancy."
        />
        <meta
          name="twitter:image"
          content="https://www.capitalengg.com/images/media-coverage-og-image.jpg"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://www.capitalengg.com/media-coverage"
        />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsMediaOrganization",
            name: "Capital Engineering Consultancy",
            url: "https://www.capitalengg.com",
            logo: "https://www.capitalengg.com/images/logo.png",
            sameAs: [
              "https://www.linkedin.com/company/capital-engineering-consultancy",
              "https://twitter.com/CapitalEngCons",
              "https://www.facebook.com/CapitalEngineeringConsultancy",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+971-4-123-4567",
              contactType: "Customer Service",
              email: "info@capitalengineeringconsultancy.com",
              areaServed: "AE",
              availableLanguage: ["English", "Arabic"],
            },
            description:
              "Explore media coverage of Capital Engineering Consultancy, featuring our latest achievements and industry recognition.",
          })}
        </script>
      </Head>

      <div className="media-coverage-page">
        <Header3 />
        <main>
          <section aria-labelledby="media-coverage-heading">
            <Breadcumb />
            <h1 id="media-coverage-heading" className="sr-only">
              Media Coverage - Capital Engineering Consultancy
            </h1>
            <Suspense fallback={<div>Loading Media Coverage...</div>}>
              <BlogList1 />
            </Suspense>
          </section>
          <MarqueeComponent />
        </main>
        <Footer8 />
      </div>
    </>
  );
}