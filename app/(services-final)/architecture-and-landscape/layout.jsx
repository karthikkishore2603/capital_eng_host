import Head from 'next/head'; // For Next.js (adjust if using another framework)

export const metadata = {
  title: "Architecture & Landscape Design | Capital Engineering",
  description:
    "Capital Engineering Consultancy offers innovative architecture and landscape design services, creating sustainable and aesthetic spaces tailored to your vision.",
  keywords:
    "Architecture Design, Landscape Design, Sustainable Architecture, Urban Planning, Capital Engineering Consultancy, Modern Landscape Architecture, Dubai Architecture",
  alternates: {
    canonical: "https://www.capitalengg.com/architecture-and-landscape", // Updated URL
  },
  openGraph: {
    title: "Architecture & Landscape Design | Capital Engineering",
    description:
      "Transform your spaces with our expert architecture and landscape design services, blending sustainability and innovation.",
    url: "https://www.capitalengg.com/architecture-and-landscape",
    type: "website",
    images: [
      {
        url: "https://www.capitalengg.com/images/architecture-and-landscape.jpg",
        width: 1200,
        height: 630,
        alt: "Architecture and Landscape Design by Capital Engineering Consultancy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Architecture & Landscape Design | Capital Engineering",
    description:
      "Discover innovative architecture and landscape design solutions by Capital Engineering Consultancy, tailored for sustainable and aesthetic spaces.",
    images: ["https://www.capitalengg.com/images/architecture-and-landscape.jpg"],
  },
};

// Schema Markup for Architecture and Landscape Design Services
const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Architecture and Landscape Design",
  "provider": {
    "@type": "Organization",
    "name": "Capital Engineering Consultancy",
    "url": "https://www.capitalengg.com",
    "logo": "https://www.capitalengg.com/images/logo.png",
  },
  "description":
    "Capital Engineering Consultancy provides expert architecture and landscape design services, specializing in sustainable and innovative solutions for residential, commercial, and public spaces.",
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