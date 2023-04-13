import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas } from "../actions/pizzaActions";
import Error from "../components/Error";
import Filter from "../components/Filter";
import Loading from "../components/Loading";
import Pizza from "../components/Pizza";

export default function Homescreen() {
  const dispatch = useDispatch();

  const pizzasstate = useSelector((state) => state.getAllPizzasReducer);

  const { pizzas, error, loading } = pizzasstate;

  useEffect(() => {
    dispatch(getAllPizzas());
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen bg-menu">
    <div className="min-h-screen bg-menu1">
    <div className="py-8">
      <Filter />
    </div>
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
      {loading ? (
        <Loading />
      ) : error ? (
        <Error error="Something went wrong" />
      ) : (
        pizzas.map((pizza) => {
          return (
            <div className="col-span-1" key={pizza._id}>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
                <Pizza pizza={pizza} />
              </div>
            </div>
          );
        })
      )}
    </div>
    </div>
  </div>
  );
}
