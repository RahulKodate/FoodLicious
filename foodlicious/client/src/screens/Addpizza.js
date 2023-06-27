import React, { useState, useEffect } from "react";
import { useDispatch , useSelector } from 'react-redux'
import { addPizza } from "../actions/pizzaActions";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from '../components/Success'
export default function Addpizza() {
  const [name, setname] = useState("");
  const [smallprice, setsmallprice] = useState();
  const [mediumprice, setmediumprice] = useState();
  const [largeprice, setlargeprice] = useState();
  const [image, setimage] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");
  
  const dispatch = useDispatch()

  const addpizzastate = useSelector(state=>state.addPizzaReducer)
  const {success , error , loading} = addpizzastate
  function formHandler(e){

    e.preventDefault();

    const pizza ={
        name ,
        image,
        description,
        category,
        prices:{
            small : smallprice,
            medium : mediumprice,
            large : largeprice
        }
    }

    console.log(pizza);
    dispatch(addPizza(pizza));

  }

  function resetForm() {
    setname("");
    setsmallprice("");
    setmediumprice("");
    setlargeprice("");
    setcategory("");
    setdescription("");
    setimage("");
  }

  useEffect(() => {
    if (success) {
      resetForm();
    }
  }, [success]);
  

  return (
    <div>
    <div className="w-full max-w-xl mx-auto">
    <div className='flex items-center justify-center'>
      <h1 className='flex font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-600'>Add Dish</h1>
    </div>
    <br></br>
    {loading && <Loading />}
    {error && <Error error="Something went wrong" />}
    {success && <Success success="New Pizza added successfully" />}

    <form onSubmit={formHandler} className="space-y-4">
      <input
        className="w-full px-4 py-2 border border-green-400 rounded"
        type="text"
        placeholder="Dish Name"
        value={name}
        onChange={(e) => {
          setname(e.target.value);
        }}
      />
      <input
        className="w-full px-4 py-2 border border-green-400 rounded"
        type="text"
        placeholder="Small Varient Price"
        value={smallprice}
        onChange={(e) => {
          setsmallprice(e.target.value);
        }}
      />
      <input
        className="w-full px-4 py-2 border border-green-400 rounded"
        type="text"
        placeholder="Medium Varient Price"
        value={mediumprice}
        onChange={(e) => {
          setmediumprice(e.target.value);
        }}
      />
      <input
        className="w-full px-4 py-2 border border-green-400 rounded"
        type="text"
        placeholder="Large Varient Price"
        value={largeprice}
        onChange={(e) => {
          setlargeprice(e.target.value);
        }}
      />
      <input
        className="w-full px-4 py-2 border border-green-400 rounded"
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => {
          setcategory(e.target.value);
        }}
      />
      <input
        className="w-full px-4 py-2 border border-green-400 rounded"
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => {
          setdescription(e.target.value);
        }}
      />
      <input
        className="w-full px-4 py-2 border border-green-400 rounded"
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => {
          setimage(e.target.value);
        }}
      />
      {/* Other input fields */}
      <button
        className="w-full px-4 py-2 font-semibold text-white bg-green-500 rounded hover:bg-green-700"
        type="submit"
      >
        Add Pizza
      </button>
    </form>
  </div>
  </div>
    // <div>
    //   <div className='text-left shadow-lg p-3 mb-5 bg-white rounded'>
    //     <h1>Add Pizza</h1>

    //     {loading && (<Loading/>)}
    //     {error && (<Error error='Something went wrong'/>)}
    //     {success && (<Success success='New Pizza added successfully'/>)}

    //     <form onSubmit={formHandler}>
    //       <input
    //         className="form-control"
    //         type="text"
    //         placeholder="name"
    //         value={name}
    //         onChange={(e) => {
    //           setname(e.target.value);
    //         }}
    //       />
    //       <input
    //         className="form-control"
    //         type="text"
    //         placeholder="small varient price"
    //         value={smallprice}
    //         onChange={(e) => {
    //           setsmallprice(e.target.value);
    //         }}
    //       />
    //       <input
    //         className="form-control"
    //         type="text"
    //         placeholder="medium varient price"
    //         value={mediumprice}
    //         onChange={(e) => {
    //           setmediumprice(e.target.value);
    //         }}
    //       />
    //       <input
    //         className="form-control"
    //         type="text"
    //         placeholder="large varient price"
    //         value={largeprice}
    //         onChange={(e) => {
    //           setlargeprice(e.target.value);
    //         }}
    //       />
    //       <input
    //         className="form-control"
    //         type="text"
    //         placeholder="category"
    //         value={category}
    //         onChange={(e) => {
    //           setcategory(e.target.value);
    //         }}
    //       />
    //       <input
    //         className="form-control"
    //         type="text"
    //         placeholder="description"
    //         value={description}
    //         onChange={(e) => {
    //           setdescription(e.target.value);
    //         }}
    //       />
    //       <input
    //         className="form-control"
    //         type="text"
    //         placeholder="image url"
    //         value={image}
    //         onChange={(e) => {
    //           setimage(e.target.value);
    //         }}
    //       />
    //       <button className='btn mt-3' type='submit'>Add Pizza</button>
    //     </form>
    //   </div>
    // </div>
    
  );
}
