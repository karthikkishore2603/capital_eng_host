import BlogList1 from "@/components/blog/BlogList1";
import Breadcumb from "@/components/blog/Breadcumb-blog";
import MarqueeComponent from "@/components/common/Marquee";
import { Suspense } from "react";
import Footer8 from "@/components/footers/Footer8";
import Header3 from "@/components/headers/Header3";
import Head from "next/head";
import React from "react";

export const metadata = {
  title: "Blog | Capital Engineering Consultancy",
  description:
    "Explore the latest blog posts from Capital Engineering Consultancy. Gain insights into engineering trends, project updates, and industry innovations.",
  keywords:
    "Capital Engineering Consultancy, engineering blog, industry insights, consultancy updates, engineering trends",
  alternates: {
    canonical: "https://www.capitalengg.com/blog",
  },
};

export default function BlogPage() {
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
          content="https://www.capitalengg.com/blog"
        />
        <meta
          property="og:title"
          content="Blog | Capital Engineering Consultancy"
        />
        <meta
          property="og:description"
          content="Explore the latest blog posts from Capital Engineering Consultancy, covering engineering trends and industry innovations."
        />
        <meta
          property="og:image"
          content="https://www.capitalengg.com/images/blog-og-image.jpg"
        />
        <meta
          property="og:site_name"
          content="Capital Engineering Consultancy"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content="https://www.capitalengg.com/blog"
        />
        <meta
          name="twitter:title"
          content="Blog | Capital Engineering Consultancy"
        />
        <meta
          name="twitter:description"
          content="Explore the latest blog posts from Capital Engineering Consultancy."
        />
        <meta
          name="twitter:image"
          content="https://www.capitalengg.com/images/blog-og-image.jpg"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://www.capitalengg.com/blog"
        />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Capital Engineering Consultancy Blog",
            url: "https://www.capitalengg.com/blog",
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
              "Read the latest blog posts from Capital Engineering Consultancy, offering insights into engineering trends and industry innovations.",
          })}
        </script>
      </Head>

      <div className="blog-page">
        <Header3 />
        <main>
          <section aria-labelledby="blog-heading">
            <Breadcumb />
            <h1 id="blog-heading" className="sr-only">
              Blog - Capital Engineering Consultancy
            </h1>
            <Suspense fallback={<div>Loading Blog Posts...</div>}>
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