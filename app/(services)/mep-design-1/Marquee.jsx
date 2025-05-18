"use client";
import Marquee from "react-fast-marquee";

export default function MarqueeComponent() {
  const marQueeItems = [
    {
      id: 1,
      href: "#",
      text: "Efficient HVAC System Design",
      icon: "fas fa-wind",
    },
    {
      id: 2,
      href: "#",
      text: "Innovative Electrical Solutions",
      icon: "fas fa-bolt",
    },
    {
      id: 3,
      href: "#",
      text: "Advanced Plumbing Systems",
      icon: "fas fa-faucet",
    },
    {
      id: 4,
      href: "#",
      text: "Sustainable Energy Optimization",
      icon: "fas fa-solar-panel",
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
