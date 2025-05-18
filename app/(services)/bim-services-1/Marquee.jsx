"use client";
import Marquee from "react-fast-marquee";

export default function MarqueeComponent() {
  const marQueeItems = [
    {
      id: 1,
      href: "#",
      text: "Enhanced Collaboration for Project Success",
      icon: "fas fa-users",
    },
    {
      id: 2,
      href: "#",
      text: "Improved Visualization with 3D Modeling",
      icon: "fas fa-eye",
    },
    {
      id: 3,
      href: "#",
      text: "Increased Efficiency in Design and Construction",
      icon: "fas fa-cogs",
    },
    {
      id: 4,
      href: "#",
      text: "Better Risk Management and Reduced Costs",
      icon: "fas fa-chart-line",
    },
    {
      id: 5,
      href: "#",
      text: "Seamless Integration Across Disciplines",
      icon: "fas fa-plug",
    },
  ];
  
  return (
    <div className="container-fluid p-0 overflow-hidden">
      <div className="slider__marquee clearfix marquee-wrap">
        <div className="marquee_mode marquee__group">
          <Marquee pauseOnHover={true}>
            {marQueeItems.map((elm) => (
              <h6 key={elm.id} className="item m-item">
                <a href={elm.href}style={{fontSize:"30px"}}>
                  <i className={elm.icon}></i> {elm.text}
                </a>
              </h6>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
