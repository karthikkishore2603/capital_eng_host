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
        <h2>Smart Design for Inspired Living</h2>
        <p>
          We design residences that blend individualized aesthetics, optimized
          layouts, and seamless project management, ensuring comfort,
          functionality, and sustainability. Our eco-friendly approach enhances
          living standards without compromising style.
        </p>
        <a href="/contact"><button className="cta-button">Work With Us→</button></a>
      </div>

     
    </section>
  );
}
