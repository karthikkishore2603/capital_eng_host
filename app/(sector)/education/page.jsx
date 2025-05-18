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
  title: "Education Sector | Capital Engineering Consultancy",
  description:
    "Explore how Capital Engineering Consultancy delivers innovative engineering solutions in the education sector, enhancing institutions through smart infrastructure, digital classrooms, and sustainable campus design.",
  keywords:
    "Education Engineering, Smart Classrooms, Sustainable Campus Design, Capital Engineering Consultancy, School Infrastructure, Educational Projects, Digital Learning Environments",
  openGraph: {
    title: "Education Sector | Capital Engineering Consultancy",
    description:
      "Capital Engineering Consultancy specializes in modernizing educational infrastructure with advanced engineering and technology solutions for schools, colleges, and universities.",
    url: "https://www.capitalengg.com/education",
    type: "website",
    images: [
      {
        url: "https://www.capitalengg.com/images/education-sector.jpg",
        width: 1200,
        height: 630,
        alt: "Education Sector - Capital Engineering Consultancy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Education Sector | Capital Engineering Consultancy",
    description:
      "From school infrastructure to smart learning environments, discover how Capital Engineering Consultancy is shaping the future of education.",
    images: [
      "https://www.capitalengg.com/images/education-sector.jpg",
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
        <link rel="canonical" href="https://www.capitalengg.com/education" />
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
