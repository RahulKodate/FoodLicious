import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../actions/orderActions";
import Error from "../components/Error";
import Filter from "../components/Filter";
import Loading from "../components/Loading";
import { deleteUser, getAllUsers } from "../actions/userActions";
export default function Userslist() {
  const dispatch = useDispatch();
  const usersstate = useSelector((state) => state.getAllUsersReducer);
  const { error, loading, users } = usersstate;
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  return (
    <div>
      <div className='flex items-center justify-center'>
        <h1 className='flex font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-600'>Users list</h1>
      </div>

      {loading && <Loading />}
      {error && <Error error='Something went wrong' />}
      <div className='overflow-hidden rounded-[15px] border border-gray-200 shadow-md m-5'>
        <table className='w-full border-collapse bg-white text-left text-sm text-gray-500'>
          <thead className='bg-gray-200'>
            <tr>
              <th className='px-6 py-4 text-left text-xs font-medium text-gray-900 uppercase tracking-wider'>
                User Id
              </th>
              <th className='px-6 py-4 text-left text-xs font-medium text-gray-900 uppercase tracking-wider'>
                Name
              </th>
              <th className='px-6 py-4 text-left text-xs font-medium text-gray-900 uppercase tracking-wider'>
                Email
              </th>
              <th className='px-6 py-4 text-left text-xs font-medium text-gray-900 uppercase tracking-wider'>
                Delete
              </th>
            </tr>
          </thead>

          <tbody className='divide-y divide-gray-100 border-t border-gray-100'>
            {users &&
              users.map((user) => {
                return (
                  <tr class='hover:bg-gray-50' key={user._id}>
                    <td className='px-6 py-4 whitespace-nowrap'>{user._id}</td>
                    <td className='px-6 py-4 whitespace-nowrap'>{user.name}</td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      {user.email}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <i
                        className='fa fa-trash text-red-500 cursor-pointer'
                        onClick={() => {
                          dispatch(deleteUser(user._id));
                        }}></i>
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
