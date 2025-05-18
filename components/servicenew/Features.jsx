import Image from "next/image";
import F1 from "@/public/assets/images/service/icon/f1.png";
import F2 from "@/public/assets/images/service/icon/f2.png";
import F3 from "@/public/assets/images/service/icon/f3.png";

export default function FeaturesSection() {
  const features = [
    {
      title: (
        <>
          Sustainable <br /> Design
        </>
      ),
      description:
        "We create eco-friendly, energy-efficient spaces for the future with innovation.",
      icon: F1,
    },
    {
      title: (
        <>
          Timely <br /> Delivery
        </>
      ),
      description:
        "We complete your project on time with precision and efficiency, ensuring quality.",
      icon: F2,
    },
    {
      title: (
        <>
          Optimal <br /> Functionality
        </>
      ),
      description:
        "We design spaces that blend practicality with aesthetic appeal and functionality.",
      icon: F3,
    },
  ];

  return (
    <section className="features-wrapper">
      <div className="features-container">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <div className="feature-content">
              <div className="icon-wrapper">
                <div className="icon-background"></div>
                <div className="icon-box">
                  <Image 
                    src={feature.icon} 
                    alt={feature.title} 
                    width={40} 
                    height={40} 
                    style={{
                      filter: 'brightness(0) invert(1)',
                      transition: 'transform 0.3s ease'
                    }}
                    className="feature-icon"
                  />
                </div>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
            <div className="feature-hover-effect"></div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .features-wrapper {
          background: linear-gradient(135deg, #f9fbfd 0%, #f0f5ff 100%);
          padding: 120px 0;
          position: relative;
          overflow: hidden;
        }
        
        .features-wrapper::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: url('/assets/images/abstract-bg-pattern.png') no-repeat;
          background-size: cover;
          opacity: 0.03;
          z-index: 0;
        }

        .features-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
          z-index: 1;
        }

        .feature-item {
          position: relative;
          background: white;
          border-radius: 16px;
          padding: 40px 30px;
          box-shadow: 0 10px 30px rgba(9, 29, 86, 0.05);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.1);
          overflow: hidden;
          z-index: 1;
        }

        .feature-item:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(9, 29, 86, 0.15);
        }

        .feature-item:hover .feature-hover-effect {
          opacity: 1;
          transform: scale(1);
        }

        .feature-content {
          position: relative;
          z-index: 2;
        }

        .icon-wrapper {
          position: relative;
          margin-bottom: 25px;
        }

        .icon-background {
          position: absolute;
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, #091D56 0%, #1a4b8c 100%);
          border-radius: 18px;
          transform: rotate(45deg);
          opacity: 0.1;
          top: -15px;
          left: -15px;
        }

        .icon-box {
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, #091D56 0%, #1a4b8c 100%);
          border-radius: 18px;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .feature-icon {
          filter: brightness(0) invert(1);
          transition: transform 0.3s ease;
        }

        .feature-item:hover .feature-icon {
          transform: scale(1.1);
        }

        .feature-title {
          font-family: "CamberTRIAL-Md";
          font-size: 28px;
          font-weight: 700;
          color: #091D56;
          margin: 0 0 15px 0;
          line-height: 1.3;
          position: relative;
          display: inline-block;
        }

        .feature-title::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 50px;
          height: 3px;
          background: linear-gradient(90deg, #091D56 0%, #1a4b8c 100%);
          border-radius: 3px;
          transition: width 0.3s ease;
        }

        .feature-item:hover .feature-title::after {
          width: 70px;
        }

        .feature-description {
          font-family: "CamberTRIAL-Md";
          font-size: 16px;
          color: #6b7280;
          line-height: 1.7;
          margin: 0;
          transition: color 0.3s ease;
        }

        .feature-item:hover .feature-description {
          color: #4b5563;
        }

        .feature-hover-effect {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(9, 29, 86, 0.03) 0%, rgba(26, 75, 140, 0.03) 100%);
          opacity: 0;
          transform: scale(0.9);
          transition: all 0.4s ease;
          z-index: 0;
        }

        @media (max-width: 1024px) {
          .features-container {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 30px;
            padding: 0 30px;
          }
          
          .feature-item {
            padding: 30px 25px;
          }
        }

        @media (max-width: 768px) {
          .features-wrapper {
            padding: 80px 0;
          }
          
          .features-container {
            grid-template-columns: 1fr;
            max-width: 500px;
          }
          
          .feature-item {
            padding: 35px 30px;
          }
        }

        @media (max-width: 480px) {
          .features-container {
            padding: 0 20px;
          }
          
          .feature-title {
            font-size: 24px;
          }
        }
      `}</style>
    </section>
  );
}