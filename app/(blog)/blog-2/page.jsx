import BlogList2 from "@/components/blog/BlogList2";
import Breadcumb from "@/components/blog/Breadcumb";
import MarqueeComponent from "@/components/common/Marquee";
import { Suspense } from "react";
import Footer8 from "@/components/footers/Footer8";
import Header3 from "@/components/headers/Header3";
import Head from "next/head";
import React from "react";

export const metadata = {
  title: "Letter from the CEO | Capital Engineering Consultancy",
  description:
    "Read the latest letters from the CEO of Capital Engineering Consultancy. Gain insights into our vision, strategic direction, and commitment to engineering excellence.",
  keywords:
    "Capital Engineering Consultancy, letter from CEO, engineering vision, consultancy leadership, industry insights",
  alternates: {
    canonical: "https://www.capitalengg.com/letter-from-ceo",
  },
};

export default function LetterFromCEOPage() {
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
          content="https://www.capitalengg.com/letter-from-ceo"
        />
        <meta
          property="og:title"
          content="Letter from the CEO | Capital Engineering Consultancy"
        />
        <meta
          property="og:description"
          content="Read the latest letters from the CEO of Capital Engineering Consultancy, sharing our vision and commitment to engineering excellence."
        />
        <meta
          property="og:image"
          content="https://www.capitalengg.com/images/ceo-letter-og-image.jpg"
        />
        <meta
          property="og:site_name"
          content="Capital Engineering Consultancy"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content="https://www.capitalengg.com/letter-from-ceo"
        />
        <meta
          name="twitter:title"
          content="Letter from the CEO | Capital Engineering Consultancy"
        />
        <meta
          name="twitter:description"
          content="Read the latest letters from the CEO of Capital Engineering Consultancy."
        />
        <meta
          name="twitter:image"
          content="https://www.capitalengg.com/images/ceo-letter-og-image.jpg"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://www.capitalengg.com/letter-from-ceo"
        />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Capital Engineering Consultancy Letter from the CEO",
            url: "https://www.capitalengg.com/letter-from-ceo",
            publisher: {
              "@type": "Organization",
              name: "Capital Engineering Consultancy",
              logo: {
                "@type": "ImageObject",
                url: "https://www.capitalengg.com/images/logo.png",
              },
            },
            sameAs: [
              "https://www.linkedin.com/company/capital-engineering-consultancy",
              "https://twitter.com/CapitalEngCons",
              "https://www.facebook.com/CapitalEngineeringConsultancy",
            ],
            description:
              "Read letters from the CEO of Capital Engineering Consultancy, offering insights into our vision and strategic direction.",
          })}
        </script>
      </Head>

      <div className="ceo-letter-page">
        <Header3 />
        <main>
          <section aria-labelledby="ceo-letter-heading">
            <Breadcumb />
            <h1 id="ceo-letter-heading" className="sr-only">
              Letter from the CEO - Capital Engineering Consultancy
            </h1>
            <Suspense fallback={<div>Loading CEO Letters...</div>}>
              <BlogList2 />
            </Suspense>
          </section>
          <MarqueeComponent />
        </main>
        <Footer8 />
      </div>
    </>
  );
}