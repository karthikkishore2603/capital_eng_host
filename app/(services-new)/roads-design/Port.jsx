import Image from "next/image";
import backgroundImage from "@/public/assets/images/service/road/p1.jpg";
import "@/public/assets/servicenew/port.css"
export default function HeroSection() {
  return (
    <div className="heroContainer  wow img-custom-anim-top animated">
      {/* Blue Background (Right Half) */}
      <div className="blueCard"></div>

      {/* Image (Centered & Overlapping) */}
      <div className="imageContainer">
        <Image src={backgroundImage} alt="Architecture" className="image" />
      </div>

      {/* Text on Right Side Inside Blue Card */}
      <div className="textBox">
        <h2>Where {" "}
          <span className="boldText">Engineering </span>Not Just{" "}
          <span className="boldText">Roads,</span>But Progress
        </h2>
        <a href="/contact" className="knowMore">
          Work With Us →
        </a>
      </div>

      
    </div>
  );
}
