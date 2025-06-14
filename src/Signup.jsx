// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import axios from "axios";
import React, { useState, useEffect } from "react";
import * as echarts from "echarts";

function Signup() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordStrength, setPasswordStrength] = useState(0);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Password requirements
  const passwordRequirements = [
    { id: "length", label: "At least 8 characters", regex: /.{8,}/ },
    { id: "number", label: "Contains a number", regex: /\d/ },
    {
      id: "special",
      label: "Contains a special character",
      regex: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/,
    },
    { id: "uppercase", label: "Contains uppercase letter", regex: /[A-Z]/ },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }

    // Calculate password strength when password changes
    if (name === "password") {
      calculatePasswordStrength(value);
    }
  };

  const calculatePasswordStrength = (password) => {
    let strength = 0;

    passwordRequirements.forEach((req) => {
      if (req.regex.test(password)) {
        strength += 25;
      }
    });

    setPasswordStrength(strength);
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    // Validate full name
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
      isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }

    // Validate password
    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
      isValid = false;
    }

    // Validate confirm password
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsLoading(true);

      try {
        const response = await axios.post(
          "http://localhost:5000/api/auth/signup",
          {
            fullName: formData.fullName,
            email: formData.email,
            password: formData.password,
            confirmPassword: formData.confirmPassword,
          }
        );

        console.log("Signup successful:", response.data);

        setShowSuccessMessage(true);
        setFormData({
          fullName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });

        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 3000);
      } catch (error) {
        console.error("Signup error:", error.response?.data || error.message);
        // Optionally, show error feedback to the user here
        setErrors((prev) => ({
          ...prev,
          email: "Signup failed. Try another email or check your input.",
        }));
      } finally {
        setIsLoading(false);
      }
    } else {
      const form = document.getElementById("signup-form");
      form?.classList.add("animate-shake");
      setTimeout(() => {
        form?.classList.remove("animate-shake");
      }, 500);
    }
  };

  // Initialize password strength chart
  useEffect(() => {
    const chartDom = document.getElementById("password-strength-chart");
    if (chartDom) {
      const myChart = echarts.init(chartDom);

      const option = {
        animation: false,
        series: [
          {
            type: "gauge",
            startAngle: 180,
            endAngle: 0,
            min: 0,
            max: 100,
            splitNumber: 4,
            radius: "100%",
            axisLine: {
              lineStyle: {
                width: 6,
                color: [
                  [0.25, "#FF5252"],
                  [0.5, "#FFA726"],
                  [0.75, "#66BB6A"],
                  [1, "#2E7D32"],
                ],
              },
            },
            pointer: {
              icon: "path://M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",
              length: "60%",
              width: 8,
              offsetCenter: [0, "5%"],
              itemStyle: {
                color: "#424242",
              },
            },
            axisTick: {
              length: 12,
              lineStyle: {
                color: "auto",
                width: 2,
              },
            },
            splitLine: {
              length: 20,
              lineStyle: {
                color: "auto",
                width: 2,
              },
            },
            axisLabel: {
              color: "#999",
              fontSize: 10,
              distance: -60,
              formatter: function (value) {
                if (value === 0) return "Weak";
                if (value === 50) return "Medium";
                if (value === 100) return "Strong";
                return "";
              },
            },
            title: {
              offsetCenter: [0, "-20%"],
              fontSize: 12,
              color: "#616161",
            },
            detail: {
              fontSize: 14,
              offsetCenter: [0, "30%"],
              valueAnimation: true,
              color: "#616161",
              formatter: function (value) {
                if (value <= 25) return "Weak";
                if (value <= 50) return "Fair";
                if (value <= 75) return "Good";
                return "Strong";
              },
            },
            data: [
              {
                value: passwordStrength,
                name: "Password Strength",
              },
            ],
          },
        ],
      };

      myChart.setOption(option);

      // Update chart when password strength changes
      return () => {
        myChart.dispose();
      };
    }
  }, [passwordStrength]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4 md:p-8">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden transition-all duration-300 transform">
        {/* Header */}
        <div className="p-6 md:p-8 text-center border-b border-gray-100">
          <div className="flex justify-center mb-4">
            <img
              src="https://readdy.ai/api/search-image?query=modern%20minimalist%20logo%20design%20with%20blue%20and%20purple%20gradient%2C%20abstract%20geometric%20shape%2C%20professional%20and%20clean%2C%20suitable%20for%20tech%20company%2C%20white%20background%2C%20vector%20style&width=120&height=120&seq=logo1&orientation=squarish"
              alt="Company Logo"
              className="h-12 w-auto object-contain"
            />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Create your account
          </h1>
          <p className="text-gray-600">Join thousands of users today</p>
        </div>

        {/* Social Sign-up Options */}
        <div className="px-6 md:px-8 pt-6">
          <div className="flex flex-col md:flex-row gap-3 mb-6">
            <button
              type="button"
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors duration-200 !rounded-button whitespace-nowrap cursor-pointer"
            >
              <i className="fab fa-google text-red-500"></i>
              <span>Sign up with Google</span>
            </button>
            <button
              type="button"
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors duration-200 !rounded-button whitespace-nowrap cursor-pointer"
            >
              <i className="fab fa-apple text-gray-800"></i>
              <span>Sign up with Apple</span>
            </button>
          </div>

          <div className="relative flex items-center justify-center mb-6">
            <div className="border-t border-gray-200 absolute w-full"></div>
            <span className="bg-white px-3 text-sm text-gray-500 relative">
              or continue with email
            </span>
          </div>
        </div>

        {/* Sign-up Form */}
        <form
          id="signup-form"
          className="px-6 md:px-8 pb-6 md:pb-8"
          onSubmit={handleSubmit}
        >
          <div className="space-y-5">
            {/* Full Name */}
            <div className="relative">
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.fullName ? "border-red-500" : "border-gray-300"
                  } focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200`}
                  placeholder="Enter your full name"
                />
                {formData.fullName && !errors.fullName && (
                  <i className="fas fa-check-circle absolute right-3 top-3 text-green-500"></i>
                )}
              </div>
              {errors.fullName && (
                <p className="mt-1 text-sm text-red-500 flex items-center">
                  <i className="fas fa-exclamation-circle mr-1"></i>
                  {errors.fullName}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="relative">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200`}
                  placeholder="Enter your email address"
                />
                {formData.email && !errors.email && (
                  <i className="fas fa-check-circle absolute right-3 top-3 text-green-500"></i>
                )}
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-500 flex items-center">
                  <i className="fas fa-exclamation-circle mr-1"></i>
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  onFocus={() => setPasswordFocused(true)}
                  onBlur={() => setPasswordFocused(false)}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  } focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200`}
                  placeholder="Create a password"
                />
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-500 flex items-center">
                  <i className="fas fa-exclamation-circle mr-1"></i>
                  {errors.password}
                </p>
              )}

              {/* Password Strength Indicator */}
              {(passwordFocused || formData.password) && (
                <div className="mt-3 mb-4">
                  <div className="mb-2">
                    <div
                      id="password-strength-chart"
                      style={{ width: "100%", height: "120px" }}
                    ></div>
                  </div>
                  <div className="space-y-1 mt-2">
                    {passwordRequirements.map((req) => (
                      <div key={req.id} className="flex items-center text-sm">
                        <i
                          className={`fas fa-${
                            req.regex.test(formData.password)
                              ? "check text-green-500"
                              : "times text-gray-400"
                          } w-5`}
                        ></i>
                        <span
                          className={
                            req.regex.test(formData.password)
                              ? "text-green-600"
                              : "text-gray-600"
                          }
                        >
                          {req.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.confirmPassword
                      ? "border-red-500"
                      : "border-gray-300"
                  } focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200`}
                  placeholder="Confirm your password"
                />
                {formData.confirmPassword &&
                  formData.password === formData.confirmPassword && (
                    <i className="fas fa-check-circle absolute right-3 top-3 text-green-500"></i>
                  )}
              </div>
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-500 flex items-center">
                  <i className="fas fa-exclamation-circle mr-1"></i>
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 flex items-center justify-center !rounded-button whitespace-nowrap cursor-pointer ${
                isLoading ? "opacity-80" : ""
              }`}
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Creating account...
                </>
              ) : (
                "Create Account"
              )}
            </button>

            {/* Success Message */}
            {showSuccessMessage && (
              <div className="mt-4 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg flex items-center animate-fade-in">
                <i className="fas fa-check-circle text-green-500 mr-2"></i>
                <span>Account created successfully! Redirecting...</span>
              </div>
            )}

            {/* Terms and Privacy */}
            <p className="text-sm text-gray-600 text-center mt-4">
              By creating an account, you agree to our
              <a href="#" className="text-blue-600 hover:underline mx-1">
                Terms of Service
              </a>
              and
              <a href="#" className="text-blue-600 hover:underline mx-1">
                Privacy Policy
              </a>
            </p>
          </div>
        </form>

        {/* Footer */}
        <div className="px-6 md:px-8 py-4 bg-gray-50 border-t border-gray-100 text-center">
          <p className="text-gray-600">
            Already have an account?
            <a
              href="#"
              className="text-blue-600 hover:underline font-medium ml-1"
            >
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
