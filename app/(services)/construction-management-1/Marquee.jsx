"use client";
import Marquee from "react-fast-marquee";

export default function MarqueeComponent() {
  const marQueeItems = [
    {
      id: 1,
      href: "#",
      text: "Ensuring Project Delivery on Time and Within Budget",
      icon: "fas fa-clock",
    },
    {
      id: 2,
      href: "#",
      text: "Utilizing Cutting-Edge Technology for Enhanced Efficiency",
      icon: "fas fa-tools",
    },
    {
      id: 3,
      href: "#",
      text: "Committed to Safety and Compliance in Every Project",
      icon: "fas fa-shield-alt",
    },
    {
      id: 4,
      href: "#",
      text: "Sustainable Practices for a Greener Future",
      icon: "fas fa-leaf",
    },
    {
      id: 5,
      href: "#",
      text: "Expert Project Management from Concept to Completion",
      icon: "fas fa-project-diagram",
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
