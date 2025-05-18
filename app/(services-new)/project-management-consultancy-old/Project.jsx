import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useDrag } from "@use-gesture/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "@/public/assets/servicenew/project.css"
const cards = [
  { id: 1, src: "/assets/images/sn/port.jpeg", alt: "City View" },
  { id: 2, src: "/assets/images/sn/try.jpeg", alt: "Building View" },
  { id: 3, src: "/assets/images/sn/p1.jpeg", alt: "Lake View" },
  { id: 4, src: "/assets/images/sn/p2.jpeg", alt: "Modern Architecture" },
  { id: 5, src: "/assets/images/sn/port.jpeg", alt: "Night City" },
  { id: 6, src: "/assets/images/sn/p1.jpeg", alt: "Urban Scene" },
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
        event.preventDefault(); // Prevents scrolling issues on mobile
        if (dx > 0) prevSlide();
        else if (dx < 0) nextSlide();
      }
    },
    { axis: "x", filterTaps: true }
  );

  return (
    <>
    <div
      className={`flex justify-center items-center w-full bg-gray-100 p-4 overflow-hidden relative ${
        isMobile ? "h-[300px]" : "h-[600px]"
      }`}
    >
      {/* Left Button - Show only on desktop */}
      {/* {!isMobile && (
        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 z-50 bg-white p-3 rounded-full shadow-md hover:bg-gray-200 transition"
        >
          <ChevronLeft size={30} />
        </button>
      )} */}

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
              position = "w-[80%] h-[180px] scale-100 opacity-100";
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
                <Image
                  src={card.src}
                  alt={card.alt}
                  width={450}
                  height={400}
                  className="w-full h-full object-cover rounded-xl"
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Right Button - Show only on desktop */}
      {/* {!isMobile && (
        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 z-50 bg-white p-3 rounded-full shadow-md hover:bg-gray-200 transition"
        >
          <ChevronRight size={30} />
        </button>
      )} */}
    </div>

<div className="description-container">
<p className="description-text wow img-custom-anim-left animated">
Your project is more than just a structure—it’s a vision. We deliver customized, scalable, and high-quality solutions that ensure success at every stage.
</p>


</div>
</>
  );
}
