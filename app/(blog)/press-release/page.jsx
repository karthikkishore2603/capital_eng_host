import BlogList1 from "@/components/blog/BlogList2";
import Breadcumb from "@/components/blog/Breadcumb";
import MarqueeComponent from "@/components/common/Marquee";
import { Suspense } from "react";
import Footer8 from "@/components/footers/Footer8";
import Header3 from "@/components/headers/Header3";
import Head from "next/head";
import React from "react";

export const metadata = {
  title: "Press Releases | Capital Engineering Consultancy",
  description:
    "Read the latest press releases from Capital Engineering Consultancy. Stay informed about our achievements, project milestones, and industry contributions.",
  keywords:
    "Capital Engineering Consultancy, press releases, engineering announcements, consultancy news, industry updates",
  alternates: {
    canonical: "https://www.capitalengg.com/press-release",
  },
};

export default function PressReleasePage() {
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
          content="https://www.capitalengg.com/press-release"
        />
        <meta
          property="og:title"
          content="Press Releases | Capital Engineering Consultancy"
        />
        <meta
          property="og:description"
          content="Read the latest press releases from Capital Engineering Consultancy, highlighting our achievements and industry contributions."
        />
        <meta
          property="og:image"
          content="https://www.capitalengg.com/images/press-release-og-image.jpg"
        />
        <meta
          property="og:site_name"
          content="Capital Engineering Consultancy"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content="https://www.capitalengg.com/press-release"
        />
        <meta
          name="twitter:title"
          content="Press Releases | Capital Engineering Consultancy"
        />
        <meta
          name="twitter:description"
          content="Read the latest press releases from Capital Engineering Consultancy."
        />
        <meta
          name="twitter:image"
          content="https://www.capitalengg.com/images/press-release-og-image.jpg"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://www.capitalengg.com/press-release"
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
              "Explore the latest press releases from Capital Engineering Consultancy, showcasing our achievements and industry milestones.",
          })}
        </script>
      </Head>

      <div className="press-release-page">
        <Header3 />
        <main>
          <section aria-labelledby="press-release-heading">
            <Breadcumb />
            <h1 id="press-release-heading" className="sr-only">
              Press Releases - Capital Engineering Consultancy
            </h1>
            <Suspense fallback={<div>Loading Press Releases...</div>}>
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