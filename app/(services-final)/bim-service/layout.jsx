import Head from 'next/head'; // For Next.js (adjust if using another framework)

export const metadata = {
  title: "BIM Services | Capital Engineering Consultancy",
  description:
    "Capital Engineering Consultancy provides expert BIM services, delivering advanced 3D modeling, coordination, and project management for efficient construction.",
  keywords:
    "BIM Services, Building Information Modeling, 3D BIM Modeling, BIM Consultancy, Capital Engineering Consultancy, BIM Coordination, Dubai BIM Services",
  alternates: {
    canonical: "https://www.capitalengg.com/bim-services", // BIM-specific URL
  },
  openGraph: {
    title: "BIM Services | Capital Engineering Consultancy",
    description:
      "Enhance your construction projects with our BIM services, offering 3D modeling, clash detection, and project coordination for superior efficiency.",
    url: "https://www.capitalengg.com/bim-services",
    type: "website",
    images: [
      {
        url: "https://www.capitalengg.com/images/bim-services.jpg",
        width: 1200,
        height: 630,
        alt: "BIM Services by Capital Engineering Consultancy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BIM Services | Capital Engineering Consultancy",
    description:
      "Discover advanced BIM services by Capital Engineering Consultancy, including 3D modeling and project coordination for construction excellence.",
    images: ["https://www.capitalengg.com/images/bim-services.jpg"],
  },
};

// Schema Markup for BIM Services
const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Building Information Modeling (BIM) Services",
  "provider": {
    "@type": "Organization",
    "name": "Capital Engineering Consultancy",
    "url": "https://www.capitalengg.com",
    "logo": "https://www.capitalengg.com/images/logo.png",
  },
  "description":
    "Capital Engineering Consultancy offers comprehensive BIM services, including 3D modeling, clash detection, and project coordination, to optimize construction projects.",
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