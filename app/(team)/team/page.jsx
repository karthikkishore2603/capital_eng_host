import MarqueeComponent from "@/components/common/Marquee";
import Footer8 from "@/components/footers/Footer8";
import Header3 from "@/components/headers/Header3";
import Breadcumb from "@/components/team/Breadcumb";
import Contact from "@/components/team/Contact";
import Team from "@/components/team/Team";
import Head from "next/head";
import React from "react";

// Metadata for SEO
export const metadata = {
  title: "Our Team | Capital Engineering Consultancy",
  description:
    "Meet the expert team at Capital Engineering Consultancy. Our skilled engineers and consultants drive innovation in Dubai’s engineering projects.",
  keywords:
    "Capital Engineering Consultancy team, engineering team Dubai, consultancy experts, meet our team, engineering professionals",
  alternates: {
    canonical: "https://www.capitalengg.com/team",
  },
  openGraph: {
    title: "Our Team at Capital Engineering Consultancy",
    description:
      "Discover the talented professionals behind Capital Engineering Consultancy’s success in engineering and consultancy.",
    url: "https://www.capitalengg.com/team",
    siteName: "Capital Engineering Consultancy",
    images: [
      {
        url: "https://www.capitalengg.com/images/team-og.jpg",
        width: 1200,
        height: 630,
        alt: "Capital Engineering Consultancy Team",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Team at Capital Engineering Consultancy",
    description:
      "Meet the expert engineers and consultants at Capital Engineering Consultancy in Dubai.",
    images: ["https://www.capitalengg.com/images/team-og.jpg"],
  },
};

export default function TeamPage() {
  return (
    <>
      <Head>
        {/* Structured Data for Team Members */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Our Team at Capital Engineering Consultancy",
            description:
              "Meet the expert team at Capital Engineering Consultancy, driving innovative engineering and consultancy projects in Dubai.",
            url: "https://www.capitalengg.com/team",
            publisher: {
              "@type": "Organization",
              name: "Capital Engineering Consultancy",
              logo: {
                "@type": "ImageObject",
                url: "https://www.capitalengg.com/images/logo.png",
              },
            },
            hasPart: [
              {
                "@type": "Person",
                name: "Balaskandan Raghunathan",
                worksFor: {
                  "@type": "Organization",
                  name: "Capital Engineering Consultancy",
                },
                description:
                  "John leads our civil engineering projects with over 17 years of experience.",
                sameAs: ["https://www.linkedin.com/in/balaskandan-raghunathan"],
                image: "https://www.capitalengg.com/images/team/balaskandan-raghunathan.jpg",
              },
              {
                "@type": "Person",
                name: "Jane Smith",
                jobTitle: "Consultancy Manager",
                worksFor: {
                  "@type": "Organization",
                  name: "Capital Engineering Consultancy",
                },
                description:
                  "Jane oversees our consultancy services, ensuring client satisfaction.",
                sameAs: ["https://www.linkedin.com/in/janesmith"],
                image: "https://www.capitalengg.com/images/team/jane-smith.jpg",
              },
              // Add more team members as needed
            ],
          })}
        </script>
      </Head>

      {/* Main Content */}
      <div className="team-page">
        <Header3 />
        <main>
          <Breadcumb />
          <section aria-labelledby="team-heading">
            <h1 id="team-heading" className="sr-only">
              Our Team at Capital Engineering Consultancy
            </h1>
            <Team />
            {/* Uncomment if Contact section is needed */}
            {/* <Contact /> */}
          </section>
          <MarqueeComponent />
        </main>
        <Footer8 />
      </div>
    </>
  );
}