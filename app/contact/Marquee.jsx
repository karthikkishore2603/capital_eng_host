"use client";
import Marquee from "react-fast-marquee";

export default function MarqueeComponent() {
  const marQueeItems = [
    {
      id: 1,
      href: "#",
      text: "Get in touch with us for unparalleled flexibility in your projects!",
      icon: "fas fa-phone",
    },
    {
      id: 2,
      href: "#",
      text: "We’re here to assist you 24/7, reach out anytime!",
      icon: "fas fa-clock",
    },
    {
      id: 3,
      href: "#",
      text: "Our team is dedicated to providing top-notch support!",
      icon: "fas fa-user-shield",
    },
    {
      id: 4,
      href: "#",
      text: "Contact us today and let's discuss your next big idea!",
      icon: "fas fa-comment-dots",
    },
  ];
  
  return (
    <div className="container-fluid p-0 overflow-hidden">
      <div className="slider__marquee clearfix marquee-wrap">
        <div className="marquee_mode marquee__group">
          <Marquee pauseOnHover={true}>
            {marQueeItems.map((elm, i) => (
              <h6 key={i} className="item m-item mx-3"> {/* Added horizontal margin for spacing */}
                <a href={elm.href} className="text-decoration-none" style={{fontSize:"30px"}}> {/* Ensures links don't have underlines */}
                  <i className={`${elm.icon} me-2`} ></i> {/* Added margin to the icon */}
                  {elm.text}
                </a>
              </h6>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
