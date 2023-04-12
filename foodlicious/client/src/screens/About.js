import React from "react";
import nishant from "../images/nishant.jpg";
import aseem from "../images/AD.jpg";
import anuja from "../images/AK.jpg";
import rahul from "../images/RK.jpg";
import uday from "../images/US.jpg";
import food from "../images/food-1.jpg";

const AboutUs = () => {
  return (
    <div>
      {/* Section 1 */}
      <section className="bg-gradient-to-r from-pink-400 to-yellow-500 py-12 px-4 md:px-0">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-white mb-6">About Us</h1>
          <p className="text-white">
          Welcome to cuisine Licious, where you can get scrumptious cuisine delivered to your house. 
          Our goal is to eliminate the burden of preparing and eating out 
          so that you may enjoy restaurant-quality meals in the convenience of your own home.
Our team is made up of enthusiastic foodies who are aware of what it takes to produce a special dining occasion. 
Every step of the process is something we take pride in, from choosing the freshest ingredients to expertly wrapping your order.
          </p>            
          {/* <img src={food} alt="Food Image" className="w-30 h-64" /> */}

        </div>
        
      </section>

      {/* Section 2 */}
      <section className="container mx-auto py-12 px-4 md:px-0">
      <div className="flex items-center justify-center mb-6">
        <h2 className="flex text-3xl font-bold p-0 m-auto text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-pink-500">Meet Our Team</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* All the team members */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <img src={nishant} alt="Nishant Patel" className="w-full h-64 object-cover mb-4 rounded" />
            <h3 className="text-xl font-bold mb-2">Nishant Patel</h3>
            <p className="text-gray-500 mb-4">MSIS - Bridge</p>
            <a href="https://www.linkedin.com/in/nishnger/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </div>

         
          <div className="bg-white shadow-lg rounded-lg p-6">
            <img src={anuja} alt="Anuja Kale" className="w-full h-64 object-cover mb-4 rounded" />
            <h3 className="text-xl font-bold mb-2">Anuja Kale</h3>
            <p className="text-gray-500 mb-4">MSIS</p>
            <a href="https://www.linkedin.com/in/anuja-kale-350b061a7/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <img src={rahul} alt="Rahul Kodate" className="w-full h-64 object-cover mb-4 rounded" />
            <h3 className="text-xl font-bold mb-2">Rahul Kodate</h3>
            <p className="text-gray-500 mb-4">MSIS</p>
            <a href="https://www.linkedin.com/in/rahulkodate/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <img src={aseem} alt="Aseem Deshmukh" className="w-full h-64 object-cover mb-4 rounded" />
            <h3 className="text-xl font-bold mb-2">Aseem Deshmukh</h3>
            <p className="text-gray-500 mb-4">MSIS - Bridge</p>
            <a href="https://www.linkedin.com/in/aseem-deshmukh/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <img src={uday} alt="Udaykumar Shelke" className="w-full h-64 object-cover mb-4 rounded" />
            <h3 className="text-xl font-bold mb-2">Udaykumar Shelke</h3>
            <p className="text-gray-500 mb-4">MSIS</p>
            <a href="https://www.linkedin.com/in/udayshelke/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </div>
          {/* End of team member cards */}
        </div>
      </section>

      {/* Section 3 */}
      <section className="bg-gray-100 py-12 px-4 md:px-0">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">What Makes Us Unique</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Replace the following points with your actual unique points */}
            <div className="flex items-start">
              <i className="fas fa-check text-green-500 mr-4 text-xl"></i>
              <h6>Fresh food</h6>
            </div>
            <div className="flex items-start">
              <i className="fas fa-check text-green-500 mr-4 text-xl"></i>
              <h6>Affordable prices</h6>
            </div>
            <div className="flex items-start">
              <i className="fas fa-check text-green-500 mr-4 text-xl"></i>
              <h6>High Quality</h6>
            </div>
            <div className="flex items-start">
              <i className="fas fa-check text-green-500 mr-4 text-xl"></i>
              <h6>At your doorsteps</h6>
            </div>
            <div className="flex items-start">
              <i className="fas fa-check text-green-500 mr-4 text-xl"></i>
              <h6>Easy to Order</h6>
            </div>
            {/* Other unique points */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;