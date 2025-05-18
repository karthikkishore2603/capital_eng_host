"use client";
import { allPortfolio } from "@/data/portfolio";
import Image from "next/image";
import Slider from "react-slick";
import tank from "@/public/assets/images/tank.jpg";
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
                  src={tank}
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
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.6rem",
                    }}
                  >
                    <a
                      href="/commercial"
                      style={{ color: "black" }}
                      className="hover-underline"
                    >
                      Commercial
                    </a>
                    <a
                      href="/education"
                      style={{ color: "black" }}
                      className="hover-underline"
                    >
                      Education
                    </a>
                    <a
                      href="/government"
                      style={{ color: "black" }}
                      className="hover-underline"
                    >
                      Government
                    </a>
                    <a
                      href="/healthcare"
                      style={{ color: "black" }}
                      className="hover-underline"
                    >
                      HealthCare
                    </a>
                    <a
                      href="/hospitality"
                      style={{ color: "black" }}
                      className="hover-underline"
                    >
                      Hospitality
                    </a>
                    <a
                      href="/industrial"
                      style={{ color: "black" }}
                      className="hover-underline"
                    >
                      Industrial
                    </a>
                    <a
                      href="/oil-and-gas"
                      style={{ color: "black" }}
                      className="hover-underline"
                    >
                      Oil and Gas
                    </a>
                    <a
                      href="/power-and-energy"
                      style={{ color: "black" }}
                      className="hover-underline"
                    >
                      Power and Energy
                    </a>
                    <a
                      href="/railways"
                      style={{ color: "black" }}
                      className="hover-underline"
                    >
                      Railways
                    </a>
                    <a
                      href="/religious"
                      style={{ color: "black" }}
                      className="hover-underline"
                    >
                      Religious
                    </a>
                    <a
                      href="/residential-and-villa"
                      style={{ color: "black" }}
                      className="hover-underline"
                    >
                      Residential and Villa
                    </a>
                    <a
                      href="/roads-and-infrastructure"
                      style={{ color: "black" }}
                      className="hover-underline"
                    >
                      Roads and Infrastructure
                    </a>
                    <a
                      href="/shelters"
                      style={{ color: "black" }}
                      className="hover-underline"
                    >
                      Shelter
                    </a>
                    {/* <a
                      href="/tank-farms"
                      style={{ color: "black" }}
                      className="hover-underline"
                    >
                      Tank Farms
                    </a> */}
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="title-area mb-35">
              <h2 className="sec-title"style={{color:"#071E53"}}>Tank Farms</h2>
              <p className="sec-text mt-30">
              At Capital Engineering Consultancy, we understand the vital role tank farms play in your operations. More than just storage facilities, tank farms are hubs of safety, efficiency, and sustainability. With projects like Sharjah National Oil Lubricant, Alaska Petroleum, NT Petroleum and Texol Lubricants we specialize in designing infrastructure that ensures seamless storage, transfer, and handling processes.
              </p>
              
            </div>
            <h3>Precision in Tank Farm Engineering</h3>
            <p className="sec-text mb-n1">
            Tank farms demand a unique blend of precision engineering and regulatory compliance to meet the specific requirements of the industries they serve. At Capital Engineering Consultancy, we deliver solutions that address every aspect of tank farm development:<br/>
<b>• Safe Storage Solutions:</b> Our designs integrate robust safety measures, such as advanced containment systems, fire protection networks, and spill management protocols, to ensure compliance with global standards.<br/>
<b>• Operational Efficiency:</b> We optimize tank layouts for streamlined transfer operations, whether for raw materials, finished goods, or specialty fluids, reducing downtime and improving throughput.<br/>
<b>• Environmental Compliance:</b> By incorporating features like emission controls, wastewater treatment systems, and eco-friendly materials, we help your facility meet environmental regulations without compromising functionality.<br/>
<b>• Integrated Infrastructure:</b> From tank piping systems to connected office blocks, we ensure all elements of your tank farm work for seamless operations.
            </p>
            {/* <h3 className="mt-35">Why Clients Trust Us with Tank Farm Projects</h3>
            <p className="sec-text mb-n1">
            From site planning to operational integration, we collaborate closely with you to transform your vision into a high-performing, scalable facility. Our solutions adapt to future demands while ensuring operational safety, reliability, and sustainability.
Tank farms are pivotal to efficient industrial and commercial operations. At Capital Engineering Consultancy, we help you navigate the complexities of tank farm development that enhance safety, reliability, and performance. 
Partner with us to unlock smarter storage solutions for your business.

            </p> */}
          </div>
          {/* <div className="col-lg-12">
            <div className="inner__page-nav space-top mt-n1 mb-n1">
              <a href="#" className="nav-btn">
                <i className="fa fa-arrow-left"></i>
                <span>
                  <span className="link-effect">
                    <span className="effect-1">Previous Post</span>
                    <span className="effect-1">Previous Post</span>
                  </span>
                </span>
              </a>
              <a href="#" className="nav-btn">
                <span>
                  <span className="link-effect">
                    <span className="effect-1">Next Post</span>
                    <span className="effect-1">Next Post</span>
                  </span>
                </span>
                <i className="fa fa-arrow-right"></i>
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
