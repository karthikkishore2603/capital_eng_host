"use client";
import Image from "next/image";
import backgroundImage from "@/public/assets/images/service/archi/bg.jpg"; 
import "@/public/assets/servicenew/heroStyle.css";
export default function RefinedLiving() {
  return (
    <>
      <div className="container-sn ">
        {/* Background Image */}
        <div className="image-container wow img-custom-anim-top animated">
          <Image
            src={backgroundImage}
            alt="City Skyline"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        {/* Card Positioned at the Bottom */}
        <div className="card">
          <h1 className="heading wow img-custom-anim-top animated">Architecture & Design</h1>
          <p className="subtext wow img-custom-anim-top animated">
            Creating spaces that are functional, inspiring, and uniquely innovative.
          </p>
        </div>
      </div>

      <div className="description wow img-custom-anim-left animated">
        <p className="description-color">
        From Dima Kamal Villa to Zanuba Villa, we design elegant, comfortable, 
        and luxurious homes that effortlessly reflect your lifestyle and vision.
        </p>
      </div>
    </>
  );
}