import Image from "next/image";
import backgroundImage from "@/public/assets/images/sn/abt.png"; 
import "@/public/assets/servicenew/about.css"; 
export default function SmartDesignSection() {
  return (
    <section className="smart-design">
      <div className="image-container  wow img-custom-anim-left animated">
        <Image
          src={backgroundImage} // Replace with the actual image path
          alt="Modern Architecture"
          
          objectFit="cover"
        />
      </div>
      <div className="content  wow img-custom-anim-right animated">
        <h2>Smart Engineering for Efficient Spaces</h2>
        <p>
        We integrate advanced MEP strategies, sustainable solutions, and innovative technologies to ensure efficiency, reliability, and long-term value. Our expertise enhances building functionality without compromise.
        </p>
        <a href="/contact"><button className="cta-button">Work With Us→</button></a>
      </div>

    </section>
  );
}
