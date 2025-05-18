"use client";
import { useState, useEffect, useRef } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { sanityClient2 } from "@/lib/sanity";

export default function PortfolioPage() {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const projectsContainerRef = useRef(null);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category") || "All";

  // Enhanced category mapping
  const categoryGroups = {
    Commercial: ["Commercial", "Automobile", "Food & Beverages"],
    "Industrial & Logistics": ["Industrial", "Logistics & Warehouses"],
    "WTP, RO & Desalination Plants": [
      "Wastewater Treatment Plants",
      "RO & Desalination Plants",
    ],
    "Healthcare & Hospitality": ["Healthcare & Pharmaceuticals", "Hospitality"],
  };

  const categories = [
    { id: 1, text: "All" },
    { id: 3, text: "Railway" },
    { id: 4, text: "Oil & Gas" },
    { id: 5, text: "Religious" },
    { id: 6, text: "Industrial & Logistics" },
    { id: 7, text: "Education" },
    { id: 9, text: "Healthcare & Hospitality" },
    { id: 11, text: "Commercial" },
    { id: 13, text: "Power & Energy" },
    { id: 14, text: "Residential & Villa" },
    { id: 15, text: "Roads & Infrastructure" },
    { id: 16, text: "Marine & Ports" },
    { id: 21, text: "WTP, RO & Desalination Plants" },
  ];

  // Add a new state for mobile dropdown
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);

  // Fetch data on component mount
  useEffect(() => {
    const fetchPortfolioItems = async () => {
      try {
        const query = `*[_type == "post"] {
          _id,
          title,
          "slug": slug.current,
          mainImage{
            asset->{
              _id,
              url
            }
          },
          categories[]->{
            _id,
            title
          }
        }`;

        const data = await sanityClient2.fetch(query);
        setPortfolioItems(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchPortfolioItems();
  }, []);

  // Scroll to top when page changes
  useEffect(() => {
    if (projectsContainerRef.current) {
      projectsContainerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [currentPage]);

  const handleCategoryClick = (category) => {
    const params = new URLSearchParams(searchParams);
    if (category === "All") {
      params.delete("category");
    } else {
      params.set("category", category);
    }
    setCurrentPage(1); // Reset to first page when category changes
    router.push(`${pathname}?${params.toString()}`);
  };

  // Filter items by category
  const filteredItems =
    currentCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => {
          if (categoryGroups[currentCategory]) {
            return item.categories?.some((category) =>
              categoryGroups[currentCategory].includes(category.title)
            );
          }
          return item.categories?.some(
            (category) => category.title === currentCategory
          );
        });

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) {
    return (
      <div className="portfolio-area-1 space overflow-hidden">
        <div className="container">
          <p>Loading portfolio items...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="portfolio-area-1 space overflow-hidden">
        <div className="container">
          <p>Error loading portfolio items. Please try again later.</p>
        </div>
      </div>
    );
  }

  if (!portfolioItems || portfolioItems.length === 0) {
    return (
      <div className="portfolio-area-1 space overflow-hidden">
        <div className="container">
          <p>No portfolio items found in the database.</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="portfolio-area-1 space overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(245, 245, 250, 0.9))",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "60px 0",
        minHeight: "100vh",
      }}
    >
      <div className="container">
        <div className="row">
          {/* Left Sidebar Categories */}
          <div className="col-lg-3 col-md-4">
            {/* Mobile Category Dropdown */}
            <div
              className="d-block d-md-none"
              style={{
                marginBottom: "20px",
                position: "relative",
              }}
            >
              <button
                onClick={() =>
                  setIsCategoryDropdownOpen(!isCategoryDropdownOpen)
                }
                style={{
                  width: "100%",
                  padding: "14px 18px",
                  background: "rgba(255, 255, 255, 0.9)",
                  border: "1px solid #e6e6f0",
                  borderRadius: "12px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#333",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.03)",
                }}
              >
                Categories
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    transform: isCategoryDropdownOpen
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                  }}
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>

              {isCategoryDropdownOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: "0",
                    width: "100%",
                    background: "white",
                    borderRadius: "12px",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                    zIndex: 10,
                    marginTop: "10px",
                    maxHeight: "300px",
                    overflowY: "auto",
                  }}
                >
                  {categories.map((link) => {
                    const isActive = currentCategory === link.text;
                    return (
                      <button
                        key={link.id}
                        onClick={() => {
                          handleCategoryClick(link.text);
                          setIsCategoryDropdownOpen(false);
                        }}
                        style={{
                          width: "100%",
                          padding: "14px 18px",
                          border: "none",
                          borderBottom: "1px solid #f0f0f0",
                          background: isActive
                            ? "rgba(7, 30, 83, 0.05)"
                            : "white",
                          color: isActive ? "#071E53" : "#333",
                          textAlign: "left",
                          fontSize: "15px",
                          fontWeight: isActive ? "600" : "500",
                          transition: "background 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = "rgba(7, 30, 83, 0.03)";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = isActive
                            ? "rgba(7, 30, 83, 0.05)"
                            : "white";
                        }}
                      >
                        {link.text}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Existing Desktop Categories */}
            <div
              className="d-none d-md-block"
              style={{
                position: "sticky",
                top: "20px",
                marginBottom: "20px",
                background: "rgba(255, 255, 255, 0.9)",
                borderRadius: "16px",
                padding: "25px",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.8)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "25px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    background: "#071E53",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "12px",
                    boxShadow: "0 6px 15px rgba(74, 58, 255, 0.2)",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="7" height="7"></rect>
                    <rect x="14" y="3" width="7" height="7"></rect>
                    <rect x="14" y="14" width="7" height="7"></rect>
                    <rect x="3" y="14" width="7" height="7"></rect>
                  </svg>
                </div>
                <h2
                  style={{
                    fontSize: "28px",
                    fontWeight: "700",
                    margin: 0,
                    color: "#071E53", // Set solid color
                  }}
                >
                  Categories
                </h2>

                <div
                  style={{
                    position: "absolute",
                    bottom: "-12px",
                    left: "0",
                    width: "100%",
                    height: "2px",
                    background:
                      "linear-gradient(90deg, rgba(74, 58, 255, 0.5), rgba(74, 58, 255, 0.05))",
                    borderRadius: "2px",
                  }}
                ></div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {categories.map((link) => {
                  const isActive = currentCategory === link.text;

                  return (
                    <button
                      key={link.id}
                      onClick={() => handleCategoryClick(link.text)}
                      style={{
                        padding: "14px 18px",
                        border: isActive ? "none" : "1px solid #e6e6f0",
                        borderRadius: "12px",
                        background: isActive
                          ? "#071E53"
                          : "rgba(255, 255, 255, 0.8)",
                        color: isActive ? "#fff" : "#333",
                        cursor: "pointer",
                        fontSize: "15px",
                        fontWeight: isActive ? "600" : "500",
                        transition: "all 0.4s ease",
                        textAlign: "left",
                        boxShadow: isActive
                          ? "0 8px 20px rgba(74, 58, 255, 0.25)"
                          : "0 4px 10px rgba(0, 0, 0, 0.03)",
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center" }}>
                        {isActive && (
                          <span
                            style={{
                              marginRight: "10px",
                              fontSize: "18px",
                              opacity: "0.9",
                            }}
                          >
                            •
                          </span>
                        )}
                        {link.text}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Side Portfolio Items */}
          <div className="col-lg-9 col-md-8 pt-4" ref={projectsContainerRef}>
            <div
              style={{
                marginBottom: "30px",
                background:
                  "linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(245, 245, 255, 0.85))",
                borderRadius: "16px",
                padding: "22px 28px",
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.05)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.9)",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.3s ease",
              }}
            >
              {/* Decorative elements */}
              <div
                style={{
                  position: "absolute",
                  top: "-20px",
                  right: "-20px",
                  width: "100px",
                  height: "100px",
                  background:
                    "radial-gradient(circle, rgba(74, 58, 255, 0.08) 0%, rgba(74, 58, 255, 0) 70%)",
                  borderRadius: "50%",
                }}
              ></div>

              <div
                style={{
                  position: "absolute",
                  bottom: "-30px",
                  left: "20px",
                  width: "80px",
                  height: "80px",
                  background:
                    "radial-gradient(circle, rgba(74, 58, 255, 0.05) 0%, rgba(74, 58, 255, 0) 70%)",
                  borderRadius: "50%",
                }}
              ></div>

              <h2
                style={{
                  fontSize: "26px",
                  fontWeight: "700",
                  color: "#1a1a2e",
                  margin: 0,
                  display: "flex",
                  alignItems: "center",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                <span
                  style={{
                    color: "#071E53",
                  }}
                >
                  {currentCategory} Projects
                </span>

                <span
                  style={{
                    fontSize: "16px",
                    color: "#666",
                    fontWeight: "500",
                    marginLeft: "12px",
                    background: "rgba(74, 58, 255, 0.08)",
                    padding: "6px 12px",
                    borderRadius: "20px",
                    display: "inline-flex",
                    alignItems: "center",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ marginRight: "6px" }}
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="9" y1="9" x2="15" y2="9"></line>
                    <line x1="9" y1="15" x2="15" y2="15"></line>
                  </svg>
                  {filteredItems.length} items
                </span>
              </h2>
            </div>

            {!filteredItems || filteredItems.length === 0 ? (
              <div
                style={{
                  padding: "40px",
                  textAlign: "center",
                  background: "rgba(255, 255, 255, 0.7)",
                  borderRadius: "12px",
                  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.03)",
                }}
              >
                <p style={{ fontSize: "18px", color: "#666" }}>
                  No portfolio items found for this category.
                </p>
              </div>
            ) : (
              <div>
                <div className="row gy-40 gx-30">
                  {currentItems.map((item) => (
                    <div
                      key={item._id}
                      className="col-md-6"
                      style={{ marginBottom: "30px" }}
                    >
                      <Link
                        href={`/project-details/${item.slug}`}
                        style={{ textDecoration: "none" }}
                      >
                        <div
                          className="portfolio-wrap"
                          style={{
                            background: "rgba(255, 255, 255, 0.8)",
                            borderRadius: "16px",
                            overflow: "hidden",
                            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.06)",
                            transition: "all 0.4s ease",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            border: "1px solid rgba(255, 255, 255, 0.8)",
                            backdropFilter: "blur(5px)",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform =
                              "translateY(-10px)";
                            e.currentTarget.style.boxShadow =
                              "0 15px 35px rgba(0, 0, 0, 0.1)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow =
                              "0 10px 30px rgba(0, 0, 0, 0.06)";
                          }}
                        >
                          {item.mainImage && (
                            <div
                              style={{
                                position: "relative",
                                overflow: "hidden",
                              }}
                            >
                              <img
                                src={item.mainImage.asset.url}
                                alt={item.title}
                                style={{
                                  width: "100%",
                                  height: "250px",
                                  objectFit: "cover",
                                  transition: "transform 0.6s ease-in-out",
                                }}
                                onMouseEnter={(e) => {
                                  e.target.style.transform = "scale(1.08)";
                                }}
                                onMouseLeave={(e) => {
                                  e.target.style.transform = "scale(1)";
                                }}
                              />
                              <div
                                style={{
                                  position: "absolute",
                                  bottom: "0",
                                  left: "0",
                                  right: "0",
                                  background:
                                    "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                                  height: "100px",
                                  pointerEvents: "none",
                                }}
                              ></div>
                            </div>
                          )}
                          <div
                            style={{
                              padding: "20px 25px",
                              flexGrow: 1,
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "space-between",
                            }}
                          >
                            <h4
                              style={{
                                fontSize: "18px",
                                fontWeight: "600",
                                color: "#1a1a2e",
                                marginBottom: "10px",
                                lineHeight: "1.4",
                                transition: "color 0.3s ease",
                              }}
                            >
                              {item.title}
                            </h4>

                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginTop: "15px",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  gap: "8px",
                                  flexWrap: "wrap",
                                }}
                              >
                                {item.categories &&
                                  item.categories
                                    .slice(0, 2)
                                    .map((category, index) => (
                                      <span
                                        key={index}
                                        style={{
                                          fontSize: "12px",
                                          padding: "4px 10px",
                                          borderRadius: "20px",
                                          background: "rgba(74, 58, 255, 0.08)",
                                          color: "#4a3aff",
                                          fontWeight: "500",
                                        }}
                                      >
                                        {category.title}
                                      </span>
                                    ))}
                              </div>

                              <span
                                style={{
                                  display: "inline-flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  width: "32px",
                                  height: "32px",
                                  borderRadius: "50%",
                                  background: "rgba(74, 58, 255, 0.08)",
                                  color: "#4a3aff",
                                  fontSize: "14px",
                                }}
                              >
                                →
                              </span>
                            </div>
                          </div>
                          {item.slug && (
                            <p className="slug" style={{ display: "none" }}>
                              {item.slug}
                            </p>
                          )}
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>

                {/* Pagination Section */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "40px",
                  }}
                >
                  {filteredItems.length > itemsPerPage && (
                    <Pagination
                      totalItems={filteredItems.length}
                      itemsPerPage={itemsPerPage}
                      currentPage={currentPage}
                      onPageChange={handlePageChange}
                    />
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Enhanced Pagination component
function Pagination({ totalItems, itemsPerPage, currentPage, onPageChange }) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageNumbers = [];

  // Logic to show limited page numbers on smaller screens
  const getVisiblePageNumbers = () => {
    if (totalPages <= 5) {
      // If 5 or fewer pages, show all
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 3) {
      // Near the start
      return [1, 2, 3, 4, "...", totalPages];
    }

    if (currentPage >= totalPages - 2) {
      // Near the end
      return [
        1,
        "...",
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    }

    // In the middle
    return [
      1,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      totalPages,
    ];
  };

  const visiblePageNumbers = getVisiblePageNumbers();

  return (
    <nav className="pagination-container" style={{ width: "100%" }}>
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          gap: "8px",
          padding: 0,
          margin: 0,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {/* Previous button */}
        <li>
          <button
            onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            style={{
              padding: "8px 15px",
              borderRadius: "8px",
              border: "none",
              background:
                currentPage === 1 ? "#f0f0f5" : "rgba(255, 255, 255, 0.8)",
              color: currentPage === 1 ? "#999" : "#333",
              cursor: currentPage === 1 ? "not-allowed" : "pointer",
              boxShadow:
                currentPage === 1 ? "none" : "0 4px 10px rgba(0, 0, 0, 0.05)",
              transition: "all 0.3s ease",
              minWidth: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            aria-label="Previous page"
          >
            ←
          </button>
        </li>

        {visiblePageNumbers.map((number, index) => (
          <li key={index}>
            {number === "..." ? (
              <span
                style={{
                  padding: "8px 10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                ...
              </span>
            ) : (
              <button
                onClick={() => onPageChange(number)}
                style={{
                  padding: "8px 15px",
                  borderRadius: "8px",
                  border: "none",
                  background:
                    currentPage === number
                      ? "#071E53"
                      : "rgba(255, 255, 255, 0.8)",
                  color: currentPage === number ? "#fff" : "#333",
                  cursor: "pointer",
                  boxShadow:
                    currentPage === number
                      ? "0 8px 15px rgba(74, 58, 255, 0.25)"
                      : "0 4px 10px rgba(0, 0, 0, 0.05)",
                  fontWeight: currentPage === number ? "600" : "normal",
                  transition: "all 0.3s ease",
                  minWidth: "40px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onMouseEnter={(e) => {
                  if (currentPage !== number) {
                    e.target.style.background = "rgba(245, 245, 255, 0.95)";
                    e.target.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.08)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (currentPage !== number) {
                    e.target.style.background = "rgba(255, 255, 255, 0.8)";
                    e.target.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.05)";
                  }
                }}
                aria-label={`Page ${number}`}
                aria-current={currentPage === number ? "page" : undefined}
              >
                {number}
              </button>
            )}
          </li>
        ))}

        {/* Next button */}
        <li>
          <button
            onClick={() =>
              currentPage < totalPages && onPageChange(currentPage + 1)
            }
            disabled={currentPage === totalPages}
            style={{
              padding: "8px 15px",
              borderRadius: "8px",
              border: "none",
              background:
                currentPage === totalPages
                  ? "#f0f0f5"
                  : "rgba(255, 255, 255, 0.8)",
              color: currentPage === totalPages ? "#999" : "#333",
              cursor: currentPage === totalPages ? "not-allowed" : "pointer",
              boxShadow:
                currentPage === totalPages
                  ? "none"
                  : "0 4px 10px rgba(0, 0, 0, 0.05)",
              transition: "all 0.3s ease",
              minWidth: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            aria-label="Next page"
          >
            →
          </button>
        </li>
      </ul>

      {/* Mobile pagination info */}
      <div
        style={{
          textAlign: "center",
          marginTop: "15px",
          fontSize: "14px",
          color: "#666",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "5px",
        }}
      >
        <span className="d-none d-sm-inline">Page</span> {currentPage}{" "}
        <span className="d-none d-sm-inline">of</span> {totalPages}
      </div>
    </nav>
  );
}
