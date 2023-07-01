
import React from "react";


const ContactUs = () => {
  return (
    <div>


      {/* Section 1 */}
      <section className="bg-gradient-to-r from-yellow-300 via-orange-300 to-purple-300 py-12 px-4 md:px-0">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-white">
            We would love to hear from you!
          </p>
        </div>
      </section>



      {/* Section 2 */}

      <section className="container max-w-md mx-auto py-12 px-4 md:px-0">
        <h2 className="text-3xl font-bold mb-6 p-0 m-auto text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-pink-500">Get In Touch</h2>
        <form>
        <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Enter your name"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Enter your email"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="message"
          rows="5"
          placeholder="Enter your message"
        ></textarea>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Submit
      </button>
          
        </form>
      </section>

      {/* Section 3 */}
      <section className="bg-gray-100 py-12 px-4 md:px-0">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6 p-0 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-pink-500">Follow Us</h2>
          <div className="flex space-x-20 items-center justify-center">
            
            <a href="https://facebook.com" className="mr-3 text-blue-600 text-5xl hover:text-blue-800"><i className="fab fa-facebook-square"></i></a>
            <a href="https://twitter.com" className="mr-3 text-blue-400 text-5xl hover:text-blue-600"><i className="fab fa-twitter-square"></i></a>
            <a href="https://instagram.com" className=" text-red-600 text-5xl hover:text-red-800"><i className="fab fa-instagram-square"></i></a>
          </div>
        </div>
      </section>

        {/* Section 4 */}
      <section className="container mx-auto py-12 px-4 md:px-0">
        <h2 className="text-3xl font-bold mb-10 p-0 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-pink-500">Our Contact</h2>
        <div className=" flex items-center justify-center">
        <div className="mr-10">
            <h3 className="text-xl font-bold mb-2">Address</h3>
            <p><a href="https://www.google.com/maps/place/Northeastern+University/@42.3398067,-71.0891717,15z/data=!4m6!3m5!1s0x89e37a1999cf5ce1:0xc97b00e66522b98c!8m2!3d42.3398067!4d-71.0891717!16zL20vMDIyNXY5" class="text-black hover:text-grey">
                FoodLicious,<br />
                360 Huntington Ave,<br />
                Boston, MA 02115</a>
            </p>
        </div>
        <div>
            <h3 className="text-xl font-bold mb-2">Phone</h3>
            <p><a href="tel:+16179716509" class="text-black hover:text-grey">(555) 123-4567</a></p>
        </div>
    </div>
</section>

    </div>
  );
};

export default ContactUs;
