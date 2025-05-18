import Head from 'next/head'; // For Next.js (adjust if using another framework)

export const metadata = {
  title: "Structural Engineering | Capital Engineering Consultancy",
  description:
    "Capital Engineering Consultancy offers expert structural engineering services, delivering innovative design, analysis, and seismic solutions for safe projects.",
  keywords:
    "Structural Engineering, Structural Design Services, Seismic Engineering, Structural Analysis, Capital Engineering Consultancy, Building Design, Dubai Structural Engineering",
  alternates: {
    canonical: "https://www.capitalengg.com/structural-engineering", // Structural engineering-specific URL
  },
  openGraph: {
    title: "Structural Engineering | Capital Engineering Consultancy",
    description:
      "Ensure project safety with our structural engineering services, offering advanced design, analysis, and seismic engineering solutions.",
    url: "https://www.capitalengg.com/structural-engineering",
    type: "website",
    images: [
      {
        url: "https://www.capitalengg.com/images/structural-engineering.jpg",
        width: 1200,
        height: 630,
        alt: "Structural Engineering Services by Capital Engineering Consultancy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Structural Engineering | Capital Engineering Consultancy",
    description:
      "Explore Capital Engineering Consultancy’s structural engineering services, delivering safe and innovative design solutions for construction projects.",
    images: ["https://www.capitalengg.com/images/structural-engineering.jpg"],
  },
};

// Schema Markup for Structural Engineering Services
const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Structural Engineering Services",
  "provider": {
    "@type": "Organization",
    "name": "Capital Engineering Consultancy",
    "url": "https://www.capitalengg.com",
    "logo": "https://www.capitalengg.com/images/logo.png",
  },
  "description":
    "Capital Engineering Consultancy provides comprehensive structural engineering services, specializing in structural design, analysis, seismic engineering, and retrofitting for commercial, residential, and industrial projects.",
  "areaServed": ["Dubai", "UAE"], // Based on your mention of Dubai on April 18, 2025
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