import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deletePizza, getAllPizzas } from "../actions/pizzaActions";
import Error from "../components/Error";
import Filter from "../components/Filter";
import Loading from "../components/Loading";

export default function Pizzaslist() {
  const dispatch = useDispatch();

  const pizzasstate = useSelector((state) => state.getAllPizzasReducer);

  const { pizzas, error, loading } = pizzasstate;
  useEffect(() => {
    dispatch(getAllPizzas());
  }, []);

  return (
    <div>
      <div className='flex items-center justify-center'>
        <h2 className='flex font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-600'>Dish List</h2>
      </div>
      {loading && <Loading />}
      {error && <Error error="Something went wrong" />}

      <div className='overflow-hidden rounded-[15px] border border-gray-200 shadow-md m-5'>
        <table className='w-full border-collapse bg-white text-left text-sm text-gray-500'>
          <thead className='bg-gray-200'>
            <tr>
              <th className='px-6 py-4 text-left text-xs font-medium text-gray-900 uppercase tracking-wider'>
                Name
              </th>
              <th className='px-6 py-4 text-left text-xs font-medium text-gray-900 uppercase tracking-wider'>
                Prices
              </th>
              <th className='px-6 py-4 text-left text-xs font-medium text-gray-900 uppercase tracking-wider'>
                Category
              </th>
              <th className='px-6 py-4 text-left text-xs font-medium text-gray-900 uppercase tracking-wider'>
                Actions
              </th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-100 border-t border-gray-100'>
            {pizzas &&
              pizzas.map((pizza) => {
                return (
                  <tr className='hover:bg-gray-50' key={pizza._id}>
                    <td className='px-6 py-4 whitespace-nowrap'>{pizza.name}</td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      Small: {pizza.prices[0]["small"]} <br />
                      Medium: {pizza.prices[0]["medium"]} <br />
                      Large: {pizza.prices[0]["large"]}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>{pizza.category}</td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <i
                        className='fa fa-trash text-red-500 cursor-pointer mr-2'
                        onClick={() => {
                          dispatch(deletePizza(pizza._id));
                        }}
                      ></i>
                      <Link to={`/admin/editpizza/${pizza._id}`}>
                        <i className='fa fa-edit text-blue-500 cursor-pointer'></i>
                      </Link>
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
