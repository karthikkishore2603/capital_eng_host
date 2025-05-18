"use client";
import { useState } from "react";

export default function Pagination({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage); // Update the current page
      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top of the page
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  // Generate all page numbers
  const getPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <div className="pagination-wrap mt-50">
      <nav aria-label="Page navigation">
        <ul className="pagination list-wrap">
          {/* Previous Page Button */}
          <li
            className={`page-item next-page ${currentPage === 1 ? "disabled" : ""}`}
            onClick={handlePrevPage}
          >
            <div
              style={{ cursor: currentPage === 1 ? "not-allowed" : "pointer" }}
              className="page-link"
            >
              <i className="fas fa-arrow-left"></i>
            </div>
          </li>

          {/* Page Numbers */}
          {getPageNumbers().map((page) => (
            <li
              key={page}
              className={`page-item ${currentPage === page ? "active" : ""}`}
              onClick={() => handlePageChange(page)}
            >
              <div style={{ cursor: "pointer" }} className="page-link">
                {page}
              </div>
            </li>
          ))}

          {/* Next Page Button */}
          <li
            className={`page-item next-page ${currentPage === totalPages ? "disabled" : ""}`}
            onClick={handleNextPage}
          >
            <div
              style={{
                cursor: currentPage === totalPages ? "not-allowed" : "pointer",
              }}
              className="page-link"
            >
              <i className="fas fa-arrow-right"></i>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}