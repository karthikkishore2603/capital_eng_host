"use client";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

export default function Categories() {
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

  const handleCategoryClick = (category) => {
    const params = new URLSearchParams(searchParams);
    if (category === "All") {
      params.delete("category");
    } else {
      params.set("category", category);
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div style={{ margin: "20px 0" }}>
      <h2
        className="pb-3"
        style={{
          fontSize: "38px",
          fontWeight: "bold",
          marginBottom: "10px",
          color: "#333",
        }}
      >
        Categories
      </h2>
      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          paddingBottom: "30px",
        }}
      >
        {categories.map((link) => (
          <button
            key={link.id}
            onClick={() => handleCategoryClick(link.text)}
            style={{
              padding: "12px 24px",
              border: "2px solid #ddd",
              borderRadius: "10px",
              background: currentCategory === link.text ? "#211574" : "#fff",
              color: currentCategory === link.text ? "#fff" : "#333",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: "bold",
              transition: "all 0.3s ease",
              boxShadow:
                currentCategory === link.text
                  ? "0 4px 6px rgba(0, 123, 255, 0.3)"
                  : "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.1)";
              e.target.style.boxShadow = "0 8px 12px rgba(0, 123, 255, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow =
                currentCategory === link.text
                  ? "0 4px 6px rgba(0, 123, 255, 0.3)"
                  : "0 2px 4px rgba(0, 0, 0, 0.1)";
            }}
          >
            {link.text}
          </button>
        ))}
      </div>
    </div>
  );
}
