// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from "react";
const ItemsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const bathroomItems = [
    {
      id: 1,
      title: "Modern Freestanding Bathtub",
      description:
        "Luxurious oval-shaped freestanding bathtub with contemporary design, perfect for creating a spa-like atmosphere in your bathroom.",
      price: "$1,299",
      tags: ["Modern", "Luxury", "Freestanding"],
      features: [
        "Acrylic construction",
        "Overflow protection",
        "Adjustable feet",
        "60-inch length",
      ],
      imageUrl:
        "https://readdy.ai/api/search-image?query=modern%20white%20freestanding%20bathtub%20in%20luxury%20bathroom%20setting%20with%20marble%20floor%2C%20soft%20lighting%2C%20minimalist%20design%2C%20professional%20product%20photography%20on%20clean%20background&width=400&height=300&seq=11&orientation=landscape",
    },
    {
      id: 2,
      title: "Rainfall Shower Head Set",
      description:
        "Premium rainfall shower system with handheld sprayer, featuring multiple spray patterns and easy installation.",
      price: "$349",
      tags: ["Rainfall", "Modern", "Chrome"],
      features: [
        "Multiple spray patterns",
        "Easy installation",
        "Chrome finish",
        "Temperature control",
      ],
      imageUrl:
        "https://readdy.ai/api/search-image?query=modern%20chrome%20rainfall%20shower%20head%20mounted%20on%20white%20marble%20wall%2C%20luxury%20bathroom%20fixture%2C%20professional%20product%20photography%20on%20clean%20background&width=400&height=300&seq=12&orientation=landscape",
    },
    {
      id: 3,
      title: "Floating Vanity Cabinet",
      description:
        "Wall-mounted modern bathroom vanity with double sinks and soft-close drawers, perfect for contemporary bathrooms.",
      price: "$899",
      tags: ["Floating", "Double Sink", "Storage"],
      features: [
        "Soft-close drawers",
        "Wall-mounted design",
        "Double sinks",
        "Ample storage",
      ],
      imageUrl:
        "https://readdy.ai/api/search-image?query=modern%20floating%20bathroom%20vanity%20with%20double%20sinks%2C%20white%20countertop%2C%20wooden%20cabinet%2C%20minimalist%20design%2C%20professional%20product%20photography%20on%20clean%20background&width=400&height=300&seq=13&orientation=landscape",
    },
    {
      id: 4,
      title: "LED Mirror Cabinet",
      description:
        "Smart LED mirror cabinet with anti-fog function, touch sensor, and built-in storage for bathroom essentials.",
      price: "$459",
      tags: ["LED", "Smart", "Storage"],
      features: [
        "Anti-fog function",
        "Touch sensor",
        "Built-in storage",
        "Dimmable lights",
      ],
      imageUrl:
        "https://readdy.ai/api/search-image?query=modern%20LED%20bathroom%20mirror%20cabinet%20with%20illuminated%20edges%2C%20sleek%20design%2C%20professional%20product%20photography%20on%20clean%20background&width=400&height=300&seq=14&orientation=landscape",
    },
    {
      id: 5,
      title: "Luxury Toilet Suite",
      description:
        "Smart toilet with heated seat, automatic flush, and bidet functions for ultimate comfort and hygiene.",
      price: "$899",
      tags: ["Smart", "Heated Seat", "Bidet"],
      features: [
        "Heated seat",
        "Auto flush",
        "Bidet function",
        "Energy efficient",
      ],
      imageUrl:
        "https://readdy.ai/api/search-image?query=modern%20smart%20toilet%20with%20sleek%20design%2C%20white%20ceramic%2C%20minimalist%20style%2C%20professional%20product%20photography%20on%20clean%20background&width=400&height=300&seq=15&orientation=landscape",
    },
    {
      id: 6,
      title: "Towel Warming Rack",
      description:
        "Wall-mounted heated towel rack with multiple bars, perfect for keeping your towels warm and dry.",
      price: "$299",
      tags: ["Heated", "Wall-Mount", "Chrome"],
      features: [
        "Multiple bars",
        "Temperature control",
        "Timer function",
        "Easy installation",
      ],
      imageUrl:
        "https://readdy.ai/api/search-image?query=modern%20chrome%20towel%20warming%20rack%20mounted%20on%20bathroom%20wall%2C%20sleek%20design%2C%20professional%20product%20photography%20on%20clean%20background&width=400&height=300&seq=16&orientation=landscape",
    },
  ];

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
  const filteredItems = bathroomItems.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <img
                src="https://readdy.ai/api/search-image?query=elegant%20minimalist%20home%20decor%20logo%20with%20simple%20geometric%20shapes%2C%20neutral%20colors%2C%20professional%20and%20modern%20design%20for%20interior%20design%20company%2C%20clean%20lines%20and%20subtle%20sophistication&width=150&height=50&seq=9&orientation=landscape"
                alt="Interior Elegance Logo"
                className="h-10 w-auto"
              />
              <h1 className="ml-3 text-2xl font-semibold text-gray-900">
                Interior Elegance
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-gray-700 hover:text-indigo-600 cursor-pointer"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-indigo-600 cursor-pointer"
              >
                Categories
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-indigo-600 cursor-pointer"
              >
                Projects
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-indigo-600 cursor-pointer"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-indigo-600 cursor-pointer"
              >
                Contact
              </a>
            </nav>
            <div className="flex items-center">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg cursor-pointer whitespace-nowrap !rounded-button">
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </header>
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
            Bathroom Collection
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our premium selection of bathroom fixtures and accessories.
            Each piece is carefully chosen to help you create your perfect
            bathroom sanctuary.
          </p>
        </div>
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <span className="text-lg font-semibold text-indigo-600">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {item.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900">
                        Key Features:
                      </h4>
                      <ul className="list-disc list-inside text-gray-600 text-sm">
                        {item.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <button className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg cursor-pointer whitespace-nowrap !rounded-button">
                      <span>View Details</span>
                      <i className="fas fa-arrow-right ml-2"></i>
                    </button>
                    <button className="inline-flex items-center justify-center border border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-4 py-2 rounded-lg cursor-pointer whitespace-nowrap !rounded-button">
                      <i className="fas fa-shopping-cart mr-2"></i>
                      <span>Add to Cart</span>
                    </button>
                  </div>
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
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">
                Interior Elegance
              </h3>
              <p className="mb-4">
                Transforming spaces into beautiful, functional environments that
                reflect your personal style.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  <i className="fab fa-pinterest-p"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  <i className="fab fa-houzz"></i>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">
                Categories
              </h3>
              <ul className="space-y-2">
                {categories.slice(0, 6).map((category) => (
                  <li key={category.id}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white cursor-pointer"
                    >
                      {category.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Our Team
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">
                Contact Us
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <i className="fas fa-map-marker-alt mt-1 mr-3 text-indigo-400"></i>
                  <span>123 Design Street, Creative City, ST 12345</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-phone-alt mr-3 text-indigo-400"></i>
                  <span>(555) 123-4567</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-envelope mr-3 text-indigo-400"></i>
                  <span>info@interiorelegance.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p>© 2025 Interior Elegance. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white cursor-pointer"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white cursor-pointer"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white cursor-pointer"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default ItemsPage;
