import React , {useState, useEffect} from 'react'
import {useDispatch , useSelector} from 'react-redux'
import { getUserOrders } from '../actions/orderActions'
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from '../components/Success'
import AOS from 'aos'
import 'aos/dist/aos.css';
export default function Ordersscreen() {
    
    AOS.init()
    const dispatch = useDispatch()
    const orderstate = useSelector(state=>state.getUserOrdersReducer)
    const {orders , error , loading} = orderstate

    useEffect(() => {

        dispatch(getUserOrders())
      
    }, [])

    return (
      <div className='m-10'>
        <div className="flex container mx-10 px-4 items-center justify-center">
    <h2 className="text-3xl m-7 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-600">My Orders</h2>
    </div>
    <div className="container mx-10 px-4 items-center justify-center">
    <div className="grid grid-cols-1 gap-6">
      {loading && <Loading />}
      {error && <Error error="Something went wrong" />}
      {orders &&
        orders.map((order) => (
          <div
            key={order._id}
            className="col-span-1 bg-slate-100 text-slate-800 p-4 rounded-lg shadow-md"
            data-aos="fade-down"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="col-span-1">
                <h2 className="text-2xl mb-2">Items</h2>
                <hr className="border-white mb-2" />
                {order.orderItems.map((item) => (
                  <p key={item._id}>
                    Dish Name: {item.name} <br></br>
                    Varient: ({item.varient}) <br></br>
                    Dish Quantity: {item.quantity} <br></br>
                    Dish Total: ${item.price}
                  </p>
                ))}
              </div>
              <div className="col-span-1">
                <h2 className="text-2xl mb-2">Address</h2>
                <hr className="border-white mb-2" />
                <p>Street : {order.shippingAddress.street}</p>
                <p>City : {order.shippingAddress.city}</p>
                <p>Country : {order.shippingAddress.country}</p>
                <p>Pincode : {order.shippingAddress.pincode}</p>
              </div>
              <div className="col-span-1">
                <h2 className="text-2xl mb-2">Order Info</h2>
                <hr className="border-white mb-2" />
                <p>Order Amount : ${order.orderAmount}</p>
                <p>Date : {order.createdAt.substring(0, 10)}</p>
                <p>Transaction Id : {order.transactionId}</p>
                <p>Order Id : {order._id}</p>
                <p className='flex text-green-500'>Order Status: {order.isDelivered ? "Order is Delivered" : "Pending"}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  </div>
  </div>
    )
}
