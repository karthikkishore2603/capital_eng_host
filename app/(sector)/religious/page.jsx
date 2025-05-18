import MarqueeComponent from "@/components/common/Marquee";
import Footer8 from "@/components/footers/Footer8";
import Header3 from "@/components/headers/Header3";
import Breadcumb2 from "./breadcumb";
import CtaForm from "@/components/CTA/cta";
import Blogs from "./projects";
import SectorDetails from "./detail";
import { allPortfolio } from "@/data/portfolio";
import Head from "next/head";

export const metadata = {
  title: "Religious Infrastructure | Capital Engineering Consultancy",
  description:
    "Explore our religious sector projects that reflect spiritual elegance and architectural harmony — from temples and mosques to churches and spiritual centers.",
  keywords:
    "Religious Infrastructure, Temple Architecture, Mosque Design, Church Construction, Spiritual Structures, Faith-Based Projects, Capital Engineering",
  openGraph: {
    title: "Religious Infrastructure | Capital Engineering Consultancy",
    description:
      "We blend traditional design with modern engineering to deliver spiritual spaces that inspire and endure.",
    url: "https://www.capitalengg.com/religious",
    type: "website",
    images: [
      {
        url: "https://www.capitalengg.com/images/religious-sector.jpg",
        width: 1200,
        height: 630,
        alt: "Religious Sector Projects by Capital Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Religious Infrastructure | Capital Engineering Consultancy",
    description:
      "Building architectural marvels that embody devotion, tradition, and timeless craftsmanship.",
    images: ["https://www.capitalengg.com/images/religious-sector.jpg"],
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
        <link rel="canonical" href="https://www.capitalengg.com/religious" />
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
