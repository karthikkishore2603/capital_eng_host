"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Pagination from "@/components/blog/Pagination";

export default function PortfolioList({ portfolioItems }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;
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

  // Filter items by category
  const filteredItems =
    currentCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => {
          // Check if the current category is a main category with subcategories
          if (categoryGroups[currentCategory]) {
            return item.categories?.some((category) =>
              categoryGroups[currentCategory].includes(category.title)
            );
          }
          // For other categories, do exact match
          return item.categories?.some(
            (category) => category.title === currentCategory
          );
        });

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (!filteredItems || filteredItems.length === 0) {
    return <p>No portfolio items found for this category.</p>;
  }

  return (
    <div>
      <div className="row gy-40 gx-60 justify-content-center">
        {currentItems.map((item) => (
          <div key={item._id} className="col-xl-4 col-lg-4 col-md-6">
            <Link href={`/project-details/${item.slug}`}>
              <div className="portfolio-wrap">
                {item.mainImage && (
                  <div
                    style={{
                      position: "relative",
                      overflow: "hidden",
                      borderRadius: "12px",
                      border: "2px solid #ddd",
                      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <img
                      src={item.mainImage.asset.url}
                      alt={item.title}
                      style={{
                        width: "100%",
                        height: "230px",
                        objectFit: "cover",
                        borderRadius: "12px",
                        transition:
                          "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, border 0.3s ease-in-out",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = "scale(1.05)";
                        e.target.style.boxShadow =
                          "0 8px 15px rgba(0, 0, 0, 0.2)";
                        e.target.style.border = "2px solid #007bff";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = "scale(1)";
                        e.target.style.boxShadow =
                          "0 4px 10px rgba(0, 0, 0, 0.15)";
                        e.target.style.border = "2px solid #ddd";
                      }}
                    />
                  </div>
                )}
                <h4
                  className="pt-2"
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    marginTop: "15px",
                    color: "#333",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#007bff";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#333";
                  }}
                >
                  {item.title}
                </h4>
                {item.slug && (
                  <p className="slug" style={{ display: "none" }}>
                    {item.slug.current}
                  </p>
                )}
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center w-full">
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
  );
}
