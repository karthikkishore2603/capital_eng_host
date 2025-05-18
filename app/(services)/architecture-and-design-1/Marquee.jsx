"use client";
import Marquee from "react-fast-marquee";

export default function MarqueeComponent() {
  const marQueeItems = [
    {
      id: 1,
      href: "#",
      text: "Innovative Architectural Solutions",
      icon: "fas fa-building",
    },
    {
      id: 2,
      href: "#",
      text: "Sustainable Design Practices",
      icon: "fas fa-leaf",
    },
    {
      id: 3,
      href: "#",
      text: "Cutting-edge Interior Designs",
      icon: "fas fa-couch",
    },
    {
      id: 4,
      href: "#",
      text: "Expert Landscape Architecture",
      icon: "fas fa-tree",
    },
    {
      id: 5,
      href: "#",
      text: "Comprehensive Urban Planning",
      icon: "fas fa-city",
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
