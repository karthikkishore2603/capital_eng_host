"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useDrag } from "@use-gesture/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "@/public/assets/servicenew/project.css";

const cards = [
  {
    id: 1,
    src: "/assets/images/service/bim/s1.jpg",
    alt: "Power engineering project by Capital Engineering Consultancy",
    title: "Power Project S1",
  },
  {
    id: 2,
    src: "/assets/images/service/bim/s2.jpg",
    alt: "Infrastructure engineering project by Capital Engineering Consultancy",
    title: "Infrastructure Project S2",
  },
  {
    id: 3,
    src: "/assets/images/service/bim/s3.jpg",
    alt: "Sustainable power infrastructure by Capital Engineering Consultancy",
    title: "Power Project S3",
  },
  {
    id: 4,
    src: "/assets/images/service/bim/p1.jpg",
    alt: "Urban infrastructure project by Capital Engineering Consultancy",
    title: "Infrastructure Project P1",
  },
  {
    id: 5,
    src: "/assets/images/service/bim/s1.jpg",
    alt: "Renewable energy project by Capital Engineering Consultancy",
    title: "Renewable Energy Project S1",
  },
  {
    id: 6,
    src: "/assets/images/service/bim/s3.jpg",
    alt: "Industrial infrastructure by Capital Engineering Consultancy",
    title: "Industrial Project S3",
  },
];

export default function CardSlider() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 769);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % cards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % cards.length);
    resetAutoSlide();
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + cards.length) % cards.length);
    resetAutoSlide();
  };

  const resetAutoSlide = () => {
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000);
  };

  const bind = useDrag(
    ({ direction: [dx], velocity, event }) => {
      if (velocity > 0.2) {
        event.preventDefault();
        if (dx > 0) prevSlide();
        else if (dx < 0) nextSlide();
      }
    },
    { axis: "x", filterTaps: true }
  );

  return (
    <section aria-labelledby="power-infra-portfolio-heading">
      <h2 id="power-infra-portfolio-heading" className="sr-only">
        Power and Infrastructure Portfolio by Capital Engineering Consultancy
      </h2>

      <div
        className={`flex justify-center items-center w-full bg-gray-100 p-4 overflow-hidden relative ${
          isMobile ? "h-[300px]" : "h-[600px]"
        }`}
        role="region"
        aria-label="Power and Infrastructure portfolio carousel"
      >
        {/* Navigation Buttons */}
        {!isMobile && (
          <>
            {/* <motion.button
              onClick={prevSlide}
              whileHover={{ scale: 1.1, backgroundColor: "#e5e7eb" }}
              whileTap={{ scale: 0.9 }}
              className="absolute left-8 top-1/2 transform -translate-y-1/2 z-50 bg-white p-3 rounded-full shadow-md hover:bg-gray-200 transition"
              aria-label="Previous Power and Infrastructure portfolio image"
            >
              <ChevronLeft size={30} />
            </motion.button>
            <motion.button
              onClick={nextSlide}
              whileHover={{ scale: 1.1, backgroundColor: "#e5e7eb" }}
              whileTap={{ scale: 0.9 }}
              className="absolute right-8 top-1/2 transform -translate-y-1/2 z-50 bg-white p-3 rounded-full shadow-md hover:bg-gray-200 transition"
              aria-label="Next Power and Infrastructure portfolio image"
            >
              <ChevronRight size={30} />
            </motion.button> */}
          </>
        )}

        <div
          className={`relative w-full max-w-6xl ${
            isMobile ? "h-[200px] flex justify-center" : "h-[400px]"
          } flex justify-between items-center`}
          {...bind()}
        >
          <AnimatePresence>
            {cards.map((card, i) => {
              if (!isMobile) {
                if (
                  i !== index &&
                  i !== (index + 1) % cards.length &&
                  i !== (index - 1 + cards.length) % cards.length
                ) {
                  return null;
                }
              } else {
                if (i !== index) return null;
              }

              let position =
                "scale-110 translate-x-[20%] opacity-100 z-20 w-[700px] h-[400px]";
              if (!isMobile) {
                if (i === (index + 1) % cards.length) {
                  position =
                    "translate-x-[150%] translate-y-[10%] scale-70 opacity-70 w-[600px] h-[350px]";
                } else if (i === (index - 1 + cards.length) % cards.length) {
                  position =
                    "-translate-x-[150%] scale-80 opacity-70 w-[300px] h-[300px]";
                }
              } else {
                position = "w-[95%] h-[250px] scale-100 opacity-100";
              }

              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className={`absolute top-0 ${position} shadow-lg rounded-xl overflow-hidden`}
                  style={{ borderRadius: "15px", overflow: "hidden" }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={card.src}
                      alt={card.alt}
                      layout="fill"
                      className="w-full h-full object-cover rounded-xl"
                      priority={i === index}
                    />
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.7 }}
                      transition={{ duration: 1 }}
                      className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
                      aria-hidden="true"
                    />
                  </div>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="card-title"
                  >
                    <p className="text-lg font-semibold text-white drop-shadow-lg pt-3">
                      {card.title}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Dots Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-50">
          {cards.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => {
                setIndex(i);
                resetAutoSlide();
              }}
              whileHover={{ scale: 1.2 }}
              className={`w-3 h-3 rounded-full transition-all ${
                i === index ? "bg-white w-6" : "bg-white/30"
              }`}
              aria-label={`View Power and Infrastructure portfolio image ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="description-container">
        <p className="description-text wow img-custom-anim-left animated">
          At Capital Engineering Consultancy, our expertise in power and
          infrastructure engineering delivers high-quality, cost-effective, and
          sustainable solutions, addressing the evolving needs of urban and
          industrial environments worldwide.
        </p>
      </div>

      {/* Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": "Power and Infrastructure Portfolio",
            "creator": {
              "@type": "Organization",
              "name": "Capital Engineering Consultancy",
            },
            "description":
              "A showcase of Capital Engineering Consultancy’s power and infrastructure engineering projects, delivering sustainable and innovative solutions for urban and industrial environments worldwide.",
            "image": cards.map((card) => card.src),
            "keywords":
              "power engineering, infrastructure engineering, sustainable infrastructure, urban development, industrial projects, Capital Engineering Consultancy",
          }),
        }}
      />
    </section>
  );
}