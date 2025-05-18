"use client";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { clients } from "@/data/clients";

export default function Clients() {
  return (
    <div className="container-fluid space-bottom pt-50" style={{ backgroundColor: "#f8f9fa" }}>
      {/* Section Title */}
      <div className="text-center mb-5">
        <h2 className="text-center my-4" style={{ color: "#211574", fontSize: "2.5rem", fontWeight: "700" }}>
          Our Clients
        </h2>
        <p className="text-muted" style={{ color: "#e9647c", fontSize: "1.2rem" }}>
          Trusted by leading brands worldwide
        </p>
      </div>

      {/* Marquee Client Logos */}
      <div className="client-marquee-wrap">
        <Marquee pauseOnHover={true} speed={50} gradient={false}>
          {clients.map((client, index) => (
            <div key={index} className="client-logo mx-4">
              <a href={client.href}>
                <Image
                  src={client.img}
                  width={164}
                  height={45}
                  alt="Client Logo"
                  className="img-fluid"
                  style={{ objectFit: "contain", maxWidth: "140px", filter: "grayscale(100%)", transition: "filter 0.3s ease-in-out" }}
                />
              </a>
            </div>
          ))}
        </Marquee>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .client-marquee-wrap {
          padding: 10px 0;
          background: linear-gradient(90deg, #ef828f 0%, #e38387 50%, #fa1b3a 100%);
          border-radius: 20px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }
        .client-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease-in-out;
        }
        .client-logo:hover img {
          filter: grayscale(0%);
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
}