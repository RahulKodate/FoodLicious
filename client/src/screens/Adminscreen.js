import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";

import Addpizza from "./Addpizza";
import Editpizza from "./Editpizza";
import Orderslist from "./Orderslist";
import Pizzaslist from "./Pizzaslist";
import Userslist from "./Userslist";

export default function Adminscreen() {
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser.isAdmin) {
      window.location.href = "/";
    }
  }, []);

  return (

    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-6 flex-1">
        <h2 className="flex text-3xl font-bold mb-6 items-center justify-center text-blue-500">Admin Panel</h2>

        <div className="flex justify-center">
  <ul className="flex flex-wrap space-x-4 mb-8">
    <li>
      <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md bg-gradient-to-r shadow transition ease-out from-cyan-500 to-blue-500 hover:from-pink-500 hover:to-yellow-500 hover:shadow-pink-500/100">
        <Link className="text-white" to={"/admin/userslist"}>
          <i className="fas fa-users mr-2"></i>
          Users List
        </Link>
      </button>
    </li>

    <li>
      <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md bg-gradient-to-r shadow transition ease-out from-cyan-500 to-blue-500 hover:from-pink-500 hover:to-yellow-500 hover:shadow-pink-500/100">
        <Link className="text-white" to={"/admin/pizzaslist"}>
          <i className="fas fa-pizza-slice mr-2"></i>
          Dish List
        </Link>
      </button>
    </li>

    <li>
    <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md bg-gradient-to-r shadow transition ease-out from-cyan-500 to-blue-500 hover:from-pink-500 hover:to-yellow-500 hover:shadow-pink-500/100">
        <Link className="text-white" to={"/admin/addpizza"}>
          <i className="fas fa-plus-square mr-2"></i>
          Add Dish
        </Link>
      </button>
    </li>

    <li>
    <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md bg-gradient-to-r shadow transition ease-out from-cyan-500 to-blue-500 hover:from-pink-500 hover:to-yellow-500 hover:shadow-pink-500/100">
        <Link className="text-white" to={"/admin/orderslist"}>
          <i className="fas fa-clipboard-list mr-2"></i>
          Orders List
        </Link>
      </button>
    </li>
  </ul>
</div>



        <Switch>
          <Route path="/admin" component={Userslist} exact />
          <Route path="/admin/userslist" component={Userslist} exact/>
          <Route path="/admin/orderslist" component={Orderslist} exact/>
          <Route path="/admin/pizzaslist" component={Pizzaslist} exact/>
          <Route path="/admin/addpizza" component={Addpizza} exact/>
          <Route path="/admin/editpizza/:pizzaid" component={Editpizza} exact/>
          {/* Other Routes */}
        </Switch>
      </div>
    </div>

    // <div>
    //   <div className="row justify-content-center p-3">
    //     <div className="col-md-10">
    //       <h2 style={{ fontSize: "35px" }}>Admin Panel</h2>

    //       <ul className="adminfunctions">
    //         <li>
    //           <Link to={'/admin/userslist'} style={{color: 'white'}}>Users List</Link>
    //         </li>
    //         <li>
    //         <Link to={'/admin/pizzaslist'} style={{color: 'white'}}>Pizzas List</Link>
    //         </li>
    //         <li>
    //         <Link to={'/admin/addpizza'} style={{color: 'white'}}>Add Pizza</Link>
    //         </li>
    //         <li>
    //         <Link to={'/admin/orderslist'} style={{color: 'white'}}>Orders List</Link>
    //         </li>

            
    //       </ul>


    //       <Switch>
    //       <Route path="/admin" component={Userslist} exact/>
    //           <Route path="/admin/userslist" component={Userslist} exact/>
    //           <Route path="/admin/orderslist" component={Orderslist} exact/>
    //           <Route path="/admin/pizzaslist" component={Pizzaslist} exact/>
    //           <Route path="/admin/addpizza" component={Addpizza} exact/>
    //           <Route path="/admin/editpizza/:pizzaid" component={Editpizza} exact/>
    //       </Switch>
    //     </div>
    //   </div>
    // </div>
  );
}
