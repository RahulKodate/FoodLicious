import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterPizzas } from '../actions/pizzaActions';

export default function Filter() {
  const dispatch = useDispatch();
  const [searchkey, setsearchkey] = useState('');
  const [category, setcategory] = useState('all');

  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center bg-white shadow-lg p-4 mb-5 rounded-lg">
        <div className="w-full md:w-1/3">
          <input
            onChange={(e) => {
              setsearchkey(e.target.value);
            }}
            value={searchkey}
            type="text"
            className="w-full p-2 border border-gray-300 focus:border-green-400 rounded"
            placeholder="Search Dish"
          />
        </div>
        <div className="w-full md:w-1/3 mt-2 md:mt-0 md:ml-2">
          <select
            className="w-full p-2 border border-gray-300 focus:border-green-400 rounded"
            value={category}
            onChange={(e) => setcategory(e.target.value)}
          >
            <option value="all">All</option>
            <option value="veg">Veg</option>
            <option value="nonveg">Non Veg</option>
            <option value="indian">Indian</option>
            <option value="mexican">Mexican</option>
          </select>
        </div>
        <div className="w-full md:w-1/3 mt-2 md:mt-0 md:ml-2">
          <button
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => {
              dispatch(filterPizzas(searchkey, category));
            }}
          >
            FILTER
          </button>
        </div>
      </div>
    </div>
  );
}
