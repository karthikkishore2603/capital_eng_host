"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { sanityClient2 } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import { motion, AnimatePresence } from "framer-motion";
import { useDrag } from "@use-gesture/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const ProjectDetails = ({ slug }) => {
  const [portfolioItem, setPortfolioItem] = useState(null);
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 769);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (slug) {
      const fetchData = async () => {
        try {
          const query = `*[_type == "post" && slug.current == $slug][0]{
            title,
            body,
            categoryName,
            location,
            scopeOfWork,
            projectStatus,
            completionDate,
            slug,
            mainImage{
              asset->{
                _id,
                url
              }
            },
            gallery[]{
              asset->{
                _id,
                url
              }
            }
          }`;

          const data = await sanityClient2.fetch(query, { slug });
          setProject(data);

          if (data.categoryName) {
            const relatedQuery = `*[_type == "post" && categoryName == $categoryName && slug.current != $slug][0..2]{
              title,
              slug,
              mainImage{
                asset->{
                  _id,
                  url
                }
              },
              categories[]->{
                title
              }
            }`;

            const relatedData = await sanityClient2.fetch(relatedQuery, {
              categoryName: data.categoryName,
              slug: data.slug.current,
            });
            setPortfolioItem(relatedData);
          }
        } catch (error) {
          console.error("Error fetching project details:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [slug]);

  // Auto slide effect for gallery
  useEffect(() => {
    if (!project?.gallery || isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % project.gallery.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [project?.gallery, isPaused]);

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % project.gallery.length);
    resetAutoSlide();
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
    resetAutoSlide();
  };

  const resetAutoSlide = () => {
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 6000);
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

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <div className="project-details-page-area space">
      <div className="container">
        {/* Gallery Slider Section */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="relative w-full overflow-hidden mb-80">
            <div className={`relative w-full ${isMobile ? "h-[400px]" : "h-[600px]"}`} {...bind()}>
              {/* Navigation Arrows */}
              {!isMobile && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-50 bg-black/50 hover:bg-black/70 p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110"
                  >
                    <ChevronLeft size={30} className="text-white" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-50 bg-black/50 hover:bg-black/70 p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110"
                  >
                    <ChevronRight size={30} className="text-white" />
                  </button>
                </>
              )}

              <AnimatePresence>
                {project.gallery.map((image, i) => {
                  if (!isMobile) {
                    if (
                      i !== currentSlideIndex &&
                      i !== (currentSlideIndex + 1) % project.gallery.length &&
                      i !== (currentSlideIndex - 1 + project.gallery.length) % project.gallery.length
                    ) {
                      return null;
                    }
                  } else {
                    if (i !== currentSlideIndex) return null;
                  }

                  let position = "";
                  let zIndex = "";
                  let scale = "";
                  let opacity = "";
                  let xOffset = "";
                  let yOffset = "";
                  let width = "";
                  let height = "";

                  if (!isMobile) {
                    if (i === currentSlideIndex) {
                      position = "center";
                      zIndex = "z-30";
                      scale = "scale-100";
                      opacity = "opacity-100";
                      xOffset = "translate-x-0";
                      yOffset = "translate-y-0";
                      width = "w-[80%]";
                      height = "h-[500px]";
                    } else if (i === (currentSlideIndex + 1) % project.gallery.length) {
                      position = "right";
                      zIndex = "z-20";
                      scale = "scale-90";
                      opacity = "opacity-80";
                      xOffset = "translate-x-[40%]";
                      yOffset = "translate-y-[5%]";
                      width = "w-[70%]";
                      height = "h-[450px]";
                    } else if (i === (currentSlideIndex - 1 + project.gallery.length) % project.gallery.length) {
                      position = "left";
                      zIndex = "z-20";
                      scale = "scale-90";
                      opacity = "opacity-80";
                      xOffset = "translate-x-[-40%]";
                      yOffset = "translate-y-[5%]";
                      width = "w-[70%]";
                      height = "h-[450px]";
                    }
                  } else {
                    position = "center";
                    zIndex = "z-30";
                    scale = "scale-100";
                    opacity = "opacity-100";
                    xOffset = "translate-x-0";
                    yOffset = "translate-y-0";
                    width = "w-[95%]";
                    height = "h-[400px]";
                  }

                  return (
                    <motion.div
                      key={image._id}
                      initial={{ opacity: 0, scale: 0.9, x: i > currentSlideIndex ? "100%" : "-100%" }}
                      animate={{ 
                        opacity: opacity === "opacity-100" ? 1 : 0.8,
                        scale: scale === "scale-100" ? 1 : 0.9,
                        x: xOffset === "translate-x-0" ? 0 : xOffset.includes("40%") ? (position === "right" ? "40%" : "-40%") : 0,
                        y: yOffset === "translate-y-0" ? 0 : "5%"
                      }}
                      exit={{ opacity: 0, scale: 0.9, x: i > currentSlideIndex ? "100%" : "-100%" }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      className={`absolute top-0 left-1/2 transform -translate-x-1/2 ${zIndex} ${width} ${height} ${scale} ${opacity}`}
                      style={{ borderRadius: "20px", overflow: "hidden" }}
                    >
                      <div className="relative w-full h-full group">
                        <Image
                          src={image.asset.url}
                          alt={`Gallery Image ${i + 1}`}
                          layout="fill"
                          className="w-full h-full object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-700"
                          priority={i === currentSlideIndex}
                        />
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent rounded-xl"></div>
                        
                        {/* Indicator for current slide */}
                        {i === currentSlideIndex && (
                          <div className="absolute top-4 right-4 bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                            <span className="text-white text-sm font-medium">
                              {i + 1}/{project.gallery.length}
                            </span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
              
              {/* Pagination Dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-40">
                {project.gallery.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setCurrentSlideIndex(i);
                      resetAutoSlide();
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${i === currentSlideIndex ? "bg-white w-6" : "bg-white/50"}`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Project Details Section */}
        <div className="row justify-content-between flex-row-reverse">
          <div className="col-xl-3 col-lg-4">
            <div className="project-details-info mb-lg-0 mb-40">
              <ul className="list-wrap">
                <li>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                    Category:
                  </span>{" "}
                  {project.categoryName}
                </li>
                <li>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                    Location:
                  </span>{" "}
                  {project.location}
                </li>
                <li>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                    Project Status:
                  </span>{" "}
                  {project.projectStatus}
                </li>
                <li>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                    Completion Date:
                  </span>{" "}
                  {project.completionDate}
                </li>
                <li>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                    Scope of Work:
                  </span>{" "}
                  <br /> {project.scopeOfWork}
                </li>
              </ul>
            </div>
          </div>

          <style jsx>{`
            .project-details-info {
              padding: 15px;
              background: linear-gradient(145deg, #f9f9f9, #e0e0e0);
              border-radius: 8px;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              width: 100%;
              max-width: 100%;
            }
            .list-wrap {
              list-style: none;
              padding: 0;
              margin: 0;
            }
            .list-wrap li {
              font-size: 16px;
              color: #333;
              margin-bottom: 0.8rem;
              line-height: 1.5;
            }
            .list-wrap li span {
              font-size: 18px;
              font-weight: bold;
              color: #071e53;
              display: inline-block;
              margin-right: 0.5rem;
            }
          `}</style>

          <div className="col-lg-8">
            <div className="title-area mb-35">
            <h2 
  className="sec-title fs-1" 
  style={{
    color: "#081761",
    display: "inline-block",
    position: "relative",
    paddingBottom: "8px",
    transition: "all 0.3s ease",
    letterSpacing: "0.5px"
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.letterSpacing = "1px";
    e.currentTarget.querySelector('span').style.width = "100%";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.letterSpacing = "0.5px";
    e.currentTarget.querySelector('span').style.width = "0";
  }}
>
  {project.title}
  <span 
    style={{
      position: "absolute",
      bottom: "0",
      left: "0",
      width: "0",
      height: "2px",
      backgroundColor: "#3a3aad",
      transition: "width 0.3s ease"
    }}
  ></span>
</h2>
              <div style={{ fontSize: "17px", textAlign: "justify" }}>
                <PortableText
                  value={project.body}
                  components={{
                    block: {
                      h1: ({ children }) => (
                        <h1 className="text-4xl font-bold">{children}</h1>
                      ),
                      h2: ({ children }) => (
                        <h2 className="text-3xl font-semibold">{children}</h2>
                      ),
                      h3: ({ children }) => (
                        <h3 className="text-2xl font-medium">{children}</h3>
                      ),
                      h4: ({ children }) => (
                        <h4 style={{
                          fontWeight: "bold",
                          fontSize: "1.25rem",  // 20px for mobile
                          lineHeight: "1.75rem" // 28px
                        }} className="sm:text-xl md:text-2xl lg:text-3xl">
                          {children}
                        </h4>
                      ),
                      normal: ({ children }) => (
                        <p className="text-lg leading-relaxed fs-5">{children}</p>
                      ),
                    },
                    list: {
                      bullet: ({ children }) => (
                        <ul className="list-disc ml-5">{children}</ul>
                      ),
                      number: ({ children }) => (
                        <ol className="list-decimal ml-5">{children}</ol>
                      ),
                    },
                    listItem: {
                      bullet: ({ children }) => (
                        <li className="mb-2">{children}</li>
                      ),
                      number: ({ children }) => (
                        <li className="mb-2">{children}</li>
                      ),
                    },
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Related Projects Section */}
        <div className="container pt-100">
          <div className="row align-items-center">
            <div className="col-md-6 text-start">
              <div className="title-area">
                <h2 className="sec-title" style={{ color: "#081761", textDecoration: "underline" }}>
                  Explore Our {project.categoryName} Projects
                </h2>
              </div>
            </div>
            <div className="col-md-6 text-end pb-5">
              <Link
                scroll={false}
                href="/portfolio"
                className="btn"
                style={{
                  backgroundColor: "#081761",
                  color: "#fff",
                  padding: "12px 24px",
                  borderRadius: "30px",
                  textTransform: "uppercase",
                  fontWeight: "600",
                  textDecoration: "none",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "#0d2a8c")}
                onMouseLeave={(e) => (e.target.style.backgroundColor = "#081761")}
              >
                <span className="link-effect">
                  <span className="effect-1">VIEW ALL PROJECTS</span>
                  <span className="effect-1">VIEW ALL PROJECTS</span>
                </span>
              </Link>
            </div>
          </div>

          <div className="row gy-40 justify-content-center">
            {portfolioItem &&
              portfolioItem.map((post, i) => (
                <div key={i} className="col-lg-4 col-md-6">
                  <div
                    className="blog-card"
                    style={{
                      backgroundColor: "#fff",
                      borderRadius: "12px",
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                      overflow: "hidden",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-5px)";
                      e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
                    }}
                  >
                    <div className="blog-img" style={{ flex: "1 1 auto" }}>
                      <Link scroll={false} href={`/project-details/${post.slug.current}`}>
                        <Image
                          width={416}
                          height={314}
                          style={{
                            height: "250px",
                            width: "100%",
                            objectFit: "cover",
                            transition: "transform 0.3s ease",
                          }}
                          src={post.mainImage.asset.url}
                          alt="blog image"
                          onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
                          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                        />
                      </Link>
                    </div>
                    <div className="blog-content" style={{ padding: "20px", flex: "0 0 auto" }}>
                      <div className="post-meta-item blog-meta">
                        <a
                          href="#"
                          style={{
                            color: "#081761",
                            fontSize: "14px",
                            fontWeight: "500",
                            textDecoration: "none",
                          }}
                        >
                          {post.categories[0]?.title}
                        </a>
                      </div>
                      <h4 className="blog-title fs-3" style={{ margin: "10px 0" }}>
                        <Link
                          style={{ color: "#081761", textDecoration: "none" }}
                          scroll={false}
                          href={`/project-details/${post.slug.current}`}
                        >
                          {post.title}
                        </Link>
                      </h4>
                      <Link
                        scroll={false}
                        href={`/project-details/${post.slug.current}`}
                        className="link-btn"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          color: "#081761",
                          textDecoration: "none",
                          fontWeight: "600",
                          transition: "color 0.3s ease",
                        }}
                        onMouseEnter={(e) => (e.target.style.color = "#0d2a8c")}
                        onMouseLeave={(e) => (e.target.style.color = "#081761")}
                      >
                        <span className="link-effect">
                          <span className="effect-1">READ MORE</span>
                          <span className="effect-1">READ MORE</span>
                        </span>
                        <Image
                          width={13}
                          height={13}
                          src="/assets/img/icon/arrow-left-top.svg"
                          alt="icon"
                          style={{ marginLeft: "8px" }}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;