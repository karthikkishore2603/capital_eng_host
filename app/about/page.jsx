import Awards from "@/components/about/Awards1";
import Breadcumb from "@/components/about/Breadcumb";
import Clients from "@/components/about/Clients";
import Contact from "@/components/contact/Contact";
import Facts from "@/components/about/Facts";
import Features from "@/components/about/Features";
import MessageCeo from "@/components/about/ceo-director";
import Vision from "@/components/about/vision";
import Philosophy from "@/components/about/philosophy";
import Team from "@/components/about/Team";
import MarqueeComponent from "./Marquee";
import Footer8 from "@/components/footers/Footer8";
import Header3 from "@/components/headers/Header3";
import Head from "next/head";
import React from "react";

// Metadata for SEO
export const metadata = {
  title: "About Capital Engineering Consultancy | Engineering Experts in Dubai",
  description:
    "Learn about Capital Engineering Consultancy, a leading engineering and consultancy firm in Dubai. Discover our mission, team, awards, and client success stories.",
  keywords:
    "Capital Engineering Consultancy about, engineering consultancy Dubai, about us, engineering experts, consultancy firm",
  alternates: {
    canonical: "https://www.capitalengg.com/about",
  },
  openGraph: {
    title: "About Capital Engineering Consultancy",
    description:
      "Explore the story of Capital Engineering Consultancy, Dubai’s trusted engineering and consultancy firm.",
    url: "https://www.capitalengg.com/about",
    siteName: "Capital Engineering Consultancy",
    images: [
      {
        url: "https://www.capitalengg.com/images/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "About Capital Engineering Consultancy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Capital Engineering Consultancy",
    description:
      "Discover Capital Engineering Consultancy’s mission, expert team, and award-winning projects in Dubai.",
    images: ["https://www.capitalengg.com/images/about-og.jpg"],
  },
};

export default function AboutPage() {
  return (
    <>
      <Head>
        {/* Structured Data for Organization and Key Persons */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About Capital Engineering Consultancy",
            description:
              "Learn about Capital Engineering Consultancy, a leading engineering and consultancy firm in Dubai, known for innovative projects and client success.",
            url: "https://www.capitalengg.com/about",
            publisher: {
              "@type": "Organization",
              name: "Capital Engineering Consultancy",
              url: "https://www.capitalengg.com",
              logo: {
                "@type": "ImageObject",
                url: "https://www.capitalengg.com/images/logo.png",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+971-4-123-4567",
                contactType: "Customer Service",
                email: "info@capitalengg.com",
                areaServed: "AE",
                availableLanguage: ["English", "Arabic"],
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Business Bay",
                addressLocality: "Dubai",
                postalCode: "00000",
                addressCountry: "AE",
              },
              sameAs: [
                "https://www.linkedin.com/company/capital-engineering-consultancy",
                "https://twitter.com/CapitalEngCons",
                "https://www.facebook.com/CapitalEngineeringConsultancy",
              ],
            },
            mainEntity: [
              {
                "@type": "Person",
                name: "Balaskandan Raghunathan",
                jobTitle: "CEO",
                worksFor: {
                  "@type": "Organization",
                  name: "Capital Engineering Consultancy",
                },
                description:
                  "John Doe leads Capital Engineering Consultancy with a vision for innovative engineering solutions.",
                sameAs: ["https://www.linkedin.com/in/balaskandan-raghunathan"],
                image: "https://www.capitalengg.com/images/team/balaskandan-raghunathan.jpg",
              },
              // Add more key persons as needed
            ],
          })}
        </script>
      </Head>

      {/* Main Content */}
      <div className="about-page">
        <Header3 />
        <main>
          <Breadcumb />
          <section aria-labelledby="about-heading">
            <h1 id="about-heading" className="sr-only">
              About Capital Engineering Consultancy
            </h1>
            <Facts />
            <Features />
            <Philosophy />
            <Awards />
            <MessageCeo />
            <Vision />
            <Team />
            <Clients />
            <Contact/>
          </section>
          {/* Uncomment if MarqueeComponent is needed */}
          {/* <MarqueeComponent /> */}
        </main>
        <Footer8 />
      </div>
    </>
  );
}