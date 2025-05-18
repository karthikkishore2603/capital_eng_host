import Image from "next/image";
import backgroundImage from "@/public/assets/images/service/bim/a1.jpg"; 
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
        <h2>Smart Modelling for Smarter Construction</h2>
        <p>
        We integrate advanced BIM techniques, seamless coordination, and innovative detailing, ensuring accuracy, efficiency, and cost-effective project execution. Our expertise enhances design and construction synergy.
        </p>        
        <a href="/contact"><button className="cta-button">Work With Us→</button></a>
      </div>

     
    </section>
  );
}
