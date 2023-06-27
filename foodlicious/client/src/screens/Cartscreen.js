import React from 'react'
import {useSelector , useDispatch} from 'react-redux'
import {addToCart} from '../actions/cartActions'
import {deleteFromCart} from '../actions/cartActions'
import Checkout from '../components/Checkout'
import AOS from 'aos'
import 'aos/dist/aos.css';
export default function Cartscreen() {
    
    AOS.init()
    const cartstate = useSelector(state=>state.cartReducer)
    const cartItems = cartstate.cartItems
    var subtotal = cartItems.reduce((x , item)=> x+item.price , 0)
    const dispatch = useDispatch()
    return (
        <div className="container mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <div className="col-span-1">
        <h2 className="text-4xl mb-4">My Cart</h2>

        {cartItems.map((item) => (
          <div className="flex items-center border-b border-gray-200 py-4" key={item.id}>
            <div className="flex-none w-20 h-20 mr-4">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-grow">
              <h1 className="text-xl font-semibold mb-1">
                {item.name} [{item.varient}]
              </h1>
              <h1 className="text-base font-medium mb-2">
                Price : {item.quantity} x ${item.prices[0][(item.varient)]} = ${item.price}
              </h1>
              <div className="flex items-center space-x-4">
                <h1 className="text-base font-medium">Quantity :</h1>
                <button
                  className="bg-gray-300 rounded px-2"
                  onClick={() => {
                    dispatch(addToCart(item, item.quantity + 1, item.varient));
                  }}
                >
                  <i className="fa fa-plus" aria-hidden="true"></i>
                </button>
                <span className="font-semibold">{item.quantity}</span>
                <button
                  className="bg-gray-300 rounded px-2"
                  onClick={() => {
                    dispatch(addToCart(item, item.quantity - 1, item.varient));
                  }}
                >
                  <i className="fa fa-minus" aria-hidden="true"></i>
                </button>
              </div>
            </div>
            <div className="flex-none">
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => {
                  dispatch(deleteFromCart(item));
                }}
              >
                <i className="fa fa-trash" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="col-span-1 text-right">
        <h2 className="text-4xl mb-4">SubTotal : ${subtotal}</h2>
        <Checkout subtotal={subtotal} />
      </div>
    </div>
  </div>
    )
}
