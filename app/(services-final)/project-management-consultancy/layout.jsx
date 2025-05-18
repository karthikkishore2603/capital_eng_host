import Head from 'next/head'; // For Next.js (adjust if using another framework)

export const metadata = {
  title: "Project Management Consultancy | Capital Engineering",
  description:
    "Capital Engineering Consultancy offers expert project management services, delivering efficient planning, risk management, and cost control for successful projects.",
  keywords:
    "Project Management Consultancy, Construction Project Management, Project Planning Services, Risk Management, Capital Engineering Consultancy, Cost Control, Dubai Project Management",
  alternates: {
    canonical: "https://www.capitalengg.com/project-management-consultancy", // Project management-specific URL
  },
  openGraph: {
    title: "Project Management Consultancy | Capital Engineering",
    description:
      "Achieve project success with our management consultancy services, offering expert planning, risk management, and cost control across industries.",
    url: "https://www.capitalengg.com/project-management-consultancy",
    type: "website",
    images: [
      {
        url: "https://www.capitalengg.com/images/project-management.jpg",
        width: 1200,
        height: 630,
        alt: "Project Management Consultancy by Capital Engineering Consultancy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Management Consultancy | Capital Engineering",
    description:
      "Explore Capital Engineering Consultancy’s project management services, ensuring efficient delivery through expert planning and risk management.",
    images: ["https://www.capitalengg.com/images/project-management.jpg"],
  },
};

// Schema Markup for Project Management Consultancy Services
const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Project Management Consultancy Services",
  "provider": {
    "@type": "Organization",
    "name": "Capital Engineering Consultancy",
    "url": "https://www.capitalengg.com",
    "logo": "https://www.capitalengg.com/images/logo.png",
  },
  "description":
    "Capital Engineering Consultancy provides comprehensive project management consultancy services, specializing in project planning, risk management, cost control, and construction management for construction, energy, and infrastructure projects.",
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