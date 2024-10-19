import { useState } from "react";

const Filter = ({ onFilterChange }) => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const categories = ["All", "food", "entertainment", "travel", "others"];

  const handleFilterClick = (category) => {
    console.log("Filter clicked:", category); // Debug line
    setSelectedFilter(category);
    onFilterChange(category); // Notify parent of the change
  };

  return (
    <div className="flex space-x-2 mb-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleFilterClick(category)}
          className={`px-4 py-2 rounded-full ${
            selectedFilter === category
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          } hover:bg-blue-400`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Filter;
