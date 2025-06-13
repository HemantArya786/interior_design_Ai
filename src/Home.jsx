// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from "react";
const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Residential",
    message: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      projectType: "Residential",
      message: "",
    });
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
        <div className="absolute inset-0 h-[800px]">
          <img
            src="https://readdy.ai/api/search-image?query=luxurious%20modern%20living%20room%20interior%20with%20floor%20to%20ceiling%20windows%20natural%20light%20streaming%20in%20minimal%20aesthetic%20clean%20lines%20neutral%20colors%20high%20end%20furniture%20artistic%20decor%20elements%20sophisticated%20ambiance&width=1440&height=800&seq=9&orientation=landscape"
            alt="Luxury Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-48 pb-48">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Redefining Spaces
            <br />
            With AI Innovation
          </h1>
          <p className="text-xl text-gray-100 max-w-2xl mb-12">
            Experience the future of interior design where artificial
            intelligence creates personalized, stunning spaces that perfectly
            match your style and needs.
          </p>
          <div className="flex space-x-6">
            <button className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 !rounded-button whitespace-nowrap">
              Get Started
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-200 !rounded-button whitespace-nowrap">
              View Projects
            </button>
          </div>
        </div>
      </div>
      {/* Featured Services */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Design Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our AI-powered design solutions can transform your
            space into something extraordinary.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              title: "Residential Design",
              description:
                "Create your dream home with our AI-powered residential design services.",
              image:
                "https://readdy.ai/api/search-image?query=modern%20luxury%20residential%20interior%20living%20room%20with%20large%20windows%20natural%20light%20minimal%20design%20aesthetic%20warm%20neutral%20colors%20high%20end%20furniture&width=400&height=300&seq=10&orientation=landscape",
            },
            {
              title: "Commercial Spaces",
              description:
                "Transform your business environment with innovative commercial design solutions.",
              image:
                "https://readdy.ai/api/search-image?query=contemporary%20office%20space%20interior%20design%20with%20modern%20furniture%20collaborative%20areas%20natural%20light%20professional%20environment%20minimal%20aesthetic&width=400&height=300&seq=11&orientation=landscape",
            },
            {
              title: "Virtual Consultation",
              description:
                "Get expert design advice from anywhere with our virtual consultation service.",
              image:
                "https://readdy.ai/api/search-image?query=modern%20home%20office%20setup%20with%20digital%20devices%20and%20design%20tools%20professional%20workspace%20minimal%20aesthetic%20neutral%20colors&width=400&height=300&seq=12&orientation=landscape",
            },
          ].map((service, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative h-64 mb-6 overflow-hidden rounded-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-opacity duration-500"></div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Latest Projects */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Latest Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our recent transformations and get inspired for your next
              project.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Modern Minimalist Home",
                category: "Residential",
                image:
                  "https://readdy.ai/api/search-image?query=minimalist%20modern%20living%20room%20interior%20design%20with%20clean%20lines%20natural%20materials%20neutral%20colors%20high%20end%20furniture%20artistic%20accents&width=400&height=500&seq=13&orientation=portrait",
              },
              {
                title: "Luxury Office Suite",
                category: "Commercial",
                image:
                  "https://readdy.ai/api/search-image?query=luxury%20modern%20office%20interior%20design%20with%20elegant%20furniture%20sophisticated%20decor%20natural%20light%20professional%20environment&width=400&height=500&seq=14&orientation=portrait",
              },
              {
                title: "Urban Loft Design",
                category: "Residential",
                image:
                  "https://readdy.ai/api/search-image?query=contemporary%20urban%20loft%20interior%20with%20industrial%20elements%20modern%20furniture%20artistic%20lighting%20high%20ceilings&width=400&height=500&seq=15&orientation=portrait",
              },
            ].map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative h-96 mb-6 overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-opacity duration-500 flex items-end">
                    <div className="p-6 w-full bg-gradient-to-t from-black to-transparent">
                      <span className="text-sm text-gray-300 mb-2 block">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-semibold text-white">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Why Choose Us */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Why Choose Interior AI
            </h2>
            <div className="space-y-8">
              {[
                {
                  title: "AI-Powered Design",
                  description:
                    "Our advanced AI technology creates personalized design solutions tailored to your preferences and lifestyle.",
                  icon: "fa-robot",
                },
                {
                  title: "Expert Team",
                  description:
                    "Combine AI innovation with human expertise from our team of experienced interior designers.",
                  icon: "fa-users",
                },
                {
                  title: "Sustainable Approach",
                  description:
                    "We prioritize eco-friendly materials and sustainable design practices for a better future.",
                  icon: "fa-leaf",
                },
                {
                  title: "Time & Cost Efficient",
                  description:
                    "Save time and money with our streamlined design process and AI optimization.",
                  icon: "fa-clock",
                },
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <i
                      className={`fas ${feature.icon} text-2xl text-gray-900`}
                    ></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="https://readdy.ai/api/search-image?query=modern%20interior%20design%20consultation%20with%20digital%20devices%20showing%20AI%20visualization%20professional%20designer%20working%20with%20client%20sophisticated%20office%20environment&width=600&height=800&seq=16&orientation=portrait"
              alt="Design Process"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
      {/* Testimonials */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our satisfied clients about their experience with
              Interior AI.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                name: "Emily Thompson",
                role: "Homeowner",
                quote:
                  "Interior AI transformed our house into a dream home. The AI-powered design process was incredibly efficient and the results exceeded our expectations.",
                image:
                  "https://readdy.ai/api/search-image?query=professional%20portrait%20photo%20of%20confident%20middle%20aged%20woman%20elegant%20casual%20attire%20neutral%20background%20warm%20lighting&width=100&height=100&seq=17&orientation=squarish",
              },
              {
                name: "David Chen",
                role: "Business Owner",
                quote:
                  "The combination of AI technology and human expertise created the perfect office space for our team. The design perfectly reflects our company culture.",
                image:
                  "https://readdy.ai/api/search-image?query=professional%20portrait%20photo%20of%20asian%20businessman%20modern%20casual%20attire%20neutral%20background%20natural%20lighting&width=100&height=100&seq=18&orientation=squarish",
              },
              {
                name: "Sarah Miller",
                role: "Interior Designer",
                quote:
                  "As a designer, working with Interior AI has revolutionized my approach to projects. The AI tools are incredibly powerful and intuitive.",
                image:
                  "https://readdy.ai/api/search-image?query=professional%20portrait%20photo%20of%20young%20female%20designer%20creative%20casual%20attire%20neutral%20background%20studio%20lighting&width=100&height=100&seq=19&orientation=squarish",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* CTA Section */}
      <div className="relative py-24">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=modern%20luxury%20interior%20design%20visualization%20with%20dramatic%20lighting%20minimal%20aesthetic%20clean%20lines%20neutral%20colors%20artistic%20elements%20professional%20environment&width=1440&height=600&seq=20&orientation=landscape"
            alt="CTA Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-12">
            Let's create something extraordinary together with the power of AI
            and expert design.
          </p>
          <button className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 !rounded-button whitespace-nowrap">
            Start Your Project
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our Design Philosophy
          </h2>
          <p className="text-gray-600 mb-6">
            At Interior AI, we believe that every space tells a story. Our
            innovative approach combines cutting-edge artificial intelligence
            with timeless design principles to create environments that are both
            beautiful and functional.
          </p>
          <p className="text-gray-600 mb-6">
            With over a decade of experience in interior design, we've developed
            a unique methodology that allows us to understand and interpret your
            vision perfectly, translating it into spaces that exceed
            expectations.
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

      {/* Map Section */}

      {/* Footer */}
    </div>
  );
};
export default Home;
