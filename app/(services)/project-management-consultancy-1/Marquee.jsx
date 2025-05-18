"use client";
import Marquee from "react-fast-marquee";

export default function MarqueeComponent() {
  const marQueeItems = [
    {
      id: 1,
      href: "#",
      text: "Expert Guidance for Successful Project Execution",
      icon: "fas fa-clipboard-list",
    },
    {
      id: 2,
      href: "#",
      text: "Streamlined Processes for Timely Delivery",
      icon: "fas fa-stopwatch",
    },
    {
      id: 3,
      href: "#",
      text: "Customized Solutions Tailored to Your Needs",
      icon: "fas fa-cogs",
    },
    {
      id: 4,
      href: "#",
      text: "Risk Management and Cost Efficiency",
      icon: "fas fa-chart-line",
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
