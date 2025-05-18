import Head from 'next/head'; // For Next.js (adjust if using another framework)

export const metadata = {
  title: "Environmental Solutions | Capital Engineering Consultancy",
  description:
    "Capital Engineering Consultancy offers innovative environmental solutions, including sustainability consulting, green design, and impact assessments for a greener future.",
  keywords:
    "Environmental Solutions, Sustainability Consulting, Green Design, Environmental Impact Assessment, Capital Engineering Consultancy, Energy Efficiency, Dubai Environmental Solutions",
  alternates: {
    canonical: "https://www.capitalengg.com/environmental-solutions", // Environmental solutions-specific URL
  },
  openGraph: {
    title: "Environmental Solutions | Capital Engineering Consultancy",
    description:
      "Discover our environmental solutions, from sustainability consulting to green design, driving eco-friendly and efficient projects.",
    url: "https://www.capitalengg.com/environmental-solutions",
    type: "website",
    images: [
      {
        url: "https://www.capitalengg.com/images/environmental-solutions.jpg",
        width: 1200,
        height: 630,
        alt: "Environmental Solutions by Capital Engineering Consultancy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Environmental Solutions | Capital Engineering Consultancy",
    description:
      "Explore Capital Engineering Consultancy’s environmental solutions, delivering sustainability consulting and green design for eco-conscious projects.",
    images: ["https://www.capitalengg.com/images/environmental-solutions.jpg"],
  },
};

// Schema Markup for Environmental Solutions
const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Environmental Solutions and Sustainability Consulting",
  "provider": {
    "@type": "Organization",
    "name": "Capital Engineering Consultancy",
    "url": "https://www.capitalengg.com",
    "logo": "https://www.capitalengg.com/images/logo.png",
  },
  "description":
    "Capital Engineering Consultancy provides comprehensive environmental solutions, including sustainability consulting, green design, environmental impact assessments, and energy-efficient strategies for sustainable projects.",
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