import React from "react";

function HowItwork() {
  return (
    <div className="bg-black border h text-white px-6 py-16">
      <section className="max-w-5xl mx-auto mb-20">
        <h2 className="text-4xl font-bold text-center mb-10">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold mb-2">
              1. Upload or Describe
            </h3>
            <p className="text-gray-400">
              Upload an image of your room or describe what you want. Our AI
              understands your style.
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold mb-2">2. AI Transformation</h3>
            <p className="text-gray-400">
              Our intelligent model generates stunning interior design ideas
              tailored to your space.
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold mb-2">
              3. Preview & Download
            </h3>
            <p className="text-gray-400">
              Review the transformation and download your final design, ready to
              inspire your makeover.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HowItwork;
