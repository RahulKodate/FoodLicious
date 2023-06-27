import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deliverOrder, getAllOrders } from "../actions/orderActions";
import Error from "../components/Error";
import Filter from "../components/Filter";
import Loading from "../components/Loading";
export default function Orderslist() {
  const dispatch = useDispatch();
  const getordersstate = useSelector((state) => state.getAllOrdersReducer);
  const { loading, error, orders } = getordersstate;
  useEffect(() => {
    dispatch(getAllOrders());
  }, []);
  return (
    <div>
    <div className='flex items-center justify-center'>
      <h1 className='flex font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-600'>Orders List</h1>
    </div>
    {loading && <Loading />}
    {error && <Error error="Something went wrong" />}
    <div className="overflow-hidden rounded-[15px] border border-gray-200 shadow-md m-5">
      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-6 py-4 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
              Order Id
            </th>
            <th className="px-6 py-4 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-4 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
              User Id
            </th>
            <th className="px-6 py-4 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
              Amount
            </th>
            <th className="px-6 py-4 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-4 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
              Status
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
          {orders &&
            orders.map((order) => {
              return (
                <tr className="hover:bg-gray-50" key={order._id}>
                  <td className="px-6 py-4 whitespace-nowrap">{order._id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{order.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{order.userid}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{order.orderAmount}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {order.createdAt.substring(0, 10)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {order.isDelivered ? (
                      <h1 className="text-sm text-green-600">Delivered</h1>
                    ) : (
                      <button
                        className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md"
                        onClick={() => {
                          dispatch(deliverOrder(order._id));
                        }}
                      >
                        Deliver
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  </div>
  );
}
