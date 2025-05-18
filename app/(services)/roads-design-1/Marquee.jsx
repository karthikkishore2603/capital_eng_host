"use client";
import Marquee from "react-fast-marquee";

export default function MarqueeComponent() {
  const marQueeItems = [
    {
      id: 1,
      href: "#",
      text: "Expert Road Design and Planning",
      icon: "fas fa-road",
    },
    {
      id: 2,
      href: "#",
      text: "Sustainable Infrastructure Solutions",
      icon: "fas fa-tree",
    },
    {
      id: 3,
      href: "#",
      text: "Innovative Traffic Management",
      icon: "fas fa-traffic-light",
    },
    {
      id: 4,
      href: "#",
      text: "Cost-Effective Urban Development",
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
