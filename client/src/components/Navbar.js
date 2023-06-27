import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../actions/userActions";

export default function Navbar() {
  const cartstate = useSelector((state) => state.cartReducer);
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className='bg-gradient-to-r from-pink-400 via-orange-600 to-yellow-500 shadow-lg rounded p-3'>
        <div className='container mx-auto'>
          <div className='flex justify-between items-center'>
            <a href='/' className='text-white text-2xl font-bold'>
              FOODLICIOUS
            </a>
            <div className='hidden lg:flex space-x-4 items-center'>
              {currentUser ? (
                <>
                  <a className='text-white font-semibold' href='/'>
                    Home
                  </a>
                  <a className='text-white font-semibold' href='/about'>
                    About
                  </a>
                  <a className='text-white font-semibold' href='/menu'>
                    Menu
                  </a>
                  <a className='text-white font-semibold' href='/contact'>
                    Contact
                  </a>
                  <a href='/orders' className='text-white font-semibold'>
                    Orders
                  </a>
                  <a
                    href='#'
                    onClick={() => {
                      dispatch(logoutUser());
                    }}
                    className='text-white font-semibold'>
                    Logout
                  </a>
                </>
              ) : (
                <>
                  <a className='text-white font-semibold' href='/'>
                    Home
                  </a>
                  <a className='text-white font-semibold' href='/about'>
                    About
                  </a>
                  <a className='text-white font-semibold' href='/menu'>
                    Menu
                  </a>
                  <a className='text-white font-semibold' href='/contact'>
                    Contact
                  </a>
                  <a className='text-white font-semibold' href='/login'>
                    Login
                  </a>
                </>
              )}

              <a
                className='text-white font-semibold flex items-center'
                href='/cart'>
                Cart
                <i className='fas fa-shopping-cart ml-1'></i>
                <span className='ml-1'>{cartstate.cartItems.length}</span>
              </a>
            </div>
            <button
              className='navbar-toggler lg:hidden'
              type='button'
              onClick={toggleMenu}>
              <span className='navbar-toggler-icon'>
                <i className='fas fa-bars text-white'></i>
              </span>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out lg:hidden ${
                isOpen ? "block" : "hidden"
              }`}>
              <ul className='flex flex-col space-y-2'>
                {currentUser ? (
                  <>
                    <li>
                      <a
                        href='/'
                        className='text-white font-semibold block'>
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href='/about'
                        className='text-white font-semibold block'>
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href='/menu'
                        className='text-white font-semibold block'>
                        Menu
                      </a>
                    </li>
                    <li>
                      <a
                        href='/contact'
                        className='text-white font-semibold block'>
                        Contact
                      </a>
                    </li>
                    <li>
                      <a
                        href='/orders'
                        className='text-white font-semibold block'>
                        Orders
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        onClick={() => {
                          dispatch(logoutUser());
                        }}
                        className='text-white font-semibold block'>
                        Logout
                      </a>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <a
                        href='/'
                        className='text-white font-semibold block'>
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href='/about'
                        className='text-white font-semibold block'>
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href='/menu'
                        className='text-white font-semibold block'>
                        Menu
                      </a>
                    </li>
                    <li>
                      <a
                        href='/contact'
                        className='text-white font-semibold block'>
                        Contact
                      </a>
                    </li>
                    <li>
                      <a
                        className='text-white font-semibold block'
                        href='/login'>
                        Login
                      </a>
                    </li>
                  </>
                )}

                <li>
                  <a className='text-white font-semibold block' href='/cart'>
                    Cart{" "}
                    <span className='ml-1'>{cartstate.cartItems.length}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
