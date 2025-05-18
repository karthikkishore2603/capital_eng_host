"use client";
import { allPortfolio } from "@/data/portfolio";
import Image from "next/image";
import Slider from "react-slick";
import government from "@/public/assets/images/government.jpg";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
export default function SectorDetails() {
  const itemsImages = [
    "/assets/img/portfolio/portfolio_inner_1.png",
    "/assets/img/portfolio/portfolio_inner_2.png",
  ];
  const slideroptions = {
    arrows: true,
    autoplay: true,
    prevArrow: (
      <button type="button" className="slick-prev slick-arrow">
        <i className="fas fa-arrow-left"></i>
      </button>
    ),

    nextArrow: (
      <button type="button" className="slick-next slick-arrow">
        <i className="fas fa-arrow-right"></i>
      </button>
    ),
  };
  return (
    <div className="project-details-page-area space">
      <div className="container">
       
            <div  className="col-xl-12">
              <div className="project-inner-thumb mb-80 wow img-custom-anim-top animated">
                <Image
                  width={1296}
                  height={700}
                  className="w-100"
                  src={government}
                  alt="img"
                />
              </div>
            </div>
        

        <div className="row justify-content-between flex-row-reverse">
        <div className="col-xl-3 col-lg-4">
  <div className="project-details-info mb-lg-0 mb-40 hide d-none d-md-block">
    <ul className="list-wrap">
      <li>
        <span>Navigate to:</span>
        <div
          className="manage-links"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)", // Two columns
            gap: "0.6rem",
          }}
        >
          {[
            "Shelter",
            "Commercial",
            "Education",
            "Industrial",
            "Railways",
            "Religious",
            "Automobile",
            "Government",
            "Oil and Gas",
            "Power and Energy",
            "Marine and Ports",
            "Food and Beverages",
            "RO and Desalination",
            "Wastewater Treatment",
            "Residential and Villa",
            "Roads and Infrastructure",
            "Logistics and Warehouses",
            "HealthCare and Pharmaceuticals",
          ].map((link, index) => (
            <a
              key={index}
              href={`/${link.toLowerCase().replace(/ /g, "-")}`}
              className="hover-underline"
            >
              {link}
            </a>
          ))}
        </div>
      </li>
    </ul>
  </div>
</div>

<style jsx>{`
  .project-details-info {
    padding: 20px; /* Further reduced padding */
    background: linear-gradient(145deg, #f9f9f9, #e0e0e0);
    border-radius: 8px; /* Reduced border radius */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 100%; /* Ensure it doesn't overflow */
    max-width: 900px; /* Further reduced max-width */
  }
  .list-wrap {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .list-wrap li span {
    font-size: 0.9rem; /* Further reduced font size */
    font-weight: 600;
    color: #333;
    display: block;
    margin-bottom: 0.5rem; /* Further reduced margin */
  }
  .manage-links a {
    color: black;
    text-decoration: none;
    font-size: 0.85rem; /* Further reduced font size */
    position: relative;
    transition: all 0.3s ease;
    padding: 0.2rem 0; /* Further reduced padding */
    display: inline-block; /* Ensure underline only spans text width */
  }
  .manage-links a::after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    background: #071e53;
    bottom: 0;
    left: 0;
    transition: width 0.3s ease;
  }
  .manage-links a:hover {
    color: #071e53;
    transform: translateX(10px);
  }
  .manage-links a:hover::after {
    width: 50%; /* Underline spans only the text width */
  }
`}</style>
          <div className="col-lg-8">
            <div className="title-area mb-35">
              <h2 className="sec-title fs-1"style={{color:"#071E53"}}>Government Projects</h2>
              <p className="sec-text mt-30" style={{ textAlign: "justify" }}>
              At Capital Engineering Consultancy, we recognize that government projects are the backbone of national progress. These initiatives serve as catalysts for community well-being, economic growth, and global leadership. We work in close partnership with public entities, working on infrastructure solutions that align with national priorities and community aspirations. Whether it’s municipal facilities, industrial complexes, or iconic headquarters, we are committed to delivering results that reflect innovation, functionality, and sustainability.
              </p>
              
            </div>
            <h3 style={{ color: "#071E53", marginBottom: "20px" }}>Expertise Rooted in Public Sector Understanding</h3>
            <p className="sec-text mb-n1">
            Government projects require a deep understanding of public infrastructure demands, compliance with regulatory frameworks, and seamless coordination across diverse stakeholders. Our team brings extensive experience in working with various government projects in UAE, in designing efficient, future-ready facilities that serve the public welfare. With precision planning and a commitment to excellence, we provide tailored solutions that ensure smooth project execution and sustainable outcomes, aligning with the UAE’s vision for innovation and growth.
            </p>
            <p className="sec-text mb-n1" style={{ textAlign: "justify" }}>
            <b style={{ color: "#fa1b3a" }}>• Holistic Planning:</b> Addressing every aspect of public sector infrastructure, from urban design to environmental compliance.<br/>
<b style={{ color: "#fa1b3a" }}>• Precision Execution:</b> Leveraging advanced technologies such as BIM to ensure seamless project delivery.<br/>
<b style={{ color: "#fa1b3a" }}>• Sustainability Integration:</b> Embedding eco-friendly practices to create infrastructure that lasts for generations.

            </p>
         
          </div>

        </div>
      </div>
    </div>
  );
}
