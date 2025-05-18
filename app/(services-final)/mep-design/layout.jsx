import Head from 'next/head'; // For Next.js (adjust if using another framework)

export const metadata = {
  title: "MEP Design | Capital Engineering Consultancy",
  description:
    "Capital Engineering Consultancy offers expert MEP design services, delivering innovative mechanical, electrical, and plumbing solutions for efficient projects.",
  keywords:
    "MEP Design, Mechanical Engineering Design, Electrical Design, Plumbing Design, Capital Engineering Consultancy, Building Services Design, Dubai MEP Design",
  alternates: {
    canonical: "https://www.capitalengg.com/mep-design",
  },
  openGraph: {
    title: "MEP Design | Capital Engineering Consultancy",
    description:
      "Optimize your projects with our MEP design services, providing advanced mechanical, electrical, and plumbing solutions for seamless building performance.",
    url: "https://www.capitalengg.com/mep-design",
    type: "website",
    images: [
      {
        url: "https://www.capitalengg.com/images/mep-design.jpg",
        width: 1200,
        height: 630,
        alt: "MEP Design by Capital Engineering Consultancy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MEP Design | Capital Engineering Consultancy",
    description:
      "Explore Capital Engineering Consultancy’s MEP design services, delivering efficient mechanical, electrical, and plumbing solutions for diverse projects.",
    images: ["https://www.capitalengg.com/images/mep-design.jpg"],
  },
};

// Schema Markup for MEP Design Services
const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "MEP (Mechanical, Electrical, and Plumbing) Design",
  "provider": {
    "@type": "Organization",
    "name": "Capital Engineering Consultancy",
    "url": "https://www.capitalengg.com",
    "logo": "https://www.capitalengg.com/images/logo.png",
  },
  "description":
    "Capital Engineering Consultancy provides comprehensive MEP design services, specializing in innovative mechanical, electrical, and plumbing solutions for commercial, residential, and industrial projects.",
  "areaServed": ["Dubai", "UAE"], // Adjust based on service areas
};

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={metadata.alternates.canonical} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>
      <main>
        {children}
      </main>
    </>
  );
}