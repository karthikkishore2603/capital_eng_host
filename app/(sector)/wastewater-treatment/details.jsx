"use client";
import { allPortfolio } from "@/data/portfolio";
import Image from "next/image";
import Slider from "react-slick";
import commercial1 from "@/public/assets/images/wastewater_treatment.jpg";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
export default function SectorDetails() {
  //  const itemsImages = [
  //     commercial1,
  //   ];
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
        {/* <Slider className="row global-carousel default" {...slideroptions}> */}

        <div className="col-xl-12">
          <div className="project-inner-thumb mb-80 wow img-custom-anim-top animated">
            <Image
              width={1296}
              height={700}
              className="w-100"
              src={commercial1}
              alt="img"
            />
          </div>
        </div>

        {/* </Slider> */}

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
              <h2 className="sec-title fs-1" style={{ color: "#071E53" }}>
                Wastewater Treatment
              </h2>
              <p className="sec-text mt-30" style={{ textAlign: "justify" }}>
                At Capital Engineering Consultancy, we specialize in designing
                and optimizing wastewater treatment plants that ensure efficient
                water purification, environmental sustainability, and regulatory
                compliance. Our expertise lies in developing cutting-edge
                treatment solutions that support industrial, municipal, and
                commercial wastewater management needs.
              </p>
            </div>
            <h3 style={{ color: "#071E53", marginBottom: "20px" }}>Sustainable Solutions for Water Management</h3>
            <p className="sec-text mb-n1" style={{ textAlign: "justify" }}>
              Wastewater treatment plants play a vital role in protecting
              natural resources and promoting water reuse. Our design approach
              focuses on:
              <br />
              <b style={{ color: "#fa1b3a" }}>• Advanced Treatment Technologies:</b> Implementing biological,
              chemical, and membrane-based treatment processes for effective
              wastewater purification.
              <br />
              <b style={{ color: "#fa1b3a" }}>• Industrial & Municipal Treatment Facilities:</b> Designing
              scalable plants that cater to diverse wastewater sources, ensuring
              compliance with environmental standards.
              <br />
              <b style={{ color: "#fa1b3a" }}>• Water Recycling & Reuse Systems:</b> Developing sustainable
              solutions that enable treated water to be reused for irrigation,
              industrial processes, and potable applications.
              <br />
              <b style={{ color: "#fa1b3a" }}>• Sludge Management & Resource Recovery :</b> Incorporating
              efficient sludge treatment, biogas generation, and nutrient
              recovery systems to minimize waste.
              <br />
              <b style={{ color: "#fa1b3a" }}>• Smart Automation & Monitoring:</b> Integrating IoT and
              AI-based controls for real-time monitoring, predictive
              maintenance, and enhanced operational efficiency.
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
