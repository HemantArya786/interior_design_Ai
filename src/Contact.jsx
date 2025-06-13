// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Residential",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/contact",
        formData
      );
      console.log("Form submitted:", response.data);

      setSuccess("Form submitted successfully!");

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "Residential",
        message: "",
      });
    } catch (err) {
      console.error("Error submitting form:", err);
      setError(
        err.response?.data?.message || "Something went wrong. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}

      {/* Hero Section */}
      <div className="relative pt-16">
        <div className="absolute inset-0 h-[600px]">
          <img
            src="https://readdy.ai/api/search-image?query=luxurious%20modern%20interior%20design%20studio%20workspace%20with%20natural%20light%20minimal%20aesthetic%20clean%20lines%20neutral%20colors%20high%20end%20furniture%20and%20design%20materials%20architectural%20details%20professional%20environment&width=1440&height=600&seq=2&orientation=landscape"
            alt="Studio Space"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-32">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transforming Spaces
            <br />
            Into Experiences
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Where artificial intelligence meets interior design excellence,
            creating personalized and innovative living spaces that reflect your
            unique style.
          </p>
        </div>
      </div>
      {/* About Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Design Philosophy
            </h2>
            <p className="text-gray-600 mb-6">
              At Interior AI, we believe that every space tells a story. Our
              innovative approach combines cutting-edge artificial intelligence
              with timeless design principles to create environments that are
              both beautiful and functional.
            </p>
            <p className="text-gray-600 mb-6">
              With over a decade of experience in interior design, we've
              developed a unique methodology that allows us to understand and
              interpret your vision perfectly, translating it into spaces that
              exceed expectations.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-12">
              <div>
                <h3 className="text-4xl font-bold text-gray-900 mb-2">250+</h3>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-gray-900 mb-2">15+</h3>
                <p className="text-gray-600">Design Awards</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://readdy.ai/api/search-image?query=elegant%20interior%20designer%20working%20in%20modern%20studio%20space%20with%20architectural%20plans%20and%20material%20samples%20professional%20environment%20with%20design%20tools%20and%20sophisticated%20decor%20neutral%20color%20palette&width=600&height=800&seq=3&orientation=portrait"
              alt="Designer at Work"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
      {/* Team Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our talented team of designers brings together diverse expertise
              and creative vision to deliver exceptional results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                name: "Sarah Anderson",
                role: "Lead Designer",
                image:
                  "https://readdy.ai/api/search-image?query=professional%20female%20interior%20designer%20portrait%20elegant%20confident%20pose%20neutral%20background%20sophisticated%20business%20attire%20modern%20minimal%20aesthetic&width=400&height=400&seq=4&orientation=squarish",
              },
              {
                name: "Michael Chen",
                role: "AI Technology Director",
                image:
                  "https://readdy.ai/api/search-image?query=professional%20male%20tech%20expert%20portrait%20modern%20minimal%20background%20confident%20pose%20business%20casual%20attire%20asian%20ethnicity&width=400&height=400&seq=5&orientation=squarish",
              },
              {
                name: "Emma Roberts",
                role: "Project Manager",
                image:
                  "https://readdy.ai/api/search-image?query=professional%20female%20project%20manager%20portrait%20modern%20office%20background%20confident%20pose%20business%20professional%20attire&width=400&height=400&seq=6&orientation=squarish",
              },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Values Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Core Values
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Guided by these principles, we create spaces that inspire and
            transform.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              icon: "fa-lightbulb",
              title: "Innovation",
              description: "Pushing boundaries with AI-driven design solutions",
            },
            {
              icon: "fa-star",
              title: "Excellence",
              description:
                "Committed to delivering exceptional quality in every project",
            },
            {
              icon: "fa-users",
              title: "Collaboration",
              description:
                "Working closely with clients to bring their vision to life",
            },
          ].map((value, index) => (
            <div key={index} className="text-center">
              <i
                className={`fas ${value.icon} text-4xl text-gray-900 mb-4`}
              ></i>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Contact Form Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-8">
              Transform your space with our AI-powered design solutions. Contact
              us to discuss your project and bring your vision to life.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <i className="fas fa-map-marker-alt text-2xl text-gray-900"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Visit Us
                  </h3>
                  <p className="text-gray-600">
                    123 Design Street
                    <br />
                    New York, NY 10001
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <i className="fas fa-phone text-2xl text-gray-900"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Call Us
                  </h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <i className="fas fa-envelope text-2xl text-gray-900"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Email Us
                  </h3>
                  <p className="text-gray-600">info@interiorai.com</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-6">
                <Link to={""} className="text-gray-600 hover:text-gray-900">
                  <i className="fab fa-instagram text-2xl"></i>
                </Link>
                <Link to={""} className="text-gray-600 hover:text-gray-900">
                  <i className="fab fa-pinterest text-2xl"></i>
                </Link>
                <Link to={""} className="text-gray-600 hover:text-gray-900">
                  <i className="fab fa-linkedin text-2xl"></i>
                </Link>
                <Link to={""} className="text-gray-600 hover:text-gray-900">
                  <i className="fab fa-houzz text-2xl"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="projectType"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                >
                  <option value="Residential">Residential</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Office">Office</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors duration-200 !rounded-button"
              >
                {isLoading ? "Submitting..." : "Submit"}
              </button>

              {error && <p className="text-red-500">{error}</p>}
              {success && <p className="text-green-500">{success}</p>}
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-[400px] relative">
        <img
          src="https://readdy.ai/api/search-image?query=modern%20city%20map%20visualization%20with%20streets%20and%20buildings%20elegant%20minimalist%20design%20style%20architectural%20blueprint%20overlay%20neutral%20tones%20professional%20layout&width=1440&height=400&seq=8&orientation=landscape"
          alt="Location Map"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Footer */}
    </div>
  );
};
export default Contact;
