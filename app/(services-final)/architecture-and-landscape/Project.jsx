"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useDrag } from "@use-gesture/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "@/public/assets/servicenew/project.css";

const cards = [
  {
    id: 1,
    src: "/assets/images/servicenew/arch/baps mandir.jpg",
    alt: "BAPS Mandir architecture by Capital Engineering Consultancy",
    title: "BAPS Mandir",
  },
  {
    id: 2,
    src: "/assets/images/servicenew/arch/chile pavlion.jpg",
    alt: "Chile Pavilion architecture by Capital Engineering Consultancy",
    title: "Chile Pavilion",
  },
  {
    id: 3,
    src: "/assets/images/servicenew/arch/ExteriorRender_03-20200410.jpg",
    alt: "Slovenia architectural design by Capital Engineering Consultancy",
    title: "Slovenia",
  },
  {
    id: 4,
    src: "/assets/images/servicenew/arch/Capital plaza.jpg",
    alt: "Capital Plaza architecture by Capital Engineering Consultancy",
    title: "Capital Plaza",
  },
];

const FloatingShapes = () => {
  return (
    <>
      <motion.div
        initial={{ x: -100, y: -100, opacity: 0.1 }}
        animate={{
          x: [0, 50, -30, 0],
          y: [0, 40, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-amber-400/10 to-transparent border border-amber-400/20 blur-xl"
        aria-hidden="true"
      />
      <motion.div
        initial={{ x: 100, y: 100, opacity: 0.1 }}
        animate={{
          x: [0, -60, 40, 0],
          y: [0, -50, 30, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
          delay: 5,
        }}
        className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-gradient-to-br from-blue-400/10 to-transparent border border-blue-400/20 blur-xl"
        aria-hidden="true"
      />
      <motion.div
        initial={{ opacity: 0.03 }}
        animate={{ opacity: [0.03, 0.08, 0.03] }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute inset-0 bg-[linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(#fff_1px,transparent_1px)] bg-[size:40px_40px]"
        aria-hidden="true"
      />
    </>
  );
};

export default function CardSlider() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const checkDeviceType = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };
    checkDeviceType();
    window.addEventListener("resize", checkDeviceType);
    return () => window.removeEventListener("resize", checkDeviceType);
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
    <section
      className="relative overflow-hidden"
      ref={containerRef}
      aria-labelledby="portfolio-heading"
    >
      <h2 id="portfolio-heading" className="sr-only">
        Architecture and Landscape Design Portfolio by Capital Engineering Consultancy
      </h2>

      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 opacity-95"
          aria-hidden="true"
        />
        <FloatingShapes />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-[url('/assets/images/patterns/dot-pattern.svg')] bg-[size:20px_20px] animate-[moveParticles_100s_linear_infinite]"
          aria-hidden="true"
        />
        <motion.div
          initial={{ backgroundPosition: "0% 0%" }}
          animate={{ backgroundPosition: "100% 100%" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-10 bg-[length:200%_200%] bg-gradient-to-br from-amber-400/30 via-blue-500/20 to-purple-600/30"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent opacity-30"
          aria-hidden="true"
        />
        <div
          className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-black to-transparent opacity-30"
          aria-hidden="true"
        />
      </div>

      <div
        className={`relative flex justify-center items-center w-full p-4 overflow-hidden ${
          isMobile ? "h-[300px]" : isTablet ? "h-[500px]" : "h-[700px]"
        }`}
      >
        {!isMobile && !isTablet && (
          <>
            {/* <motion.button
              onClick={prevSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute left-8 top-1/2 transform -translate-y-1/2 z-50 bg-black/30 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-black/50 transition border border-white/20"
              aria-label="Previous architecture portfolio image"
            >
              <ChevronLeft size={30} className="text-white" />
            </motion.button>
            <motion.button
              onClick={nextSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute right-8 top-1/2 transform -translate-y-1/2 z-50 bg-black/30 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-black/50 transition border border-white/20"
              aria-label="Next architecture portfolio image"
            >
              <ChevronRight size={30} className="text-white" />
            </motion.button> */}
          </>
        )}

        <div
          className={`relative w-full max-w-6xl ${
            isMobile ? "h-[200px]" : isTablet ? "h-[400px]" : "h-[500px]"
          } flex justify-between items-center`}
          {...bind()}
          role="region"
          aria-label="Architecture and landscape design portfolio carousel"
        >
          <AnimatePresence>
            {cards.map((card, i) => {
              if (!isMobile && !isTablet) {
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
                "scale-110 translate-x-[20%] opacity-100 z-20 w-[700px] h-[450px]";
              if (!isMobile && !isTablet) {
                if (i === (index + 1) % cards.length) {
                  position =
                    "translate-x-[150%] translate-y-[10%] scale-70 opacity-70 w-[600px] h-[385px]";
                } else if (i === (index - 1 + cards.length) % cards.length) {
                  position =
                    "-translate-x-[150%] scale-80 opacity-70 w-[300px] h-[350px]";
                }
              } else if (isTablet) {
                position = "w-[90%] h-[350px] scale-100 opacity-100";
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
                  className={`absolute top-0 ${position} shadow-2xl rounded-xl overflow-hidden border-2 border-white/20`}
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
                    <p className="text-lg font-semibold text-white drop-shadow-lg pt-3" style={{ fontFamily: "CamberTRIAL-Md"}}>
                      {card.title}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

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
              aria-label={`View portfolio image ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="relative bg-gradient-to-b from-gray-900 to-black py-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "96px" }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -top-1 left-0 w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"
              aria-hidden="true"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="description-text text-white/80 text-lg sm:text-xl leading-relaxed font-light pl-2"
            >
              At Capital Engineering Consultancy, we create purposeful and sustainable
              architecture and landscape designs that seamlessly integrate innovation,
              functionality, and aesthetics, ensuring every project stands the test of
              time with excellence and precision.
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": "Architecture and Landscape Design Portfolio",
            "creator": {
              "@type": "Organization",
              "name": "Capital Engineering Consultancy",
            },
            "description":
              "A showcase of innovative architecture and sustainable landscape design projects by Capital Engineering Consultancy, including BAPS Mandir, Chile Pavilion, Slovenia, and Capital Plaza.",
            "image": cards.map((card) => card.src),
            "keywords": "architecture, landscape design, sustainable design, Capital Engineering Consultancy",
          }),
        }}
      />
    </section>
  );
}