"use client";
import Marquee from "react-fast-marquee";

export default function MarqueeComponent() {
  const marQueeItems = [
    {
      id: 1,
      href: "#",
      text: "Designing the Future, Constructing with Excellence!",
      icon: "fas fa-star-of-life",
    },
    {
      id: 2,
      href: "#",
      text: "Your Vision, Our Expertise",
      icon: "fas fa-star-of-life",
    },
    {
      id: 3,
      href: "#",
      text: "Reliability in Every Brick, Innovation in Every Plan!",
      icon: "fas fa-star-of-life",
    },
    {
      id: 4,
      href: "#",
      text: "Design. Build. Excel in the Capital Way!",
      icon: "fas fa-star-of-life",
    },
  ];
  return (
    <div className="container-fluid p-0 overflow-hidden pt-5"  >
      <div className="slider__marquee clearfix marquee-wrap">
        <div className="marquee_mode marquee__group">
          <Marquee pauseOnHover={true}>
            {marQueeItems.map((elm, i) => (
              <h6 key={i} className="item m-item" >
                <a href={elm.href} style={{fontSize:"30px"}}>
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
