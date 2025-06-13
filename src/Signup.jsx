// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleCheckboxChange = (checked) => {
    setFormData((prev) => ({
      ...prev,
      agreeToTerms: checked,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/signup", {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
      });

      console.log("Signup successful:", response.data);
      // Redirect or show success message here
    } catch (err) {
      console.error("Signup error:", err);
      setError(
        err.response?.data?.message ||
          "An error occurred during signup. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <img
            src="https://readdy.ai/api/search-image?query=modern%20minimalist%20AI%20tech%20company%20logo%20with%20blue%20accent%20on%20dark%20background%20professional%20sleek%20design%20with%20abstract%20geometric%20elements%20simple%20elegant%20branding%20for%20technology%20firm&width=180&height=60&seq=3&orientation=landscape"
            alt="Company Logo"
            className="h-12 mx-auto mb-6"
          />
          <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
          <p className="text-gray-400">Join us to start your journey</p>
        </div>
        {/* Login Form */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 shadow-2xl p-8">
          {error && (
            <div className="mb-6 p-3 bg-red-900/30 border border-red-800 rounded-lg text-red-300 text-sm">
              <div className="flex items-center">
                <i className="fas fa-exclamation-circle mr-2"></i>
                <span>{error}</span>
              </div>
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="block text-gray-300">
                    First Name
                  </label>
                  <div className="relative">
                    <i className="fas fa-user absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"></i>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 py-2 bg-gray-900/70 border border-gray-700 rounded-lg text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500 focus:ring-2 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="block text-gray-300">
                    Last Name
                  </label>
                  <div className="relative">
                    <i className="fas fa-user absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"></i>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 py-2 bg-gray-900/70 border border-gray-700 rounded-lg text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500 focus:ring-2 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-gray-300">
                  Email address
                </label>
                <div className="relative">
                  <i className="fas fa-envelope absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"></i>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 py-2 bg-gray-900/70 border border-gray-700 rounded-lg text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500 focus:ring-2 focus:outline-none"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-gray-300">
                    Password
                  </label>
                  <a
                    href="#"
                    className="text-sm text-blue-400 hover:text-blue-300 cursor-pointer"
                  >
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <i className="fas fa-lock absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"></i>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 py-2 bg-gray-900/70 border border-gray-700 rounded-lg text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500 focus:ring-2 focus:outline-none"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="confirmPassword"
                  className="block text-gray-300"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <i className="fas fa-lock absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"></i>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 py-2 bg-gray-900/70 border border-gray-700 rounded-lg text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500 focus:ring-2 focus:outline-none"
                  />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={(e) => handleCheckboxChange(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-600 text-blue-600 focus:ring-blue-500 bg-gray-900/70"
                />
                <label
                  htmlFor="agreeToTerms"
                  className="text-sm text-gray-300 cursor-pointer"
                >
                  I agree to the{" "}
                  <a href="#" className="text-blue-400 hover:text-blue-300">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-blue-400 hover:text-blue-300">
                    Privacy Policy
                  </a>
                </label>
              </div>
              <button
                type="submit"
                disabled={isLoading || !formData.agreeToTerms}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap !rounded-button"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <i className="fas fa-circle-notch fa-spin mr-2"></i>
                    <span>Creating account...</span>
                  </div>
                ) : (
                  "Create Account"
                )}
              </button>
            </div>
          </form>
          <div className="mt-6 pt-6 border-t border-gray-700">
            <div className="text-center text-gray-400 text-sm mb-4">
              Or continue with
            </div>
            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                className="bg-transparent border border-gray-700 hover:bg-gray-800 text-white py-2 rounded-lg transition-colors cursor-pointer whitespace-nowrap !rounded-button"
              >
                <i className="fab fa-google text-lg"></i>
              </button>
              <button
                type="button"
                className="bg-transparent border border-gray-700 hover:bg-gray-800 text-white py-2 rounded-lg transition-colors cursor-pointer whitespace-nowrap !rounded-button"
              >
                <i className="fab fa-apple text-lg"></i>
              </button>
              <button
                type="button"
                className="bg-transparent border border-gray-700 hover:bg-gray-800 text-white py-2 rounded-lg transition-colors cursor-pointer whitespace-nowrap !rounded-button"
              >
                <i className="fab fa-microsoft text-lg"></i>
              </button>
            </div>
          </div>
        </div>
        {/* Sign In Link */}
        <div className="text-center mt-6 text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-400 hover:text-blue-300 cursor-pointer"
          >
            Sign in
          </Link>
        </div>
        {/* Background Image */}
        <div className="fixed inset-0 -z-10 opacity-20">
          <img
            src="https://readdy.ai/api/search-image?query=abstract%20digital%20network%20connections%20with%20glowing%20nodes%20and%20lines%20on%20dark%20background%20futuristic%20technology%20concept%20with%20blue%20and%20purple%20accents%20high%20tech%20visualization%20AI%20network%20representation%20cybersecurity%20theme&width=1440&height=900&seq=4&orientation=landscape"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
export default Signup;
