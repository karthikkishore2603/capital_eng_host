"use client";
import Marquee from "react-fast-marquee";

export default function MarqueeComponent() {
  const marQueeItems = [
    {
      id: 1,
      href: "#",
      text: "Sustainable Water Management Solutions",
      icon: "fas fa-water",
    },
    {
      id: 2,
      href: "#",
      text: "Innovative Waste Recycling Programs",
      icon: "fas fa-recycle",
    },
    {
      id: 3,
      href: "#",
      text: "Eco-Friendly Infrastructure Development",
      icon: "fas fa-building",
    },
    {
      id: 4,
      href: "#",
      text: "Carbon Footprint Reduction Strategies",
      icon: "fas fa-leaf",
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
