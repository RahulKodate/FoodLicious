import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartActions";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Pizza({ pizza }) {
  AOS.init({});

  const [quantity, setquantity] = useState(1);
  const [varient, setvarient] = useState("small");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  function addtocart() {
    dispatch(addToCart(pizza, quantity, varient));
  }

  return (
    <div>
    <div
    data-aos="zoom-in"
    className="bg-white shadow-lg rounded-lg p-4"
    key={pizza._id}
  >
    <div onClick={handleShow} className="cursor-pointer">
      <h1 className="text-xl font-bold mb-2">{pizza.name}</h1>
      <img
        src={pizza.image}
        className="img-fluid rounded w-full h-48 object-cover"
      />
    </div>

    <div className="flex flex-wrap mt-3">
      <div className="w-full md:w-1/2 px-1 mb-2 md:mb-0">
        <p>Variants</p>
        <select
          className="form-control w-full"
          value={varient}
          onChange={(e) => {
            setvarient(e.target.value);
          }}
        >
          {pizza.varients.map((varient) => {
            return <option value={varient}>{varient}</option>;
          })}
        </select>
      </div>

      <div className="w-full md:w-1/2 px-1">
        <p>Quantity</p>
        <select
          className="form-control w-full"
          value={quantity}
          onChange={(e) => {
            setquantity(e.target.value);
          }}
        >
          {[...Array(10).keys()].map((x, i) => {
            return <option value={i + 1}>{i + 1}</option>;
          })}
        </select>
      </div>
    </div>

    <div className="mt-3">
      <div className="w-full md:w-1/2 px-1 mb-2 md:mb-0">
        <h1 className="font-semibold text-lg mt-1">
          Price: $ {pizza.prices[0][varient] * quantity}
        </h1>
      </div>
      <div className="w-full">
        <button
          className="w-full bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white font-semibold py-2 px-1.5 rounded"
          onClick={addtocart}
        >
          Add to Cart
        </button>
      </div>
      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{pizza.name}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <img
          src={pizza.image}
          className="img-fluid rounded w-full h-96 object-cover"
        />
        <p>{pizza.description}</p>
      </Modal.Body>

      <Modal.Footer>
        <button className="btn" onClick={handleClose}>
          CLOSE
        </button>
      </Modal.Footer>
    </Modal>
    </div>
    </div>
  </div>
  );
}
