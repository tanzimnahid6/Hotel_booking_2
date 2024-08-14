import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-cover bg-center h-64" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
        <div className="flex items-center justify-center h-full  bg-opacity-50">
          <h1 className=" text-4xl font-bold">About Us</h1>
        </div>
      </div>
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800">Our Mission</h2>
          <p className="mt-4 text-gray-600">
            At Hotel Booking, we strive to provide our users with the most comprehensive and user-friendly hotel booking experience. Our mission is to help you find the perfect stay with ease and convenience.
          </p>
        </div>
        <div className="flex flex-wrap -mx-6">
          <div className="w-full md:w-1/2 lg:w-1/3 px-6 mb-12">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src="/vision.jpg" alt="Our Vision" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">Our Vision</h3>
                <p className="text-gray-600 mt-4">
                  To become the leading hotel booking platform worldwide by continually improving our service and expanding our reach to new markets.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-6 mb-12">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src="/value.jpg" alt="Our Values" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">Our Values</h3>
                <p className="text-gray-600 mt-4">
                  Integrity, customer satisfaction, and innovation are at the core of everything we do. We believe in offering only the best to our users.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 px-6 mb-12">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src="/team.jpg" alt="Our Team" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">Our Team</h3>
                <p className="text-gray-600 mt-4">
                  Our dedicated team of professionals works tirelessly to ensure that our platform remains the best choice for hotel booking. Meet the people behind the scenes.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <h2 className="text-3xl font-semibold text-gray-800">Contact Us</h2>
          <p className="mt-4 text-gray-600">
            Have any questions or feedback? Feel free to reach out to us at <a href="mailto:support@hotelbooking.com" className="text-blue-600 underline">tanzimnahid6@gmail.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
