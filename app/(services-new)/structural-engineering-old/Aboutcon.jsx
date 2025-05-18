import Image from "next/image";
import backgroundImage from "@/public/assets/images/service/structure/a1.jpg"; 
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
        <h2>Smart Engineering for Stronger Foundations</h2>
        <p>
        We integrate advanced structural solutions, meticulous analysis, and sustainable practices to enhance safety, efficiency, and resilience. Our expertise ensures lasting performance without compromise.
        </p>
        <a href="/contact"><button className="cta-button">Work With Us→</button></a>
      </div>

     
    </section>
  );
}
