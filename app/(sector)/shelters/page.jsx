import MarqueeComponent from "@/components/common/Marquee";
import Footer8 from "@/components/footers/Footer8";
import Header3 from "@/components/headers/Header3";
import Breadcumb2 from "./breadcumb";
import CtaForm from "@/components/CTA/cta";
import SectorDetails from "./detail";
import { allPortfolio } from "@/data/portfolio";
import Head from "next/head";

export const metadata = {
  title: "Shelters | Capital Engineering Consultancy",
  description:
    "Discover our innovative shelter construction solutions for disaster relief, community housing, and long-term infrastructure development.",
  keywords:
    "Shelters, Disaster Relief, Housing Infrastructure, Shelter Engineering, Capital Engineering, Emergency Accommodation, Temporary Shelters",
  openGraph: {
    title: "Shelters | Capital Engineering Consultancy",
    description:
      "Expertly designed shelters that support safety, resilience, and comfort in both emergency and permanent settings.",
    url: "https://www.capitalengg.com/shelters",
    type: "website",
    images: [
      {
        url: "https://www.capitalengg.com/images/shelter-sector.jpg",
        width: 1200,
        height: 630,
        alt: "Shelter Construction Sector",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shelters | Capital Engineering Consultancy",
    description:
      "Providing sustainable and scalable shelter solutions tailored for communities and emergency scenarios.",
    images: ["https://www.capitalengg.com/images/shelter-sector.jpg"],
  },
};

export default function ProjectPageDetails({ params }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />
        <link rel="canonical" href="https://www.capitalengg.com/shelters" />
      </Head>

      <Header3 />
      <Breadcumb2 />
      <SectorDetails />
      {/* <CtaForm /> */}
      <MarqueeComponent />
      <Footer8 />
    </>
  );
}
