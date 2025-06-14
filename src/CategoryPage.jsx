// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState } from "react";

const CategoryPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    {
      id: 1,
      title: "Bathroom",
      description:
        "Elegant bathroom designs with modern fixtures and luxurious finishes.",
      imageUrl:
        "https://readdy.ai/api/search-image?query=modern%20luxury%20bathroom%20interior%20with%20elegant%20fixtures%2C%20marble%20countertops%2C%20glass%20shower%20enclosure%2C%20freestanding%20bathtub%2C%20soft%20lighting%2C%20minimalist%20design%2C%20high-end%20finishes%2C%20neutral%20color%20palette%20with%20subtle%20accents&width=400&height=300&seq=1&orientation=landscape",
    },
    {
      id: 2,
      title: "Kitchen",
      description:
        "Contemporary kitchen spaces with premium appliances and stylish cabinetry.",
      imageUrl:
        "https://readdy.ai/api/search-image?query=modern%20luxury%20kitchen%20interior%20with%20high-end%20appliances%2C%20marble%20countertops%2C%20elegant%20cabinetry%2C%20island%20with%20seating%2C%20pendant%20lighting%2C%20hardwood%20floors%2C%20neutral%20color%20palette%20with%20subtle%20accents%2C%20professional-grade%20cooking%20space&width=400&height=300&seq=2&orientation=landscape",
    },
    {
      id: 3,
      title: "Bedroom",
      description:
        "Serene bedroom retreats designed for ultimate comfort and relaxation.",
      imageUrl:
        "https://readdy.ai/api/search-image?query=luxurious%20bedroom%20interior%20with%20king-size%20bed%2C%20premium%20bedding%2C%20elegant%20nightstands%2C%20soft%20lighting%2C%20plush%20carpet%2C%20neutral%20color%20palette%2C%20large%20windows%20with%20stylish%20curtains%2C%20minimalist%20decor%2C%20peaceful%20atmosphere&width=400&height=300&seq=3&orientation=landscape",
    },
    {
      id: 4,
      title: "Living Room",
      description:
        "Sophisticated living spaces that combine comfort with contemporary design.",
      imageUrl:
        "https://readdy.ai/api/search-image?query=elegant%20living%20room%20interior%20with%20comfortable%20sectional%20sofa%2C%20coffee%20table%2C%20accent%20chairs%2C%20area%20rug%2C%20fireplace%2C%20large%20windows%2C%20tasteful%20decor%2C%20neutral%20color%20palette%20with%20subtle%20accents%2C%20sophisticated%20atmosphere&width=400&height=300&seq=4&orientation=landscape",
    },
    {
      id: 5,
      title: "Dining Room",
      description:
        "Elegant dining areas perfect for entertaining guests and family gatherings.",
      imageUrl:
        "https://readdy.ai/api/search-image?query=sophisticated%20dining%20room%20interior%20with%20elegant%20table%20and%20chairs%2C%20chandelier%2C%20sideboard%2C%20large%20windows%2C%20hardwood%20floors%2C%20neutral%20color%20palette%20with%20subtle%20accents%2C%20perfect%20for%20entertaining%2C%20formal%20dining%20space&width=400&height=300&seq=5&orientation=landscape",
    },
    {
      id: 6,
      title: "Home Office",
      description: "Productive workspaces designed for focus and creativity.",
      imageUrl:
        "https://readdy.ai/api/search-image?query=modern%20home%20office%20interior%20with%20elegant%20desk%2C%20ergonomic%20chair%2C%20bookshelves%2C%20computer%20setup%2C%20good%20lighting%2C%20minimalist%20design%2C%20neutral%20color%20palette%20with%20subtle%20accents%2C%20productive%20workspace%20atmosphere&width=400&height=300&seq=6&orientation=landscape",
    },
    {
      id: 7,
      title: "Outdoor Space",
      description: "Beautiful outdoor areas for relaxation and entertainment.",
      imageUrl:
        "https://readdy.ai/api/search-image?query=luxury%20outdoor%20living%20space%20with%20comfortable%20seating%2C%20dining%20area%2C%20fire%20pit%2C%20landscaping%2C%20mood%20lighting%2C%20pool%20area%2C%20neutral%20color%20palette%20with%20natural%20elements%2C%20perfect%20for%20relaxation%20and%20entertaining&width=400&height=300&seq=7&orientation=landscape",
    },
    {
      id: 8,
      title: "Laundry Room",
      description:
        "Functional laundry spaces with efficient storage and modern appliances.",
      imageUrl:
        "https://readdy.ai/api/search-image?query=modern%20laundry%20room%20interior%20with%20high-efficiency%20washer%20and%20dryer%2C%20storage%20cabinets%2C%20countertop%20for%20folding%2C%20sink%2C%20good%20lighting%2C%20neutral%20color%20palette%20with%20subtle%20accents%2C%20organized%20and%20functional%20space&width=400&height=300&seq=8&orientation=landscape",
    },
  ];

  const filteredCategories = categories.filter(
    (category) =>
      category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=luxurious%20modern%20interior%20design%20panorama%20with%20open%20concept%20living%20space%2C%20high%20ceilings%2C%20large%20windows%20with%20natural%20light%2C%20elegant%20furniture%2C%20neutral%20color%20palette%20with%20subtle%20accents%2C%20sophisticated%20atmosphere%2C%20architectural%20details&width=1440&height=500&seq=10&orientation=landscape"
            alt="Interior Design Hero"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Transform Your Space
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mb-8">
            Explore our curated collection of interior design categories to find
            inspiration for your next home renovation project.
          </p>
          <div className="max-w-xl bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <input
                type="text"
                placeholder="Search categories..."
                className="w-full py-4 pl-4 pr-12 border-none text-gray-700 focus:ring-2 focus:ring-indigo-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <i className="fas fa-search"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Explore Our Categories
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover design inspiration for every room in your home. Our expert
            designers have curated collections to help you create your dream
            space.
          </p>
        </div>

        {filteredCategories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredCategories.map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="h-60 overflow-hidden">
                  <img
                    src={category.imageUrl}
                    alt={category.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <button className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg cursor-pointer whitespace-nowrap !rounded-button">
                    <span>View Designs</span>
                    <i className="fas fa-arrow-right ml-2"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-5xl text-gray-300 mb-4">
              <i className="fas fa-search"></i>
            </div>
            <h3 className="text-xl font-medium text-gray-700 mb-2">
              No categories found
            </h3>
            <p className="text-gray-500">Try adjusting your search terms</p>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="bg-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Space?
              </h2>
              <p className="text-indigo-100 text-lg">
                Our team of expert designers is ready to help you create the
                home of your dreams. Schedule a consultation today.
              </p>
            </div>
            <div className="md:w-1/3">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Request a Consultation
                </h3>
                <form>
                  <div className="mb-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div className="mb-4">
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700">
                      <option value="">Select a Category</option>
                      {categories.map((category) => (
                        <option key={category.id} value={category.title}>
                          {category.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg cursor-pointer whitespace-nowrap !rounded-button"
                  >
                    Submit Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
    </div>
  );
};

export default CategoryPage;
