import Head from 'next/head'; // For Next.js (adjust if using another framework)

export const metadata = {
  title: "Fitout & Interior Design | Capital Engineering Consultancy",
  description:
    "Capital Engineering Consultancy offers expert fitout and interior design services, creating functional and aesthetic spaces for commercial and residential projects.",
  keywords:
    "Fitout Services, Interior Design, Commercial Interior Design, Office Fitout, Capital Engineering Consultancy, Residential Interior Design, Dubai Interior Design",
  alternates: {
    canonical: "https://www.capitalengg.com/fitout-and-interior-design", // Fitout and interior design-specific URL
  },
  openGraph: {
    title: "Fitout & Interior Design | Capital Engineering Consultancy",
    description:
      "Transform your spaces with our fitout and interior design services, delivering innovative and tailored solutions for commercial and residential environments.",
    url: "https://www.capitalengg.com/fitout-and-interior-design",
    type: "website",
    images: [
      {
        url: "https://www.capitalengg.com/images/fitout-interior-design.jpg",
        width: 1200,
        height: 630,
        alt: "Fitout and Interior Design by Capital Engineering Consultancy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fitout & Interior Design | Capital Engineering Consultancy",
    description:
      "Explore Capital Engineering Consultancy’s fitout and interior design services, crafting aesthetic and functional spaces for diverse projects.",
    images: ["https://www.capitalengg.com/images/fitout-interior-design.jpg"],
  },
};

// Schema Markup for Fitout and Interior Design Services
const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Fitout and Interior Design",
  "provider": {
    "@type": "Organization",
    "name": "Capital Engineering Consultancy",
    "url": "https://www.capitalengg.com",
    "logo": "https://www.capitalengg.com/images/logo.png",
  },
  "description":
    "Capital Engineering Consultancy provides comprehensive fitout and interior design services, specializing in innovative, functional, and aesthetic solutions for commercial and residential spaces.",
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