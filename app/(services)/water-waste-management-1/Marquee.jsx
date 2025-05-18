"use client";
import Marquee from "react-fast-marquee";

export default function MarqueeComponent() {
  const marQueeItems = [
    {
      id: 1,
      href: "#",
      text: "Innovative Water Treatment Solutions",
      icon: "fas fa-water",
    },
    {
      id: 2,
      href: "#",
      text: "Efficient Waste Management Strategies",
      icon: "fas fa-recycle",
    },
    {
      id: 3,
      href: "#",
      text: "Sustainable Stormwater Management",
      icon: "fas fa-cloud-rain",
    },
    {
      id: 4,
      href: "#",
      text: "Industrial Waste Management Solutions",
      icon: "fas fa-industry",
    },
    {
      id: 5,
      href: "#",
      text: "Eco-Friendly Solid Waste Practices",
      icon: "fas fa-leaf",
    },
    {
      id: 6,
      href: "#",
      text: "Green Infrastructure for Sustainability",
      icon: "fas fa-seedling",
    },
  ];
  return (
    <div className="container-fluid p-0 overflow-hidden">
      <div className="slider__marquee clearfix marquee-wrap">
        <div className="marquee_mode marquee__group">
          <Marquee pauseOnHover={true}>
            {marQueeItems.map((elm, i) => (
              <h6 key={i} className="item m-item">
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
