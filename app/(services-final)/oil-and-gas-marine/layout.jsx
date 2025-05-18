import Head from 'next/head'; // For Next.js (adjust if using another framework)

export const metadata = {
  title: "Oil & Gas and Marine & Ports | Capital Engineering Consultancy",
  description:
    "Capital Engineering Consultancy offers expert oil & gas and marine & ports services, delivering pipeline design, process engineering, and port infrastructure solutions.",
  keywords:
    "Oil and Gas Engineering, Marine Engineering, Port Infrastructure Design, Pipeline Design, Offshore Engineering, Capital Engineering Consultancy, Dubai Oil and Gas Services, UAE Port Design",
  alternates: {
    canonical: "https://www.capitalengg.com/oil-gas-marine-ports", // Combined service-specific URL
  },
  openGraph: {
    title: "Oil & Gas and Marine & Ports | Capital Engineering Consultancy",
    description:
      "Optimize your energy and maritime projects with our oil & gas and marine & ports services, including pipeline design and smart port infrastructure.",
    url: "https://www.capitalengg.com/oil-gas-marine-ports",
    type: "website",
    images: [
      {
        url: "https://www.capitalengg.com/images/oil-gas-marine-ports.jpg",
        width: 1200,
        height: 630,
        alt: "Oil & Gas and Marine & Ports Services by Capital Engineering Consultancy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oil & Gas and Marine & Ports | Capital Engineering Consultancy",
    description:
      "Explore Capital Engineering Consultancy’s oil & gas and marine & ports services, delivering innovative engineering for energy and maritime industries.",
    images: ["https://www.capitalengg.com/images/oil-gas-marine-ports.jpg"],
  },
};

// Schema Markup for Oil & Gas and Marine & Ports Services
const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Oil & Gas and Marine & Ports Engineering Services",
  "provider": {
    "@type": "Organization",
    "name": "Capital Engineering Consultancy",
    "url": "https://www.capitalengg.com",
    "logo": "https://www.capitalengg.com/images/logo.png",
  },
  "description":
    "Capital Engineering Consultancy provides comprehensive oil & gas and marine & ports engineering services, specializing in pipeline design, process engineering, offshore solutions, port infrastructure, and smart port technologies for energy and maritime projects.",
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