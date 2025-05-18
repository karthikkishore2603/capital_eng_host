import Image from "next/image";
import backgroundImage from "@/public/assets/images/service/landscape/a1.jpg"; 
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
        <h2>Blending Nature with Innovation</h2>
        <p>
        We create landscapes that integrate ecological balance, optimized layouts, and efficient resource management, ensuring beauty, sustainability, and functionality. Our innovative approach enhances outdoor spaces without compromising nature.
        </p>
        <a href="/contact"><button className="cta-button">Work With Us→</button></a>
      </div>

     
    </section>
  );
}
