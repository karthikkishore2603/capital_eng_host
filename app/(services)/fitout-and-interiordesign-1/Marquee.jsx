"use client";
import Marquee from "react-fast-marquee";

export default function MarqueeComponent() {
  const marQueeItems = [
    {
      id: 1,
      href: "#",
      text: "Transforming Spaces with Style",
      icon: "fas fa-paint-brush",
    },
    {
      id: 2,
      href: "#",
      text: "Creating Functional and Aesthetic Interiors",
      icon: "fas fa-couch",
    },
    {
      id: 3,
      href: "#",
      text: "Expert Fit Out Solutions for Every Need",
      icon: "fas fa-tools",
    },
    {
      id: 4,
      href: "#",
      text: "Bringing Your Vision to Life",
      icon: "fas fa-lightbulb",
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
