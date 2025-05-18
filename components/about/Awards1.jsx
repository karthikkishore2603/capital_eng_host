"use client";
import { portfolioData2 } from "@/data/portfolio";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";

export default function Projects5() {
  const portfolioData2 = [
    {
      id: 7,
      imageSrc: "/assets/img/award/Capital Best Consultant.webp",
  
      title: "BEST CONSULTANT",
    },
    {
      id: 8,
      imageSrc: "/assets/img/award/BIN MOOSA Certificate Of Appreciation_001.png",
  
      title: "BIN MOOSA & DALY LTD. LLC",
    },
    {
      id: 9,
      imageSrc: "/assets/img/award/Audex Appreciation.jpg",
  
      title: "AUDEX PTE LTD",
    },
    {
      id: 10,
      imageSrc: "/assets/img/award/MEED Culture Project of the Year - Certificate.webp",
  
      title: "MEED PROJECT AWARD 2024",
    },
    {
      id: 11,
      imageSrc: "/assets/img/award/RAKEZ Certificate.png",
  
      title: "RAKEZ",
    },
    {
      id: 12,
      imageSrc: "/assets/img/award/TESORO CASA Certificate of Appreciation (3) (1)_001.png",
  
      title: "TESORO CASA LUXURY HOMEWARE",
    },
    {
        id: 13,
        imageSrc: "/assets/img/award/HAWK Certificate of appreciation (1)_001.png",
    
        title: "HAWK FREIGHT SERVICES LLC",
      },
  ];

  const sliderSettings = {
    slidesToShow: 1,
    centerPadding: "400px",
    dots: true,
    arrows: false,
    centerMode: true,
    autoplay: true, // Enable auto-scrolling
    autoplaySpeed: 2000, // Set auto-scroll interval (in milliseconds)
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          centerMode: true,
          centerPadding: "400px",
        },
      },
      {
        breakpoint: 1200,
        settings: {
          centerMode: true,
          centerPadding: "250px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          centerPadding: "150px",
        },
      },
      {
        breakpoint: 576,
        settings: {
          centerMode: true,
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 450,
        settings: {
          centerMode: true,
          centerPadding: "80px",
        },
      },
      {
        breakpoint: 410,
        settings: {
          centerMode: true,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <div className="portfolio-area-1 space overflow-hidden">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-9">
            <div className="title-area text-center">
              <h2 className="sec-title fs-1" style={{color:"#211574", textDecoration:"underline"}}>Awards and Recognition</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid pt-5">
        <Slider
          className="row global-carousel gx-0 portfolio-slider"
          {...sliderSettings}
        >
          {portfolioData2.map((item) => (
            <div key={item.id} className="col-lg-4 sliderItem">
              <Link
                scroll={false}
                href="#"
                className="style2"
              >
                <div className="portfolio-thumb">
                  <Image
                    width={746}
                    height={540}
                   
                    src={item.imageSrc}
                    style={{
                        objectFit: "cover",
                        width: "600px",
                        height: "350px",
                        border:"2px solid black", borderRadius:"10px"
                      }}
                 
                    alt="portfolio"
                  />
                </div>
                <div className="portfolio-details">
                  <ul className="portfolio-meta">
                    <li>{item.category}</li>
                  </ul>
                  <h3 style={{color:"#fa1b3a"}} className="portfolio-title">{item.title}</h3>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}