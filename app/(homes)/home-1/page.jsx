import Footer1 from "@/components/footers/Footer1";
import Header3 from "@/components/headers/Header3";
import SearchPopup from "@/components/headers/component/SearchPopup";
import About from "@/components/homes/home-1/About";
import Blogs from "@/components/homes/common/Blogs";
import Faq from "@/components/homes/home-1/Faq";

import Hero from "@/components/homes/home-1/Hero";
import Portfolio from "@/components/homes/home-1/Portfolio";
import Team from "@/components/homes/common/Team";
import Testimonials from "@/components/homes/common/Testimonials";
export const metadata = {
  title: "Capital Engineering Consultancy",
};
export default function HomePage1() {
  return (
    <>
      <SearchPopup />
      {/* <Header3 /> */}
      {/* <Hero /> */}
     <div style={styles.container}>
      <iframe
        src="https://capital-landing-tan.vercel.app/"
        title="Embedded Page"
        style={styles.iframe}
        allowFullScreen
      ></iframe>
    </div>
      {/* <About />

      <Faq />
      <Portfolio />
      <Team />
      <Testimonials />
      <Blogs />*/}
      <Footer1 /> 
    </>
  );
}

const styles = {
  container: {
    margin: 0,
    padding: 0,
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
  },
  iframe: {
    width: '100%',
    height: '100%',
    border: 'none',
  },
};