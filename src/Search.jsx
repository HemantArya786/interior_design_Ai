// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from "react";
const Search = () => {
  const [searchState, setSearchState] = useState({
    text: "",
    image: null,
    imagePreview: "",
    pdf: null,
    code: "",
  });
  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setSearchState((prev) => ({
        ...prev,
        image: file,
        imagePreview: URL.createObjectURL(file),
      }));
    }
  };
  const handleSearch = () => {
    // Here you can implement the search logic using both text and image
    console.log("Searching with:", searchState);
  };
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center px-4 py-16 text-center">
        {/* Status Badge */}
        <div className="bg-green-900/30 text-green-400 px-4 py-2 rounded-full flex items-center mb-10">
          <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
          <span>Deep Work now live</span>
        </div>
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Your AI Assistant
        </h1>
        {/* Gradient Subtitle */}
        <div className="text-4xl md:text-6xl font-bold mb-12">
          <span className="bg-gradient-to-r from-teal-400 via-purple-400 to-lime-400 text-transparent bg-clip-text">
            for daily web tasks
          </span>
        </div>
        {/* Search Bar */}
        <div className="w-full max-w-3xl bg-gray-900/80 border border-gray-800 rounded-xl p-6 mb-8 shadow-2xl">
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <div className="relative">
                  <textarea
                    placeholder="Enter your prompt or describe what you're looking for..."
                    className="bg-transparent border-none outline-none w-full text-base min-h-[100px] resize-none leading-relaxed placeholder-gray-500"
                    value={searchState.text}
                    onChange={(e) =>
                      setSearchState((prev) => ({
                        ...prev,
                        text: e.target.value,
                      }))
                    }
                  />
                  <div className="absolute bottom-2 left-2 flex items-center gap-2 text-gray-400 text-xs">
                    <i className="fas fa-info-circle"></i>
                    <span>Press Enter to send, Shift + Enter for new line</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2 cursor-pointer bg-gray-800 hover:bg-gray-700 transition-colors px-4 py-2 rounded-lg !rounded-button group">
                  <i className="fas fa-image text-gray-400 group-hover:text-blue-400 transition-colors"></i>
                  <span className="text-sm">Add Image</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                </label>
                <button
                  onClick={handleSearch}
                  className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 transition-colors px-4 py-2 rounded-lg !rounded-button"
                >
                  <i className="fas fa-search"></i>
                  <span className="text-sm">Generate</span>
                </button>
              </div>
            </div>
            {searchState.imagePreview && (
              <div className="mt-4 relative group">
                <img
                  src={searchState.imagePreview}
                  alt="Preview"
                  className="h-40 w-full object-cover rounded-lg border border-gray-700"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                  <button
                    onClick={() =>
                      setSearchState((prev) => ({
                        ...prev,
                        image: null,
                        imagePreview: "",
                      }))
                    }
                    className="bg-red-500/80 hover:bg-red-600/80 p-2 rounded-full transform hover:scale-110 transition-all !rounded-button"
                  >
                    <i className="fas fa-trash text-white"></i>
                  </button>
                </div>
              </div>
            )}
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-800">
              <div className="flex items-center">
                <button className="flex items-center bg-gray-800 rounded-full px-2 py-1 mr-2 cursor-pointer whitespace-nowrap !rounded-button">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mr-2"></div>
                  <span className="text-sm">Deep Work</span>
                </button>
                <span className="text-xs bg-green-600 px-2 py-0.5 rounded-md">
                  PRO
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleSearch}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center gap-2 !rounded-button"
                >
                  <i className="fas fa-search"></i>
                  <span>Search</span>
                </button>
              </div>
            </div>
          </div>
          {/* Quick Actions - First Row */}
          <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
            <button className="bg-gray-900/60 border border-gray-800 rounded-xl p-3 flex items-center cursor-pointer !rounded-button">
              <div className="w-8 h-8 bg-blue-900/30 rounded-lg flex items-center justify-center mr-3">
                <i className="fas fa-newspaper text-blue-400"></i>
              </div>
              <span className="text-sm whitespace-nowrap">
                Check News About Brand
              </span>
            </button>
            <button className="bg-gray-900/60 border border-gray-800 rounded-xl p-3 flex items-center cursor-pointer !rounded-button">
              <div className="w-8 h-8 bg-green-900/30 rounded-lg flex items-center justify-center mr-3">
                <i className="fas fa-balance-scale text-green-400"></i>
              </div>
              <span className="text-sm whitespace-nowrap">
                Right / Left Unbiased News Coverage
              </span>
            </button>
            <button className="bg-gray-900/60 border border-gray-800 rounded-xl p-3 flex items-center cursor-pointer !rounded-button">
              <div className="w-8 h-8 bg-yellow-900/30 rounded-lg flex items-center justify-center mr-3">
                <i className="fas fa-store text-yellow-400"></i>
              </div>
              <span className="text-sm whitespace-nowrap">
                Review my Shopify store
              </span>
            </button>
          </div>
          {/* Quick Actions - Second Row */}
          <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-3">
            <button className="bg-gray-900/60 border border-gray-800 rounded-xl p-3 flex items-center cursor-pointer !rounded-button">
              <div className="w-8 h-8 bg-purple-900/30 rounded-lg flex items-center justify-center mr-3">
                <i className="fas fa-search text-purple-400"></i>
              </div>
              <span className="text-sm whitespace-nowrap">
                Website Scanner Agent
              </span>
            </button>
            <button className="bg-gray-900/60 border border-gray-800 rounded-xl p-3 flex items-center cursor-pointer !rounded-button">
              <div className="w-8 h-8 bg-teal-900/30 rounded-lg flex items-center justify-center mr-3">
                <i className="fas fa-envelope text-teal-400"></i>
              </div>
              <span className="text-sm whitespace-nowrap">
                Inbox Management: Urgent Emails
              </span>
            </button>
          </div>
        </div>
        {/* Background Image */}
        <div className="fixed inset-0 -z-10 opacity-10">
          <img
            src="https://readdy.ai/api/search-image?query=abstract%20digital%20network%20connections%20with%20glowing%20nodes%20and%20lines%2C%20futuristic%20technology%20concept%2C%20dark%20background%20with%20blue%20and%20green%20accents%2C%20high%20tech%20visualization%2C%20AI%20network%20representation&width=1440&height=900&seq=2&orientation=landscape"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
export default Search;
