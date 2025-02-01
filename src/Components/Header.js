import {Link} from "react-router"
import useOnlineStatus from "../utils/useOnlineStatus";
import  UserContext  from "../utils/UserContext";
import { useContext } from "react";
import {useSelector} from "react-redux";
const Header = () => {
    
    const stus = useOnlineStatus();
 
    const data = useContext(UserContext);
    
    const cartItems = useSelector((store)=> store.cart.items)
    
   return ( 

      
      <div className="flex justify-between bg-pink-100 shadow-lg">
          <div className="w-40 pl-2">
              <img className="logo" src ="https://marketplace.canva.com/EAF1XAgJrCg/1/0/1600w/canva-white-brown-simple-restaurant-logo-koIA1HEug0Q.jpg"></img>
          </div>
          <div className="flex items-center">
              <ul className="flex p-4 m-4">
                  <li className="px-3">Online Status{stus ? "🟢":"🔴"}</li>
                  <li className="px-3"><Link to="/">Home</Link></li>
                  <li className="px-3"><Link to="/about">About Us</Link></li>
                  <li className="px-3">Contact Us</li>
                  <li className="px-3 font-bold"><Link to="/cart">Cart ({cartItems.length})</Link></li>
                  <li className="px-3"><Link to ="/Grocery">Grocery</Link></li>
                  <li className="px-3"><button>login</button></li>
              </ul>
          </div>
      </div>
  );}

export default Header ;