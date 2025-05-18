"use client";
import Marquee from "react-fast-marquee";

export default function MarqueeComponent() {
  const marQueeItems = [
    {
      id: 1,
      href: "#",
      text: "Driving Innovation in Engineering Solutions",
      icon: "fas fa-cogs",
    },
    {
      id: 2,
      href: "#",
      text: "Committed to Excellence and Integrity",
      icon: "fas fa-star",
    },
    {
      id: 3,
      href: "#",
      text: "Building Strong Partnerships with Clients",
      icon: "fas fa-handshake",
    },
    {
      id: 4,
      href: "#",
      text: "Transforming Visions into Reality",
      icon: "fas fa-lightbulb",
    },
    {
      id: 5,
      href: "#",
      text: "Expertise Across Multiple Engineering Disciplines",
      icon: "fas fa-wrench",
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
