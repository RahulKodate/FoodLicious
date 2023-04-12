import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Link } from 'react-router-dom';
import backgroundimg from "../images/3.png";
import backgroundimg4 from "../images/4.png";
import backgroundimg5 from "../images/5.png";
import dish1 from "../images/6.png";
import dish2 from "../images/7.png";
import dish3 from "../images/8.png";
import dish4 from "../images/9.png";
import person1 from "../images/10.png";
import person2 from "../images/11.png";
import person3 from "../images/12.png";
import About from './About';


function LandingPage() {
  return (
    <>
      <div>
        {/* Section 1: Hero Section */}
        <section
          className="hero-section bg-cover bg-center bg-fixed relative flex items-center justify-center h-screen"
          style={{
            backgroundImage: `url(${backgroundimg4})`,
            opacity: "0.8",
            backgroundColor: "white",
          }}
        >
          <div className="justify-center items-center">
            <div
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-pink-500"
            >
              <h1 className="text-7xl text-bold">
                Find Boston's Best Cuisine
              </h1>
            </div>
            <br></br>
            <div className=" justify-center items-center flex hero-buttons mt-6">
              <Link to="/about">
                <button className="bg-green-300 text-white px-6 py-2 rounded-lg mx-2 bg-blue-600">
                  More Info
                </button>
              </Link>
            
            </div>
          </div>
        </section>

 {/* Section 2: Top Dishes */}
<section
  className="top-dishes bg-cover bg-center bg-fixed relative py-12 px-6 text-black items-center justify-center"
  style={{ backgroundImage: `url(${backgroundimg5})` }}
>
  <div className="container mx-auto">
    <h2 className="text-3xl font-bold p-0 m-auto text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-pink-500">Top Dishes</h2>
    <p className="text-xl mt-2 mb-4 text-center">Some popular and well-known dishes that you might enjoy</p>
    <div className="flex flex-wrap -mx-4">
      <div className="md:w-1/2 lg:w-1/4 px-4 mb-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src={dish1} alt="Pizza" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="font-bold text-xl mb-2">Pizza</h3>
            <p className="text-gray-600">An Italian classic that has become a global favorite, consisting of a flatbread base topped with tomato sauce, cheese, and various toppings.</p>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 lg:w-1/4 px-4 mb-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src={dish2} alt="Curry" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="font-bold text-xl mb-2">Curry</h3>
            <p className="text-gray-600">A dish that originated in the Indian but has spread throughout the world, consisting of a spiced sauce typically made with meat, vegetables.</p>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 lg:w-1/4 px-4 mb-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src={dish3} alt="Roast Chicken" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="font-bold text-xl mb-2">Roast Chicken</h3>
            <p className="text-gray-600">A classic British dish consisting of a whole chicken roasted with herbs and served with sides like roasted vegetables, & gravy.</p>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 lg:w-1/4 px-4 mb-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src={dish4} alt="Sushi" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="font-bold text-xl mb-2">Sushi</h3>
            <p className="text-gray-600">A Japanese delicacy made from vinegared rice, raw fish or seafood, and other ingredients like avocado, cucumber, or egg.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Section 3: Testimonials */}
<section className="testimonials bg-gray-100 py-12 px-6">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold p-auto mb-3 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-pink-500">Testimonials</h2>
    <div className="testimonial-carousel space-x-4 flex overflow-x-scroll">
      <div className="testimonial-card w-96 p-6 mb-10 ml-5 bg-white shadow-lg rounded-md hover:bg-gray-200 transition duration-300">
        <p className="text-gray-600 italic">"This Chicken Pad Thai was amazing! The noodles were cooked perfectly and had a nice chewy texture."</p>
        <div className="flex items-center mt-4">
          <img src={person1} alt="Person 1" className="w-12 h-12 rounded-full mr-4" />
          <div>
            <h4 className="text-xl font-bold">Jane Doe</h4>
            <p className="text-gray-500">Food Enthusiast</p>
          </div>
        </div>
      </div>
      <div className="testimonial-card w-96 p-6 mb-10 bg-white shadow-lg rounded-md hover:bg-gray-200 transition duration-300">
        <p className="text-gray-600 italic">"This Margherita pizza was simple yet delicious. The crust was crispy on the outside and soft on the inside."</p>
        <div className="flex items-center mt-4">
          <img src={person2} alt="Person 2" className="w-12 h-12 rounded-full mr-4" />
          <div>
            <h4 className="text-xl font-bold">John Smith</h4>
            <p className="text-gray-500">Food Critic</p>
          </div>
        </div>
      </div>
      <div className="testimonial-card w-96 p-6 mb-10 bg-white shadow-lg rounded-md hover:bg-gray-200 transition duration-300">
        <p className="text-gray-600 italic">"This chocolate brownie was so decadent and rich. The edges were slightly crispy, and the middle was gooey and fudgy."</p>
        <div className="flex items-center mt-4">
          <img src={person3} alt="Person 3" className="w-12 h-12 rounded-full mr-4" />
          <div>
            <h4 className="text-xl font-bold">Maria Rodriguez</h4>
            <p className="text-gray-500">Food Blogger</p>
          </div>
        </div>
      </div>
      {/* Add more testimonials as needed */}
    </div>
  </div>
</section>


</div>
</>
);
}

export default LandingPage;