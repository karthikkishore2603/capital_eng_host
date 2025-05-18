"use client";
import Marquee from "react-fast-marquee";

export default function MarqueeComponent() {
  const marQueeItems = [
    {
      id: 1,
      href: "#",
      text: "Accurate Flow Measurement Solutions",
      icon: "fas fa-tachometer-alt",
    },
    {
      id: 2,
      href: "#",
      text: "Reliable Pressure Monitoring Systems",
      icon: "fas fa-gauge",
    },
    {
      id: 3,
      href: "#",
      text: "Advanced Control Valve Integration",
      icon: "fas fa-cogs",
    },
    {
      id: 4,
      href: "#",
      text: "Comprehensive Pipeline Design Services",
      icon: "fas fa-pipeline",
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
