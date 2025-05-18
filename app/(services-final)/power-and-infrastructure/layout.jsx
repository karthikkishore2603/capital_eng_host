import Head from 'next/head'; // For Next.js (adjust if using another framework)

export const metadata = {
  title: "Power & Infrastructure | Capital Engineering Consultancy",
  description:
    "Capital Engineering Consultancy offers expert power and infrastructure services, delivering innovative power plant design, renewable energy, and grid solutions.",
  keywords:
    "Power Engineering, Infrastructure Design, Renewable Energy Solutions, Grid System Design, Capital Engineering Consultancy, Power Plant Design, Dubai Power Engineering",
  alternates: {
    canonical: "https://www.capitalengg.com/power-and-infrastructure", // Power and infrastructure-specific URL
  },
  openGraph: {
    title: "Power & Infrastructure | Capital Engineering Consultancy",
    description:
      "Drive progress with our power and infrastructure services, including renewable energy integration, power plant design, and modern grid systems.",
    url: "https://www.capitalengg.com/power-and-infrastructure",
    type: "website",
    images: [
      {
        url: "https://www.capitalengg.com/images/power-infrastructure.jpg",
        width: 1200,
        height: 630,
        alt: "Power and Infrastructure Services by Capital Engineering Consultancy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Power & Infrastructure | Capital Engineering Consultancy",
    description:
      "Explore Capital Engineering Consultancy’s power and infrastructure services, delivering sustainable power and robust infrastructure solutions.",
    images: ["https://www.capitalengg.com/images/power-infrastructure.jpg"],
  },
};

// Schema Markup for Power and Infrastructure Services
const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Power and Infrastructure Engineering Services",
  "provider": {
    "@type": "Organization",
    "name": "Capital Engineering Consultancy",
    "url": "https://www.capitalengg.com",
    "logo": "https://www.capitalengg.com/images/logo.png",
  },
  "description":
    "Capital Engineering Consultancy provides comprehensive power and infrastructure engineering services, specializing in power plant design, renewable energy integration, grid system solutions, and sustainable infrastructure development for energy and utility projects.",
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