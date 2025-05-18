import { portfolioData5 } from "@/data/portfolio";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Projects3() {
  return (
    <div className="portfolio-area-1 space overflow-hidden">
      <div className="container">
        <div className="row gy-40 gx-60 justify-content-center">
          {portfolioData5.map((elm, i) => (
            <div key={i} className="col-xl-6 col-lg-6">
              <div className="portfolio-wrap">
                <div className="portfolio-thumb">
                  <Link scroll={false} href={elm.link}>
                    <Image
                      width={618}
                      height={470}
                      src={elm.imageSrc}
                      alt={elm.altText}
                    />
                  </Link>
                </div>
                <div className="portfolio-details">
                  <h3 className="portfolio-title mb-3" style={{fontSize:"20px"}}>
                    <Link scroll={false} href={elm.link}>
                      {elm.title}
                    </Link>
                  </h3>
                  <ul className="portfolio-meta">
                    {/* Conditional rendering for categoryLinks */}
                    {elm.categoryLinks && elm.categoryLinks.length > 0 ? (
                      elm.categoryLinks.map((elm2, i2) => (
                        <li key={i2}>
                          <a href="#">{elm2}</a>
                        </li>
                      ))
                    ) : (
                      <li>No Categories Available</li>
                    )}
                  </ul>
                </div>
                <div className="portfolio-button">
                  <Link scroll={false} className="btn" href={elm.link} style={{fontSize:"10px",padding:"15px 20px 10px 20px",borderRadius:"4px"}}>
                    <span className="link-effect">
                      <span className="effect-1">{elm.buttonText}</span>
                      <span className="effect-1">{elm.buttonText}</span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
