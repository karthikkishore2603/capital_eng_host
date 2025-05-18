import MarqueeComponent from "@/components/common/Marquee";
import Footer8 from "@/components/footers/Footer8";
import Header3 from "@/components/headers/Header3";
import Breadcumb2 from "./breadcumb";
import CtaForm from "@/components/CTA/cta";
import SectorDetails from "./detail";
import Blogs from "./projects";
import { allPortfolio } from "@/data/portfolio";
import Head from "next/head";

export const metadata = {
  title: "Industrial & Logistics Sector | Capital Engineering Consultancy",
  description:
    "Capital Engineering Consultancy provides advanced engineering solutions for industrial plants, warehouses, and logistics hubs, optimizing operations and boosting productivity.",
  keywords:
    "Industrial Engineering, Logistics Infrastructure, Warehouse Development, Capital Engineering Consultancy, Manufacturing Plants, Supply Chain Engineering, Industrial Solutions",
  openGraph: {
    title: "Industrial & Logistics Sector | Capital Engineering Consultancy",
    description:
      "From smart warehouses to manufacturing units, discover how Capital Engineering Consultancy empowers industrial and logistics excellence with state-of-the-art engineering.",
    url: "https://www.capitalengg.com/industrial-and-logistics",
    type: "website",
    images: [
      {
        url: "https://www.capitalengg.com/images/industrial-and-logistics-sector.jpg",
        width: 1200,
        height: 630,
        alt: "Industrial and Logistics - Capital Engineering Consultancy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industrial & Logistics Sector | Capital Engineering Consultancy",
    description:
      "Revolutionizing logistics hubs and industrial ecosystems with cutting-edge infrastructure. Explore our expertise in engineering for efficiency and scalability.",
    images: [
      "https://www.capitalengg.com/images/industrial-and-logistics-sector.jpg",
    ],
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
        <link rel="canonical" href="https://www.capitalengg.com/industrial-and-logistics" />
      </Head>

      <Header3 />
      <Breadcumb2 />
      <SectorDetails />
      <Blogs />
      {/* <CtaForm /> */}
      <MarqueeComponent />
      <Footer8 />
    </>
  );
}
