import React from "react";

function About() {
  return (
    <div className="bg-[#f6faff] py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        
        {/* Text Section */}
        <div className="md:w-2/3 w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            About Us
          </h2>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4">
            Founded on the values of family, Lalit Roongta Group prioritizes trust, transparency, and customer satisfaction. Embedded in this belief system, every structure is built to cater to the needs of the ever-progressive fabric of society; be it the landscaped green pockets, luxurious meeting rooms, serene worship places, or the highly equipped gyms; every space is highly functional, in sync with the Vaastu, and exceptionally aesthetic. Implementing the practice of amalgamating its principles with cutting-edge technological advancements in the construction industry, today the Lalit Roongta Group has scaled unsurmountable heights of success and has established itself as one of the most unrivalled names of Nashik’s Real Estate scenario.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/3 w-full mt-8 md:mt-0 flex justify-center">
          <img
            src="https://www.roongtagroup.co.in/uploads/About_us.webp"
            alt="About Us"
            className="max-w-full h-auto rounded-md shadow-md"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
