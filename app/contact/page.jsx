import MarqueeComponent from "./Marquee";
import Breadcumb from "@/components/contact/Breadcumb";
import Contact from "@/components/contact/Contact";
import ContactInfo from "@/components/contact/ContactInfo";
import Footer8 from "@/components/footers/Footer8";
import Header3 from "@/components/headers/Header3";
import Head from "next/head";
import React from "react";

// Metadata for SEO
export const metadata = {
  title: "Contact Capital Engineering Consultancy | Get in Touch",
  description:
    "Reach out to Capital Engineering Consultancy for engineering and consultancy services. Contact us via phone, email, or visit our office in Dubai.",
  keywords:
    "Capital Engineering Consultancy contact, engineering consultancy Dubai, contact us, engineering services, consultancy services",
  alternates: {
    canonical: "https://www.capitalengg.com/contact",
  },
  openGraph: {
    title: "Contact Capital Engineering Consultancy",
    description:
      "Get in touch with Capital Engineering Consultancy for expert engineering and consultancy services in Dubai.",
    url: "https://www.capitalengg.com/contact",
    siteName: "Capital Engineering Consultancy",
    images: [
      {
        url: "https://www.capitalengg.com/images/contact-og.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Capital Engineering Consultancy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Capital Engineering Consultancy",
    description:
      "Contact Capital Engineering Consultancy for engineering and consultancy services in Dubai.",
    images: ["https://www.capitalengg.com/images/contact-og.jpg"],
  },
};

export default function ContactPage() {
  return (
    <>
      <Head>
        {/* Structured Data for Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Capital Engineering Consultancy",
            url: "https://www.capitalengg.com",
            logo: "https://www.capitalengg.com/images/logo.png",
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+971-4-123-4567",
                contactType: "Customer Service",
                email: "info@capitalengineeringconsultancy.com",
                areaServed: "AE",
                availableLanguage: ["English", "Arabic"],
              },
            ],
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
          })}
        </script>
      </Head>

      {/* Main Content */}
      <div className="contact-page">
        <Header3 />
        <main>
          <Breadcumb />
          <section aria-labelledby="contact-heading">
            <h1 id="contact-heading" className="sr-only">
              Contact Capital Engineering Consultancy
            </h1>
            <ContactInfo />
            <Contact />
          </section>
          <MarqueeComponent />
        </main>
        <Footer8 />
      </div>
    </>
  );
}