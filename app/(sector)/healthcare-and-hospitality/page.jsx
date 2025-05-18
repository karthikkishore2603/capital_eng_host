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
  title: "Healthcare & Hospitality Sector | Capital Engineering Consultancy",
  description:
    "Capital Engineering Consultancy specializes in delivering innovative engineering solutions for hospitals, clinics, hotels, and wellness centers, enhancing infrastructure, safety, and guest experience.",
  keywords:
    "Healthcare Engineering, Hospitality Design, Hospital Infrastructure, Hotel Projects, Medical Facilities, Capital Engineering Consultancy, Wellness Centers, Healthcare Solutions",
  openGraph: {
    title: "Healthcare & Hospitality Sector | Capital Engineering Consultancy",
    description:
      "From medical infrastructure to luxury hospitality projects, explore how Capital Engineering Consultancy enhances human experiences with smart, sustainable design.",
    url: "https://www.capitalengg.com/healthcare-and-hospitality",
    type: "website",
    images: [
      {
        url: "https://www.capitalengg.com/images/healthcare-and-hospitality-sector.jpg",
        width: 1200,
        height: 630,
        alt: "Healthcare and Hospitality - Capital Engineering Consultancy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthcare & Hospitality Sector | Capital Engineering Consultancy",
    description:
      "Engineering excellence for hospitals, hotels, clinics, and wellness spaces. Discover how Capital Engineering Consultancy builds for care and comfort.",
    images: [
      "https://www.capitalengg.com/images/healthcare-and-hospitality-sector.jpg",
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
        <link rel="canonical" href="https://www.capitalengg.com/healthcare-and-hospitality" />
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
