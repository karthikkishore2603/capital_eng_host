"use client";
import Marquee from "react-fast-marquee";

export default function MarqueeComponent() {
  const marQueeItems = [
    {
      id: 1,
      href: "#", // Update the link to the relevant news article
      text: "Breaking News: Major Developments in Tech Industry",
      icon: "fas fa-bullhorn",
    },
    {
      id: 2,
      href: "#", // Update the link to the relevant news article
      text: "New Study Reveals Trends in Consumer Behavior",
      icon: "fas fa-chart-line",
    },
    {
      id: 3,
      href: "#", // Update the link to the relevant news article
      text: "Exclusive Interview with Industry Leaders",
      icon: "fas fa-user-tie",
    },
    {
      id: 4,
      href: "#", // Update the link to the relevant news article
      text: "Upcoming Events: What to Expect This Month",
      icon: "fas fa-calendar-alt",
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
